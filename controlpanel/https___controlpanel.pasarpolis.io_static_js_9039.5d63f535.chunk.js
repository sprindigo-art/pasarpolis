"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9039],{69039:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var a=r(1502),i=r.n(a),o=r(24952),n=r(67816),s=r(95916),d=r(84029),l=r(60452),c=r(98479),p=r(55611),h=r(62451),u=r(36934),g=r(17823),f=r.n(g),y=r(38094),m=r.n(y),_=r(93807),x=r(8624),b=r(94528),D=r(41528),I=r(80878);const C=r.n(I)().div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;var w=r(70579);const{Option:v}=n.Select;const S=function(e){const{onInputChange:t,onSearch:r,idIdentifier:i,searchText:o,optionData:s,renderOption:d}=e,l=(0,a.useCallback)((e=>e.map((e=>(0,w.jsx)(v,{value:e.code,children:e.name},e.code)))),[]);return(0,w.jsxs)(C,{children:[(0,w.jsx)(n.Select,{mode:"multiple",id:i,onChange:t,style:{width:"155px"},children:d?d(s):l(s)}),(0,w.jsx)(D.A,{type:"primary",onClick:r,disabled:void 0===o||""===o,style:{marginTop:"10px"},children:"Search"})]})};var P=r(97418),A=r(6182),T=r.n(A),N=r(28599),k=r(68863);const{getAgentInsuranceList:$,resetAgentRedux:E}=h.A,{getAgentProductList:V,getAgentProviderList:j,getBranchList:L}=T().agentPolicyReduxActions;class Y extends i().Component{constructor(e){var t;super(e),t=this,this.handleTableChange=(e,t,r)=>{const{searchTextQuery:a}=this.state,{history:i,location:o}=this.props,{pageSize:n,current:d}=e,l=d,c=(0,s.get)(r,"column.key",""),p=c?{ReferenceID:"reference_id",ApplicationNo:"app_no",InsurancePolicyNo:"insurance_policy_no",CustomerName:"name",CustomerEmail:"email",CustomerPhoneNo:"mobile_no",PolicyState:"policy_state",PaymentStatus:"payment_status",HardcopyReceiveDate:"hard_copy_receive_date",HardcopySentDate:"hard_copy_sent_date",DeliveryType:"type_of_delivery",CreatedAt:"created_at",ProviderUpdatedAt:"provider_updated_at"}[c]:"",h=p?{order_by:p}:{},u={...m().parse(o.search),...a,page:l,page_size:n,...h};p||delete u.order_by;const g=(0,_.A)(u);this.setState({pagination:e,pageSize:n},(()=>{i.push({pathname:o.pathname,search:g}),this.fetch({...u})}))},this.onSearch=(e,t)=>{e.preventDefault();const{searchTextQuery:r}=this.state,{location:a,history:i}=this.props;let o={...r};"provider_code"===t&&this.props.getBranchList(o.provider_code),"insurance_policy_no"===t&&(o={...o,policy_no:o.insurance_policy_no}),"hard_copy_sent"===t&&(o={...o,hard_copy_sent:("Sent"===r.hard_copy_sent).toString()}),"hard_copy_required"===t&&(o={...o,hard_copy_required:("Yes"===r.hard_copy_required).toString()}),"endorsement_present"===t&&(o={...o,endorsement_present:("Yes"===r.endorsement_present).toString()}),"source"===t&&"all"===r.source&&delete o.source;const n=(0,_.A)(o);i.push({pathname:a.pathname,search:n}),Object.values(r).length>0&&(this.setState({filterReferenceID:!1,filterAppNo:!1,filterSource:!1,filterProductKey:!1,filterInsurancePolicyNo:!1,filterCustomerName:!1,filterAgentCode:!1,filterAgentEmail:!1,filterAgentPhoneNo:!1,filterPartner:!1,filterProduct:!1,filterCreatedAt:!1,filterPhoneNo:!1,filterPurchaseType:!1,filterProviderBranch:!1,filterHardcopyCourierStatus:!1,filterPolicyState:!1,filterPaymentStatus:!1,filterEndorsementPresent:!1,filterHardCopyStatus:!1,filterHardcopyReceiveDate:!1,filterHardcopySentDate:!1,filterDeliveryType:!1,filterHardCopyRequired:!1,filterCustomerEmail:!1,filterProviderUpdatedAt:!1,searchTextQuery:o}),this.fetch((0,P.QN)(o)))},this.handleInputChange=function(e,r){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{searchTextQuery:i}=t.state;t.setState({searchTextQuery:{...i,[r]:a?e:e.target.value},isChange:!0})},this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:r,page_size:a,orderBy:i,startDate:o,endDate:n}=e,d=Number(r)||1,l=Number(a)||10;delete e.page,delete e.page_size;const c={};(0,s.has)(e,"hard_copy_sent")&&(c.hard_copy_sent="true"===e.hard_copy_sent?"Sent":"Not Sent"),(0,s.has)(e,"hard_copy_required")&&(c.hard_copy_required="true"===e.hard_copy_required?"Yes":"No"),(0,s.has)(e,"endorsement_present")&&(c.endorsement_present="true"===e.endorsement_present?"Yes":"No"),t.setState({searchText:"",policyFilter:{...e,...c},orderIdentifier:i,page:d,pageSize:l});const p={...e,orderBy:i,page:d,page_size:l,startDate:o,endDate:n};t.props.isAgentInsuranceProvider&&(p.blacklist_status="PENDING_ON_AGENT,PENDING_PP_APPROVAL"),t.props.getAgentInsuranceList(p)},this.handleResetFilter=()=>{const{history:e,location:t}=this.props;this.setState({searchText:"",orderIdentifier:"",startDate:"",endDate:"",policyFilter:{},clearDate:!0,searchTextQuery:{}},(()=>{e.push(t.pathname),this.handleResetAgentRedux(),this.fetch()}))},this.handleTableDataChange=()=>{this.setState((e=>({showCoreTable:!e.showCoreTable})))},this.handleResetAgentRedux=()=>{this.props.resetAgentRedux()},this.removeFilter=e=>{const{searchTextQuery:t}=this.state,{history:r,location:a}=this.props;delete t[e];const i=(0,_.A)(t);r.push({pathname:a.pathname,search:i}),this.fetch(t)},this.getAgentColumns=()=>{const{searchTextQuery:e,policyFilter:t,isChange:r}=this.state,{isAgentInsuranceProvider:a}=this.props;return a?[]:[{key:"AgentCode",title:this.renderTitle("title-with-margin","Mitra Code"),dataIndex:"agent_code",filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"AgentCode",searchText:r?e.agent_code:t.agent_code,onInputChange:e=>this.handleInputChange(e,"agent_code"),onSearch:e=>this.onSearch(e,"agent_code")}),filterIcon:this.renderIcon(!!t.agent_code),filterDropdownVisible:this.state.filterAgentCode,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterAgentCode:e})}]},this.getDeliveryColumns=()=>{if(!this.isCourierEnabled)return[];const{isAgentInsuranceProvider:e}=this.props,{searchTextQuery:t,policyFilter:r,isChange:a}=this.state;return e?[]:[{key:"hardCopyCourierStatus",title:this.renderTitle("title-with-margin","Hardcopy Courier Status"),dataIndex:"hard_copy_courier_status",filterDropdown:(0,w.jsx)(c.Y2,{searchText:a?t.hard_copy_courier_status:r.hard_copy_courier_status,onInputChange:e=>this.handleInputChange(e,"hard_copy_courier_status"),onSearch:e=>this.onSearch(e,"hard_copy_courier_status"),optionData:["courier-pending","courier-sent","courier-not-reachable","courier-delivered"]}),filterIcon:this.renderIcon(!!r.hard_copy_courier_status),filterDropdownVisible:this.state.filterHardcopyCourierStatus,onFilterDropdownVisibleChange:e=>this.setState({filterHardcopyCourierStatus:e})}]},this.getColumns=()=>{const{searchTextQuery:e,policyFilter:t,isChange:r}=this.state,{agentProviderListData:a,agentProductList:i,agentPolicyListLoading:o,profileData:n,isAgentInsuranceProvider:d}=this.props,l=(0,s.get)(n,"user_timezone","UTC");let p={},h={};e.provider_code&&(h={filterDropdown:(0,w.jsx)(S,{searchText:r?e.provider_branch:t.provider_branch,onInputChange:e=>this.handleInputChange(e,"provider_branch",!0),onSearch:e=>this.onSearch(e,"provider_branch"),optionData:this.props.branchList||[]}),filterIcon:this.renderIcon(!!t.provider_branch),filterDropdownVisible:this.state.filterProviderBranch,onFilterDropdownVisibleChange:e=>this.setState({filterProviderBranch:e})});let u=["APPROVED","PENDING_APPROVAL","PENDING_CREATION","PENDING_PAYMENT","PENDING_DOCUMENT","COMPLETED","REJECTED","CANCELLED","PENDING_DORMANT_COVERAGE","PROVISIONAL_ISSUED","POST_CREATION"];return d||(u=[...u,"PENDING_ON_AGENT","PENDING_PP_APPROVAL"],p={filterDropdown:(0,w.jsx)(c.Ib,{idIdentifier:"partner",searchText:r?e.provider_code:t.provider_code,onInputChange:e=>this.handleInputChange(e,"provider_code"),onSearch:e=>this.onSearch(e,"provider_code"),partners:a}),filterIcon:this.renderIcon(!!t.provider_code),filterDropdownVisible:this.state.filterPartner,onFilterDropdownVisibleChange:e=>this.setState({filterPartner:e})}),o?[]:[{key:"Action",title:"Action",dataIndex:"reference_id",render:e=>(0,w.jsx)(x.A,{requiredPermission:"ops.view_agent_policy_detail",children:(0,w.jsx)("i",{className:"far fa-eye",onClick:()=>this.detailPage(e)})}),align:"center"},{key:"ReferenceID",title:this.renderTitle("title-with-margin","Reference ID"),dataIndex:"reference_id",filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"reference_id",searchText:r?e.ref_id:t.ref_id,onInputChange:e=>this.handleInputChange(e,"ref_id"),onSearch:e=>this.onSearch(e,"ref_id")}),filterIcon:this.renderIcon(!!t.ref_id),filterDropdownVisible:this.state.filterReferenceID,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterReferenceID:e})},{key:"ProductCode",title:this.renderTitle("title-with-margin","Product ID"),dataIndex:"provider_package.package.product.code",filterDropdown:(0,w.jsx)(c.TW,{idIdentifier:"productKey",searchText:r?e.product_code:t.product_code,onInputChange:e=>this.handleInputChange(e,"product_code"),onSearch:e=>this.onSearch(e,"product_code"),dataProducts:i,dataKey:"code",searchDefinition:"policyFilters"}),filterIcon:this.renderIcon(!!t.product_code),filterDropdownVisible:this.state.filterProduct,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProduct:e})},{key:"ApplicationNo",title:this.renderTitle("title-with-margin","Application No"),dataIndex:"app_no",filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"app_no",searchText:r?e.app_no:t.app_no,onInputChange:e=>this.handleInputChange(e,"app_no"),onSearch:e=>this.onSearch(e,"app_no")}),filterIcon:this.renderIcon(!!t.app_no),filterDropdownVisible:this.state.filterAppNo,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterAppNo:e})},{key:"InsurancePolicyNo",title:this.renderTitle("title-with-margin","Policy No"),dataIndex:"insurance_policy_no",render:e=>"TEMP"===e?"":e,filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"insurance_policy_no",searchText:r?e.policy_no:t.policy_no,onInputChange:e=>this.handleInputChange(e,"policy_no"),onSearch:e=>this.onSearch(e,"policy_no")}),filterIcon:this.renderIcon(!!t.policy_no),filterDropdownVisible:this.state.filterInsurancePolicyNo,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterInsurancePolicyNo:e})},{key:"purchase_type",title:this.renderTitle("title-with-margin","Policy Type"),dataIndex:"purchase_type",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.purchase_type:t.purchase_type,onInputChange:e=>this.handleInputChange(e,"purchase_type"),onSearch:e=>this.onSearch(e,"purchase_type"),optionData:["new-purchase","renew-purchase","renew-from-other"]}),filterIcon:this.renderIcon(!!t.purchase_type),filterDropdownVisible:this.state.filterPurchaseType,onFilterDropdownVisibleChange:e=>this.setState({filterPurchaseType:e})},{key:"Provider",title:this.renderTitle("title-with-margin","Provider"),dataIndex:"provider_package.provider.code",sortDirections:["descend"],...p},{key:"CoinsuranceProviders",title:this.renderTitle("title-without-margin","Coinsurance Providers"),dataIndex:"coinsurance_providers",render:e=>Array.isArray(e)&&e.length>0?e.map((e=>e.provider_code)).join(", "):"-"},{key:"Branch",title:this.renderTitle("title-with-margin","Branch Location"),dataIndex:"provider_branch",render:e=>(0,s.get)(e,"name",""),...h},{key:"PolicyState",title:this.renderTitle("title-with-margin","Policy State"),dataIndex:"policy_state",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.status:t.status,onInputChange:e=>this.handleInputChange(e,"status"),onSearch:e=>this.onSearch(e,"status"),optionData:u}),filterIcon:this.renderIcon(!!t.status),filterDropdownVisible:this.state.filterPolicyState,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPolicyState:e})},{key:"PaymentStatus",title:this.renderTitle("title-with-margin","Payment Status"),dataIndex:"payment_status",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.payment_status:t.payment_status,onInputChange:e=>this.handleInputChange(e,"payment_status"),onSearch:e=>this.onSearch(e,"payment_status"),optionData:["PENDING_PAYMENT","PAID_IN_ADVANCE","PAID_AFTER_ISSUE","INSTALLMENT_PENDING"]}),filterIcon:this.renderIcon(!!t.payment_status),filterDropdownVisible:this.state.filterPaymentStatus,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPaymentStatus:e})},{key:"endorsement_present",title:this.renderTitle("title-with-margin","Policy Endorsed"),dataIndex:"endorsement_present",render:e=>e?"Yes":"No",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.endorsement_present:t.endorsement_present,onInputChange:e=>this.handleInputChange(e,"endorsement_present"),onSearch:e=>{this.onSearch(e,"endorsement_present")},optionData:["Yes","No"]}),filterIcon:this.renderIcon(!!t.endorsement_present),filterDropdownVisible:this.state.filterEndorsementPresent,sorter:!1,onFilterDropdownVisibleChange:e=>this.setState({filterEndorsementPresent:e})},{key:"source",title:this.renderTitle("title-with-margin","Source"),dataIndex:"agent.source",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.source:t.source,onInputChange:e=>this.handleInputChange(e,"source"),onSearch:e=>this.onSearch(e,"source"),optionData:["all",{name:"mitra",value:"agent"},"staff"]}),filterIcon:this.renderIcon(!!t.source),filterDropdownVisible:this.state.filterSource,sorter:!0,sortDirections:["descend"],render:(e,t,r)=>(0,k.replaceAgentAndAgency)(e),onFilterDropdownVisibleChange:e=>this.setState({filterSource:e})},{key:"hard_copy_required",title:this.renderTitle("title-with-margin","Hard Copy Required "),dataIndex:"hard_copy_required",render:e=>e?"Yes":"No",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.hard_copy_required:t.hard_copy_required,onInputChange:e=>this.handleInputChange(e,"hard_copy_required"),onSearch:e=>this.onSearch(e,"hard_copy_required"),optionData:["Yes","No"]}),filterIcon:this.renderIcon(!!t.hard_copy_required),filterDropdownVisible:this.state.filterHardCopyRequired,onFilterDropdownVisibleChange:e=>this.setState({filterHardCopyRequired:e})},{key:"hard_copy_sent",title:this.renderTitle("title-with-margin","Hard Copy Status"),dataIndex:"hard_copy_sent_date",render:e=>e?"Sent":"Not Sent",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.hard_copy_sent:t.hard_copy_sent,onInputChange:e=>this.handleInputChange(e,"hard_copy_sent"),onSearch:e=>this.onSearch(e,"hard_copy_sent"),optionData:["Sent","Not Sent"]}),filterIcon:this.renderIcon(!!t.hard_copy_sent),filterDropdownVisible:this.state.filterHardCopyStatus,onFilterDropdownVisibleChange:e=>this.setState({filterHardCopyStatus:e})},...this.getDeliveryColumns(),{key:"HardcopyReceiveDate",title:this.renderTitle("title-with-margin","Hard Copy from Provider"),dataIndex:"hard_copy_receive_date",render:e=>e?f()(e).tz(l).format("YYYY-MM-DD HH:mm:ss"):"",filterDropdown:(0,w.jsx)(c.QD,{idIdentifier:"HardcopyReceiveDate",onInputChange:this.handleInputChange,onSearch:e=>this.onSearchDate(e,"HardcopyReceiveDate"),isClear:this.state.clearDate,startDate:t.hard_copy_receive_date_start,endDate:t.hard_copy_receive_date_end}),filterIcon:this.renderIcon(!!t.hard_copy_receive_date_start&&!!t.hard_copy_receive_date_end),filterDropdownVisible:this.state.filterHardcopyReceiveDate,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterHardcopyReceiveDate:e})},{key:"HardcopySentDate",title:this.renderTitle("title-with-margin","Hard Copy Delivery Date"),dataIndex:"hard_copy_sent_date",render:e=>e?f()(e).tz(l).format("YYYY-MM-DD HH:mm:ss"):"",filterDropdown:(0,w.jsx)(c.QD,{idIdentifier:"HardcopySentDate",onInputChange:this.handleInputChange,onSearch:e=>this.onSearchDate(e,"HardcopySentDate"),isClear:this.state.clearDate,startDate:t.hard_copy_sent_date_start,endDate:t.hard_copy_sent_date_end}),filterIcon:this.renderIcon(!!t.hard_copy_sent_date_start&&!!t.hard_copy_sent_date_end),filterDropdownVisible:this.state.filterHardcopySentDate,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterHardcopySentDate:e})},{key:"DeliveryType",title:this.renderTitle("title-with-margin","Sending Type"),dataIndex:"type_of_delivery",filterDropdown:(0,w.jsx)(c.Y2,{searchText:r?e.type_of_delivery:t.type_of_delivery,onInputChange:e=>this.handleInputChange(e,"type_of_delivery"),onSearch:e=>this.onSearch(e,"type_of_delivery"),optionData:[{name:"pickup-by-mitra",value:"pickup-by-agent"},"pickup-by-marketing",...(0,N.A)()?[]:["shipped-by-pp"],"stored-at-pp"]}),filterIcon:this.renderIcon(!!t.type_of_delivery),filterDropdownVisible:this.state.filterDeliveryType,sorter:!0,sortDirections:["descend"],render:(e,t,r)=>(0,k.replaceAgentAndAgency)(e),onFilterDropdownVisibleChange:e=>this.setState({filterDeliveryType:e})},{key:"ProviderHitStatus",title:this.renderTitle("title-without-margin","Provider Hit Status"),dataIndex:"Provider"},{key:"CustomerName",title:this.renderTitle("title-with-margin","Customer Name"),dataIndex:"name",filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"CustomerName",searchText:r?e.customer_name:t.customer_name,onInputChange:e=>this.handleInputChange(e,"customer_name"),onSearch:e=>this.onSearch(e,"customer_name")}),filterIcon:this.renderIcon(!!t.customer_name),filterDropdownVisible:this.state.filterCustomerName,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCustomerName:e})},{key:"CustomerEmail",title:this.renderTitle("title-with-margin","Customer Email"),dataIndex:"email",filterDropdown:(0,w.jsx)(c.ZY,{idIdentifier:"CustomerEmail",searchText:r?e.customer_email:t.customer_email,onInputChange:e=>this.handleInputChange(e,"customer_email"),onSearch:e=>this.onSearch(e,"customer_email")}),filterIcon:this.renderIcon(!!t.customer_email),filterDropdownVisible:this.state.filterCustomerEmail,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCustomerEmail:e})},{key:"CustomerPhoneNo",title:this.renderTitle("title-with-margin","Customer Phone No"),dataIndex:"mobile_no",filterDropdown:(0,w.jsx)(c.v8,{searchText:r?e.customer_phone_no:t.customer_phone_no,onInputChange:e=>this.handleInputChange(e,"customer_phone_no"),onSearch:e=>this.onSearch(e,"customer_phone_no")}),filterIcon:this.renderIcon(!!t.customer_phone_no),filterDropdownVisible:this.state.filterPhoneNo,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPhoneNo:e})},...this.getAgentColumns(),{key:"CreatedAt",title:this.renderTitle("title-with-margin","Created At"),dataIndex:"created_at",render:e=>f()(e).tz(l).format("YYYY-MM-DD HH:mm:ss"),filterDropdown:(0,w.jsx)(c.QD,{idIdentifier:"CreatedAt",onInputChange:this.handleInputChange,onSearch:e=>this.onSearchDate(e,"CreatedAt"),isClear:this.state.clearDate,startDate:t.created_at_start,endDate:t.created_at_end}),filterIcon:this.renderIcon(!!t.created_at_start&&!!t.created_at_end),filterDropdownVisible:this.state.filterCreatedAt,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCreatedAt:e})},{key:"ProviderUpdatedAt",title:this.renderTitle("title-with-margin","Provider Updated At"),dataIndex:"provider_updated_at",render:e=>e?f()(e).tz(l).format("YYYY-MM-DD HH:mm:ss"):"",filterDropdown:(0,w.jsx)(c.QD,{idIdentifier:"ProviderUpdatedAt",onInputChange:this.handleInputChange,onSearch:e=>this.onSearchDate(e,"ProviderUpdatedAt"),isClear:this.state.clearDate,startDate:t.prov_updated_start,endDate:t.prov_updated_end}),filterIcon:this.renderIcon(!!t.prov_updated_start&&!!t.prov_updated_end),filterDropdownVisible:this.state.filterProviderUpdatedAt,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProviderUpdatedAt:e})}]},this.getColumnsCoreSvc=()=>{const{agentPolicyListLoading:e,profileData:t}=this.props,r=(0,s.get)(t,"user_timezone","UTC");return e?[]:[{key:"Action",title:"Action",dataIndex:"InternalID",render:e=>(0,w.jsx)(x.A,{requiredPermission:"ops.view_agent_policy_detail",children:(0,w.jsx)("i",{className:"far fa-eye",onClick:()=>this.detailPage(e,!0)})}),align:"center"},{key:"InternalID",title:this.renderTitle("title-with-margin","Internal ID"),dataIndex:"InternalID",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterReferenceID:e})},{key:"ProductKey",title:this.renderTitle("title-with-margin","Product key"),dataIndex:"ProductKey",sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProduct:e})},{key:"ApplicationNo",title:this.renderTitle("title-with-margin","Application No"),dataIndex:"ApplicationNo",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterAppNo:e})},{key:"Provider",title:this.renderTitle("title-with-margin","Provider"),dataIndex:"Provider",sortDirections:["descend"]},{key:"PolicyState",title:this.renderTitle("title-with-margin","Policy State"),dataIndex:"PolicyState",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPolicyState:e})},{key:"ProviderHitStatus",title:this.renderTitle("title-without-margin","Provider Hit Status"),dataIndex:"ProviderHitStatus"},{key:"CoinsuranceProviders",title:this.renderTitle("title-without-margin","Coinsurance Providers"),dataIndex:"coinsurance_providers",render:e=>Array.isArray(e)&&e.length>0?e.map((e=>e.provider_code)).join(", "):"-"},{key:"Name",title:this.renderTitle("title-with-margin","Name"),dataIndex:"Name",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCustomerName:e})},{key:"Email",title:this.renderTitle("title-with-margin","Email"),dataIndex:"Email",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCustomerEmail:e})},{key:"PhoneNo",title:this.renderTitle("title-with-margin","Phone No"),dataIndex:"MobileNo",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPhoneNo:e})},{key:"CreatedAt",title:this.renderTitle("title-with-margin","Created At"),dataIndex:"createdAt",render:e=>f()(e).tz(r).format("YYYY-MM-DD HH:mm:ss"),sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterCreatedAt:e})},{key:"ProviderUpdatedAt",title:this.renderTitle("title-with-margin","Updated At"),dataIndex:"UpdatedAt",render:e=>e?f()(e).tz(r).format("YYYY-MM-DD HH:mm:ss"):"",sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProviderUpdatedAt:e})}]},this.state={data:[],pagination:{},searchText:"",orderIdentifier:"",failedMessage:"",products:[],partners:[],searchTextQuery:{},policyFilter:{},submitDate:!1,isChange:!1,userEmail:"",userTimeZone:"",showCoreTable:!1},this.isCourierEnabled=!0}componentDidMount(){const e=m().parse(this.props.location.search);this.props.getAgentProviderList(),this.props.getAgentProductList(),this.fetch(e)}onSearchDate(e,t){const{location:r,history:a}=this.props,{startDate:i,endDate:o}=e,n=`${i} 00:00:00`,s=`${o} 23:59:59`,d={CreatedAt:"created_at",ProviderUpdatedAt:"prov_updated",HardcopyReceiveDate:"hard_copy_receive_date",HardcopySentDate:"hard_copy_sent_date"}[t]||t,{searchTextQuery:l}=this.state,c={},p={submitDate:!0};p[`filter${t}`]=!1,i&&(c[`${d}_start`]=n),o&&(c[`${d}_end`]=s),this.setState({...c,...p});const h={...m().parse(r.search),...l,...c,page:1,page_size:10},u=(0,_.A)(h);a.push({pathname:r.pathname,search:u}),this.setState({searchTextQuery:h},(()=>{this.fetch(h)}))}componentWillUnmount(){this.handleResetAgentRedux();const{location:e}=this.props;e.search=""}detailPage(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{push:r}=this.props.history;r({pathname:t?`/agent/policy/corepolicy/${e}`:(0,N.A)()?`/agent/vn/policy/${e}`:`/agent/policy/${e}`})}renderTitle(e,t){return(0,w.jsx)("div",{className:e,children:(0,w.jsx)("span",{children:t})})}renderIcon(e){let t="filter-icon";return e&&(t+=" active"),(0,w.jsx)(n.Icon,{className:t,type:"filter",theme:"outlined"})}render(){var e;const{page:t,policyFilter:r,pageSize:a,failedMessage:i,showCoreTable:o}=this.state,{policyListLoading:c,policyListError:h,agentPolicyList:g,agentPolicyListMetaData:f,agentPolicyListLoading:y,agentPolicyListMetaDataCore:m}=this.props,_=(0,s.get)(f,"total_records","0"),x=Number(_),D=Number((0,s.get)(m,"total_records","0")),I=this.getColumns(),C=this.getColumnsCoreSvc();return(0,w.jsx)(b.A,{isSpining:y,children:(0,w.jsxs)(l.A,{className:"referral-table",children:[(0,w.jsx)(n.Row,{className:"error-row",children:(0,w.jsx)(n.Col,{children:(0,w.jsx)(u.A,{status:"error",isNeedDisplay:h,onClose:this.handleResetAgentRedux,message:i})})}),(0,w.jsxs)(d.A,{children:[(0,w.jsxs)(n.Row,{className:"header-row",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("h3",{children:["Mitra Policy List ",o&&"Core Svc"]}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{className:"total-count",children:o?D:x})})]}),Object.keys(r).map((e=>(0,w.jsx)(n.Tag,{className:"search-tag",color:"purple",closable:"closable",onClose:()=>this.removeFilter(e),children:(0,k.replaceAgentAndAgency)(r[e])},r[e]))),(0,w.jsx)("div",{className:"clear-filter",children:(0,w.jsx)(n.Button,{onClick:this.handleTableDataChange,children:"Change table"})}),(0,w.jsx)("div",{className:"clear-filter",children:(0,w.jsxs)(n.Button,{onClick:this.handleResetFilter,children:[(0,w.jsx)(n.Icon,{type:"filter",theme:"outlined"}),"Clear filter"]})})]}),o?(0,w.jsx)(p.A,{columns:C,bordered:!0,rowKey:e=>e.InternalId,dataSource:null===g||void 0===g||null===(e=g.core_svc_data)||void 0===e?void 0:e.data,pagination:{pageSize:a,total:D,current:t},loading:c,onChange:this.handleTableChange,className:"isoSearchableTable"}):(0,w.jsx)(p.A,{columns:I,bordered:!0,rowKey:e=>e.reference_id,dataSource:null===g||void 0===g?void 0:g.data,pagination:{pageSize:a,total:x,current:t},loading:c,onChange:this.handleTableChange,className:"isoSearchableTable"})]})]})})}}Y.defaultProps={profileData:{},agentPolicyList:[],agentPolicyListMetaData:{},agentPolicyListMetaDataCore:{},products:[]};const R=(0,o.connect)((e=>({agentProviderListData:e.AgentProvider.agentProviderList,profileData:e.Auth.profile,agentPolicyList:e.Agent.agentPolicyList,branchList:e.AgentProduct.branchList,branchListMessage:e.AgentProduct.branchListMessage,agentPolicyListMetaData:e.Agent.metadata,agentPolicyListMetaDataCore:e.Agent.metaDataCore,agentProductList:e.AgentProduct.agentProductList,isAgentInsuranceProvider:e.Auth.isAgentInsuranceProvider,agentPolicyListLoading:e.Loading.GET_AGENT_INSURANCE_LIST,agentPolicyListError:e.Error.GET_AGENT_INSURANCE_LIST})),{getAgentInsuranceList:$,getAgentProviderList:j,getAgentProductList:V,getBranchList:L,resetAgentRedux:E})(Y)},60452:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(80878);const i=r.n(a)().div`
  padding: 40px 18px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  color: #788195;
  width: 100%;
  background: ${e=>e.theme.white};

  .error-row {
    width: 100%;
  }

  .button-action{
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    color: white;
  }

  .confirm-withdraw,
  .confirm-withdraw:hover {
    background-color: #759437;
  }
  
  .reject-withdraw,
  .reject-withdraw:hover {
    background-color: #dc826e;
  }

  .header-row {
    margin-bottom: 10px;

    h3 {
      float: left;
      color: #788195;
    }

    .total-count {
      float: left;
      color: #4482FF;
      margin-left: 10px;
      margin-top: 3px;
    }

    .search-tag {
      align-self: center;
      margin-left: 5px;
      padding-left: 2px;
    }

    .clear-filter {
      float: right;
      display: flex;

      button {
        margin: 0px 5px;
      }
    }
  }

  .agent-table-data {
    width: 100%;
  }

  .agent-config-btn {
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }

  .agent-verify-btn {
    background-color: ${e=>e.theme.primary};
    color: ${e=>e.theme.black};
    border-color: ${e=>e.theme.primary};
    font-weight: 500;
    font-size: 12px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${e=>e.theme.primary};
      border-color: ${e=>e.theme.primary};
      color: ${e=>e.theme.black};
    }
  }

  .agent-clear-filter {
    margin-bottom: 16px;
    width: 100%;
    text-align-last: end;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
  `},55611:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(21577),i=r(80878),o=r.n(i),n=r(34618),s=r(67050),d=r(93317);const l=o()(a.A)`
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
    display: block;
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
`,c=o().div`
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
`,p=((0,d.A)(c),(0,d.A)(l))},36934:(e,t,r)=>{r.d(t,{A:()=>o});r(1502);var a=r(67816),i=r(70579);const o=e=>{let{isNeedDisplay:t,onClose:r=()=>{},status:o,message:n}=e;return t?(0,i.jsx)(a.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:n,type:o,closeText:"Close",onClose:r}):""}},8624:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(1502),i=r.n(a),o=r(24952);class n extends i().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:r=null}=this.props;return e.find((e=>e===t))?this.props.children:r}}n.defaultProps={permissions:[]};const s=(0,o.connect)((e=>({permissions:e.Auth.permissions})),{})(n)},21577:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(67816);const i=a.Table},28599:(e,t,r)=>{r.d(t,{A:()=>a});const a=()=>window.location.pathname.includes("agent/vn")}}]);
//# sourceMappingURL=9039.5d63f535.chunk.js.map