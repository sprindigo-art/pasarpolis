"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1436],{89055:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var l=a(1502),t=a(24952),i=a(67816),o=a(80878);const n=a.n(o)().div`
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  width: 100%;

  .csv-sample-button {
    margin-bottom: 20px;
  }
  .month-selector {
    width: 220px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .select-style {
    width: 200px;
    margin-left: 8px;
  }

  .header{
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
    justify-content: end;
  }

  .bulk-container{
    display: flex;
  }

  .mT-20{
    margin-top: 20px;
  }

  .bulk-option{
    width: 200px;
    height: 50px;
    margin-left: auto;
  }

  .form-container{
    padding: 0 3rem;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`;var r=a(25211);var c=a(70579);const{uploadBulkPolicyRetryEnqueue:u,bulkOperationTypes:p,bulkInternalCancellation:d,bulkCancellation:m,buldPremiumUpdate:g,uploadCsvFile:b,bulkOperate:f,resetReduxState:x}=r.A,{Dragger:k}=i.Upload;function y(e){const[s,a]=(0,l.useState)(),{uploadCsvMessage:t,uploadCsvData:o,resetReduxState:r,bulkInternalCancellationMessage:u,bulkCancellationMessage:p,bulkUpdatePremiumMessage:d,profileData:m,bulkOperateUploadMessage:g,bulkOperationsTypesMessage:b,bulkOperationsTypesData:f}=e;(0,l.useEffect)((()=>{e.bulkOperationTypes(),r(["bulkOperationsTypesMessage"]),r(["bulkOperationsTypesData"])}),[]);const x=(0,l.useMemo)((()=>("success"===b&&""!==b&&a(f[0].code),f)),[b]);(0,l.useEffect)((()=>{if("success"===t&&""!==t){const{url:a}=o;if(!a)return void i.notification.error({message:t||"Failed To fetch Data"});const l=C.getFieldsValue();e.bulkOperate({body:{...l,file_url:a,file_name:`${s}.csv`,operation_type:s}})}}),[t,o]),(0,l.useEffect)((()=>{"success"===g?(i.notification.success({message:"file uploaded successfully!"}),r(["uploadCsvMessage"]),r(["uploadCsvData"]),r(["bulkOperateUploadMessage"])):"success"!==g&&""!==g&&(i.notification.error({message:`Error while uploading file: ${g}`}),r(["uploadCsvMessage"]),r(["uploadCsvData"]),r(["bulkOperateUploadMessage"]))}),[g]),(0,l.useEffect)((()=>{"success"===u?i.notification.success({message:u}):"success"!==u&&""!==u&&i.notification.error({message:u}),r(["bulkInternalCancellationMessage"])}),[u]),(0,l.useEffect)((()=>{"success"===p?i.notification.success({message:p}):"success"!==p&&""!==p&&i.notification.error({message:p}),r(["bulkCancellationMessage"])}),[p]),(0,l.useEffect)((()=>{"success"===d?i.notification.success({message:d}):"success"!==d&&""!==d&&i.notification.error({message:d}),r(["bulkUpdatePremiumMessage"])}),[d]);const{uploadMessageLoading:y,uploadMessageError:h,form:C}=e,{getFieldDecorator:M}=C;return(0,c.jsx)(n,{children:(0,c.jsx)(i.Card,{style:{width:"100%"},children:(0,c.jsxs)(i.Spin,{tip:"Uploading...",spinning:!1,children:[(0,c.jsxs)("div",{className:"header",children:[(0,c.jsx)("section",{className:"bulk-container",children:(0,c.jsx)(i.Select,{className:"bulk-option",value:s,onChange:e=>a(e),children:x&&x.map((e=>(0,c.jsx)(i.Select.Option,{value:e.code,children:e.name})))})}),(0,c.jsx)(i.Button,{type:"primary",onClick:()=>{let e;s&&(e=x.filter((e=>s===e.code)),e=e[0].sample_file),(e=>{const s=document.createElement("a");s.href=e,s.setAttribute("download","bulk-sample.csv"),document.body.appendChild(s),s.click()})(e)},className:"csv-sample-button",children:"Download Sample"})]}),!y&&h&&(0,c.jsx)(i.Alert,{closable:!0,message:"File Failed to upload",type:"error"}),void 0!==y&&!y&&(0,c.jsx)(i.Alert,{closable:!0,message:"File Uploaded Successfully",type:"success"}),(0,c.jsx)(i.Row,{className:"mT-20",children:(0,c.jsxs)(i.Spin,{spinning:void 0!==y&&y,children:[(0,c.jsx)(i.Form,{children:(0,c.jsxs)("section",{className:"form-container",children:[(0,c.jsx)(i.Form.Item,{label:"Reason",children:M("reason",{rules:[{required:!0,message:"Reason Is Required"}]})((0,c.jsx)(i.Input,{}))}),(0,c.jsx)(i.Form.Item,{label:"Batch Size",children:M("batch_size",{initialValue:0,rules:[{required:!1,message:"Reason Is Required"}]})((0,c.jsx)(i.InputNumber,{}))}),(0,c.jsx)(i.Form.Item,{label:"User",children:M("user",{rules:[{required:!0}],initialValue:m.email})((0,c.jsx)(i.Input,{type:"text",disabled:!0}))})]})}),(0,c.jsx)(k,{name:"file",showUploadList:!1,multiple:!1,customRequest:s=>(s=>{let{file:a}=s;const{type:l}=a,t=a.size/1024/1024>100;if(["text/csv"].includes(l)){const s=new FormData;s.append("file",a),t?i.message.error("Note: Maximum allowed file size is 100Mb"):e.uploadCsvFile({body:s})}else i.message.error("Incorrect file type, please upload only .csv")})(s),disabled:(()=>{if("bulk_internal_cancellation"===s){return!e.form.getFieldValue("reason")}return!1})(),children:(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"ant-upload-drag-icon",children:(0,c.jsx)(i.Icon,{type:"inbox"})}),(0,c.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"})]})})]})})]})})})}y.defaultProps={templateList:[]};const h=(0,t.connect)((e=>({uploadMessage:e.Policy.uploadBulkRetryMessage,uploadMessageLoading:e.Loading.UPLOAD_BULK_POLICY_RETRY_NOTIFICATION,uploadMessageError:e.Error.UPLOAD_BULK_POLICY_RETRY_NOTIFICATION,bulkInternalCancellationMessage:e.Policy.bulkInternalCancellationMessage,profileData:e.Auth.profile,uploadCsvMessage:e.Policy.uploadCsvMessage,uploadCsvData:e.Policy.uploadCsvData,bulkCancellationMessage:e.Policy.bulkCancellationMessage,bulkUpdatePremiumMessage:e.Policy.bulkUpdatePremiumMessage,bulkOperateUploadMessage:e.Policy.bulkOperateUploadMessage,bulkOperationsTypesData:e.Policy.bulkOperationsTypesData,bulkOperationsTypesMessage:e.Policy.bulkOperationsTypesMessage})),{uploadBulkPolicyRetryEnqueue:u,bulkOperationTypes:p,bulkInternalCancellation:d,buldPremiumUpdate:g,bulkCancellation:m,uploadCsvFile:b,bulkOperate:f,resetReduxState:x})(i.Form.create({})(y))}}]);
//# sourceMappingURL=1436.f2b04c92.chunk.js.map