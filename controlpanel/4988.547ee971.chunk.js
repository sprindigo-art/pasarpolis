"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4988],{24988:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var r=t(1502),l=t(67816),s=t(38094),i=t.n(s),n=t(69732),o=t(55347);const d=t(78533).A.url,c={GET_CATALOG:"GET_CATALOG",GET_CATALOG_REQUEST:"GET_CATALOG_REQUEST",SUBMIT_CATALOG:"SUBMIT_CATALOG",SUBMIT_CATALOG_REQUEST:"SUBMIT_CATALOG_REQUEST",RESET_REDUX_STATE_CATALOG:"RESET_REDUX_STATE_CATALOG",getCatalogData:e=>({type:c.GET_CATALOG_REQUEST,payload:{...e,method:"get",url:d.getCatalogData}}),submitCatalog:e=>({type:c.SUBMIT_CATALOG_REQUEST,payload:{...e,method:"post",url:d.submitDataCatalog}}),resetReduxStateCatalog:e=>({type:c.RESET_REDUX_STATE_CATALOG,payload:e})},m={},u=(e,a)=>{const{payload:t}=a;switch(a.type){case c.GET_CATALOG:case c.SUBMIT_CATALOG:return{...e,...t};case c.RESET_REDUX_STATE_CATALOG:if(t&&Array.isArray(t)){const a={};return t.forEach((e=>{a[e]=m[e]})),{...e,...a}}return{...e};default:return e}};var h=t(70579);const p=(0,r.createContext)(),_=e=>(0,h.jsx)(p.Provider,{value:(0,r.useReducer)(u,m),children:e.children}),f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[a,t]=(0,r.useContext)(p),[l]=(0,n.useServiceRequest)(t);return[a,async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...a}))}]};var x=t(80878),g=t.n(x);const j=g().div`
  .form{
    padding: 1rem 3rem;
    
    &__heading{
      text-align: center;
    }

    &__btn-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`,b=l.Form.create({})((e=>{let{form:a,getCatalogDataRequest:t}=e;const{getFieldDecorator:s}=a,i=(0,r.useCallback)((async()=>new Promise((e=>{a.validateFields((a=>{e(!a)}))}))),[a]),n=(0,r.useCallback)((async e=>{e.preventDefault();if(!await i())return;const r={...a.getFieldsValue()};t({query:{meta_data:null===r||void 0===r?void 0:r.meta_id,validation_id:null===r||void 0===r?void 0:r.validation_id}})}),[a,i,t]);return(0,h.jsx)(j,{children:(0,h.jsxs)("div",{className:"form",children:[(0,h.jsx)("h2",{className:"form__heading",children:"Data Catalog ID Form"}),(0,h.jsxs)(l.Form,{onSubmit:n,children:[(0,h.jsxs)("section",{className:"form__container",children:[(0,h.jsx)("label",{children:"Validation Id"}),(0,h.jsx)(l.Form.Item,{children:s("validation_id",{rules:[{required:!0,message:"Please enter Validation Id"}]})((0,h.jsx)(l.Input,{type:"number",placeholder:"Validation Id"}))})]}),(0,h.jsxs)("section",{className:"form__container",children:[(0,h.jsx)("label",{children:"Meta-Data Id"}),(0,h.jsx)(l.Form.Item,{children:s("meta_id",{rules:[{required:!0,message:"Please enter Meta-Data Id"}]})((0,h.jsx)(l.Input,{type:"number",placeholder:"MetaData Id"}))})]}),(0,h.jsx)("section",{className:"form__btn-container",children:(0,h.jsx)(l.Button,{htmlType:"submit",type:"primary",className:"",children:"Submit"})})]})]})})})),y=g().div`
  width: 100%;
  height: 100%;

  .form{
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 2rem 4rem;

    &__header{
      h1{
        text-align: center;
        font-size: 20px;
        font-weight: 900;
        text-decoration: underline;
      }

      p{
        text-align: center;
        span{
          text-transform: capitalize;
        }
      }
    }

    &__obj{
      padding: 0 2rem;
    }

    &__btn{
      padding: 2rem;
      display: flex;
      justify-content: center;

      button{
        border-radius: 2px;
      }
    }

  }

  .bold{
    font-weight: 800;
  }

  .flex{
    display: flex;
  }

  .inner-section{
    padding: 0 2rem;
  }
  .darkfield{
    background-color:#E0E0E0	;
    color:gray;
  }
  .ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice{
    background:#E0E0E0;
    color:gray;
  }
`,{TreeNode:v}=l.TreeSelect;function C(e){const{form:a,placeHolder:t="",disableField:r=!1,type:s,label:i=" ",initialValue:n="",required:o=!1,className:d=" ",extra:c="",loading:m=!1,message:u="",help:p=""}=e,{getFieldDecorator:_}=a;switch(s){case"numeric":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:u}],initialValue:n})((0,h.jsx)(l.InputNumber,{className:d,disabled:r,placeholder:t}))]});case"String":return(0,h.jsx)(l.Form.Item,{extra:c,help:p,label:i,children:_(e.formName,{rules:[{required:o,message:u}],initialValue:n})((0,h.jsx)(l.Input,{className:d,disabled:r,placeholder:t}))});case"alphanumeric":return(0,h.jsxs)(l.Form.Item,{extra:c,help:p,children:[i,_(e.formName,{rules:[{required:o,message:u}],initialValue:n})((0,h.jsx)(l.Input,{className:d,disabled:r,placeholder:t}))]});case"textarea":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:""}],initialValue:n})((0,h.jsx)(l.Input.TextArea,{rows:e.row||4,className:d,placeholder:""}))]});case"dob":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:""}],initialValue:n})((0,h.jsx)(l.DatePicker,{className:d,format:"YYYY-MM-DD",placeholder:""}))]});case"email":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:!0,message:""},{type:"email",message:""}],initialValue:n})((0,h.jsx)(l.Input,{className:d,disabled:!!n,placeholder:""}))]});case"radio":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:"Please Select Change Type Option"}],initialValue:n})((0,h.jsx)(l.Radio.Group,{children:e.options.map(((e,a)=>(0,h.jsx)(l.Radio,{value:e,children:e},a)))}))]});case"multi-choices":return(0,h.jsx)(l.Form.Item,{label:i,children:_(e.formName,{rules:[{required:o,message:""}],initialValue:n})((0,h.jsx)(l.Select,{showSearch:!0,allowClear:!0,mode:"multiple",disabled:r,dropdownMatchSelectWidth:!1,filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:e.options.map(((e,a)=>(0,h.jsx)(l.Select,{value:e,children:e},a)))}))});case"choices":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:""}],initialValue:n})((0,h.jsx)(l.Select,{showSearch:!0,allowClear:!0,dropdownMatchSelectWidth:!1,filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:e.options.map(((e,a)=>(0,h.jsx)(l.Select.Option,{value:e,children:e},a)))}))]});case"Boolean":return(0,h.jsx)(l.Form.Item,{children:_(e.formName,{rules:[{required:o,message:""}],valuePropName:"checked",initialValue:""!==n&&n})((0,h.jsx)(l.Checkbox,{children:i}))});case"nested-tree-select":return(0,h.jsxs)(l.Form.Item,{children:[i,_(e.formName,{rules:[{required:o,message:""}],initialValue:n})((0,h.jsx)(l.TreeSelect,{className:d,placeholder:"",treeDefaultExpandAll:!0,disabled:r,loading:m,children:T(e.options)}))]});default:return null}}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(Array.isArray(e))return e.map(((e,a)=>{if(0===e.nested.length){const a=(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"main-text",children:e.name})," ",(0,h.jsx)("br",{}),e.attribute_type&&(0,h.jsxs)("span",{className:"sub-text",children:["(",e.attribute_type,")"]})]});return(0,h.jsx)(v,{value:e.id,title:a})}return(0,h.jsx)(v,{title:e.name,children:T(e.nested)})}))}const N=e=>{var a,t=e.split("_");for(a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);return t.join(" ")};const E=l.Form.create({})((function(e){let{location:a,form:t}=e;const[{getCatalogData:s={}},d]=f(c.getCatalogData),[,m]=f(c.submitCatalog),[u,p]=(0,r.useState)(!0),[_,x]=(0,r.useState)(!0),[{GET_CATALOG_LOADER:g}]=(0,n.useLoaderContextValue)(),[{GET_CATALOG_ERROR:j="",getCatalogStatus:v="",getCatalogErrorData:T="",SUBMIT_CATALOG_ERROR:E,submitCatalogStatus:A,submitCatalogErrorData:S},O]=(0,n.useErrorContextValue)();(0,r.useEffect)((()=>{const e=i().parse(null===a||void 0===a?void 0:a.search),{metadata_id:t,validation_id:r}=e;t&&r?(p(!1),R(t,r)):p(!1)}),[]),(0,r.useEffect)((()=>{if(j){const{error:e}=T;e?l.notification.error({message:e||"Failed to Fetch Data"}):v&&l.notification.error({message:v||"Failed to Fetch Data"}),O((0,n.resetError)({GET_CATALOG_ERROR:!1,getCatalogStatus:"",getCatalogErrorData:""}))}else j||"success"!==v||(v&&l.notification.success({message:v}),x(!1),O((0,n.resetError)({GET_CATALOG_ERROR:!1,getCatalogStatus:"",getCatalogErrorData:""})))}),[j,v,T]),(0,r.useEffect)((()=>{if(E){const{error:e}=S;e?l.notification.error({message:e}):A&&l.notification.error({message:A}),O((0,n.resetError)({SUBMIT_CATALOG_ERROR:!1,submitCatalogErrorData:"",submitCatalogStatus:""}))}else E||"success"!==A||(A&&l.notification.success({message:A}),O((0,n.resetError)({SUBMIT_CATALOG_ERROR:!1,submitCatalogErrorData:"",submitCatalogStatus:""})))}),[E,A,S]);const R=(0,r.useCallback)(((e,a)=>{d({query:{meta_data:e,validation_id:a}})}),[]),D=(0,r.useCallback)((async()=>new Promise((e=>{t.validateFields((a=>{e(!a)}))}))),[t]),F=e=>{var a,t;m({body:{...e,metadata_id:null===s||void 0===s||null===(a=s.hidden_fields)||void 0===a?void 0:a.metadata_id,validation_id:null===s||void 0===s||null===(t=s.hidden_fields)||void 0===t?void 0:t.validation_id}})},I=(0,r.useCallback)((async e=>{e.preventDefault();if(!await D())return;const a={...t.getFieldsValue()};var r;"Renamed"!==t.getFieldValue("type.change_type")?F(a):F({...a,type:{...a.type,old_value_metadata:s.old_value[`${null===a||void 0===a||null===(r=a.type)||void 0===r?void 0:r.old_value_metadataid}`]}})}),[t,D,d]),{manual_keys:w,dataobject_info:G,validation_failure_reason:L,downstream:V,change_type:k,old_value:q}=s,{getFieldValue:U,getFieldDecorator:M}=t;return(0,h.jsx)(o.A,{className:"referral-table",children:(0,h.jsx)(y,{children:(0,h.jsx)(l.Spin,{spinning:u||!!g,children:_?(0,h.jsx)(b,{getCatalogDataRequest:d,loading:!!g||!!u}):(0,h.jsxs)("div",{className:"form",children:[(0,h.jsxs)("section",{className:"form__header",children:[(0,h.jsx)("h1",{children:"Data Catalog Form"}),L&&(0,h.jsxs)("p",{children:[" Validation Failure Reason : ",L," "]})]}),(0,h.jsx)("section",{className:"form__container",children:(0,h.jsxs)(l.Form,{onSubmit:I,children:[(0,h.jsxs)("section",{className:"form__section",children:[(0,h.jsxs)("section",{className:"form__objinfo",children:[(0,h.jsx)("p",{className:"bold",children:" Data Object Information : "}),(0,h.jsx)("div",{className:"form__obj",children:C.call(this,{form:t,formName:"dataobject_name",type:"String",required:!0,label:"Data Object Name : ",initialValue:null===G||void 0===G?void 0:G.dataobject_name,disableField:!0,className:"darkfield"})}),(0,h.jsx)("div",{className:"form__obj",children:C.call(this,{form:t,formName:"dataobj_source",type:"String",required:!0,label:"Data Object Source : ",initialValue:null===G||void 0===G?void 0:G.dataobj_source,disableField:!0,className:"darkfield"})}),(0,h.jsx)("div",{className:"form__obj",children:C.call(this,{form:t,formName:"dataobject_type",type:"String",required:!0,label:"Data Object Type : ",initialValue:null===G||void 0===G?void 0:G.dataobject_type,disableField:!0,className:"darkfield"})})]}),V&&Object.keys(V).length&&(0,h.jsxs)("section",{className:"form__downstream",children:[(0,h.jsx)("p",{className:"bold",children:" Downstream : "}),Object.keys(V).map(((e,a)=>(0,h.jsx)("div",{className:"inner-section",children:C.call(this,{form:t,formName:`downstream.${e}`,type:"multi-choices",required:!1,options:V[`${e}`],label:N(e),disableField:!0,initialValue:V[`${e}`],className:"darkfield"})},a)))]})]}),k&&Array.isArray(k)&&(null===k||void 0===k?void 0:k.length)&&(0,h.jsxs)("section",{className:"form__change-type",children:[(0,h.jsx)("p",{className:"bold",children:" Change Type : "}),(0,h.jsx)("div",{className:"inner-section",children:C.call(this,{form:t,formName:"type.change_type",type:"radio",required:!0,className:"small-size",options:k,initialValue:"NewlyAdded"})}),"Renamed"===U("type.change_type")&&q&&(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"inner-section",children:[(0,h.jsx)("p",{className:"bold",children:"Select Old Values : "}),(0,h.jsx)("div",{className:"inner-section",children:(0,h.jsx)(l.Form.Item,{children:M("type.old_value_metadataid",{rules:[{required:!0,message:"Select the Type of Value"}]})((0,h.jsx)(l.Select,{showSearch:!0,allowClear:!0,dropdownMatchSelectWidth:!1,filterOption:(e,a)=>a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:Object.keys(q).map(((e,a)=>(0,h.jsx)(l.Select.Option,{value:Number(e),children:q[e]},a)))}))})})]})})]}),w&&(0,h.jsxs)("section",{className:"form__manual-key",children:[(0,h.jsx)("p",{className:"bold",children:" Manual Keys : "}),Object.keys(w).map(((e,a)=>{const r=C.call(this,{form:t,formName:`manual_key.${e}`,type:w[`${e}`].data_type,required:w[`${e}`].is_required,className:"small-size",label:N(e),initialValue:w[`${e}`].value});return(0,h.jsx)("div",{className:"inner-section",children:r},a)}))]}),(0,h.jsx)("section",{className:"form__btn",children:(0,h.jsx)(l.Button,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})})})})}));const A=function(e){return(0,h.jsx)(_,{children:(0,h.jsx)(E,{...e})})}}}]);
//# sourceMappingURL=4988.547ee971.chunk.js.map