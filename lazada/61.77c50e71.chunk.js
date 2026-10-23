(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[61],{1457:function(t,e,i){"use strict";i.r(e);var a=i(1),s=i.n(a),n=i(52),o=i(986),l=i(172),c=i(82),d=i(1036),r=i(958),h=i(979),p=i(946),m=i(62);var x=i(11).c.div`
    overflow-y: scroll;
    margin-bottom: 200px;
    .claims-card{
      box-shadow: 1.1px 5.9px 7px 0 rgba(17, 17, 17, 0.4);
      background-color: #ffffff;
      margin-bottom: 30px;
      padding: 15px 12px;
      margin: 15px;
    }
    .b-card-heading{
      font-family: Muli;
      font-size: 16px;
      font-weight: 800;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.1;
      letter-spacing: 0.5px;
      text-align: left;
      color: #191919;
      margin-bottom: 10px;
      padding: 0px 20px;
    }
    .b-card-subheading{
      opacity: 0.65;
      font-family: Muli;
      font-size: 12.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.4px;
      text-align: left;
      color: rgba(25, 25, 25, 0.65);
      margin-bottom: 0px;
      padding: 0px 20px;
    }
    .active-card {
      background-color:#ffd500;
    }
    .icon-caret{
      display:flex;
      justify-content:center;
      align-items:flex-end;
      flex-direction:column;
    }
    .dots{
      height:8px;
      width:8px;
      border-radius:50%;
      display:block;
    }
    .btn-container{
      text-align:right;
    }
    .heading-benefit{
      opacity: 0.65;
      font-family: Muli;
      font-size: 13.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.4px;
      text-align: left;
      color: rgba(25, 25, 25, 0.65);
      padding: 0px 20px;
    }
    .button-cancel{
      width: 250px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      margin-bottom:30px;
      margin-left:15px;
    }
    .ant-radio-group{
      display: block;
    }
    .button-claim , .button-claim:hover {
      width: 250px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      background-color: #fdd400;
      margin-bottom:30px;
      margin-right:15px;
      border: 1px solid #fdd400;
    }
    .ant-divider-horizontal{
      margin: 20px 0px;
    }
    .benefit-list-row{
      padding: 0px 20px;
    }
    .ant-radio-inner::after{
      background-color: #fbd81b !important;
    }
    .ant-radio-checked .ant-radio-inner{
      border-color: #000000 !important;
      border: 1px solid;
      opacity:0.5;
    }
    .benefit-list-row strong{
      font-family: Muli;
      font-size: 15.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: 0.5px;
      text-align: left;
      color: #191919;
    }
    .form-title{
      font-family: Muli;
      font-size: 24px;
      text-align: center !important;
      font-weight: 800;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.91;
      letter-spacing: 1.1px;
      text-align: left;
      color: #000000;
      margin-top: 50px;
    }
    .ant-btn[disabled]{
      border-color: #d4d4d4 !important;
    }

  @media only screen and (max-width: 768px) {
    .button-claim,
    .button-claim:hover {
      width: 150px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      background-color: #fdd400;
      margin-bottom: 30px;
      margin-right: 15px;
      border: 1px solid #fdd400;
    }
    .button-cancel {
      width: 150px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      margin-bottom: 30px;
      margin-left: 15px;
    }
  }
  @media only screen and (max-width: 768px) {
    .button-claim,
    .button-claim:hover {
      width: 130px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      background-color: #fdd400;
      margin-bottom: 30px;
      margin-right: 15px;
      border: 1px solid #fdd400;
    }
    .button-cancel {
      width: 130px;
      height: 50px;
      object-fit: contain;
      border-radius: 3px;
      margin-bottom: 30px;
      margin-left: 15px;
    }
  }
`,b=i(3),f=i(67),g=i(148),j=i(2);const u=o.default.Group,{getBenefits:C,postClaim:y,resetReduxState:O}=b.a;class w extends s.a.Component{constructor(t){var e;super(t),e=this,this.intlText=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:" "};return e.props.intl.formatMessage(t)},this.radioButtonClick=t=>{this.state.index===t?this.setState({index:-1}):this.setState({index:t})},this.onCardClick=(t,e)=>{"simple"===e?this.setState({dottedCard:!1,simpleCard:!0,dottedCardShow:!1},(()=>{this.radioButtonClick(t)})):"dotted"===e?this.setState({simpleCard:!1,dottedCard:!0},(()=>{this.setState({dottedCardShow:!1}),this.radioButtonClick(t)})):this.radioButtonClick(t)},this.onShowContent=t=>{this.state.dottedIndex!==t&&this.setState({dottedCard:!1},(()=>{this.setState({dottedIndex:t,dottedCardShow:!this.state.dottedCardShow})}))},this.renderBenefitCard=(t,e)=>t.benefits.length<2?t.benefits.map(((t,i)=>Object(j.jsx)(u,{onChange:t=>{this.setState({claimType:t.target.value},(()=>{}))},value:this.state.claimType,children:Object(j.jsx)(o.default.Button,{value:t,onClick:()=>{this.onCardClick(e,"simple")},className:this.state.index===e&&this.state.simpleCard?"active-card claims-card":"claims-card",style:{width:"90%",height:60,borderStyle:"none"},children:Object(j.jsx)(l.default,{className:"benefit-list-row",children:Object(j.jsx)(c.a,{xs:22,xl:23,lg:23,md:23,children:Object(j.jsx)("strong",{children:Object(j.jsx)(f.a,{id:t.benefit_name})})})},e)})}))):Object(j.jsx)(u,{onChange:t=>{this.setState({claimType:t.target.value},(()=>{}))},value:this.state.claimType,children:Object(j.jsxs)("div",{onClick:()=>this.onShowContent(e),className:this.state.dottedIndex===e&&this.state.dottedCard?"active-card claims-card ":"claims-card",style:{width:"90%"},children:[Object(j.jsxs)(l.default,{style:{cursor:"pointer"},children:[Object(j.jsxs)(c.a,{xs:20,children:[Object(j.jsx)("p",{className:"b-card-heading",children:Object(j.jsx)(f.a,{id:t.benefit_group_name})}),Object(j.jsx)("p",{className:"b-card-subheading",children:Object(j.jsx)(f.a,{id:t.benefit_group_description})})]}),Object(j.jsx)(c.a,{xs:4,children:Object(j.jsxs)("p",{className:"icon-caret",onClick:()=>this.onShowContent(e),children:[Object(j.jsx)("span",{className:"dots",style:{background:this.state.dottedCard?"white":"#fcd300"}}),Object(j.jsx)("span",{className:"dots",style:{background:this.state.dottedCard?"white":"#fcd300",marginTop:2}}),Object(j.jsx)("span",{className:"dots",style:{background:this.state.dottedCard?"white":"#fcd300",marginTop:2}})]})})]}),this.state.dottedIndex===e&&this.state.dottedCardShow&&Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{}),Object(j.jsx)("p",{className:"heading-benefit",children:Object(j.jsx)(f.a,{id:"Pilih Manfaat"})}),t.benefits.map(((t,e)=>Object(j.jsxs)(l.default,{className:"benefit-list-row",style:{marginBottom:"20px"},children:[Object(j.jsx)(c.a,{xs:2,xl:1,lg:1,md:1,children:Object(j.jsx)(o.default,{value:t,onClick:()=>{this.onCardClick(e,"dotted")}})}),Object(j.jsx)(c.a,{xs:22,xl:23,lg:23,md:23,style:{paddingLeft:20},children:Object(j.jsx)(f.a,{id:t.benefit_name})})]},e)))]})]})}),this.noBenefitInfo=()=>Object(j.jsxs)(r.a,{children:[Object(j.jsx)("h3",{children:Object(j.jsx)(f.a,{id:"Anda dalam perlindungan yang tepat"})}),Object(j.jsxs)("p",{children:[Object(j.jsx)(f.a,{id:"Untuk info lebih lengkap hubungi customer service kami pada nomor di bawah ini"})," ","& ",Object(j.jsx)(f.a,{id:"daftarkan klaim anda"})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(f.a,{id:"Chat dengan customer service kami melalu nomor whatsapp dibawah ini"})," ","& ",Object(j.jsx)(f.a,{id:"daftarkan klaim anda"})]}),Object(j.jsxs)("span",{style:{fontSize:"24px"},children:[Object(j.jsx)("i",{className:"fab fa-whatsapp"})," \xa0\xa0(+62) 818 343 494"]})]}),this.next=()=>{const{claimType:t}=this.state;this.setState({loadingClaim:!0});const e=window.sessionStorage.getItem("toPolicyDetail");t.is_claim_active?this.props.postClaim({benefitId:t.benefit_id,applicationNo:e.applicationNo}):this.setState({loadingClaim:!1,activeClaim:!1})},this.goToDetailPolicyList=()=>{const{history:t,match:e}=this.props;window.sessionStorage.removeItem("toPolicyDetail"),t.push(`/policydetail/${e.params.id}`)},this.state={claimType:void 0!==window.sessionStorage.getItem("claimType")?window.sessionStorage.getItem("claimType"):"",failedGetBenefitLists:"",data:[],loading:!0,createClaimStatus:"",claimId:"",loadingClaim:!1,activeClaim:!0,canNotFetchBenefitsMessage:"",index:null,notifications:{},dottedCard:!1,dottedCardShow:!1,dottedIndex:null,simpleCard:!1}}componentWillMount(){const{location:t,match:e,history:i}=this.props,a=window.sessionStorage.getItem("toPolicyDetail");void 0===t.state&&void 0===a&&i.push(`/policydetail/${e.params.id}`)}componentWillReceiveProps(t){const{data:e,failedGetBenefitLists:i,createClaimStatus:a,claimId:s}=t.benefits;""!==a&&"success"!==a&&(void 0!==this.state.notifications.createClaimStatus&&!0===this.state.notifications.createClaimStatus||h.default.error({message:this.intlText({id:a}),description:"",onClose:()=>{this.setState({notifications:{...this.state.notifications,createClaimStatus:!1}})}}),this.setState({notifications:{...this.state.notifications,createClaimStatus:!0}}),this.props.resetReduxState()),""!==a&&"success"===a&&(window.sessionStorage.setItem("claim",s),this.setState({notifications:{...this.state.notifications,createClaimStatus:!1}}),this.props.resetReduxState()),""!==a&&(window.sessionStorage.setItem("claim",s),this.setState({createClaimStatus:a,claimId:s,loadingClaim:!1})),""!==i?this.setState({failedGetBenefitLists:i,loading:!1}):this.setState({data:e,loading:!1})}componentDidMount(){const{state:t}=this.props.location,e=window.sessionStorage.getItem("toPolicyDetail");if(Object.values(e).length>1||void 0!==t){const t=e.packageName.toLowerCase().replace(new RegExp(" ","g"),"-");this.props.getBenefits({package:t,product:e.product})}}render(){const{claimType:t,data:e,failedGetBenefitLists:i,loading:a,createClaimStatus:s,claimId:n}=this.state,{history:o}=this.props;if(""!==s&&"success"===s){const e=window.sessionStorage.getItem("toPolicyDetail");o.push({pathname:`/claimdetail/${""===n?window.sessionStorage.getItem("claim"):n}`,state:{benefitId:t,applicationNo:e.applicationNo,packageName:e.packageName,claimId:""===n?window.sessionStorage.getItem("claim"):n}})}return Object(j.jsx)(x,{children:Object(j.jsx)(l.default,{style:{display:"flex",justifyContent:"center"},children:Object(j.jsxs)(c.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:[""!==i&&Object(j.jsx)(l.default,{style:{display:"flex",justifyContent:"center"},children:Object(j.jsx)(c.a,{span:24,children:Object(j.jsxs)(r.a,{children:[this.noBenefitInfo(),Object(j.jsx)(p.default,{className:"btn-cancel",style:{float:"right",marginTop:"15px",marginLeft:"15px"},onClick:this.goToDetailPolicyList,children:Object(j.jsx)(f.a,{id:"Kembali"})})]})})}),a?Object(j.jsx)("center",{children:Object(j.jsx)(m.default,{type:"loading",className:"loader",style:{marginTop:"100px"}})}):""===i&&Object(j.jsxs)("div",{children:[this.state.activeClaim&&Object(j.jsxs)("span",{children:[Object(j.jsxs)("h2",{className:"form-title",children:[Object(j.jsx)(f.a,{id:"Pilih benefit untuk klaim"}),"."]}),e.length>0?e.map(((t,e)=>this.renderBenefitCard(t,e))):this.noBenefitInfo(),Object(j.jsx)(l.default,{children:Object(j.jsxs)(c.a,{className:"btn-container",span:24,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},children:[Object(j.jsx)(p.default,{className:"button-cancel",style:{marginTop:"15px",marginRight:"15px"},onClick:this.goToDetailPolicyList,children:Object(j.jsx)(f.a,{id:"Kembali"})}),Object(j.jsx)(p.default,{className:"button-claim",htmlType:"submit",style:{marginTop:"15px"},disabled:t.length<1,onClick:this.next,loading:this.state.loadingClaim,children:Object(j.jsx)(f.a,{id:"Klaim"})})]})})]}),!this.state.activeClaim&&Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l.default,{children:Object(j.jsx)(l.default,{children:this.noBenefitInfo()})}),Object(j.jsx)(p.default,{className:"btn-cancel",style:{float:"right",marginTop:"15px",marginLeft:"15px"},onClick:this.goToDetailPolicyList,children:Object(j.jsx)(f.a,{id:"Kembali"})})]})]})]})})})}}e.default=Object(n.b)((t=>({benefits:t.Claim})),{getBenefits:C,postClaim:y,resetReduxState:O})(Object(g.c)(w))}}]);
//# sourceMappingURL=61.77c50e71.chunk.js.map