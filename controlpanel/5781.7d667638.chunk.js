"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[5781],{50104:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(1502),s=i(24952),o=i(67816),a=i(86178),r=i.n(a),l=i(95916),d=i.n(l),c=i(25580),p=i(26877),u=i(96117),h=i(87291),g=i(70579);const m=o.Radio.Group,{getConfigTemplates:f,getConfigTemplateDetails:x}=p.A,{resetLoadingRedux:C}=u.A,{resetErrorRedux:_}=h.A;class b extends n.Component{constructor(){super(...arguments),this.state={template:1},this.handleChange=e=>{this.setState({template:e.target.value})},this.onHandleNext=()=>{const{inprogressConfig:e}=this.props,{template:t}=this.state;if(t||o.notification.error({message:"Please select template!"}),"string"===typeof t){const i=t.split("-")[1];let n=d().find(e,{config_dump_id:parseInt(i)});this.props.handleInprogressConfigData(n)}else this.props.getConfigTemplateDetails({query:{templateId:t}})}}componentDidMount(){}UNSAFE_componentWillReceiveProps(e){const{getConfigTemplateDetailsLoading:t,getConfigTemplateDetailsError:i,claimConfigTemplate:n}=e;if(n&&n.length){const{id:e}=n[0];this.setState({template:e})}!1===t&&(!1===i&&this.props.handleNext(),this.props.resetLoadingRedux(["GET_CONFIG_TEMPLATES_DETAILS"]),this.props.resetErrorRedux(["GET_CONFIG_TEMPLATES_DETAILS"]))}render(){const{claimConfigTemplateLoading:e,claimConfigTemplate:t,getConfigTemplateDetailsLoading:i,inprogressConfig:n=[],inprogressConfigLoading:s,edit:a}=this.props,{template:l}=this.state;return(0,g.jsx)(c.dN,{children:(0,g.jsxs)(o.Spin,{spinning:!!e||!!i||!!s,children:[(0,g.jsx)("div",{className:"heading",children:"Templates"}),t.length?(0,g.jsxs)(m,{value:l,onChange:this.handleChange,children:[t.map((e=>{let{id:t,label:i,description:n}=e;return(0,g.jsxs)(o.Row,{type:"flex",justify:"start",align:"middle",children:[(0,g.jsx)(o.Radio,{value:t}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"label",children:i}),(0,g.jsx)("div",{className:"description",children:n})]})]},t)})),!a&&n.length>0&&(0,g.jsxs)("div",{children:[(0,g.jsx)(o.Divider,{}),(0,g.jsx)("div",{className:"heading",children:"Existing Dumps"}),n.map((e=>{let{config_dump_id:t,created_by:i,created_at:n,updated_at:s}=e;return(0,g.jsxs)(o.Row,{type:"flex",justify:"start",align:"middle",children:[(0,g.jsx)(o.Radio,{value:`dump-${t}`}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"label",children:t}),(0,g.jsxs)("div",{className:"description",children:["Created By - ",i]}),(0,g.jsxs)("div",{className:"description",children:["Created At - ",r()(n).format("lll")]}),(0,g.jsxs)("div",{className:"description",children:["Updated At - ",r()(s).format("lll")]})]})]},t)}))]})]}):(0,g.jsx)(o.Empty,{}),(0,g.jsx)(o.Row,{type:"flex",justify:"end",children:(0,g.jsx)(o.Button,{type:"primary",onClick:this.onHandleNext,disabled:!l,children:"Next"})})]})})}}const v=(0,s.connect)((e=>({claimConfigTemplateLoading:e.Loading.GET_CONFIG_TEMPLATES,claimConfigTemplate:e.Claims.claimConfigTemplate,getConfigTemplateDetailsLoading:e.Loading.GET_CONFIG_TEMPLATES_DETAILS,getConfigTemplateDetailsError:e.Error.GET_CONFIG_TEMPLATES_DETAILS,inprogressConfig:e.Claims.inprogressConfig,inprogressConfigLoading:e.Loading.GET_INPROGRESS_CONFIG})),{getConfigTemplates:f,getConfigTemplateDetails:x,resetLoadingRedux:C,resetErrorRedux:_})(b)},91155:(e,t,i)=>{i.d(t,{et:()=>a,qU:()=>r,uv:()=>l});i(1502);var n=i(67816),s=i(70579);const{Option:o}=n.Select,a=e=>[{title:"Title",dataIndex:"title",key:"title"},{title:"Action",dataIndex:"id",key:"action",render:(t,i,o)=>(0,s.jsxs)(n.Row,{type:"flex",children:[(0,s.jsx)("div",{onClick:()=>e.editForm(i,o),className:"edit",children:"Edit"}),(0,s.jsx)("div",{onClick:()=>e.deleteForm(o),className:"delete",children:"Delete"})]})}],r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return[{title:"Label",dataIndex:"label",key:"label",render:(t,i,o)=>(0,s.jsx)(n.Input,{className:"input-label",defaultValue:t,onChange:t=>e.handleChangeLabel(o,t.target.value)})},{title:"Mandatory",key:"required",dataIndex:"required",render:(t,i,o)=>(0,s.jsx)(n.Checkbox,{defaultChecked:t,onChange:t=>e.handleCheckboxChange(o,"required",t.target.checked)})},{title:"Document Verification Required",key:"validation_required",dataIndex:"validation_required",render:(t,i,o)=>(0,s.jsx)(n.Checkbox,{defaultChecked:t,onChange:t=>e.handleCheckboxChange(o,"validation_required",t.target.checked)})},{title:"Mulitple Value Required",key:"is_multiple_value_required",dataIndex:"is_multiple_value_required",render:(t,i,o)=>["image","choices"].includes(i.type)&&(0,s.jsx)(n.Checkbox,{defaultChecked:t,onChange:t=>e.handleCheckboxChange(o,"is_multiple_value_required",t.target.checked)})},{title:"Type",key:"type",dataIndex:"type"},{title:"Internal",key:"is_internal",dataIndex:"is_internal",render:e=>e.toString()},{title:"Regex validation (optional)",key:"regex",dataIndex:"regex",render:(i,a,r)=>["string","text"].includes(a.type)&&(0,s.jsx)(n.Select,{allowClear:!0,placeholder:"Select",className:"select",defaultValue:i,dropdownMatchSelectWidth:!1,onChange:t=>e.handleSelectRegex(r,t),children:t.map((e=>(0,s.jsx)(o,{value:e,children:e},e)))})},{title:"Action",key:"action",render:(t,i,n)=>(0,s.jsx)("div",{className:"delete",onClick:()=>e.handleAttributeDelete(n,i),children:"Delete"})},{title:"Userguideline",key:"metadata",render:(t,i,n)=>(0,s.jsxs)("div",{children:[e.showViewOption(i)?(0,s.jsx)("div",{className:"view",onClick:()=>e.handleGuidelineAction(n,i,"view"),children:"View/"}):(0,s.jsx)("div",{className:"create",onClick:()=>e.handleGuidelineAction(n,i,"create"),children:"Create new/"}),(0,s.jsx)("div",{className:"select_from_existing",onClick:()=>e.handleGuidelineAction(n,i,"select_from_existing"),children:"Use existing"})]})}]},l=[{title:"Name",dataIndex:"name",key:"name"},{title:"Label",dataIndex:"label",key:"label"},{title:"Required",dataIndex:"required",key:"required",render:e=>e.toString()},{title:"Validation",dataIndex:"validation_required",key:"validation_required",render:e=>e.toString()},{title:"Multiple Required",dataIndex:"is_multiple_value_required",key:"is_multiple_value_required",render:e=>e.toString()},{title:"Type",dataIndex:"type",key:"type"},{title:"Internal",dataIndex:"is_internal",key:"is_internal",render:e=>e.toString()},{title:"Regex",dataIndex:"regex",key:"regex"},{title:"UserGuideline",dataIndex:"guideline",key:"guideline",render:(e,t)=>e?String(!!e):null!==t&&void 0!==t&&t.user_guideline_id?"true":"false"}]},70094:(e,t,i)=>{function n(e,t,i,s,o){e[t]===i?e[s]=o:e.child_questions[e.default_answer]?n(e.child_questions[e.default_answer],t,i,s,o):n(e.child_questions[Object.keys(e.child_questions)[0]],t,i,s,o)}function s(e){let t=[];for(const i in e){const n=e[i];let s;for(const e in n){const t=n[e];s=Object.keys(t).map((t=>({value:`${e}.${t}`,label:`${e}.${t}`})))}const o={label:i,options:s};t.push(o)}return t}i.d(t,{lW:()=>s,ys:()=>n})},25580:(e,t,i)=>{i.d(t,{E2:()=>p,Ef:()=>m,Fo:()=>a,My:()=>u,SY:()=>f,Ty:()=>r,Wd:()=>h,Xo:()=>o,dN:()=>d,mY:()=>c,nK:()=>l,qm:()=>g});var n=i(80878),s=i.n(n);const o=s().div`

  padding: 12px;
  .heading {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 6px;
  }
  .ant-steps {
    margin-bottom: 12px;
  }

`,a=(s().div`

`,s().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    text-decoration: underline;
  }
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
  }
  .edit {
    cursor: pointer;
    margin-right: 12px;
    border-right: 1px solid #a3a3a3;
    padding-right: 12px;
  }
  .delete {
    color: red;
    font-weight: 600;
    cursor: pointer;
  }
  .create,.view{
    color: green;
    font-weight: 600;
    cursor: pointer;
  }
  .select_from_existing{
    color: #1890ff;
    font-weight: 600;
    cursor: pointer;
  }
  .ant-row {
    margin-bottom: 8px;
  }
  .ant-btn {
    border-radius: 2px;
  }
`),r=s().div`
  .ant-progress {
    margin-bottom: 8px;
  }
`,l=s().div`
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
  }
  .delete {
    color: red;
    font-weight: 600;
    cursor: pointer;
  }
  .create,.view{
    color: green;
    font-weight: 600;
    cursor: pointer;
  }
  .select_from_existing{
    color: #1890ff;
    font-weight: 600;
    cursor: pointer;
  }
  .ant-btn {
    border-radius: 2px;
  }
  .select {
    width: 100px;
  }
  .ant-table {
    overflow: scroll;
  }
  .input-label {
    width: 160px;
  }
  .attribute-heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .attribute-select {
    width: 300px;
    padding-left: 12px;
  }
  .add-attribute-button {
    background-color: #13c2c2;
    color: #fff;
    margin-top: 4px;
    margin-left: 10px;
  }
  .attribute-row {
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 20px;
  }
  .attributee-col {
    margin-bottom: -5px;
  }
`,d=s().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }
  .description {
    margin-left: 8px;
    color: #a2a2a2;
  }
  .ant-btn {
    border-radius: 2px;
  }
`,c=s().div`

`,p=s().div`
  padding: 6px;
  .question-wrapper {
    margin-bottom: 20px;
  }
  .question {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 2px;
  }
  .description {
    margin-left: 8px;
    color: #808080;
    margin-bottom: 6px;
  }
  .response-heading {
    font-weight: 600;
    margin-right: 8px;
  }
  .input {
    margin-left: 16px;
  }
  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-end;
    margin-left: 0px;
  }
  .single-choice {
    display: flex;
    align-items: flex-end;
    margin-left: 0px;
  }
`,u=s().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    text-decoration: underline;
  }
  .review-container {
    padding: 6px;
    margin-bottom: 16px;
  }
  .review-row {
    margin-bottom: 6px;
    overflow-wrap: break-word;
  }
  .review-label {
    font-weight: 600;
  }
  .form-container {
    margin-bottom: 12px;
  }
  .form-heading {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
    text-decoration: underline;
  }
  .form-label {
    font-weight: 600;
  }
  .form-row {
    margin-bottom: 6px;
  }
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
    overflow: scroll;
  }
  .button {
    margin-top: 8px;
  }
`,h=(s().button``,s().div`
  .ant-radio-group {
    height:auto ;
  }

  .ant-radio-button-wrapper{
    height: auto;
  }
`,s().div`
  .ant-table-wrapper{
    zoom: 0.9;
  }
  .ant-dropdown-placement-bottomRight{
    top: 420px;
  }

  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
`),g=(s().div`

  display: flex;
  justify-content: space-between;
  .label{
    font-size: 20px;
  }

  img{
    height: 120px;
    width: 120px;
  }

`,s().div`
    display: flex;
    text-align: start;
    word-break: break-word;
    margin-top: 5px;
    div:nth-child(1){
      width: 100px
    }
    div:nth-child(2){
      width: calc(100% - 150px)
    }
    img{
      word-break: break-all;
    }
`),m=s().div`

    button{
      margin: 5px
    }

`,f=s().div`
    font-size: 11px;
    color: red;
    font-weight: 700;
    word-break: break-word;
`},78608:(e,t,i)=>{i.d(t,{A:()=>N});var n=i(1502),s=i(67816),o=i(24952),a=i(25580),r=i(26877),l=i(95916),d=i.n(l),c=i(86178),p=i.n(c),u=i(70094),h=i(70579);const{Option:g,OptGroup:m}=s.Select,f=function(e,t,i,n,o,a){let r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,x=arguments.length>10?arguments[10]:void 0,C=arguments.length>11?arguments[11]:void 0,_=arguments.length>12?arguments[12]:void 0;switch(i){case"boolean":return(0,h.jsx)(s.Radio.Group,{onChange:i=>e.handleInputChange(t,i.target.value),defaultValue:o,children:Object.keys(n).map((e=>(0,h.jsx)(s.Radio,{value:e,children:n[e]},e)))},t);case"integer":return(0,h.jsx)(s.InputNumber,{onBlur:i=>e.handleInputChange(t,i.target.value&&parseInt(i.target.value)),defaultValue:o,min:0},t);case"multiple-choice":return"service-center-selected"===a?(0,h.jsx)("div",{children:(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",disabled:!f,mode:"multiple",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o||[],onChange:i=>{i=(0,l.compact)(i),e.handleInputChange(t,i)},children:c.filter((e=>{let{is_active:t}=e;return!!t})).map((e=>{let{code:t,name:i}=e;return(0,h.jsx)(g,{value:t,children:i},t)}))},t)}):"web-hook-keys-from-policy"===a?(0,h.jsxs)("div",{children:[(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",disabled:!f,mode:"multiple",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o||[],onChange:i=>{i=(0,l.compact)(i),e.handleInputChange(t,i)},children:r.map((e=>(0,h.jsx)(g,{value:e,children:e},e)))},t),(0,h.jsx)(s.Checkbox,{onChange:i=>{i&&(e.toggleState("showPolicyWebhookList"),e.handleInputChange(t,[]))},value:!f,checked:!f,children:"No Policy Field to be selected"},t)]}):"web-hook-keys-from-claim"===a?(0,h.jsxs)("div",{children:[(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",mode:"multiple",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,disabled:!x,defaultValue:o||[],onChange:i=>e.handleInputChange(t,i),children:d.map((e=>{let{name:t,label:i}=e;return(0,h.jsx)(g,{value:t,children:i},t)}))},t),(0,h.jsx)(s.Checkbox,{onChange:i=>{i&&(e.toggleState("showClaimWebhookList"),e.handleInputChange(t,[]))},value:!x,checked:!x,children:"No Claims Field to be selected"},t)]}):(0,h.jsx)(s.Checkbox.Group,{onChange:i=>e.handleInputChange(t,i),defaultValue:o,children:Object.keys(n).map((e=>(0,h.jsx)(s.Checkbox,{value:e,children:n[e]},e)))},t);case"single-choice":if(["Y-percentage-of-X-field-from-policy-value","Y-percentage-of-X-price-field-from-policy"].includes(a)){if(["auto_approval"].includes(_)){const i=(0,u.lW)(C);return(0,h.jsx)(s.Select,{style:{width:300},filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,showSearch:!0,dropdownMatchSelectWidth:!1,onChange:i=>e.handleInputChange(t,i.join(",")),mode:"multiple",defaultValue:o&&"string"===typeof o&&o.split(",")||[],children:i.map((e=>(0,h.jsx)(m,{label:e.label,children:e.options.map((e=>{let{label:t,value:i}=e;return(0,h.jsx)(g,{value:i,children:t},t)}))},e.label)))})}return(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o,onChange:i=>e.handleInputChange(t,i),children:r.map((e=>(0,h.jsx)(g,{value:e,children:e},e)))},t)}if("Y-percentage-of-X-field-from-claim-value"===a||"X-field-from-claim-value"===a)return(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o,onChange:i=>e.handleInputChange(t,i),children:d.map((e=>{let{name:t,label:i}=e;return(0,h.jsx)(g,{value:t,children:i},t)}))},t);if("incident-date-key-selected"===a)return(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o,onChange:i=>e.handleInputChange(t,i),children:d.filter((e=>{let{type:t}=e;return"date"===t})).map((e=>{let{name:t,label:i}=e;return(0,h.jsx)(g,{value:t,children:i},t)}))},t);if(["claim-amount-x-percentage-of-policy-field","Y-range-of-X-price-field-from-policy"].includes(a)){if(["auto_approval"].includes(_)){const i=(0,u.lW)(C);return(0,h.jsx)(s.Select,{style:{width:300},showSearch:!0,dropdownMatchSelectWidth:!1,onChange:i=>e.handleInputChange(t,i.join(",")),mode:"multiple",optionFilterProp:"children",defaultValue:o&&"string"===typeof o&&o.split(",")||[],filterOption:(e,t)=>{const{children:i}=t.props;return t.type.isSelectOptGroup?i.includes((t=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0)):i.toLowerCase().indexOf(e.toLowerCase())>=0},children:i.map((e=>(0,h.jsx)(m,{label:e.label,children:e.options.map((e=>{let{label:t,value:i}=e;return(0,h.jsx)(g,{value:i,children:t},t)}))},e.label)))})}return(0,h.jsx)(s.Select,{showSearch:!0,style:{width:300},placeholder:"Select...",dropdownMatchSelectWidth:!1,optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,defaultValue:o,onChange:i=>e.handleInputChange(t,i),children:r.map((e=>(0,h.jsx)(g,{value:e,children:e},e)))},t)}return(0,h.jsx)(s.Radio.Group,{onChange:i=>e.handleInputChange(t,i.target.value),defaultValue:o,children:Object.keys(n).map((e=>(0,h.jsx)(s.Radio,{className:"single-choice",value:e,children:n[e]},e)))},t);case"date":return(0,h.jsx)(s.DatePicker,{onChange:i=>e.handleInputChange(t,new Date(p()(i).format("YYYY-MM-DD[T]HH:mm:ss"))),defaultValue:o?p()(p()(o).format("YYYY-MM-DD")):void 0},t);default:return(0,h.jsx)(s.Input,{onBlur:i=>e.handleInputChange(t,i.target.value),defaultValue:o},t)}},x=["a","b","c","d","e"];class C extends n.Component{constructor(e){var t;super(e),t=this,this.checkForChildQuestion=(e,t)=>{const{childQuestions:i}=this.state,{default_answer:n,possible_answers:s}=e;if(null!==n&&void 0!==n){Object.keys(e.child_questions||{}).includes(n)?(i.push(e.child_questions[n]),this.setState({childQuestions:i,showNextButton:!1}),this.checkForChildQuestion(e.child_questions[n],t+1)):0===Object.keys(s).length&&Object.keys(e.child_questions).length>0?(i.push(e.child_questions[Object.keys(e.child_questions)[0]]),this.setState({childQuestions:i,showNextButton:!1}),this.checkForChildQuestion(e.child_questions[Object.keys(e.child_questions)[0]],t+1)):(i.splice(t),this.setState({childQuestions:i,showNextButton:!0}))}},this.findAndReplaceKey=(e,t,i)=>{e.id===t?e.default_answer=i:e.child_questions[e.default_answer]?this.findAndReplaceKey(e.child_questions[e.default_answer],t,i):this.findAndReplaceKey(e.child_questions[Object.keys(e.child_questions)[0]],t,i)},this.handleInputChange=(e,t)=>{const{currentData:i,responsesProvided:n}=this.state;this.findAndReplaceKey(i,e,t),this.setState({responsesProvided:n,childQuestions:[]}),this.setState({currentData:i},(()=>this.checkForChildQuestion(i,0)))},this.toggleState=e=>{this.setState({[e]:!this.state[e]})},this.handleNext=()=>{const{currentData:e}=this.state;this.props.onHandleNext(e)},this.renderQuestion=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const{policyFieldList:n=[],claimFieldList:o=[],policyFormAttributeMultipleProduct:a,source:r,serviceCenterList:l}=t.props,{showPolicyWebhookList:d,showClaimWebhookList:c}=t.state,{id:p,label:u,name:g,description:m,answer_type:x,default_answer:C,possible_answers:_}=e;return(0,h.jsxs)("div",{className:"question-wrapper",children:[(0,h.jsxs)("div",{className:"question",children:["Question ",i,": ",u]}),(0,h.jsx)("div",{className:"description",children:m}),(0,h.jsxs)(s.Row,{type:"flex",className:"input",children:[(0,h.jsx)("div",{className:"response-heading",children:"Response: "}),f(t,p,x,_,C,g,n,o,l,d,c,a,r)]})]},p+u)},this.state={currentData:{},childQuestions:[],showNextButton:!1,responsesProvided:{},showPolicyWebhookList:!0,showClaimWebhookList:!0}}componentDidMount(){const{question:e}=this.props;this.setState({currentData:e,childQuestions:[]}),this.checkForChildQuestion(e,0)}UNSAFE_componentWillReceiveProps(e){const{question:t}=e,{currentData:i}=this.state;i.id!==t.id&&this.setState({currentData:t,childQuestions:[]},(()=>this.checkForChildQuestion(t,0)))}render(){const{lastQuestion:e,currentQuestion:t}=this.props,{currentData:i={},childQuestions:n,showNextButton:o}=this.state;return(0,h.jsxs)(a.E2,{children:[this.renderQuestion(i,t+1),n.length>0&&(0,h.jsx)(s.Divider,{}),n.map(((e,t)=>this.renderQuestion(e,x[t]))),(0,h.jsxs)(s.Row,{type:"flex",justify:"space-between",children:[(0,h.jsx)(s.Button,{disabled:"1"===i.us_id,onClick:this.props.onHandlePrevious,children:"Previous"}),(0,h.jsx)(s.Button,{type:"primary",disabled:!o,onClick:this.handleNext,children:e?"Review":"Next"})]})]})}}const _=C;var b=i(29308),v=i(96117),w=i(87291),y=i(88962);const{getServiceCenterList:S}=b.A,{getConfigTemplateValidation:j}=r.A,{resetLoadingRedux:I}=v.A,{resetErrorRedux:A}=w.A;class T extends n.Component{constructor(e){var t;super(e),t=this,this.getResponseKey=function(e,i){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name";return i[e[n]]=e.default_answer,0===Object.keys(e.possible_answers).length&&Object.keys(e.child_questions).length>0&&!e.child_questions[e.default_answer]?t.getResponseKey(e.child_questions[Object.keys(e.child_questions)[0]],i,n):0!==Object.keys(e.child_questions).length&&e.child_questions[e.default_answer]?void t.getResponseKey(e.child_questions[e.default_answer],i,n):i},this.handleNext=e=>{const{claimsConfigTemplatesDetails:t,benefitId:i,validationData:n,inprogressConfig:s,source:o,configDumpId:a}=this.props,{responsesProvided:r,currentQuestion:l}=this.state;r||(r[e.us_id]={});const d={};this.getResponseKey(e,d,"name"),r[e.us_id]=d,this.props.getConfigTemplateValidation({body:{responses_provided:r,current_pointer:l+1,template_id:t.template_id||s.template_id,template_version_id:t.template_version_id||s.template_version_id,benefit_id:["auto_approval","green_channel"].includes(o)?void 0:i,config_dump_id:n&&n.config_dump_id||s&&s.config_dump_id||a}}),this.setState({responsesProvided:r})},this.handlePrevious=()=>{const{currentQuestion:e,questions:t}=this.state;this.setState({currentQuestion:e-1});const i=t.length;this.props.handleProgressBar((e-1)/i*100)},this.handlePolicyAttributeList=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object.keys(e).forEach((s=>{if(["field_type","type"].includes(s))return;const o=i?[i,s].join("."):s;e[s].fields?t.handlePolicyAttributeList(e[s].fields,o,n):n.push(o)})),n},this.state={currentQuestion:0,questions:e.questions||[],responsesProvided:e.responsesProvided||{},questionnaireData:{}}}componentDidMount(){const{responsesProvided:e,configState:t,questionnaireData:i,questions:n}=this.props;if(this.setState({questions:n}),"INPROGRESS"===t){const t=Object.keys(e).length;this.setState({currentQuestion:t<n.length?t:n.length-1,questionnaireData:i,responsesProvided:i})}this.props.resetLoadingRedux(["GET_CONFIG_TEMPLATES_VALIDATIONS"]),this.props.resetErrorRedux(["GET_CONFIG_TEMPLATES_VALIDATIONS"]);const s=this.props.location.state||{},{benefitSource:o}=s;this.props.getServiceCenterList({source:o})}UNSAFE_componentWillReceiveProps(e){const{validationLoading:t,validationError:i,claimConfigDumpIdMessage:n,questionnaireData:o}=e,{currentQuestion:a,questions:r}=this.state;if(!1===t){if(i)s.notification.error({message:n});else{s.notification.success({message:"Response Validated"});const e=r.length;e===a+1?this.props.onHandleQuestionnaireSubmit(r):(this.props.onHandleProgressBar((a+1)/e*100),this.setState({questions:r,currentQuestion:a+1}))}this.props.resetLoadingRedux(["GET_CONFIG_TEMPLATES_VALIDATIONS"]),this.props.resetErrorRedux(["GET_CONFIG_TEMPLATES_VALIDATIONS"])}"INPROGRESS"===this.props.configState&&o&&!d().isEqual(o,this.state.questionnaireData)&&this.setState({questionnaireData:o,currentQuestion:Object.keys(o).length,responsesProvided:o})}render(){const{validationLoading:e,policyFormAttributes:t={},claimConfigData:i={},hideBackToFormButton:n,policyFormAttributeMultipleProduct:o,source:r,serviceCenterList:d}=this.props,{currentQuestion:c,questions:p=[]}=this.state;return(0,h.jsx)(a.mY,{children:(0,h.jsxs)(s.Spin,{spinning:!!e,children:[(0,h.jsx)(_,{question:p[c],lastQuestion:p.length===c+1,onHandleNext:this.handleNext,onHandlePrevious:this.handlePrevious,currentQuestion:c,serviceCenterList:d,policyFormAttributeMultipleProduct:o,policyFieldList:this.handlePolicyAttributeList((0,l.get)(t,"request",{}),"request"),claimFieldList:(0,l.get)(i,"selectedClaimsFormAttribute",[]),source:r},c),(0,h.jsx)(s.Divider,{}),n?null:(0,h.jsx)(s.Button,{type:"danger",onClick:this.props.onHandlePrevious,children:"Back (Add Form)"})]})})}}const k=(0,o.connect)((e=>({claimsConfigTemplatesDetails:e.Claims.claimsConfigTemplatesDetails,validationLoading:e.Loading.GET_CONFIG_TEMPLATES_VALIDATIONS,validationError:e.Error.GET_CONFIG_TEMPLATES_VALIDATIONS,validationData:e.Claims.claimConfigDumpId,claimConfigDumpIdMessage:e.Claims.claimConfigDumpIdMessage,policyFormAttributes:e.Claims.policyFormAttributes,claimConfigData:e.Claims.claimConfigData,policyFormAttributeMultipleProduct:e.Claims.policyFormAttributeMultipleProduct,serviceCenterList:e.ServiceCenter.serviceCenterList})),{getConfigTemplateValidation:j,getServiceCenterList:S,resetLoadingRedux:I,resetErrorRedux:A})((0,y.withRouter)(T)),{getConfigTemplateDetails:L,getConfigTemplateSubmit:D}=r.A;class E extends n.Component{constructor(e){super(e),this.handleInprogress=()=>{const{responsesProvided:e,questions:t}=this.props,i=Object.keys(e).length/t.length*100;this.handleProgressBar(i)},this.findAndReplaceKey=(e,t,i)=>{e.name===t?e.default_answer=i:this.findAndReplaceKey(e.child_questions[e.default_answer],t,i)},this.handleProgressBar=e=>{this.setState({percent:parseFloat(e).toFixed(2)})},this.handleQuestionnaireSubmit=e=>{this.setState({questionnaireData:e}),this.props.saveQuestionnaireData(e),this.props.handleNext()},this.state={percent:0,questionnaireData:this.props.responsesProvided||{},inprogess:{},editData:{},configState:"",responsesProvided:this.props.responsesProvided||{},questions:this.props.questions||[]}}componentDidMount(){const{configState:e}=this.props;"INPROGRESS"===e&&this.handleInprogress()}render(){const{benefitId:e,configData:t,questions:i=[],inprogess:n,responsesProvided:o,configState:r,inprogressConfig:l,source:d,configDumpId:c}=this.props,{percent:p,questionnaireData:u}=this.state;return(0,h.jsxs)(a.Ty,{children:[(0,h.jsx)(s.Progress,{percent:p}),(0,h.jsx)(k,{questions:i,onHandleProgressBar:this.handleProgressBar,onHandleQuestionnaireSubmit:this.handleQuestionnaireSubmit,benefitId:e,configData:t,questionnaireData:u,responsesProvided:o,id:655,inprogessData:n,configState:r,inprogressConfig:l,onHandlePrevious:this.props.handlePrevious,source:d,configDumpId:c,hideBackToFormButton:!0})]})}}const N=(0,o.connect)((e=>({claimsConfigTemplatesDetails:e.Claims.claimsConfigTemplatesDetails})),{getConfigTemplateDetails:L,getConfigTemplateSubmit:D})(E)},98711:(e,t,i)=>{i.d(t,{A:()=>T});var n=i(1502),s=i(95916),o=i.n(s),a=i(24952),r=i(88962),l=i(67816),d=i(25580),c=i(26877),p=i(96117),u=i(87291),h=i(91155),g=i(86178),m=i.n(g),f=i(38094),x=i.n(f),C=i(70579);const{getConfigTemplateSubmit:_,updateConfig:b,resetConfigDumpId:v,submitAutoApprovalConfig:w,resetReduxStateClaim:y}=c.A,{resetLoadingRedux:S}=p.A,{resetErrorRedux:j}=u.A,I=e=>Array.isArray(e)?e.join(","):"number"===typeof e?e:m().isDate(e)?m()(e).format("YYYY-MM-DD"):e.endsWith(".000Z")?e.substring(0,10):e;class A extends n.Component{constructor(e){var t;super(e),t=this,this.handleConfigData=e=>{let t=[];e.forEach((e=>{const{id:i,label:n,default_answer:s,child_questions:o}=e;t[i]={ques:n,ans:s,id:i},t=this.updateChildResponse(t,o,e)})),this.setState({configData:t.filter((e=>!!e)),data:e})},this.updateChildResponse=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!i||!Object.keys(i).length)return e;if(!Object.hasOwn(i,n.default_answer))return e;const{default_answer:s,id:o,child_questions:a,label:r}=i[n.default_answer];return null!==s&&void 0!==s&&""!==s&&n.default_answer&&(e[o]={ques:r,ans:s,id:o},e=t.updateChildResponse(e,a,i[n.default_answer])),e},this.getResponseKey=function(e,i){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";return m().isMoment(e.default_answer)&&(e.default_answer=m()(e.default_answer).format("YYYY-MM-DD")),i[e[n]]=e.default_answer,0===Object.keys(e.possible_answers).length&&Object.keys(e.child_questions).length>0&&!e.child_questions[e.default_answer]?t.getResponseKey(e.child_questions[Object.keys(e.child_questions)[0]],i,n):0!==Object.keys(e.child_questions).length&&e.child_questions[e.default_answer]?void t.getResponseKey(e.child_questions[e.default_answer],i,n):i},this.handleSubmit=()=>{const{validationData:e,configSlug:t,inprogressConfig:i,source:n,partnerProductKey:s,submitAutoApprovalConfig:o,providerId:a,autoApprovalConfigId:r,benefitId:l,packageList:d}=this.props;if(["auto_approval","green_channel"].includes(n)){const t=[];for(const e in d){const i=d[e].map((e=>null===e||void 0===e?void 0:e.package_code));t.push(...i)}const i={provider_id:a.code,partner_product_key:s&&s.map((e=>`${e.partner}-${e.name}`)),product_keys:s&&s.map((e=>e.name)),packages:t,config_dump_id:e.config_dump_id||null,benefits:l.map((e=>e.id))};if("auto_approval"===n)i.auto_approval_config_id=r||null,o(i,n);else if("green_channel"===n){const{search:e}=this.props.history.location||{},t=x().parse(e)||{},{configId:s}=t;i.custom_claim_flow_config_id=Number(s),i.source=n,o(i,n)}}else t?this.props.updateConfig({body:{config_slug:t,last_updated_source:"control-panel"}}):this.props.getConfigTemplateSubmit({body:{config_dump_id:e&&e.config_dump_id||i&&i.config_dump_id,last_updated_source:"control-panel"}})},this.renderRow=(e,t)=>(0,C.jsxs)(l.Row,{className:"form-row",children:[(0,C.jsx)(l.Col,{span:8,className:"form-label",children:e}),(0,C.jsx)(l.Col,{span:16,children:t})]}),this.state={configData:[],data:void 0}}componentDidMount(){const{configData:e}=this.props;this.handleConfigData(e),this.props.resetLoadingRedux(["GET_CLAIM_CONFIG_TEMPLATE_SUBMIT"]),this.props.resetErrorRedux(["GET_CLAIM_CONFIG_TEMPLATE_SUBMIT"]),this.props.resetLoadingRedux(["SUBMIT_AUTO_APPROVAL_CONFIG"]),this.props.resetErrorRedux(["SUBMIT_AUTO_APPROVAL_CONFIG"])}UNSAFE_componentWillReceiveProps(e){const{submitConfigLoading:t,submitConfigError:i,submitClaimConfigStatus:n,updateConfigLoading:s,updateConfigError:a,updateConfigStatus:r,source:d,submitAutoApprovalConfigStatus:c,submitAutoApprovalConfigError:p,submitAutoApprovalConfigLoading:u,resetReduxStateClaim:h,configData:g}=e;var m,f;["auto_approval","green_channel"].includes(d)?!1===u&&(l.notification[p?"error":"success"]({message:c}),!1===p&&(this.props.resetConfigDumpId(),h(["validationData"]),(null===(m=this.props)||void 0===m||null===(f=m.history)||void 0===f?void 0:f.push)&&("auto_approval"===d?this.props.history.push("/claims/instant-claim-configuration"):this.props.history.push("/claims/green-channel-config")))):(!1===t&&(l.notification[i?"error":"success"]({message:n}),!1===i&&(this.props.resetConfigDumpId(),this.props.history.goBack()),this.props.resetLoadingRedux(["GET_CLAIM_CONFIG_TEMPLATE_SUBMIT"]),this.props.resetErrorRedux(["GET_CLAIM_CONFIG_TEMPLATE_SUBMIT"])),!1===s&&(l.notification[a?"error":"success"]({message:r}),!1===a&&(this.props.resetConfigDumpId(),this.props.history.goBack()),this.props.resetLoadingRedux(["UPDATE_CONFIG"]),this.props.resetErrorRedux(["UPDATE_CONFIG"])),o().isEqual(g,this.state.data)||(this.setState({data:g}),this.handleConfigData(g)))}render(){const{formData:e=[],submitConfigLoading:t,submitAutoApprovalConfigLoading:i}=this.props,{configData:n=[]}=this.state;return(0,C.jsx)(d.My,{children:(0,C.jsxs)(l.Spin,{spinning:!(!t&&!i),children:[(0,C.jsx)("div",{className:"heading",children:"Responses"}),e.length?(0,C.jsxs)(l.Card,{className:"form-container",children:[(0,C.jsx)("div",{className:"form-heading",children:"FORMS"}),e.map(((e,t)=>(0,C.jsxs)("div",{children:[this.renderRow("Title",e.title),this.renderRow("Description",e.description),(0,C.jsx)(l.Table,{dataSource:e.attributes,columns:h.uv,pagination:!1,rowKey:"master_attribute_id"}),(0,C.jsx)(l.Divider,{})]},t)))]}):null,(0,C.jsx)("div",{className:"form-heading",children:"QUESTIONNAIRE"}),(0,C.jsx)("div",{className:"review-container",children:n.map(((e,t)=>{let{ques:i,ans:n,id:s}=e;return(0,C.jsxs)(l.Row,{className:"review-row",children:[(0,C.jsx)(l.Col,{span:20,className:"review-label",children:i}),(0,C.jsx)(l.Col,{span:4,className:"review-value",children:I(n)})]},s)}))}),(0,C.jsxs)(l.Row,{type:"flex",justify:"space-between",className:"button",children:[(0,C.jsx)(l.Button,{type:"danger",onClick:this.props.handlePrevious,children:"Back (Questionnaire)"}),(0,C.jsx)(l.Button,{type:"primary",onClick:this.handleSubmit,children:"Submit"})]})]})})}}const T=(0,a.connect)((e=>({validationData:e.Claims.claimConfigDumpId,submitConfigLoading:e.Loading.GET_CLAIM_CONFIG_TEMPLATE_SUBMIT,submitConfigError:e.Error.GET_CLAIM_CONFIG_TEMPLATE_SUBMIT,submitClaimConfigStatus:e.Claims.submitClaimConfigStatus,updateConfigLoading:e.Loading.UPDATE_CONFIG,updateConfigError:e.Error.UPDATE_CONFIG,updateConfigStatus:e.Claims.updateConfigStatus,submitAutoApprovalConfigLoading:e.Loading.SUBMIT_AUTO_APPROVAL_CONFIG,submitAutoApprovalConfigError:e.Error.SUBMIT_AUTO_APPROVAL_CONFIG,submitAutoApprovalConfigStatus:e.Claims.submitAutoApprovalConfigStatus,packageList:e.Claims.packageListOnMultipleProduct})),{getConfigTemplateSubmit:_,resetLoadingRedux:S,resetErrorRedux:j,updateConfig:b,resetConfigDumpId:v,submitAutoApprovalConfig:w,resetReduxStateClaim:y})((0,r.withRouter)(A))}}]);
//# sourceMappingURL=5781.7d667638.chunk.js.map