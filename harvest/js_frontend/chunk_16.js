(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[16],{359:function(e,a,t){"use strict";var i=t(0),n=t(69),o=t(70);const s=n.a.div`

  font-weight: ${o.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${o.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${o.a.fontWeight.bold}
  }
`;var r=t(4);var l=e=>{let{name:a,addressLines:t=[],phones:i=[],emails:n=[],viewMapUrl:o}=e;return Object(r.jsxs)(s,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-bold",children:a})}),t.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-white",children:e})},a))),Object(r.jsx)("br",{}),i.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},a))),n.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},a))),Object(r.jsx)("br",{}),Object(r.jsx)("a",{target:"_blank",href:o,className:"text-yellow",children:"View Map"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"flex-container ",children:[Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const c=n.a.div`
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

`;var d=e=>{let{slides:a=[1,2,3],current:t=0}=e;return Object(r.jsx)(c,{current:t,children:Object(r.jsx)("div",{className:"slides-wrapper flex-container",children:a.map(((e,a)=>Object(r.jsx)("div",{className:"slide",children:e},a)))})})};var m={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const p=n.a.div`
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
`;var x=()=>{const[e,a]=Object(i.useState)(0);return Object(r.jsxs)(p,{children:[Object(r.jsx)("ul",{className:"flex-container country-flag-container",children:m.countries.map(((t,i)=>Object(r.jsx)("li",{className:"country-icon-li",children:Object(r.jsx)("div",{onClick:()=>a(i),children:Object(r.jsx)("img",{className:i===e?"country-icon active":"country-icon",src:t.countryIconImage})})},i)))}),Object(r.jsx)("div",{children:Object(r.jsx)(d,{slides:m.countries.map((e=>Object(r.jsx)(l,{...e},e.name))),current:e})})]})};var g={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const h=n.a.footer`
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
`;var b=t(357);a.a=()=>Object(r.jsx)(h,{children:Object(r.jsx)("div",{className:"footer-content",children:Object(r.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{className:"margin-b-40",children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Informasi"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:g.information.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",href:e.link,children:Object(r.jsx)(b.a,{id:e.label})})})))})]})}),Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Perusahaan"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:g.company.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(r.jsx)(b.a,{id:e.label})})})))})]})}),Object(r.jsxs)("div",{className:"address-container text-small",children:[Object(r.jsx)("h3",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Kantor kami"})}),Object(r.jsx)(x,{})]})]})})})},638:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(69),s=t(70),r=o.a.div`
  .about {
    &__main-section {
      position: relative;
      z-index: 1;
    }
    &__container {
      padding: 20vh 0px 40px 0px;
      margin-top: -10vh;
      background-color: ${s.a.color.lightGray};
      position: relative;
      z-index: 0;
    }
    &__heading {
      font-size: ${s.a.fontSize.xl2};
      font-family: ${s.a.font.primary};
      text-align: center;
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__leader-section {
      display: flex;
      gap: 40px;
      &--card {
        width: calc(20vw - 50px);
        img {
          width: 80%;
          height: 100%;
          object-fit: contain;
        }
      }
      &--container {
        overflow: hidden;
        max-width: 100%;
        padding: 0vh 40px;
        width: calc(100vw - 80px);
      }
    }
    &__slider-button {
      position: absolute;
      right: 2%;
      top: 50%;
      width: 40px;
      height: 40px;
      background: #fad20091;
      border-radius: 50%;
      cursor: pointer;
      &--arrow {
        border: solid white;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        transform: rotate(-45deg);
        position: absolute;
        top: 14px;
        left: 12px;
      }
    }
    &__slider-animation {
      min-width: min-content;
      transform: translate3d(calc(${e=>-e.current} * (100% - 100vw + 100px)),0px,0px);
      transition: transform 0.5s ease-out;
      position: relative;
    }
    &__slider-button--reverse {
      position: absolute;
      right: 2%;
      top: 50%;
      width: 40px;
      height: 40px;
      background: #fad20091;
      border-radius: 50%;
      cursor: pointer;
      left: 10px;
      &--arrow {
        border: solid white;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        position: absolute;
        top: 14px;
        transform: rotate(135deg);
        left: 14px;
      }
    }
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .about {
      &__main-section {
        .section__container {
          background-size: 200%;
        }
      }
      &__container {
        padding: 30vh 10px 10px 10px;
        margin-top: -20vh;
      }
      &__slider-animation {
        transform: none;
        overflow: auto;
        width: calc(100vw - 30px);
      }
      &__slider-button--reverse{
        display: none;
      }
      &__slider-button {
        display: none;
      }
      &__leader-section {
        gap: 15px;
        &--container {
          padding: 0;
          width: 100%;
          overflow: auto;
        }
        &--card {
          width: 100%;
          img {
            width: calc(45vw - 25px)
          }
        }
      }
    }
  }
`,l=o.a.div`
  .section {
    &__container {
      height: calc(100vh - 200px);
      min-height: 600px;
      background-image: url('${e=>e.bgDesktop}');
      background-size: 95%;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
    }
    &__heading {
      text-align: center;
      font-size: ${s.a.fontSize.xl5};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${s.a.font.primary};
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__sub-heading {
      font-family: ${s.a.font.primary};
      color: ${s.a.color.mediumGray};
      font-size: ${s.a.fontSize.lg};
      text-align: center;
      margin-bottom: 30px;
      max-width: 600px;
      margin: auto;
    }
    &__button {
      background-color: ${s.a.color.primary};
      padding: 1.2rem 7rem;
      border: none;
      border-radius: 30px;
      text-transform: uppercase;
      margin-bottom: 20px;
      font-size: ${s.a.fontSize.base};
      &--sub-heading {
        color: ${s.a.color.mediumGray};
        text-align: center;
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.small};
        font-weight: ${s.a.fontWeight.light};
      }
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .section {
      &__container {
        background-image: url('${e=>e.bgMobile}');
        height: 50vh;
        min-height: 500px;
      }
      &__heading {
        font-size: ${s.a.fontSize.xl};
        padding: 30px 2rem 10px 2rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 10px 2rem;
      }
    }
  }
`,c=t(4);var d=e=>Object(c.jsx)(l,{className:e.className,bgDesktop:e.BgImages.desktop,bgMobile:e.BgImages.mobile,children:Object(c.jsxs)("section",{className:"section__container",children:[Object(c.jsxs)("h1",{className:"section__heading",children:[Object(c.jsx)("span",{className:"section__theme-color",children:e.content.highlighted}),e.content.heading]}),Object(c.jsx)("p",{className:"section__sub-heading",children:e.content.subHeading})]})});var m=e=>Object(c.jsxs)("section",{className:"about__container",children:[Object(c.jsx)("h1",{className:"about__heading",children:e.heading}),Object(c.jsxs)("div",{className:"about__leader-section--container",children:[Object(c.jsx)("div",{className:"about__leader-section about__slider-animation",children:e.leadersData.leaders.map((e=>Object(c.jsx)("div",{className:"about__leader-section--card",children:Object(c.jsx)("img",{src:e.img,alt:e.label,width:"100%"})})))}),e.current<e.slides&&Object(c.jsx)("div",{className:"about__slider-button",onClick:()=>e.onIncrease(),children:Object(c.jsx)("div",{className:"about__slider-button--arrow"})}),e.current>0&&Object(c.jsx)("div",{className:"about__slider-button--reverse",onClick:()=>e.onDecrease(),children:Object(c.jsx)("div",{className:"about__slider-button--reverse--arrow"})})]})]}),p=o.a.div`
  .section {
    &__container {
      text-align: center;
    }
    &__heading {
      text-align: center;
      font-size: ${s.a.fontSize.xl2};
      font-family: ${s.a.font.primary};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${s.a.font.primary};
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
    &__flex-container {
      padding: 40px 15rem;
      margin-bottom: 80px;
    }
    &__flex {
      display: flex;
      align-items: center;
      gap: 50px;
      margin-bottom: 60px;
    }
    &__flex-section {
      width: 50%;
      margin: auto;
      &--heading {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.xl4};
        font-weight: ${s.a.fontWeight.extrabold};
        text-align: left;
        color: ${s.a.color.primary};
        margin-bottom: 15px;
      }
      &--list {
        list-style: none;
        margin-left: 15px;
      }
      &--list-item::before {
        content: "• ";
        color: #fad200;
        margin-right: 0.5rem;
      }
      &--list-item {
        font-family: Muli;
        font-size: 1rem;
        line-height: 1.43;
        text-align: left;
        color: #666;
        text-indent: -1.3rem;
      }
      &--text {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.base};
        font-weight: ${s.a.fontWeight.light};
        color: ${s.a.color.mediumGray};
        line-height: 1.4;
        text-align: left;
      }
      &--img {
        img {
          width: 80%;
          height: 300px;
          object-fit: contain;
        }
      }
      &--order1 {
        order: 1;
      }
      &--order2 {
        order: 2;
      }
    }
    
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .section {
      &__heading {
        font-size: ${s.a.fontSize.xl};
        padding: 30px 2rem 10px 2rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 10px 2rem;
      }
      &__flex-container {
        padding: 15px;
      }
      &__flex {
        flex-direction: column;
        gap: 10px;
      }
      &__flex-section {
        width: 100%;
        &--heading {
          text-align: center;
          font-size: ${s.a.fontSize.xl2};
        }
        &--text {
          text-align: center;
          font-size: ${s.a.fontSize.xs};
        }
        &--order2 {
          order: 1;
        }
      }
    }
  }
`;var x=e=>Object(c.jsx)(p,{children:Object(c.jsxs)("section",{className:"section__container",children:[Object(c.jsxs)("h1",{className:"section__heading",children:["Perjalanan ",Object(c.jsx)("span",{className:"section__theme-color",children:" PasarPolis "})]}),Object(c.jsxs)("div",{className:"section__flex-container",children:[e.MarketData.topContent.map(((e,a)=>{return Object(c.jsxs)("div",{className:"section__flex",children:[Object(c.jsx)("div",{className:"section__flex-section section__flex-section--img "+(a%2===0?"section__flex-section--order2":"section__flex-section--img section__flex-section--order1"),children:Object(c.jsx)("img",{src:e.img,alt:e.year,widyh:"100%"})}),Object(c.jsxs)("div",{className:"section__flex-section "+(a%2===0?"section__flex-section--order1":"section__flex-section--order2"),children:[Object(c.jsx)("div",{className:"section__flex-section--heading",children:e.year}),(t=e.text,Array.isArray(t)?Object(c.jsx)("ul",{className:"section__flex-section--list",children:t.map((e=>Object(c.jsx)("li",{className:"section__flex-section--list-item",children:e})))}):Object(c.jsx)("div",{className:"section__flex-section--text",children:t}))]})]});var t})),Object(c.jsxs)("div",{className:"section__flex-section",children:[Object(c.jsx)("div",{className:"section__flex-section--img ",children:Object(c.jsx)("img",{src:e.MarketData.bottomContent.img,alt:"current",widyh:"100%"})}),Object(c.jsx)("div",{className:"section__flex-section--text",children:e.MarketData.bottomContent.text})]})]})]})});o.a.div`
  .section {
    &__container {
      text-align: center;
    }
    &__heading {
      text-align: center;
      font-size: ${s.a.fontSize.xl2};
      font-family: ${s.a.font.primary};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${s.a.font.primary};
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
    &__card {
      padding-bottom: 50px;
    }
    &__card-section {
      display: flex;
      gap: 50px;
      padding: 1rem 15%;
      &--container {
        width: 50%;;
        border-radius: 8px;
        box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.1);
        margin: auto;
        padding: 1rem 4% 2rem 4%;
        position: relative;
        max-width: 400px;
      }
      &--img {
        padding: 10px 0 30px 0;
        img{
          width: 60%;
        }
      }
      &--text {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.base};
        color: ${s.a.color.mediumGray};
        line-height: 1.2;
        text-align: left;
        text-align: center;
        margin-bottom: 30px;
      }
      &--button {
        background-color: ${s.a.color.primary};
        color: ${s.a.color.mineShaft};
        padding: 1rem;
        border: none;
        border-radius: 30px;
        text-transform: uppercase;
        font-size: ${s.a.fontSize.base};
        font-weight: ${s.a.fontWeight.extrabold};
        position: absolute;
        left: 20%;
        right: 20%;
        bottom: calc(-10px - 1rem);
        width: 60%;
        text-decoration: none;
      }
    }
    
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .section {
      &__heading {
        font-size: ${s.a.fontSize.xl};
        padding: 30px 2rem 10px 2rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 10px 2rem;
      }
      &__card {
        overflow: auto;
        max-width: 100vw;
        display: flex;
      }
      &__card-section {
        padding: 30px;
        width: 160%;
        gap: 15px;
        min-width: min-content;
        &--container {
          width: 300px;
          height: 100%;
          padding: 20px;
        }
        &--text {
          margin-bottom: 15px;
        }
        &--button {
          left: 5%;
          right: 5%;
          width: 90%;
          font-size: ${s.a.fontSize.base}
        }
        &--img img {
          width: 70%;
        }
      }
      
    }
  }
`;var g=o.a.div`
  position: relative;
  .section {
    &__container {
      text-align: center;
      background-image: url('https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/vision-mission-banner.png');
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: contain;
      background-size: 30%;
      min-height: 500px;
    }
    &__heading {
      text-align: center;
      font-size: ${s.a.fontSize.xl2};
      font-family: ${s.a.font.primary};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${s.a.font.primary};
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
    &__flex-container {
      padding: 40px 10%;
      margin-bottom: 80px;
      display: flex;
      gap: 30%;
    }
    &__flex-section {
      width: 25%;
      margin: auto;
      &--heading {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.xl4};
        font-weight: ${s.a.fontWeight.extrabold};
        text-align: left;
        color: ${s.a.color.primary};
        margin-bottom: 15px;
      }
      &--text {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.base};
        font-weight: ${s.a.fontWeight.light};
        color: ${s.a.color.mediumGray};
        line-height: 1.4;
        text-align: left;
        &--right {
            text-align: right;
        }
      }
      &--img {
        img {
          width: 80%;
          height: 300px;
          object-fit: contain;
        }
      }
      &--order1 {
        order: 1;
      }
      &--order2 {
        order: 2;
      }
    }
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .section {
      &__container {
        background-size: 80%;
      }
      &__card {
        overflow: auto;
        max-width: 100vw;
        display: flex;
      }
      &__heading {
        font-size: ${s.a.fontSize.xl};
        padding: 30px 2rem 10px 2rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 10px 2rem;
      }
      &__flex-container {
        padding: 15px;
        gap: 15px;
        min-width: max-content;
      }
      &__flex {
        flex-direction: column;
        gap: 10px;
      }
      &__flex-section {
        border-radius: 8px;
        box-shadow: 0 25px 20px 0 rgb(0 0 0 / 10%);
        padding: 20px 30px;
        width: 300px;
        height: 100%;
        &--heading {
          text-align: left;
          font-size: ${s.a.fontSize.xl};
        }
        &--text {
          text-align: left;
          font-size: ${s.a.fontSize.xs};
        }
        &--order2 {
          order: 1;
        }
      }
    }
  }
`;var h=()=>Object(c.jsx)(g,{children:Object(c.jsxs)("section",{className:"section__container",children:[Object(c.jsxs)("h1",{className:"section__heading",children:["Visi ",Object(c.jsx)("span",{className:"section__theme-color",children:" & "})," Misi"]}),Object(c.jsx)("div",{className:"section__card",children:Object(c.jsxs)("div",{className:"section__flex-container",children:[Object(c.jsxs)("div",{className:"section__flex-section",children:[Object(c.jsx)("div",{className:"section__flex-section--heading",children:"Visi"}),Object(c.jsx)("div",{className:"section__flex-section--text",children:"Menjadi penyedia produk dan layanan asuransi paling diminati konsumen di Asia Tenggara melalui teknologi."})]}),Object(c.jsxs)("div",{className:"section__flex-section",children:[Object(c.jsx)("div",{className:"section__flex-section--heading section__flex-section--text--right",children:"Misi"}),Object(c.jsx)("div",{className:"section__flex-section--text section__flex-section--text--right",children:"Menciptakan pengalaman berasuransi yang mudah, terjangkau dan menyenangkan bagi seluruh lapisan masyarakat, melalui teknologi & inovasi berkelanjutan."})]})]})})]})}),b=o.a.div`
  background-color: ${s.a.color.lightGray};
  padding: 8rem 8rem 0 8rem;
  margin-top: -2rem;
  @keyframes ExperienceSlider {
    0% {
      transform: translateX(0);
    }
    32% {
      transform: translateX(0);
    }
    33% {
      transform: translateX(calc(-100vw + 280px));
    }
    65% {
      transform: translateX(calc(-100vw + 280px));
    }
    66% {
      transform: translateX(calc(-200vw + 280px));
    }
    99% {
      transform: translateX(calc(-200vw + 280px));
    }
    100% {
      transform: translateX(0);
    }
  }
  .section {
    &__container {
      text-align: center;
      position: relative;
    }
    &__sub-heading {
      font-family: ${s.a.font.primary};
      color: ${s.a.color.mediumGray};
      font-size: ${s.a.fontSize.lg};
      text-align: center;
      margin-bottom: 30px;
      max-width: 600px;
      margin: auto;
      line-height: 1.4;
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
    &__slider-main {
      display: flex;
      padding: 50px;
    }
    &__flex-container {
      &--img{
        width: 100%;
        img {
          width: 100%;
        }
        &--display-none {
          display: none;
        }
      }
    }
    
  }
  @media(max-width: ${s.a.layout.tablet}) {
    padding: 60px 15px 15px 15px;
    .section {
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 8px;
      }
      &__slider-main {
        padding: 10px;
      }
    }
  }
  
`;class f extends i.Component{constructor(e){super(e),this.state={currentExperienceSlide:0}}componentDidMount(){let e=this.state.currentExperienceSlide;const a=setInterval((()=>{e<=2&&(e+=1),e>2&&(e=0),this.setState({currentExperienceSlide:e})}),3e3);return()=>{clearInterval(a)}}render(){return Object(c.jsx)(b,{children:Object(c.jsxs)("section",{className:"section__container",children:[Object(c.jsxs)("p",{className:"section__sub-heading",children:["Kami ingin kamu memiliki pengalaman ",Object(c.jsx)("br",{})," yang menyenangkan dalam berasuransi dengan:"]}),Object(c.jsx)("div",{className:"section__slider-main",children:this.props.ExperienceContentFull.map(((e,a)=>Object(c.jsx)("div",{className:"section__flex-container--img"+(this.state.currentExperienceSlide===a?"":" section__flex-container--img--display-none"),children:Object(c.jsx)("img",{src:e.img,alt:e.label})})))})]})})}}var u=f,_=o.a.div`
  .section {
    &__container {
      text-align: center;
      padding-bottom: 100px;
    }
    &__heading {
      text-align: center;
      font-size: ${s.a.fontSize.xl2};
      font-family: ${s.a.font.primary};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${s.a.font.primary};
      font-weight: ${s.a.fontWeight.extrabold};
    }
    &__sub-heading {
      font-family: ${s.a.font.primary};
      color: ${s.a.color.mediumGray};
      font-size: ${s.a.fontSize.lg};
      text-align: center;
      margin-bottom: 30px;
      max-width: 600px;
      margin: auto;
    }
    &__theme-color {
      color: ${s.a.color.primary}
    }
    &__top-img {
      max-width: 100px;
      margin: auto;
      img {
        width: 100%;
      }
    }

    &__card {
      padding-bottom: 50px;
      padding-top: 30px;
      display: flex;
    }
    &__card-section {
      display: flex;
      gap: 50px;
      padding: 1rem 25%;
      min-width: min-content;
      margin: 0 auto;
      &--container {
        // width: 50%;;
        border-radius: 8px;
        box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.1);
        margin: auto;
        padding: 1.5rem 4% 1.5rem 4%;
        position: relative;
        max-width: 400px;
        height: 100%;
      }
      &--flex {
        display: flex;
        gap: 20px;
        padding-top: 15px;
      }
      &--heading {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.base};
        color: ${s.a.color.mediumGray};
        line-height: 1.2;
        text-align: center;
        padding: 0 20px;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        &--bold {
          font-weight: ${s.a.fontWeight.bold};
        }
      }
      &--upper {
        text-transform: uppercase;
      }
      &--text {
        font-family: ${s.a.font.primary};
        font-size: ${s.a.fontSize.xs};
        color: ${s.a.color.mediumGray};
        line-height: 1.2;
        text-align: left;
      }
      &--button {
        background-color: ${s.a.color.primary};
        color: ${s.a.color.mineShaft};
        padding: 1rem;
        border: none;
        border-radius: 30px;
        text-transform: uppercase;
        font-size: ${s.a.fontSize.base};
        font-weight: ${s.a.fontWeight.extrabold};
        position: absolute;
        left: 20%;
        right: 20%;
        bottom: calc(-10px - 1rem);
        width: 60%;
        text-decoration: none;
      }
    }
  }
  @media(max-width: ${s.a.layout.tablet}) {
    .section {
      &__heading {
        font-size: ${s.a.fontSize.xl};
        padding: 30px 2rem 10px 2rem;
        margin-bottom: 0;
      }
      &__sub-heading {
        font-size: ${s.a.fontSize.base};
        padding: 10px 2rem;
      }
      &__card {
        overflow: auto;
        max-width: 100vw;
        display: flex;
      }
      &__card-section {
        padding: 30px;
        width: 160%;
        gap: 15px;
        min-width: min-content;
        &--container {
          width: 315px;
          height: 100%;
          padding: 20px;
        }
        &--text {
          margin-bottom: 15px;
        }
        &--button {
          left: 5%;
          right: 5%;
          width: 90%;
          font-size: ${s.a.fontSize.base}
        }
        &--flex {
          gap: 12px;
        }
        &--img img {
          width: 70%;
        }
      }
    }
  }
`;var j=e=>Object(c.jsx)(_,{children:Object(c.jsxs)("section",{className:"section__container",children:[Object(c.jsx)("div",{className:"section__top-img",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-market-impect-icon.png",alt:"marketImpect"})}),Object(c.jsxs)("h1",{className:"section__heading",children:["Dampak Positif ",Object(c.jsx)("span",{className:"section__theme-color",children:" PasarPolis "})]}),Object(c.jsx)("p",{className:"section__sub-heading",children:"Kami bertekad untuk menjembatani kesenjangan akses asuransi bagi mereka yang belum pernah tersentuh asuransi sebelumnya, dan juga masyakarat pra-sejahtera melalui produk asuransi yang lebih mudah diakses dan terjangkau bagi seluruh lapisan masyarakat. Melalui teknologi, kami berkomitmen untuk terus berinovasi menciptakan pengalaman berasuransi yang lebih menyenangkan sesuai dengan kebutuhan yang melekat di dalam keseharian konsumen."}),Object(c.jsx)("div",{className:"section__card",children:Object(c.jsx)("div",{className:"section__card-section",children:Object(c.jsxs)("div",{className:"section__card-section--container",children:[Object(c.jsx)("p",{className:"section__card-section--heading section__card-section--heading--bold section__card-section--upper",children:"1 Miliar+ polis diterbitkan (2019-2021). Melayani 24+ juta populasi Indonesia*"}),Object(c.jsxs)("div",{className:"section__card-section--flex",children:[Object(c.jsx)("div",{className:"section__card-section--text",children:"*90% di antaranya adalah nasabah pemula (1st time buyer)"}),Object(c.jsx)("div",{className:"section__card-section--text",children:"*40% di antaranya adalah pekerja informal (pengemudi ojek daring, kurir, UMKM, dll)"})]})]})})})]})});const w={BgImages:{desktop:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-banner.png",mobile:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-banner-mobile.png"},content:{highlighted:"Kemudahan Dalam ",heading:"Melindungi Setiap Momen Berharga",subHeading:"Melalui teknologi, PasarPolis menghadirkan solusi agar semua lapisan masyarakat dapat mengakses asuransi secara praktis dengan harga terjangkau."}},y={leaders:[{label:"Cleosent",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/cleo-updated-2.png"},{label:"MichaelSaputra",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/ms-updated.png"},{label:"Adi",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/adi-updated-2.png"},{label:"MichaelPerera",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/perera-updated-2.png"},{label:"Nadya",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/nad.png"}]},k={topContent:[{year:"2015",text:"PasarPolis didirikan untuk mendemokratisasi asuransi yang identik dengan proses yang rumit. Melalui teknologi terkini, PasarPolis bertekad untuuk memberi kemudahan akses serta menciptakan proses asuransi agar lebih efektif, cepat dan menyenangkan.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-1.png"},{year:"2018",text:"PasarPolis mengembangkan tim teknologi handal yang berbasis di India. Di tahun yang sama, PasarPolis berhasil melakukan pendanaan Seri-A dengan 3 unicorn Indonesia - Gojek, Tokopedia, dan Traveloka.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-2.png"},{year:"2019",text:"PasarPolis berekspansi ke pasar internasional - Vietnam dan Thailand - untuk menjadi penggerak industri insurtech di kawasan ASEAN.",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-6.png"},{year:"2020",text:["PasarPolis melakukan pendanaan Seri-B dengan Leapfrog, Xiaomi, SBI Investment, Intudo Ventures, Alpha JWC Ventures, dan GoVentures."],img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-3.png"},{year:"2021",text:["PasarPolis menyambut bergabungnya anak organisasi World Bank Group yaitu International Finance Corporation (IFC) sebagai investor.","PasarPolis berhasil memberikan perlindungan asuransi bagi lebih dari 24 juta populasi Indonesia."],img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-7.png"}],bottomContent:{img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/Market-icon-5.png",text:"Kami tidak hanya berhenti di sini. Kami akan selalu menciptakan inovasi agar mempermudah Anda dalam berasuransi."}},v=[{label:"slide1",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-experience-slider-full-1.png"},{label:"slide2",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-experience-slider-full-2.png"},{label:"slide3",img:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/about/about-experience-slider-full-3.png"}];var O=t(359);class $ extends i.Component{constructor(e){super(e),this.state={current:0}}render(){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)(r,{current:this.state.current,children:[Object(c.jsx)(d,{className:"about__main-section",BgImages:w.BgImages,content:w.content}),Object(c.jsx)(m,{leadersData:y,heading:"Manajemen",current:this.state.current,onIncrease:()=>this.setState((e=>({current:e.current+1}))),onDecrease:()=>this.setState((e=>({current:e.current-1}))),slides:1}),Object(c.jsx)(x,{MarketData:k}),Object(c.jsx)(h,{}),Object(c.jsx)(u,{ExperienceContentFull:v}),Object(c.jsx)(j,{})]}),Object(c.jsx)(O.a,{})]})}}a.default=$}}]);
//# sourceMappingURL=16.1b8b7906.chunk.js.map