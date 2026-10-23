"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1818],{48558:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(1502),i=n(67816),r=n(80878);const o=n.n(r)().div`
  width:100%;
  padding:3%;
.steps-content {
  margin-top: 16px;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  padding-top: 40px;
}
.step-heading {
  text-align:center;
  padding:10px;
}
.steps-action {
  margin-top: 24px;
}
`;var a=n(70579);const{Step:c}=i.Steps;class d extends s.Component{constructor(e){super(e),this.state={steps:[{title:"Basic Information"},{title:"Policy data"},{title:"Package list"}]}}render(){const{steps:e}=this.state,{current:t}=this.props;return(0,a.jsxs)(o,{children:[(0,a.jsx)("h3",{className:"step-heading",children:(0,a.jsx)("b",{children:"Product Creation Wizard"})}),(0,a.jsx)(i.Steps,{current:t,children:e.map((e=>(0,a.jsx)(c,{title:e.title},e.title)))}),(0,a.jsx)("div",{className:"steps-content",children:this.props.children})]})}}const l=d},1818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var s=n(1502),i=n(67816),r=n(95916),o=n(10880),a=n(84982),c=n(4534),d=n(84334),l=n(351),p=n(70579);function x(e){const[t,n]=(0,s.useState)({provider:!1,endorsement:!0}),[x,u]=(0,s.useState)(""),[h,f]=(0,s.useState)(""),g=(0,s.useRef)({isCall:!1});return(0,s.useEffect)((()=>{if(!g.current.isCall){const{location:s}=e;if((0,r.size)((0,r.get)(s,"state",{}))>0){const e=(0,r.get)(s,"state.formData",{}),i=(0,r.get)(s,"state.formData.step1Data","");u((0,r.get)(i,"code")),f((0,r.get)(e,"packageData.code"));const o="provider"===(0,r.get)(e,"packageData.document_generation_source")||"provider"===(0,r.get)(e,"packageData.policy_number_source");n({...t,provider:o})}g.current.isCall=!0}}),[t,e]),(0,p.jsx)(a.A,{children:(0,p.jsx)(o.A,{current:3,newSteps:t,children:(0,p.jsx)(i.Row,{type:"flex",justify:"center",children:(0,p.jsx)(i.Col,{span:22,children:(0,p.jsx)(l.uo,{children:(0,p.jsx)(d.k,{children:x&&h&&(0,p.jsx)(c.A,{props:e,view:"add",productCodeData:x,packageCode:h})})})})})})})}},10880:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(1502),i=n(67816),r=n(80878);const o=n.n(r)().div`
.ant-steps-label-horizontal{
  padding:${e=>3===e.stepLength?"0px 120px":"0px 50px"};
}
`;var a=n(95916),c=n(70579);const{Step:d}=i.Steps;function l(e){let{children:t,current:n,newSteps:r}=e;const[l,p]=(0,s.useState)([{code:"package",title:"Package info"},{code:"validation",title:"Data validation"}]);return(0,s.useEffect)((()=>{let e=[...l];if((0,a.size)(r)>0){for(const t in r)if("provider"===t)if(r[t]){const t=e.find((e=>"provider"===e.code))||{};0===(0,a.size)(t)&&(e=[...e,{code:"provider",title:"Provider UI Config"}])}else e=e.filter((e=>"provider"!==e.code));else if("endorsement"===t)if(r[t]){const t=e.find((e=>"endorsement"===e.code))||{};0===(0,a.size)(t)&&(e=[...e,{code:"endorsement",title:"Endorsement UI Config"}])}else e=e.filter((e=>"endorsement"!==e.code));p(e)}}),[r]),(0,c.jsx)(o,{stepLength:l.length,children:(0,c.jsx)(i.Row,{type:"flex",justify:"center",children:(0,c.jsxs)(i.Col,{span:24,children:[(0,c.jsx)(i.Steps,{current:n,children:l.map((e=>(0,c.jsx)(d,{title:e.title},e.title)))}),(0,c.jsx)("div",{className:"steps-content",children:t})]})})})}},84982:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(1502),i=n(80878);const r=n.n(i)().div`
.table-section {
  margin-top: 30px;
}
.button-section {
  margin:20px 0px;
}
.dynamic-add-button {
  color:#1890ff;
}
.dynamic-delete-button {
  color:#f54242;
}
.button-size {
  font-size:15px;
}
.icon-div {
  display: flex;
  align-items: center;
  height: 30px;  
}
.single-validation-row {
  margin-bottom:10px;
}
`;var o=n(67816),a=n(48558),c=n(70579);class d extends s.Component{render(){return(0,c.jsx)(r,{children:(0,c.jsx)(o.Row,{type:"flex",justify:"center",children:(0,c.jsx)(o.Col,{span:20,children:(0,c.jsx)(a.A,{current:2,children:this.props.children})})})})}}const l=d}}]);
//# sourceMappingURL=1818.899eca83.chunk.js.map