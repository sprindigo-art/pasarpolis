"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2335],{55611:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(21577),o=r(80878),n=r.n(o),l=r(34618),i=r(67050),d=r(93317);const p=n()(a.A)`
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
`,s=n().div`
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
`,c=((0,d.A)(s),(0,d.A)(p))},73079:(e,t,r)=>{r.d(t,{$M:()=>_,Kz:()=>o,Mc:()=>n,N5:()=>E,R5:()=>c,bW:()=>u,bx:()=>s,gy:()=>d,kF:()=>T,q8:()=>i,vw:()=>l,ys:()=>p});var a=r(97289);const o="/api/agent/provider-list/?details=short",n="/api/agent/product-list/",l=e=>`/api/agent/independent-package-list/?product_code=${e}`,i="/api/agent/preset-list/",d="/api/agent/create-preset/",p=e=>`/api/agent/${e}/preset-details/`,s=e=>`/api/agent/${e}/update-preset/`,c=e=>`/api/agent/${e}/delete-preset/`,E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return`/preset/create/${(0,a.eA)(e)}`},_=e=>`/preset/${e}/edit`,T=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return`/preset/${e}/${(0,a.eA)(t)}`},u="/preset/list/"},97289:(e,t,r)=>{r.d(t,{PH:()=>T,eA:()=>u,su:()=>E,zC:()=>_});r(1502);var a=r(67816),o=r(54589),n=r.n(o),l=r(17823),i=r.n(l),d=r(8624),p=r(73079),s=r(70579);const c=new(n());function E(e,t){let r={};return t&&(r={providerCode:t}),[{key:"preset_action",title:"Actions",dataIndex:"preset_uuid",render:t=>(0,s.jsx)(d.A,{requiredPermission:"ops.view_agent_provider_details",children:(0,s.jsxs)(a.Col,{type:"flex",justify:"space-between",children:[(0,s.jsx)(a.Col,{children:(0,s.jsx)(a.Icon,{type:"eye",onClick:()=>e.push((0,p.kF)(t,r))})}),(0,s.jsx)(a.Col,{children:(0,s.jsx)(a.Icon,{type:"form",onClick:()=>e.push((0,p.$M)(t))})})]})}),align:"center"},{key:"code",title:"Preset ID",dataIndex:"code",align:"center"},{key:"name",title:"Preset Name",dataIndex:"name",align:"center"},{key:"provider",title:"Provider",dataIndex:"provider.code",align:"center"},{key:"product",title:"Product",dataIndex:"product.code",align:"center"},{key:"package",title:"Package Name",dataIndex:"package.code",align:"center"},{key:"include_bf_vat",title:"Include Brokerage Fee VAT",dataIndex:"include_bf_vat",align:"center",render:e=>e?"Include":"Exclude"},{key:"include_bf_wht",title:"Include Brokerage Fee WHT",dataIndex:"include_bf_wht",align:"center",render:e=>e?"Include":"Exclude"},{key:"agent_bf_commission_percent",title:"Agent Fee %",dataIndex:"agent_bf_commission_percent",align:"center"},{key:"pasarpolis_bf_commission_percent",title:"PasarPolis Fee %",dataIndex:"pasarpolis_bf_commission_percent",align:"center"},{key:"include_ef_vat",title:"Include Engineering Fee VAT",dataIndex:"include_ef_vat",align:"center",render:e=>e?"Include":"Exclude"},{key:"include_ef_wht",title:"Include Engineering Fee WHT",dataIndex:"include_ef_wht",align:"center",render:e=>e?"Include":"Exclude"},{key:"agent_ef_commission_percent",title:"Extra Commission Agent %",dataIndex:"agent_ef_commission_percent",align:"center"},{key:"pasarpolis_ef_commission_percent",title:"Extra Commission PasarPolis %",dataIndex:"pasarpolis_ef_commission_percent",align:"center"},{key:"preset_start_date",title:"Start Date",dataIndex:"preset_start_date",align:"center",render:e=>{const t=c.get("userProfile").user_timezone;return i()(e).tz(t).format("MMM DD,YYYY hh:mm A")}},{key:"preset_end_date",title:"End Date",dataIndex:"preset_end_date",align:"center",render:e=>{const t=c.get("userProfile").user_timezone;return i()(e).tz(t).format("MMM DD,YYYY hh:mm A")}},{key:"created_at",title:"Created At",dataIndex:"created_at",align:"center",render:e=>{const t=c.get("userProfile").user_timezone;return i()(e).tz(t).format("MMM DD,YYYY hh:mm A")}},{key:"created_by",title:"Created By",dataIndex:"created_by",align:"center"},{key:"updated_at",title:"Updated At",dataIndex:"updated_at",align:"center",render:e=>{const t=c.get("userProfile").user_timezone;return i()(e).tz(t).format("MMM DD,YYYY hh:mm A")}},{key:"updated_by",title:"Updated By",dataIndex:"updated_by",align:"center"}]}function _(e,t){return e.code<t.code?1:e.code>t.code?-1:0}const T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{with_hard_copy:r={},without_hard_copy:a={},...o}=e;if("flat"===(null===t||void 0===t?void 0:t.with_hard_copy_type)){const{tiering:e,premium_type:t,...a}=r;Object.keys(a).length&&(o={...o,with_hard_copy:a})}if("tiering"===(null===t||void 0===t?void 0:t.with_hard_copy_type)){const{flat:e,...t}=r;Object.keys(t).length&&(o={...o,with_hard_copy:t})}if("flat"===(null===t||void 0===t?void 0:t.without_hard_copy_type)){const{tiering:e,premium_type:t,...r}=a;Object.keys(r).length&&(o={...o,with_hard_copy:r})}if("tiering"===(null===t||void 0===t?void 0:t.without_hard_copy_type)){const{flat:e,...t}=a;Object.keys(t).length&&(o={...o,without_hard_copy:t})}return o},u=e=>{let t=Object.keys(e).filter((t=>!!e[t])).map((t=>t+"="+e[t])).join("&");return t=t?`?${t}`:"",t}},32335:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(69732),o=r(67816),n=r(1382),l=r(1502),i=r(77980),d=r(8634),p=r(97289),s=r(55611),c=r(88962),E=r(95916),_=r(73079),T=r(70579);const u=function(e){const{providerCode:t,loading:r}=e,a=(0,E.get)(e,"data",[]),n=(0,c.useHistory)(),i=(0,l.useMemo)((()=>{const e=[...a];return e.sort(p.zC),e}),[a]),d=(0,l.useMemo)((()=>(0,_.N5)({providerCode:t})),[t]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(o.Row,{type:"flex",justify:"space-between",children:[(0,T.jsx)(o.Col,{children:t&&(0,T.jsx)("h3",{className:"heading-blue",children:(0,T.jsx)("b",{children:"Coverage Preset"})})}),(0,T.jsx)(o.Col,{children:(0,T.jsx)(o.Button,{className:"mb-10",type:"primary",onClick:()=>n.push(d),children:"ADD Preset"})})]}),(0,T.jsx)("div",{className:"mt-10",children:(0,T.jsx)(s.A,{columns:(0,p.su)(n,t),bordered:!0,rowKey:e=>e.id,dataSource:t?i.filter((e=>e.provider.code===t)):i,loading:r,className:"isoSearchableTable agent-table-data"})})]})};var g=r(73462),h=r(66756);const f=e=>{const{providerCode:t}=e,{fatalError:r,setFatalError:p}=(0,l.useState)(!1),{resetError:s}=(0,a.useResetError)(),[{getPresetListData:c},E]=(0,h.nA)(),[{GET_PRESET_LIST_LOADER:_}]=(0,a.useLoaderContextValue)(),[{GET_PRESET_LIST_ERROR:g,getPresetListStatus:f,getPresetListErrorData:b}]=(0,a.useErrorContextValue)(),x=(0,l.useRef)(0);return(0,l.useEffect)((()=>{"success"===f?(x.current=0,s(["getPresetListStatus"])):g&&f&&(x.current=x.current+1,x.current.preset<=5?((0,i.D)("error","Failed to fetch preset list, trying again..."),s(["getPresetListStatus"]),setTimeout(E,1e3)):p(!0))}),[g,f,s,b,E,p]),(0,l.useEffect)((()=>{E()}),[E]),!t&&r?(0,T.jsx)(d.A,{children:(0,T.jsx)(o.Result,{status:"500",title:"Oops!",subTitle:"Sorry, something went wrong. Try reloading the page, if problem persists come back again later.",extra:(0,T.jsx)(o.Button,{type:"primary",onClick:()=>window.location.reload(),children:"Reload"})})}):t?(0,T.jsxs)(d.A,{children:[r&&(0,T.jsx)(n.A,{type:"danger",children:"Failed to fetch presets"}),(0,T.jsx)(u,{loading:_,data:c,providerCode:t})]}):(0,T.jsxs)(d.A,{children:[(0,T.jsx)("h2",{children:"Preset List"}),(0,T.jsx)(u,{loading:_,data:c})]})},b=e=>(0,T.jsx)(g.gh,{children:(0,T.jsx)(f,{...e})})},73462:(e,t,r)=>{r.d(t,{gh:()=>p,B5:()=>s});var a=r(1502),o=r(35469);const n={},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{type:r,payload:a}=t;switch(r){case o.Wt.GET_SHORT_PROVIDER_LIST:case o.Wt.GET_PRODUCT_LIST:case o.Wt.GET_INDEPENDENT_PACKAGE_LIST:case o.Wt.GET_PRESET_LIST:case o.Wt.GET_PRESET_DETAILS:case o.Wt.GET_EDIT_PRESET_DETAILS:case o.Wt.RESET_PRESET_STORE:case o.Wt.CREATE_PRESET:case o.Wt.UPDATE_PRESET:case o.Wt.DELETE_PRESET:return{...e,...a};default:return e}};var i=r(70579);const d=(0,a.createContext)(),p=e=>{let{children:t}=e;return(0,i.jsx)(d.Provider,{value:(0,a.useReducer)(l,n),children:t})},s=()=>(0,a.useContext)(d)},35469:(e,t,r)=>{r.d(t,{BC:()=>_,Rz:()=>E,Uy:()=>c,Wt:()=>o,gc:()=>s,ko:()=>n,oh:()=>d,pQ:()=>i,qJ:()=>p,qr:()=>l});var a=r(73079);const o={GET_SHORT_PROVIDER_LIST:"GET_SHORT_PROVIDER_LIST",GET_SHORT_PROVIDER_LIST_REQUEST:"GET_SHORT_PROVIDER_LIST_REQUEST",GET_PRODUCT_LIST:"GET_PRODUCT_LIST",GET_PRODUCT_LIST_REQUEST:"GET_PRODUCT_LIST_REQUEST",GET_INDEPENDENT_PACKAGE_LIST:"GET_INDEPENDENT_PACKAGE_LIST",GET_INDEPENDENT_PACKAGE_LIST_REQUEST:"GET_INDEPENDENT_PACKAGE_LIST_REQUEST",GET_PRESET_LIST:"GET_PRESET_LIST",GET_PRESET_LIST_REQUEST:"GET_PRESET_LIST_REQUEST",GET_PRESET_DETAILS:"GET_PRESET_DETAILS",GET_PRESET_DETAILS_REQUEST:"GET_PRESET_DETAILS",GET_EDIT_PRESET_DETAILS:"GET_EDIT_PRESET_DETAILS",GET_EDIT_PRESET_DETAILS_REQUEST:"GET_EDIT_PRESET_DETAILS_REQUEST",CREATE_PRESET:"CREATE_PRESET",CREATE_PRESET_REQUEST:"CREATE_PRESET_REQUEST",UPDATE_PRESET:"UPDATE_PRESET",UPDATE_PRESET_REQUEST:"UPDATE_PRESET_REQUEST",DELETE_PRESET:"DELETE_PRESET",DELETE_PRESET_REQUEST:"DELETE_PRESET_REQUEST",RESET_PRESET_STORE:"RESET_PRESET_STORE"},n=()=>({type:o.GET_SHORT_PROVIDER_LIST_REQUEST,payload:{url:a.Kz}}),l=()=>({type:o.GET_PRODUCT_LIST_REQUEST,payload:{url:a.Mc,method:"GET"}}),i=e=>({type:o.GET_INDEPENDENT_PACKAGE_LIST_REQUEST,payload:{url:(0,a.vw)((null===e||void 0===e?void 0:e.productCode)||""),method:"GET"}}),d=()=>({type:o.GET_PRESET_LIST_REQUEST,payload:{url:a.q8,method:"GET"}}),p=e=>({type:o.CREATE_PRESET_REQUEST,payload:{...e,url:a.gy,method:"POST"}}),s=e=>({type:o.GET_PRESET_DETAILS_REQUEST,payload:{url:(0,a.ys)(e.uuid),method:"GET"}}),c=e=>({type:o.GET_EDIT_PRESET_DETAILS_REQUEST,payload:{url:(0,a.ys)(e.uuid),method:"GET"}}),E=e=>({type:o.UPDATE_PRESET_REQUEST,payload:{...e,url:(0,a.bx)(e.uuid),method:"PUT"}}),_=e=>({type:o.DELETE_PRESET_REQUEST,payload:{method:"DELETE",url:(0,a.R5)(e.uuid)}})},66756:(e,t,r)=>{r.d(t,{Ek:()=>u,Fh:()=>d,J$:()=>E,NF:()=>_,TK:()=>T,VV:()=>p,WK:()=>g,aR:()=>c,nA:()=>s});var a=r(69732),o=r(1502),n=r(73462),l=r(35469);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,r]=(0,n.B5)(),[l]=(0,a.useServiceRequest)(r),i=(0,o.useRef)(l),d=(0,o.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await i.current(e({...t}))}),[e]);return[t,d]},d=()=>i(l.ko),p=()=>i(l.qr),s=()=>i(l.oh),c=()=>i(l.pQ),E=()=>i(l.qJ),_=()=>i(l.gc),T=()=>i(l.Uy),u=()=>i(l.Rz),g=()=>i(l.BC)},77980:(e,t,r)=>{r.d(t,{D:()=>o});var a=r(67816);const o=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";a.notification[e]({message:t,description:r||""})}},8624:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1502),o=r.n(a),n=r(24952);class l extends o().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:r=null}=this.props;return e.find((e=>e===t))?this.props.children:r}}l.defaultProps={permissions:[]};const i=(0,n.connect)((e=>({permissions:e.Auth.permissions})),{})(l)},21577:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(67816);const o=a.Table}}]);
//# sourceMappingURL=2335.4aaaf769.chunk.js.map