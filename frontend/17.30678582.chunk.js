(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[17],{359:function(e,a,t){"use strict";var i=t(0),o=t(69),s=t(70);const n=o.a.div`

  font-weight: ${s.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${s.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${s.a.fontWeight.bold}
  }
`;var r=t(4);var l=e=>{let{name:a,addressLines:t=[],phones:i=[],emails:o=[],viewMapUrl:s}=e;return Object(r.jsxs)(n,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-bold",children:a})}),t.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-white",children:e})},a))),Object(r.jsx)("br",{}),i.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},a))),o.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},a))),Object(r.jsx)("br",{}),Object(r.jsx)("a",{target:"_blank",href:s,className:"text-yellow",children:"View Map"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"flex-container ",children:[Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const c=o.a.div`
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

`;var d=e=>{let{slides:a=[1,2,3],current:t=0}=e;return Object(r.jsx)(c,{current:t,children:Object(r.jsx)("div",{className:"slides-wrapper flex-container",children:a.map(((e,a)=>Object(r.jsx)("div",{className:"slide",children:e},a)))})})};var m={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const p=o.a.div`
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
`;var x=()=>{const[e,a]=Object(i.useState)(0);return Object(r.jsxs)(p,{children:[Object(r.jsx)("ul",{className:"flex-container country-flag-container",children:m.countries.map(((t,i)=>Object(r.jsx)("li",{className:"country-icon-li",children:Object(r.jsx)("div",{onClick:()=>a(i),children:Object(r.jsx)("img",{className:i===e?"country-icon active":"country-icon",src:t.countryIconImage})})},i)))}),Object(r.jsx)("div",{children:Object(r.jsx)(d,{slides:m.countries.map((e=>Object(r.jsx)(l,{...e},e.name))),current:e})})]})};var b={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const h=o.a.footer`
  .heading {
    font-weight: ${s.a.fontWeight.extrabold};
    font-family: ${s.a.font.primary};
    font-size: ${s.a.fontSize.xs};
    color: ${s.a.color.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .gap {
    gap: 40px;
  }

  .normal-text {
    font-weight: ${s.a.fontWeight.hairline};
    font-family: ${s.a.font.primary};
    font-size: ${s.a.fontSize.xs};
  }

  .margin-b-40 {
    margin-bottom: 40px;
  }

  .small-text {
    font-weight: ${s.a.fontWeight.hairline};
    font-family: ${s.a.font.primary};
    font-size: ${s.a.fontSize.xs2};
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
    font-size: ${s.a.fontSize.xs};
    font-family: ${s.a.font.primary};
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
      color: ${s.a.color.white} !important;
    }
  }
  .text-yellow {
    color:  ${s.a.color.primary} !important;
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
`;var g=t(357);a.a=()=>Object(r.jsx)(h,{children:Object(r.jsx)("div",{className:"footer-content",children:Object(r.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{className:"margin-b-40",children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(g.a,{id:"Informasi"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:b.information.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",href:e.link,children:Object(r.jsx)(g.a,{id:e.label})})})))})]})}),Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(g.a,{id:"Perusahaan"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:b.company.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(r.jsx)(g.a,{id:e.label})})})))})]})}),Object(r.jsxs)("div",{className:"address-container text-small",children:[Object(r.jsx)("h3",{className:"text-strong heading",children:Object(r.jsx)(g.a,{id:"Kantor kami"})}),Object(r.jsx)(x,{})]})]})})})},639:function(e,a,t){"use strict";t.r(a);var i=t(0),o=t(49),s=t(359),n=t(69);var r=n.a.div`
::-webkit-scrollbar-thumb {
  background: #fad200 !important;
}

/* container classes */

.sectionContainer {
  min-height: 70vh;
  padding: 30px;
}
.flexContainer {
  display: flex;
  align-items: center;
}

/* padding classes */
.padding15 {
  padding: 15px;
}


/* margin classes */


/* text alignment */

.text-center {
  text-align: center;
}
.text-right{
  text-align:right
}

/* tag classes */
p {
  margin-bottom: 20px;
}

/* color class */

.colorWhite {
  color: #fff;
}
.colorYellow {
  color: #fad200;
}

/* button style */


.btn {
  border-radius: 4px;
  font-size: 15px;
}
.btn-warning {
  border-color: #fad200;
  background: #fad200;
  color: #000000;
  transition: 0.7 all ease-in
}
.btn-warning:hover {
  border-color: #1450a0;
  background: #1450a0;
  color: #ffffff;
}
.btn-lg {
  height: 40px;
}
.btn-block {
  display: block;
  width: 100%;
}

/* carousel custom design */

.ant-carousel .slick-slide img {
  margin: auto;
}
.ant-carousel .slick-dots {
  bottom: -20px;
}
.ant-carousel .slick-dots li button {
  transition: all .7s;
  background: #e5e5e5;
  height: 4px;
  border-radius: 10px;
}
.ant-carousel .slick-dots li.slick-active button, .ant-carousel .slick-dots li.slick-active button:hover, .ant-carousel .slick-dots li.slick-active button:focus {
  background: #FAD205;

}
`,l=t(70),c=n.a.div`
  .claim {
    &__main-section {
      position: relative;
    }
    &__process-section {
      margin-top: -4rem;
      background-color: ${l.a.color.lightGray};
      padding: 8rem 4rem;
      &--heading {
        font-size: ${l.a.fontSize.xl};
        font-weight: ${l.a.fontWeight.bold};
        font-family: ${l.a.font.primary};
        text-align: center;
        margin-bottom: 40px;
      }
    }
    &__flex-container {
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: stretch;
    }
    &__steps {
      &--card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 280px;
        padding: 32px 24px;
        background-color: ${l.a.color.white};
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      }
      &--badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        margin-bottom: 16px;
        border-radius: 50%;
        background-color: ${l.a.color.primary};
        color: ${l.a.color.black};
        font-family: ${l.a.font.primary};
        font-size: ${l.a.fontSize.base};
        font-weight: ${l.a.fontWeight.bold};
      }
      &--icon {
        width: 88px;
        height: 88px;
        margin-bottom: 12px;
        color: ${l.a.color.bold};
        svg {
          width: 100%;
          height: 100%;
        }
      }
      &--title {
        margin-bottom: 8px;
        font-family: ${l.a.font.primary};
        font-size: ${l.a.fontSize.lg};
        font-weight: ${l.a.fontWeight.bold};
        color: ${l.a.color.bold};
        text-align: center;
      }
      &--text {
        font-size: ${l.a.fontSize.sm};
        font-family: ${l.a.font.primary};
        color: ${l.a.color.mediumGray};
        line-height: 1.5;
        text-align: center;
        padding: 0;
      }
    }
    &__theme-color {
      color: ${l.a.color.primary};
    }
  }
  @media(max-width: ${l.a.layout.tablet}) {
    .claim {
      &__process-section {
        margin-top: -3rem;
        padding: 5rem 2rem;
      }
      &__flex-container {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }
      &__steps {
        &--card {
          max-width: 420px;
          padding: 24px;
        }
        &--icon {
          width: 64px;
          height: 64px;
        }
        &--title {
          font-size: ${l.a.fontSize.base};
        }
      }
    }
  }
`,d=t(357),m=n.a.div`
  .section {
    &__container {
      height: calc(100vh - 200px);
      min-height: 650px;
      background-image: url('${e=>e.bgDesktop}');
      background-size: 90%;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
      padding: 0 15px;
    }
    &__heading {
      text-align: center;
      font-size: ${l.a.fontSize.xl5};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${l.a.font.primary};
      font-weight: ${l.a.fontWeight.extrabold};
    }
    &__sub-heading {
      font-family: ${l.a.font.primary};
      color: ${l.a.color.mediumGray};
      font-size: ${l.a.fontSize.lg};
      text-align: center;
      margin-bottom: 30px;
    }
    &__button {
      display: inline-block;
      background-color: ${l.a.color.primary};
      color: ${l.a.color.black};
      padding: 15px 40px;
      border: none;
      border-radius: 30px;
      text-transform: uppercase;
      text-decoration: none;
      font-size: ${l.a.fontSize.base};
      font-weight: ${l.a.fontWeight.bold};
    }
    &__theme-color {
      color: ${l.a.color.primary}!important;
    }
  }
  @media(max-width: ${l.a.layout.tablet}) {
    .section {
      &__container {
        background-image: url('${e=>e.bgMobile}');
        min-height: 600px;
        background-size: 100%;
      }
      &__heading {
        font-size: ${l.a.fontSize.xl};
        padding: 30px 4rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${l.a.fontSize.base};
      }
    }
  }
`,p=t(4);var x=e=>Object(p.jsx)(m,{className:e.className,bgDesktop:e.BgImages.desktop,bgMobile:e.BgImages.mobile,children:Object(p.jsxs)("section",{className:"section__container",children:[Object(p.jsx)("h1",{className:"section__heading",children:Object(p.jsx)(d.a,{id:"Klaim Asuransi {br}<span>Jadi Lebih Mudah</span>",values:{span:e=>Object(p.jsx)("span",{className:"section__theme-color",children:e}),br:Object(p.jsx)("br",{})}})}),Object(p.jsx)("p",{className:"section__sub-heading",children:Object(p.jsx)(d.a,{id:e.content.subHeading})}),Object(p.jsx)("a",{className:"section__button",href:"https://policies.pasarpolis.io",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(d.a,{id:e.content.button})})]})});const b=e=>Object(p.jsx)("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e.children}),h={portal:()=>Object(p.jsxs)(b,{children:[Object(p.jsx)("rect",{x:"7",y:"13",width:"50",height:"38",rx:"4"}),Object(p.jsx)("line",{x1:"7",y1:"23",x2:"57",y2:"23"}),Object(p.jsx)("circle",{cx:"14",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"}),Object(p.jsx)("circle",{cx:"20",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"}),Object(p.jsx)("path",{d:"M32 31 L32 48 L36 44 L39 50 L42 48.5 L39 42.5 L44 42 Z",fill:l.a.color.primary,stroke:l.a.color.primary})]}),form:()=>Object(p.jsxs)(b,{children:[Object(p.jsx)("rect",{x:"15",y:"10",width:"34",height:"46",rx:"4"}),Object(p.jsx)("rect",{x:"25",y:"5",width:"14",height:"9",rx:"2"}),Object(p.jsx)("line",{x1:"23",y1:"26",x2:"41",y2:"26"}),Object(p.jsx)("line",{x1:"23",y1:"35",x2:"41",y2:"35"}),Object(p.jsx)("line",{x1:"23",y1:"44",x2:"33",y2:"44",stroke:l.a.color.primary})]}),verification:()=>Object(p.jsxs)(b,{children:[Object(p.jsx)("circle",{cx:"32",cy:"32",r:"24"}),Object(p.jsx)("polyline",{points:"32,16 32,32 43,38"}),Object(p.jsx)("circle",{cx:"48",cy:"48",r:"11",fill:l.a.color.white}),Object(p.jsx)("polyline",{points:"43,48 47,52 54,44",stroke:l.a.color.primary,strokeWidth:"3"})]}),disbursement:()=>Object(p.jsxs)(b,{children:[Object(p.jsx)("path",{d:"M26 25 L38 25 L47 44 C50 51 42 56 32 56 C22 56 14 51 17 44 Z"}),Object(p.jsx)("path",{d:"M26 25 L28 17 L36 17 L38 25"}),Object(p.jsx)("path",{d:"M28 17 L36 17 L34 9 L30 9 Z",fill:l.a.color.primary})]})};var g=e=>Object(p.jsxs)("section",{className:"claim__process-section",children:[Object(p.jsx)("h1",{className:"claim__process-section--heading",children:Object(p.jsx)(d.a,{id:"<span>Langkah Mudah Untuk</span> Klaim",values:{span:e=>Object(p.jsx)("span",{className:"claim__theme-color",children:e})}})}),Object(p.jsx)("div",{className:"claim__flex-container",children:e.steps.process.map(((e,a)=>{const t=h[e.key];return Object(p.jsxs)("div",{className:"claim__steps--card",children:[Object(p.jsx)("span",{className:"claim__steps--badge",children:a+1}),Object(p.jsx)("div",{className:"claim__steps--icon",children:Object(p.jsx)(t,{})}),Object(p.jsx)("h3",{className:"claim__steps--title",children:Object(p.jsx)(d.a,{id:e.title})}),Object(p.jsx)("p",{className:"claim__steps--text",children:Object(p.jsx)(d.a,{id:e.description})})]},e.key)}))})]}),j=n.a.div`
  .portal {
    &__container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 8rem 4rem;
    }
    &__row {
      display: flex;
      align-items: center;
      gap: 60px;
      margin-bottom: 80px;
    }
    &__row--reverse {
      flex-direction: row-reverse;
    }
    &__text {
      flex: 1;
    }
    &__heading {
      font-family: ${l.a.font.primary};
      font-size: ${l.a.fontSize.xl3};
      font-weight: ${l.a.fontWeight.bold};
      color: ${l.a.color.bold};
      margin-bottom: 16px;
    }
    &__body {
      font-family: ${l.a.font.primary};
      font-size: ${l.a.fontSize.lg};
      color: ${l.a.color.mediumGray};
      line-height: 1.6;
    }
    &__image {
      flex: 1;
      text-align: center;
      img {
        width: 100%;
        max-width: 400px;
        height: auto;
      }
    }
    &__cta-container {
      text-align: center;
    }
    &__cta {
      display: inline-block;
      padding: 15px 40px;
      border-radius: 30px;
      background-color: ${l.a.color.primary};
      color: ${l.a.color.black};
      font-family: ${l.a.font.primary};
      font-size: ${l.a.fontSize.base};
      font-weight: ${l.a.fontWeight.bold};
      text-transform: uppercase;
      text-decoration: none;
    }
  }
  @media(max-width: ${l.a.layout.tablet}) {
    .portal {
      &__container {
        padding: 5rem 2rem;
      }
      &__row {
        flex-direction: column;
        gap: 24px;
        margin-bottom: 48px;
      }
      &__row--reverse {
        flex-direction: column;
      }
      &__heading {
        font-size: ${l.a.fontSize.xl};
      }
      &__body {
        font-size: ${l.a.fontSize.base};
      }
      &__image {
        img {
          max-width: 280px;
        }
      }
    }
  }
`;var f=e=>Object(p.jsx)(j,{children:Object(p.jsxs)("section",{className:"portal__container",children:[e.content.blocks.map((e=>Object(p.jsxs)("div",{className:"portal__row"+("left"===e.imagePosition?" portal__row--reverse":""),children:[Object(p.jsxs)("div",{className:"portal__text",children:[Object(p.jsx)("h2",{className:"portal__heading",children:Object(p.jsx)(d.a,{id:e.heading})}),Object(p.jsx)("p",{className:"portal__body",children:Object(p.jsx)(d.a,{id:e.body})})]}),Object(p.jsx)("div",{className:"portal__image",children:Object(p.jsx)("img",{src:e.img,alt:""})})]},e.key))),Object(p.jsx)("div",{className:"portal__cta-container",children:Object(p.jsx)("a",{className:"portal__cta",href:"https://policies.pasarpolis.io",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(d.a,{id:e.content.cta})})})]})});const u={BgImages:{desktop:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/claim/claim-banner.png",mobile:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/claim/claim-banner-mobile.png"},content:{subHeading:"Ajukan klaim Anda langsung melalui Klaim Portal",button:"Kunjungi Klaim Portal"}},w={process:[{key:"portal",title:"Kunjungi Klaim Portal",description:"Masuk menggunakan nomor polis yang tertera di sertifikat polis, atau nomor ponsel beserta OTP Anda."},{key:"form",title:"Isi Form & Dokumen",description:"Lengkapi form klaim dan unggah dokumen sesuai dengan manfaat yang Anda pilih."},{key:"verification",title:"Proses Verifikasi",description:"Klaim dan dokumen Anda diperiksa oleh tim kami, dan Anda akan diberi tahu begitu prosesnya selesai."},{key:"disbursement",title:"Pencairan Dana",description:"Dana klaim ditransfer ke rekening bank Anda setelah klaim disetujui."}]},k={cta:"Kunjungi Klaim Portal",blocks:[{key:"portal",heading:"Klaim Portal",body:"Masuk ke Klaim Portal dengan nomor polis atau nomor ponsel Anda, lalu ajukan klaim dan pantau statusnya di satu tempat.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/claim_portal1.png",imagePosition:"right"},{key:"proactive",heading:"Sistem Klaim Proaktif",body:"Kami mendeteksi setiap polis yang diklaim dan langsung memberi tahu Anda. Hanya dengan beberapa klik dari notifikasi, dana klaim Anda dicairkan.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/claim_portal2.png",imagePosition:"left"},{key:"status",heading:"Status Klaim Bisa Anda Pantau",body:"Ikuti setiap tahap klaim Anda di Klaim Portal, dari dokumen diterima sampai klaim selesai.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/claim_portal3.png",imagePosition:"right"}]};class _ extends i.Component{render(){return Object(p.jsxs)(r,{children:[Object(p.jsxs)(c,{children:[Object(p.jsx)(x,{className:"claim__main-section",BgImages:u.BgImages,content:u.content}),Object(p.jsx)(g,{steps:w}),Object(p.jsx)(f,{content:k})]}),Object(p.jsx)(s.a,{})]})}}a.default=Object(o.b)()(_)}}]);
//# sourceMappingURL=17.30678582.chunk.js.map