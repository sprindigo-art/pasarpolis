(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[62],{1458:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s.n(i),n=s(52),l=s(1043),c=s(172),o=s(82),r=s(958),d=s(980),m=s(942),h=s(946);var p=s(11).c.div`
  margin: 20px;
  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
  .btn-container-mobile {
    display: none;
  }
  .button {
    background-color: #ffd500;
    border: none;
    border-radius: 0px;
  }
  .button:hover {
    background-color: #dbb80a;
  }
  .btn-cancel {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    .btn-container-mobile {
      display: unset;
      position: fixed;
      bottom: 0;
      right: 0;
      height: 60px;
      background-color: #fff;
    }
    .btn-container {
      display: none;
    }
  }
`,j=s(3),b=s(2);const x=l.default.Panel,{getFormByBenefits:g,postClaim:u,resetReduxState:f}=j.a;class O extends a.a.Component{constructor(t){super(t),this.resetState=()=>{this.props.resetReduxState()},this.back=()=>{const{history:t}=this.props;t.goBack()},this.postClaim=()=>{const{historyProps:t}=this.state;this.setState({loading:!0}),this.props.postClaim(t),setTimeout((()=>{this.setState({loading:!1}),this.resetState()}),3e3)},this.state={claimType:void 0!==window.sessionStorage.getItem("claimType")?window.sessionStorage.getItem("claimType"):"",claimId:"",failedPostClaim:"",loading:!1,historyProps:t.location.state,checkClaimId:void 0!==window.sessionStorage.getItem("claimId")?window.sessionStorage.getItem("claimId"):""}}componentWillMount(){const{history:t,match:e,location:s}=this.props;void 0===s.state&&t.push(`/policydetail/${e.params.id}`)}componentWillReceiveProps(t){const{claimId:e,failedPostClaim:s}=t;""!==e&&this.setState({claimId:e}),""!==s&&this.setState({failedPostClaim:s})}componentWillUnmount(){this.resetState()}render(){const{claimId:t,historyProps:e,failedPostClaim:s,checkClaimId:i}=this.state,{history:a}=this.props;return""!==t&&(window.sessionStorage.setItem("claim",t),a.push({pathname:`${a.location.pathname}/finish`,state:{claimId:t}})),""!==i&&a.push({pathname:`${a.location.pathname}/finish`,state:{claimId:i}}),Object(b.jsxs)(p,{children:[Object(b.jsx)(c.default,{style:{display:"flex",justifyContent:"center"},children:Object(b.jsx)(o.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(b.jsxs)(r.a,{children:[""!==s&&Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{style:{marginBottom:"10px"},message:"",description:s,type:"error",showIcon:!0,closable:!0})}),Object(b.jsxs)(m.a,{spinning:this.state.loading,children:[Object(b.jsx)(c.default,{children:Object(b.jsx)(o.a,{xs:24,sm:24,md:12,lg:24,xl:24,children:Object(b.jsx)(l.default,{defaultActiveKey:["1"],children:Object(b.jsx)(x,{header:"Ringkasan",children:Object(b.jsx)("p",{children:void 0!==e?e.packageName:""})},"1")})})}),Object(b.jsxs)("div",{style:{marginTop:"30px"},children:[Object(b.jsxs)(c.default,{children:[Object(b.jsx)(o.a,{xs:7,sm:5,md:12,lg:24,xl:24,children:Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"No Rekening"})})}),Object(b.jsx)(o.a,{xs:17,sm:24,md:12,lg:24,xl:24,children:Object(b.jsx)("p",{children:void 0!==e?e.account_number:""})})]}),Object(b.jsxs)(c.default,{children:[Object(b.jsx)(o.a,{xs:7,sm:5,md:12,lg:24,xl:24,children:Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Atas Nama"})})}),Object(b.jsx)(o.a,{xs:17,sm:24,md:12,lg:24,xl:24,children:Object(b.jsx)("p",{children:void 0!==e?e.account_holder_name:""})})]})]}),Object(b.jsx)(c.default,{children:Object(b.jsxs)(o.a,{className:"btn-container",span:24,children:[Object(b.jsx)(h.default,{className:"btn-cancel",style:{float:"left",marginTop:"15px",marginRight:"10px"},onClick:this.back,children:"Kembali"}),Object(b.jsx)(h.default,{type:"primary",className:"button",onClick:this.postClaim,style:{float:"right",marginTop:"15px"},children:"Lanjut"})]})})]})]})})}),Object(b.jsxs)(o.a,{className:"btn-container-mobile",span:24,children:[Object(b.jsx)(h.default,{className:"btn-cancel",style:{float:"left",marginTop:"15px",marginLeft:"15px"},onClick:this.back,children:"Kembali"}),Object(b.jsx)(h.default,{type:"primary",className:"button",onClick:this.postClaim,style:{float:"right",marginTop:"15px",marginRight:"15px"},children:"Lanjut"})]})]})}}e.default=Object(n.b)((t=>({claimId:t.Claim.claimId,failedPostClaim:t.Claim.failedPostClaim})),{getFormByBenefits:g,postClaim:u,resetReduxState:f})(O)}}]);
//# sourceMappingURL=62.823b6eb9.chunk.js.map