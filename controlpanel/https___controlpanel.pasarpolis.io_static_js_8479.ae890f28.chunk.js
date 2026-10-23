"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8479],{42164:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(67816);const s=a.Popconfirm},63995:(e,t,r)=>{r.d(t,{A:()=>v});var a=r(1502),s=r.n(a),n=r(8568),i=r(41528),o=r(67816),l=r(70579);class d extends s().Component{constructor(){super(...arguments),this.handleChangeField=e=>{const{value:t}=e.target;(/^[0-9]{1,2}[-]?\d*$/.test(t)||""===t)&&this.props.onChange(e)}}render(){return(0,l.jsx)(o.Input,{...this.props,onChange:this.handleChangeField})}}const c=d;var p=r(80878),h=r.n(p),u=r(34618),x=r(67050);const m=h().div`
  padding: 20px;
  display: flex;
  border: 1px solid ${e=>e.theme.borderGrey};
  ${(0,x.MS)("0 1px 6px rgba(0,0,0,0.2)")};

  .ant-input {
    font-size: 14px;
    font-weight: 400;
    color: ${(0,u.palette)("text",3)};
    line-height: inherit;
    height: 36px;
    width: 100%;
    padding: 0 15px;
    margin: 0;
    border: 1px solid ${(0,u.palette)("secondary",7)};
    outline: 0 !important;
    overflow: hidden;
    background-color: #ffffff;
    ${(0,x.Vq)("3px 0 0 3px")};
    ${(0,x.kY)()};
    ${(0,x.MS)("none")};

    &:focus,
    &:hover {
      border-color: ${(0,u.palette)("secondary",7)};
      ${(0,x.MS)("none")};
    }

    &::-webkit-input-placeholder {
      color: ${(0,u.palette)("grayscale",0)};
    }

    &:-moz-placeholder {
      color: ${(0,u.palette)("grayscale",0)};
    }

    &::-moz-placeholder {
      color: ${(0,u.palette)("grayscale",0)};
    }
    &:-ms-input-placeholder {
      color: ${(0,u.palette)("grayscale",0)};
    }
  }

  .ant-btn {
    font-size: 12px;
    font-weight: 400;
    padding: 0;
    text-transform: uppercase;
    color: #ffffff;
    background-color: ${(0,u.palette)("primary",0)};
    border: 0;
    outline: 0;
    height: 36px;
    padding: 0 15px;
    margin-left: -1px;
    cursor: pointer;
    border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
    ${(0,x.kY)()};
    
    &:hover {
      background-color: ${(0,u.palette)("primary",1)};
    }
  }
`;class f extends a.Component{render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a,invalid:s,className:o=""}=this.props;return(0,l.jsxs)(m,{className:o,children:["mobileNo"===r?(0,l.jsx)(c,{id:r,placeholder:"Search...",value:a,onChange:e,onPressEnter:t,style:{border:s?"1px solid red":""}}):(0,l.jsx)(n.Ay,{id:r,placeholder:"Search...",value:""!==a?a:"",onChange:e,onPressEnter:t,style:{border:s?"1px solid red":""}}),(0,l.jsx)(i.A,{style:{border:s?"1px solid red":""},type:"primary",onClick:t,disabled:s||!a,children:"Search"})]})}}const v=f},98479:(e,t,r)=>{r.d(t,{_Q:()=>U,QD:()=>O,ZY:()=>o.A,v8:()=>c,C0:()=>W,Jt:()=>j,Y2:()=>R,Ib:()=>v,TW:()=>k});var a=r(1502),s=r(70579);a.Component;r(42164);var n=r(8568),i=r(67816);a.Component;var o=r(63995),l=r(41528);class d extends a.Component{render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a,invalid:i}=this.props;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"isoTableSearchBox",children:[(0,s.jsx)(n.Ay,{id:r,placeholder:"Search ...",value:""!==a?a:"",onChange:e,onPressEnter:t,style:{border:i?"1px solid red":""}}),(0,s.jsx)(l.A,{style:{border:i?"1px solid red":""},type:"primary",onClick:t,disabled:i||!a,children:"Search"})]}),i&&(0,s.jsx)("div",{className:"errorSearchBoxText",children:"Invalid phone number, format: XX-XXXXXX/[Country code]-[Phone no]"})]})}}const c=d;var p=r(24952),h=r(80878),u=r.n(h),x=r(34618);const m=u().div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 200px;
  background: #ffffff;
  border: 1px solid ${(0,x.palette)("border",0)};
`;class f extends a.PureComponent{constructor(){super(...arguments),this.renderPartners=e=>e.map((e=>(0,s.jsx)("option",{value:e.code,children:e.name},e.code)))}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,partners:a,searchText:n,isClear:i,placeholder:o}=this.props;let d="Select Partner...";return o&&(d=o),(0,s.jsxs)(m,{children:[(0,s.jsxs)("select",{id:r,onChange:e,value:i?"":n,style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:d}),void 0!==a&&this.renderPartners(a)]}),(0,s.jsx)(l.A,{type:"primary",onClick:t,disabled:void 0===n||""===n,style:{marginTop:"10px"},children:"Search"})]})}}const v=(0,p.connect)((e=>({dataPartner:e.Insurance.partners})),{})(f);var g=r(67050);const y=u().div`
  padding:20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${e=>e.theme.borderGrey};
  ${(0,g.MS)("0 1px 6px rgba(0,0,0,0.2)")};
  .productSearch {
    width:300px;
  }
  .submit-button {
    width: auto;
    margin-top:10px
  }
  .submit-button-wrapper {
    display: flex;
    justify-content: center;
  }
`;var b=r(95916);const{Option:S}=i.Select;class D extends a.Component{constructor(){super(...arguments),this.renderProducts=(e,t)=>{switch(t){case"normal":return e.map(((e,t)=>(0,s.jsx)(S,{value:e.value,children:e.text},t)));case"policy-list":return e.map(((e,t)=>(0,s.jsx)(S,{value:e.id,children:e.display_name},t)));default:return null}},this.defaultValueSelection=(e,t,r)=>{switch(t){case"normal":return e.find((e=>e.value===r))||{};case"policy-list":return e.find((e=>e.id===r))||{};default:return null}},this.defaultValueData=(e,t)=>{if((0,b.size)(e)>0){const r="Select Product...";switch(t){case"normal":return e.text||r;case"policy-list":return e.display_name||r;default:return null}}}}render(){let{onInputChange:e,onSearch:t,idIdentifier:r,className:a="",type:n="normal",selectData:o,enableButton:d,searchText:c=""}=this.props;const p=this.defaultValueSelection(o,n,c);return(0,s.jsxs)(y,{className:a,children:[(0,s.jsx)(i.Select,{showSearch:!0,defaultValue:this.defaultValueData(p,n),className:"productSearch",id:r,onChange:e,filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:o.length>0&&this.renderProducts(o,n)}),(0,s.jsx)("div",{className:"submit-button-wrapper",children:(0,s.jsx)(l.A,{className:"submit-button",type:"primary",onClick:t,disabled:void 0===d||!d,children:"Search"})})]})}}const j=D,C=u().div`
  .outerClass {
    display:flex;
    flex-direction:column;
    width:200px;
  }
  .selectField {
    width:155px;
  }
  .buttonField {
    margin-top:10px;
  }
`;class w extends a.PureComponent{constructor(){super(...arguments),this.renderProducts=e=>{const{dataKey:t="display_name"}=this.props;return e.map((e=>(0,s.jsx)("option",{value:e.id,children:e[t]},e[t])))},this.renderUserProducts=()=>{const{userProducts:e}=this.props;return e.map((e=>(0,s.jsx)("option",{value:e,children:e},e)))}}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,dataProducts:a,searchText:n,isClear:i,products:o,userProducts:d,component:c}=this.props;let p=a;return"event"===c&&(p=o.products||[]),(0,s.jsx)(C,{children:(0,s.jsxs)("div",{className:"isoTableSearchBox outerClass",children:[(0,s.jsxs)("select",{className:"selectField",id:r,onChange:e,value:n||!i?n:"",children:[(0,s.jsx)("option",{value:"",children:"Select product ..."}),d.length>0?this.renderUserProducts():p&&this.renderProducts(p)]}),(0,s.jsx)(l.A,{className:"buttonField",type:"primary",onClick:t,disabled:void 0===n||""===n,children:"Search"})]})})}}const k=(0,p.connect)((e=>({userProducts:e.Auth.product})))(w);class T extends a.PureComponent{constructor(){super(...arguments),this.state={},this.renderTriggers=e=>e.map((e=>(0,s.jsx)("option",{value:e.name,children:e.name},e.id)))}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a,isClear:n}=this.props,{masterData:i}=this.props;return(0,s.jsxs)("div",{className:"isoTableSearchBox",style:{display:"flex",flexDirection:"column",width:"200px"},children:[(0,s.jsxs)("select",{id:r,onChange:e,value:n?"":a,style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:"Select event ..."}),void 0!==i.trigger_types&&this.renderTriggers(i.trigger_types)]}),(0,s.jsx)(l.A,{type:"primary",onClick:t,disabled:void 0===a||""===a,style:{marginTop:"10px"},children:"Search"})]})}}(0,p.connect)((e=>({masterData:e.Notifications.masterData})),{})(T);class P extends a.PureComponent{constructor(){super(...arguments),this.state={},this.renderTriggers=e=>e.map((e=>(0,s.jsx)("option",{value:e.code,children:e.code},e.id)))}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a,isClear:n}=this.props,{dataTemplates:i}=this.props;return(0,s.jsxs)("div",{className:"isoTableSearchBox",style:{display:"flex",flexDirection:"column",width:"200px"},children:[(0,s.jsxs)("select",{id:r,onChange:e,value:n?"":a,style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:"Select event ..."}),void 0!==i&&this.renderTriggers(i)]}),(0,s.jsx)(l.A,{type:"primary",onClick:t,disabled:void 0===a||""===a,style:{marginTop:"10px"},children:"Search"})]})}}(0,p.connect)((e=>({dataTemplates:e.Notifications.dataTemplates})),{})(P);class $ extends a.PureComponent{constructor(){super(...arguments),this.state={},this.renderTriggers=e=>e.map((e=>(0,s.jsx)("option",{value:e.name,children:e.name},e.name)))}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a,isClear:n}=this.props,{dataActionGroup:i}=this.props;return(0,s.jsxs)("div",{className:"isoTableSearchBox",style:{display:"flex",flexDirection:"column",width:"200px"},children:[(0,s.jsxs)("select",{id:r,onChange:e,value:n?"":a,style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:"Select action ..."}),void 0!==i&&this.renderTriggers(i)]}),(0,s.jsx)(l.A,{type:"primary",onClick:t,disabled:void 0===a||""===a,style:{marginTop:"10px"},children:"Search"})]})}}(0,p.connect)((e=>({dataActionGroup:e.Notifications.dataActionGroup})),{})($);var N=r(53246),A=r(86178),I=r.n(A),E=r(14634),Y=r(36422),B=r.n(Y),F=r(27012),M=r.n(F);const _=u().div`
  padding: 20px;
  display: flex;



  input {
    font-size: 14px;
    font-weight: 400;
    color: ${(0,x.palette)("text",3)};
    line-height: inherit;
    height: 36px;
    width: 100%;
    padding: 0 15px;
    margin: 0;
    border: 1px solid ${(0,x.palette)("secondary",7)};
    outline: 0 !important;
    overflow: hidden;
    background-color: #ffffff;
    ${(0,g.Vq)("3px 0 0 3px")};
    ${(0,g.kY)()};
    ${(0,g.MS)("none")};

    &:focus,
    &:hover {
      border-color: ${(0,x.palette)("secondary",7)};
      ${(0,g.MS)("none")};
    }

    &::-webkit-input-placeholder {
      color: ${(0,x.palette)("grayscale",0)};
    }

    &:-moz-placeholder {
      color: ${(0,x.palette)("grayscale",0)};
    }

    &::-moz-placeholder {
      color: ${(0,x.palette)("grayscale",0)};
    }
    &:-ms-input-placeholder {
      color: ${(0,x.palette)("grayscale",0)};
    }
  }

  .ant-btn {
    font-size: 12px;
    font-weight: 400;
    padding: 0;
    text-transform: uppercase;
    color: #ffffff;
    background-color: ${(0,x.palette)("primary",0)};
    border: 0;
    outline: 0;
    height: 36px;
    padding: 0 15px;
    margin-left: -1px;
    cursor: pointer;
    border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
    ${(0,g.kY)()};
    
    &:hover {
      background-color: ${(0,x.palette)("primary",1)};
    }
  }
  .dateRangeError{
    color:red;
  }

`;function z(e,t,r){const a=M()(e,t,{locale:r});if(N.DateUtils.isDate(a))return a}function V(e,t,r){return B()(e,t,{locale:r})}class X extends a.PureComponent{constructor(){super(...arguments),this.state={minDate:I()().subtract(100,"years").toDate(),maxDate:I()().toDate(),startDate:"",endDate:"",blockStart:"",blockEnd:new Date,difference:!1,diffDays:"",dateError:!1,daypickerKey:0},this.handleChangeStart=e=>{const t=I()(e).format("YYYY-MM-DD");this.setState({startDate:t})},this.handleChangeEnd=e=>{const t=I()(e).format("YYYY-MM-DD");this.setState({endDate:t})}}UNSAFE_componentWillReceiveProps(e){e.isClear&&this.setState({startDate:"",endDate:"",daypickerKey:this.state.daypickerKey+1})}render(){const{onSearch:e,idIdentifier:t,startDate:r,endDate:a,buttonName:n="Search"}=this.props,i="YYYY-MM-DD",o=I()(""===this.state.startDate?r:this.state.startDate);return I()(""===this.state.endDate?a:this.state.endDate).diff(o,"days")>60&&"downloadExcel"===t?this.setState({difference:!0}):this.setState({difference:!1}),""!==this.state.startDate&&""!==this.state.endDate&&this.state.startDate>this.state.endDate?this.setState({dateError:!0}):this.setState({dateError:!1}),"createdAt"===t&&this.setState({difference:!1}),(0,s.jsxs)(_,{className:"isoTableSearchBox",style:{display:"flex",flexDirection:"column"},children:[(0,s.jsxs)("div",{children:[this.state.difference&&"downloadExcel"===t&&(0,s.jsx)("div",{className:"dateRangeError",children:"Please select a range within 60 days"}),this.state.dateError&&(0,s.jsx)("div",{className:"dateRangeError",children:"Please select a Valid date Range"}),(0,s.jsx)("label",{htmlFor:"startDate",children:"Start"}),(0,s.jsx)("div",{children:(0,s.jsx)(E.default,{id:t,formatDate:V,format:i,parseDate:z,placeholder:i,onDayChange:this.handleChangeStart,value:""!==r?r:""!==!!this.state.startDate?!!this.state.startDate:"",min:this.state.minDate,max:this.state.maxDate,dayPickerProps:{disabledDays:{before:this.state.blockStart,after:this.state.blockEnd}}},this.state.daypickerKey)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"endDate",children:"End"}),(0,s.jsx)("div",{children:(0,s.jsx)(E.default,{id:t,formatDate:V,format:i,parseDate:z,placeholder:i,onDayChange:this.handleChangeEnd,value:""!==a?a:""!==this.state.endDate?this.state.endDate:"",min:this.state.minDate,max:this.state.maxDate,dayPickerProps:{disabledDays:{after:new Date}}},this.state.daypickerKey)})]}),(0,s.jsx)(l.A,{type:"primary",style:{marginTop:"10px"},onClick:()=>{e(this.state)},disabled:(void 0===r||void 0===a)&&(""===this.state.startDate||""===this.state.endDate)||this.state.difference||this.state.dateError,children:n})]})}}const O=X;class K extends a.PureComponent{constructor(){super(...arguments),this.state={},this.renderStatus=e=>e.map((e=>(0,s.jsx)("option",{value:e,children:e},e)))}render(){const{onInputChange:e,onSearch:t,idIdentifier:r,searchText:a}=this.props,{dataAllClaims:n}=this.props.Shipping;let i=[];if(void 0!==n){const e=n.map((e=>e.status));i=Array.from(new Set(e))}return(0,s.jsxs)("div",{className:"isoTableSearchBox",style:{display:"flex",flexDirection:"column",width:"200px"},children:[(0,s.jsxs)("select",{id:r,onChange:e,value:a,style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:"Select status ..."}),this.renderStatus(i)]}),(0,s.jsx)(l.A,{type:"primary",onClick:t,disabled:void 0===a||""===a,style:{marginTop:"10px"},children:"Search"})]})}}(0,p.connect)((e=>({Shipping:e.Shipping})),{})(K);const G=u().div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
  background-color: ${e=>e.theme.white};
  border: 1px solid #e9e9e9;
`,R=(0,p.connect)()((e=>{let{onInputChange:t,onSearch:r,idIdentifier:a,searchText:n,optionData:i,placeholder:o,renderOption:d,isProduct:c}=e;return(0,s.jsxs)(G,{className:"isoTableSearchBox",children:[(0,s.jsxs)("select",{id:a,onChange:t,value:n||"",style:{width:"155px"},children:[(0,s.jsx)("option",{value:"",children:o||"Select ..."}),d?d(i):((e,t)=>t?e.map((e=>(0,s.jsx)("option",{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.display_name},null===e||void 0===e?void 0:e.id))):e.map((e=>(0,s.jsx)("option",{value:(null===e||void 0===e?void 0:e.value)||e,children:(null===e||void 0===e?void 0:e.name)||e},(null===e||void 0===e?void 0:e.name)||e))))(i,c)]}),(0,s.jsx)(l.A,{type:"primary",onClick:r,disabled:void 0===n||""===n,style:{marginTop:"10px"},children:"Search"})]})}));class L extends a.PureComponent{constructor(){super(...arguments),this.state={startDate:"",endDate:""},this.disabledStartDate=e=>{const{endDate:t}=this.state;return e.isAfter(t,"day")||e.isAfter(I()(),"day")},this.disabledEndDate=e=>{const{startDate:t}=this.state;return e.isBefore(t,"day")||e.isAfter(I()(),"day")}}render(){const{onSearch:e,startDate:t,endDate:r}=this.props;return(0,s.jsxs)("div",{className:"isoTableSearchBox flex-column",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"startDate",children:"Start"}),(0,s.jsx)("div",{children:(0,s.jsx)(i.DatePicker,{onChange:(e,t)=>{this.setState({startDate:t})},disabledDate:e=>this.disabledStartDate(e)})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"endDate",children:"End"}),(0,s.jsx)("div",{children:(0,s.jsx)(i.DatePicker,{className:"range-end",onChange:(e,t)=>{this.setState({endDate:t})},disabledDate:e=>this.disabledEndDate(e)})})]}),(0,s.jsx)(l.A,{type:"primary",className:"margin-top",onClick:()=>{e(this.state)},disabled:(!t||!r)&&(""===this.state.startDate||""===this.state.endDate),children:"Search"})]})}}const U=L,q=u().div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  background-color: ${e=>e.theme.white};
  border: 1px solid #e9e9e9;

  .ant-select-selection-selected-value{
    width: 100%;
  }

  .ant-select-selection__rendered{
    position: relative;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-select-selection-selected-value{
    margin-left: 7px;
  }
`,{Option:Q}=i.Select,W=(0,p.connect)()((e=>{let{onInputChange:t,onSearch:r,idIdentifier:a,searchText:n,optionData:o,placeholder:d,isProduct:c}=e;return(0,s.jsxs)(q,{className:"isoTableSearchBox",children:[(0,s.jsx)(i.Select,{showSearch:!0,placeholder:d,id:a,onChange:t,value:n||"",filterOption:(e,t)=>{var r,a;return(null===t||void 0===t||null===(r=t.props)||void 0===r||null===(a=r.children)||void 0===a?void 0:a.toLowerCase().indexOf(e.toLowerCase()))>=0},children:(e=>c?e.map((e=>(0,s.jsx)(Q,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.display_name},null===e||void 0===e?void 0:e.id))):e.map(((e,t)=>(0,s.jsx)(Q,{value:e,children:e},t))))(o)}),(0,s.jsx)(l.A,{type:"primary",onClick:r,disabled:void 0===n||""===n,style:{marginTop:"10px"},children:"Search"})]})}))}}]);
//# sourceMappingURL=8479.ae890f28.chunk.js.map