"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1808],{66795:(e,d,t)=>{t.d(d,{$I:()=>g,Cy:()=>u,DO:()=>a,Ev:()=>c,Fu:()=>r,Im:()=>v,JU:()=>m,S1:()=>l,Z3:()=>p,uf:()=>s,yM:()=>n,yn:()=>h});var i=t(80878),o=t.n(i);const n=o().div`
  margin: 30px;
  .edit-heading {
    width: 100%;
    text-align: center;
  }
`,a=o().div`
  padding: 10px;
  background: #fff4cb;
  border: 2px solid #e5d597;
  width: 140px;
  font-weight: 900;
  margin-bottom: 15px;
  text-align: center;
  font-size: 17px;
  margin-top: -30px;
  border-radius: 5px;
`,l=o().div`
  text-align: right;
  .bold {
    font-weight: 900;
    font-size: 16px;
  }
`,r=o().div`
  display: flex;
  gap: 10px;
`,s=o().div`
  padding: 24px;
  border-radius: 4px;
  .header-wrapper {
    display: flex;
    gap: 8px;
  }
`,c=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,u=o().div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`,p=o().div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #f0f0f0;
`,v=o().div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
`,g=o().div`
  text-align: center;
  margin-top: 24px;
`,h=o().div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,m=o().label`
  display: block;
  margin-bottom: 4px;
`},61808:(e,d,t)=>{t.r(d),t.d(d,{default:()=>x});var i=t(88962),o=t(1502),n=t(67816),a=t(24952),l=t(25211),r=t(70579);const{Option:s}=n.Select,c=(0,a.connect)((e=>{var d,t;return{getFormulaAttributeData:null===(d=e.Policy)||void 0===d?void 0:d.getFormulaAttributeData,getFormulaAttributeMessage:null===(t=e.Policy)||void 0===t?void 0:t.getFormulaAttributeMessage}}),{getFormulaAttribute:l.A.getFormulaAttribute})((e=>{let{productCode:d,packageCode:t,value:i,onChange:a,getFormulaAttribute:l,getFormulaAttributeData:c,getFormulaAttributeMessage:u}=e;const[p,v]=(0,o.useState)([]);(0,o.useEffect)((()=>{d&&t&&l({productCode:d,packageCode:t,offset:0,limit:100})}),[d,t]),(0,o.useEffect)((()=>{if(u&&u.toLowerCase().includes("success")){const e=(null===c||void 0===c?void 0:c.data)||[],d=Array.isArray(e)?e.map((e=>({id:String(e.ID),variable:e.variable,attribute_name:e.product_attribute_name}))):[];v(d)}}),[c,u]);const g=void 0!==i&&null!==i?String(i):void 0,h=p.some((e=>e.id===g));return(0,r.jsx)(n.Select,{style:{width:"100%"},placeholder:"Select a Premium V2 variable",value:h?g:void 0,onChange:e=>a(void 0!==e?Number(e):void 0),allowClear:!0,children:p.map((e=>(0,r.jsxs)(s,{value:e.id,children:[e.variable," ",e.attribute_name?`(${e.attribute_name})`:""]},e.id)))})}));var u=t(66795);const p=e=>{let{tncs:d=[],onAdd:t,onRemove:i,onUpdateText:o,onUpdateTags:a}=e;return(0,r.jsxs)("div",{children:[d.map(((e,d)=>(0,r.jsxs)(u.Z3,{children:[(0,r.jsx)("div",{style:{flex:1},children:(0,r.jsx)(n.Input.TextArea,{value:e.text,onChange:e=>o(d,e.target.value),placeholder:"Enter terms and conditions",rows:2})}),(0,r.jsxs)(u.Im,{children:[(0,r.jsx)(n.Select,{mode:"tags",placeholder:"Add tags (press Enter or comma)",value:e.tags||[],onChange:e=>{const t=e.map((e=>e.trim())).filter(Boolean).filter(((e,d,t)=>t.indexOf(e)===d));a(d,t)},style:{width:"100%"},tokenSeparators:[","],dropdownStyle:{display:"none"},tagRender:e=>{const{label:d,closable:t,onClose:i}=e;return(0,r.jsxs)("span",{style:{backgroundColor:"#1890ff",color:"white",borderRadius:"12px",padding:"1px 8px",fontSize:"12px",marginRight:"4px",marginBottom:"4px",display:"inline-flex",alignItems:"center"},children:[d,t&&(0,r.jsx)("span",{style:{marginLeft:"4px",cursor:"pointer"},onClick:i,children:"\xd7"})]})}}),(0,r.jsx)(n.Button,{type:"danger",size:"small",onClick:()=>i(d),children:"Remove"})]})]},d))),(0,r.jsx)(n.Button,{type:"dashed",onClick:t,block:!0,children:"Add TnC Row"})]})},{Option:v}=n.Select,g=n.Form.create({name:"addon_form"})((e=>{let{form:d,editingRecord:t,onSave:i,onUpdate:a,onCancel:l,productCode:s,packageCode:g}=e;const{validateFields:h}=d,[m,x]=(0,o.useState)({code:(null===t||void 0===t?void 0:t.code)||"",name:(null===t||void 0===t?void 0:t.name)||"",auto_apply:(null===t||void 0===t?void 0:t.auto_apply)||!1,allow_zero_result:(null===t||void 0===t?void 0:t.allow_zero_result)||!1,is_active:null===t||void 0===t?void 0:t.is_active,include_in_premium:(null===t||void 0===t?void 0:t.include_in_premium)||!1,show_in_breakdown:(null===t||void 0===t?void 0:t.show_in_breakdown)||!1,formula_attribute_id:(null===t||void 0===t?void 0:t.formula_attribute_id)||void 0}),[f,_]=(0,o.useState)((null===t||void 0===t?void 0:t.wordings)||[]),[A,C]=(0,o.useState)({}),y=(e,d)=>{x((t=>({...t,[e]:d}))),A[e]&&C((d=>{const t={...d};return delete t[e],t}))};return(0,o.useEffect)((()=>{null!==t&&void 0!==t&&t.id&&(x({code:(null===t||void 0===t?void 0:t.code)||"",name:(null===t||void 0===t?void 0:t.name)||"",auto_apply:(null===t||void 0===t?void 0:t.auto_apply)||!1,allow_zero_result:(null===t||void 0===t?void 0:t.allow_zero_result)||!1,is_active:null===t||void 0===t?void 0:t.is_active,include_in_premium:(null===t||void 0===t?void 0:t.include_in_premium)||!1,show_in_breakdown:(null===t||void 0===t?void 0:t.show_in_breakdown)||!1,formula_attribute_id:(null===t||void 0===t?void 0:t.formula_attribute_id)||void 0}),_(null===t||void 0===t?void 0:t.wordings))}),[t]),(0,r.jsx)(n.Form,{onSubmit:e=>{e.preventDefault(),h((async e=>{if(e)return void console.error("Validation failed",e);if(!(()=>{const e={};return m.code||(e.code="Code is required"),m.name&&m.name.trim()||(e.name="Name is required"),m.formula_attribute_id||(e.formula_attribute_id="Premium V2 term is required"),C(e),0===Object.keys(e).length})())return;const d={...m,wordings:[...f],...(null===t||void 0===t?void 0:t.code)&&{key:t.key,no:t.no}};null!==t&&void 0!==t&&t.code?a(d):i(d)}))},layout:"vertical",children:(0,r.jsxs)(u.uf,{children:[(0,r.jsxs)("div",{className:"header-wrapper",children:[(0,r.jsxs)(n.Button,{onClick:l,style:{marginRight:8},children:[(0,r.jsx)(n.Icon,{type:"arrow-left"})," Back"]}),(0,r.jsxs)("h2",{children:[null!==t&&void 0!==t&&t.code?"Edit":"Add New"," Add-On"]})]}),(0,r.jsxs)(n.Collapse,{defaultActiveKey:["addon","tnc","premium"],style:{marginBottom:24},children:[(0,r.jsx)(n.Collapse.Panel,{header:"Add-On Data",children:(0,r.jsxs)(u.Ev,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Code *"}),(0,r.jsx)(n.Input,{value:m.code,onChange:e=>y("code",e.target.value),placeholder:"Enter Code",disabled:null===t||void 0===t?void 0:t.code}),A.code&&(0,r.jsx)(u.yn,{children:A.code})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Name *"}),(0,r.jsx)(n.Input,{value:m.name,onChange:e=>y("name",e.target.value),placeholder:"Enter name"}),A.name&&(0,r.jsx)(u.yn,{children:A.name})]}),(0,r.jsxs)(u.Cy,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Auto Apply"}),(0,r.jsx)(n.Switch,{checked:m.auto_apply,onChange:e=>y("auto_apply",e),checkedChildren:"Yes",unCheckedChildren:"No"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Allow Zero Result"}),(0,r.jsx)(n.Switch,{checked:m.allow_zero_result,onChange:e=>y("allow_zero_result",e),checkedChildren:"Yes",unCheckedChildren:"No"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Include in Premium"}),(0,r.jsx)(n.Switch,{checked:m.include_in_premium,onChange:e=>y("include_in_premium",e),checkedChildren:"Yes",unCheckedChildren:"No"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Show in Breakdown"}),(0,r.jsx)(n.Switch,{checked:m.show_in_breakdown,onChange:e=>y("show_in_breakdown",e),checkedChildren:"Yes",unCheckedChildren:"No"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JU,{children:"Status"}),(0,r.jsxs)(n.Select,{style:{width:"100%"},value:m.is_active,onChange:e=>y("is_active",e),children:[(0,r.jsx)(v,{value:!0,children:"Active"}),(0,r.jsx)(v,{value:!1,children:"Inactive"})]})]})]})},"addon"),(0,r.jsx)(n.Collapse.Panel,{header:"Add-On TnC",children:(0,r.jsx)(p,{tncs:f,onAdd:()=>{_([...f,{text:"",tags:[]}])},onRemove:e=>{_(f.filter(((d,t)=>t!==e)))},onUpdateText:(e,d)=>{const t=[...f];t[e].text=d,_(t)},onUpdateTags:(e,d)=>((e,d)=>{const t=[...f];t[e].tags=d,_(t)})(e,d)})},"tnc"),(0,r.jsxs)(n.Collapse.Panel,{header:"Premium",children:[(0,r.jsx)(c,{productCode:s,packageCode:g,value:m.formula_attribute_id,onChange:e=>y("formula_attribute_id",e)}),A.formula_attribute_id&&(0,r.jsx)(u.yn,{children:A.formula_attribute_id})]},"premium")]}),(0,r.jsxs)(u.$I,{children:[(0,r.jsx)(n.Button,{onClick:l,style:{marginRight:8},children:"Cancel"}),(0,r.jsx)(n.Button,{type:"primary",htmlType:"submit",children:t?"Update":"Save"})]})]})})}));var h=t(88415),m=t(77980);const x=(0,a.connect)((e=>{var d,t,i,o,n,a;return{createAddonData:(null===(d=e.ProductConfigurable)||void 0===d?void 0:d.createAddonData)||[],createAddonMessage:null===(t=e.ProductConfigurable)||void 0===t?void 0:t.createAddonMessage,detailsAddonData:(null===(i=e.ProductConfigurable)||void 0===i?void 0:i.getDetailAddonsData)||[],detailsAddonMessage:null===(o=e.ProductConfigurable)||void 0===o?void 0:o.getDetailAddonsMessage,editAddonData:(null===(n=e.ProductConfigurable)||void 0===n?void 0:n.editAddonData)||[],editAddonMessage:null===(a=e.ProductConfigurable)||void 0===a?void 0:a.editAddonMessage}}),(e=>({createAddonActions:d=>e({type:h.A.CREATE_ADDON_REQUEST,payload:d}),getDetailsAddonData:d=>e({type:h.A.GET_DETAILS_ADDON_REQUEST,payload:d}),editAddonActions:d=>e({type:h.A.EDIT_ADDON_REQUEST,payload:d}),resetProductConfigRedux:d=>e({type:h.A.RESET_PRODUCT_CONFIG,payload:d})})))((e=>{const d=(0,i.useHistory)(),t=(0,i.useLocation)(),{id:n}=(0,i.useParams)(),{config_reference_id:a,product_code:l,package_code:s}=t.state||{},[c,u]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(e.createAddonMessage)if("successful"===e.createAddonMessage)(0,m.D)("success","Success","Add-on created successfully!"),e.resetProductConfigRedux(["createAddonMessage"]),setTimeout((()=>{d.goBack()}),500);else{const d=e.createAddonMessage.message||"Failed to create add-on";(0,m.D)("error","Error",d)}}),[e.createAddonMessage,d]),(0,o.useEffect)((()=>{e.editAddonMessage&&"success"===e.editAddonMessage&&((0,m.D)("success","Success","Add-on updated successfully!"),e.resetProductConfigRedux(["editAddonMessage"]),e.getDetailsAddonData({query:{id:n}}))}),[e.editAddonMessage,d]),(0,o.useEffect)((()=>{a||((0,m.D)("warning","Invalid Navigation","Missing configuration reference"),d.push("/product-config"))}),[a,d]),(0,o.useEffect)((()=>{n&&e.getDetailsAddonData({query:{id:n}})}),[n]),(0,o.useEffect)((()=>{var d,t,i;(null===e||void 0===e||null===(d=e.detailsAddonData)||void 0===d||null===(t=d.details)||void 0===t||null===(i=t.details)||void 0===i?void 0:i.length)>0&&u(e.detailsAddonData.details.details[0])}),[e.detailsAddonData]),(0,r.jsx)(g,{editingRecord:c,onSave:d=>{a?e.createAddonActions({body:d,query:{addon_map_id:a}}):(0,m.D)("error","Configuration Error","Missing config reference ID")},onUpdate:d=>{e.editAddonActions({body:d,query:{id:n,addon_map_id:a}})},onCancel:()=>{d.goBack()},productCode:l,packageCode:s})}))},77980:(e,d,t)=>{t.d(d,{D:()=>o});var i=t(67816);const o=function(e,d){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i.notification[e]({message:d,description:t||""})}}}]);
//# sourceMappingURL=1808.0916924a.chunk.js.map