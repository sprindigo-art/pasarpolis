"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8322],{88821:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(69732),o=r(67816),n=r(1502),l=r(17135),i=r(77980),d=r(41669),s=r(42392),c=r(80878);const p=r.n(c)().div`
  .ant-input-number {
    width: 100%;
  }
  .label{
    font-weight: 600;
  }
  .mt-20{
    margin-top: 20px;
  }
  .errorText{
    color: ${e=>e.theme.errorRed};
    margin-bottom: 10px;
  }
  .required-star {
    color: ${e=>e.theme.errorColor};
  }
`;var u=r(17823),m=r.n(u),f=r(93380),_=r(95916),h=r(70579);const b=o.Form.create()((function(e){const{defaultValues:t}=e,[r,c]=(0,n.useState)((0,_.get)(t,"recon_type","")),[u,b]=(0,n.useState)((0,_.get)(t,"recon_to","")),[x,g]=(0,n.useState)({}),[y,v]=(0,n.useState)((0,_.get)(t,"file_url","")),[I,E]=(0,n.useState)((0,_.get)(t,"invoice_url","")),[T,R]=(0,n.useState)((0,_.get)(t,"payment_proof_url","")),[,S]=(0,s._F)(),[{getProviderListData:k=[]},C]=(0,f.nv)(),[{ADD_RECON_ERROR:$,addReconStatus:D,GET_PROVIDER_LIST_ERROR:w,getProviderListStatus:j},N]=(0,a.useErrorContextValue)();(0,n.useEffect)((()=>{"success"===D?(t?(0,i.D)("success","Recon successfully Edited"):(0,i.D)("success","A new Recon is successfully added"),N((0,a.resetError)({addReconStatus:""})),t?e.onGetReconDetail({reconId:null===t||void 0===t?void 0:t.id}):e.onFetchReconList({}),e.onCloseReconForm()):$&&D&&((0,i.D)("error",D),N((0,a.resetError)({addReconStatus:""}))),w&&j&&((0,i.D)("error",j),N((0,a.resetError)({getProviderListStatus:""})))}),[D,t,N,$,e,w,j]),(0,n.useEffect)((()=>{C()}),[C]);const P=(0,n.useCallback)((a=>{a.preventDefault(),e.form.validateFields((async(e,a)=>{if(!e){let e={},o={provider:a.provider,purpose:a.purpose,recon_type:r,recon_to:u,payment_date:m()(a.payment_date).format("YYYY-MM-DD"),amount:a.amount,remarks:a.remarks};if(y||(e={...e,recon_file:"Please upload recon file"}),I||(e={...e,invoice_file:"Please upload invoice file"}),T||(e={...e,payment_proof:"Please upload the payment proof"}),!(0,_.isEmpty)(e))return void g(e);null!==t&&void 0!==t&&t.id?(y!==(null===t||void 0===t?void 0:t.file_url)&&(o.file_url=y),I!==(null===t||void 0===t?void 0:t.invoice_file)&&(o.invoice_url=I),T!==(null===t||void 0===t?void 0:t.payment_proof_url)&&(o.payment_proof_url=T)):o={...o,file_url:y,invoice_url:I,payment_proof_url:T},S({reconId:null===t||void 0===t?void 0:t.id,body:o})}}))}),[S,t,e.form,r,u,I,y,T]),A=(0,n.useCallback)((t=>(0,l.A)({...t,getFieldDecorator:e.form.getFieldDecorator,getFieldValue:e.form.getFieldValue})),[e.form]),O=(0,n.useCallback)((e=>e.map(((e,t)=>A(e)))),[A]),L=(0,n.useCallback)(((e,t)=>{switch(t){case"payment_proof_file":g({payment_proof_file:""}),R(e);break;case"invoice_file":g({invoice_file:""}),E(e);break;case"recon_file":g({recon_file:""}),v(e)}}),[]),V=(0,n.useCallback)((e=>{switch(e){case"payment_proof_file":R("");break;case"invoice_file":E("");break;case"recon_file":v("")}}),[]),F=(0,n.useCallback)((e=>{c(e.target.value),"EXTRA_COMMISSION"===e.target.value&&b("PPIB")}),[]),G=(0,n.useCallback)((e=>{b(e.target.value)}),[]);return(0,h.jsx)(p,{children:(0,h.jsxs)(o.Form,{onSubmit:P,children:[O([{name:"provider",title:"Provider Name",type:"search",data:k,defaultValue:(0,_.get)(t,"provider","")},{name:"purpose",title:"Recon Purpose",type:"search",data:[{code:"NEW",name:"New"},{code:"ENDORSEMENT",name:"Endorsement"}],defaultValue:(0,_.get)(t,"recon_purpose","")}]),(0,h.jsx)("div",{children:"Recon Type"}),(0,h.jsx)("div",{className:"errorText",children:x.recon_type}),(0,h.jsxs)(o.Radio.Group,{onChange:F,value:r,children:[(0,h.jsx)(o.Radio,{value:"OJK",children:"OJK Commission"}),(0,h.jsx)(o.Radio,{value:"EXTRA_COMMISSION",children:"Extra Commission"})]}),(0,h.jsx)("div",{className:"mt-20",children:"Recon To"}),(0,h.jsx)("div",{className:"errorText",children:x.recon_to}),(0,h.jsxs)(o.Radio.Group,{onChange:G,value:u,children:[(0,h.jsx)(o.Radio,{value:"PPIB",children:" PPIB "}),(0,h.jsx)(o.Radio,{value:"PROVIDER",disabled:"EXTRA_COMMISSION"===r,children:" Provider "})]}),(0,h.jsx)("div",{className:"mt-20",children:O([{name:"payment_date",title:"Payment Date",type:"date",handleDisabledDate:e=>e>m()().endOf("day"),defaultValue:(0,_.get)(t,"payment_date")}])}),(0,h.jsxs)("div",{className:"mt-20",children:[(0,h.jsx)("span",{className:"required-star",children:"*"})," Recon data (excel file based on the template)"]}),(0,h.jsx)("div",{className:"errorText",children:x.recon_file}),(0,h.jsx)(d.A,{onSave:e=>L(e,"recon_file"),name:"recon_file",img:y,isNew:!y,fileType:".xls,.xlsx",onRemove:()=>V("recon_file")}),(0,h.jsxs)("div",{className:"mt-20",children:[(0,h.jsx)("span",{className:"required-star",children:"*"})," Invoice (PDF File)"]}),(0,h.jsx)("div",{className:"errorText",children:x.invoice_file}),(0,h.jsx)(d.A,{onSave:e=>L(e,"invoice_file"),name:"invoice_file",img:I,isNew:!I,fileType:".pdf",onRemove:()=>V("invoice_file")}),(0,h.jsxs)("div",{className:"mt-20",children:[(0,h.jsx)("span",{className:"required-star",children:"*"})," Payment Proof (PDF/Image File)"]}),(0,h.jsx)("div",{className:"errorText",children:x.payment_proof}),(0,h.jsx)(d.A,{onSave:e=>L(e,"payment_proof_file"),name:"payment_proof_file",img:T,isNew:!T,fileType:".pdf,.png,.jpg,.jpeg",onRemove:()=>V("payment_proof_file")}),O([{name:"amount",title:"Total Amount Should Be Paid To "+("PPIB"===u?"PPIB":"Provider"),type:"number",min:0,defaultValue:(0,_.get)(t,"amount",0)},{name:"remarks",title:"Remark",type:"textarea",required:!1,defaultValue:(0,_.get)(t,"remarks",0)}]),(0,h.jsx)("p",{children:(0,h.jsx)("i",{children:"Data rekon yang Anda upload langsung diproses setelah Anda klik tombol Submit. Pastikan semua informasi san data recon yang Anda masukkan sudah sesuai!"})}),(0,h.jsx)(o.Row,{justify:"end",type:"flex",children:(0,h.jsx)(o.Button,{className:"mt-20",type:"primary",htmlType:"submit",children:"Submit"})})]})})}))},17628:(e,t,r)=>{r.d(t,{a:()=>f,z:()=>_});r(1502);var a=r(67816),o=r(8624),n=r(63995),l=r(96760),i=r(54589),d=r.n(i),s=r(17823),c=r.n(s),p=r(98479),u=r(70579);const m=new(d());function f(e){let{handleDetailPage:t,searchTextQuery:r,handleInputChange:i,handleSearch:d,isFilterVisible:s,setIsFilterVisible:f,isChange:_,providerList:h,onSearchDate:b}=e;return[{key:"recon_action",title:"Action",dataIndex:"recon_id",render:(e,r)=>(0,u.jsx)(o.A,{requiredPermission:"ops.view_agent_provider_list",children:(0,u.jsx)("i",{className:"far fa-eye agent-config-btn",onClick:()=>t(r.id)})}),align:"center"},{key:"recon_name",title:"Recon Name",dataIndex:"recon_name",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.recon_name&&l.l.blue}}),filterDropdown:(0,u.jsx)(n.A,{idIdentifier:"recon_name",className:"agent-table-search",searchText:_?r.recon_name:"",onInputChange:e=>i(e,"recon_name"),onSearch:e=>d(e,"recon_name")}),filterDropdownVisible:"recon_name"===s,onFilterDropdownVisibleChange:e=>f(e?"recon_name":r.recon_name)},{key:"provider_name",title:"Provider Name",dataIndex:"provider",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.provider_name&&l.l.blue}}),filterDropdown:(0,u.jsx)(p.Ib,{idIdentifier:"provider",searchText:_?r.provider:"",onInputChange:e=>i(e,"provider"),onSearch:e=>d(e,"provider"),partners:h}),filterDropdownVisible:"provider"===s,onFilterDropdownVisibleChange:e=>f(e?"provider":r.provider)},{key:"recon_purpose",title:"Recon Purpose",dataIndex:"recon_purpose",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.recon_purpose&&"#1890ff"}}),filterDropdown:(0,u.jsx)(p.Ib,{idIdentifier:"recon_purpose",searchText:_?r.recon_purpose:"",onInputChange:e=>i(e,"recon_purpose"),onSearch:e=>d(e,"recon_purpose"),placeholder:"Select Recon Purpose",partners:[{name:"New",code:"NEW"},{name:"Endorsement",code:"ENDORSEMENT"}]}),filterDropdownVisible:"recon_purpose"===s,onFilterDropdownVisibleChange:e=>f(e?"recon_purpose":r.recon_purpose)},{key:"recon_type",title:"Recon Type",dataIndex:"recon_type",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.recon_type&&"#1890ff"}}),filterDropdown:(0,u.jsx)(p.Ib,{idIdentifier:"recon_type",searchText:_?r.recon_type:"",onInputChange:e=>i(e,"recon_type"),onSearch:e=>d(e,"recon_type"),placeholder:"Select Recon Type",partners:[{name:"Ojk Commission",code:"OJK"},{name:"Extra Commission",code:"EXTRA_COMMISSION"}]}),filterDropdownVisible:"recon_type"===s,onFilterDropdownVisibleChange:e=>f(e?"recon_type":r.recon_type)},{key:"recon_to",title:"Recon To",dataIndex:"recon_to",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.recon_to&&"#1890ff"}}),filterDropdown:(0,u.jsx)(p.Ib,{idIdentifier:"recon_to",searchText:_?r.recon_to:"",onInputChange:e=>i(e,"recon_to"),onSearch:e=>d(e,"recon_to"),placeholder:"Select Recon To",partners:[{name:"PPIB",code:"PPIB"},{name:"Provider",code:"PROVIDER"}]}),filterDropdownVisible:"recon_to"===s,onFilterDropdownVisibleChange:e=>f(e?"recon_to":r.recon_to)},{key:"file_name",title:"File Name",dataIndex:"file_name",align:"center"},{key:"status",title:"Status",dataIndex:"status",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.status&&"#1890ff"}}),filterDropdown:(0,u.jsx)(p.Ib,{idIdentifier:"status",searchText:_?r.status:"",onInputChange:e=>i(e,"status"),onSearch:e=>d(e,"status"),placeholder:"Select Status",partners:[{name:"Queued",code:"QUEUED"},{name:"In Progress",code:"IN_PROGRESS"},{name:"Success",code:"SUCCESS"},{name:"Failed",code:"FAILED"},{name:"Partial",code:"PARTIAL"}]}),filterDropdownVisible:"status"===s,onFilterDropdownVisibleChange:e=>f(e?"status":r.status)},{key:"error",title:"Error",dataIndex:"error",align:"center"},{key:"remarks",title:"Remarks",dataIndex:"remarks",align:"center"},{key:"created_at",title:"Created At",dataIndex:"created_at",align:"center",render:(e,t)=>{const r=m.get("userProfile").user_timezone;return c()(e).tz(r).format("MMM DD,YYYY hh:mm A")},filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.created_at_start&&r.created_at_end&&"#1890ff"}}),filterDropdown:(0,u.jsx)(p.QD,{idIdentifier:"CreatedAt",onInputChange:e=>i(e,"created_at"),onSearch:e=>b(e,"CreatedAt")}),filterDropdownVisible:"created_at"===s,onFilterDropdownVisibleChange:e=>f(e?"created_at":r.created_at_start)},{key:"created_by",title:"Created By",dataIndex:"created_by",align:"center",filterIcon:(0,u.jsx)(a.Icon,{type:"search",style:{color:r.created_by&&"#1890ff"}}),filterDropdown:(0,u.jsx)(n.A,{idIdentifier:"created_by",className:"agent-table-search",searchText:_?r.created_by:"",onInputChange:e=>i(e,"created_by"),onSearch:e=>d(e,"created_by")}),filterDropdownVisible:"created_by"===s,onFilterDropdownVisibleChange:e=>f(e?"created_by":r.created_by)},{key:"template_file",title:"Template File",dataIndex:"file_url",align:"center"},{key:"recon_status",title:"Recon Status",dataIndex:"recon_status",align:"center"}]}function _(){return[{key:"policy_application_id",title:"Application Number",dataIndex:"policy_application_id",align:"center"},{key:"customer_name",title:"Insured Name",dataIndex:"customer_name",align:"center"},{key:"commission_percent",title:"Commission(%)",dataIndex:"commission_percent",align:"center"},{key:"commission_amount",title:"Commission Amount",dataIndex:"commission_amount",align:"center"},{key:"commission_revenue",title:"Commission Revenue",dataIndex:"commission_revenue",align:"center"},{key:"net_payment",title:"Total Amount",dataIndex:"net_payment",align:"center"},{key:"remarks",title:"Remark",dataIndex:"remarks",align:"center"},{key:"status",title:"Status",dataIndex:"status",align:"center"},{key:"error",title:"Error",dataIndex:"error",align:"center"}]}},68991:(e,t,r)=>{r.d(t,{gk:()=>s,ZL:()=>c});var a=r(1502),o=r(31055);const n={},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{type:r,payload:a={}}=t;switch(r){case o.A5.GET_RECON_LIST:case o.A5.GET_RECON_DETAIL:case o.A5.GET_POLICY_LIST:case o.A5.ADD_RECON:return{...e,...a};default:return{...e||{}}}};var i=r(70579);const d=(0,a.createContext)(),s=e=>(0,i.jsx)(d.Provider,{value:(0,a.useReducer)(l,n),children:e.children}),c=()=>(0,a.useContext)(d)},31055:(e,t,r)=>{r.d(t,{A5:()=>o,Bb:()=>d,E6:()=>l,bS:()=>n,bT:()=>i});var a=r(175);const o={GET_RECON_LIST_REQUEST:"GET_RECON_LIST_REQUEST",GET_RECON_LIST:"GET_RECON_LIST",GET_RECON_DETAIL_REQUEST:"GET_RECON_DETAIL_REQUEST",GET_RECON_DETAIL:"GET_RECON_DETAIL",GET_POLICY_LIST_REQUEST:"GET_POLICY_LIST_REQUEST",GET_POLICY_LIST:"GET_POLICY_LIST",ADD_RECON_REQUEST:"ADD_RECON_REQUEST",ADD_RECON:"ADD_RECON"},n=e=>({type:o.GET_RECON_DETAIL_REQUEST,payload:{...e,method:"GET",url:(0,a.MA)(e.reconId)}}),l=e=>({type:o.GET_RECON_LIST_REQUEST,payload:{...e,method:"GET",url:a.hU}}),i=e=>({type:o.GET_POLICY_LIST_REQUEST,payload:{...e,method:"GET",url:(0,a.zC)(e.reconId)}}),d=e=>({type:o.ADD_RECON_REQUEST,payload:{...e,method:e.reconId?"PUT":"POST",url:e.reconId?(0,a.OK)(e.reconId):a.D9}})},42392:(e,t,r)=>{r.d(t,{S5:()=>d,_F:()=>p,jg:()=>s,uv:()=>c});var a=r(69732),o=r(1502),n=r(68991),l=r(31055);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,r]=(0,n.ZL)(),[l]=(0,a.useServiceRequest)(r),i=(0,o.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...t}))}),[l,e]);return[t,i]},d=()=>i(l.bT),s=()=>i(l.E6),c=()=>i(l.bS),p=()=>i(l.Bb)},55611:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(21577),o=r(80878),n=r.n(o),l=r(34618),i=r(67050),d=r(93317);const s=n()(a.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {
    max-width: 400px;
    overflow: auto;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item {
    overflow: initial;
  }
  .ant-table-thead > tr > th {
    color: ${(0,l.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,l.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,l.palette)("secondary",1)};
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
    color: ${(0,l.palette)("text",3)};
    border-bottom: 1px solid ${(0,l.palette)("border",0)};

    a {
      color: ${(0,l.palette)("primary",0)};
      ${(0,i.kY)()};

      &:hover {
        color: ${(0,l.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,l.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,l.palette)("border",0)};
  }

  .ant-table-pagination {
    display: block;
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,l.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,l.palette)("border",0)};

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
      border-color: ${(0,l.palette)("primary",0)};
      ${(0,i.kY)()};
    }

    &:hover a {
      color: ${(0,l.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,l.palette)("primary",0)};
    border-color: ${(0,l.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,l.palette)("grayscale",6)};

    p {
      color: ${(0,l.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,l.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,l.palette)("secondary",1)};
    color: ${(0,l.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,i.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,l.palette)("secondary",1)};
    color: ${(0,l.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,i.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,l.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,l.palette)("border",0)};
      ${(0,i.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,l.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,l.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,i.Vq)("3px 0 0 3px")};
        ${(0,i.kY)()};
        ${(0,i.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,l.palette)("secondary",7)};
          ${(0,i.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,l.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,l.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,l.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,l.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,l.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,i.kY)()};

        &:hover {
          background-color: ${(0,l.palette)("primary",1)};
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
        border: 1px solid ${(0,l.palette)("border",0)};
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
              solid ${(0,l.palette)("border",0)};
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
          border-right: 1px solid ${(0,l.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,l.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,l.palette)("border",0)};
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
          color: ${(0,l.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,l.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,i.Vq)("3px")};
          ${(0,i.MS)()};
          ${(0,i.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,l.palette)("border",0)};
            ${(0,i.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,l.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,l.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,l.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,l.palette)("grayscale",0)};
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
`,c=n().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,l.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,l.palette)("primary",0)};
      background-color: ${(0,l.palette)("primary",0)};
    }
  }
`,p=((0,d.A)(c),(0,d.A)(s))},93380:(e,t,r)=>{r.d(t,{XM:()=>s,Xg:()=>d,cT:()=>c,fU:()=>p,nv:()=>u});var a=r(69732),o=r(1502),n=r(13294),l=r(47189);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,r]=(0,n.PL)(),[l]=(0,a.useServiceRequest)(r),i=(0,o.useRef)(l),d=(0,o.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await i.current(e({...t}))}),[e]);return[t,d]},d=()=>{const[,e]=(0,n.PL)();return(0,o.useCallback)((t=>{e((0,l.qd)(t))}),[e])},s=()=>i(l.eI),c=()=>i(l.g9),p=()=>i(l.QM),u=()=>i(l.M)},8624:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1502),o=r.n(a),n=r(24952);class l extends o().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:r=null}=this.props;return e.find((e=>e===t))?this.props.children:r}}l.defaultProps={permissions:[]};const i=(0,n.connect)((e=>({permissions:e.Auth.permissions})),{})(l)},21577:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(67816);const o=a.Table}}]);
//# sourceMappingURL=8322.18045948.chunk.js.map