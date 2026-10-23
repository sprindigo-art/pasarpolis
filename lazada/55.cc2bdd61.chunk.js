(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[55],{1056:function(e,i,t){"use strict";t.d(i,"a",(function(){return r})),t.d(i,"b",(function(){return a})),t.d(i,"e",(function(){return l})),t.d(i,"d",(function(){return d})),t.d(i,"f",(function(){return o})),t.d(i,"c",(function(){return x}));const n="claimStatusLookup",c="loginTab",s="/check-status",r="claimNo";function a(e){return`${s}?${r}=${encodeURIComponent(e)}`}function l(e){window.sessionStorage.setItem(n,e)}function d(e){return!!e&&window.sessionStorage.getItem(n)===e}function o(){window.sessionStorage.setItem(c,"status")}function x(){return"status"===window.sessionStorage.getItem(c)&&(window.sessionStorage.removeItem(c),!0)}},1057:function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));const n={claim_no:"KLM-7803412659",identity_number:"3185103010901115",display_id:"08.4795.2026.02.0001",current_step:"konfirmasi",status_history:[{message:"Menunggu konfirmasi dari tim klaim PasarPolis",timestamp:"25/11/2026, 10:34:46",is_current:!0},{message:"Tanggal, lokasi dan kronologi kejadian telah berhasil diverifikasi",timestamp:"24/11/2026, 12:03:17",is_current:!1},{message:"Tanggal, lokasi dan kronologi kejadian sedang diverifikasi",timestamp:"23/11/2026, 14:25:58",is_current:!1},{message:"Data dan dokumen telah berhasil diverifikasi",timestamp:"22/11/2026, 10:34:42",is_current:!1},{message:"Data dan dokumen sedang diverifikasi oleh tim klaim",timestamp:"22/11/2026, 09:11:26",is_current:!1},{message:"Data dan dokumen berhasil terkirim ke sistem klaim",timestamp:"21/11/2026, 22:52:05",is_current:!1},{message:"Semua data dan dokumen sudah dilengkapi",timestamp:"21/11/2026, 21:33:42",is_current:!1},{message:"Menunggu semua data dan dokumen diunggah di sistem",timestamp:"20/11/2026, 03:19:37",is_current:!1},{message:"Klaim berhasil dibuat",timestamp:"20/11/2026, 01:16:28",is_current:!1}],info:{policy_holder:"Andreas Wijaya",insurance_type:"Asuransi Perjalanan",policy_number:"01.0121.0923.00130-083086",claimed_benefit:"Kebakaran, sambaran petir, ledakan, kejatuhan pesawat terbang dan asap - Kerugian total"}},c=/^KLM-\d+$/;function s(e){if(!e)return null;const i=e.trim().toUpperCase();return c.test(i)?{...n,claim_no:i}:null}},1430:function(e,i,t){"use strict";t.r(i);var n=t(35),c=t(67);const s={dotSize:34,lineHeight:4,nodeWidth:52,checkStrokeWidth:3.5,currentRingRadius:7,currentRingStroke:3,upcomingBorderWidth:2,colors:{done:"#44bd32",current:"#f5a623",upcomingBorder:"#d9d9d9",upcomingText:"#9e9e9e",lineUpcoming:"#d9d9d9",white:"#ffffff"},label:{fontSize:12,fontWeight:800,lineHeight:16},upcomingNumber:{fontSize:14,fontWeight:700}};var r=t(2);const{dotSize:a,colors:l,checkStrokeWidth:d,currentRingRadius:o,currentRingStroke:x}=s;function h(){const e=a/2,i=a/2,t=a/2;return Object(r.jsxs)("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,fill:"none","aria-hidden":!0,children:[Object(r.jsx)("circle",{cx:e,cy:i,r:t,fill:l.done}),Object(r.jsx)("path",{d:"M10 17.5 L14.5 22 L24 12",stroke:l.white,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})}function u(){const e=a/2,i=a/2,t=a/2;return Object(r.jsxs)("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,fill:"none","aria-hidden":!0,children:[Object(r.jsx)("circle",{cx:e,cy:i,r:t,fill:l.current}),Object(r.jsx)("circle",{cx:e,cy:i,r:o,fill:"none",stroke:l.white,strokeWidth:x})]})}function p(e){let{stepNumber:i}=e;const t=a/2,n=a/2,c=a/2-s.upcomingBorderWidth/2;return Object(r.jsxs)("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,fill:"none","aria-hidden":!0,children:[Object(r.jsx)("circle",{cx:t,cy:n,r:c,fill:l.white,stroke:l.upcomingBorder,strokeWidth:s.upcomingBorderWidth}),Object(r.jsx)("text",{x:t,y:n,textAnchor:"middle",dominantBaseline:"central",fill:l.upcomingText,fontFamily:"Muli, Mulish, sans-serif",fontSize:s.upcomingNumber.fontSize,fontWeight:s.upcomingNumber.fontWeight,children:i})]})}var j=t(11);const m=s.dotSize/2-s.lineHeight/2,f=j.c.ol`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
`,g=j.c.li`
  display: flex;
  align-items: flex-start;
  flex: ${e=>e.last?"0 0 auto":"1"};
  min-width: 0;
`,b=j.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: ${s.nodeWidth}px;
  flex-shrink: 0;
`,O=j.c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${s.dotSize}px;
  height: ${s.dotSize}px;
  flex-shrink: 0;
`,k=j.c.span`
  font-family: Muli, Mulish, sans-serif;
  font-size: ${s.label.fontSize}px;
  font-weight: ${s.label.fontWeight};
  line-height: ${s.label.lineHeight}px;
  text-align: center;
  white-space: nowrap;
  color: ${e=>"done"===e.kind?s.colors.done:"current"===e.kind?s.colors.current:s.colors.upcomingText};
`,w=j.c.span`
  height: ${s.lineHeight}px;
  flex: 1;
  min-width: 8px;
  margin-top: ${m}px;
  border-radius: ${s.lineHeight/2}px;
  background: ${e=>"done"===e.kind?s.colors.done:"current"===e.kind?s.colors.current:s.colors.lineUpcoming};
`,y=[{id:"mulai",label:"Mulai"},{id:"form",label:"Form"},{id:"verifikasi",label:"Verifikasi"},{id:"konfirmasi",label:"Konfirmasi"},{id:"selesai",label:"Selesai"}];var v=function(e){let{currentStep:i}=e;const t=y.findIndex((e=>e.id===i));return Object(r.jsx)(f,{"data-testid":"org-claim-status-stepper",children:y.map(((e,i)=>{const n=i<t,s=i===t,a=n?"done":s?"current":"upcoming",l=i===y.length-1,d=l?null:function(e,i){return e<i-1?"done":e===i-1?"current":"upcoming"}(i,t);return Object(r.jsxs)(g,{last:l,children:[Object(r.jsxs)(b,{children:[Object(r.jsx)(O,{children:n?Object(r.jsx)(h,{}):s?Object(r.jsx)(u,{}):Object(r.jsx)(p,{stepNumber:i+1})}),Object(r.jsx)(k,{kind:a,children:Object(r.jsx)(c.a,{id:e.label})})]}),d?Object(r.jsx)(w,{kind:d}):null]},e.id)}))})},$=t(16),S=t(41);const z=j.c.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`,M=j.c.div`
  display: block;
  width: 100%;
  line-height: 0;
  background: #ffffff;

  picture {
    display: block;
    width: 100%;
    line-height: 0;
  }
`,_=j.c.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: bottom;
  background-color: #ffffff;
`,W=j.c.div`
  width: 100%;
  line-height: normal;
  margin: 0;

  [data-testid='footer'],
  footer {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`;var H=function(){const e=Object($.c)();return Object(r.jsxs)(z,{"data-testid":"org-claim-status-bottom",children:[Object(r.jsx)(M,{children:Object(r.jsxs)("picture",{children:[Object(r.jsx)("source",{media:"(max-width: 768px)",srcSet:e.mobileHomeBanner||S.q}),Object(r.jsx)(_,{src:e.homeBanner||S.k,alt:""})]})}),Object(r.jsx)(W,{children:e.footer})]})},B=t.p+"static/media/claim-detail-arrow.45f6d4b6.svg";const K=j.c.section`
  background: #ffffff;
  width: 100%;
`,I=j.c.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 16px 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 32px 0 24px;
  }
`,T=j.c.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #000000;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
    text-align: left;
    flex: 1;
    min-width: 0;
  }
`,D=j.c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background: #0078fa;
  cursor: pointer;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background: #0066d6;
  }
`,R=j.c.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #ffffff;
`,L=j.c.span`
  display: none;
  align-items: center;
  justify-content: center;
  line-height: 0;

  img {
    display: block;
    width: 18px;
    height: auto;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;var N=function(e){let{displayId:i,onViewDetail:t}=e;return Object(r.jsx)(K,{"data-testid":"org-claim-status-header",children:Object(r.jsxs)(I,{children:[Object(r.jsxs)(T,{"data-testid":"mol-claim-status-title",children:[Object(r.jsx)(c.a,{id:"Klaim ID:"})," ",i]}),Object(r.jsxs)(D,{type:"button",onClick:t,"data-testid":"mol-claim-status-detail-btn",children:[Object(r.jsx)(R,{children:Object(r.jsx)(c.a,{id:"Lihat Detail Klaim"})}),Object(r.jsx)(L,{"aria-hidden":!0,children:Object(r.jsx)("img",{src:B,alt:"",width:18,height:18})})]})]})})};const C=j.c.section`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  margin-top: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`,P=j.c.h2`
  margin: 0 0 16px;
  font-family: Muli, Mulish, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000000;
`,V=j.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 32px;
  }
`,U=j.c.div`
  display: ${e=>e.mobileOnly?"flex":e.desktopOnly?"none":"flex"};
  align-items: flex-start;
  gap: 12px;

  @media (min-width: 768px) {
    display: ${e=>e.mobileOnly?"none":"flex"};
    grid-column: ${e=>e.full?"1 / -1":"auto"};
  }
`,A=j.c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f5f5f5;
  color: #9e9e9e;
`,F=j.c.p`
  margin: 0;
  font-family: Muli, Mulish, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #9e9e9e;
`,J=j.c.p`
  margin: 4px 0 0;
  font-family: Muli, Mulish, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #000000;
`;function q(e){let{children:i}=e;return Object(r.jsx)(A,{"aria-hidden":!0,children:Object(r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i})})}var E=function(e){let{info:i}=e;return Object(r.jsxs)(C,{"data-testid":"org-claim-status-info",children:[Object(r.jsx)(P,{children:Object(r.jsx)(c.a,{id:"Klaim Info"})}),Object(r.jsxs)(V,{children:[Object(r.jsxs)(U,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("circle",{cx:"12",cy:"8",r:"3"}),Object(r.jsx)("path",{d:"M5 19c0-3.3 3.1-6 7-6s7 2.7 7 6"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{children:Object(r.jsx)(c.a,{id:"Pemegang Polis"})}),Object(r.jsx)(J,{children:i.policy_holder})]})]}),Object(r.jsxs)(U,{desktopOnly:!0,children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("path",{d:"M20.6 13.4 12 21.9 2.1 12l8.5-8.5H20v8.9z"}),Object(r.jsx)("circle",{cx:"16.5",cy:"7.5",r:"1"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{children:Object(r.jsx)(c.a,{id:"Jenis Asuransi"})}),Object(r.jsx)(J,{children:Object(r.jsx)(c.a,{id:i.insurance_type})})]})]}),Object(r.jsxs)(U,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),Object(r.jsx)("path",{d:"M7 10h4M7 14h10"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{children:Object(r.jsx)(c.a,{id:"Nomor Polis"})}),Object(r.jsx)(J,{children:i.policy_number})]})]}),Object(r.jsxs)(U,{mobileOnly:!0,children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("path",{d:"M20.6 13.4 12 21.9 2.1 12l8.5-8.5H20v8.9z"}),Object(r.jsx)("circle",{cx:"16.5",cy:"7.5",r:"1"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{children:Object(r.jsx)(c.a,{id:"Kategori"})}),Object(r.jsx)(J,{children:Object(r.jsx)(c.a,{id:i.insurance_type})})]})]}),Object(r.jsxs)(U,{full:!0,children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("path",{d:"M12 3 5 7v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V7l-7-4z"}),Object(r.jsx)("path",{d:"m9 12 2 2 4-4"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{children:Object(r.jsx)(c.a,{id:"Manfaat Diklaim"})}),Object(r.jsx)(J,{children:Object(r.jsx)(c.a,{id:i.claimed_benefit})})]})]})]})]})};const G=20,Q=4,X=2,Y=2,Z=12,ee=20,ie=4,te={currentSize:14,inactiveSize:10},ne={active:"#0180c8",inactive:"#bdbdbd",inactiveText:"#9e9e9e"},ce={fontSize:14,lineHeight:16,currentWeight:800,inactiveWeight:700},se={fontSize:12,lineHeight:14,fontWeight:400,marginTop:0},re=j.c.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`,ae=j.c.li`
  display: flex;
  gap: ${Z}px;
  align-items: stretch;
`,le=j.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${G}px;
  flex-shrink: 0;
`,de=j.c.span`
  width: ${e=>e.current?te.currentSize:te.inactiveSize}px;
  height: ${e=>e.current?te.currentSize:te.inactiveSize}px;
  margin-top: 0;
  border-radius: 50%;
  background: ${e=>e.current?ne.active:ne.inactive};
  flex-shrink: 0;
`,oe=j.c.span`
  width: ${e=>e.current?Q:X}px;
  flex: 1;
  min-height: 0;
  margin-top: ${Y}px;
  border-radius: ${e=>e.current?Q/2:X/2}px;
  background: ${e=>e.current?ne.active:ne.inactive};
`,xe=j.c.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ie}px;
  padding-bottom: ${e=>e.last?"0":`${ee}px`};
`,he=j.c.p`
  margin: 0;
  font-family: Muli, Mulish, sans-serif;
  font-size: ${ce.fontSize}px;
  line-height: ${ce.lineHeight}px;
  font-weight: ${e=>e.current?ce.currentWeight:ce.inactiveWeight};
  color: ${e=>e.current?ne.active:ne.inactiveText};
`,ue=j.c.p`
  margin: ${se.marginTop}px 0 0;
  font-family: Muli, Mulish, sans-serif;
  font-size: ${se.fontSize}px;
  line-height: ${se.lineHeight}px;
  font-weight: ${se.fontWeight};
  color: ${e=>e.current?ne.active:ne.inactiveText};
`;var pe=function(e){let{statusHistory:i}=e;return Object(r.jsxs)(C,{"data-testid":"org-claim-status-timeline",children:[Object(r.jsx)(P,{children:Object(r.jsx)(c.a,{id:"Klaim Status"})}),i&&i.length>0?Object(r.jsx)(re,{"data-testid":"org-claim-status-timeline-list",children:i.map(((e,t)=>{const n=t===i.length-1,s=e.is_current;return Object(r.jsxs)(ae,{children:[Object(r.jsxs)(le,{children:[Object(r.jsx)(de,{current:s}),n?null:Object(r.jsx)(oe,{current:s})]}),Object(r.jsxs)(xe,{last:n,children:[Object(r.jsx)(he,{current:s,children:Object(r.jsx)(c.a,{id:e.message})}),Object(r.jsx)(ue,{current:s,children:e.timestamp})]})]},`${e.timestamp}-${t}`)}))}):null]})},je=t(1),me=t(1057),fe=t(1056);const ge=j.c.div`
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding-top: 48px;
  }
`,be=j.c.div`
  flex: 1 0 auto;
`,Oe=j.c.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 16px 32px;

  @media (min-width: 768px) {
    padding: 24px 24px 48px;
  }
`,ke=j.c.div`
  margin: 0 -16px;
  padding: 8px 16px 16px;

  @media (min-width: 768px) {
    margin: 0 -24px;
    padding: 8px 30px 20px;
  }
`,we=j.c.p`
  margin: 64px 0;
  text-align: center;
  font-size: 14px;
  color: #64748b;
`;i.default=function(){const{data:e,shouldRedirect:i,handleViewClaimDetail:t}=function(){const e=Object(n.g)(),i=Object(n.h)(),t=new URLSearchParams(i.search).get(fe.a),c=Object(je.useMemo)((()=>t?Object(me.a)(t):null),[t]),s=!Object(fe.d)(t),r=Object(je.useCallback)((()=>{e.push("/login")}),[e]);return Object(je.useEffect)((()=>{s&&Object(fe.f)()}),[s]),{claimNo:t,data:c,shouldRedirect:s,handleViewClaimDetail:r}}();return i?Object(r.jsx)(n.a,{to:"/login"}):Object(r.jsxs)(ge,{"data-testid":"page-claim-status",children:[Object(r.jsx)(be,{children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{displayId:e.display_id,onViewDetail:t}),Object(r.jsxs)(Oe,{children:[Object(r.jsx)(ke,{children:Object(r.jsx)(v,{currentStep:e.current_step})}),Object(r.jsx)(pe,{statusHistory:e.status_history}),Object(r.jsx)(E,{info:e.info})]})]}):Object(r.jsx)(Oe,{children:Object(r.jsx)(we,{"data-testid":"mol-claim-status-not-found",children:Object(r.jsx)(c.a,{id:"Klaim tidak ditemukan"})})})}),Object(r.jsx)(H,{})]})}}}]);
//# sourceMappingURL=55.cc2bdd61.chunk.js.map