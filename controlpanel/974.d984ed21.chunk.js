"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[974],{51934:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(1502),o=a.n(r),l=a(24952),n=a(67816),s=a(79209),i=a(22079),d=a(52276),p=a(70579);const{resetReduxStateRecon:c,addFrequencyTrigger:h}=s.A,g=n.Form.Item,u=n.Select.Option;let m=1;class b extends o().Component{constructor(){super(...arguments),this.state={regex:"",invalidMessage:"",selectorValues:"",selectionOperator:""},this.onSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return void this.setState({submitting:!1});let t=this.props.form.getFieldsValue(),a=[];t.names.map((e=>(a=[...a,[e]],a))),setTimeout((()=>{this.setState({submitting:!1}),"inlot"===t.op||"ninlot"===t.op?this.props.addRule({op:t.op,var:t.var.replace(/, /g,","),val:a}):this.props.addRule({op:t.op,var:t.var.replace(/, /g,","),val:t.val}),this.props.form.resetFields()}),1e3)},this.handleCancel=()=>{this.props.onCloseModal()},this.onChangeSelector=e=>{this.setState({selectorValues:e.target.value})},this.remove=e=>{const{form:t}=this.props,a=t.getFieldValue("keys");1!==a.length&&t.setFieldsValue({keys:a.filter((t=>t!==e))})},this.add=()=>{const{form:e}=this.props,t=e.getFieldValue("keys").concat(m++);e.setFieldsValue({keys:t})},this.validateName=(e,t,a)=>{/^([a-zA-Z ']){2,100}$/.test(t)?a():/^([a-zA-Z ']){0,1}$/.test(t)||/^([a-zA-Z ']){101,1000}$/.test(t)?a("Character length should be 2-100"):a("Should be alphabet and or space")},this.checkValue=(e,t,a)=>{new RegExp(e.regex,"g").test(t)?a():a(this.state.invalidMessage)},this.onChangeOperator=e=>{const t=i.A.filter((t=>t.op===e));this.setState({selectionOperator:e,regex:t[0].regex,invalidMessage:t[0].invalidMessage})}}async validateForm(){const{selectionOperator:e}=this.state;return new Promise((t=>{let a="inlot"===e||"ninlot"===e?["names","keys","var","op"]:["val","var","op"];this.props.form.validateFields(a,(e=>{t(!e)}))}))}render(){const{isOpen:e,form:t}=this.props,{selectorValues:a,selectionOperator:r}=this.state,{getFieldDecorator:o,getFieldValue:l}=t;o("keys",{initialValue:[0]});const s=l("keys"),c=s.map((e=>(0,p.jsxs)(n.Form.Item,{required:!1,children:[o(`names[${e}]`,{rules:[{required:!0},{validator:(e,t,r)=>(0,d.cm)(e,t,r,a)}]})((0,p.jsx)(n.Select,{mode:"tags",style:{width:"95%"},tokenSeparators:[","]})),s.length>1?(0,p.jsx)(n.Icon,{className:"dynamic-delete-button",type:"minus-circle-o",onClick:()=>this.remove(e)}):null]},e)));return(0,p.jsxs)(n.Modal,{title:"Add rule",visible:e,footer:[],closable:!1,maskClosable:!1,onCancel:this.handleCancel,children:[void 0!==alert.error&&(0,p.jsx)(n.Row,{style:{marginBottom:"10px"},children:(0,p.jsx)(n.Col,{children:(0,p.jsx)(n.Alert,{message:alert.error,type:"error",closable:!0,onClose:this.onCloseAlert})})}),(0,p.jsxs)(n.Form,{onSubmit:this.onSubmit,children:[(0,p.jsx)("label",{className:"custom-label",children:"Selector"}),(0,p.jsx)(g,{style:{fontSize:"11px"},children:o("var",{rules:[{required:!0,message:"Selector can not be empty"}]})((0,p.jsx)(n.Input,{size:"default",className:"input-box",maxLength:128,onChange:e=>this.onChangeSelector(e)}))}),(0,p.jsx)("label",{className:"custom-label",children:"Operator"}),(0,p.jsx)(g,{style:{fontSize:"11px"},children:o("op",{rules:[{required:!0,message:"Operator can not be empty"}]})((0,p.jsx)(n.Select,{showSearch:!0,placeholder:"Select ...",style:{width:"100%"},filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,onChange:this.onChangeOperator,children:i.A.map(((e,t)=>(0,p.jsx)(u,{value:e.op,children:e.op},t)))}))}),(0,p.jsx)("label",{className:"custom-label",style:{marginRight:4},children:"Value"}),"inlot"===r||"ninlot"===r?(0,p.jsx)(n.Icon,{type:"plus-circle",style:{fontSize:16,color:"#1890ff"},onClick:()=>this.add()}):null,"inlot"===r||"ninlot"===r?c:(0,p.jsx)(g,{style:{fontSize:"11px"},children:o("val",{rules:[{required:!0,message:"Value can not be empty"},{validator:this.checkValue,regex:this.state.regex}]})((0,p.jsx)(n.Input,{size:"default",className:"input-box",maxLength:128}))}),(0,p.jsxs)("div",{style:{textAlign:"right"},children:[(0,p.jsx)(n.Button,{onClick:this.handleCancel,children:"Cancel"},"back"),(0,p.jsx)(n.Button,{type:"primary",htmlType:"submit",style:{marginLeft:"10px"},children:"Ok"},"submit")]})]})]})}}const x=n.Form.create({})(b),f=(0,l.connect)((e=>({Recon:e.Recon,Policy:e.Insurance})),{resetReduxStateRecon:c,addFrequencyTrigger:h})(x)},5069:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(1502),o=a.n(r),l=a(24952),n=a(67816),s=a(79209),i=a(22079),d=a(52276),p=a(70579);const{resetReduxStateRecon:c,addFrequencyTrigger:h}=s.A,g=n.Form.Item,u=n.Select.Option;class m extends o().Component{constructor(){super(...arguments),this.state={regex:"",invalidMessage:"",selectorValues:"",valRowCount:0,selectedOperator:this.props.data?this.props.data.op:""},this.onChangeSelector=e=>{this.setState({selectorValues:e.target.value})},this.onSubmit=async e=>{e.preventDefault(),this.setState({submitting:!0});if(!await this.validateForm())return void this.setState({submitting:!1});const{form:t}=this.props;let a=t.getFieldsValue(),r=[];"ninlot"===a.op||"inlot"===a.op?Object.keys(a.names).forEach((e=>{r=[...r,[a.names[e]]]})):r=a.val,setTimeout((()=>{this.setState({submitting:!1}),this.props.updateRule({op:a.op,var:a.var.replace(/, /g,","),val:r}),this.props.form.resetFields()}),1e3)},this.handleCancel=()=>{this.props.onCloseModal()},this.remove=e=>{const{form:t}=this.props,a=t.getFieldValue("keys");1!==a.length&&t.setFieldsValue({keys:a.filter((t=>t!==e))})},this.add=()=>{const{form:e}=this.props,{valRowCount:t}=this.state,a=Array.from(Array(t).keys()).concat(t);this.setState((e=>({valRowCount:e.valRowCount+1}))),e.setFieldsValue({keys:a})},this.validateName=(e,t,a)=>{/^([a-zA-Z ']){2,100}$/.test(t)?a():/^([a-zA-Z ']){0,1}$/.test(t)||/^([a-zA-Z ']){101,1000}$/.test(t)?a("Character length should be 2-100"):a("Should be alphabet and or space")},this.checkValue=(e,t,a)=>{new RegExp(e.regex,"g").test(t)?a():a(this.state.invalidMessage)},this.onChangeOperator=e=>{const t=i.A.filter((t=>t.op===e));this.setState({selectedOperator:e,regex:t[0].regex,invalidMessage:t[0].invalidMessage})}}componentDidUpdate(e){e.data!==this.props.data&&this.setState({valRowCount:this.props.data?this.props.data.val.length:0,selectorValues:this.props.data.var,selectedOperator:this.props.data.op})}async validateForm(){const{selectionOperator:e}=this.state;return new Promise((t=>{let a="inlot"===e||"ninlot"===e?["names","keys","var","op"]:["val","var","op"];this.props.form.validateFields(a,(e=>{t(!e)}))}))}render(){const{isOpen:e,form:t,data:a}=this.props,{selectorValues:r,selectedOperator:o}=this.state,{getFieldDecorator:l,getFieldValue:s}=t;l("keys",{initialValue:a?Array.from(Array(a.val.length).keys()):[0]});const c=s("keys"),h=c.map(((e,t)=>(0,p.jsxs)(n.Form.Item,{required:!1,children:[l(`names[${e}]`,{validateTrigger:["onChange","onBlur"],initialValue:a?a.val[t]:[],rules:[{required:!0},{validator:(e,t,a)=>(0,d.cm)(e,t,a,r)}]})((0,p.jsx)(n.Select,{mode:"tags",style:{width:"95%"},tokenSeparators:[","]})),c.length>1?(0,p.jsx)(n.Icon,{className:"dynamic-delete-button",type:"minus-circle-o",onClick:()=>this.remove(e)}):null]},e)));return(0,p.jsx)(n.Modal,{title:"Edit rule",visible:e,closable:!1,maskClosable:!1,footer:[],onCancel:this.handleCancel,children:(0,p.jsxs)(n.Form,{onSubmit:this.onSubmit,children:[(0,p.jsx)("label",{className:"custom-label",children:"Selector"}),(0,p.jsx)(g,{style:{fontSize:"11px"},children:l("var",{initialValue:a?a.var:"",rules:[{required:!0,message:"Selector can not be empty"}]})((0,p.jsx)(n.Input,{size:"default",className:"input-box",maxLength:128,onChange:e=>this.onChangeSelector(e)}))}),(0,p.jsx)("label",{className:"custom-label",children:"Operator"}),(0,p.jsx)(g,{style:{fontSize:"11px"},children:l("op",{initialValue:void 0!==a?a.op:"",rules:[{required:!0,message:"Operator can not be empty"}]})((0,p.jsx)(n.Select,{showSearch:!0,placeholder:"Select ...",style:{width:"100%"},filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,onChange:this.onChangeOperator,children:i.A.map(((e,t)=>(0,p.jsx)(u,{value:e.op,children:e.op},t)))}))}),(0,p.jsx)("label",{className:"custom-label",style:{marginRight:4},children:"Value"}),"inlot"===o||"ninlot"===o?(0,p.jsx)(n.Icon,{type:"plus-circle",style:{fontSize:16,color:"#1890ff"},onClick:()=>this.add()}):null,"inlot"===o||"ninlot"===o?h:(0,p.jsx)(g,{style:{fontSize:"11px"},children:l("val",{initialValue:void 0!==a?a.val:"",rules:[{required:!0,message:"Value can not be empty"},{validator:this.checkValue,regex:this.state.regex}]})((0,p.jsx)(n.Input,{className:"input-box"}))}),(0,p.jsxs)("div",{style:{textAlign:"right"},children:[(0,p.jsx)(n.Button,{onClick:this.handleCancel,children:"Cancel"},"back"),(0,p.jsx)(n.Button,{type:"primary",htmlType:"submit",loading:this.state.submitting,style:{marginLeft:"10px"},children:"Ok"},"submit")]})]})})}}const b=n.Form.create({})(m),x=(0,l.connect)((e=>({Recon:e.Recon,Policy:e.Insurance})),{resetReduxStateRecon:c,addFrequencyTrigger:h})(b)},27806:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(80878);const o=a.n(r)().div`
    .ant-input {
        border-radius: 0;
    }
    .ant-form-item-required::before {
        display: none;
    }
    .ant-form-explain {
        font-size: 10px;
    }
    .ant-select-selection {
        border-radius: 0;
    }
    .ant-form-extra {
        font-size: 10px;
    }
    ${e=>{let{isBodyHtmlEmpty:t}=e;if(t)return"\n                    .mce-container {\n                        border-color: red !important;\n                    }\n                "}}
    .ant-form-item {
        margin-bottom: 0;
    }
    .react-tagsinput {
        height: 30px;
        display: flex;
        align-items: center;
    }
    .react-tagsinput--focused {
        border-color: #d9d9d9;
    }
    .delete-text {
        color: red !important;
        border-left: 1px solid #a9a9a9;
        margin-left: 10px;
        padding-left: 10px;
    }
    .params-field {
        margin:10px;
    }
`},22079:(e,t,a)=>{a.d(t,{A:()=>r});const r=[{op:"eq",regex:"^[A-Za-z0-9,-_.:]+$",invalidMessage:"String values allowed"},{op:"neq",regex:"^[A-Za-z0-9,-_.:]+$",invalidMessage:"String values allowed"},{op:"gt",regex:"^[0-9]+$",invalidMessage:"Only integer allowed"},{op:"gte",regex:"^[0-9]+$",invalidMessage:"Only integer allowed"},{op:"lt",regex:"^[0-9]+$",invalidMessage:"Only integer allowed"},{op:"lte",regex:"^[0-9]+$",invalidMessage:"Only integer allowed"},{op:"in",regex:"^([a-zA-Z0-9,-_.:])+$",invalidMessage:""},{op:"nin",regex:"^([a-zA-Z0-9,-_.:])+$",invalidMessage:""},{op:"ninlot",regex:"^([a-zA-Z0-9,-_.:])+$",invalidMessage:""},{op:"inlot",regex:"^([a-zA-Z0-9,-_.:])+$",invalidMessage:""}]},88888:(e,t,a)=>{a.d(t,{Ay:()=>c});var r=a(21577),o=a(80878),l=a.n(o),n=a(34618),s=a(67050),i=a(93317);l().div`
  .ant-table td, th {
    white-space: nowrap;
  }
`;const d=l()(r.A)`
  .ant-table-thead th div {
    text-align: center;
  }
  .fff {
    background: #fff;
  }
  .eee {
    background: #ffd8dc;
  }
  .error-row{
    background: #FF6C6C;
  }
  .success-row{
    background: #ACE9A7;
  }
  .ant-table td:nth-child(6), th:nth-child(6) {
    white-space: unset !important;
  }
  thead[class*="ant-table-thead"] th{
    text-align: center;
  }
  .isoTableSearchBox {
    padding: 20px;
  }
.ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 0;
}
    margin-top: 20px;
    .ant-table td, th { white-space: nowrap; }
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,n.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,n.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,n.palette)("secondary",1)};
      margin: ${e=>"rtl"===e["data-rtl"]?"0 4px 0 0":"0 0 0 4px"};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: ${e=>"rtl"===e["data-rtl"]?"right":"left"};

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,n.palette)("text",3)};
    border-bottom: 1px solid ${(0,n.palette)("border",0)};

    a {
      color: ${(0,n.palette)("primary",0)};
      ${(0,s.kY)()};

      &:hover {
        color: ${(0,n.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,n.palette)("border",0)};

    a {
      border: 0;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    transform: ${e=>"rtl"===e["data-rtl"]?"rotate(180deg)":"rotate(0)"};
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};
  }

  .ant-pagination-item {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};

    &:hover {
      border-color: ${(0,n.palette)("primary",0)};
      ${(0,s.kY)()};
    }

    &:hover a {
      color: ${(0,n.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,n.palette)("primary",0)};
    border-color: ${(0,n.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,n.palette)("grayscale",6)};

    p {
      color: ${(0,n.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,n.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,n.palette)("secondary",1)};
    color: ${(0,n.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,n.palette)("secondary",1)};
    color: ${(0,n.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,n.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,n.palette)("border",0)};
      ${(0,s.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,n.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,n.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,s.Vq)("3px 0 0 3px")};
        ${(0,s.kY)()};
        ${(0,s.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,n.palette)("secondary",7)};
          ${(0,s.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,n.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,s.kY)()};

        &:hover {
          background-color: ${(0,n.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead > tr > th {
      word-break: keep-all;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,n.palette)("border",0)};
        border-left: 0;

        &[rowspan] {
          text-align: center;
        }

        &.isoImageCell {
          padding: 3px;
        }
      }

      &:first-child {
        th {
          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,n.palette)("border",0)};
          }
        }
      }

      &:last-child {
        th {
          border-top: 0;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        td {
          border-right: 1px solid ${(0,n.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,n.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,n.palette)("border",0)};
          }

          &.isoImageCell {
            padding: 3px;
          }
        }
      }
    }
  }

  &.isoEditableTable {
    .isoEditData {
      .isoEditDataWrapper {
        display: flex;
        align-items: center;

        input {
          font-size: 12px;
          font-weight: 400;
          color: ${(0,n.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,n.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,s.Vq)("3px")};
          ${(0,s.MS)()};
          ${(0,s.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,n.palette)("border",0)};
            ${(0,s.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }
        }

        .isoEditIcon {
          cursor: pointer;
        }
      }

      .isoDataWrapper {
        display: flex;
        align-items: center;

        .isoEditIcon {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`,p=l().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,n.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,n.palette)("primary",0)};
      background-color: ${(0,n.palette)("primary",0)};
    }
  }
`,c=((0,i.A)(p),(0,i.A)(d))},21577:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(67816);const o=r.Table},52276:(e,t,a)=>{a.d(t,{Ay:()=>n,cm:()=>r,qv:()=>l,sh:()=>o});const r=(e,t,a,r)=>{const o=r.split(",");if(t&&t.length!==o.length){a(`There should be exactly ${o.length} values`)}a()},o=e=>{try{return!!new URL(e)}catch(t){return!1}},l=(e,t)=>{if(isNaN(Number(e)))return!1;let a=!1;switch(t){case"+62":a=e.length>10&&e.length<14;break;case"+91":a=10===e.length;break;case"+84":a=12===e.length}return a},n={checkPhone:(e,t,a)=>{/^[0-9]{8,15}$/.test(t)||void 0===t?a():/^[0-9]{0,7}$/.test(t)||/^[0-9]{16,1000}$/.test(t)?a("Character length should be 8-15"):a("Input should be number")},validateName:(e,t,a)=>{/^([a-zA-Z ']){2,100}$/.test(t)?a():/^([a-zA-Z ']){0,1}$/.test(t)||/^([a-zA-Z ']){101,1000}$/.test(t)?a("Character length should be 2-100"):a("Should be alphabet and or space")},checkValidator:(e,t,a,r)=>{if(r||t)if(""!==t&&void 0!==t&&null!==t)if(e.regex){const r=new RegExp(e.regex);"object"===typeof t&&(t=t.key),r.test(t)?a():a("Check format input")}else a();else a();else a()},checkEmptyValidator:(e,t,a,r)=>{r||t?t||a(e.message):a()},validateDescription:(e,t,a)=>{/^([a-zA-Z ']){10,255}$/.test(t)?a():/^([a-zA-Z ']){0,10}$/.test(t)||/^([a-zA-Z ']){256,1000}$/.test(t)?a("Character length should be 10-200"):a("Should be alphabet and or space")},validateCode:(e,t,a)=>{/^([a-zA-Z ']){3,50}$/.test(t)?a():/^([a-zA-Z ']){0,3}$/.test(t)||/^([a-zA-Z ']){51,1000}$/.test(t)?a("Code length should be 3-50"):a("Should be alphabet and or space")},checkDayOfMonth:(e,t,a)=>{/^([1-9]|[12][0-9]|3[01])$/.test(t)?a():a("please enter 1 - 31")},checkHour:(e,t,a)=>{/^([0-1]?[0-9]|2[0-3])$/.test(t)?a():a("please enter 0 - 23")},checkMinute:(e,t,a)=>{/^([0-9]|[1-5][0-9])$/.test(t)?a():a("please enter 0 - 59")},colorChecker:(e,t,a)=>{/^#([0-9A-Fa-f]{6})$/.test(t)?a():a("Please enter Hex Color Code eg #FFFFFF or #ffffff")},checkIMEInumber:(e,t,a)=>{/^([0-9]{15})$/.test(t)?a():a("please enter 15 digit IMEI number")},validateIdentityKtp:(e,t,a)=>{/^[0-9]{16}$/.test(t)||""===t||void 0===t?a():a("KTP Number Format is wrong")},validateColor:(e,t,a)=>{/^[a-zA-Z ']{2,100}$/.test(t)||""===t||void 0===t?a():a("The format of the vehicle color name is incorrect")},validateChasisNumber:(e,t,a)=>{/^([a-zA-Z0-9.-]){15,17}$/.test(t)||""===t||void 0===t?a():a("Chassis Number must be 15-17 characters")},checkPlateNumber:(e,t,a)=>{/^([a-zA-Z0-9]{1,2}\s[a-zA-Z0-9]{1,4}\s[a-zA-Z0-9]{1,3})$/.test(t)||""===t||void 0===t?a():a("Please enter correct plate number to continue")},validateEngineNumber:(e,t,a)=>{/^([a-zA-Z0-9.-]){17}$/.test(t)||""===t||void 0===t?a():a("Engine Number must be 15-17 characters")},checkPhoneNumberIsValid:l}},97916:()=>{}}]);
//# sourceMappingURL=974.d984ed21.chunk.js.map