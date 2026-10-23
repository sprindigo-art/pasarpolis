"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[976],{72717:(e,t,a)=>{a.d(t,{Ew:()=>s,Qv:()=>r,aF:()=>o});a(96760);const s=["passenger-insurance","driver-insurance"],o=[{display:"Rp 5.000.000",value:5e6},{display:"Rp 10.000.000",value:1e7},{display:"Rp 15.000.000",value:15e6},{display:"Rp 20.000.000",value:2e7},{display:"Rp 25.000.000",value:25e6},{display:"Rp 30.000.000",value:3e7},{display:"Rp 35.000.000",value:35e6},{display:"Rp 40.000.000",value:4e7},{display:"Rp 45.000.000",value:45e6},{display:"Rp 50.000.000",value:5e7}],r=["document_received","document_verified","document_complete","document_approved_by_pp","document_rejected_by_pp","salvage_pending","salvage_dispatched","salvage_received","salvage_verified","internal_action_from_pasarpolis_pending","internal_action_from_pasarpolis_complete","claim_pending_from_provider","claim_pending_from_pasarpolis","claim_accepted","claim_payment_pending","claim_payment_triggered","claim_payment_failed","claim_accepted_by_pasarpolis","pending_payment_on_pasarpolis","pending_on_tez"]},70976:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var s=a(63685),o=a(69732),r=a(67816),n=a(1502),i=a(94528),c=a(77980),l=a(80878),d=a.n(l);const u=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-reupload-btn {
    text-align: center;
    border: 1px solid ${e=>e.theme.borderGrey};
    background-color: ${e=>e.theme.placeholder};
    border-bottom: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 6px 7px;
    margin-top: 10px;
  }
`,p=d().div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;var m=a(996),h=a.n(m),_=a(96990);const y=d().div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  border: 1px solid ${e=>e.theme.borderGrey};

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .offline-pdf-upload-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 100%;
    padding: 1px 0;
  }

  .img-name {
    position: absolute;
    bottom: 0;
    background-color: ${e=>e.theme.lightGrey};
    color: ${e=>e.theme.black};
    font-weight: 800;
    width: 100%;
    text-align: center;
    padding: 1px 0;
    font-size: 10px;
  }

  .remove-img {
    position: absolute;
    top: -14px;
    right: -10px;
    font-size: 18px;
    cursor: pointer;

    .close-circle-icon {
      color: ${e=>e.theme.errorColor};
    }
  }

  .text-center {
    text-align: center;
  }
`;var x=a(83772),g=a(93380);var f=a(95024),b=a(70579);const v=function(e){let{img:t,name:a,isNew:s,onSave:l,onRemove:d,fileType:u,disabled:p=!1,isFileUploading:m}=e;const[h,_]=(0,n.useState)(t),v=(0,n.useCallback)(((e,t)=>{_(e),l(e,t.type)}),[l]),{customRequest:C,UPLOAD_FILE_LOADER:j}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.bz;const[{uploadFileData:a},s]=(0,g.fU)(),[{UPLOAD_FILE_LOADER:r}]=(0,o.useLoaderContextValue)(),[{uploadFileStatus:i},l]=(0,o.useErrorContextValue)(),d=(0,n.useRef)({type:"",id:""}),u=(0,n.useCallback)(((e,a,o)=>{let{file:r}=e;const n=new FormData,i=`${r.name.split(".")[0].trim()}-${Date.parse(new Date)}`;n.append("file",r),n.append("path",`${t}/${i}`),n.append("identifier","agent"),d.current.type=a,d.current.id=o,s({body:n})}),[s,t]);return(0,n.useEffect)((()=>{function t(e){l((0,o.resetError)({[e]:void 0}))}"success"===i&&d.current.type?(e(a.url,{...d.current}),t("uploadFileStatus"),d.current.type=""):i&&d.current.type&&((0,c.D)("error",i),t("uploadFileStatus"))}),[e,a,i,l]),{customRequest:u,UPLOAD_FILE_LOADER:r}}(v),k=(0,n.useCallback)((e=>{e.stopPropagation(),d()}),[d]);return(0,n.useEffect)((()=>{m&&m(j)}),[j,m]),(0,b.jsx)(r.Upload,{name:a||"file",id:a,multiple:!1,showUploadList:!1,accept:u||".png,.jpg,.jpeg",customRequest:e=>{C(e,a)},value:h,data:h,disabled:p,children:(0,b.jsx)(i.A,{isSpining:j,children:(0,b.jsxs)(y,{children:[!s&&d&&!p&&(0,b.jsx)("div",{className:"remove-img",onClick:k,children:(0,b.jsx)(r.Icon,{type:"close-circle",className:"close-circle-icon"})}),s?(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)(r.Icon,{type:"upload"}),(0,b.jsx)("div",{children:"Click to upload"})]}):"pdf"===(0,f.A)(h)?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"offline-pdf-upload-wrapper"}),(0,b.jsx)("object",{type:"application/pdf",data:h,width:"100%",height:"100%","aria-label":a})]}):(0,b.jsx)("img",{src:h,alt:""}),!s&&(0,b.jsx)("span",{className:"img-name",children:a})]})})})},C=d().div`
  .ant-form-item-label {
    line-height: 4px;
  }

  .ant-form-item {
    margin-bottom: 16px;
  }

  .accessory-container {
    border: 1px solid ${e=>e.theme.lightGrey};
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 20px;
    position: relative;
  }

  .accessory-close-icon {
    position: absolute;
    right: -6px;
    top: -9px;
    font-size: 20px;
    color: ${e=>e.theme.errorColor};
  }

  .display-none {
    display: none;
  }
`;const j=r.Form.create()((function(e){let{show:t,onClose:a,form:s,accessory:o,editIndex:i,isAddNew:c,onSave:l=()=>{}}=e;const d=(0,n.useRef)(c?0:1),[u,p]=(0,n.useState)(Object.keys(o).length?[{...o,accessoryKey:d.current}]:[{accessoryKey:d.current}]),m=(0,n.useRef)(!1);(0,n.useEffect)((()=>{!m.current&&o.img&&(m.current=!0,s.setFieldsValue({[`accessory_photo${d.current}`]:o.img}))}),[o,s]);const h=(0,n.useCallback)((()=>{s.validateFields(((e,t)=>{if(e)return;const a=u.map((e=>{const a=e.accessoryKey;return{accessory_type:t[`accessory_type${a}`],name:t[`name${a}`],sum_insured:t[`sum_insured${a}`],img:t[`accessory_photo${a}`]}}));l(a,i)}))}),[s,l,i,u]),y=(0,n.useCallback)(((e,t)=>{let{name:a,title:o,error:n,defaultValue:i}=e;return(0,b.jsx)(r.Form.Item,{label:o,children:s.getFieldDecorator(a,{rules:[{required:!0,message:n||`Please enter ${o}`}],initialValue:i})(t)})}),[s]),x=(0,n.useCallback)(((e,t,a)=>{p((a=>(a[t].img=e,[...a]))),s.setFieldsValue({[a]:e})}),[s]),g=(0,n.useCallback)((e=>{p((t=>(t.splice(e,1),[...t])))}),[]),f=(0,n.useCallback)(((e,t)=>(0,b.jsxs)(r.Row,{type:"flex",className:"accessory-container",children:[!!t&&(0,b.jsx)(r.Icon,{onClick:()=>g(t),type:"close-circle",className:"accessory-close-icon"}),(0,b.jsx)(r.Col,{sm:8,md:8,children:(0,b.jsx)(r.Form.Item,{label:"Accessory Photo",children:s.getFieldDecorator(`accessory_photo${e.accessoryKey}`,{rules:[{required:!0,message:"Please Enter the Accessory Photo"}],value:e.img})((0,b.jsx)(v,{onSave:a=>x(a,t,`accessory_photo${e.accessoryKey}`),name:`accessory_photo${e.accessoryKey}`,title:"Accessory Photo",img:e.img,fileType:".png,.jpg,.jpeg"}))})}),(0,b.jsxs)(r.Col,{xl:16,md:16,children:[y({name:`accessory_type${e.accessoryKey}`,title:"Accessory Type",defaultValue:e.accessory_type,error:"Please Enter the Accessory Type"},(0,b.jsxs)(r.Radio.Group,{children:[(0,b.jsx)(r.Radio,{value:"standard",children:"Standar"}),(0,b.jsx)(r.Radio,{value:"non-standard",children:"Non Standar"})]})),y({name:`name${e.accessoryKey}`,title:"Accessory Name",defaultValue:e.name,error:"Please Enter the Accessory Name"},(0,b.jsx)(r.Input,{type:"text",placeholder:"Please enter the address"})),y({name:`sum_insured${e.accessoryKey}`,title:"Accessory Price",defaultValue:e.sum_insured,error:"Please Enter the Accessory Price"},(0,b.jsx)(_.h,{type:"number",placeholder:"Please enter the Accessory Price"}))]})]},`accessories-${e.accessoryKey}`)),[s,y,x,g]),j=(0,n.useCallback)((()=>{p((e=>{const t=[...e,{accessoryKey:d.current+1}];return d.current+=1,t}))}),[]);return(0,b.jsx)(r.Modal,{visible:t,onCancel:a,onOk:h,title:"Add Accessory",children:(0,b.jsx)(r.Form,{noValidate:!0,children:(0,b.jsxs)(C,{children:[u.map(((e,t)=>f(e,t))),c&&(0,b.jsx)(r.Row,{type:"flex",align:"middle",justify:"center",children:(0,b.jsx)(r.Col,{children:(0,b.jsx)(r.Button,{type:"primary",onClick:j,children:"Add More"})})})]})})})}));var k=a(8634);const A=function(e){let{defaultAccessories:t,onSaveAccessory:a,isEdit:s,isDelete:o,notCalledStoreEffect:i}=e;const[c,l]=(0,n.useState)(t),[d,m]=(0,n.useState)({show:!1,accessory:{}});(0,n.useEffect)((()=>{t&&!i&&a({accessories:t})}),[t,a,i]);const _=(0,n.useCallback)((e=>{l((t=>(t.splice(e,1),a({accessories:t}),[...t])))}),[a]),y=(0,n.useCallback)((e=>{r.Modal.confirm({content:"Are you sure, you want to delete this accessory?",okText:"Yes",cancelText:"No",onOk:()=>_(e)})}),[_]),x=(0,n.useCallback)(((e,t)=>{m({show:!0,accessory:e,index:`${t}`})}),[]),g=(0,n.useCallback)((e=>{m({show:!1,accessory:{}})}),[]),f=(0,n.useCallback)(((e,t)=>{let s=[...c];t?s[parseInt(t)]=e[0]:s=[...c,...e],l(s),a({accessories:s}),g()}),[a,g,c]),v=(0,n.useMemo)((()=>[{title:"Photo",dataIndex:"img",width:300,render:e=>(0,b.jsx)(u,{children:e?(0,b.jsx)(h(),{className:"object-image",small:e,large:e}):"NA"})},{title:"Accessories Name",dataIndex:"name"},{title:"Accessories Type",dataIndex:"accessory_type"},{title:"Pricing",dataIndex:"sum_insured"},{title:"Action",align:"center",render:(e,t,a)=>(0,b.jsxs)(p,{children:[(0,b.jsx)(r.Icon,{type:"edit",onClick:()=>x(e,a)}),o&&(0,b.jsx)(r.Icon,{type:"delete",onClick:()=>y(a)})]})}]),[x,o,y]),C=(0,n.useCallback)((()=>{m({show:!0,accessory:{},isNewAccessory:!0})}),[]);return(0,b.jsxs)(k.A,{marginBtm:"20px",borderRadius:"8px",children:[(0,b.jsxs)(r.Row,{type:"flex",justify:"space-between",align:"center",children:[(0,b.jsx)(r.Col,{children:(0,b.jsx)("h3",{className:"policy-title",children:"Additional Accessories"})}),s&&(0,b.jsx)(r.Col,{children:(0,b.jsx)(r.Icon,{type:"edit",onClick:C})})]}),(0,b.jsx)(r.Table,{pagination:{pageSize:100},columns:v,dataSource:c,bordered:!0}),d.show&&(0,b.jsx)(j,{show:d.show,accessory:d.accessory,onSave:f,onClose:g,editIndex:d.index,isAddNew:d.isNewAccessory})]})},E=d().div`
  border-radius: 8px;
  padding: 35px;
  border: 1px solid ${e=>e.theme.lightGrey};

  .addon-category-title {
    font-size: 14px;
    color: ${e=>e.theme.black};
    margin-top: 16px;
  }
`,w=d().div`
  .card-margin-btm {
    margin-bottom: 14px;

    .ant-form-item {
      margin-bottom: 0;
    }
  }

  .checkbox-label {
    display: block;
    margin-left: 8px;
    margin-bottom: 6px;
    padding: 10px 0;
  }

  .custom-addons-container {
    border: 1px solid ${e=>e.theme.borderGrey};
    padding: 12px 12px 16px;
    position: relative;
    margin-bottom: 20px;
  }

  .addons-select {
    width: 250px;
  }

  .remove-img {
    position: absolute;
    top: -14px;
    right: -10px;
    font-size: 18px;
    cursor: pointer;

    .close-circle-icon {
      color: ${e=>e.theme.errorColor};
    }
  }

  .addon-checkbox-group {
    width: 100%;
  }

  .addons-limit-select {
    margin-left: 20px;
    margin-bottom: 16px;
  }

  .quantity-add {
    width: 80px;
  }

  .addon-premium {
    font-size: 12px;
    padding-left: 26px;
  }
`,S=e=>{var t,a;const s=e.request||{};return"car-protection"===(null===e||void 0===e||null===(t=e.provider_package)||void 0===t||null===(a=t.package)||void 0===a?void 0:a.product.code)?{purchase_type:s.purchase_type,package_type:s.package_type,vehicle_type:s.vehicle_type,brand:s.brand,variant:s.variant,variant_code:s.variant_code,additional_sum_insured:s.additional_sum_insured,year:s.year,model:s.model,region_code:s.region_code,vehicle_sum_insured:s.vehicle_sum_insured,vehicle_plate_no:s.vehicle_plate_no,usage:s.usage,start_date:s.start_date,accessories:s.accessories}:{occupation_code:s.occupation_code,province_code:s.province_code,sum_insured:s.sum_insured,zone:s.zone}};var D=a(97418);const I=d().div`
  
`;var P=a(72717);const R=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;
  width: 120px;

  .quantity-text {
    font-size: 12px;
    color: ${e=>e.theme.fontSemiGrey};
    padding-bottom: 4px;
    margin: 0 4px;
    flex: 1;
    text-align: center;
    border-bottom: 1px solid ${e=>e.theme.fontSemiGrey};
  }
`,N=d().div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  font-size: 9px;
  align-items: center;
  background-color: ${e=>e.disabled?e.theme.fontSemiGrey:e.theme.primary};
`;class F extends n.Component{constructor(){super(...arguments),this.handleAddSub=e=>{const{quantity:t=0,min:a,max:s,onUpdateQty:o}=this.props,r=t+e;return!(r<a)&&(r>s||void o(r))}}render(){const{quantity:e=0,min:t,max:a,className:s}=this.props;return(0,b.jsxs)(R,{className:s,children:[(0,b.jsx)(N,{disabled:e===t,onClick:e=>this.handleAddSub(-1),children:(0,b.jsx)("i",{className:"fas fa-minus"})}),(0,b.jsx)("div",{className:"quantity-text",children:e}),(0,b.jsx)(N,{disabled:e===a,onClick:e=>this.handleAddSub(1),children:(0,b.jsx)("i",{className:"fas fa-plus"})})]})}}const $=F;const T=function(e){let{addon:t,selectedAddon:a={},onSelectAddon:s,onPremiumCalculation:o,hidePremium:i=!1}=e;const c=(0,n.useRef)({}),[l,d]=(0,n.useState)(a.no_passenger||1),u=(0,n.useCallback)((e=>(c.current.initialPremium=e?e*t.percentage:0,i&&(c.current.initialPremium=e),c.current.initialPremium)),[t,i]),p=(0,n.useMemo)((()=>{const{show_drop_down:e,premium:s}=t;let o=e?15e6:0,r=a.premium||s;return P.Ew.includes(t.add_on_code)&&(o=25e6),c.current.isQtyAddon="passenger-insurance"===t.add_on_code,!s&&r?o=a.limit||o:!s&&e&&(r=u(o)),{defaultSelect:o,addedPremium:r}}),[t,a,u]),m=(0,n.useCallback)(((e,t)=>{if(e.target.checked){let e=15e6;P.Ew.includes(t.add_on_code)&&(e=25e6),t.show_drop_down||(e=0);let a=0;t.premium?a=t.premium:"p_calc"!==t.calc_method&&(a=u(e)),s({...t,premium:a,limit:e},"add"),"p_calc"===t.calc_method&&o({...t,value:e})}else d(1),s({...t},"remove")}),[o,s,u]),h=(0,n.useCallback)(((e,t)=>{let a=0;"p_calc"===t.calc_method?o({...t,value:e}):a=u(e),s({...t,limit:e,premium:a},"add")}),[s,o,u]),_=(0,n.useCallback)((e=>{if(a.add_on_code){const t=a.no_passenger||1;d(e),s({...a,premium:a.premium*e/t,no_passenger:e},"add")}}),[d,a,s]);return(0,b.jsxs)(I,{children:[(0,b.jsxs)(r.Checkbox,{value:t.add_on_code,className:"checkbox-label",onChange:e=>m(e,t),children:[(0,b.jsx)("span",{children:t.add_on_name}),(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:"addon-premium",children:(0,D.up)(p.addedPremium,0,"Mulai dari Rp ")})]},t.add_on_code),t.show_drop_down&&(0,b.jsxs)(r.Row,{className:"addons-limit-select",type:"flex",align:"middle",justify:"space-between",children:[(0,b.jsx)(r.Col,{xl:15,children:(0,b.jsx)(r.Select,{onChange:e=>h(e,t),value:a.limit,className:"addons-select",children:P.aF.map((e=>(0,b.jsx)(r.Select.Option,{value:e.value,children:e.display},`${t.add_on_code}_${e.value}`)))})}),"passenger-insurance"===t.add_on_code&&(0,b.jsx)(r.Col,{xl:5,children:(0,b.jsx)($,{min:1,max:7,onUpdateQty:_,quantity:a.no_passenger||l,className:"quantity-add"})})]})]})};const O=r.Form.create()((function(e){let{policy:t,show:a,onClose:s,onSave:c,loader:l,form:d,defaultAddons:u={}}=e;const[p,m]=(0,n.useState)({}),[h,_]=(0,n.useState)({}),[{getAddonsData:y},x]=(0,g.XM)(),[{getAddonsPremiumData:f},v]=(0,g.cT)(),[{getAddonsStatus:C,getAddonsPremiumStatus:j}]=(0,o.useErrorContextValue)(),[{GET_ADDONS_LOADER:k,GET_ADDONS_PREMIUM_LOADER:A}]=(0,o.useLoaderContextValue)(),{resetError:E}=(0,o.useResetError)(),D=(0,g.Xg)(),I=(0,n.useRef)();(0,n.useEffect)((()=>{x({productCode:t.provider_package.code,body:{...S(t)}})}),[x,t]);const P=(0,n.useCallback)((e=>{_((t=>(t[e.add_on_code]={...e},{...t})))}),[]),R=(0,n.useCallback)((e=>{var a,s,o,r;v({body:{addon_code:e.add_on_code,addon_count:1,sum_insured:e.value,code:null===t||void 0===t||null===(a=t.provider_package)||void 0===a||null===(s=a.package)||void 0===s?void 0:s.product.code,usage:t.request.usage,variant_code:t.request.variant_code,vehicle_type:t.request.vehicle_type,year:t.request.year,package_type:t.request.package_type},productCode:null===t||void 0===t||null===(o=t.provider_package)||void 0===o||null===(r=o.package)||void 0===r?void 0:r.product.code})}),[t,v]);(0,n.useEffect)((()=>{if("success"===C){const e={};u.forEach((t=>{e[t.category_code]={...e[t.category_code],[t.add_on_code]:t}}));const t={};let a={};y.forEach((s=>{const o=e[s.category_code];o&&(t[s.category_code]=Object.keys(o),a={...a,...o})})),m({...t}),_(a),E(["getAddonsStatus"])}"success"===j&&f&&I.current&&(I.current.premium=f.premium,P(I.current),I.current=void 0,E(["getAddonsPremiumStatus"]),D({getAddonsPremiumData:void 0}))}),[C,E,u.addons,y,j,f,D,u,P]);const N=(0,n.useCallback)((()=>{c(Object.values(h))}),[c,h]),F=(0,n.useCallback)(((e,t)=>{I.current=e,"add"===t&&"p_calc"!==e.calc_method?(P(e),I.current=void 0):"remove"===t&&_((t=>(delete t[e.add_on_code],{...t})))}),[P]),$=(0,n.useCallback)(((e,t)=>{const{getFieldDecorator:a}=d,s=e.map(((e,a)=>(0,b.jsx)(T,{addon:e,selectedAddon:h[e.add_on_code]||{},onSelectAddon:(e,a)=>F({...e,category_code:t},a),onPremiumCalculation:R},e.add_on_code)));return(0,b.jsx)(r.Form.Item,{children:a(t,{initialValue:p[t]||[]})((0,b.jsx)(r.Checkbox.Group,{className:"addon-checkbox-group",children:s},t))})}),[d,p,h,F,R]),O=(0,n.useCallback)((()=>{const e=[];return y.forEach((t=>{const a=(0,b.jsx)(r.Card,{title:t.category_name,bordered:!0,className:"card-margin-btm",children:$(t.add_on,t.category_code)},t.category_code);e.push(a)})),e}),[y,$]);return(0,b.jsx)(r.Modal,{visible:a,okText:"Save",onCancel:s,onOk:N,title:"Edit Addons",okButtonProps:{loading:l},children:(0,b.jsx)(i.A,{isSpining:k||A||l,children:(0,b.jsx)(w,{children:(0,b.jsx)(r.Form,{noValidate:!0,children:y&&O()})})})})}));var L=a(2632);const V=function(e){let{title:t="Addons Details",defaultAddons:a,onSaveAddonsData:s,isHideEditAction:o,policy:i}=e;const[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)([...(0,L.A)(a)]);(0,n.useEffect)((()=>{s(a)}),[s,a]);const p=(0,n.useMemo)((()=>[{title:"Addon Name",dataIndex:"add_on_name"},{title:"Addon Premium",dataIndex:"premium",render:(e,t)=>(0,D.up)(e,0)}]),[]),m=(0,n.useCallback)((()=>{l(!0)}),[]),h=(0,n.useCallback)((()=>{l(!1)}),[]),_=(0,n.useCallback)((e=>{l(!1),u(e),s(e)}),[s]);return(0,b.jsxs)(E,{children:[(0,b.jsxs)(r.Row,{type:"flex",justify:"space-between",align:"center",children:[(0,b.jsx)(r.Col,{children:(0,b.jsx)("h3",{className:"policy-title",children:t||"Addons Details"})}),!o&&(0,b.jsx)(r.Col,{children:(0,b.jsx)(r.Icon,{type:"edit",onClick:m})})]}),(0,b.jsx)(r.Table,{pagination:{pageSize:100},columns:p,dataSource:d,bordered:!0}),c&&(0,b.jsx)(O,{show:c,onClose:h,defaultAddons:d,policy:i,productCode:"car-protection",onSave:_})]})};var q=a(59823),M=a(84487),U=a(6446),z=a(86178),G=a.n(z);const B=d().div`
  border-radius: 8px;
  padding: 35px;
  border: 1px solid ${e=>e.theme.lightGrey};
  margin-bottom: 20px;

  .number-format {
    flex: 1;
    width: 100%;

    .ant-input-number-handler-wrap {
      display: none !important;
    }
  }

  .ant-select {
    width: 100%;
  }
`;var K=a(17135),Q=a(95916);const X=function(e){let{title:t,customerInfoForm:a,form:s,policyId:c,showReview:l,colSpan:d,onChange:u=()=>{}}=e;const[{runtimeUpdateFormData:p},m]=(0,M.T2)(),[h,_]=(0,n.useState)([...a]),[,y]=(0,g.fU)(),[{validatePostalCodeData:f},v]=(0,M.a)(),[C]=(0,o.useErrorContextValue)(),[{RUNTIME_UPDATE_FORM_LOADER:j,VALIDATE_POSTAL_CODE_LOADER:k}]=(0,o.useLoaderContextValue)(),{resetError:A}=(0,o.useResetError)();(0,n.useEffect)((()=>{const{runtimeUpdateFormStatus:e,validatePostalCodeStatus:t}=C;if("success"===e){const{target_key:e,target_value:t,target_attribute:o}=p,r=(0,Q.findIndex)(a,{data_key:e});"data"===o&&s.setFieldsValue({[e]:""}),r&&_((e=>(e[r]={...e[r],[o]:t},[...e]))),A(["runtimeUpdateFormStatus"])}"success"===t&&(f.success||s.setFields({postal_code:{errors:[new Error("Postal code is invalid!")]}}),A(["validatePostalCodeStatus"]))}),[C,p,a,A,s,f]);const E=(0,n.useCallback)((e=>{let{name:t,value:a,runtimeRequestParams:o,handler:r=""}=e;if(!a||!a.trim())return;const n={};let i=!1;o.forEach((e=>{let a=s.getFieldValue(e);e===t||a&&a.trim()?(isNaN(a)||(a=Number(parseFloat(a))),n[e]=a):i=!0})),i||(isNaN(a)?n[t]=a:n[t]=Number(parseFloat(a)),n.handler=r||t,m({body:{...n},policyId:c}))}),[m,c,s]),w=(0,n.useCallback)(((e,t)=>("postal_code"===t&&5===`${e}`.length&&v({body:{postal_code:e}}),e)),[v]),S=(0,n.useCallback)(((e,t)=>{switch(t){case"request_date":case"submission_date":case"receive_date":return e>G()().endOf("day")}}),[]),D=(0,n.useCallback)(((e,t)=>{let{file:a}=e;const s=new FormData;if(a.name){const e=a.name.split(".")[0];s.append("file",a),s.append("path",`${x.bz}/${e}_${Date.parse(new Date)}`),s.append("identifier","agent"),y({body:s})}}),[y]),I=(0,n.useCallback)((()=>!1),[]),P=(0,n.useCallback)(((e,t)=>{const a=e.size/1024/1024<=10;return a||r.message.error("file must smaller than 10MB!"),a}),[]),R=(0,n.useCallback)(((e,t)=>{u(e,t)}),[u]),N=(0,n.useCallback)((()=>(0,b.jsx)(r.Row,{type:"flex",justify:"space-between",children:h.map(((e,t)=>(0,b.jsx)(r.Col,{span:d||11,children:(0,K.A)({name:e.data_key,title:e.title,subTitle:e.sub_title,fileData:e.file_data,disabled:l||I(e.data_key),type:e.type,defaultValue:e.default_value,isEnableType:!1,runtimeRequestParams:e.runtime_request_params,data:e.data,dataType:e.data_type,getFieldDecorator:s.getFieldDecorator,getFieldValue:s.getFieldValue,defaultRadioValue:e.default_radio_button,handleRuntimeParams:E,handleInputChange:w,handleDisabledDate:S,customRequest:D,isKeyDisabled:I,beforeUpload:P,handleChangeMultiFormData:R})},t)))})),[h,s,d,l,P,I,D,R,w,E,S]);return(0,b.jsx)(B,{children:(0,b.jsxs)(i.A,{isSpining:j||k,children:[(0,b.jsx)("h3",{className:"policy-title",children:t}),N()]})})},Y=d().div`
  margin: 20px;
  background-color: ${e=>e.theme.white};
  border-radius: 10px;
  padding: 20px;

  .action-container {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }

  .action-save {
    margin-right: 20px;
  }
`;const H=r.Form.create()((function(e){var t;let{match:a,form:s,history:l}=e;const d=(0,n.useMemo)((()=>(null===a||void 0===a?void 0:a.params).policyId),[a]),[{getPolicyDetailsData:u},p]=(0,M.Av)(),[{GET_POLICY_EDITABLE_ITEMS_LIST_LOADER:m,POLICY_EDITABLE_ITEMS_DATA_LOADER:h}]=(0,o.useLoaderContextValue)(),[{getPolicyEditableItemsListData:_},y]=(0,M.Vy)(),[{validatePolicyData:x},g]=(0,M.Wo)(),[,f]=(0,M.pA)(),[v]=(0,o.useErrorContextValue)(),{resetError:C}=(0,o.useResetError)(),j=(0,n.useRef)({isPolicyDocumentEdit:!(null===a||void 0===a||null===(t=a.params)||void 0===t||!t.document)}),k=(0,n.useRef)({clearChassisTimeOut:"",tempChassisNumber:""}),[E,w]=(0,n.useState)(!0),[S,D]=(0,n.useState)(!1);(0,n.useEffect)((()=>{p({policyId:d}),y({policyId:d})}),[y,p,d]);const I=(0,n.useCallback)((e=>{var t,a;const o={};j.current.accessories&&(o.accessories=j.current.accessories),j.current.addons&&(o.add_ons=j.current.addons),j.current.insurance_policy_data&&(o.insurance_policy_data=j.current.insurance_policy_data),j.current.extra_documents&&(o.extra_documents=j.current.extra_documents.filter((e=>e.url)),o.extra_documents.length||(o.extra_documents=[])),j.current.premium_note_urls&&(o.premium_note_urls=j.current.premium_note_urls);const r=s.getFieldsValue();if(o.province_name=null===(t=document.getElementById("province_code"))||void 0===t?void 0:t.innerText,o.city_name=null===(a=document.getElementById("city_code"))||void 0===a?void 0:a.innerText,e){const e=(0,U.Xi)({...r,...o},_);f({body:{data:e},policyId:d})}}),[f,d,s,_]),P=(0,n.useCallback)((()=>{let e=!1;s.validateFields(((t,a)=>{t||(e=!0)}));let t="I understand that the data changes I made are not part of the endorsement or do not cause changes to the premium calculation.";j.current.isPolicyDocumentEdit&&(t="Are you sure to update the document?"),e&&r.Modal.confirm({content:t,onOk:()=>I(e),okText:"Yes",cancelText:"No"})}),[I,s]),R=(0,n.useCallback)((()=>{const{request:{code:e,start_date:t}}=u,{vehicle_chasis_number:a}=s.getFieldsValue();a!==k.current.tempChassisNumber&&clearTimeout(k.current.clearChassisTimeOut),k.current.tempChassisNumber=a,a?g({code:e,identifier_value:d,identifier:"reference_id",pre_validate_data:{chasis_number:{chasis_number:a,start_date:t}}}):P()}),[u,P,g,d,s]);(0,n.useEffect)((()=>{const{policyEditableItemsDataStatus:e,policyEditableItemsDataErrorData:t,validatePolicyStatus:a}=v;if("success"===e)(0,c.D)("success","Successfully updated the policy data"),l.goBack(),C(["policyEditableItemsDataStatus"]);else if(e)(0,c.D)("error",t.message),C(["policyEditableItemsDataStatus"]);else if("success"===a){const{success:e}=x;e?P():x.is_request_pending?k.current.clearChassisTimeOut=setTimeout((()=>{R()}),2e4):(0,c.D)("error",q.h.applicationStatusAfterChassisValidation),C(["validatePolicyStatus"])}}),[v,x,l,R,P,C]);const N=(0,n.useCallback)((e=>{j.current=e}),[]),F=(0,n.useCallback)((e=>{j.current.addons={...(0,U.MO)(e),addons:[...e]}}),[]),$=(0,n.useCallback)(((e,t)=>{j.current[t]=e,w(!1)}),[]),T=(0,n.useCallback)(((e,t)=>{j.current[t]=e}),[]),O=(0,n.useCallback)((()=>{const e=[];for(const o in _){const r=_[o];switch(o){case"Customer Information":e.push((0,b.jsx)(X,{title:o,customerInfoForm:r,form:s,policyId:d,onChange:T},o));break;case"Edit Policy Number & Documents":e.push((0,b.jsx)(X,{title:o,customerInfoForm:r,form:s,colSpan:24,policyId:d,showReview:S,onChange:$},o));break;case"Additional Accessories":var t;e.push((0,b.jsx)(A,{defaultAccessories:(null===(t=r[0])||void 0===t?void 0:t.default_value)||[],isEdit:!0,isDelete:!0,onSaveAccessory:N},o));break;case"Addons":var a;e.push((0,b.jsx)(V,{title:o,policy:u,defaultAddons:(null===(a=r[0])||void 0===a?void 0:a.default_value)||[],onSaveAddonsData:F},o));break;case"Others":e.push((0,b.jsx)(X,{title:o,customerInfoForm:r,form:s,policyId:d},o))}}return e}),[_,S,N,s,d,u,F,$,T]),L=(0,n.useCallback)((e=>{let t=!1;s.validateFields(((e,a)=>{e||(t=!0)})),t&&D(!0)}),[s]);return(0,b.jsx)(i.A,{isSpining:m||h,children:(0,b.jsxs)(Y,{children:[(0,b.jsx)("h3",{children:"Policy Edit"}),(0,b.jsx)(r.Form,{noValidate:!0,children:_&&(null===u||void 0===u?void 0:u.app_no)&&O()}),(0,b.jsxs)("div",{className:"action-container",children:[j.current.isPolicyDocumentEdit&&!S&&(0,b.jsx)(r.Button,{type:"primary",className:"action-save",onClick:L,disabled:E,children:"Review"}),(j.current.isPolicyDocumentEdit&&S||!j.current.isPolicyDocumentEdit)&&(0,b.jsx)(r.Button,{type:"primary",className:"action-save",onClick:R,children:"Save"}),(0,b.jsx)(r.Button,{onClick:()=>{S?D(!1):l.goBack()},children:"Back"})]})]})})}));const W=function(e){return(0,b.jsx)(s.cc,{children:(0,b.jsx)(H,{...e})})}},96990:(e,t,a)=>{a.d(t,{h:()=>n});var s=a(80878),o=a.n(s),r=a(67816);const n=o()(r.InputNumber)`
  flex: 1;
  width: 100%;
  .ant-input-number-handler-wrap {
    display: none !important;
  }
`},2632:(e,t,a)=>{a.d(t,{A:()=>s,s:()=>o});const s=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>({add_on_name:e.name,add_on_code:e.code,limit:e.sum_insured,premium:e.premium,category_code:e.category_code,no_passenger:e.add_on_count})))};function o(e){let t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),a)}}},93380:(e,t,a)=>{a.d(t,{XM:()=>l,Xg:()=>c,cT:()=>d,fU:()=>u,nv:()=>p});var s=a(69732),o=a(1502),r=a(13294),n=a(47189);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,r.PL)(),[n]=(0,s.useServiceRequest)(a),i=(0,o.useRef)(n),c=(0,o.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await i.current(e({...t}))}),[e]);return[t,c]},c=()=>{const[,e]=(0,r.PL)();return(0,o.useCallback)((t=>{e((0,n.qd)(t))}),[e])},l=()=>i(n.eI),d=()=>i(n.g9),u=()=>i(n.QM),p=()=>i(n.M)}}]);
//# sourceMappingURL=976.fc24ce44.chunk.js.map