(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[54],{1428:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Le}));var n=i(35),c=i(327),a=i.n(c),r=i(40),o=i(52),l=i(31),s=i.n(l),d=i(16),p=i(1),x=i.n(p),u=i(951),b=i(67),f=i(11),g=i(19);const h=f.c.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1 0 0;
    padding: 24px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    background: ${g.a.white};
    width: 384px;
    border-radius: 16px;
    background: ${g.a.white};
    font-family: Mulish;
    flex-grow: 0;
    flex-basis: auto;


    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);

    @media only screen and (max-width: 768px) { 
        width: 100%;
        max-height: 479px;
    }
`,j=f.c.div`
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    background: ${g.a.almostWhite};
    border-radius: 12px;
    padding: 12px;
    height: fit-content;
`,m=f.c.img`
    height: 32px;
    width: 32px;
    border-radius: 8px;
`,y=f.c.div`
    padding-bottom: 12px;
`,O=f.c.div`
    color: ${g.a.darkGrey};
    
    font-size: 12px;
   
    font-weight: 500;
    line-height: 16px;
`,v=f.c.div`
    color: var(--Monochrome-Black, #333);
    
    font-size: 18px;
   
    font-weight: 800;
    line-height: 22px;
`,w=f.c.div`
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      word-wrap: break-word;

      row-gap:8px;
      padding: 16px 0px;
`,k=f.c.div`
    color: ${g.a.darkGrey};
    
    font-size: 12px;
   
    font-weight: 500;
    line-height: 16px; 
`,T=f.c.div`
    color: ${g.a.black};
    font-size: 14px;
    font-weight: 700;
    line-height: 18px; 
`,C=f.c.div`
    display: flex;
    padding-top: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`,S=f.c.button`
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1.5px solid ${g.a.tapPartnerBlue};
    background: ${g.a.white};
    color: ${g.a.tapPartnerBlue};
    text-align: center;

    
    font-size: 12px;
   
    font-weight: 700;
    line-height: 16px; 
    text-transform: uppercase;
    width: 272px;
`,P=f.c.button`
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1.5px solid ${g.a.tapPartnerBlue};
    background: ${g.a.tapPartnerBlue};
    color: ${g.a.white};
    text-align: center;

    
    font-size: 12px;
   
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
    width: 272px;
`,E=f.c.div`
    overflow: hidden;
`,$=f.c.div`
    width: 50%;

    &:nth-child(odd){
      padding-right: 8px;
    }
    &:nth-child(even){
      text-align: end;
    }
`,A=f.c.div`
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${e=>e.isActive?g.a.lightGreen:g.a.lightGrey};
    color: ${e=>e.isActive?g.a.grassGreen:g.a.darkGrey};

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    width: fit-content;
`;var N=i(2);var _=function(e){let{isPolicyActive:t,policyText:i,logo:n="https://placehold.jp/150x150.png",leftSideButtonText:c="leftText",rightSideFooterButtonText:a="rightText",headerSubTitle:r="headerSubTitle",headerTitle:o="headerTitle",leftSideButtonClickHandler:l=(()=>{}),rightSideButtonClickHandler:s=(()=>{}),mainDetails:d=[]}=e;return Object(N.jsxs)(h,{children:[Object(N.jsx)(j,{children:Object(N.jsx)(m,{src:n,alt:"partner"})}),Object(N.jsxs)(E,{children:[Object(N.jsxs)(y,{children:[Object(N.jsx)(O,{children:Object(N.jsx)(b.a,{id:r})}),Object(N.jsx)(v,{children:Object(N.jsx)(b.a,{id:o})})]}),Object(N.jsx)(A,{isActive:t,children:i}),Object(N.jsx)(w,{children:d.map((e=>{let{title:t,value:i}=e;return Object(N.jsxs)($,{children:[Object(N.jsx)(k,{children:Object(N.jsx)(b.a,{id:t})}),Object(N.jsx)(T,{children:Object(N.jsx)(b.a,{id:i})})]},t)}))}),Object(N.jsxs)(C,{children:[Object(N.jsx)(S,{onClick:l,children:Object(N.jsx)(b.a,{id:c})}),Object(N.jsx)(P,{onClick:s,children:Object(N.jsx)(b.a,{id:a})})]})]})]})},R=i(9),L=i(20),z=i(1042),I=i(10),B=i(1150),F=i(993);const H=f.c.div`
    width: 100%;
    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;

        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px; 

        width: 100%;
    }

    @media  only screen and (max-width: 768px) {
        .tab {
            position: fixed;
            top: 48px;
            width: 100%;
            background: #FFF;
        }
    }

`,M=f.c.div`
    display: flex;
    padding: 24px 0px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    width: 240px;
    border-bottom: 2px solid ${e=>e.active?g.a.black:g.a.disabledLightGrey};

    color: ${e=>e.active?g.a.black:g.a.monoChromeGrey};
`,G=f.c.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        /* width: 100vw; */
    }
`;var D=function(e){let{tabs:t=[],selectedTag:i="",onTagClickHandler:n=(()=>{})}=e;return Object(N.jsx)(G,{children:Object(N.jsx)(H,{children:Object(N.jsx)("div",{className:"tab",children:t.map((e=>{let{title:t,filter:c}=e;return Object(N.jsx)(M,{onClick:()=>n(c),active:i===c,children:Object(N.jsx)(b.a,{id:t})},t)}))})})})};const Q=f.c.div`
    display: flex;
    width: 32px;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    background: ${e=>e.active?g.a.black:g.a.white};
    color: ${e=>e.active?g.a.white:g.a.black};
    border-radius: 8px;

    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px; 
`,U=f.c.div`
    display: flex;
    gap: 8px;
    padding: 0px 4px;
`,Y=f.c.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 32px);
    margin: 16px;
    flex-wrap: wrap;
    gap: 8px;
`,q=f.c.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`;var V=i(30);const W=x.a.memo((function(e){let{pageSize:t=5,currPage:i=3,totalRecords:n=100,currWindowAllowed:c=5,currPageHandler:a=(()=>{})}=e;const r=Math.ceil(n/t),o=Object(p.useMemo)((()=>{let e=[];var t;return(e=>{let t=Math.max(Math.min(i-Math.floor(c/2),r-c+1),1),n=Math.min(r,Math.max(i+Math.floor(c/2),c));for(;t<=n;)e.push({pageText:t,buttonType:"page"}),t++})(e),t=e,i>4&&t.unshift({pageText:"...",buttonType:"prev"}),function(){i>c&&(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).unshift({pageText:1,buttonType:"page"})}(e),(e=>{r<=c||i>r-c+1||e.push({pageText:"...",buttonType:"next"})})(e),(e=>{i<r-2&&i+c<r&&e.push({pageText:r,buttonType:"page"})})(e),(e=>{e.push({pageText:Object(N.jsx)("img",{src:V.A,alt:"last"}),buttonType:"last-icon"})})(e),e}),[i,n,t]);return n?Object(N.jsxs)(Y,{children:[Object(N.jsxs)(q,{children:[Object(N.jsx)(b.a,{id:I.b.showing}),"\xa0",i," / ",r]}),Object(N.jsx)(U,{children:o.map((e=>{let{pageText:t,buttonType:n}=e;return Object(N.jsx)(Q,{onClick:()=>((e,t)=>{switch(t){case"page":a(e);break;case"last":case"last-icon":a(r);break;case"prev":a(Math.max(i-5,1));break;case"next":a(Math.min(i+5,r));break;default:a(i)}})(t,n),active:t===i,children:t},t+n)}))})]}):null}));var J=W,K=i(941);const X=f.c.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`,Z=f.c.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    width: 100%;
    color: ${g.a.black};

`,ee=(f.c.div`
    display: flex;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    flex-wrap: wrap;
`,f.c.button`
    display: flex;
    width: 208px;
    height: 64px;
    padding: 11.2px 22.4px 11.198px 22.4px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${g.a.tapPartnerBlue};
    border: 0px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
`,f.c.p`
    text-align: center;
    font-size: 18px;
    font-weight: ${e=>e.bold||400};
    line-height: ${e=>e.lineHeight||"26px"}; 
`),te=f.c.img``;var ie=function(){return Object(N.jsx)(X,{"data-testid":"empty-policy-container",children:Object(N.jsxs)(Z,{children:[Object(N.jsx)(te,{src:V.x,alt:"playstore"}),Object(N.jsx)(ee,{bold:800,lineHeight:"22px",children:Object(N.jsx)(K.a,{id:I.b.noPolicyListCopyright})})]})})},ne=i(203);var ce=function(e){let{isAgency:t=!1}=e;const i=Object(o.c)(),c=Object(n.g)(),a=Object(u.a)(),l=Object(ne.a)(),x=Object(d.u)(R.a.POLICY_LIST_REQUEST),b=Object(d.u)(L.a.AGENCY_POLICY_LIST_REQUEST),f=Object(d.t)(R.a.POLICY_LIST_REQUEST),g=Object(d.t)(L.a.AGENCY_POLICY_LIST_REQUEST),h=Object(o.d)((e=>e.Policy.data)),j=Object(o.d)((e=>e.Agency.agencyPolicyList)),[m,y]=Object(p.useState)(null),O=t?j:h,v=Object(o.d)((e=>e.Policy.metadata)),w=Object(o.d)((e=>e.Agency.agencyMetadata)),[k,T]=Object(p.useState)(""),[{page:C},S]=Object(p.useState)({page:1}),P=t?b:x,E=t?w:v,$=t?g:f,A=Object(p.useCallback)((e=>{S({page:e}),window.scrollTo(0,0)}),[]);return Object(p.useEffect)((()=>(y(null),S({page:1}),T(""),()=>{i(R.a.resetReduxPolicy()),i(L.a.resetReduxState())})),[t]),Object(p.useEffect)((()=>{i(R.a.clearPolicyRedux(["data"])),i(L.a.resetReduxState(["agencyPolicyList"])),S({page:1})}),[k]),Object(p.useEffect)((()=>{const e=9*(C-1);return i(t?L.a.getAgencyPolicyList({query:{offset:e,coverageStatus:k,page:C,limit:9,pageSize:9}}):R.a.getPolicyList({offset:e,page:C,limit:9,coverage:k})),()=>{i(R.a.clearPolicyRedux(["data"])),i(L.a.resetReduxState(["agencyPolicyList"]))}}),[C,k,t]),Object(N.jsxs)(z.c,{"data-testid":"policy-list",children:[Object(N.jsx)(D,{selectedTag:k,onTagClickHandler:e=>{T(e),S({page:1})},tabs:t?r.c.map((e=>{let{title:t,filter:i,mobileTitle:n}=e;return{filter:i,title:l?n:t}})):r.g.map((e=>{let{title:t,filter:i,mobileTitle:n}=e;return{filter:i,title:l?n:t}}))}),Object(N.jsxs)(z.b,{children:[$||!1===P&&0===(null===O||void 0===O?void 0:O.length)?Object(N.jsx)(ie,{}):void 0,Array.isArray(O)?O.map((e=>{const{logo:i,packageCode:n,product:o,partner:l,internalId:s,applicationNo:p,packageName:x,mainDetails:u,productDisplayName:b,additionalProtection:f,insuranceprovider:g,isPolicyActive:h,policyText:j,isFamilyPolicy:m,isAsdpFerryTravelPolicy:O}=t?Object(d.p)(e,a):Object(d.r)(e,a),v={applicationNo:p,internalId:s,packageCode:n,product:o,partner:l,additionalProtection:f,insuranceprovider:g,isFamilyPolicy:m,isAsdpFerryTravelPolicy:O};return Object(N.jsx)(_,{logo:i,policyText:j,mainDetails:u,headerTitle:x,isPolicyActive:h,headerSubTitle:b,leftSideButtonText:I.b.raiseClaim,leftSideButtonClickHandler:e=>((e,t)=>{e.stopPropagation(),y({benefitQueryParams:t})})(e,v),rightSideButtonClickHandler:e=>((e,i)=>{e.stopPropagation();const n=t?r.r:r.C;c.push(`policydetail/${i}?source=${n}`,{isAgency:t})})(e,s),rightSideFooterButtonText:I.b.detail},p)})):null,P?Object(N.jsx)(z.a,{children:Object(N.jsx)(F.a,{})}):null,m?Object(N.jsx)(B.a,{isAgency:t,closeBenefitModalPolicyList:()=>{y(null)},benefitQueryParams:m.benefitQueryParams}):null]}),P||!s()(E,"total_records",0)?null:Object(N.jsx)(J,{pageSize:9,totalRecords:Number(s()(E,"total_records",0)),currPage:C,currPageHandler:A})]})};const ae=f.c.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`,re=f.c.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .box-adjust {
        display: grid;
        margin: 0px 15px 0px 15px;
        height: 214px;
        width: 300px;
        background-color: #ffffff;
        border-radius: 32px;
      }

      .box-content{ 
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.6em;
       }
       @media only screen and (max-width:1250px) {
            flex-direction: column;
            gap: 16px;
        }
`,oe=f.c.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    width: 100%;
    color: ${g.a.black};
    padding-top: ${e=>e.paddingTop||"0px"}
`,le=f.c.p`
    text-align: center;
    font-size: ${e=>e.size||"18px"};
    font-weight: ${e=>e.bold||400};
    line-height: ${e=>e.lineHeight||"26px"}; 
    padding: ${e=>e.padding};
`,se=f.c.img``,de=f.c.img`
@media only screen and (max-width:1250px) {
        transform: rotate(90deg);
        padding-top: 10px
}
`;var pe=function(){const e=Object(p.useCallback)(((e,t,i)=>Object(N.jsxs)(oe,{paddingTop:"20px",children:[Object(N.jsx)("img",{src:e,alt:t}),Object(N.jsx)(le,{bold:800,size:"16px",children:Object(N.jsx)(K.a,{id:t})}),Object(N.jsx)(le,{bold:400,lineHeight:"22px",size:"14px",children:Object(N.jsx)(K.a,{id:i})})]})),[]);return Object(N.jsxs)(ae,{children:[Object(N.jsxs)(oe,{children:[Object(N.jsx)(se,{src:V.C,alt:"playstore"}),Object(N.jsx)(le,{bold:800,lineHeight:"22px",children:Object(N.jsx)(K.a,{id:I.b.noClaimListCopyright})}),Object(N.jsxs)(le,{children:[Object(N.jsx)(K.a,{id:I.b.messageForNoClaimListPage}),Object(N.jsx)("br",{}),Object(N.jsx)(K.a,{id:I.b.claimProcessAtPp})]}),Object(N.jsx)(le,{})]}),Object(N.jsxs)(re,{children:[Object(N.jsx)("div",{className:"box-adjust box-content",children:e(V.h,I.b.visitClaimPortal,I.b.discriptionVisitClaimPortal)}),Object(N.jsx)(de,{src:V.c,alt:"arrowRight"}),Object(N.jsx)("div",{className:"box-adjust box-content",children:e(V.e,I.b.thisFormAndDoc,I.b.discriptionForFormDocument)}),Object(N.jsx)(de,{src:V.c,alt:"arrowRight"}),Object(N.jsx)("div",{className:"box-adjust box-content",children:e(V.k,I.b.verificationProcess,I.b.discriptionVerificationProcess)}),Object(N.jsx)(de,{src:V.c,alt:"arrowRight"}),Object(N.jsx)("div",{className:"box-adjust box-content",children:e(V.v,I.b.disbursementfunds,I.b.discriptionDisbursementOfFunds)})]})]})};const xe=f.c.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 0px;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;

    @media screen and (max-width: 768px){
        padding: 0px;
        padding-top: 40px;
        gap:0px;
        background: ${g.a.white};
    }

`,ue=(f.c.div`
    padding: 48px;
`,f.c.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    justify-items:center;
    padding: 48px;


    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    @media screen and (max-width: 768px){
        padding: 16px 0px;
        justify-content: center;
        background: ${g.a.lightGrey};
        min-height: 100vh;
        margin-top: 75px;
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`),be=f.c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 48px;
    grid-column: 1 / -1; 
`,fe=f.c.div`
    display: flex;
    padding: 24px;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 16px;
    background: ${g.a.white};
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
    width: 336px;

    @media screen and (max-width: 1024px) {
        width: 40vw;
    }

    @media screen and (max-width: 640px) {
        width: 336px;
        max-height: 479px;
    }
`,ge=f.c.div`
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: ${g.a.almostWhite};
`,he=f.c.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    flex: 1;
    width: 100%;
    align-self: stretch;
`,je=f.c.div`
    color: ${g.a.darkGrey};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
`,me=f.c.div`
    color: ${g.a.black};
    font-size: 18px;
    font-weight: 800;
    line-height: 22px;
`,ye=f.c.div``,Oe=f.c.div`
    color: ${g.a.darkGrey};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
`,ve=f.c.div`
    color: ${g.a.black};
    font-size: 14px;
    font-weight: 700;
    line-height: 22px; 
`,we=f.c.div`
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background:${e=>e.background||g.a.lightBlue};

    color: ${e=>e.color||g.a.iceBlue};
    width: fit-content;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px; 
`,ke=f.c.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
`,Te=f.c.div`
    color: ${g.a.darkGrey};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
`,Ce=(f.c.div``,f.c.div`
    margin-top: auto;
`),Se=f.c.div`
    border-radius: 8px;
    padding: 16px 12px;
    background: ${g.a.tapPartnerBlue};
    color: ${g.a.white};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;

`,Pe=f.c.img`
    width: 32px;
    height: 32px;
`,Ee=f.c.div`
  flex: 1;
  &:nth-child(even){
      text-align: end;
    }
`,$e=f.c.div`
    color: ${g.a.black};
    font-size: 14px;
    font-weight: 700;
    line-height: 18px; 
`,Ae=f.c.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Ne=f.c.div`
    display: flex;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: ${g.a.tapTapHeartRedSoft};
    color: ${g.a.tapTapHeartRed};
    text-align: center;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px; 
`;var _e=function(e){let{logo:t="",subTitle:i="",title:n="",benefitTitle:c="",benefitName:a="",claimStatus:r="",footerText:o="",info:l=[],claimStatusTextColor:s,claimStatusBackgroundColor:d="",claimStatusText:p="",documentFillDate:x="",footerButtonClickHandler:u=(()=>{})}=e;return Object(N.jsxs)(fe,{children:[Object(N.jsx)(ge,{children:Object(N.jsx)(Pe,{src:t})}),Object(N.jsxs)(he,{children:[Object(N.jsxs)(Ae,{children:[Object(N.jsx)(je,{children:Object(N.jsx)(b.a,{id:i})}),Object(N.jsx)(me,{children:Object(N.jsx)(b.a,{id:n})})]}),Object(N.jsxs)(ye,{children:[Object(N.jsx)(Oe,{children:Object(N.jsx)(b.a,{id:c})}),Object(N.jsx)(ve,{children:Object(N.jsx)(b.a,{id:a})})]}),Object(N.jsx)(we,{color:s,background:d,children:Object(N.jsx)(b.a,{id:p})}),Object(N.jsx)(ke,{children:l.map((e=>{let{title:t,value:i}=e;return Object(N.jsxs)(Ee,{children:[Object(N.jsx)(Te,{children:Object(N.jsx)(b.a,{id:t})}),Object(N.jsx)($e,{children:Object(N.jsx)(b.a,{id:i})})]},t)}))}),x?Object(N.jsxs)(Ne,{children:[Object(N.jsx)(K.a,{id:I.b.deadline}),"\xa0",x]}):null,Object(N.jsx)(Ce,{children:Object(N.jsx)(Se,{onClick:u,children:Object(N.jsx)(b.a,{id:o})})})]})]})};var Re=function(e){let{isAgency:t}=e;const i=Object(o.c)(),c=Object(u.a)(),a=Object(n.g)(),l=Object(ne.a)(),s=Object(o.d)((e=>e.Policy.claimData)),x=Object(o.d)((e=>e.Agency.agencyClaimList)),b=Object(o.d)((e=>e.Policy.metadata)),f=Object(o.d)((e=>e.Agency.agencyMetadata)),[g,h]=Object(p.useState)(""),[j,m]=Object(p.useState)(1),[y,O]=Object(p.useState)([]),[v,w]=Object(p.useState)({totalRecords:t?null===f||void 0===f?void 0:f.total_records:null===b||void 0===b?void 0:b.total_records}),k=Object(d.u)(R.a.GET_CLAIM_LIST_REQUEST),T=Object(d.t)(R.a.GET_CLAIM_LIST_REQUEST),C=Object(d.u)(L.a.AGENCY_CLAIM_LIST_REQUEST),S=Object(d.t)(L.a.AGENCY_CLAIM_LIST_REQUEST);Object(p.useEffect)((()=>()=>{O([]),m(1),h("")}),[t]),Object(p.useEffect)((()=>{let e={page:j};switch(g){case"initiated":e.status="initiated";break;case"settled":Array.isArray(r.E)&&r.E.length>0?e.status=r.E:console.warn("Settled claims statuses are empty or not an array");break;case"after-documents":Array.isArray(r.o)&&r.o.length>0?e.status=r.o:console.warn("After Documents statuses are empty or not an array");break;default:e.status=""}return i(t?L.a.getAgencyClaimList({query:e}):R.a.getClaimList({query:e})),()=>{i(R.a.clearPolicyRedux()),i(L.a.resetReduxState())}}),[t,j,g,r.E]);const P=t?x:s,E=t?C:k,$=t?S:T;Object(p.useEffect)((()=>{w({totalRecords:t?null===f||void 0===f?void 0:f.total_records:null===b||void 0===b?void 0:b.total_records}),O(P)}),[P,g,j,b,f,t]);const A=r.e.map((e=>{let{title:t,filter:i,mobileTitle:n}=e;return{title:l?n:t,filter:i}}));return Object(N.jsxs)(xe,{children:[Object(N.jsx)(D,{tabs:A,selectedTag:g,onTagClickHandler:e=>{m(1),h(e)}}),Object(N.jsxs)(ue,{children:[E?Object(N.jsx)(z.a,{children:Object(N.jsx)(F.a,{})}):null,E||void 0===E||null!==y&&void 0!==y&&y.length?null:$?Object(N.jsx)(pe,{}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(be,{children:Object(N.jsx)(pe,{})})}),Array.isArray(y)?y.map((e=>{const{logo:t,info:i,name:n,productKey:r,benefitName:o,claimStatus:l,footerText:s,claimStatusText:p,claimStatusTextColor:x,claimStatusBackgroundColor:u,documentFillDate:b="",claimInternalId:f}=Object(d.q)(e,c);return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(_e,{logo:t,info:i,title:n,subTitle:r,benefitName:o,claimStatus:l,footerText:s,documentFillDate:b,claimStatusText:p,benefitTitle:I.b.benefitClaimed,claimStatusTextColor:x,footerButtonClickHandler:()=>{return e=f,void a.push(`/claimdetail/${e}`);var e},claimStatusBackgroundColor:u},f)})})):null]}),E?null:Object(N.jsx)(J,{pageSize:9,currPage:j,currPageHandler:e=>{m(e),window.scrollTo(0,0)},totalRecords:Number(v.totalRecords)})]})};var Le=function(){const e=Object(n.h)(),t=Object(o.d)((e=>e.User)),i=s()(t,"details.services",[]),{source:c}=a.a.parse(e.search),l=Object(N.jsx)("span",{"data-testid":"no-render"});return c===r.F.polis?Object(N.jsx)(ce,{}):c===r.F.claim?Object(N.jsx)(Re,{}):c===r.F.agencyPolis?Object(N.jsx)(ce,{isAgency:!0}):c===r.F.agencyClaim?Object(N.jsx)(Re,{isAgency:!0}):Object(d.h)(i)?Object(N.jsx)(ce,{}):Object(d.f)(i)?Object(N.jsx)(ce,{isAgency:!0}):l}},971:function(e,t,i){"use strict";function n(e){return Object.keys(e).reduce((function(t,i){return"data-"!==i.substr(0,5)&&"aria-"!==i.substr(0,5)&&"role"!==i||"data-__"===i.substr(0,7)||(t[i]=e[i]),t}),{})}i.d(t,"a",(function(){return n}))},979:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(968),a=i(62);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}var o,l,s={},d=4.5,p=24,x=24,u="topRight";function b(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x;switch(e){case"topLeft":t={left:0,top:i,bottom:"auto"};break;case"topRight":t={right:0,top:i,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:n};break;default:t={right:0,top:"auto",bottom:n}}return t}var f={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var g={open:function(e){var t=e.prefixCls||"ant-notification",i="".concat(t,"-notice"),r=void 0===e.duration?d:e.duration,p=null;if(e.icon)p=n.createElement("span",{className:"".concat(i,"-icon")},e.icon);else if(e.type){var x=f[e.type];p=n.createElement(a.default,{className:"".concat(i,"-icon ").concat(i,"-icon-").concat(e.type),type:x})}var g=!e.description&&p?n.createElement("span",{className:"".concat(i,"-message-single-line-auto-margin")}):null;!function(e,t){var i=e.prefixCls,r=e.placement,d=void 0===r?u:r,p=e.getContainer,x=void 0===p?o:p,f=e.top,g=e.bottom,h=e.closeIcon,j=void 0===h?l:h,m="".concat(i,"-").concat(d);if(s[m])t(s[m]);else{var y=n.createElement("span",{className:"".concat(i,"-close-x")},j||n.createElement(a.default,{className:"".concat(i,"-close-icon"),type:"close"}));c.a.newInstance({prefixCls:i,className:"".concat(i,"-").concat(d),style:b(d,f,g),getContainer:x,closeIcon:y},(function(e){s[m]=e,t(e)}))}}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer,closeIcon:e.closeIcon},(function(t){t.notice({content:n.createElement("div",{className:p?"".concat(i,"-with-icon"):""},p,n.createElement("div",{className:"".concat(i,"-message")},g,e.message),n.createElement("div",{className:"".concat(i,"-description")},e.description),e.btn?n.createElement("span",{className:"".concat(i,"-btn")},e.btn):null),duration:r,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})}))},close:function(e){Object.keys(s).forEach((function(t){return s[t].removeNotice(e)}))},config:function(e){var t=e.duration,i=e.placement,n=e.bottom,c=e.top,a=e.getContainer,r=e.closeIcon;void 0!==t&&(d=t),void 0!==i&&(u=i),void 0!==n&&(x=n),void 0!==c&&(p=c),void 0!==a&&(o=a),void 0!==r&&(l=r)},destroy:function(){Object.keys(s).forEach((function(e){s[e].destroy(),delete s[e]}))}};["success","info","warning","error"].forEach((function(e){g[e]=function(t){return g.open(r(r({},t),{type:e}))}})),g.warn=g.warning,t.default=g},980:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(1),c=i(98),a=i(961),r=i(24),o=i.n(r),l=i(62),s=i(322),d=i(971),p=i(55);function x(e){return x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},u.apply(this,arguments)}function b(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=m(e);if(t){var c=m(this).constructor;i=Reflect.construct(n,arguments,c)}else i=n.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;return j(e)}(this,i)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(){}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(m,e);var t,i,r,x=h(m);function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=x.call(this,e)).handleClose=function(e){e.preventDefault();var i=c.findDOMNode(j(t));i.style.height="".concat(i.offsetHeight,"px"),i.style.height="".concat(i.offsetHeight,"px"),t.setState({closing:!0}),(t.props.onClose||y)(e)},t.animationEnd=function(){t.setState({closing:!1,closed:!0}),(t.props.afterClose||y)()},t.renderAlert=function(e){var i,c=e.getPrefixCls,r=t.props,s=r.description,p=r.prefixCls,x=r.message,f=r.closeText,g=r.banner,h=r.className,j=void 0===h?"":h,m=r.style,y=r.icon,O=t.props,v=O.closable,w=O.type,k=O.showIcon,T=O.iconType,C=t.state,S=C.closing,P=C.closed,E=c("alert",p);k=!(!g||void 0!==k)||k,w=g&&void 0===w?"warning":w||"info";var $="filled";if(!T){switch(w){case"success":T="check-circle";break;case"info":T="info-circle";break;case"error":T="close-circle";break;case"warning":T="exclamation-circle";break;default:T="default"}s&&($="outlined")}f&&(v=!0);var A=o()(E,"".concat(E,"-").concat(w),(b(i={},"".concat(E,"-closing"),S),b(i,"".concat(E,"-with-description"),!!s),b(i,"".concat(E,"-no-icon"),!k),b(i,"".concat(E,"-banner"),!!g),b(i,"".concat(E,"-closable"),v),i),j),N=v?n.createElement("button",{type:"button",onClick:t.handleClose,className:"".concat(E,"-close-icon"),tabIndex:0},f?n.createElement("span",{className:"".concat(E,"-close-text")},f):n.createElement(l.default,{type:"close"})):null,_=Object(d.a)(t.props),R=y&&(n.isValidElement(y)?n.cloneElement(y,{className:o()("".concat(E,"-icon"),b({},y.props.className,y.props.className))}):n.createElement("span",{className:"".concat(E,"-icon")},y))||n.createElement(l.default,{className:"".concat(E,"-icon"),type:T,theme:$});return P?null:n.createElement(a.a,{component:"",showProp:"data-show",transitionName:"".concat(E,"-slide-up"),onEnd:t.animationEnd},n.createElement("div",u({"data-show":!S,className:A,style:m},_),k?R:null,n.createElement("span",{className:"".concat(E,"-message")},x),n.createElement("span",{className:"".concat(E,"-description")},s),N))},Object(p.a)(!("iconType"in e),"Alert","`iconType` is deprecated. Please use `icon` instead."),t.state={closing:!1,closed:!1},t}return t=m,(i=[{key:"render",value:function(){return n.createElement(s.a,null,this.renderAlert)}}])&&f(t.prototype,i),r&&f(t,r),m}(n.Component)}}]);
//# sourceMappingURL=54.1e8fe002.chunk.js.map