(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[19],{359:function(a,n,e){"use strict";var i=e(0),t=e(69),s=e(70);const r=t.a.div`

  font-weight: ${s.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${s.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${s.a.fontWeight.bold}
  }
`;var m=e(4);var l=a=>{let{name:n,addressLines:e=[],phones:i=[],emails:t=[],viewMapUrl:s}=a;return Object(m.jsxs)(r,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("small",{className:"text-bold",children:n})}),e.map(((a,n)=>Object(m.jsx)("div",{children:Object(m.jsx)("small",{className:"text-white",children:a})},n))),Object(m.jsx)("br",{}),i.map(((a,n)=>Object(m.jsx)("div",{children:Object(m.jsxs)("small",{className:"text-white",children:[Object(m.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(m.jsx)("a",{className:"footer__link",href:`tel:${a.tel}`,children:a.display})]})},n))),t.map(((a,n)=>Object(m.jsx)("div",{children:Object(m.jsxs)("small",{className:"text-white",children:[Object(m.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(m.jsx)("a",{className:"footer__link",href:`mailto:${a}`,children:a})]})},n))),Object(m.jsx)("br",{}),Object(m.jsx)("a",{target:"_blank",href:s,className:"text-yellow",children:"View Map"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"flex-container ",children:[Object(m.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(m.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(m.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(m.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(m.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(m.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(m.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(m.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const o=t.a.div`
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

`;var d=a=>{let{slides:n=[1,2,3],current:e=0}=a;return Object(m.jsx)(o,{current:e,children:Object(m.jsx)("div",{className:"slides-wrapper flex-container",children:n.map(((a,n)=>Object(m.jsx)("div",{className:"slide",children:a},n)))})})};var p={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const c=t.a.div`
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
`;var k=()=>{const[a,n]=Object(i.useState)(0);return Object(m.jsxs)(c,{children:[Object(m.jsx)("ul",{className:"flex-container country-flag-container",children:p.countries.map(((e,i)=>Object(m.jsx)("li",{className:"country-icon-li",children:Object(m.jsx)("div",{onClick:()=>n(i),children:Object(m.jsx)("img",{className:i===a?"country-icon active":"country-icon",src:e.countryIconImage})})},i)))}),Object(m.jsx)("div",{children:Object(m.jsx)(d,{slides:p.countries.map((a=>Object(m.jsx)(l,{...a},a.name))),current:a})})]})};var u={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const g=t.a.footer`
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
`;var b=e(357);n.a=()=>Object(m.jsx)(g,{children:Object(m.jsx)("div",{className:"footer-content",children:Object(m.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(m.jsx)("div",{className:"others-container text-small",children:Object(m.jsxs)("div",{className:"margin-b-40",children:[Object(m.jsx)("h4",{className:"text-strong heading",children:Object(m.jsx)(b.a,{id:"Informasi"})}),Object(m.jsx)("ul",{className:"text-small others-list",children:u.information.map((a=>Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"footer__link",href:a.link,children:Object(m.jsx)(b.a,{id:a.label})})})))})]})}),Object(m.jsx)("div",{className:"others-container text-small",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{className:"text-strong heading",children:Object(m.jsx)(b.a,{id:"Perusahaan"})}),Object(m.jsx)("ul",{className:"text-small others-list",children:u.company.map((a=>Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"footer__link",replace:!0,href:a.link,children:Object(m.jsx)(b.a,{id:a.label})})})))})]})}),Object(m.jsxs)("div",{className:"address-container text-small",children:[Object(m.jsx)("h3",{className:"text-strong heading",children:Object(m.jsx)(b.a,{id:"Kantor kami"})}),Object(m.jsx)(k,{})]})]})})})},642:function(a,n,e){"use strict";e.r(n);var i=e(0),t=e(69);var s=t.a.div`
margin-top:60px;
margin-bottom:80px;
padding-inline: 100px;
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
    margin-top:15px;
    padding-inline: 30px;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    font-size: 16px;
  }
  .ant-tabs-nav {
    font-size: 16px;
  }
`,r=e(359),m=e(357);var l={"Kebijakan Privasi":{content1:'Kami, PT Pasarpolis Indonesia dan grup perusahaan yang terkait dengan PasarPolis (disebut "Kami", "PasarPolis"), sangat menghargai dan melindungi privasi Anda. Kebijakan Privasi ini ("Kebijakan") menjabarkan informasi yang kami kumpulkan dari Anda ("Anda") saat mengakses dan menggunakan situs web pasarpolis.io, aplikasi mobile ("App"), produk dan layanan yang disediakan oleh kami (selanjutnya secara bersama-sama disebut sebagai "Layanan"), dan bagaimana cara Kami melindungi dan menggunakannya.',content2:"Kebijakan ini diharapkan membuat Anda sadar akan pilihan-pilihan yang diberikan kepada Anda ketika mengakses dan menggunakan Layanan Kami. Mohon agar dipahami bahwa Kebijakan ini hanya akan berlaku terhadap informasi yang Kami kumpulkan dari Anda melalui Layanan. Kami tidak bertanggung jawab terhadap pengumpulan informasi yang dilakukan oleh situs iklan atau link ke website atau aplikasi yang tidak dioperasikan oleh PasarPolis. Kebijakan ini juga tidak berlaku untuk informasi pihak ketiga manapun, dan Kami tidak bertanggung jawab untuk isi atau praktik privasi yang dilakukan oleh pihak ketiga tersebut.",content3:"Mohon sediakan waktu Anda untuk memahami Kebijakan ini sebelum menggunakan Layanan Kami. Silakan menghubungi kami melalui nomor Whatsapp 081 834 3494 atau email di cs@pasarpolis.com jika Anda memiliki pertanyaan.",subHeading1:"PERSETUJUAN ATAS KEBIJAKAN DAN PERUBAHANNYA",content4:"Dengan mengakses atau menggunakan Layanan Kami, Anda telah menyetujui Kebijakan serta Syarat dan Ketentuan Kami.",content5:"Kami memiliki hak penuh untuk mengubah, memodifikasi, dan menambahkan atau menghapus ketentuan-ketentuan pada Kebijakan ini. Kami menyarankan Anda untuk selalu membaca kembali dan meninjau Kebijakan ini dari waktu ke waktu selama Anda menggunakan Layanan. Selama Anda masih melanjutkan untuk mengakses atau menggunakan Layanan maka Anda akan dianggap telah menyetujui dan menerima seluruh perubahan pada Kebijakan ini.",subHeading2:"INFORMASI YANG KAMI KOLEKSI",content6:"Informasi terkait data diri Anda seperti selanjutnya tertera di dalam dokumen Kebijakan ini, selanjutnya akan disebut sebagai \u201cInformasi Pribadi\u201d, yang akan mengidentifikasi Anda sebagai pengunjung situs web Kami. Informasi Pribadi tersebut dapat Anda berikan secara langsung (sebagai contoh, saat Anda mengunjungi halaman Karir di situs web Kami), maupun terkumpul secara otomatis ketika Anda menggunakan situs web Kami.",content7:"Dengan mengunduh, menggunakan situs web dan memanfaatkan Layanan Kami, maka Anda sudah memberikan persetujuan kepada Kami untuk mengoleksi, menggunakan, mengelola, mentransfer dan mengungkapkan Informasi Pribadi Anda kepada pihak yang  berkepentingan sebagaimana disebutkan dalam bagian PENGGUNAAN INFORMASI PRIBADI di bawah ini.",content8:"Penting sekali untuk diingat bahwa Kami hanya mengoleksi apa yang Kami butuhkan dan menggunakan Informasi Pribadi Anda sesuai dengan tujuan yang telah ditetapkan di dalam Kebijakan, serta Syarat dan Ketentuan yang mana Anda terikat di dalamnya.",content9:"Informasi Pribadi Anda yang kami koleksi termasuk (namun tidak terbatas) sebagai berikut:",ol1:{li1:"Nama, alamat, tanggal lahir, pekerjaan, jenis kelamin, nomor telepon/ponsel, nomor faksimili dan alamat email.{br}Informasi ini merupakan bagian dari pembuatan akun dan ini merupakan cara Kami untuk menghubungi Anda terkait dengan kebijakan, layanan, klaim, ketersediaan produk/layanan di negara Anda, dan komunikasi terkait informasi terkini dari Kami. Dengan demikian, Kami diperkenankan untuk membagi nomor telepon/ponsel dengan penyedia Layanan Kami yang perlu berkoordinasi dengan Anda sehubungan dengan Layanan.",li2:"Bank dan Nomor rekening.{br}Kami dapat menggunakan nomor rekening Anda untuk melakukan pembayaran klaim Anda dan proses pembayaran lainnya.",li3:"Aplikasi dan statistik penggunaan perangkat Anda.{br}Kami dapat mengoleksi data dari ponsel Anda. Kami akan mengumpulkan dan membuatnya menjadi pola statistik yang anonim untuk membantu Kami dalam memberikan tarif dan cakupan yang lebih akurat, serta meningkatkan performa dan pengalaman secara keseluruhan bagi Anda dan seluruh pengguna Kami.",li4:"Data Informasi Kesehatan.{br} Kami diperkenankan menyimpan data-data Anda seperti aktivitas/rutinitas dan data kesehatan seperti diagnosa, resep dokter, hasil laboratorium, tagihan, dan hal lainnya untuk menyediakan berbagai layanan atas aktivitas-aktivitas Anda yang tersimpan di sistem kami tersebut, antara lain terkait pengajuan klaim Anda."},subHeading3:"INFORMASI LOKASI DAN INFORMASI LAINNYA DARI PERANGKAT",content10:"Kami dapat mengumpulkan informasi tentang lokasi Anda secara real-time. Kami dapat menggunakan informasi terkait lokasi yang kami dapatkan dari perangkat Anda untuk meningkatkan kenyamanan penggunaan Anda atas Layanan, dengan memberikan konten yang relevan dan iklan yang sesuai konteks. Anda dapat mengubah pengaturan privasi pada perangkat Anda sewaktu-waktu, dalam hal me-non aktifkan fungsi berbagi informasi lokasi lewat Aplikasi dan/atau laman web. Mohon diperhatikan bahwa menonaktifkan berbagi lokasi mungkin memberikan dampak pada fitur tertentu dari Layanan Kami. Walaupun kami dapat mengidentifikasi lokasi geografis Anda, namun kami tidak mendapatkan informasi personal Anda. Kami mengidentifikasi lokasi Anda hanya untuk memberikan pengalaman yang lebih sesuai bagi Anda.",subHeading4:"PENYIMPANAN INFORMASI",content11:"Informasi Pribadi Anda akan terus disimpan, diolah, dan digunakan selama Anda masih menggunakan Layanan aktif mengunjungi situs web Kami. Apabila Anda ingin Informasi Pribadi Anda segera dihapus, Anda dapat mengirimkan permohonan kepada kami melalui e-mail berikut: <span>cs@pasarpolis.com</span>.",subHeading5:"PENGGUNAAN INFORMASI PRIBADI",content12:"Dengan mengunjungi dan mengunduh informasi dari situs web Kami, maka Anda dianggap sudah memberikan persetujuan untuk Kami mengakses dan menggunakan informasi pribadi Anda. Kami dapat bekerja sama dengan perusahaan-perusahaan dan atau orang perorangan pihak ketiga lainnya untuk memfasilitasi atau memberikan bantuan terkait pengembangan laman web, Aplikasi dan Layanan kami, untuk dan/atau atas nama Kami, di antaranya untuk:",ol2:{li1:"Melaksanakan layanan-layanan yang terkait dengan situs web (termasuk namun tidak terbatas pada pemeliharaan, pengelolaan database, analisis situs web dan menyempurnakan fitur layanan);",li2:"Membantu kami dalam menganalisis bagaimana Aplikasi dan Layanan-layanan kami digunakan serta pengembangannya;",li3:"Membantu penasihat profesional dan auditor eksternal Kami, termasuk namun tidak terbatas pada penasihat hukum, penasihat keuangan dan konsultan-konsultan. Para pihak ketiga ini hanya memiliki akses atas Informasi Pribadi Anda untuk melakukan tugas-tugas tersebut untuk dan/atau atas nama Kami, dan secara kontraktual terikat untuk tidak mengungkapkan atau menggunakan Informasi Pribadi tersebut untuk tujuan lain apa pun.",li4:"Menyediakan manfaat lainnya yang dianggap cocok, berdasarkan Informasi Pribadi Anda yang disimpan oleh Kami. Jika informasi pribadi Anda tidak terbuka untuk umum di dalam platform Kami, maka PasarPolis tidak akan membagikan, mengungkap, atau menampilkan data tersebut kepada siapa pun, kecuali untuk Anda dan penyedia layanan-layanan terkait."},subHeading6:"HAL UMUM, HUKUM YANG BERLAKU DAN YURISDIKSI",content13:"Kami memiliki hak untuk tidak melanjutkan atau mengubah aspek apapun dari Layanan pada waktu kapan pun. Kebijakan ini, bersama dengan Syarat dan Ketentuan kami, dan pemberitahuan lainnya yang kami publikasikan pada situs web dan Aplikasi Kami harus menjadi perjanjian antara Kami dan Anda terkait Layanan. Apabila ada ketentuan di dalam Kebijakan ini yang menjadi tidak sah karena pengadilan atau yurisdiksi lainnya, maka hal tersebut tidak akan berakibat pada sahnya ketentuan lain dalam Kebijakan ini, yang akan tetap berlaku dan berkekuatan penuh. Meski demikian, Kebijakan ini harus diartikan secara keseluruhan untuk memberikan efek seluas-luasnya sepanjang diizinkan oleh hukum yang berlaku, atas pengertian dari ketentuan yang dikecualikan tersebut sebagaimana ditentukan oleh pengadilan dari yurisdiksi yang kompeten",content14:"Kebijakan ini tunduk pada hukum yang berlaku di Indonesia."}},o=e(70);const d=t.a.div`
    .section {
        &__header{
            font-size: ${o.a.fontSize.xl2};
            text-align: center;
            color: ${o.a.color.lightMustard};
            font-weight: ${o.a.fontWeight.bold};
            margin-bottom: 1.3rem;
        }
        &__para{
            font-size: ${o.a.fontSize.sm};
            margin-bottom: 1.3rem;
        }
        &__subHeading{
            font-size: ${o.a.fontSize.base};
            font-weight: ${o.a.fontWeight.bold};
        }
        &__email{
            color: ${o.a.color.dodgerBlue};
            text-decoration: underline;
            cursor: pointer;
        }
    }
    @media (max-width: 700px) {
        margin-top: 30px;
    }
`,p=t.a.ol`
    list-style-type: decimal;
    font-size: ${o.a.fontSize.sm};
    margin-bottom: 1rem;
`;var c=e(4);var k=a=>{const{title:n=""}=a;return Object(c.jsxs)(d,{children:[Object(c.jsx)("div",{className:"section__header",children:n}),Object.keys(l[n]).map((a=>a.includes("subHeading")?Object(c.jsx)("div",{className:"section__subHeading",children:l[n][a]}):a.includes("ol")?Object(c.jsx)(p,{children:Object.keys(l[n][a]).map((e=>Object(c.jsx)("li",{children:Object(c.jsx)(m.a,{id:l[n][a][e],defaultMessage:l[n][a][e],values:{br:Object(c.jsx)("br",{}),span:a=>Object(c.jsx)("span",{children:a})}})})))}):Object(c.jsx)("div",{className:"section__para",children:Object(c.jsx)(m.a,{id:l[n][a],defaultMessage:l[n][a],values:{span:a=>Object(c.jsx)("span",{className:"section__email",onClick:()=>{return a="cs@pasarpolis.com",void window.open(`mailto:${a}`);var a},children:a})}})})))]})};class u extends i.Component{render(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{children:Object(c.jsx)(k,{title:"Kebijakan Privasi"})}),Object(c.jsx)(r.a,{})]})}}n.default=u}}]);
//# sourceMappingURL=19.7799e065.chunk.js.map