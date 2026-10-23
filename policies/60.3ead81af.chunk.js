(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[60],{1459:function(t,e,i){"use strict";i.r(e);var s=i(1),o=i.n(s),n=i(172),a=i(82),c=i(958),r=i(946);var l=i(11).c.div`
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
`,d=i(67),p=i(2);class m extends o.a.Component{constructor(t){super(t),this.goToPolicyList=()=>{const{history:t}=this.props;window.sessionStorage.removeItem("claimForm"),window.sessionStorage.removeItem("claimType"),window.sessionStorage.removeItem("claimId"),t.push("/")},this.state={claimType:void 0!==window.sessionStorage.getItem("claimType")?window.sessionStorage.getItem("claimType"):[]}}componentWillMount(){const{history:t,match:e,location:i}=this.props;void 0===i.state&&t.push(`/policydetail/${e.params.id}`)}render(){const{state:t}=this.props.location;return Object(p.jsx)(l,{children:Object(p.jsx)(n.default,{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)(a.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(p.jsx)(c.a,{children:Object(p.jsxs)(n.default,{children:[Object(p.jsxs)(a.a,{xs:24,sm:24,md:12,lg:24,xl:24,children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)(d.a,{id:"Klaim anda berhasil dikirim"}),"."]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(d.a,{id:"No Klaim anda adalah"}),Object(p.jsx)("strong",{children:void 0!==t&&t.claimId})]})]}),Object(p.jsx)(a.a,{className:"btn-container",span:24,children:Object(p.jsx)(r.default,{type:"primary",className:"button",onClick:this.goToPolicyList,style:{float:"right",marginTop:"15px"},children:Object(p.jsx)(d.a,{id:"Daftar Polis"})})}),Object(p.jsx)(a.a,{className:"btn-container-mobile",span:24,children:Object(p.jsx)(r.default,{type:"primary",className:"button",onClick:this.goToPolicyList,style:{float:"right",marginTop:"15px",marginRight:"15px"},children:Object(p.jsx)(d.a,{id:"Daftar Polis"})})})]})})})})})}}e.default=m}}]);
//# sourceMappingURL=60.3ead81af.chunk.js.map