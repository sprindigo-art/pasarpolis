"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2327],{31035:(e,a,t)=>{t.d(a,{C4:()=>r,Ul:()=>l,r9:()=>n.r9,uc:()=>o});t(1502);var i=t(67816),d=t(80878),s=t.n(d),n=t(79688);t(70579);const r=s().span`
    font-size: 14px;
    border-radius: 24px;
    padding: 0 12px;
    background-color: ${e=>e.bgColor?e.bgColor:"rgb(255, 159, 10)"};
    color: #ffffff;
    margin: 2px;
    display: block;
`,l=s().ul`
    margin: 0;
    padding: 0;
    list-style-position: inside;
`,o=s()(i.Card)`
  margin: 40px 20px;
  .break-word {
    word-break: break-word;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .mb-5 {
    margin-bottom: 5px;
  }
`},79688:(e,a,t)=>{t.d(a,{RN:()=>r,r9:()=>n,yN:()=>l});var i=t(80878),d=t.n(i),s=t(67816);const n=d()(s.Row)`
  margin: ${e=>"small"===e.marginSize?"10px":"20px"} 0;
  .mt-24 {
    margin-top: 15px;
  }
  .break-word {
    word-break: break-word;
  }
  .break-all {
    word-break: break-all;
  }
`,r=d()(s.Col)`
  text-align: right;
`,l=d()(s.Col)`
  text-align: center;
`;d().div`
  .ant-btn-primary{
      ${e=>e.bgColor?`background-color: ${e.bgColor}`:""}
  }
`},34992:(e,a,t)=>{t.d(a,{A:()=>o});var i=t(67816),d=t(1502),s=t(88962),n=t(80878);const r=t.n(n)().div`
  margin: 40px 20px;
`;var l=t(70579);const o=e=>{let{goBackLocation:a=""}=e;const t=(0,s.useHistory)(),n=(0,d.useCallback)((()=>{a?t.push(a):t.goBack()}),[t,a]);return(0,l.jsx)(r,{children:(0,l.jsxs)(i.Button,{onClick:n,children:[(0,l.jsx)(i.Icon,{type:"left"})," Back"]})})}},72327:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var i=t(69732),d=t(1502),s=t(88962),n=t(34992),r=t(3098);const l={getSMEDetail:{dataKey:"SME_DETAILS",url:r.A.getSMEDetail},getSMELeadConfig:{dataKey:"SME_LEAD_CONFIG",url:r.A.getSMELeadConfig},postSMELeadUpdate:{dataKey:"SME_LEAD_UPDATE",url:r.A.postSMELeadUpdateStatus}};var o=t(67816),u=t(97418),c=t(31035),p=t(80878);const v=t.n(p)()(o.Tag)`
  margin-bottom: 3px;
`;var m=t(70579);const{Text:h}=o.Typography;function g(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{let{code:a,name:t}=e;this[a]=t}))}function x(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{let{code:a,name:t}=e;this[a]=t}))}const E=e=>{let{smeDetail:a,statusOptions:t,prePackages:i}=e;const s=(0,d.useMemo)((()=>new g(i)),[i]),n=(0,d.useMemo)((()=>new x(t)),[t]),r=(0,d.useMemo)((()=>[{heading:"Company Name",data:null===a||void 0===a?void 0:a.company_name},{heading:"Name",data:null===a||void 0===a?void 0:a.name},{heading:"Created at",data:null===a||void 0===a?void 0:a.created_at},{heading:"Email",data:null===a||void 0===a?void 0:a.work_email},{heading:"SME Prepackage",data:(0,m.jsx)(o.Tag,{color:"magenta",children:s[null===a||void 0===a?void 0:a.sme_prepackage]})},{heading:"Email Verified at ",data:null===a||void 0===a?void 0:a.email_verified_at},{heading:"Internal Remarks",data:null===a||void 0===a?void 0:a.internal_remarks},{heading:"User Remarks",data:null===a||void 0===a?void 0:a.remarks}]),[a,s]),l=(0,d.useMemo)((()=>{var e,t,i;return[{heading:"Id",data:null===a||void 0===a?void 0:a.id},{heading:"Phone",data:null===a||void 0===a?void 0:a.phone},{heading:"Total Payable Price",data:(0,m.jsx)(o.Tag,{color:"green",children:(0,u.gs)(null===a||void 0===a?void 0:a.total_payable_price)})},{heading:"Verification date",data:null===a||void 0===a?void 0:a.verification_date},{heading:"Lead Status Updated At",data:null===a||void 0===a?void 0:a.lead_status_updated_at},{heading:"Lead Previous Status",data:n[null===a||void 0===a?void 0:a.previous_status]},{heading:"Lead Status",data:n[null===a||void 0===a?void 0:a.lead_status]},{heading:"Participants Count",data:(0,m.jsxs)("div",{children:[(0,m.jsxs)(v,{color:"blue",children:["Total - ",null===a||void 0===a?void 0:a.total_participants]}),(0,m.jsxs)(v,{color:"volcano",children:["Male - ",null===a||void 0===a||null===(e=a.participant_count)||void 0===e?void 0:e.MALE]}),(0,m.jsxs)(v,{color:"pink",children:["Female - ",null===a||void 0===a||null===(t=a.participant_count)||void 0===t?void 0:t.FEMALE]}),(0,m.jsxs)(v,{color:"purple",children:["Children - ",null===a||void 0===a||null===(i=a.participant_count)||void 0===i?void 0:i.CHILD]})]})}]}),[a,n]);return(0,m.jsxs)(c.uc,{children:[(0,m.jsx)("h2",{children:"SME Lead Detail"}),(0,m.jsxs)(o.Row,{gutter:32,children:[(0,m.jsx)(o.Col,{span:12,children:r.map((e=>{let{heading:a,data:t}=e;return(0,m.jsxs)(c.r9,{children:[(0,m.jsx)(o.Col,{span:12,children:(0,m.jsx)(h,{strong:!0,children:a})}),(0,m.jsx)(o.Col,{span:12,children:t})]},a)}))}),(0,m.jsx)(o.Col,{span:12,children:l.map((e=>{let{heading:a,data:t}=e;return(0,m.jsxs)(c.r9,{children:[(0,m.jsx)(o.Col,{span:12,children:(0,m.jsx)(h,{strong:!0,children:a})}),(0,m.jsx)(o.Col,{span:12,children:t})]},a)}))})]})]})},_=o.Form.create({name:"new-case-form"})((e=>{let{form:a,id:t,detailData:s,statusEvents:n,statusOptions:r}=e;const[,u]=(0,i.usePost)(l.postSMELeadUpdate),{getFieldDecorator:p,getFieldValue:v,validateFields:h,resetFields:g}=a,[{SME_LEAD_UPDATE_ERROR:x,smeLeadUpdateStatus:E,smeLeadUpdateErrorData:_}]=(0,i.useErrorContextValue)(),[,j]=(0,i.useGet)(l.getSMEDetail),{resetError:f}=(0,i.useResetError)(),b=(0,d.useCallback)((e=>{e.preventDefault(),h(((e,a)=>{e||u({...a,reference_id:null===s||void 0===s?void 0:s.reference_id})}))}),[s,h,u]);return(0,d.useEffect)((()=>{"success"===E&&(g(),j({id:null===s||void 0===s?void 0:s.id}),o.message.success("Status updated successfully"),f(["smeLeadUpdateStatus"]))}),[E,g,j,s,f]),(0,d.useEffect)((()=>()=>{f(["SME_LEAD_UPDATE_ERROR","smeLeadUpdateStatus"])}),[f]),(0,m.jsxs)(c.uc,{children:[(0,m.jsx)("h2",{children:"Update Lead"}),x&&(0,m.jsx)("div",{className:"mb-5",children:(0,m.jsx)(o.Alert,{type:"error",message:(null===_||void 0===_?void 0:_.message)||E,banner:!0})}),(0,m.jsxs)(o.Form,{onSubmit:b,children:[(0,m.jsxs)(o.Row,{gutter:32,children:[(0,m.jsx)(o.Col,{span:8,children:(0,m.jsx)(o.Form.Item,{required:!0,label:"Lead Status",children:p("event_code",{rules:[{required:!0,message:"This field is required"}]})((0,m.jsx)(o.Select,{disabled:"WINNING"===(null===s||void 0===s?void 0:s.lead_status)&&(null===s||void 0===s?void 0:s.is_company_created),children:null===n||void 0===n?void 0:n.map(((e,a)=>(0,m.jsx)(o.Select.Option,{value:e.code,children:e.name},a)))}))})}),"lose"===v("event_code")&&(0,m.jsx)(o.Col,{span:8,children:(0,m.jsx)(o.Form.Item,{required:!0,label:"Lose case reason",children:p("internal_remarks",{rules:[{required:!0,message:"This field is required"}]})((0,m.jsx)(o.Input.TextArea,{}))})})]}),(0,m.jsx)(o.Row,{gutter:32,children:(0,m.jsx)(o.Col,{span:8,children:(0,m.jsx)(o.Form.Item,{children:(0,m.jsx)(o.Button,{type:"primary",htmlType:"submit",block:!0,children:"Update Detail"})})})})]})]})}));var j=t(8624);const f=e=>{let{form:a}=e;const[t,r]=(0,i.useGet)(l.getSMEDetail),[u,c]=(0,i.useGet)(l.getSMELeadConfig),[{SME_DETAILS_LOADER:p,SME_LEAD_CONFIG_LOADER:v,SME_LEAD_UPDATE_LOADER:h}]=(0,i.useLoaderContextValue)(),g=(0,s.useParams)(),x=(0,d.useMemo)((()=>{var e;return null===u||void 0===u||null===(e=u.lead_events)||void 0===e?void 0:e.filter((e=>{let{source:a}=e;return a===(null===t||void 0===t?void 0:t.lead_status)}))}),[t,u]);return(0,d.useEffect)((()=>{r({id:g.leadId})}),[g,r]),(0,d.useEffect)((()=>{c()}),[c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.A,{goBackLocation:"/employee-benefits/sme-prepackage-leads/"}),(0,m.jsxs)(o.Spin,{spinning:!!(p||v||h),children:[(0,m.jsx)(E,{smeDetail:t,statusOptions:null===u||void 0===u?void 0:u.lead_status,prePackages:null===u||void 0===u?void 0:u.pre_package_types}),(0,m.jsx)(j.A,{requiredPermission:"ops.eb_update_lead",children:(0,m.jsx)(_,{detailData:t,statusOptions:null===u||void 0===u?void 0:u.lead_status,statusEvents:x})})]})]})},b=()=>(0,m.jsx)(i.ApiContextProvider,{children:(0,m.jsx)(f,{})})},8624:(e,a,t)=>{t.d(a,{A:()=>r});var i=t(1502),d=t.n(i),s=t(24952);class n extends d().Component{render(){const{permissions:e,requiredPermission:a,defaultComponent:t=null}=this.props;return e.find((e=>e===a))?this.props.children:t}}n.defaultProps={permissions:[]};const r=(0,s.connect)((e=>({permissions:e.Auth.permissions})),{})(n)}}]);
//# sourceMappingURL=2327.b459bce4.chunk.js.map