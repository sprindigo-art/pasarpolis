(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[18],{359:function(a,n,e){"use strict";var i=e(0),t=e(69),r=e(70);const s=t.a.div`

  font-weight: ${r.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${r.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${r.a.fontWeight.bold}
  }
`;var d=e(4);var l=a=>{let{name:n,addressLines:e=[],phones:i=[],emails:t=[],viewMapUrl:r}=a;return Object(d.jsxs)(s,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("small",{className:"text-bold",children:n})}),e.map(((a,n)=>Object(d.jsx)("div",{children:Object(d.jsx)("small",{className:"text-white",children:a})},n))),Object(d.jsx)("br",{}),i.map(((a,n)=>Object(d.jsx)("div",{children:Object(d.jsxs)("small",{className:"text-white",children:[Object(d.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(d.jsx)("a",{className:"footer__link",href:`tel:${a.tel}`,children:a.display})]})},n))),t.map(((a,n)=>Object(d.jsx)("div",{children:Object(d.jsxs)("small",{className:"text-white",children:[Object(d.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(d.jsx)("a",{className:"footer__link",href:`mailto:${a}`,children:a})]})},n))),Object(d.jsx)("br",{}),Object(d.jsx)("a",{target:"_blank",href:r,className:"text-yellow",children:"View Map"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"flex-container ",children:[Object(d.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(d.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(d.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(d.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(d.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(d.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(d.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(d.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const m=t.a.div`
  overflow: hidden;
  position: relative;
  z-index: 0;

  .slides-wrapper {
    width: 100%;
    display: flex;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    transform: translate3d(calc(${a=>-a.current} * (100% - 0px)), 0px, 0px);
    transition: transform 0.5s ease-out;
  }
  .slide {
    width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
  }

`;var b=a=>{let{slides:n=[1,2,3],current:e=0}=a;return Object(d.jsx)(m,{current:e,children:Object(d.jsx)("div",{className:"slides-wrapper flex-container",children:n.map(((a,n)=>Object(d.jsx)("div",{className:"slide",children:a},n)))})})};var u={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const k=t.a.div`
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
`;var g=()=>{const[a,n]=Object(i.useState)(0);return Object(d.jsxs)(k,{children:[Object(d.jsx)("ul",{className:"flex-container country-flag-container",children:u.countries.map(((e,i)=>Object(d.jsx)("li",{className:"country-icon-li",children:Object(d.jsx)("div",{onClick:()=>n(i),children:Object(d.jsx)("img",{className:i===a?"country-icon active":"country-icon",src:e.countryIconImage})})},i)))}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{slides:u.countries.map((a=>Object(d.jsx)(l,{...a},a.name))),current:a})})]})};var c={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const o=t.a.footer`
  .heading {
    font-weight: ${r.a.fontWeight.extrabold};
    font-family: ${r.a.font.primary};
    font-size: ${r.a.fontSize.xs};
    color: ${r.a.color.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .gap {
    gap: 40px;
  }

  .normal-text {
    font-weight: ${r.a.fontWeight.hairline};
    font-family: ${r.a.font.primary};
    font-size: ${r.a.fontSize.xs};
  }

  .margin-b-40 {
    margin-bottom: 40px;
  }

  .small-text {
    font-weight: ${r.a.fontWeight.hairline};
    font-family: ${r.a.font.primary};
    font-size: ${r.a.fontSize.xs2};
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
    font-size: ${r.a.fontSize.xs};
    font-family: ${r.a.font.primary};
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
      color: ${r.a.color.white} !important;
    }
  }
  .text-yellow {
    color:  ${r.a.color.primary} !important;
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
`;var h=e(357);n.a=()=>Object(d.jsx)(o,{children:Object(d.jsx)("div",{className:"footer-content",children:Object(d.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(d.jsx)("div",{className:"others-container text-small",children:Object(d.jsxs)("div",{className:"margin-b-40",children:[Object(d.jsx)("h4",{className:"text-strong heading",children:Object(d.jsx)(h.a,{id:"Informasi"})}),Object(d.jsx)("ul",{className:"text-small others-list",children:c.information.map((a=>Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"footer__link",href:a.link,children:Object(d.jsx)(h.a,{id:a.label})})})))})]})}),Object(d.jsx)("div",{className:"others-container text-small",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-strong heading",children:Object(d.jsx)(h.a,{id:"Perusahaan"})}),Object(d.jsx)("ul",{className:"text-small others-list",children:c.company.map((a=>Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"footer__link",replace:!0,href:a.link,children:Object(d.jsx)(h.a,{id:a.label})})})))})]})}),Object(d.jsxs)("div",{className:"address-container text-small",children:[Object(d.jsx)("h3",{className:"text-strong heading",children:Object(d.jsx)(h.a,{id:"Kantor kami"})}),Object(d.jsx)(g,{})]})]})})})},650:function(a,n,e){"use strict";e.r(n);e(138);var i=e(43),t=(e(139),e(30)),r=(e(443),e(440)),s=(e(212),e(112)),d=e(0);var l=e(69).a.div`
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
`,m=e(359),b=e(4);const u=s.a.TabPane,k=r.a.Panel,g=window.matchMedia("(max-width: 700px)");let c="left";c=g.matches?"top":"left";class o extends d.Component{componentDidMount(){window.scrollTo(0,0)}render(){return Object(b.jsxs)(l,{children:[Object(b.jsxs)(i.a,{justify:"center",children:[Object(b.jsx)(t.a,{span:2}),Object(b.jsx)(t.a,{span:20,children:Object(b.jsxs)(s.a,{defaultActiveKey:"1",tabPosition:c,children:[Object(b.jsxs)(u,{tab:"General",children:[Object(b.jsx)("h1",{children:"FAQ"}),Object(b.jsx)("h2",{children:"General"}),Object(b.jsxs)(r.a,{defaultActiveKey:["1"],accordion:!0,children:[Object(b.jsx)(k,{header:"Kenapa saya harus membeli asuransi?",children:Object(b.jsx)("p",{children:"Karena tinggal di kota memiliki banyak resiko. Tahukah Anda, di Indonesia rata-rata 120 orang meninggal dunia setiap minggu karena kecelakaan jalan raya. 120 orang sama dengan jumlah penumpang pesawat jumbo jet! (Sumber: di sini) Kita pasti takut dan cemas ketika sebuah pesawat mengalami kecelakaan, bayangkan jumlah yang sama tetapi disebabkan oleh kecelakaan jalan raya setiap minggunya! Selain itu, gaya hidup kita juga semakin beresiko terhadap berbagai macam penyakit. Makanan tinggi kolesterol dan dipenuhi berbagai bahan kimia berbahaya menyebabkan semakin tingginya resiko kita terkena berbagai penyakit berbahaya seperti jantung, kanker, gagal ginjal, diabetes, dan lainnya. Resiko ini tidak hanya menghantui orang-orang tua, tetapi semakin banyak anak muda terkena berbagai resiko penyakit akibat gaya hidup tidak sehat."})},"1"),Object(b.jsx)(k,{header:"Bagaimana asuransi dapat membantu?",children:Object(b.jsxs)("p",{children:["Meskipun Anda tak dapat terhindar dari resiko, Anda dapat melindungi dari kerugian finansial yang diakibatkan oleh beragam resiko dengan bantuan dari perusahaan asuransi yang ahli dalam pengelolaan resiko.",Object(b.jsx)("br",{}),"Kami di Pasar Polis\xae sangat berharap bahwa Anda dan keluarga Anda selalu sehat dan dalam keadaan aman tentram, namun kita bersama dapat merancang rencana untuk melindungi Anda dari beragam resiko.",Object(b.jsx)("br",{}),"Perusahaan asuransi mengumpulkan uang nasabah sedikit demi sedikit, disebut dengan Premi, dan membayar sejumlah uang bagi nasabah yang terkena resiko (disebut dengan Klaim).Mengapa Anda membeli asuransi? Karena yang Anda beli adalah perlindungan bagi keluarga dari kehilangan finansial yang diakibatkan dari beragam resiko yang dapat menimpa.",Object(b.jsx)("br",{}),"Misalnya, Anda memiliki suami/istri, dua anak yang masih di bawah umur, kredit pinjaman rumah dan kredit pinjaman kendaraan. Jika Anda meninggal beberapa tahun ke depan, berapa banyak uang yang dibutuhkan suami/istri Anda untuk membayar hutang, berbagai pengeluaran, termasuk biaya pendidikan anak-anak? Atau, bagaimana jika orang tua Anda tiba-tiba terserang stroke sehingga membutuhkan perawatan intensif di rumah? Bagaimana Anda membayarnya? ",Object(b.jsx)("br",{}),"Perlindungan Asuransi dapat melindungi Anda, usaha Anda dan orang-orang tercinta Anda dari kerugian finansial yang terkait dengan berbagai resiko yang mungkin datang. Banyak sekali beragam tipe asuransi yang dapat dipertimbangkan, termasuk asuransi jiwa, asuransi kesehatan, asuransi kecelakaan, asuransi kendaraan, asuransi kepemilikan rumah/properti, dan lain sebagainya.",Object(b.jsx)("br",{}),"Dapatkah saya hanya mengandalkan keberuntungan agar terhindar dari resiko?",Object(b.jsx)("br",{}),"Kadang keberuntungan tidak selalu bersama kita, tetapi kita harus selalu dapat mengendalikan hidup kita kini dan masa depan. Kita selalu dihadapkan oleh beragam resiko setiap hari, begitu pula dengan orang-orang yang kita cintai. Mengandalkan keberuntungan untuk melindungi mereka tidaklah cukup.",Object(b.jsx)("br",{}),"Setiap resiko hadir dengan beragam kerugian dan kehilangan. Resiko bukan hanya kematian. Kesulitan dan kerugian finansial kerap hadir dalam setiap resiko."]})},"2"),Object(b.jsx)(k,{header:"Perusahaan tempat saya bekerja sudah memberikan perlindungan. Cukupkah itu?",children:Object(b.jsxs)("p",{children:["Sebagian dari Anda mungkin cukup beruntung mendapatkan manfaat dari asuransi yang diberikan oleh kantor Anda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tapi itu hanya terjamin selama Anda bekerja untuk perusahaan tersebut. Asuransi akan lebih murah jika dibeli di usia muda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Alangkah bijaksananya memiliki rencana asuransi untuk masa depan ketika Anda tak lagi bekerja untuk perusahaan tempat Anda bekerja sekarang.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Selain itu, Anda perlu perlindungan tambahan karena sebagian besar perusahaan melindungi resiko-resiko dasar sehingga lebih baik Anda memiliki perlindungan tambahan yang lebih besar dari yang diberikan oleh perusahaan tempat Anda bekerja."]})},"3"),Object(b.jsx)(k,{header:"Bukankah keluarga besar bisa membantu saya jika saya membutuhkan uang?",children:Object(b.jsxs)("p",{children:["Keluarga inti dan keluarga besar adalah sumber dukungan terpenting ketika kita sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tetapi kita tahu bahwa biaya sehari-hari mahal dan tentunya kita enggan membebani orang lain, bukan? Lagi pula bukan hal mudah untuk mengutarakan kondisi finansial kita ketika sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Kita harus bisa mengendalikan biaya yang mungkin muncul dari kejadian yang merugikan.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Itulah yang dilakukan asuransi untuk Anda dengan biaya yang terjangkau.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Biarkan keluarga Anda memberikan dukungan moril ketika Anda mengalami kemalangan dan biarkan perusahaan asuransi memberikan perlindungan finansial berupa klaim."]})},"4"),Object(b.jsx)(k,{header:"Biaya sehari-hari sangat mahal, bagaimana saya bisa menyisihkan uang untuk membayar premi?",children:Object(b.jsx)("p",{children:"Kita seringkali menunda membeli asuransi, sementara untuk membeli gadget baru tak perlu menunda-nunda. Padahal, memiliki rencana asuransi untuk melindungi Anda dan keluarga adalah yang terpenting karena kita tak pernah tahu kapan musibah datang."})},"5")]})]},"1"),Object(b.jsxs)(u,{tab:"Merencanakan asuransi",children:[Object(b.jsx)("h1",{children:"FAQ"}),Object(b.jsx)("h2",{children:"Merencanakan asuransi"}),Object(b.jsxs)(r.a,{defaultActiveKey:["1"],accordion:!0,children:[Object(b.jsx)(k,{header:"Bagaimana asuransi dapat membantu?",children:Object(b.jsxs)("p",{children:["Meskipun Anda tak dapat terhindar dari resiko, Anda dapat melindungi dari kerugian finansial yang diakibatkan oleh beragam resiko dengan bantuan dari perusahaan asuransi yang ahli dalam pengelolaan resiko.",Object(b.jsx)("br",{}),"Kami di Pasar Polis\xae sangat berharap bahwa Anda dan keluarga Anda selalu sehat dan dalam keadaan aman tentram, namun kita bersama dapat merancang rencana untuk melindungi Anda dari beragam resiko.",Object(b.jsx)("br",{}),"Perusahaan asuransi mengumpulkan uang nasabah sedikit demi sedikit, disebut dengan Premi, dan membayar sejumlah uang bagi nasabah yang terkena resiko (disebut dengan Klaim).Mengapa Anda membeli asuransi? Karena yang Anda beli adalah perlindungan bagi keluarga dari kehilangan finansial yang diakibatkan dari beragam resiko yang dapat menimpa.",Object(b.jsx)("br",{}),"Misalnya, Anda memiliki suami/istri, dua anak yang masih di bawah umur, kredit pinjaman rumah dan kredit pinjaman kendaraan. Jika Anda meninggal beberapa tahun ke depan, berapa banyak uang yang dibutuhkan suami/istri Anda untuk membayar hutang, berbagai pengeluaran, termasuk biaya pendidikan anak-anak? Atau, bagaimana jika orang tua Anda tiba-tiba terserang stroke sehingga membutuhkan perawatan intensif di rumah? Bagaimana Anda membayarnya? ",Object(b.jsx)("br",{}),"Perlindungan Asuransi dapat melindungi Anda, usaha Anda dan orang-orang tercinta Anda dari kerugian finansial yang terkait dengan berbagai resiko yang mungkin datang. Banyak sekali beragam tipe asuransi yang dapat dipertimbangkan, termasuk asuransi jiwa, asuransi kesehatan, asuransi kecelakaan, asuransi kendaraan, asuransi kepemilikan rumah/properti, dan lain sebagainya.",Object(b.jsx)("br",{}),"Dapatkah saya hanya mengandalkan keberuntungan agar terhindar dari resiko?",Object(b.jsx)("br",{}),"Kadang keberuntungan tidak selalu bersama kita, tetapi kita harus selalu dapat mengendalikan hidup kita kini dan masa depan. Kita selalu dihadapkan oleh beragam resiko setiap hari, begitu pula dengan orang-orang yang kita cintai. Mengandalkan keberuntungan untuk melindungi mereka tidaklah cukup.",Object(b.jsx)("br",{}),"Setiap resiko hadir dengan beragam kerugian dan kehilangan. Resiko bukan hanya kematian. Kesulitan dan kerugian finansial kerap hadir dalam setiap resiko."]})},"1"),Object(b.jsx)(k,{header:"Perusahaan tempat saya bekerja sudah memberikan perlindungan. Cukupkah itu?",children:Object(b.jsxs)("p",{children:["Sebagian dari Anda mungkin cukup beruntung mendapatkan manfaat dari asuransi yang diberikan oleh kantor Anda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tapi itu hanya terjamin selama Anda bekerja untuk perusahaan tersebut. Asuransi akan lebih murah jika dibeli di usia muda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Alangkah bijaksananya memiliki rencana asuransi untuk masa depan ketika Anda tak lagi bekerja untuk perusahaan tempat Anda bekerja sekarang.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Selain itu, Anda perlu perlindungan tambahan karena sebagian besar perusahaan melindungi resiko-resiko dasar sehingga lebih baik Anda memiliki perlindungan tambahan yang lebih besar dari yang diberikan oleh perusahaan tempat Anda bekerja."]})},"2"),Object(b.jsx)(k,{header:"Bukankah keluarga besar bisa membantu saya jika saya membutuhkan uang?",children:Object(b.jsxs)("p",{children:["Keluarga inti dan keluarga besar adalah sumber dukungan terpenting ketika kita sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tetapi kita tahu bahwa biaya sehari-hari mahal dan tentunya kita enggan membebani orang lain, bukan? Lagi pula bukan hal mudah untuk mengutarakan kondisi finansial kita ketika sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Kita harus bisa mengendalikan biaya yang mungkin muncul dari kejadian yang merugikan.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Itulah yang dilakukan asuransi untuk Anda dengan biaya yang terjangkau.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Biarkan keluarga Anda memberikan dukungan moril ketika Anda mengalami kemalangan dan biarkan perusahaan asuransi memberikan perlindungan finansial berupa klaim."]})},"3"),Object(b.jsx)(k,{header:"Biaya sehari-hari sangat mahal, bagaimana saya bisa menyisihkan uang untuk membayar premi?",children:Object(b.jsx)("p",{children:"Kita seringkali menunda membeli asuransi, sementara untuk membeli gadget baru tak perlu menunda-nunda. Padahal, memiliki rencana asuransi untuk melindungi Anda dan keluarga adalah yang terpenting karena kita tak pernah tahu kapan musibah datang."})},"4")]})]},"2"),Object(b.jsxs)(u,{tab:"Mengajukan Klaim",children:[Object(b.jsx)("h1",{children:"FAQ"}),Object(b.jsx)("h2",{children:"Mengajukan Klaim"}),Object(b.jsxs)(r.a,{defaultActiveKey:["1"],accordion:!0,children:[Object(b.jsx)(k,{header:"Bagaimana asuransi dapat membantu?",children:Object(b.jsxs)("p",{children:["Meskipun Anda tak dapat terhindar dari resiko, Anda dapat melindungi dari kerugian finansial yang diakibatkan oleh beragam resiko dengan bantuan dari perusahaan asuransi yang ahli dalam pengelolaan resiko.",Object(b.jsx)("br",{}),"Kami di Pasar Polis\xae sangat berharap bahwa Anda dan keluarga Anda selalu sehat dan dalam keadaan aman tentram, namun kita bersama dapat merancang rencana untuk melindungi Anda dari beragam resiko.",Object(b.jsx)("br",{}),"Perusahaan asuransi mengumpulkan uang nasabah sedikit demi sedikit, disebut dengan Premi, dan membayar sejumlah uang bagi nasabah yang terkena resiko (disebut dengan Klaim).Mengapa Anda membeli asuransi? Karena yang Anda beli adalah perlindungan bagi keluarga dari kehilangan finansial yang diakibatkan dari beragam resiko yang dapat menimpa.",Object(b.jsx)("br",{}),"Misalnya, Anda memiliki suami/istri, dua anak yang masih di bawah umur, kredit pinjaman rumah dan kredit pinjaman kendaraan. Jika Anda meninggal beberapa tahun ke depan, berapa banyak uang yang dibutuhkan suami/istri Anda untuk membayar hutang, berbagai pengeluaran, termasuk biaya pendidikan anak-anak? Atau, bagaimana jika orang tua Anda tiba-tiba terserang stroke sehingga membutuhkan perawatan intensif di rumah? Bagaimana Anda membayarnya? ",Object(b.jsx)("br",{}),"Perlindungan Asuransi dapat melindungi Anda, usaha Anda dan orang-orang tercinta Anda dari kerugian finansial yang terkait dengan berbagai resiko yang mungkin datang. Banyak sekali beragam tipe asuransi yang dapat dipertimbangkan, termasuk asuransi jiwa, asuransi kesehatan, asuransi kecelakaan, asuransi kendaraan, asuransi kepemilikan rumah/properti, dan lain sebagainya.",Object(b.jsx)("br",{}),"Dapatkah saya hanya mengandalkan keberuntungan agar terhindar dari resiko?",Object(b.jsx)("br",{}),"Kadang keberuntungan tidak selalu bersama kita, tetapi kita harus selalu dapat mengendalikan hidup kita kini dan masa depan. Kita selalu dihadapkan oleh beragam resiko setiap hari, begitu pula dengan orang-orang yang kita cintai. Mengandalkan keberuntungan untuk melindungi mereka tidaklah cukup.",Object(b.jsx)("br",{}),"Setiap resiko hadir dengan beragam kerugian dan kehilangan. Resiko bukan hanya kematian. Kesulitan dan kerugian finansial kerap hadir dalam setiap resiko."]})},"1"),Object(b.jsx)(k,{header:"Perusahaan tempat saya bekerja sudah memberikan perlindungan. Cukupkah itu?",children:Object(b.jsxs)("p",{children:["Sebagian dari Anda mungkin cukup beruntung mendapatkan manfaat dari asuransi yang diberikan oleh kantor Anda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tapi itu hanya terjamin selama Anda bekerja untuk perusahaan tersebut. Asuransi akan lebih murah jika dibeli di usia muda.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Alangkah bijaksananya memiliki rencana asuransi untuk masa depan ketika Anda tak lagi bekerja untuk perusahaan tempat Anda bekerja sekarang.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Selain itu, Anda perlu perlindungan tambahan karena sebagian besar perusahaan melindungi resiko-resiko dasar sehingga lebih baik Anda memiliki perlindungan tambahan yang lebih besar dari yang diberikan oleh perusahaan tempat Anda bekerja."]})},"2"),Object(b.jsx)(k,{header:"Bukankah keluarga besar bisa membantu saya jika saya membutuhkan uang?",children:Object(b.jsxs)("p",{children:["Keluarga inti dan keluarga besar adalah sumber dukungan terpenting ketika kita sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Tetapi kita tahu bahwa biaya sehari-hari mahal dan tentunya kita enggan membebani orang lain, bukan? Lagi pula bukan hal mudah untuk mengutarakan kondisi finansial kita ketika sedang mengalami masa-masa sulit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Kita harus bisa mengendalikan biaya yang mungkin muncul dari kejadian yang merugikan.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Itulah yang dilakukan asuransi untuk Anda dengan biaya yang terjangkau.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Biarkan keluarga Anda memberikan dukungan moril ketika Anda mengalami kemalangan dan biarkan perusahaan asuransi memberikan perlindungan finansial berupa klaim."]})},"3"),Object(b.jsx)(k,{header:"Biaya sehari-hari sangat mahal, bagaimana saya bisa menyisihkan uang untuk membayar premi?",children:Object(b.jsx)("p",{children:"Kita seringkali menunda membeli asuransi, sementara untuk membeli gadget baru tak perlu menunda-nunda. Padahal, memiliki rencana asuransi untuk melindungi Anda dan keluarga adalah yang terpenting karena kita tak pernah tahu kapan musibah datang."})},"4")]})]},"3")]})}),Object(b.jsx)(t.a,{span:2})]}),Object(b.jsx)(m.a,{})]})}}n.default=o}}]);
//# sourceMappingURL=18.4c585db0.chunk.js.map