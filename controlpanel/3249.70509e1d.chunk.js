"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3249],{62906:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(1502),n=a.n(r),s=a(80878),o=a.n(s),l=a(48062),i=a.n(l),c=a(70579);const d=o()(i())`
  width: 100%;
`,p=n().forwardRef(((e,t)=>{let{thousandSeparator:a=".",decimalSeparator:n=",",...s}=e;const o=(0,r.useCallback)((e=>{"Period"===e.code&&e.preventDefault()}),[]);return(0,c.jsx)(d,{ref:t,className:"ant-input",decimalSeparator:n,thousandSeparator:a,onKeyPress:o,...s})}))},31035:(e,t,a)=>{a.d(t,{C4:()=>l,Ul:()=>i,r9:()=>o.r9,uc:()=>c});a(1502);var r=a(67816),n=a(80878),s=a.n(n),o=a(79688);a(70579);const l=s().span`
    font-size: 14px;
    border-radius: 24px;
    padding: 0 12px;
    background-color: ${e=>e.bgColor?e.bgColor:"rgb(255, 159, 10)"};
    color: #ffffff;
    margin: 2px;
    display: block;
`,i=s().ul`
    margin: 0;
    padding: 0;
    list-style-position: inside;
`,c=s()(r.Card)`
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
`},33249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var r=a(69732),n=a(1502),s=a(46559),o=a(3098);const l={CREATE_PAYMENT_REQUEST:"CREATE_PAYMENT_REQUEST",CREATE_PAYMENT:"CREATE_PAYMENT",PRODUCT_PLANS_REQUEST:"PRODUCT_PLANS_REQUEST",PRODUCT_PLANS:"PRODUCT_PLANS",COMPANY_PACKAGE_REQUEST:"COMPANY_PACKAGE_REQUEST",COMPANY_PACKAGE:"COMPANY_PACKAGE",createPayment:e=>({type:l.CREATE_PAYMENT_REQUEST,payload:{...e,method:"post",url:o.A.createPaymentV2}}),getProductPlans:e=>({type:l.PRODUCT_PLANS_REQUEST,payload:{...e,method:"get",url:o.A.getProductPlans}}),getCompanyPackages:e=>({type:l.COMPANY_PACKAGE_REQUEST,payload:{...e,method:"get",url:o.A.companyPackages}})},i=(e,t)=>{const{payload:a}=t;switch(t.type){case l.CREATE_PAYMENT:case l.PRODUCT_PLANS:case l.COMPANY_PACKAGE:return{...e,...a};default:return e}};var c=a(67816),d=a(80878),p=a.n(d);const u=p().div`
  margin: 10px 20px;
  .content {
    background-color: #fff;
    margin: 10px 0;
    padding: 20px;
  }
  .description-title {
    display: flex;
    justify-content: space-between;
  }
  .update-btn-container {
    display: flex;
    justify-content: flex-end;
  }
  .width-150 {
    width: 150px;
  }
  .mt-5 {
    margin: 10px 0;
  }
  .label {
    font-weight: 600;
  }
  .description {
    word-break: break-word;
  }
  .ant-form-item-label > label {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
  }
`,m=p().div`
  overflow: hidden;
`;var f=a(31035),g=a(88962),y=a(7913),P=a(97418);var E=a(39138),h=a(70579);const A=e=>{let{plansData:t,selectedUsers:a=[],benefitGroupSlug:r,noPlanEmployeeIds:s,productId:o,getFieldDecorator:l,...i}=e;const d=(0,n.useMemo)((()=>(0,E.Dm)({plansData:t,benefitGroupSlug:r,productId:o,noPlanEmployeeIds:s,getFieldDecorator:l})),[t,r,o,s,l]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Table,{rowKey:e=>e.planIdentifier,columns:d,dataSource:a,bordered:!0,size:"small"})})};var b=a(62906);const x="manual",_="file",C=p().div`
  width: 500px;
  border: 2px dashed #e2e2e2;
  padding: 25px;
  margin: 50px auto;

  .download-container {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .upload-container {
    width: 60%;
    margin: auto;
  }

  .ant-upload.ant-upload-select.ant-upload-select-text {
    width: 100%;
  }
`;var R=a(79688),S=a(96084),j=a(81875);const{Title:v}=c.Typography,T=e=>{let{productId:t,getFieldDecorator:a,form:r}=e;return(0,h.jsx)(C,{children:(0,h.jsxs)(c.Row,{type:"flex",align:"middle",children:[(0,h.jsx)(R.yN,{span:24,children:(0,h.jsx)(v,{level:4,children:"Autofill Form Data From Excel"})}),(0,h.jsx)(R.yN,{className:"download-container",span:24,children:(0,h.jsx)(S.A,{buttonType:"link",buttonContent:(0,h.jsxs)(h.Fragment,{children:["Download sample ",(0,h.jsx)(c.Icon,{type:"download"})]}),buttonSize:"small",url:o.A.downloadCreatePaymentTemplate,queryParams:{product_id:t}})}),(0,h.jsx)(R.yN,{className:"upload-container",span:24,children:(0,h.jsx)(j.A,{required:!0,getFieldDecorator:a,name:"url",buttonClassName:"fluid-width",form:r,buttonType:"primary",buttonText:"Upload",identifier:"participant_plan",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",maxSize:15,minSize:.001,maxFileAllowed:1})})]})})},F={createPaymentWithFile:{dataKey:"PAYMENT_BY_FILE",url:o.A.createPaymentWithFile}},{Option:k}=c.Select,{Item:N}=c.Form,w={labelCol:{span:8},wrapperCol:{span:16}},D=c.Form.create({name:"create_payment_form"})((e=>{let{...t}=e;const{form:a}=t,{setFields:o,getFieldsValue:i,resetFields:d,validateFields:p,setFieldsValue:u}=a,[{companyPackageData:C},R]=(()=>{const[{companyPackageData:e,companyPackageStatus:t},a]=(0,s.FF)(),[o]=(0,r.useServiceRequest)(a);return[{companyPackageData:e,companyPackageStatus:t},(0,n.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(l.getCompanyPackages(e))}),[o])]})(),{createPaymentRequest:S,getProductPlans:j,productPlansData:v}=(()=>{const[{createPaymentData:e,productPlansData:t},a]=(0,s.FF)(),[o]=(0,r.useServiceRequest)(a);return{createPaymentRequest:(0,n.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(l.createPayment({body:e}))}),[o]),createPaymentData:e,getProductPlans:(0,n.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(l.getProductPlans({query:e}))}),[o]),productPlansData:t}})(),[D,U]=(0,r.usePost)(F.createPaymentWithFile),I=(0,n.useMemo)((()=>(0,P._9)("eb-selected-employees-proposed-plans")),[]),O=(0,n.useMemo)((()=>window.sessionStorage.getItem("eb-selected-employees-proposed-product-id")),[]),M=(0,n.useMemo)((()=>(0,P._9)("selected-employees")||[]),[]),Y=(0,n.useMemo)((()=>(0,E.Jd)(M)),[M]),[L]=(0,n.useState)(null!==M&&void 0!==M&&M.length?x:_),q=(0,n.useRef)(!1),[{CREATE_PAYMENT_ERROR:B,createPaymentErrorData:G,createPaymentStatus:K,companyPackageStatus:V,createPaymentStatusCode:$,productPlansStatus:Q,PRODUCT_PLANS_ERROR:z,COMPANY_PACKAGE_ERROR:W,paymentByFileStatus:H,PAYMENT_BY_FILE_ERROR:J}]=(0,r.useErrorContextValue)(),[{CREATE_PAYMENT_LOADER:X,PRODUCT_PLANS_LOADER:Z,COMPANY_PACKAGE_LOADER:ee,PAYMENT_BY_FILE_LOADER:te}]=(0,r.useLoaderContextValue)(),{getFieldDecorator:ae}=t.form,re=(0,g.useParams)(),{companyId:ne}=re,{resetError:se}=(0,y.q)(),oe=a.getFieldValue("product_id"),le=(0,g.useHistory)(),{resetError:ie}=(0,r.useResetError)(),[ce,de]=(0,n.useState)([]),pe=i(),ue=(0,n.useCallback)((e=>{e.preventDefault(),p(((e,t)=>{if(!e){const e={...t,amount:String(t.amount||"").replace(/\./g,"").replace(",",".")},{participant_plan_mappings:a,url:r,...n}=e;let s;if(a&&(s=Object.fromEntries(Object.entries(a))),L===_){const e=Array.isArray(r)&&1===r.length?r[0].url:"";if(e){const t={...n,url:e};U(t)}else c.message.error("No files selected")}else S({...n,participant_plan_mappings:s});ie(["createPaymentStatus","CREATE_PAYMENT_ERROR"])}}))}),[S,ie,p,L,U]);(0,n.useEffect)((()=>{if(B&&G){const{error:e,message:t}=G;if(t&&c.message.error(t),e){const t=i(),a=["amount","url"];for(const r of a)e[r]&&o({[r]:{value:t[r],errors:Array.isArray(e[r])?e[r].map((e=>new Error(e))):[]}})}}}),[G,B,o,i]),(0,n.useEffect)((()=>{if(pe.participant_plan_mappings&&oe){const e=Object.fromEntries(Object.entries(pe.participant_plan_mappings));for(const t in e){let a=!1;for(const r in e[t])if(e[t][r]){a=!0;break}a?ce.includes(t)&&de((e=>e.filter((e=>e!==t)))):ce.includes(t)||de((e=>[...e,t]))}}}),[pe,ce,oe]);const{plansData:me,benefitGroupSlug:fe}=(0,E.IS)(v);return(0,n.useEffect)((()=>{if("success"===Q){const e=null===I||void 0===I?void 0:I.participant_plan_mappings;if(e&&!q.current){q.current=!0;for(const t in e)for(const a in e[t])u({[`participant_plan_mappings.${t}.${a}`]:e[t][a].id})}}}),[I,Q,u]),(0,n.useEffect)((()=>{oe&&(d("participant_plan_mappings"),j({product_id:oe}))}),[oe,j,d]),(0,n.useEffect)((()=>{"success"===K&&(c.message.success("Payment done successfully"),(0,P.hV)(["selected-employees"]),le.push(`/employee-benefits/company-list/${re.companyId}/`))}),[K,le,re.companyId]),(0,n.useEffect)((()=>{"success"===H&&null!==D&&void 0!==D&&D.message&&(c.message.success(D.message),le.push(`/employee-benefits/company-list/${re.companyId}/`))}),[H,D,le,re.companyId]),(0,n.useEffect)((()=>(R({query:{company_id:ne}}),O&&u({product_id:O}),()=>{se(["COMPANY_PACKAGE_ERROR","companyPackageStatus","productPlansStatus"]),ie(["createPaymentStatus","CREATE_PAYMENT_ERROR","paymentByFileStatus","PAYMENT_BY_FILE_ERROR","productPlansStatus"])})),[R,ne,se,ie,u,Y,O]),(0,h.jsxs)(c.Spin,{spinning:!!X||!!ee||!!te,children:[B&&400!==$&&(0,h.jsx)(c.Alert,{type:"error",message:K,banner:!0}),W&&(0,h.jsx)(c.Alert,{type:"error",message:V,banner:!0}),z&&(0,h.jsx)(c.Alert,{type:"error",message:Q,banner:!0}),J&&(0,h.jsx)(c.Alert,{type:"error",message:H,banner:!0}),(0,h.jsx)("h2",{children:"Creating Payment"}),(0,h.jsxs)(c.Form,{children:[(0,h.jsxs)(f.r9,{gutter:16,children:[(0,h.jsx)(c.Col,{span:12,children:(0,h.jsx)(N,{hasFeedback:!0,label:"Product",...w,labelAlign:"left",children:ae("product_id",E.n1)((0,h.jsx)(c.Select,{style:{width:"100%"},children:C&&C.data?C.data.map((e=>(0,h.jsx)(k,{value:e._packageID,children:e._packageID},e._packageID))):null}))})}),(0,h.jsx)(c.Col,{span:12,children:(0,h.jsx)(c.Form.Item,{hasFeedback:!0,label:"Amount",...w,labelAlign:"left",children:ae("amount",{validateTrigger:["onBlur"],rules:E.j$})((0,h.jsx)(b.A,{}))})})]}),(0,h.jsxs)(c.Spin,{spinning:!!Z,children:[(0,h.jsx)(f.r9,{children:(0,h.jsx)(c.Col,{children:(0,h.jsx)("h3",{children:"Plans Mapping"})})}),!!oe&&L===_&&(0,h.jsx)(T,{form:a,productId:oe,getFieldDecorator:ae}),(0,h.jsxs)(m,{children:[!!oe&&L===x&&me&&fe&&(0,h.jsx)(A,{plansData:me,form:a,selectedUsers:Y,benefitGroupSlug:fe,productId:oe,noPlanEmployeeIds:ce,getFieldDecorator:ae}),!!oe&&(0,h.jsx)(f.r9,{type:"flex",justify:"end",children:(0,h.jsx)(c.Button,{type:"primary",onClick:ue,disabled:ce.length,children:"Submit"})})]})]})]})]})})),U=e=>{let{history:t,match:a,...r}=e;return(0,n.useEffect)((()=>()=>{window.sessionStorage.removeItem("selected-employees"),window.sessionStorage.removeItem("eb-selected-employees-proposed-product-id"),window.sessionStorage.removeItem("eb-selected-employees-proposed-plans")}),[]),(0,h.jsxs)(u,{children:[(0,h.jsx)("div",{className:"back-btn-container",children:(0,h.jsxs)(c.Button,{onClick:()=>t.push(`/employee-benefits/company-list/${a.params.companyId}/participants-list`),children:[(0,h.jsx)(c.Icon,{type:"arrow-left"})," Back"]})}),(0,h.jsx)("div",{className:"content",children:(0,h.jsx)(D,{})})]})};const I=function(e){return(0,h.jsx)(s.mc,{reducer:i,pageName:"Participants Payment",children:(0,h.jsx)(r.ApiContextProvider,{children:(0,h.jsx)(U,{...e})})})}},81875:(e,t,a)=>{a.d(t,{A:()=>A});var r=a(95916),n=a.n(r),s=a(67816),o=a(97418),l=a(88204),i=a.n(l),c=a(93807),d=a(74394),p=a.n(d);const u=e=>{let{fileList:t}=e;const a={};return p().set(a,"makeFileUrlPublic",t),i().post("/api/claims/make-url-public/",a,{headers:(0,o._b)()}).then((e=>e)).catch((e=>{console.log("error in const makeFileUrlPublicCall = ({",e)}))};var m=a(99978);const f=e=>{let{signedUrl:t="",query:a={},body:r={},params:n={},signedUrlBody:s={},makeFileUrlPublic:l=!1}=e;const d=(0,c.A)(a),p=`${(0,m.A)(t,n)}${d}`;return i().post(p,s,{headers:(0,o._b)()}).then((e=>{const{data:t}=e;return i().put(t.signed_url,r.file,{headers:{"Content-type":r.file.type}}).then((e=>(e.data={url:t.url,filename:t.filename},e))).then((e=>{var t;l&&u({fileList:[null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.filename]});return e}))}))};var g=a(3098),y=a(80878);const P=a.n(y)().div`
  .border-radius-ant-input {
    border-radius: 4px;
  }
  .form-error {
    border-color: #f5222d;
  }
`;var E=a(70579);const h=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replaceAll(" ","_")},A=e=>{let{getFieldDecorator:t,name:a,required:r=!1,buttonClassName:l="",buttonType:i="default",maxFileAllowed:c,multiple:d=!1,form:p,minSize:u=.01,maxSize:m=2,identifier:y,initialValue:A,onPreview:b,buttonText:x="Upload",accept:_="",formItemProps:C={},icon:R,signedUrlEndPoint:S=g.A.generateSignedUrl,fileNameLength:j,disabled:v=!1,makeFileUrlPublic:T=!1,onFileUploadedSuccess:F=()=>{}}=e;return(0,E.jsx)(s.Form.Item,{...C,children:t(a,{valuePropName:"fileList",initialValue:A,getValueFromEvent:e=>Array.isArray(e)?c?e.slice(-c):e:c?e&&e.fileList&&e.fileList.slice(-c):e&&e.fileList,rules:[{required:r,message:"This field is required."}]})((0,E.jsx)(s.Upload,{multiple:void 0===d||d,customRequest:e=>{const{file:t,onSuccess:a,onError:r}=e,{size:n}=t,l=n/1024/1024>m;return n/1024/1024<u?(s.message.error("File is to small, min 10kb"),void(0,o.od)(e.onError)):l?(s.message.error(`File is to big, max ${m} mb`),void(0,o.od)(e.onError)):f({signedUrl:S,body:{file:e.file},makeFileUrlPublic:T,signedUrlBody:{file_name:encodeURI(h(t.name)),identifier:y||"static_storage",content_type:t.type}}).then((e=>{F(),a(e)})).catch((e=>r(e)))},onChange:e=>{let t=[...e.fileList];t=t.map((e=>(e.response&&(e.url=e.response.data.url),e))),j&&(t=t.map((e=>(e.name=n().truncate(e.name,{length:j}),e)))),p.setFieldsValue({[a]:t})},...b&&{onPreview:b},..._&&{accept:_},disabled:v,children:(0,E.jsx)(P,{children:(0,E.jsxs)(s.Button,{className:(()=>{let e=`border-radius-ant-input ${l}`;return p.getFieldError(a)&&(e+=" form-error"),e})(),type:i,disabled:v,children:[(0,E.jsx)(s.Icon,{type:R||"upload"})," ",x]})})}))})}},7913:(e,t,a)=>{a.d(t,{q:()=>o});var r=a(1502),n=a(12864),s=a(72152);const o=()=>{const[e,t]=(0,n.WX)();(0,r.useEffect)((()=>{}),[e]);return{resetError:(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t((0,s.Lg)(e))}),[t])}}}}]);
//# sourceMappingURL=3249.70509e1d.chunk.js.map