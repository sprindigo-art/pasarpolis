"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7162],{47162:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var r=s(1502),a=s.n(r),n=s(95916),o=s(67816),i=s(80878),l=s.n(i);const d=l().div`
margin-top: 30px;
.button__back {
  margin-bottom:10px;
  .ant-btn {
    background: #1890ff;
    color: #ffffff;
  }
}
`;var c=s(97418),p=s(37455);const u={RESET_TEST_CREATE_POlICY:"RESET_TEST_CREATE_POlICY",GET_PACKAGES_REQUEST:"GET_PACKAGES_REQUEST",GET_PACKAGES:"GET_PACKAGES",GET_PRODUCT_PACKAGE_ATTRIBUTES:"GET_PRODUCT_PACKAGE_ATTRIBUTES",GET_PRODUCT_PACKAGE_ATTRIBUTES_REQUEST:"GET_PRODUCT_PACKAGE_ATTRIBUTES_REQUEST",POST_POLICY_ATTRIBUTES_REQUEST:"POST_POLICY_ATTRIBUTES_REQUEST",POST_POLICY_ATTRIBUTES:"POST_POLICY_ATTRIBUTES",POST_ENDORSEMENT_REQUEST:"POST_ENDORSEMENT_REQUEST",POST_ENDORSEMENT:"POST_ENDORSEMENT",resetState:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:u.RESET_TEST_CREATE_POlICY,payload:e}},getPackages:e=>({type:u.GET_PACKAGES_REQUEST,payload:{...e,method:"authGet",url:p.A.getPackages}}),getProductPackagesAttributes:e=>({type:u.GET_PRODUCT_PACKAGE_ATTRIBUTES_REQUEST,payload:{...e,method:"authGet",url:p.A.getProductPackgesAttributes}}),postPolicyAttributes:e=>({type:u.POST_POLICY_ATTRIBUTES_REQUEST,payload:{...e,method:"authPost",url:p.A.postPolicyAttributes}}),postEndorsementAttributes:e=>({type:u.POST_ENDORSEMENT_REQUEST,payload:{...e,method:"authPost",url:p.A.postEndorsementAttributes}})},h=u,m={},x=(e,t)=>{const{payload:s}=t;switch(t.type){case h.RESET_TEST_CREATE_POlICY:{const t=(0,c.N4)(s);return{...e,...t}}case h.GET_PACKAGES:case h.GET_PRODUCT_PACKAGE_ATTRIBUTES:case h.POST_POLICY_ATTRIBUTES:case h.POST_ENDORSEMENT:return{...e,...s};default:return e}};var f=s(70579);const g=(0,r.createContext)(),j=e=>(0,f.jsx)(g.Provider,{value:(0,r.useReducer)(x,m),children:e.children}),y=()=>(0,r.useContext)(g);var b=s(43232);function _(){const[,e]=y();return[async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];await e(h.resetState(t))}]}function E(){const[{getProductPackageAttributesData:e,getProductPackageAttributesStatus:t},s]=y(),[r]=(0,b.A)(s);return[{getProductPackageAttributesData:e,getProductPackageAttributesStatus:t},async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(h.getProductPackagesAttributes(e))}]}const T=l().div`
  .select_packages {
    width: 400px;
  }
  .padding10 {
    padding-top:10px;
  }
`,{Option:S}=o.Select;function P(e){let{product:t,partner:s,packageDataFunction:a}=e;const[i,l]=(0,r.useState)(!1),[d,c]=(0,r.useState)([]),[{getPackagesData:p,getPackagesStatus:u},m]=function(){const[{getPackagesData:e,getPackagesStatus:t},s]=y(),[r]=(0,b.A)(s);return[{getPackagesData:e,getPackagesStatus:t},async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(h.getPackages(e))}]}(),[{getProductPackageAttributesStatus:x},g]=E(),[j]=_();(0,r.useEffect)((()=>{"success"===x&&l(!1),"success"!==x&&void 0!==x&&l(!1),"success"===u&&(c(p),j(["getPackagesStatus"])),"success"!==u&&void 0!==u&&(o.notification.error({message:(0,n.get)(p,"message","")}),j(["getPackagesStatus"]))}),[u,x]),(0,r.useEffect)((()=>{s&&t&&m({query:{product_code:t,partner_code:s}})}),[t,s]);return(0,f.jsx)(T,{children:(0,f.jsx)(o.Spin,{spinning:i,children:(0,f.jsxs)(o.Card,{children:[(0,f.jsxs)(o.Row,{type:"flex",children:[(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)("span",{children:(0,f.jsx)("b",{children:"Product"})})}),(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)("span",{children:t})})]}),(0,f.jsxs)(o.Row,{className:"padding10",type:"flex",children:[(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)("span",{children:(0,f.jsx)("b",{children:"Partner"})})}),(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)("span",{children:s})})]}),(0,f.jsxs)(o.Row,{className:"padding10",type:"flex",children:[(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)("span",{children:(0,f.jsx)("b",{children:"Package"})})}),(0,f.jsx)(o.Col,{span:8,children:(0,f.jsx)(o.Select,{showSearch:!0,filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,onChange:e=>{a(e),l(!0),g({query:{product_code:t,package_code:e}})},className:"select_packages",children:d.map(((e,t)=>(0,f.jsx)(S,{value:e.code,children:e.name},t)))})})]})]})})})}const A=l().div`
padding-top:10px;
padding-bottom:10px;
border-bottom: 1px solid #d7d7d7;
.ant-input {
  border-radius: 15px;
}
`;function C(e){let{initialValue:t,type:s,formName:r,label:a,name:n,prefilled:i,getFieldDecorator:l}=e;return(0,f.jsx)(A,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:a})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:l(r,{initialValue:t})((0,f.jsx)(o.Input,{}))})]})})}const R=l().div`
padding-top:10px;
padding-bottom:10px;
border-bottom: 1px solid #d7d7d7;
.ant-input {
  border-radius: 15px;
  width: auto;
}
`;function w(e){let{initialValue:t,type:s,formName:r,label:a,name:n,prefilled:i,getFieldDecorator:l}=e;return(0,f.jsx)(R,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:a})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:l(r,{initialValue:t})((0,f.jsx)(o.Input,{}))})]})})}const D=l().div`
padding-top:10px;
padding-bottom:10px;
border-bottom: 1px solid #d7d7d7;
.ant-input-number {
  border-radius: 15px;
}
.ant-input-number-handler-wrap{
  right: 2px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
`;function N(e){let{initialValue:t,type:s,formName:r,getFieldDecorator:a,label:n,name:i,prefilled:l}=e;return(0,f.jsx)(D,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:n})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:a(r,{initialValue:t})((0,f.jsx)(o.InputNumber,{}))})]})})}const k=l().div`
  padding-top:10px;
  padding-bottom:10px;
  .padding__left {
    padding-left:20px;
  }
`;function O(e){let{formName:t,parentKey:s,fields:r,form:a}=e;const i=t;return(0,f.jsx)(k,{children:(0,f.jsxs)(o.Row,{type:"flex",children:[(0,f.jsx)(o.Col,{span:24,children:(0,f.jsx)("h4",{children:(0,f.jsxs)("b",{children:[s,"(object)"]})})}),(0,n.size)(r)>0&&Object.keys(r).map(((e,t)=>{const s=H.call(this,{form:a,formName:`${i}.${e}`,type:r[e],label:(0,c.Zr)(e),initialValue:"",required:!0,parentKey:(0,c.Zr)(e)});return(0,f.jsx)(o.Col,{className:"padding__left",span:24,children:s},t)}))]})})}const v=l().div`
.heading {
  width:100%;
  border-bottom: 2px solid #d7d7d7;
  border-width:100%;
   h4 {
     float: left;
   }
}
.dynamic-add-button {
  color:#1890ff;
  cursor:pointer;
}
.dynamic-delete-button {
  color:#f54242;
  cursor:pointer;
}
.padding_left {
  padding-left:20px;
}
`,U=l().div`
.dynamic-add-button {
  color:#1890ff;
  cursor:pointer;
}
.dynamic-delete-button {
  color:#f54242;
  cursor:pointer;
}
.input__items {
  margin-top: 20px;
}
.array_of_string__head {
  width:100%;
  h4 {
    float: left;
  }
}
`;function I(e){let{form:t,formName:s,parentKey:n,getFieldDecorator:i}=e;const[l,d]=(0,r.useState)([{id:0,showAdd:!0,showDelete:!1}]),c=()=>{const e=l[l.length-1].id,t=[...l,{...l[0],id:e+1}].map((e=>({...e,showAdd:!0,showDelete:!0})));d(t)};return(0,f.jsx)(U,{children:(0,f.jsxs)(o.Row,{type:"flex",children:[(0,f.jsx)(o.Col,{span:24,children:n&&(0,f.jsx)("div",{className:"array_of_string__head",children:(0,f.jsx)("h4",{children:(0,f.jsx)("b",{children:n})})})}),(0,f.jsx)(o.Col,{span:24,children:(0,f.jsx)(o.Row,{type:"flex",justify:"space-between",align:"middle",gutter:30,children:l.map(((e,t)=>(0,f.jsxs)(a().Fragment,{children:[(0,f.jsx)(o.Col,{className:"input__items",span:2,children:(0,f.jsx)("span",{children:(0,f.jsxs)("b",{children:["Item ",t," "]})})}),(0,f.jsx)(o.Col,{span:20,children:i(`${s}[${t}]`)((0,f.jsx)(o.Input,{}))}),(0,f.jsx)(o.Col,{span:2,children:(0,f.jsxs)(o.Row,{type:"flex",gutter:20,children:[e.showAdd&&(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Icon,{className:"dynamic-add-button button-size",type:"plus-circle",theme:"filled",onClick:c})}),e.showDelete&&(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Icon,{className:"dynamic-delete-button button-size",type:"minus-circle",theme:"filled",onClick:()=>(e=>{let t=l.filter((t=>t.id!==e));1===t.length&&(t=t.map((e=>({...e,showDelete:!1})))),d(t)})(e.id)})})]})})]},t)))})})]})})}function F(e){let{form:t,fields:s,formName:n,parentKey:i}=e;const l=[{...s,id:0,showAdd:!0,showDelete:!1}],[d,p]=(0,r.useState)(l),u=n,h=()=>{const e=d[d.length-1].id,t=[...d,{...l[0],id:e+1}].map((e=>({...e,showAdd:!0,showDelete:!0})));p(t)};return(0,f.jsxs)(v,{children:[(0,f.jsx)("div",{className:"heading",children:i&&(0,f.jsx)("h4",{children:(0,f.jsxs)("b",{children:[i," (array of object)"]})})}),(0,f.jsx)(o.Row,{type:"flex",align:"middle",gutter:40,children:d.map(((e,s)=>{const r=e;return(0,f.jsxs)(a().Fragment,{children:[(0,f.jsx)(o.Col,{span:22,children:Object.keys(r).map((e=>{const a=H.call(this,{form:t,formName:`${u}[${s}].${e}`,type:r[e],label:(0,c.Zr)(e),initialValue:r[e].prefill?r[e].prefill:"",parentKey:e});return(0,f.jsx)(o.Row,{className:"padding_left",type:"flex",children:(0,f.jsx)(o.Col,{span:24,children:a})},s)}))}),(0,f.jsx)(o.Col,{span:2,children:(0,f.jsxs)(o.Row,{type:"flex",gutter:10,children:[e.showAdd&&(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Icon,{className:"dynamic-add-button button-size",type:"plus-circle",theme:"filled",onClick:h})}),e.showDelete&&(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Icon,{className:"dynamic-delete-button button-size",type:"minus-circle",theme:"filled",onClick:()=>(e=>{let t=d.filter((t=>t.id!==e));1===t.length&&(t=t.map((e=>({...e,showDelete:!1})))),p(t)})(e.id)})})]})})]},s)}))})]})}function K(e){let{type:t,form:s,fields:r,formName:a,parentKey:n,getFieldDecorator:o}=e;switch(t){case"string":return(0,f.jsx)(I,{form:s,formName:a,parentKey:n,getFieldDecorator:o});case"object":return(0,f.jsx)(F,{form:s,fields:r,formName:a,parentKey:n});default:return""}}const G=l().div`
  padding-top:10px;
  padding-bottom:10px;
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  .datetime {
    border-radius: 15px;
  }

`;function Y(e){let{label:t,type:s,getFieldDecorator:r,formName:a}=e;return(0,f.jsx)(G,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:t})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:r(a)((0,f.jsx)(o.Input,{type:"datetime-local",className:"datetime"}))})]})})}const{Option:B}=o.Select,V=l().div`
padding-top:10px;
padding-bottom:10px;
.ant-select-selection {
  border-radius: 20px;
}
`;function $(e){let{formName:t,label:s,type:r,name:a,prefilled:n,getFieldDecorator:i}=e;return(0,f.jsx)(V,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:s})," ",(0,f.jsxs)("small",{children:["(",r,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:i(t)((0,f.jsxs)(o.Select,{children:[(0,f.jsx)(B,{value:!0,children:"True"}),(0,f.jsx)(B,{value:!1,children:"False"})]}))})]})})}const M=l().div`
padding-top:10px;
padding-bottom:10px;
border-top: 1px solid #d7d7d7;
border-bottom: 1px solid #d7d7d7;

.input__Fields {
  width: 100%;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  padding-left: 16px;

}
`;function q(e){let{label:t,type:s,getFieldDecorator:r,formName:a}=e;return(0,f.jsx)(M,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:t})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:r(a)((0,f.jsx)("input",{className:"input__Fields",type:"date",pattern:"\\d{4}-\\d{2}-\\d{2}"}))})]})})}const L=l().div`
padding-top:10px;
padding-bottom:10px;
border-bottom: 1px solid #d7d7d7;
.ant-input-number {
  border-radius: 15px;
}
.ant-input-number-handler-wrap{
  right: 2px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
`;function Q(e){let{initialValue:t,type:s,formName:r,getFieldDecorator:a,label:n,name:i,prefilled:l}=e;return(0,f.jsx)(L,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"space-between",children:[(0,f.jsx)(o.Col,{span:6,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:n})," ",(0,f.jsxs)("small",{children:["(",s,")"]})," "]})}),(0,f.jsx)(o.Col,{span:18,children:a(r,{initialValue:t})((0,f.jsx)(o.InputNumber,{max:2150,min:1850}))})]})})}function H(e){const{form:t,formName:s,type:r,label:a=" ",initialValue:n,parentKey:o}=e,{getFieldDecorator:i}=t,{type:l,fields:d={},field_type:c}=r;switch(l){case"int":return(0,f.jsx)(N,{type:c,initialValue:n,formName:s,label:a,getFieldDecorator:i});case"string":return(0,f.jsx)(C,{type:c,initialValue:n,formName:s,label:a,getFieldDecorator:i});case"object":return(0,f.jsx)(O,{form:t,parentKey:o,fields:d,formName:s});case"array":return(0,f.jsx)(K,{formName:s,form:t,fields:d,type:c,parentKey:o,getFieldDecorator:i});case"date":return(0,f.jsx)(q,{initialValue:n,label:a,getFieldDecorator:i,formName:s,type:c});case"datetime":return(0,f.jsx)(Y,{initialValue:n,label:a,getFieldDecorator:i,formName:s,type:c});case"year":return(0,f.jsx)(Q,{form:t,initialValue:n,label:a,getFieldDecorator:i,formName:s,type:c});case"float64":return(0,f.jsx)(w,{type:c,initialValue:n,formName:s,label:a,getFieldDecorator:i});case"bool":return(0,f.jsx)($,{initialValue:n,label:a,getFieldDecorator:i,formName:s,type:c});default:return null}}var Z=s(3296),z=s(33097),W=s.n(z);const X=l().div`
  .submit__section {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
`;var J=s(86178),ee=s.n(J);const te=o.Form.create()((function(e){const{data:t,form:s,partner:a,product:n,packageKey:i,refPicker:l}=e,[{postPolicyAttributesData:d,postPolicyAttributesStatus:p},u]=function(){const[{postPolicyAttributesData:e,postPolicyAttributesStatus:t},s]=y(),[r]=(0,b.A)(s);return[{postPolicyAttributesData:e,postPolicyAttributesStatus:t},async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(h.postPolicyAttributes(e))}]}(),[m]=_(),[{POST_POLICY_ATTRIBUTES_LOADER:x}]=(0,Z.xv)();(0,r.useEffect)((()=>{"success"===p&&(o.notification.success({message:"Test Policy Created"}),l(W()(d,"ref")),m(["postPolicyAttributesStatus"])),"success"!==p&&void 0!==p&&(o.notification.error({message:p}),m(["postPolicyAttributesStatus"]))}),[p]);const g=(0,r.useMemo)((()=>Object.keys(t)),[t]),j=(0,r.useMemo)((()=>`ref${Math.floor(1e5+9e5*Math.random())}`),[]);return(0,f.jsx)(X,{children:(0,f.jsx)(o.Form,{onSubmit:e=>{e.preventDefault(),s.validateFields(((e,t)=>{if(!e){t.year&&(t.year=t.year.toString());const e={...t};for(const t in e){const s=e[t];ee()(s).isValid()&&"YYYY-MM-DDTHH:mm"===ee()(s)._f&&(e[t]=ee()(s).format("YYYY-MM-DD HH:mm:ss"))}u({query:{product_code:n,partner_code:a},body:{...e,package_id:i}})}}))},children:(0,f.jsxs)(o.Row,{type:"flex",justify:"center",children:[(0,f.jsx)(o.Col,{span:22,children:g.map(((e,r)=>"reference_id"!==e?H.call(this,{form:s,formName:e,type:t[e],label:(0,c.Zr)(e),initialValue:t[e].prefill,required:!0,parentKey:(0,c.Zr)(e)}):H.call(this,{form:s,formName:e,type:t[e],label:(0,c.Zr)(e),initialValue:j,required:!0,parentKey:(0,c.Zr)(e)})))}),(0,f.jsx)(o.Col,{className:"submit__section",span:24,children:(0,f.jsx)(o.Button,{loading:x,type:"primary",htmlType:"submit",children:"Submit"})})]})})})})),se=te,re=l().div`
  .submit__section {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
`;const ae=o.Form.create()((function(e){const{data:t,form:s,refData:a,partner:n}=e,[{postEndorsementStatus:i},l]=function(){const[{postEndorsementData:e,postEndorsementStatus:t},s]=y(),[r]=(0,b.A)(s);return[{postEndorsementData:e,postEndorsementStatus:t},async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(h.postEndorsementAttributes(e))}]}(),[d]=_(),[{POST_ENDORSEMENT_LOADER:p}]=(0,Z.xv)();return(0,r.useEffect)((()=>{"success"===i&&(o.notification.success({message:"Test Endorsement Created"}),d(["postEndorsementStatus"])),"success"!==i&&void 0!==i&&(o.notification.error({message:i}),d(["postEndorsementStatus"]))}),[i,d]),(0,f.jsx)(re,{children:(0,f.jsx)(o.Form,{onSubmit:e=>{e.preventDefault(),s.validateFields(((e,t)=>{if(!e){t.year&&(t.year=t.year.toString());const e={...t};for(const t in e){const s=e[t];ee()(s).isValid()&&"YYYY-MM-DDTHH:mm"===ee()(s)._f&&(e[t]=ee()(s).format("YYYY-MM-DD HH:MM:SS"))}l({query:{ref:a,partner_code:n},body:e})}}))},children:(0,f.jsxs)(o.Row,{type:"flex",justify:"center",children:[(0,f.jsx)(o.Col,{span:22,children:Object.keys(t).map(((e,r)=>H.call(this,{form:s,formName:e,type:t[e],label:(0,c.Zr)(e),initialValue:"",required:!0,parentKey:(0,c.Zr)(e)})))}),(0,f.jsx)(o.Col,{className:"submit__section",span:24,children:(0,f.jsx)(o.Button,{loadin:p,type:"primary",htmlType:"submit",children:"Submit"})})]})})})})),ne=ae;var oe=s(88962);const{Panel:ie}=o.Collapse,le=l().div`
  margin-top: 40px;
  margin-bottom: 40px;
  .column__button_row {
    margin-bottom:20px;
  }
  .button_policy {
    float:right;
    background: cyan;
    color: #000;
  }
`;function de(e){let{partner:t,product:s,packageKey:a}=e;const[i,l]=(0,r.useState)(["1"]),[d,c]=(0,r.useState)({}),[p,u]=(0,r.useState)(""),[h,m]=(0,r.useState)({}),[{getProductPackageAttributesData:x,getProductPackageAttributesStatus:g}]=E(),[j]=_(),y=(0,oe.useHistory)();(0,r.useEffect)((()=>{if("success"===g){const e=(0,n.get)(x,"request",{}),t=(0,n.get)(x,"endorsement",{});c(e),m(t),j(["getProductPackageAttributesStatus"])}"success"!==g&&void 0!==g&&(o.notification.error({message:(0,n.get)(x,"message","")}),j(["getProductPackageAttributesStatus"]))}),[g,x,j]);return(0,f.jsx)(le,{children:(0,n.size)(d)>0&&(0,f.jsx)(o.Card,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"center",children:[p&&(0,f.jsx)(o.Col,{className:"column__button_row",span:22,children:(0,f.jsx)(o.Button,{className:"button_policy",onClick:()=>{y.push({pathname:`/policy/${p}`})},children:"Go to Policy Detail"})}),(0,f.jsx)(o.Col,{span:22,children:(0,f.jsxs)(o.Collapse,{activeKey:i,children:[(0,f.jsx)(ie,{header:"Policy",children:(0,f.jsx)(se,{data:d,partner:t,product:s,packageKey:a,refPicker:e=>{u(e),(0,n.size)(h)>0&&l(["1","2"])}})},"1"),(0,n.size)(h)>0&&(0,f.jsx)(ie,{header:"Endorsement",children:(0,f.jsx)(ne,{data:h,partner:t,product:s,refData:p})},"2")]})})]})})})}function ce(e){const[t,s]=(0,r.useState)(""),[a,i]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),p=(0,r.useRef)({isSetProduct:!1});(0,r.useEffect)((()=>{if(!p.current.isSetProduct){const t=(0,n.get)(e,"match.params.product",""),r=(0,n.get)(e,"match.params.partner","");t&&s(t),r&&i(r),p.current.isSetProduct=!0}}),[e]);return(0,f.jsx)(d,{children:(0,f.jsx)(j,{children:(0,f.jsxs)(o.Row,{type:"flex",justify:"center",children:[(0,f.jsx)(o.Col,{className:"button__back",span:22,children:(0,f.jsx)(o.Button,{onClick:()=>{e.history.goBack()},children:"Back"})}),(0,f.jsxs)(o.Col,{span:22,children:[(0,f.jsx)(P,{packageDataFunction:e=>{c(e)},product:t,partner:a}),(0,f.jsx)(de,{packageKey:l,product:t,partner:a})]})]})})})}},43232:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(95916),a=s(12864),n=s(3296),o=s(97418),i=s(79721),l=s(72152),d=s(2727);const c=function(e){const[,t]=(0,n.xv)(),[,s]=(0,a.WX)()||[{},()=>{}];return[async a=>{let{type:n,payload:c}=a;const{method:p}=c,u=n.replace(/_REQUEST/g,"");t({type:d.w.LOADER_UPDATE,payload:{[`${u}_LOADER`]:!0}});const h=i.A[p];let m={};try{m=await h({...c})}catch(x){m=x}e({type:`${u}`,payload:{[`${(0,r.camelCase)(u)}Data`]:m.data,[`${(0,r.camelCase)(u)}Status`]:[200,201].includes(m.status)?"success":(0,o.u1)(m.status,(0,r.get)(m,"data.error_code"),m.data)}}),200!==m.status&&s({type:l.f9.ERROR_UPDATE,payload:{[`${u}_ERROR`]:!0}}),t({type:d.w.LOADER_UPDATE,payload:{[`${u}_LOADER`]:!1}})}]}},79721:(e,t,s)=>{s.d(t,{A:()=>m});var r=s(17025),a=s(35891),n=s(45220),o=s(68472),i=s(88204),l=s.n(i),d=s(93807),c=s(97418),p=s(99978);const u=e=>{let{signedUrl:t="",query:s={},body:r={},params:a={},signedUrlBody:n={},customReturnData:o={}}=e;const i=(0,d.A)(s),u=`${(0,p.A)(t,a)}${i}`;return l().post(u,n,{headers:(0,c._b)()}).then((e=>{const{data:t}=e;return l().put(t.signed_url,r.file,{headers:{"Content-type":r.file.type}}).then((e=>{e.data={url:t.url};for(let t in o)e.data[t]=o[t];return e})).catch((e=>{e.data={};for(let t in o)e.data[t]=o[t];throw e}))})).catch((e=>{e.data={};for(let t in o)e.data[t]=o[t];throw e.response,e}))},h=e=>{let{signedUrl:t="",query:s={},body:r={},params:a={},signedUrlBody:n={}}=e;const o=(0,d.A)(s),i=`${(0,p.A)(t,a)}${o}`;return l().post(i,n,{headers:(0,c._b)()}).then((e=>{const{data:t}=e;return(0,c.A5)(t.signed_url),e})).catch((e=>{if(e.response)return e.response;throw e}))};({axiosInterceptorRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};l().interceptors.request.use((t=>{const s=e();return s?(t.params={...t.params,...s},t):t}),(e=>Promise.reject(e)))}}).axiosInterceptorRequest((function(){if(window.location.pathname.includes("agent/vn"))return{cc:"vn"}}));const m={authGet:r.A,authPost:a.A,authPut:n.A,uploadFile:o.A,uploadFileOnGcs:u,downloadFileFromGcs:h}},68472:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(88204),a=s.n(r),n=s(93807),o=s(97418),i=s(99978);const l=e=>{let{url:t="",uploadUrl:s="",signedUrl:r="",query:l={},body:d={},params:c={},signedUrlBody:p={},uploadBody:u={},customReturnData:h={},urlKey:m="document_url"}=e;const x=(0,n.A)(l),f=`${(0,i.A)(r,c)}${x}`,g=`${(0,i.A)(s,c)}`;return a().post(f,p,{headers:(0,o._b)()}).then((e=>{const{data:t}=e;return a().put(t.signed_url,d.file,{headers:{"Content-type":d.file.type}}).then((e=>a().post(g,{[m]:t.url,...u},{headers:(0,o._b)()}).then((e=>{for(const t in h)e.data[t]=h[t];return e})).catch((e=>{throw e.response?e.response:e})))).catch((e=>{throw e.response?e.response:e}))})).catch((e=>{throw e.response?e.response:e}))}}}]);
//# sourceMappingURL=7162.88dd7d66.chunk.js.map