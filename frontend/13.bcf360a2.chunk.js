(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[13],{359:function(e,a,t){"use strict";var o=t(0),i=t(69),n=t(70);const s=i.a.div`

  font-weight: ${n.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${n.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${n.a.fontWeight.bold}
  }
`;var r=t(4);var c=e=>{let{name:a,addressLines:t=[],phones:o=[],emails:i=[],viewMapUrl:n}=e;return Object(r.jsxs)(s,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-bold",children:a})}),t.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-white",children:e})},a))),Object(r.jsx)("br",{}),o.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},a))),i.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},a))),Object(r.jsx)("br",{}),Object(r.jsx)("a",{target:"_blank",href:n,className:"text-yellow",children:"View Map"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"flex-container ",children:[Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const l=i.a.div`
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

`;var d=e=>{let{slides:a=[1,2,3],current:t=0}=e;return Object(r.jsx)(l,{current:t,children:Object(r.jsx)("div",{className:"slides-wrapper flex-container",children:a.map(((e,a)=>Object(r.jsx)("div",{className:"slide",children:e},a)))})})};var p={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const m=i.a.div`
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
`;var h=()=>{const[e,a]=Object(o.useState)(0);return Object(r.jsxs)(m,{children:[Object(r.jsx)("ul",{className:"flex-container country-flag-container",children:p.countries.map(((t,o)=>Object(r.jsx)("li",{className:"country-icon-li",children:Object(r.jsx)("div",{onClick:()=>a(o),children:Object(r.jsx)("img",{className:o===e?"country-icon active":"country-icon",src:t.countryIconImage})})},o)))}),Object(r.jsx)("div",{children:Object(r.jsx)(d,{slides:p.countries.map((e=>Object(r.jsx)(c,{...e},e.name))),current:e})})]})};var g={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const b=i.a.footer`
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
`;var u=t(357);a.a=()=>Object(r.jsx)(b,{children:Object(r.jsx)("div",{className:"footer-content",children:Object(r.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{className:"margin-b-40",children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(u.a,{id:"Informasi"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:g.information.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",href:e.link,children:Object(r.jsx)(u.a,{id:e.label})})})))})]})}),Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(u.a,{id:"Perusahaan"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:g.company.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(r.jsx)(u.a,{id:e.label})})})))})]})}),Object(r.jsxs)("div",{className:"address-container text-small",children:[Object(r.jsx)("h3",{className:"text-strong heading",children:Object(r.jsx)(u.a,{id:"Kantor kami"})}),Object(r.jsx)(h,{})]})]})})})},364:function(e,a,t){"use strict";t(0);var o=t(357),i=t(102),n=t(4);a.a=Object(i.c)((e=>{let{id:a,defaultMessage:t,values:i}=e;return Object(n.jsx)(o.a,{id:a||" ",defaultMessage:t||a,values:i||{}})}),{withRef:!1})},637:function(e,a,t){"use strict";t.r(a),t.d(a,"Home",(function(){return Ce}));var o=t(0),i=t.n(o),n=t(446),s=t(49),r=t(359),c=t(364),l=(t(371),t(370)),d=t(69);const p="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020.svg",m="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020_mobile.svg";var h=d.a.div`
  font-family: Muli !important

  select {
    background-color: white;
    border: thin solid #dedede;
    border-radius: 2px;
    padding: 5px 10px;
    font-family: Muli;
    font-size: 14px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }

  .ant-btn[disabled] {
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: #f7f7f7 !important;
    border-color: #d9d9d9 !important;
  }

  .button-primary {
    padding-left: 40px !important;
    padding-right: 40px !important;
    border-radius: 10px !important;
  }
  .ant-select-selection {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 !important;
  }
  .amountCovered{
    border:none !important;
  }
  .ant-select-selection__placeholder{
    font-size: 15px;
    font-weight: 300;
  }
  .ant-select-selection-selected-value {
    font-size: 16px;
    font-weight: 300;
  }
  .ph-10{
    padding-left:10px;
    padding-right:10px;
  }
  .ant-calendar-picker-input {
    font-size: 20px;
    font-weight: 300;
  }
  .card-select {
    color: #000000 !important;
  }

  .card-design {
    opacity: 0.98;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #cccccc;
    background-color: #ffffff;
  }

  .card-header {
    background: #eeeeee;
    // padding: 30px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-header-text {
    padding: 23px 30px;
    color: #000000;
    font-family: Muli;
    font-size: 15px;
    font-weight: 700;
  }

  .card-body {
    background: rgba(255, 255, 255, 0.85);
    padding: 10px 10px 30px 30px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-body-subheader {
    padding: 22px 0px 12px 0px;
    font-family: Muli;
    font-size: 14px;
  }

  .promo-overlay {
    content:url(${p})
  }

  .member-box {
    width: 90%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 18px;
  }

  /* The container */
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .add-child {
    border-bottom: 1px solid;
    font-family: Muli;
    font-size: 14px;
  }

  .check-premium {
    width: 140px;
    height: 40px;
    border: 0;
    border-radius: 1.8px;
    background-color: #ffd500;
    transition: 0.3s;
  }

  .check-premium:hover {
    background-color: #fff;
    border: 1px solid #1890ff;
    color: #1890ff;
  }

  .checked-label {
    font-weight: bold;
  }

  .error-message {
    font-size: 12px;
    color: #FF0000;
  }

  @media (max-width: 768px) {
    .ant-select-selection {
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-color: #cccccc;
    }

    .card-header-text {
      padding: 10px 30px;
    }

    .button-primary {
      border-radius: 10px !important;
      width: 100%;
      padding-left: unset;
      padding-right: unset;
      margin-bottom: 16px;
    }

    .price-range-toggle-container {
      text-align: center;
    }

    .promo-overlay {
      content:url(${m})
    }
  }

`;d.a.div`
  font-weight: 500;
`,d.a.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  position: absolute;
  z-index: 10000;

  .promo-overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    content:url(${p})
  }

  @media (max-width: 768px) {
    .promo-overlay {
      content:url(${m})
    }
  }
`;var g=t(48),b=t(93),u=t(450),x=d.a.div``,f=t(372),j=t.n(f),k=t(4);let w={};class y extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{},this.onChangeDate=e=>{w={...w,...e};let a="";if(w.hasOwnProperty("day")&&w.hasOwnProperty("month")&&w.hasOwnProperty("year")){a=new Date(w.year,w.month,w.day);const e=j()(a);this.props.selectedDate(e)}},this.state={year:null,month:null,day:null}}render(){return Object(k.jsxs)(x,{children:[Object(k.jsx)(u.DayPicker,{defaultValue:"DD",year:this.state.year,month:this.state.month,endYearGiven:!0,required:!0,disabled:!1,onChange:e=>this.onChangeDate({day:e}),id:"day",name:"day",classes:"day-picker",optionClasses:"option classes"}),Object(k.jsx)(u.MonthPicker,{defaultValue:"MM",numeric:!0,short:!0,caps:!0,endYearGiven:!0,year:this.state.year,required:!0,disabled:!1,onChange:e=>this.onChangeDate({month:e}),id:"month",name:"month",classes:"month-picker",optionClasses:"option classes"}),Object(k.jsx)(u.YearPicker,{defaultValue:"YYYY",start:this.props.minYear,end:this.props.maxYear,reverse:!0,required:!0,disabled:!1,onChange:e=>this.onChangeDate({year:e}),id:"year",name:"year",classes:"year-picker",optionClasses:"option classes"})]})}}y.defaultProps={maxYear:void 0,minYear:void 0,selectedDate:e=>console.log(e)};var O=y;const{showOverlay:v,resetOverlay:_}=g.a,z={self:{minYear:18,maxYear:59},spouse:{minYear:21,maxYear:60},child:{minYear:.5,maxYear:60}};class M extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{const e=new URLSearchParams(this.props.location.search),a=e.get("utm_medium"),t=e.get("utm_source"),o=e.get("utm_campaign");this.setState({utmMedium:a,utmSource:t,utmCampaign:o})},this.errorNotification=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan";l.a.error({message:e})},this.resetErrors=()=>{this.setState({errors:{}})},this.validateObj=(e,a)=>{const t=Object.keys(e).reduce(((a,t)=>(a[t]=this.validateMemberAge(t,e[t]),a)),{});return[!!Object.keys(t).filter((e=>t[e])).length,t]},this.handleSubmit=e=>{const{coupon:a,utmSource:t,utmCampaign:o,utmMedium:i,childrenInfo:n,selectedMembers:s,memberInfo:r}=this.state,c=Object.keys(n).filter((e=>s.includes(e))),l=c.reduce(((e,a)=>(e[a]=n[a],e)),{}),d=Object.keys(r).filter((e=>s.includes(e))).reduce(((e,a)=>(e[a]=r[a],e)),{}),[p,m]=this.validateObj({...l,...d});if(this.setState({errors:m}),p)return;const h=c.map((e=>n[e])).sort(((e,a)=>e.diff(a))).reduce(((e,a,t)=>(e[t+3]=a.format("YYYY-MM-DD"),e)),{});let g={};g[1]=d.self.format("YYYY-MM-DD"),d.spouse&&(g[2]=d.spouse.format("YYYY-MM-DD")),Object.assign(g,h);const u=Object(b.a)({utm_source:t,utm_campaign:o,utm_medium:i,coupon:a,members:encodeURIComponent(JSON.stringify(g))});this.props.history.push({pathname:"/cthealth/packages",search:u})},this.handleAddChild=e=>{let a="child";const{childrenInfo:t,selectedMembers:o}=this.state,i=Object.keys(t).filter((e=>e.startsWith("child_"))).map((e=>e.match(/child_([1-4])/)[1])),n=parseInt(i[i.length-1])+1;a=`child_${n}`,this.setState({childrenInfo:{...t,[a]:null},maxChildren:Object.keys(t).length>1,selectedMembers:[...o,a]},(()=>{window.dataLayer.push({event:`ciputra-hcp-add-child-${n}`})}))},this.handleToggle=(e,a)=>{if("self"===e)return;const{selectedMembers:t}=this.state;let o=t;a?o.push(e):o.splice(t.indexOf(e),1),this.setState({selectedMembers:o})},this.state={selectedMembers:["self"],memberInfo:{self:null,spouse:null},childrenInfo:{child_1:null},errors:{}}}validateMemberAge(e,a){const t=z[e]||z.child,{minYear:o,maxYear:i}=t;let n="";if(a){const e=j()().diff(a,"years",!0);e<o?n=`Umur kurang dari ${o} tahun`:e>i&&(n=`Umur lebih dari ${i} tahun`)}else n="Wajib diisi";return n}render(){const{memberInfo:e,errors:a}=this.state;return Object(k.jsx)(h,{children:Object(k.jsxs)("div",{className:"card-design",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("p",{className:"card-header-text mb-0",children:"Temukan Premi Anda"})}),Object(k.jsxs)("div",{className:"card-body opacity",children:[Object(k.jsx)("div",{class:"card-body-subheader",children:"Masukkan Tanggal Lahir Anda"}),Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsx)(O,{selectedDate:a=>this.setState({memberInfo:{...e,self:a}})}),a.self&&Object(k.jsx)("div",{className:"error-message",children:a.self})]}),Object(k.jsx)("div",{className:"mt-10",children:Object(k.jsx)("button",{id:"ciputra-hcp-check-premium",className:"check-premium",onClick:()=>this.handleSubmit(),children:"Cek Premi"})})]})]})})}}M.defaultProps={};var N=Object(s.b)((e=>({})),{showOverlay:v,resetOverlay:_})(M);const P={self:{minYear:18,maxYear:60},spouse:{minYear:21,maxYear:60},child:{minYear:.5,maxYear:60}};class $ extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{const e=new URLSearchParams(this.props.location.search),a=e.get("utm_medium"),t=e.get("utm_source"),o=e.get("utm_campaign");this.setState({utmMedium:a,utmSource:t,utmCampaign:o})},this.errorNotification=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan";l.a.error({message:e})},this.resetErrors=()=>{this.setState({errors:{}})},this.validateObj=(e,a)=>{const t=Object.keys(e).reduce(((a,t)=>(a[t]=this.validateMemberAge(t,e[t]),a)),{});return[!!Object.keys(t).filter((e=>t[e])).length,t]},this.handleSubmit=e=>{const{childrenInfo:a,selectedMembers:t,memberInfo:o}=this.state,i=Object.keys(a).filter((e=>t.includes(e))),n=i.reduce(((e,t)=>(e[t]=a[t],e)),{}),s=Object.keys(o).filter((e=>t.includes(e))).reduce(((e,a)=>(e[a]=o[a],e)),{}),[r,c]=this.validateObj({...n,...s});if(this.setState({errors:c}),r)return;const l=i.map((e=>a[e])).sort(((e,a)=>e.diff(a))).reduce(((e,a,t)=>(e[t+3]=a.format("YYYY-MM-DD"),e)),{});let d={};d[1]=s.self.format("YYYY-MM-DD"),s.spouse&&(d[2]=s.spouse.format("YYYY-MM-DD")),Object.assign(d,l);const p=this.state.memberInfo.self;this.props.history.push({pathname:"/starhealth/details",state:{userDob:p.format("YYYY-MM-DD")}})},this.state={selectedMembers:["self"],memberInfo:{self:null,spouse:null},childrenInfo:{child_1:null},errors:{}}}validateMemberAge(e,a){const t=P[e]||P.child,{minYear:o,maxYear:i}=t;let n="";if(a){const e=j()().diff(a,"years",!0);e<o?n=`Umur kurang dari ${o} tahun`:e>(j()(j()(i).add(1,"days")),"years")&&(n=`Umur lebih dari ${i} tahun`)}else n="Wajib diisi";return n}render(){const{memberInfo:e,errors:a}=this.state;return Object(k.jsx)(h,{children:Object(k.jsxs)("div",{className:"card-design",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("p",{className:"card-header-text mb-0",children:"Temukan Premi Anda"})}),Object(k.jsxs)("div",{className:"card-body opacity",children:[Object(k.jsx)("div",{class:"card-body-subheader",children:"Masukkan Tanggal Lahir Anda"}),Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsx)(O,{selectedDate:a=>this.setState({memberInfo:{...e,self:a}})}),a.self&&Object(k.jsx)("div",{className:"error-message",children:a.self})]}),Object(k.jsx)("div",{className:"mt-10",children:Object(k.jsx)("button",{id:"ciputra-hcp-check-premium",className:"check-premium",onClick:()=>this.handleSubmit(),children:"Cek Premi"})})]})]})})}}var S=Object(s.b)((e=>({})),{})($);const C={self:{minYear:17,maxYear:60},spouse:{minYear:21,maxYear:60},child:{minYear:.5,maxYear:60}};class Y extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{const e=new URLSearchParams(this.props.location.search),a=e.get("utm_medium"),t=e.get("utm_source"),o=e.get("utm_campaign");this.setState({utmMedium:a,utmSource:t,utmCampaign:o})},this.errorNotification=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan";l.a.error({message:e})},this.resetErrors=()=>{this.setState({errors:{}})},this.validateObj=(e,a)=>{const t=Object.keys(e).reduce(((a,t)=>(a[t]=this.validateMemberAge(t,e[t]),a)),{});return[!!Object.keys(t).filter((e=>t[e])).length,t]},this.handleSubmit=e=>{const{childrenInfo:a,selectedMembers:t,memberInfo:o}=this.state,i=Object.keys(a).filter((e=>t.includes(e))),n=i.reduce(((e,t)=>(e[t]=a[t],e)),{}),s=Object.keys(o).filter((e=>t.includes(e))).reduce(((e,a)=>(e[a]=o[a],e)),{}),[r,c]=this.validateObj({...n,...s});if(this.setState({errors:c}),r)return;const l=i.map((e=>a[e])).sort(((e,a)=>e.diff(a))).reduce(((e,a,t)=>(e[t+3]=a.format("YYYY-MM-DD"),e)),{});let d={};d[1]=s.self.format("YYYY-MM-DD"),s.spouse&&(d[2]=s.spouse.format("YYYY-MM-DD")),Object.assign(d,l);const p=this.state.memberInfo.self;this.props.history.push({pathname:"/bike/details",state:{userDob:p.format("YYYY-MM-DD")}})},this.state={selectedMembers:["self"],memberInfo:{self:null,spouse:null},childrenInfo:{child_1:null},errors:{}}}validateMemberAge(e,a){const t=C[e]||C.child,{minYear:o,maxYear:i}=t;let n="";if(a){const e=j()().diff(a,"years",!0);e<o?n=`Umur kurang dari ${o} tahun`:e>(j()(j()(i).add(1,"days")),"years")&&(n=`Umur lebih dari ${i} tahun`)}else n="Wajib diisi";return n}render(){const{memberInfo:e,errors:a}=this.state;return Object(k.jsx)(h,{children:Object(k.jsxs)("div",{className:"card-design",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("p",{className:"card-header-text mb-0",children:"Temukan Premi Anda"})}),Object(k.jsxs)("div",{className:"card-body opacity",children:[Object(k.jsx)("div",{class:"card-body-subheader",children:"Masukkan Tanggal Lahir Anda"}),Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsx)(O,{selectedDate:a=>this.setState({memberInfo:{...e,self:a}})}),a.self&&Object(k.jsx)("div",{className:"error-message",children:a.self})]}),Object(k.jsx)("div",{className:"mt-10",children:Object(k.jsx)("button",{id:"ciputra-hcp-check-premium",className:"check-premium",onClick:()=>this.handleSubmit(),children:"Cek Premi"})})]})]})})}}var I=Object(s.b)((e=>({})),{})(Y),D=(t(138),t(43)),A=(t(207),t(140)),L=(t(139),t(30)),T=(t(408),t(399)),B=(t(444),t(403)),F=(t(441),t(439)),R=t(451),E=t.n(R);const W="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020.svg",G="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020_mobile.svg";var U=d.a.div`
  font-family: Muli !important

  .ant-btn[disabled] {
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: #f7f7f7 !important;
    border-color: #d9d9d9 !important;
  }

  .button-primary {
    padding-left: 40px !important;
    padding-right: 40px !important;
    border-radius: 10px !important;
  }
  .ant-select-selection {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 !important;
  }
  .amountCovered{
    border:none !important;
  }
  .ant-select-selection__placeholder{
    font-size: 15px;
    font-weight: 300;
  }
  .ant-select-selection-selected-value {
    font-size: 16px;
    font-weight: 300;
  }
  .ph-10{
    padding-left:10px;
    padding-right:10px;
  }
  .ant-calendar-picker-input {
    font-size: 20px;
    font-weight: 300;
  }
  .card-select {
    color: #000000 !important;
  }

  .card-design {
    opacity: 0.98;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #cccccc;
    background-color: #ffffff;
  }

  .card-header {
    background: #eeeeee;
    // padding: 30px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-header-text {
    padding: 15px 30px;
    color: #000000;
    font-family: Muli;
    font-size: 15px;
    font-weight: 700;
  }

  .card-body {
    background: rgba(255, 255, 255, 0.85);
    padding: 10px 10px 30px 30px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .premium-text {
    color: #32b45a;
    font-family: Muli;
    font-size: 20px;
  }

  .price-range-toggle {
    text-decoration: underline;
    font-family: Muli;
    font-size: 13px;
  }

  .promo-overlay {
    content:url(${W})
  }

  @media (max-width: 768px) {
    .ant-select-selection {
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-color: #cccccc;
    }

    .card-header-text {
      padding: 10px 30px;
    }

    .button-primary {
      border-radius: 10px !important;
      width: 100%;
      padding-left: unset;
      padding-right: unset;
      margin-bottom: 16px;
    }

    .price-range-toggle-container {
      text-align: center;
    }

    .promo-overlay {
      content:url(${G})
    }
  }

`;d.a.div`
  font-weight: 600;
  .ant-radio-inner {
    ${e=>e.isError&&"\n        border: 1px solid #f5222d !important;\n        border-radius: 50%;\n      "}
  }
  .amountCovered {
    height: 32px !important;
    background-color: transparent !important;
    width: 95%;
    border: 1px solid #ddd;
    padding: 10px;
    color: #bbbbbb;
    font-size: 20px;
    font-weight: 300;
    ${e=>e.isInputNum&&"\n        border: 1px solid #f5222d !important;\n      "}
  }

  input.amountCovered::-webkit-input-placeholder {
    color: #bbbbbb;
    font-size: 20px;
    font-weight: 300;
  }

  .ant-radio {
    padding-top: 5px;
    position: relative;
    padding-left: 18px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ant-radio-input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .ant-radio-inner{
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: #b2b2b2;
  }

  .ant-radio:hover input ~ .ant-radio-inner{
    background-color: #ccc;
  }

  .ant-radio input:checked ~ .ant-radio-inner {
    background-color: #b2b2b2;
  }

  .ant-radio-inner:after {
    content: "";
    position: absolute;
    display: none;
  }
  .ant-radio-checked:after{
    border: none !important;
    -webkit-animation: none !important;
    animation: none !important;
    -webkit-animation-fill-mode:none !important;
    animation-fill-mode:none !important;
    visibility: hidden;
  }

  .ant-radio input:checked ~ .ant-radio-inner:after {
    display: block;
  }

  .ant-radio .ant-radio-inner:after {
    top: 3.5px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
  .ant-radio:focus{
    outline: none;
  }
`;const K=d.a.div`
  font-weight: 500;
`;d.a.div`
  color: #32b45a;
  font-family: Muli;
  font-size: 20px;
`,d.a.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  position: absolute;
  z-index: 10000;

  .promo-overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    content:url(${W})
  }

  @media (max-width: 768px) {
    .promo-overlay {
      content:url(${G})
    }
  }
`;var H=t(10);const{getCrackscreenBrandModels:V,getCrackscreenPremium:q}=H.a,{showOverlay:J,resetOverlay:Q}=g.a,X=F.a.Item,Z=B.a.Option;class ee extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{const e=new URLSearchParams(this.props.location.search),a=e.get("utm_medium"),t=e.get("utm_source"),o=e.get("utm_campaign");this.setState({utmMedium:a,utmSource:t,utmCampaign:o}),this.props.getCrackscreenBrandModels(),this.props.getCrackscreenPremium({params:{tagName:"crack_screen_protection_plus_premium"},query:{order_by:"seq_weight"}})},this.errorNotification=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan";l.a.error({message:e})},this.handlePhoneBrandChange=e=>{const{phoneBrandModels:a}=this.props,t=a.find((a=>{let{name:t}=a;return t===e}));if(!t||!(t instanceof Object))return void l.a.error({message:"Merek tidak ditemukan"});const o=t.modelList;o&&Array.isArray(o)&&o.length?(this.props.form.resetFields(["phone_model"]),this.setState({phoneBrand:e,phoneModels:o,phoneModel:void 0})):this.errorNotification("Merek ini tidak memiliki daftar model")},this.handlePhoneModelChange=e=>{const{phoneModels:a}=this.state,{premiumList:t}=this.props,o=a.find((a=>{let{name:t}=a;return t===e}));if(!o||!(o instanceof Object))return void this.errorNotification("Detil Model HP tidak ditemukan");const i=o.price;if(!i)return void this.errorNotification("Harga HP tidak ditemukan");const n=t.find((e=>{let{additional_data:{min:a,max:t}={}}=e;return i>a&&i<t})),{id:s}=n;this.setState({phoneModel:e,phonePrice:i,phonePriceRangeId:s})},this.handlePhonePriceRangeChange=e=>{this.setState({phonePriceRangeId:e})},this.handleSubmit=e=>{e.preventDefault();const{phoneBrand:a,phoneModel:t,phonePriceRangeId:o,coupon:i,utmSource:n,utmCampaign:s,utmMedium:r}=this.state,c=Object(b.a)({utm_source:n,utm_campaign:s,utm_medium:r,phoneBrand:a,phoneModel:t,phonePriceRangeId:o,coupon:i});this.props.history.push({pathname:"/crackscreen/details",search:c})},this.togglePriceForm=()=>{this.setState((e=>{let{showPriceRangeForm:a}=e;return{showPriceRangeForm:!a,phoneBrand:void 0,phoneModel:void 0,phonePriceRangeId:void 0}}),(()=>{this.state.showPriceRangeForm&&this.props.getCrackscreenPremium({params:{tagName:"crack_screen_protection_plus_premium"},query:{order_by:"seq_weight"}})}))},this.renderPhoneBrandModelForm=()=>{const{form:e,phoneBrandModels:a,getPremiumListLoading:t,getPhoneBrandModelsLoading:o}=this.props,{phoneBrand:n,phoneModel:s,phoneModels:r}=this.state,{getFieldDecorator:c}=e,l=a.map((e=>{let{name:a}=e;return Object(k.jsx)(Z,{value:a,className:"option-select",children:a},a)})),d=r.map((e=>{let{name:a,price:t}=e;return Object(k.jsx)(Z,{value:a,className:"option-select",children:a},a)}));return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)(L.a,{span:24,order:0,md:{span:8,order:0},className:"pt-16 ph-20 pl-0",children:[Object(k.jsx)(K,{children:Object(k.jsx)("label",{children:"Merek Ponsel"})}),Object(k.jsx)(X,{children:Object(k.jsx)(T.a,{spinning:!!o,children:Object(k.jsx)(B.a,{showSearch:!0,className:"full-width card-select",placeholder:"Pilih Merek",onChange:e=>this.handlePhoneBrandChange(e),optionFilterProp:"children",filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:l})})})]},"brand"),!!n&&Object(k.jsx)(L.a,{span:24,order:1,md:{span:8,order:1},className:"pt-16 ph-20 pl-0",children:Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(K,{children:Object(k.jsx)("label",{children:"Model Ponsel"})}),Object(k.jsx)(X,{children:c("phone_model",{})(Object(k.jsx)(T.a,{spinning:!!t,children:Object(k.jsx)(B.a,{value:s,disabled:!!t,showSearch:!0,className:"full-width card-select",placeholder:"Pilih Model",onChange:e=>this.handlePhoneModelChange(e),optionFilterProp:"children",filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:d})}))})]})},"model"),!n&&Object(k.jsx)(L.a,{span:0,md:{span:8,order:3}})]})},this.renderPriceRangeForm=()=>{const{premiumList:e,getPremiumListLoading:a}=this.props,t=e.map((e=>{let{id:a,additional_data:{min:t,max:o}={}}=e;return Object(k.jsxs)(Z,{value:a,className:"option-select",children:["Rp"," ",Object(k.jsx)(E.a,{value:parseInt(t),displayType:"text",thousandSeparator:".",decimalSeparator:","}),"- Rp"," ",Object(k.jsx)(E.a,{value:parseInt(o),displayType:"text",thousandSeparator:".",decimalSeparator:","})]},a)}));return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)(L.a,{span:24,order:0,md:{span:8,order:0},className:"pt-16 ph-20 pl-0",children:[Object(k.jsx)(K,{children:Object(k.jsx)("label",{children:"Harga Gadget"})}),Object(k.jsx)(X,{children:Object(k.jsx)(T.a,{spinning:!!a,children:Object(k.jsx)(B.a,{disabled:!!a,showSearch:!0,className:"full-width card-select",placeholder:"Pilih Harga",onChange:e=>this.handlePhonePriceRangeChange(e),optionFilterProp:"children",filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:t})})})]},"price-range"),Object(k.jsx)(L.a,{span:0,md:{span:8,order:3}})]})},this.state={phoneBrand:void 0,phoneModels:[],phoneModel:void 0,phonePriceRangeId:void 0}}render(){const{phoneModel:e,phonePriceRangeId:a,showPriceRangeForm:t}=this.state;return Object(k.jsx)(U,{children:Object(k.jsx)(F.a,{onSubmit:this.handleSubmit,id:"myForm",children:Object(k.jsxs)("div",{className:"card-design",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("p",{className:"card-header-text mb-0",children:"Pilih Perlindunganmu"})}),Object(k.jsx)("div",{className:"card-body opacity",children:Object(k.jsxs)(D.a,{type:"flex",children:[t?this.renderPriceRangeForm():this.renderPhoneBrandModelForm(),Object(k.jsx)(L.a,{span:24,order:3,md:{span:8,order:2},className:"pt-16 ph-20 pl-0",children:Object(k.jsx)(A.a,{disabled:!(e&&a||a&&t),className:"button-primary",htmlType:"submit",form:"myForm",children:Object(k.jsx)(c.a,{id:"CEK HARGA"})})}),Object(k.jsx)(L.a,{span:24,order:2,md:{span:8,order:3},className:"price-range-toggle-container",children:Object(k.jsx)("a",{className:"price-range-toggle",onClick:this.togglePriceForm,children:t?"Saya ingin mengisi rincian perangkat":"Saya tidak menemukan ponsel saya"})})]})})]})})})}}ee.defaultProps={phoneBrandModels:[],premiumList:[]};const ae=F.a.create()(ee);var te=Object(s.b)((e=>({phoneBrandModels:e.Crackscreen.phoneBrandModels,premiumList:e.Crackscreen.premiumList,getPhoneBrandModelsLoading:e.Loading.GET_CRACKSCREEN_BRAND_MODELS,getPhoneBrandModelsError:e.Error.GET_CRACKSCREEN_BRAND_MODELS,getPremiumListLoading:e.Loading.GET_CRACKSCREEN_PREMIUM,getPremiumListError:e.Error.GET_CRACKSCREEN_PREMIUM})),{getCrackscreenBrandModels:V,getCrackscreenPremium:q,showOverlay:J,resetOverlay:Q})(ae);const oe="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020.svg",ie="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/crackscreen_coupon_25_off_32020_mobile.svg";var ne=d.a.div`
  font-family: Muli !important

  select {
    background-color: white;
    border: thin solid #dedede;
    border-radius: 2px;
    padding: 5px 10px;
    font-family: Muli;
    font-size: 14px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }

  .ant-btn[disabled] {
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: #f7f7f7 !important;
    border-color: #d9d9d9 !important;
  }

  .button-primary {
    padding-left: 40px !important;
    padding-right: 40px !important;
    border-radius: 10px !important;
  }
  .ant-select-selection {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 !important;
  }
  .amountCovered{
    border:none !important;
  }
  .ant-select-selection__placeholder{
    font-size: 15px;
    font-weight: 300;
  }
  .ant-select-selection-selected-value {
    font-size: 16px;
    font-weight: 300;
  }
  .ph-10{
    padding-left:10px;
    padding-right:10px;
  }
  .ant-calendar-picker-input {
    font-size: 20px;
    font-weight: 300;
  }
  .card-select {
    color: #000000 !important;
  }

  .card-design {
    opacity: 0.98;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #cccccc;
    background-color: #ffffff;
  }

  .card-header {
    background: #eeeeee;
    // padding: 30px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-header-text {
    padding: 23px 30px;
    color: #000000;
    font-family: Muli;
    font-size: 15px;
    font-weight: 700;
  }

  .card-body {
    background: rgba(255, 255, 255, 0.85);
    padding: 10px 10px 30px 30px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-body-subheader {
    padding: 22px 0px 12px 0px;
    font-family: Muli;
    font-size: 14px;
  }

  .promo-overlay {
    content:url(${oe})
  }

  .member-box {
    width: 90%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 18px;
  }

  /* The container */
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .add-child {
    border-bottom: 1px solid;
    font-family: Muli;
    font-size: 14px;
  }

  .check-premium {
    width: 140px;
    height: 40px;
    border: 0;
    border-radius: 1.8px;
    background-color: #ffd500;
    transition: 0.3s;
  }

  .check-premium:hover {
    background-color: #ddd;
  }

  .checked-label {
    font-weight: bold;
  }

  .error-message {
    font-size: 12px;
    color: #FF0000;
  }

  @media (max-width: 768px) {
    .ant-select-selection {
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-color: #cccccc;
    }

    .card-header-text {
      padding: 10px 30px;
    }

    .button-primary {
      border-radius: 10px !important;
      width: 100%;
      padding-left: unset;
      padding-right: unset;
      margin-bottom: 16px;
    }

    .price-range-toggle-container {
      text-align: center;
    }

    .promo-overlay {
      content:url(${ie})
    }
  }

`;d.a.div`
  font-weight: 500;
`,d.a.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  position: absolute;
  z-index: 10000;

  .promo-overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    content:url(${oe})
  }

  @media (max-width: 768px) {
    .promo-overlay {
      content:url(${ie})
    }
  }
`;const{showOverlay:se,resetOverlay:re}=g.a,ce={self:{minYear:21,maxYear:60},spouse:{minYear:21,maxYear:60},child:{minYear:.5,maxYear:60}};class le extends o.Component{constructor(e){super(e),this.componentDidMount=()=>{const e=new URLSearchParams(this.props.location.search),a=e.get("utm_medium"),t=e.get("utm_source"),o=e.get("utm_campaign");this.setState({utmMedium:a,utmSource:t,utmCampaign:o})},this.errorNotification=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan";l.a.error({message:e})},this.resetErrors=()=>{this.setState({errors:{}})},this.validateObj=(e,a)=>{const t=Object.keys(e).reduce(((a,t)=>(a[t]=this.validateMemberAge(t,e[t]),a)),{});return[!!Object.keys(t).filter((e=>t[e])).length,t]},this.handleSubmit=e=>{const{coupon:a,utmSource:t,utmCampaign:o,utmMedium:i,childrenInfo:n,selectedMembers:s,memberInfo:r}=this.state,c=Object.keys(n).filter((e=>s.includes(e))),l=c.reduce(((e,a)=>(e[a]=n[a],e)),{}),d=Object.keys(r).filter((e=>s.includes(e))).reduce(((e,a)=>(e[a]=r[a],e)),{}),[p,m]=this.validateObj({...l,...d});if(this.setState({errors:m}),p)return;const h=c.map((e=>n[e])).sort(((e,a)=>e.diff(a))).reduce(((e,a,t)=>(e[t+3]=a.format("YYYY-MM-DD"),e)),{});let g={};g[1]=d.self.format("YYYY-MM-DD"),d.spouse&&(g[2]=d.spouse.format("YYYY-MM-DD")),Object.assign(g,h);const u=Object(b.a)({utm_source:t,utm_campaign:o,utm_medium:i,coupon:a,members:encodeURIComponent(JSON.stringify(g))});this.props.history.push({pathname:"/corona/packages",search:u})},this.handleAddChild=e=>{let a="child";const{childrenInfo:t,selectedMembers:o}=this.state,i=Object.keys(t).filter((e=>e.startsWith("child_"))).map((e=>e.match(/child_([1-4])/)[1])),n=parseInt(i[i.length-1])+1;a=`child_${n}`,this.setState({childrenInfo:{...t,[a]:null},maxChildren:Object.keys(t).length>1,selectedMembers:[...o,a]},(()=>{window.dataLayer.push({event:`corona-hcp-add-child-${n}`})}))},this.handleToggle=(e,a)=>{if("self"===e)return;const{selectedMembers:t}=this.state;let o=t;a?o.push(e):o.splice(t.indexOf(e),1),this.setState({selectedMembers:o})},this.state={selectedMembers:["self"],memberInfo:{self:null,spouse:null},childrenInfo:{child_1:null},errors:{}}}validateMemberAge(e,a){const t=ce[e]||ce.child,{minYear:o,maxYear:i}=t;let n="";if(a){const e=j()().diff(a,"years",!0);e<o?n=`Umur kurang dari ${o}`:e>i&&(n=`Umur lebih dari ${i}`)}else n="Wajib diisi";return n}render(){const{memberInfo:e,selectedMembers:a,childrenInfo:t,maxChildren:o,errors:n}=this.state;return Object(k.jsx)(ne,{children:Object(k.jsxs)("div",{className:"card-design",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("p",{className:"card-header-text mb-0",children:"Pilih Anggota untuk Dilindungi"})}),Object(k.jsxs)("div",{className:"card-body opacity",children:[Object(k.jsx)("div",{class:"card-body-subheader",children:"Anda dapat memilih hingga 5 (lima) anggota."}),Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsxs)("label",{className:"checkbox-container",children:[Object(k.jsx)("span",{className:"checked-label",children:"Diri Sendiri"}),Object(k.jsx)("input",{type:"checkbox",checked:!0,onChange:e=>this.handleToggle("self",e.target.checked)}),Object(k.jsx)("span",{class:"checkmark"})]}),Object(k.jsx)(O,{selectedDate:a=>this.setState({memberInfo:{...e,self:a}})}),n.self&&Object(k.jsx)("div",{className:"error-message",children:n.self})]}),Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsxs)("label",{className:"checkbox-container",children:[Object(k.jsx)("span",{className:a.includes("spouse")&&"checked-label",children:"Pasangan"}),Object(k.jsx)("input",{type:"checkbox",id:"corona-hcp-checkbox-spouse",checked:a.includes("spouse"),onChange:e=>this.handleToggle("spouse",e.target.checked)}),Object(k.jsx)("span",{class:"checkmark"})]}),a.includes("spouse")&&Object(k.jsx)(O,{selectedDate:a=>this.setState({memberInfo:{...e,spouse:a}})}),n.spouse&&Object(k.jsx)("div",{className:"error-message",children:n.spouse})]}),Object.keys(t).map(((e,o)=>Object(k.jsxs)("div",{className:"member-box",children:[Object(k.jsxs)("label",{className:"checkbox-container",children:["Anak ",o+1,Object(k.jsx)("input",{id:`corona-hcp-checkbox-child-${o+1}`,type:"checkbox",checked:a.includes(e),onChange:a=>this.handleToggle(e,a.target.checked)}),Object(k.jsx)("span",{class:"checkmark"})]}),a.includes(e)&&Object(k.jsx)(O,{selectedDate:a=>this.setState({childrenInfo:{...t,[e]:a}})}),n[e]&&Object(k.jsx)("div",{className:"error-message",children:n[e]})]}))),!o&&Object(k.jsx)(i.a.Fragment,{children:Object.keys(e).length<5&&Object(k.jsx)("a",{className:"add-child",onClick:()=>this.handleAddChild("child"),children:"Tambah Anak"})}),Object(k.jsx)("div",{className:"mt-10",children:Object(k.jsx)("button",{id:"corona-hcp-check-premium",className:"check-premium",onClick:()=>this.handleSubmit(),children:"Cek Premi"})})]})]})})}}le.defaultProps={};var de=Object(s.b)((e=>({})),{showOverlay:se,resetOverlay:re})(le);const pe=d.a.div`
  h1 {
    margin-top: 50px;
  }
  .promo-modal .ant-modal-body {
    padding-top: 80px !important;
    padding-left: 180px !important;
    padding-right: 180px !important;
  }
  .new-label-header-home {
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 2;
    width: 30px;
  }
  .promo-santa-image {
    width: 100px;
    height: 100px;
  }
  .promo-santa {
    position: fixed;
    left: 120px;
    bottom: 50px;
    z-index: 150;
  }
  .new-label-mobile-home {
    position: absolute;
    left: 5px;
    top: -3px;
    width: 50px;
  }
  .main-hero {
    background: url(${e=>e.bannerImage});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: calc(100vh - 50px);
    height: 100%;
    display: flex;
  }
  .main-hero.corona {
    background-position: right;
  }
  .margin-bottom80 {
    margin-bottom: 120px !important;
  }
  .partners-section h1 {
    margin-top: 50px;
    font-family: Muli;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #151515;
  }
  .margin-top110 {
    margin-top: 110px;
  }
  .margin-top80 {
    margin-top: 80px;
  }

  .benefit-section {
    margin-bottom: 5vh;
  }

  .benefit-section h1 {
    font-family: Muli;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    color: #151515;
  }
  .benefit-section h2 {
    font-family: Muli;
    font-size: 30px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.37;
    letter-spacing: normal;
    color: #151515;
  }

  .benefit-section p {
    font-family: Muli;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 150%;
    letter-spacing: normal;
    color: #333333;
  }

  @media (max-width: 375px) {
    .travel {
      background-size: 100% 52% !important;
    }
    .promo-santa-image {
      width: 80px;
      height: 80px;
    }
    promo-santa {
      left: 20px;
      bottom: 20px;
      z-index: 150;
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 10px;
    }
    .promo-santa-image {
      width: 80px;
      height: 80px;
    }
    .promo-santa {
      left: 20px;
      bottom: 50px;
      z-index: 150;
    }
    .benefit-section h1 {
      margin-top: 50px;
      font-family: Muli;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #151515;
    }
    .benefit-section p {
      font-size: 16px;
      line-height: 1.5 !important;
    }
    .main-hero {
      background: url(${"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/home-main-mobile.png"});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      background-color: #F5F5F5;
      padding: 0px 20px 20px 20px;
      min-height: 75vh;
    }
  }

  // Css for product hide

  .align-center {
    align-items: center;
    height: 100%;
  }
  .main-hero {
    min-height: calc(60vh - 50px);
  }

  @media (max-width: 768px) {
    .align-center {
      align-items: flex-start;
    }
  }
`,me=(d.a.h1`
  font-family: Muli;
  font-size: 45px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: 2px;
  color: #151515;

  @media (max-width: 1200px) {
    font-size: 26px;
  }
`,d.a.p`
  font-family: Muli;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #333333;
  padding-right: 120px;
  margin-bottom: 1.5em;

  @media (max-width: 1200px) {
    padding: 0px;
  }
`,d.a.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;

  li {
    position: relative;
    float: left;
    padding: 0 10px;
    font-size: 18px;
    color: #151515;
    font-weight: bold;

    a {
      color: #151515 !important;
      position: relative;
      z-index: 2;
    }

    &:hover,
    &.selected {
      a {
        color: #ffd500 !important;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 3px;
      right: 3px;
      bottom: 0;
      background-color: white;
      opacity: 0.35;
      z-index: 1;
      border-radius: 5px;
    }
  }
`);d.a.div`
  display: Flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  justify-content: center;

  .promo-overlay-container {
    display: flex;
    vertical-align: middle;
    margin: auto;
    position: relative;
  }

  .promo-overlay-background {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  .promo-overlay {
    position: relative;
    margin: auto;
  }

  .promo-overlay-banner {
    max-width: 70vw;
  }

  .promo-overlay-content {
    position: absolute;
    top: 7.5%;
    left: 7.5%;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.16);
    font-family: Muli;
    font-size: 31px;
    font-weight: 800;
    color: #fecc00;
    max-width: 50%;
  }

  .promo-overlay-close {
    position: absolute;
    top: 12%;
    right: 8%;
    width: auto;
    height: auto;
    z-index: 4;
  }

  .promo-overlay-close-icon {

  }

  .promo-overlay-close  .close-button {
    border: 0px;
    border-radius: 50px;
    background-color: #fecc00;
    font-size: 22px;
    padding: 3px 8px;
    z-index: 4;
  }

  @media (max-width: 768px) {
    .promo-overlay-banner {
      max-width: 100vw;
    }

    .promo-overlay-close {
      position: absolute;
      top: 10%;
      right: 8%;
    }

    .promo-overlay-close-icon {
      width: 12px;
    }
  }
`;var he=t(187),ge=t(70),be=t.p+"static/media/landing-img-temp.2be9940e.png";const ue=d.a.div`
  .home {
    &__link {
      text-decoration: none;
    }
    &__container {
      background-color: ${ge.a.color.white};
      min-height: calc(100vh - 40px);
    }
    &__section1 {
      height: calc(100vh - 200px);
      min-height: 600px;
      background-image: url('https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/landing-banner.png');
      background-size: 108%;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
      &--heading {
        text-align: center;
        font-size: ${ge.a.fontSize.xl4};
        max-width: 900px;
        margin: auto;
        padding: 30px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
      }
      &--sub-heading {
        font-family: ${ge.a.font.primary};
        color: ${ge.a.color.mediumGray};
        font-size: ${ge.a.fontSize.base};
        text-align: center;
        margin-bottom: 30px;
      }
      &--button {
        background-color: ${ge.a.color.primary};
        padding: 20px 60px;
        border: none;
        border-radius: 30px;
        text-transform: uppercase;
        font-weight: ${ge.a.fontWeight.extrabold};
        font-size: ${ge.a.fontSize.small};
      }
    }
    &__section2 {
      text-align: center;
      padding: 4rem 10em;
      &--heading {
        text-align: center;
        font-size: ${ge.a.fontSize.xl2};
        max-width: 600px;
        margin: auto;
        padding-top: 30px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
        margin-bottom: 30px;
      }
      &--sub-heading {
        font-family: ${ge.a.font.primary};
        color: ${ge.a.color.mediumGray};
        font-size: ${ge.a.fontSize.xs};
        text-align: center;
        margin-bottom: 30px;
      }
    }

    &__section3 {
      background-color: ${ge.a.color.lightGray};
      min-height: 700px;
      text-align: center;
      padding-bottom: 30px;
      &--heading {
        text-align: center;
        font-size: ${ge.a.fontSize.xl2};
        max-width: 600px;
        margin: auto;
        padding-top: 130px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
        margin-bottom: 30px;
      }
      &--sub-heading {
        font-family: ${ge.a.font.primary};
        color: ${ge.a.color.mediumGray};
        font-size: ${ge.a.fontSize.small};
        max-width: 50%;
        margin: auto;
        text-align: center;
        margin-bottom: 30px;
      }
      &--image-section {
        height: 40vw;
        background-image: url(${be});
        background-size: 50vw;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        &--text{
          position: absolute;
          font-family: ${ge.a.font.primary};
          color: ${ge.a.color.mediumGray};
          font-size: ${ge.a.fontSize.xs};
          width: 10rem;
        }
        &--text-1 {
          right: 16vw;
          top: 4vw;
          text-align: left;
        }
        &--text-2 {
          left: 20vw;
          top: 8vw;
          text-align: right;
        }
        &--text-3 {
          right: 15vw;
          bottom: 13vw;
          text-align: left;
        }
      }
    }

    &__section4 {
      background-color: ${ge.a.color.white};
      text-align: center;
      padding: 30px;
      width: 100vw;
      &--image-container {
        overflow: auto;
      }
      &--heading {
        text-align: center;
        font-size: ${ge.a.fontSize.xl2};
        max-width: 600px;
        margin: auto;
        padding-top: 30px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
        margin-bottom: 30px;
      }
      &--image-section-container{
        margin-bottom: 70px;
      }
      &--image-section {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 40px;
        &--heading{
          font-family: ${ge.a.font.primary};
          color: ${ge.a.color.primary};
          font-size: ${ge.a.fontSize.xs};
          text-align: center;
          margin-bottom: 10px;
        }
        &--logo {
          max-width: 100px;
          height: 25px;
          object-fit: contain;
          margin: 0 10px;
        }
      }
    }

    &__section6 {
      display: flex;
      padding: 30px 10vw;
      justify-content: space-around;
      align-items: center;
      background-color: ${ge.a.color.lightGray};
      &--text {
        padding: 0 4vw;
      }
      &--image {
        max-width: 400px;
        width: 100vw;
      }
      &--heading {
        font-size: ${ge.a.fontSize.xl2};
        max-width: 600px;
        margin: auto;
        padding-top: 30px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
        margin-bottom: 30px;
      }
      &--sub-heading {
        font-family: ${ge.a.font.primary};
        color: ${ge.a.color.mediumGray};
        font-size: ${ge.a.fontSize.base};
        margin-bottom: 30px;
      }
      &--button {
        background-color: ${ge.a.color.primary};
        padding: 20px 60px;
        border: none;
        border-radius: 30px;
        text-transform: uppercase;
        font-weight: ${ge.a.fontWeight.extrabold};
        font-size: ${ge.a.fontSize.small};
      }
    }

    &__theme-color {
      color: ${ge.a.color.primary}
    }
    &__border-line {
      height: 0;
      margin: 0;
      border: 2px solid ${ge.a.color.solitudeLight};
    }
  }
  @media(max-width: ${ge.a.layout.tablet}) {
    .home {
      &__main-section {
        background-size: 200%;
        background-position: -30px bottom;
      }
      &__section3 {
        min-height: 500px;
        &--heading {
          font-size: ${ge.a.fontSize.xl};
          padding: 30px;
          margin-bottom: 0;
        }
        &--sub-heading {
          max-width: 80%;
        }
        &--image-section {
          height: 70vw;
          background-size: 70vw;
          background-image: url(${be});
          &--text-1 {
            right: 0;
            top: 6vw;
          }
          &--text-2 {
            left: 0vw;
            top: -3vw;
          }
          &--text-3 {
            right: 0;
            bottom: 4vw;
            left: 0;
            text-align: center;
            width: 100%;
          }
        }
      }
      &__section4 {
        padding: 10px;
        width: 100%;
        &--image-container {
          overflow: auto;
        }
        &--image-section-container{
          margin-bottom: 40px;
          width: 100%;
        }
        &--image-section {
          justify-content: flex-start;
          gap: 5px;
          &--logo {
            width: 60px;
            height: 20px;
          }
        }
      }
    }
  }
`,xe=(d.a.div`
  .product {
    &__section {
      margin-top: 90px;
      margin-bottom: 90px;
        &--heading {
          text-align: center;
          font-size: ${ge.a.fontSize.xl2};
          font-weight: 800;
          margin: auto;
          max-width: 400px;
          margin-bottom: 56px;
          padding: 30px;
        }
      }
    &__theme-color {
      color: ${ge.a.color.primary}
    }

    &__card-section {
      justify-content: center;
      overflow: auto;
      max-width: 100vw;
      display: flex;
    }

    &__card {
      padding: 20px 60px;

      &--content {
        text-align: center;
        width: 388px;
        height: 294px;
        box-shadow: -3px 4px 10px 5px #F1F1F1;
        border-radius: 8px;
      }

      &--logo {
        img {
          margin: 40px 0 32px 0;
          width: 189px;
          heigh: 54px;
        }
      }

      &--text {
        font-family: Muli;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        text-align: center;
        line-height: 28px;
        padding: 0 32px;
        color: #333333;
      }

      &--button {
        position: relative;
        bottom: 30px;
        left: 60px;
        color: #666;
        background-color: ${ge.a.color.primary};
        border-color:  ${ge.a.color.primary};
        border-radius: 30px;
        width: 262px;
        height: 60px;
        font-size: 20px;
        font-weight: 800;
        cursor: pointer;
      }

      &--button:hover {
        color: #666;
        background-color: ${ge.a.color.primary};
        border-color:  ${ge.a.color.primary};
      }
      &--button:link {
        color: #666;
        background-color: ${ge.a.color.primary};
        border-color:  ${ge.a.color.primary};
      }
      &--button:active {
        color: #666;
        background-color: ${ge.a.color.primary};
        border-color:  ${ge.a.color.primary};
      }

      .ant-btn {
        color: #666;
        background-color: ${ge.a.color.primary};
        border-color:  ${ge.a.color.primary};
      }
    }
  }

  @media(max-width: 1000px) {
    .product {
      &__card {
        padding: 20px 20px;

        &--text {
          padding: 0 20px;
          font-size:17px;
        }

        &--content {
          max-width: 280px;
        }

        &--button {
          left: 6px;
        }
      }
    }

    @media(max-width: ${ge.a.layout.tablet}) {
      .product {
        &__section {
          margin-top: 50px;
          margin-bottom: 0px;

          &--heading {
            margin-bottom: 20px;
          }
        }
        &__card-section {
          justify-content: left;
        }
      }
`,d.a.div`
  @keyframes sliderNew {
    0%  {
      transform: translateX(0%);
    }
    100%  {
      transform: translateX(-100%);
    }
  }
  .testimonial {
    &__section {
      background-color: ${ge.a.color.white};
      text-align: center;
      padding: 30px 0;
      &--heading {
        text-align: center;
        font-size: ${ge.a.fontSize.xl2};
        max-width: 600px;
        margin: auto;
        padding-top: 30px;
        line-height: 1.25;
        font-family: ${ge.a.font.primary};
        font-weight: ${ge.a.fontWeight.extrabold};
        margin-bottom: 30px;
      }
    }
    &__card-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-items: start;
      max-width: 100%;
      overflow: hidden;
      padding: 20px 0;
    }
    &__card-section {
      display: -webkit-box;
      align-self: start;
      position: relative;
      width: calc(5600px - 100vw);
      gap: 30px;
      animation: sliderNew 35000ms infinite linear 0s forwards running ;
      cursor: pointer;
      :hover {
        animation-play-state: paused;
      }
    }
    &__card {
      width: 320px;
      text-align: center;
      padding: 20px;
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;
      border-radius: 25px;
      &--head {
        padding-bottom: 15px;
        width: 70px;
        height: 70px;
        margin: auto;
        background: #fad200;
        border-radius: 50%;
        img {
          width: 70px;
          height: 70px;
          object-fit: contain;
          background-color: #fff;
        }
      }
      &--heading {
        font-size: 18px;
        font-weight: 800;
        margin: 20px 0;
      }
      &--text{
        font-family: Muli;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        text-align: center;
        color: #666;
      }
    }
  }
  @media(max-width: ${ge.a.layout.tablet}) {
    .testimonial {
      &__card-section {
        width: 5220px;
        animation-duration: 78000ms;
      }
    }
  }
`);var fe=t(357),je=d.a.div`
  .section {
    &__container {
      height: calc(100vh - 200px);
      min-height: 600px;
      background-image: url('${e=>e.bgDesktop}');
      background-size: 108%;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
    }
    &__heading {
      text-align: center;
      font-size: ${ge.a.fontSize.xl4};
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.25;
      font-family: ${ge.a.font.primary};
      font-weight: ${ge.a.fontWeight.extrabold};
    }
    &__sub-heading {
      font-family: ${ge.a.font.primary};
      color: ${ge.a.color.mediumGray};
      font-size: ${ge.a.fontSize.base};
      text-align: center;
      margin-bottom: 30px;
    }
    &__button {
      background-color: ${ge.a.color.primary};
      padding: 20px 60px;
      border: none;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: ${ge.a.fontWeight.extrabold};
      font-size: ${ge.a.fontSize.small};
    }
    &__theme-color {
      color: ${ge.a.color.primary}
    }
  }
  @media(max-width: ${ge.a.layout.tablet}) {
    .section {
      &__container {
        background-image: url('${e=>e.bgMobile}');
        min-height: 500px;
        background-size: 220%;
        height: auto;
        background-position: 20% bottom;
      }
      &__heading {
        font-size: ${ge.a.fontSize.xl};
        padding: 15px;
        margin-bottom: 0;
      }
    }
  }
`;var ke=e=>Object(k.jsx)(je,{className:e.className,bgDesktop:e.BgImages.desktop,bgMobile:e.BgImages.mobile,children:Object(k.jsxs)("section",{className:"section__container",children:[Object(k.jsx)("h1",{className:"section__heading",children:Object(k.jsx)(fe.a,{id:"<span>Menjadikan Asuransi Lebih</span> {br} Mudah, Terjangkau & Menyenangkan",values:{br:Object(k.jsx)("br",{}),span:e=>Object(k.jsx)("span",{className:"section__theme-color",children:e})}})}),e.content.button&&Object(k.jsx)("button",{className:"section__button",children:e.content.button})]})});var we=()=>Object(k.jsxs)("section",{className:"home__section3",children:[Object(k.jsx)("h3",{className:"home__section3--heading",children:Object(k.jsx)(fe.a,{id:"<span>Dengan PasarPolis</span> Semua Serba Menyenangkan",values:{span:e=>Object(k.jsx)("span",{className:"home__theme-color",children:e})}})}),Object(k.jsx)("p",{className:"home__section3--sub-heading",children:Object(k.jsx)(fe.a,{id:"Melalui inovasi and teknologi, PasarPolis mengubah pengalaman berasuransi menjadi lebih menyenangkan di dalam keseharian masyarakat melalui perlindungan yang lebih mudah diakses, terjangkau biayanya, dan proses yang tidak ribet  mulai dari penerbitan polis hingga proses klaim yang praktis dan cepat."})}),Object(k.jsxs)("div",{className:"home__section3--image-section",children:[Object(k.jsx)("p",{className:"home__section3--image-section--text home__section3--image-section--text-1",children:Object(k.jsx)(fe.a,{id:"Proses Beli & Klaim Asuransi Yang Praktis"})}),Object(k.jsx)("p",{className:"home__section3--image-section--text home__section3--image-section--text-2",children:Object(k.jsx)(fe.a,{id:"Beragam Produk yang Melekat di Dalam Keseharian Anda"})}),Object(k.jsx)("p",{className:"home__section3--image-section--text home__section3--image-section--text-3",children:Object(k.jsx)(fe.a,{id:"Proses Klaim Instan"})})]})]});var ye=e=>Object(k.jsxs)("section",{className:"home__section4",children:[Object(k.jsx)("h3",{className:"home__section4--heading",children:Object(k.jsx)(fe.a,{id:"Partner <span>Kami</span>",values:{span:e=>Object(k.jsx)("span",{className:"home__theme-color",children:e})}})}),Object(k.jsx)("div",{className:"home__section4--image-container",children:e.partner.map((e=>Object(k.jsxs)("div",{className:"home__section4--image-section-container",children:[Object(k.jsx)("p",{className:"home__section4--image-section--heading",children:Object(k.jsx)(fe.a,{id:e.name})}),Object(k.jsx)("div",{className:"home__section4--image-section",children:e.partner.map((e=>Object(k.jsx)("img",{className:"home__section4--image-section--logo",src:e.logo,alt:e.label})))})]})))})]});var Oe=e=>Object(k.jsx)(xe,{children:Object(k.jsxs)("div",{className:"testimonial__section",children:[Object(k.jsx)("h3",{className:"testimonial__section--heading",children:Object(k.jsx)(fe.a,{id:"<span>Alasan Pelanggan</span> Mempercayai PasarPolis",values:{span:e=>Object(k.jsx)("span",{className:"home__theme-color",children:e})}})}),Object(k.jsx)("div",{className:"testimonial__card-container",children:Object(k.jsx)("div",{className:"testimonial__card-section",children:e.testmonialData.map((e=>Object(k.jsxs)("div",{className:"testimonial__card",children:[Object(k.jsx)("div",{className:"testimonial__card--head",children:e.logo&&Object(k.jsx)("img",{src:e.logo})}),Object(k.jsxs)("div",{className:"testimonial__card--body",children:[Object(k.jsx)("div",{className:"testimonial__card--heading",children:e.name}),Object(k.jsx)("div",{className:"testimonial__card--text",children:Object(k.jsx)(fe.a,{id:e.text})})]})]})))})})]})});const ve={BgImages:{desktop:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/landing-banner.png",mobile:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/landing-banner-mobile.png"},content:{highlighted:"Menjadikan Asuransi Lebih ",heading:"Mudah, Terjangkau & Menyenangkan"}},_e=[{name:"Partner Penyedia Asuransi",partner:[{label:"Adira",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/adira-logo.png"},{label:"Allianz",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/allianz-logo.png"},{label:"Chubb",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/Chubb-logo2.png"},{label:"Sinarmas",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/asuransi-jiwa-logo.png"},{label:"FWD",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/fwd-logo.png"},{label:"Etiqa",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/etiqa-logo.png"},{label:"KB",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/kb-logo.png"},{label:"Lippo",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/insurance-logo/lippo-insurance-logo.png"}]},{name:"Partner E-Commerce/Aplikasi",partner:[{label:"Bukalapak",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/bukalapak-logo.png"},{label:"Gojek",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/gojek-logo.png"},{label:"Shopee",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/shopee-logo.png"},{label:"Sicepat",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/sicepat-logo.png"},{label:"Tokopedia",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/tokopedia-logo.png"},{label:"MRT",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/mrt-logo.png"},{label:"MI",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/business-logo/mi-logo.png"}]},{name:"Partner Media",partner:[{label:"Bisnis.com",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/bisnis-logo.png"},{label:"DailySocial",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/daily-social-logo.png"},{label:"Detik.com",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/detik-logo.png"},{label:"IdnTimes",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/idn-times-logo.png"},{label:"Liputan6",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/liputan6-logo.png"},{label:"Kompas.com",logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/media-logo/kompasdotcom-logo.png"}]}],ze=[{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-1.png",name:"Zylgwyn Lucas",text:"Terima kasih untuk servisnya yang luar biasa, klaim yang cepat dan prosesnya mudah."},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-2.png",name:"Armansyah",text:"Saya driver gojek. Hp saya terjatuh dan rusak karena terlindas mobil. Setelah saya ajukan klaim ke PasarPolis, alhamdulillah klaim diterima dan dana klaim langsung ditrasnfer ke rekening saya. Terimah kasih PasarPolis Indonesia."},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-3.png",name:"Imas Nurul Aisyah",text:"Saya beli asuransi Gosure untuk smartphone ku. Bener-bener mudah buat melindungi smarphone ku, yang aku lakukan cuma scan bar code. Kita perlu pakai lebih banyak teknologi seperti ini di masa depan untuk perusahaan asuransi. Terima kasih PasarPolis."},{name:"Obet Richardo",text:"keren sekali, sy gak nyangka aja, cuman iseng2 aja ikut kan di pembelian tiket. Pas ternya emmg delay, sy klaim.. gak ribet, gak ada syarat. gak sampe 1 jam langsung cair 250rb x 2 org = 500rb. pdhl hrg tiket untuk 2 org 800rb. pokokx salut sekali"},{name:"Coraima Cyndi",text:"Sangat puas dengan servisnya. Klaim dan dana kompensasinya masuk dengan cepat. Terima kasih PasarPolis \ud83d\udc4d  \ud83e\udd29"},{name:"Julia Christina",text:"Beli tiket pesawat dari pegi-pegi dan kena delay 1 jam. Saya langsung dapet notifikasi dari PasarPolis dan dapat kompensasinya super cepat."},{name:"Godzila Ginting",text:"Pelayanan sangat memuaskan, hp saya note 9, asuransi layar pecah, 8 bln kemudian hp saya retak dan pecah untung ada PasarPolis yg bisa membantu asuransi layar retak/pecah, total klaim saya 3 jt dibayar penuh. Trima kasih pasarpolis\ud83d\ude4f\ud83d\ude4f\ud83d\ude01"},{name:"MannKEi Official",text:"Alhamdulillah klaim kerusakan LCD HP saya telah selesai diproses, overall sebenarnya pengajuannya ga sulit dan ribet yang penting kelengkapan bukti pendukung yg di minta bisa dilengkapi dan sesuai."},{name:"Deddy Firmansyah",text:"Terimakasih pasarpolis, asuransi yg sangat murah membantu para driver gojek dan sangat mudah proses klaimnya dan sangat cepat."},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-10.png",name:"Abhishek Dwivedi",text:"Saya akan merekomendasikan PasarPolis jika Anda mencari broker asuransi. Waktu mobil saya tertabrak, PasarPolis membantu saya dan tentunya apa yang diberikan sesuai dengan penawaran di awal beli asuransi."},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-11.png",name:"Fionita Andriany",text:"pelayanan sangat cepat responnya. flight delay langsung diproses pencairan klaim. Sempat ada kendala tapi customer servicenya sangat membantu jadi lancar dan mudah sekali proses klaimnya. Ga perlu sampai 24 jam, dana klaim sudah masuk ke rekening"},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-12.png",name:"Yazmarini Yunus",text:"karena sesuatu hal saya membatalkan pembelian tiket pesawat via toped.. Alhamdulillah karena ikut asuransi via pasarpolis.. refund tiket mudah dan penggantian sesuai dgn nilai yg qt bayarkan (100%) tanpa potongan apapun.. tengkiuuu pasarpolis"},{name:"Rohadi",text:"Terima kasih untuk servisnya yang luar biasa, klaim yang cepat dan prosesnya mudah."},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-14.png",name:"Silvia Domara",text:"Prosesnya cepat hanya 1 hari langsung cair\u2026next klo terbang kemana2 ikut asuransi dr pasar polis..jadi aman dan tenang\u2026recommended bgt"},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-15.png",name:"Haslinda Payabadar",text:"Beli polisnya gampang, dan pas klaim cepet juga ternyata. Makasih ya"},{logo:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/testimonial/user-16.png",name:"Albert Manalu",text:"Terima kasih ya Pasar Polis, kini perjalanan terasa nyaman dan aman. Klaim tanpa ribet. Maju terus dan sukses selalu untuk Pasar Polis. Luar biasa.. \ud83d\udc4d"}],{DEFAULT_ACTIVE:Me,HERO_CONFIG:Ne,SHOW_AVA_POPUP:Pe}=he.a,{showOverlay:$e,resetOverlay:Se}=g.a;class Ce extends o.Component{constructor(){super(...arguments),this.state={category:Me,hideNav:!1,bannerImage:Ne[Me].bannerImage,mobileBannerImage:Ne[Me].mobileBannerImage,isVnWebsite:window.location.hostname.endsWith("vn")},this.activeHeroList=Object.keys(Ne).filter((e=>Ne[e])),this.componentDidMount=()=>{const{isVnWebsite:e}=this.state;window.addEventListener("resize",this.resize.bind(this)),this.resize(),window.scrollTo(0,0)},this.onChangeTabCategory=(e,a,t)=>{this.setState({category:e,bannerImage:a,mobileBannerImage:t})},this.onMobileTabSelect=e=>{this.props.history.push(e)},this.renderTab=e=>Object(k.jsx)(me,{children:this.activeHeroList.map((e=>{const a=Ne[e];return Object(k.jsxs)("li",{id:a.id,className:this.state.category===a.category?"selected":"",onClick:e=>this.onChangeTabCategory(a.category,a.bannerImage,a.mobileBannerImage),children:[Object(k.jsxs)("a",{children:[Object(k.jsx)("i",{className:a.iconCss}),"\xa0",Object(k.jsx)(c.a,{id:a.titleId})]}),Object(k.jsx)("div",{className:"overlay"}),a.labelGif&&a.labelGifClassName&&Object(k.jsx)("img",{src:a.labelGif,alt:a.id,className:a.labelGifClassName})]},a.id)}))}),this.renderCard=e=>{switch(e){case"cthealth":return Object(k.jsx)(N,{...this.props},"cthealth");case"starHealth":return Object(k.jsx)(S,{...this.props},"starhealth");case"bike":return Object(k.jsx)(I,{...this.props},"bike");case"corona":return Object(k.jsx)(de,{...this.props},"corona");default:return Object(k.jsx)(te,{...this.props},"crackscreen")}}}resize(){this.setState({hideNav:window.innerWidth<=760})}render(){const{isVnWebsite:e}=this.state;return Object(k.jsxs)(pe,{children:[Object(k.jsxs)(n.Helmet,{children:[Object(k.jsx)("meta",{charSet:"utf-8"}),Object(k.jsx)("meta",{name:"keywords",content:"asuransi, asuransi terbaik di indonesia"}),Object(k.jsx)("title",{children:"Asuransi Sesuai Gaya Hidup Kamu"}),Object(k.jsx)("meta",{name:"description",content:"Asuransi terjangkau untuk melindungi semua momen istimewa Anda dan keluarga. Proses Mudah & Modern dengan harga kompetitif."})]}),Object(k.jsxs)(ue,{children:[Object(k.jsx)(ke,{className:"home__main-section",BgImages:ve.BgImages,content:ve.content}),Object(k.jsx)(we,{}),Object(k.jsx)(ye,{partner:_e}),Object(k.jsx)(Oe,{testmonialData:ze})]}),Object(k.jsx)(r.a,{})]})}}a.default=Object(s.b)((e=>{}),{showOverlay:$e,resetOverlay:Se})(Ce)}}]);
//# sourceMappingURL=13.bcf360a2.chunk.js.map