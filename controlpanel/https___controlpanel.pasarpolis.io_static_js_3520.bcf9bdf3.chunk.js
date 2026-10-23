"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3520],{3428:(e,t,a)=>{a.d(t,{A:()=>g});var r=a(69732),n=a(67816),o=a(95916),l=a(1502),i=a(17135),d=a(77980),c=a(80746),s=a(41669),p=a(50547),_=a(80878);const u=a.n(_)().div`
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
`;var m=a(881),h=a(33097),T=a.n(h),E=a(70579);const g=n.Form.create()((function(e){const{defaultValues:t}=e,a=(0,l.useRef)(""),[_,h]=(0,l.useState)(T()(t,"logo_url","")),[g,x]=(0,l.useState)({lat:T()(t,"headquarter_branch.location.latitude",""),lng:T()(t,"headquarter_branch.location.longitude","")}),[I,y]=(0,l.useState)(T()(t,"cancellation_details.enable_auto_cancel",!1)),[b,f]=(0,l.useState)(""),C=(0,l.useCallback)((e=>{x(e)}),[]),[,v]=(0,p._X)(),[{ADD_PROVIDER_ERROR:S,addProviderStatus:A},D]=(0,r.useErrorContextValue)();(0,l.useEffect)((()=>{"success"===A?(t?(0,d.D)("success","Provider successfully Edited"):(0,d.D)("success","A new provider is successfully added"),D((0,r.resetError)({addProviderStatus:""})),t?e.onGetProviderDetail({providerCode:null===t||void 0===t?void 0:t.code}):e.onFetchProviderList({}),e.onCloseProviderForm()):S&&A&&((0,d.D)("error",A),D((0,r.resetError)({addProviderStatus:""})))}),[A,t,D,S,e]);const N=(0,l.useCallback)((r=>{r.preventDefault(),_||f("Please Upload Logo!"),e.form.validateFields((async(e,r)=>{if(!e){const e=await a.current();if(!(0,o.isEmpty)(e)){const a={headquarter_branch:{location:{...e,latitude:g.lat?g.lat:null,longitude:g.lng?g.lng:null},claims_email:r.claims_email,claims_contact_no:r.claims_contact_no},code:r.code,name:r.name,logo_url:_,email:r.email,cancellation_details:{enable_auto_cancel:r.enable_auto_cancel,...r.enable_auto_cancel?{provider_ppw_days:r.provider_ppw_days||0}:{provider_ppw_days:60}}};v({providerCode:null===t||void 0===t?void 0:t.code,body:a})}}}))}),[g,_,v,t,e.form]),O=(0,l.useCallback)((t=>(0,i.A)({...t,getFieldDecorator:e.form.getFieldDecorator,getFieldValue:e.form.getFieldValue})),[e.form]),R=(0,l.useCallback)((e=>e.map(((e,t)=>O(e)))),[O]),k=(0,l.useCallback)((e=>{a.current=e}),[]),P=(0,l.useCallback)((e=>{f(""),h(e)}),[]),G=(0,l.useCallback)((()=>{h("")}),[]),U=(0,l.useMemo)((()=>{let e=T()(t,"headquarter_branch.location",{});return null===e&&(e={}),e}),[t]);return(0,E.jsx)(u,{children:(0,E.jsxs)(n.Form,{onSubmit:N,children:[R([{name:"name",title:"Provider Name",subTitle:"name",type:"text",defaultValue:T()(t,"name",""),max:80,min:3},{name:"code",title:"Provider Code",type:"text",defaultValue:T()(t,"code",""),max:30},{name:"email",title:"Email",subTitle:"email",type:"email",defaultValue:T()(t,"email",""),required:!1,max:240}]),(0,E.jsx)("p",{children:"Upload Logo"}),(0,E.jsx)("div",{className:"errorText",children:b}),(0,E.jsx)(s.A,{onSave:e=>P(e),name:"provider_logo",img:_,isNew:!_,fileType:".png,.jpg,.jpeg",onRemove:G}),(0,E.jsx)(c.A,{address:U,onGetSubmitMethod:k,fullWidth:!0}),R([{name:"claims_contact_no",title:"Contact Number for Claims",subTitle:"claims_contact_no",type:"number",defaultValue:T()(t,"headquarter_branch.claims_contact_no",""),required:!1,max:14},{name:"claims_email",title:"Email for Claims",subTitle:"claims_email",type:"email",defaultValue:T()(t,"headquarter_branch.claims_email",""),required:!1,max:240}]),R([{name:"enable_auto_cancel",radioDataKey:"enable_auto_cancel",title:"Auto Cancel Outstanding Payment",subTitle:"enable_auto_cancel",type:"hybrid_radio",defaultValue:I,isKeyDisabled:()=>!0,isEnableType:!0,onlyRadio:!0,runtimeRequestParams:{},handleRuntimeParams:e=>{y((()=>e.value))},data:[{value:!0,title:"Yes"},{value:!1,title:"No"}]}]),I&&R([{name:"provider_ppw_days",title:"Payment Period (days)",subTitle:"provider_ppw_days",type:"number",max:999,min:0,defaultValue:T()(t,"cancellation_details.provider_ppw_days",60),required:!0}]),(0,E.jsx)("p",{className:"label",children:" Select Location: "}),(0,E.jsx)(m.A,{latLng:g,onLatLngChange:C}),(0,E.jsx)(n.Row,{justify:"end",type:"flex",children:(0,E.jsx)(n.Button,{className:"mt-20",type:"primary",htmlType:"submit",children:"Submit"})})]})})}))},70073:(e,t,a)=>{a.d(t,{CM:()=>x,EK:()=>m,Eh:()=>u,Ls:()=>h,Q_:()=>y,Rb:()=>E,Ub:()=>T,pX:()=>I,vU:()=>g});a(1502);var r=a(67816),n=a(8624),o=a(63995),l=a(96760),i=a(54589),d=a.n(i),c=a(17823),s=a.n(c),p=a(70579);const _=new(d());function u(e){let{handleProviderDetailPage:t,searchTextQuery:a,handleInputChange:i,handleSearch:d,isFilterVisible:c,setIsFilterVisible:u,isChange:m}=e;return[{key:"provider_action",title:"Action",dataIndex:"provider_id",render:(e,a)=>(0,p.jsx)(n.A,{requiredPermission:"ops.view_agent_provider_list",children:(0,p.jsx)("i",{className:"far fa-eye agent-config-btn",onClick:()=>t(a.code)})}),align:"center"},{key:"provider_name",title:"Name",dataIndex:"name",filterIcon:(0,p.jsx)(r.Icon,{type:"search",style:{color:a.name&&l.l.blue}}),filterDropdown:(0,p.jsx)(o.A,{idIdentifier:"name",className:"agent-table-search",searchText:m?a.name:"",onInputChange:e=>i(e,"name"),onSearch:e=>d(e,"name")}),filterDropdownVisible:"name"===c,onFilterDropdownVisibleChange:e=>u(e?"name":a.name)},{key:"provider_code",title:"Code",dataIndex:"code",filterIcon:(0,p.jsx)(r.Icon,{type:"search",style:{color:a.code&&"#1890ff"}}),filterDropdown:(0,p.jsx)(o.A,{idIdentifier:"agent_code_id",className:"agent-table-search",searchText:m?a.code:"",onInputChange:e=>i(e,"code"),onSearch:e=>d(e,"code")}),filterDropdownVisible:"code"===c,onFilterDropdownVisibleChange:e=>u(e?"code":a.code)},{key:"provider_email",title:"Email",dataIndex:"email",align:"center"},{key:"provider_contact_number",title:"Phone No (Claims)",dataIndex:"headquarter_branch.claims_contact_no",align:"center"},{key:"provider_claims_email",title:"Email (claims)",dataIndex:"headquarter_branch.claims_email",align:"center"},{key:"provider_created_at",title:"Created At",dataIndex:"created_at",align:"center",render:(e,t)=>{const a=_.get("userProfile").user_timezone;return s()(e).tz(a).format("MMM DD,YYYY hh:mm A")}}]}function m(e){let{handleAction:t}=e;return[{key:"user_name",title:"Name",dataIndex:"name",align:"center"},{key:"user_email",title:"Email",dataIndex:"email",align:"center"},{key:"user_phone",title:"Phone No",dataIndex:"phone",align:"center"},{key:"user_active",title:"Active",dataIndex:"is_active",render:e=>e?"True":"False",align:"center"},{key:"user_action",title:"Action",render:(e,a)=>(0,p.jsx)(n.A,{requiredPermission:"ops.view_agent_provider_details",children:(0,p.jsxs)(r.Row,{type:"flex",justify:"space-between",children:[(0,p.jsx)(r.Col,{children:(0,p.jsx)(r.Button,{type:"link",onClick:()=>t("revoke",a),children:" Revoke "})}),(0,p.jsx)(r.Col,{children:(0,p.jsx)("i",{className:"fa fa-edit edit-icon",onClick:()=>t("edit",a)})})]})}),align:"center"}]}function h(e){let{handleAction:t}=e;return[{key:"branch_name",title:"Name",dataIndex:"name",align:"center"},{key:"branch_email",title:"Email",dataIndex:"email",align:"center"},{key:"branch_active",title:"Active",dataIndex:"is_active",render:e=>e?"True":"False",align:"center"},{key:"branch_claims_email",title:"Email for Claims",dataIndex:"claims_email",align:"center"},{key:"branch_claims_contact_no",title:"Contact Number for Claims",dataIndex:"claims_contact_no",align:"center"},{key:"branch_city_name",title:"City",dataIndex:"location.city_name",align:"center"},{key:"branch_province_name",title:"Province",dataIndex:"location.province_name",align:"center"},{key:"branch_postal_code",title:"Zip Code",dataIndex:"location.postal_code",align:"center"},{key:"branch_address",title:"Address",dataIndex:"location.address",align:"center"},{key:"branch_created_at",title:"Created At",dataIndex:"created_at",align:"center",render:e=>{const t=_.get("userProfile").user_timezone;return s()(e).tz(t).format("MMM DD,YYYY hh:mm A")}},{key:"branch_created_by",title:"Created By",dataIndex:"created_by",align:"center"},{key:"branch_action",title:"Action",dataIndex:"branch_id",render:(e,a)=>(0,p.jsx)(n.A,{requiredPermission:"ops.view_agent_provider_details",children:(0,p.jsxs)(r.Row,{type:"flex",justify:"space-between",children:[(0,p.jsx)(r.Col,{children:(0,p.jsx)(r.Button,{type:"link",onClick:()=>t("revoke",a),children:" Revoke "})}),(0,p.jsx)(r.Col,{children:(0,p.jsx)("i",{className:"fa fa-edit edit-icon",onClick:()=>t("edit",a)})})]})}),align:"center"}]}function T(e){let{handleAction:t,setShowTieringOptions:a}=e;return[{key:"config_name",title:"Name",dataIndex:"config_name",align:"center"},{key:"product",title:"Product Name",dataIndex:"product",align:"center"},{key:"package",title:"Package Name",dataIndex:"package",align:"center"},{key:"commission",title:"Brokerage Fee %",dataIndex:"commission",align:"center"},{key:"agreement_type",title:"Engineering Fee Type",dataIndex:"agreement_type",align:"center"},{key:"extra_commission",title:"Engineering Fee Logic",dataIndex:"extra_commission",align:"center",render:e=>isNaN(e)?(0,p.jsx)(r.Icon,{type:"eye",className:"isoEditIcon",onClick:()=>a({value:e,visible:!0})}):e},{key:"effective_period",title:"Effective Period",dataIndex:"Effective Period",align:"center",render:(e,t)=>`${s()(t.validity_start_date).format("DD-MM-YYYY")} to ${s()(t.validity_end_date).format("DD-MM-YYYY")}`},{key:"created_at",title:"Created at",dataIndex:"created_at",align:"center"},{key:"created_by",title:"Created by",dataIndex:"created_by",align:"center"},{key:"updated_at",title:"Updated at",dataIndex:"updated_at",align:"center"},{key:"updated_by",title:"Updated by",dataIndex:"updated_by",align:"center"},{key:"config_action",title:"Action",dataIndex:"config_id",render:(e,a)=>(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Col,{children:(0,p.jsx)(r.Icon,{type:"eye",className:"isoEditIcon",onClick:()=>t("",a)})}),(0,p.jsx)(r.Col,{children:(0,p.jsx)("i",{className:"fa fa-edit edit-icon",onClick:()=>t("edit",a)})})]}),align:"center"}]}function E(e){let{handleAction:t}=e;return[{key:"name",title:"Name",dataIndex:"name",align:"center"},{key:"product",title:"Product",dataIndex:"product",align:"center"},{key:"quotation_slip_pic",title:"Quotation Slip PIC",dataIndex:"quotation_slip_pic",align:"center",render:(e,t)=>(0,p.jsx)("div",{children:null!==t&&void 0!==t&&t.quotation_slip_pic?"Yes":"No"})},{key:"closing_slip_pic",title:"Closing Slip PIC",dataIndex:"closing_slip_pic",align:"center",render:(e,t)=>(0,p.jsx)("div",{children:null!==t&&void 0!==t&&t.closing_slip_pic?"Yes":"No"})},{key:"email",title:"Email",dataIndex:"email",align:"center"},{key:"send_email",title:"Send Email",dataIndex:"send_email",align:"center",render:(e,t)=>(0,p.jsx)("div",{children:null!==t&&void 0!==t&&t.send_email?"Yes":"No"})},{key:"config_action",title:"Action",dataIndex:"config_id",render:(e,a)=>(0,p.jsxs)(r.Row,{type:"flex",justify:"space-between",children:[(0,p.jsx)(r.Col,{children:(0,p.jsx)(r.Button,{type:"link",onClick:()=>t("revoke",a),children:" Revoke "})}),(0,p.jsx)(r.Col,{children:(0,p.jsx)("i",{className:"fa fa-edit edit-icon",onClick:()=>t("edit",a)})})]}),align:"center"}]}const g=[{key:"gross_premium_individual_policy",param:"net_premium",source_type:"Gross Premium Individual Policy",agreement_type:"FLAT"},{key:"gross_premium_monthly_basis",param:"net_premium",source_type:"Gross Premium Monthly Basis",agreement_type:"MONTHLY"},{key:"gross_premium_annual_basis",param:"net_premium",source_type:"Gross Premium Annual Basis",agreement_type:"CUSTOM"},{key:"gross_premium_custom_period",param:"net_premium",source_type:"Gross Premium Custom Period",agreement_type:"CUSTOM"},{key:"total_sum_insured_individual_policy",param:"total_sum_insured",source_type:"Total Sum Insured Individual Policy",agreement_type:"FLAT"}],x=[{key:"vehicle_type",param:"vehicle_type",source_type:"Vehicle Type",agreement_type:"FLAT"},{key:"total_units",param:"total_units",source_type:"Total Units",agreement_type:"CUSTOM"},{key:"age_of_vehicle",param:"vehicle_age",source_type:"Age of Vehicle",agreement_type:"FLAT"}],I=[{key:"passanger_car",value:"Passanger Car"},{key:"truck_pickup",value:"Truck/Pickup"},{key:"bus",value:"Bus"}],y=[{code:"Yes",name:"Yes"},{code:"No",name:"No"}]},97228:(e,t,a)=>{a.d(t,{m1:()=>c,NM:()=>s});var r=a(1502),n=a(79866);const o={},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{type:a,payload:r={}}=t;switch(a){case n.TM.GET_USER_LIST:case n.TM.GET_PROVIDER_LIST:case n.TM.GET_PROVIDER_DETAIL:case n.TM.GET_USER_DETAIL:case n.TM.GET_BRANCH_LIST:case n.TM.GET_INCOMING_COMMISSION_CONFIG_LIST:case n.TM.ADD_INCOMING_COMMISSION_CONFIG:case n.TM.UPDATE_INCOMING_COMMISSION_CONFIG:case n.TM.GET_PRODUCT_LIST:case n.TM.ADD_PROVIDER:case n.TM.ADD_USER:case n.TM.ADD_BRANCH:case n.TM.GET_INDEPENDENT_PACKAGE_LIST:case n.TM.GET_QUOTATION_DETAIL_LIST:case n.TM.ADD_QUOTATION_DETAIL:return{...e,...r};default:return{...e||{}}}};var i=a(70579);const d=(0,r.createContext)(),c=e=>(0,i.jsx)(d.Provider,{value:(0,r.useReducer)(l,o),children:e.children}),s=()=>(0,r.useContext)(d)},79866:(e,t,a)=>{a.d(t,{Bh:()=>o,He:()=>p,J$:()=>d,M:()=>l,Or:()=>E,S4:()=>c,TM:()=>n,Zi:()=>u,aU:()=>i,nu:()=>m,p1:()=>g,pQ:()=>T,qr:()=>_,rC:()=>s,ys:()=>h,zw:()=>x});var r=a(175);const n={GET_PROVIDER_LIST_REQUEST:"GET_PROVIDER_LIST_REQUEST",GET_PROVIDER_LIST:"GET_PROVIDER_LIST",GET_PROVIDER_DETAIL_REQUEST:"GET_PROVIDER_DETAIL_REQUEST",GET_PROVIDER_DETAIL:"GET_PROVIDER_DETAIL",GET_USER_LIST_REQUEST:"GET_USER_LIST_REQUEST",GET_USER_LIST:"GET_USER_LIST",GET_USER_DETAIL_REQUEST:"GET_USER_DETAIL_REQUEST",GET_USER_DETAIL:"GET_USER_DETAIL",GET_BRANCH_LIST_REQUEST:"GET_BRANCH_LIST_REQUEST",GET_BRANCH_LIST:"GET_BRANCH_LIST",GET_INCOMING_COMMISSION_CONFIG_LIST_REQUEST:"GET_INCOMING_COMMISSION_CONFIG_LIST_REQUEST",GET_INCOMING_COMMISSION_CONFIG_LIST:"GET_INCOMING_COMMISSION_CONFIG_LIST",GET_PRODUCT_LIST_REQUEST:"GET_PRODUCT_LIST_REQUEST",GET_PRODUCT_LIST:"GET_PRODUCT_LIST",GET_INDEPENDENT_PACKAGE_LIST:"GET_INDEPENDENT_PACKAGE_LIST",GET_INDEPENDENT_PACKAGE_LIST_REQUEST:"GET_INDEPENDENT_PACKAGE_LIST_REQUEST",ADD_INCOMING_COMMISSION_CONFIG_REQUEST:"ADD_INCOMING_COMMISSION_CONFIG_REQUEST",ADD_INCOMING_COMMISSION_CONFIG:"ADD_INCOMING_COMMISSION_CONFIG",UPDATE_INCOMING_COMMISSION_CONFIG_REQUEST:"UPDATE_INCOMING_COMMISSION_CONFIG_REQUEST",UPDATE_INCOMING_COMMISSION_CONFIG:"UPDATE_INCOMING_COMMISSION_CONFIG",ADD_PROVIDER_REQUEST:"ADD_PROVIDER_REQUEST",ADD_PROVIDER:"ADD_PROVIDER",ADD_USER_REQUEST:"ADD_USER_REQUEST",ADD_USER:"ADD_USER",ADD_BRANCH_REQUEST:"ADD_BRANCH_REQUEST",ADD_BRANCH:"ADD_BRANCH",GET_QUOTATION_DETAIL_LIST:"GET_QUOTATION_DETAIL_LIST",GET_QUOTATION_DETAIL_LIST_REQUEST:"GET_QUOTATION_DETAIL_LIST_REQUEST",ADD_QUOTATION_DETAIL:"ADD_QUOTATION_DETAIL",ADD_QUOTATION_DETAIL_REQUEST:"ADD_QUOTATION_DETAIL_REQUEST",UPDATE_QUOTATION_DETAIL:"UPDATE_QUOTATION_DETAIL",UPDATE_QUOTATION_DETAIL_REQUEST:"UPDATE_QUOTATION_DETAIL"},o=e=>({type:n.GET_PROVIDER_DETAIL_REQUEST,payload:{...e,method:"GET",url:(0,r.zi)(e.providerCode)}}),l=e=>({type:n.GET_PROVIDER_LIST_REQUEST,payload:{...e,method:"GET",url:r.b2}}),i=e=>({type:n.GET_USER_LIST_REQUEST,payload:{...e,method:"GET",url:r.WR}}),d=e=>({type:n.GET_BRANCH_LIST_REQUEST,payload:{...e,method:"GET",url:(0,r.Bt)(e.providerCode)}}),c=e=>({type:n.GET_INCOMING_COMMISSION_CONFIG_LIST_REQUEST,payload:{...e,method:"GET",url:r.YR}}),s=e=>({type:n.ADD_INCOMING_COMMISSION_CONFIG_REQUEST,payload:{...e,method:"POST",url:r.N6}}),p=e=>({type:n.UPDATE_INCOMING_COMMISSION_CONFIG_REQUEST,payload:{...e,method:"PUT",url:(0,r.VU)(e.id)}}),_=e=>({type:n.GET_PRODUCT_LIST_REQUEST,payload:{...e,method:"GET",url:r.Mc}}),u=e=>({type:n.ADD_PROVIDER_REQUEST,payload:{...e,method:e.providerCode?"PUT":"POST",url:e.providerCode?(0,r.U3)(e.providerCode):r.xN}}),m=e=>({type:n.ADD_USER_REQUEST,payload:{...e,method:e.id?"PUT":"POST",url:e.id?(0,r.mJ)(e.id):r.T3}}),h=e=>({type:n.ADD_BRANCH_REQUEST,payload:{...e,method:e.branchCode?"PUT":"POST",url:(0,r.as)(e.providerCode)}}),T=e=>({type:n.GET_INDEPENDENT_PACKAGE_LIST_REQUEST,payload:{url:(0,r.vw)((null===e||void 0===e?void 0:e.productCode)||""),method:"GET"}}),E=e=>({type:n.GET_QUOTATION_DETAIL_LIST_REQUEST,payload:{...e,url:r._H,method:"GET"}}),g=e=>({type:n.ADD_QUOTATION_DETAIL_REQUEST,payload:{...e,url:r.RU,method:"POST"}}),x=e=>({type:n.UPDATE_QUOTATION_DETAIL_REQUEST,payload:{...e,url:(0,r.FG)(e.reference_id),method:"PUT"}})},50547:(e,t,a)=>{a.d(t,{$Q:()=>d,EU:()=>y,Ip:()=>u,NN:()=>I,Rh:()=>_,TC:()=>T,Yl:()=>p,Yr:()=>c,_X:()=>E,aM:()=>g,aR:()=>h,cY:()=>m,hr:()=>x,kt:()=>b,nv:()=>s});var r=a(69732),n=a(1502),o=a(97228),l=a(79866);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,o.NM)(),[l]=(0,r.useServiceRequest)(a),i=(0,n.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...t}))}),[l,e]);return[t,i]},d=()=>i(l.aU),c=()=>i(l.J$),s=()=>i(l.M),p=()=>i(l.Bh),_=()=>i(l.S4),u=()=>i(l.rC),m=()=>i(l.He),h=()=>i(l.pQ),T=()=>i(l.qr),E=()=>i(l.Zi),g=()=>i(l.nu),x=()=>i(l.ys),I=()=>i(l.Or),y=()=>i(l.p1),b=()=>i(l.zw)},96990:(e,t,a)=>{a.d(t,{h:()=>l});var r=a(80878),n=a.n(r),o=a(67816);const l=n()(o.InputNumber)`
  flex: 1;
  width: 100%;
  .ant-input-number-handler-wrap {
    display: none !important;
  }
`},80746:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(69732),n=a(1502),o=a(67816),l=a(94528),i=a(96990),d=a(97418),c=a(175);const s={getProvincesList:{dataKey:"GET_PROVINCE",url:c.JW},getCitiesList:{dataKey:"GET_CITY"},getZipCodesList:{dataKey:"GET_ZIPCODE"}};var p=a(70579);const _=o.Form.create()((function(e){let{form:t,onSave:a,address:_={},onCancel:u=()=>{},onGetSubmitMethod:m,fullWidth:h=!1}=e;const[T,E]=(0,n.useState)(!1),[g=[],x]=(0,r.useGet)(s.getCitiesList),[I=[],y]=(0,r.useGet)(s.getProvincesList),[b=[],f]=(0,r.useGet)(s.getZipCodesList),C=(0,n.useRef)({..._}),[{GET_CITY_LOADER:v,GET_PROVINCE_LOADER:S,GET_ZIPCODE_LOADER:A}]=(0,r.useLoaderContextValue)(),D=(0,n.useRef)({labelCol:{span:6},wrapperCol:{span:14}});(0,n.useEffect)((()=>{y(),_.province_code&&((0,d._v)()?f({},{url:(0,c.EF)(_.province_code)}):x({},{url:(0,c.iA)(_.province_code)}))}),[]);const N=(0,n.useCallback)(((e,a)=>{let{name:r,title:n,error:l,defaultValue:i}=e;const d={label:n};return h&&(d.labelCol={span:24},d.wrapperCol={span:24}),(0,p.jsx)(o.Form.Item,{...d,children:t.getFieldDecorator(r,{rules:[{required:!0,message:l||`Please enter ${n}`}],initialValue:i})(a)})}),[t.getFieldDecorator]),O=(0,n.useCallback)(((e,a,r)=>{"province"===r?(C.current={...C.current,...I[a.props.index]},t.resetFields(["city_code","postal_code"]),E(!0),(0,d._v)()?f({},{url:(0,c.EF)(e)}):x({},{url:(0,c.iA)(e)})):(0,d._v)()?C.current={...C.current,...b[a.props.index]}:C.current={...C.current,...g[a.props.index]}}),[x,f,I,g,b,t]),R=(0,n.useCallback)((async()=>new Promise(((e,a)=>{t.validateFields(((t,a)=>{e(t?{}:{...C.current,...a})}))}))),[]),k=(0,n.useCallback)((()=>{t.validateFields(((e,t)=>{if(!e)return a?void a({...C.current,...t}):{...C.current,...t}}))}),[a]);(0,n.useEffect)((()=>{m&&m(R)}),[]);const P=(e,t,a)=>e.map(((e,r)=>(0,p.jsx)(o.AutoComplete.Option,{value:e[t],index:r,children:e[a]},e[t])));return(0,p.jsx)(l.A,{isSpining:v||S||A,children:(0,p.jsxs)(o.Form,{...D.current,noValidate:!0,children:[N({name:"province_code",title:"Select Province",error:"Please select the Province!",defaultValue:T?"":null===_||void 0===_?void 0:_.province_code},(0,p.jsx)(o.AutoComplete,{dataSource:P(I,"province_code","province_name"),onSelect:(e,t)=>O(e,t,"province"),filterOption:(e,t)=>-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase()),placeholder:"Please select the province"})),(0,d._v)()?N({name:"postal_code",title:"Select Zip Code",error:"Please select the zip code!",defaultValue:T?"":null===_||void 0===_?void 0:_.postal_code},(0,p.jsx)(o.AutoComplete,{dataSource:P(b,"zipcode","zipcode"),filterOption:(e,t)=>-1!==t.props.children.indexOf(e),onSelect:(e,t)=>O(e,t,"zipcode"),placeholder:"Please enter the Zip Code"})):(0,p.jsxs)(p.Fragment,{children:[N({name:"city_code",title:"Select City",error:"Please select the city!",defaultValue:T?"":null===_||void 0===_?void 0:_.city_code},(0,p.jsx)(o.AutoComplete,{dataSource:P(g,"city_code","city_name"),filterOption:(e,t)=>-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase()),onSelect:(e,t)=>O(e,t,"city"),placeholder:"Please enter the city"})),N({name:"postal_code",title:"Postal Code",error:"Please Enter the Postal Code!",defaultValue:null===_||void 0===_?void 0:_.postal_code},(0,p.jsx)(i.h,{type:"number",placeholder:"Please enter the postal code"}))]}),N({name:"address",title:"Address",error:"Please Enter the address",defaultValue:null===_||void 0===_?void 0:_.address},(0,p.jsx)(o.Input.TextArea,{type:"text",placeholder:"Please enter the address"})),!m&&(0,p.jsxs)(o.Row,{type:"flex",justify:"end",align:"center",children:[(0,p.jsx)(o.Col,{xl:5,md:5,children:(0,p.jsx)(o.Button,{onClick:u,children:"Cancel"})}),(0,p.jsx)(o.Col,{children:(0,p.jsx)(o.Button,{type:"primary",onClick:k,children:"Save"})})]})]})})}));const u=function(e){return(0,p.jsx)(r.ApiContextProvider,{children:(0,p.jsx)(_,{...e})})}},881:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(67816),n=a(1502);var o=a(83772),l=a(80878);const i=a.n(l)().div`
  #searchTextField{
    background-color: #fff;
    background-image: none;
    border: 1px solid ${e=>e.theme.borderGrey};
    border-radius: 4px;
    width: 100%;
    padding: 4px 11px;
  }
  #searchTextField:focus{
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    outline: none;
  }
  #searchTextField:hover {
    border-color: ${e=>e.theme.borderBlue};
    border-right-width: 1px !important;
  }
  #map{
    margin-top: 20px;
    height: 30vh;
  }
  .hide{
    display: none;
  }
  .mt-15{
    margin-top: 15px;
  }
`;var d=a(97418),c=a(28599),s=a(70579);const p=function(e){const{onLatLngChange:t,latLng:a}=e,[l,p]=(0,n.useState)(!1),_=(0,n.useCallback)((function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&p(!0),t(e)}),[t]),u=(0,n.useCallback)((()=>{const e=window.google,t=document.getElementById("searchTextField"),a=new e.maps.places.Autocomplete(t,{componentRestrictions:{country:(0,c.A)()?["vn"]:["id"]},fields:["address_components","geometry","icon","name"]});e.maps.event.addListener(a,"place_changed",(0,d.sg)((()=>{const t=a.getPlace(),r=t.geometry.location.lat(),n=t.geometry.location.lng();_({lat:r,lng:n});const o=new e.maps.Map(document.getElementById("map"),{center:{lat:r,lng:n},zoom:15}),l=new e.maps.Marker({position:{lat:r,lng:n},map:o,draggable:!0});e.maps.event.addListener(l,"drag",(function(e){_({lat:e.latLng.lat(),lng:e.latLng.lng()})}))}),200))}),[_]);return(0,n.useEffect)((()=>{window.google?u():((e,t,a,r)=>{const n=document.getElementById(t);if(!n){const n=document.createElement("script");n.src=e,n.id=t;for(const e in a)n.setAttribute(e,a[e]);document.body.appendChild(n),n.onload=()=>{r&&r()}}n&&r&&r()})(o.n_,"gplaces","",u)}),[u]),(0,s.jsxs)(i,{children:[(0,s.jsx)("input",{id:"searchTextField",type:"text",size:"50"}),(0,s.jsx)("div",{id:"map",className:""+(l?"":"hide")}),(0,s.jsxs)(r.Row,{className:"mt-15",type:"flex",justify:"space-between",children:[(0,s.jsxs)(r.Col,{span:11,children:[(0,s.jsx)("p",{children:" Longitude "}),(0,s.jsx)(r.Input,{type:"text",placeholder:"Longitude",onChange:e=>{_({...a,lng:e.target.value},!1)},value:a.lng})]}),(0,s.jsxs)(r.Col,{span:11,children:[(0,s.jsx)("p",{children:" Latitude "}),(0,s.jsx)(r.Input,{type:"text",placeholder:"Latitude",onChange:e=>{_({...a,lat:e.target.value},!1)},value:a.lat})]})]})]})}},55611:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(21577),n=a(80878),o=a.n(n),l=a(34618),i=a(67050),d=a(93317);const c=o()(r.A)`
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
`,s=o().div`
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
`,p=((0,d.A)(s),(0,d.A)(c))},8624:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(1502),n=a.n(r),o=a(24952);class l extends n().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}l.defaultProps={permissions:[]};const i=(0,o.connect)((e=>({permissions:e.Auth.permissions})),{})(l)},63995:(e,t,a)=>{a.d(t,{A:()=>E});var r=a(1502),n=a.n(r),o=a(8568),l=a(41528),i=a(67816),d=a(70579);class c extends n().Component{constructor(){super(...arguments),this.handleChangeField=e=>{const{value:t}=e.target;(/^[0-9]{1,2}[-]?\d*$/.test(t)||""===t)&&this.props.onChange(e)}}render(){return(0,d.jsx)(i.Input,{...this.props,onChange:this.handleChangeField})}}const s=c;var p=a(80878),_=a.n(p),u=a(34618),m=a(67050);const h=_().div`
  padding: 20px;
  display: flex;
  border: 1px solid ${e=>e.theme.borderGrey};
  ${(0,m.MS)("0 1px 6px rgba(0,0,0,0.2)")};

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
    ${(0,m.Vq)("3px 0 0 3px")};
    ${(0,m.kY)()};
    ${(0,m.MS)("none")};

    &:focus,
    &:hover {
      border-color: ${(0,u.palette)("secondary",7)};
      ${(0,m.MS)("none")};
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
    ${(0,m.kY)()};
    
    &:hover {
      background-color: ${(0,u.palette)("primary",1)};
    }
  }
`;class T extends r.Component{render(){const{onInputChange:e,onSearch:t,idIdentifier:a,searchText:r,invalid:n,className:i=""}=this.props;return(0,d.jsxs)(h,{className:i,children:["mobileNo"===a?(0,d.jsx)(s,{id:a,placeholder:"Search...",value:r,onChange:e,onPressEnter:t,style:{border:n?"1px solid red":""}}):(0,d.jsx)(o.Ay,{id:a,placeholder:"Search...",value:""!==r?r:"",onChange:e,onPressEnter:t,style:{border:n?"1px solid red":""}}),(0,d.jsx)(l.A,{style:{border:n?"1px solid red":""},type:"primary",onClick:t,disabled:n||!r,children:"Search"})]})}}const E=T},21577:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(67816);const n=r.Table},28599:(e,t,a)=>{a.d(t,{A:()=>r});const r=()=>window.location.pathname.includes("agent/vn")}}]);
//# sourceMappingURL=3520.bcf9bdf3.chunk.js.map