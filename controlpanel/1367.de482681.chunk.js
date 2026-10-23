"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1367],{31367:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var r=a(1502),s=a.n(r),i=a(24952),o=a(67816),n=a(86178),l=a.n(n),d=a(17634),p=a.n(d),c=a(38094),h=a.n(c),u=a(84029),m=a(55347),g=a(50248),x=a(1603),f=a.n(x),y=a(95916),b=a(80878);const S=a.n(b)().div`
`;var C=a(26877),_=a(96117),v=a(87291),j=a(70579);const P=o.Collapse.Panel,k=o.Radio.Group,w=o.Form.Item,{resetReduxStateClaim:T,postGoPassengerOrder:E,postGoPassengerClaim:I}=C.A,{resetLoadingRedux:L}=_.A,{resetErrorRedux:R}=v.A;class A extends s().Component{constructor(e){super(e),this.resetState=()=>{this.state.typingTimeout&&clearTimeout(this.state.typingTimeout),this.setState(this.initState),this.props.resetReduxStateClaim(["orderResult","orderStatus"]),this.props.resetLoadingRedux(["POST_GO_PASSENGER_ORDER","POST_GO_PASSENGER_CLAIM"]),this.props.resetErrorRedux(["POST_GO_PASSENGER_ORDER","POST_GO_PASSENGER_CLAIM"])},this.onSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t,orderResult:a}=this.props,r=t.getFieldsValue(),s=a.user_id,i=a.phone_number;let o={...r,email:r.email||"",gojek_product:this.props.gojekProduct};s&&i&&(o={...o,phone_number:i,user_id:s}),this.setState({orderId:o.order_id,isOrderSubmitted:!0},(()=>{this.props.postGoPassengerOrder(o)}))},this.onValidateClaim=async e=>{e.preventDefault();if(!await this.validateForm())return;const{orderResult:t,gojekProduct:a}=this.props,{orderId:r,benefitId:s,skipPrecheck:i}=this.state,o={order_id:r,user_id:(0,y.get)(t,"user_id"),benefit_id:s,skip_precheck:i,gojek_product:a};this.props.validate(o)},this.onChangeBenefit=e=>{this.props.resetValidateStatus(),this.setState({benefitId:e.target.value})},this.handleCancel=()=>{this.props.form.resetFields(),this.props.onClosePopupForm(),this.resetState()},this.scheduleOrderCheck=()=>{this.state.typingTimeout&&clearTimeout(this.state.typingTimeout),this.setState({typingTimeout:setTimeout((()=>{const e=this.props.form.getFieldValue("phone_number"),t=this.props.form.getFieldValue("order_id");if(e&&t){const a=this.state.requestId+1;this.setState({requestId:a}),this.props.postGoPassengerOrder({phone_number:e,order_id:t,skip_benefits:!0,requestId:a})}else this.props.form.setFieldsValue({name:"",email:""}),this.props.resetReduxStateClaim(["orderResult","orderStatus","goPassengerOrderLoading"])}),600)})},this.backToBenefit=()=>{this.resetState(),this.props.resetSafeScreen()},this.genExtra=()=>(0,j.jsx)(o.Icon,{type:"down"}),this.isActive=e=>{this.setState({isClaimActive:e})},this.onCheckChange=e=>{this.setState({skipPrecheck:e.target.checked})},this.noBenefitInfo=()=>(0,j.jsxs)("div",{children:[(0,j.jsxs)(o.Card,{children:[(0,j.jsx)("h3",{children:"Anda dalam perlindungan yang tepat"}),(0,j.jsx)("p",{children:"Untuk info lebih lengkap hubungi customer service kami pada nomor di bawah ini & daftarkan klaim anda"}),(0,j.jsxs)("span",{style:{fontSize:"24px"},children:[(0,j.jsx)("i",{className:"fas fa-phone-volume"}),"\xa0\xa0021 3044 8080"]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"- ATAU -",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{children:"Chat dengan customer service kami melalu nomor whatsapp dibawah ini & daftarkan klaim anda"}),(0,j.jsxs)("span",{style:{fontSize:"24px"},children:[(0,j.jsx)("i",{className:"fab fa-whatsapp"}),"\xa0\xa00877 0017 8000"]})]}),(0,j.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:(0,j.jsx)(o.Button,{type:"primary",onClick:()=>this.backToBenefit(),children:"Back"})})]}),this.state={typingTimeout:0,orderId:"",benefitId:"",displaySafeScreen:!1,displayLimitAlert:!1,skipPrecheck:!1,isOrderSubmitted:!1,requestId:0},this.initState=this.state}UNSAFE_componentWillReceiveProps(e){const{displaySafeScreen:t,displayLimitAlert:a}=e;t&&this.setState({displaySafeScreen:!0}),a&&this.setState({displayLimitAlert:!0})}componentDidMount(){this.resetState()}componentDidUpdate(e){const{orderResult:t,postGoPassengerOrderError:a}=this.props,r=e.orderResult;t.requestId===this.state.requestId&&((0,y.get)(t,"name")===(0,y.get)(r,"name")&&(0,y.get)(t,"email")===(0,y.get)(r,"email")||this.props.form.setFieldsValue({name:(0,y.get)(t,"name",""),email:(0,y.get)(t,"email","")}),a&&!e.postGoPassengerOrderError&&this.setState({isOrderSubmitted:!1}))}async validateForm(){return new Promise((e=>{this.props.form.validateFields((t=>{e(!t)}))}))}render(){const{getFieldDecorator:e}=this.props.form,{orderResult:t,orderStatus:a,postGoPassengerOrderLoading:r,postGoPassengerOrderError:s,goPassengerBenefits:i,getGoPassengerBenefitsLoading:n,getGoPassengerBenefitsError:l,goPassengerBenefitsStatus:d,goPassengerClaimLoading:p,goPassengerClaimError:c,goPassengerClaimStatus:h,permissions:u,gojekProduct:m}=this.props,{benefitId:x,isClaimActive:f,skipPrecheck:y,isOrderSubmitted:b}=this.state;return(0,j.jsx)(S,{children:(0,j.jsx)(o.Modal,{visible:this.props.isOpen,onCancel:this.handleCancel,footer:null,title:`Create ${"go-driver"===m?"Go-Driver":"Go-Passenger"} Claim`,maskClosable:!1,wrapClassName:"benefits-modal",children:(0,j.jsxs)("div",{className:"go-passenger",children:[s&&!r&&(0,j.jsx)(o.Alert,{message:a,type:"error"}),c&&!p&&(0,j.jsx)(o.Alert,{message:h,type:"error"}),l&&!n&&(0,j.jsx)(o.Alert,{message:d,type:"error"}),x&&!f&&(0,j.jsx)(o.Alert,{message:"Claim is not active for this benefit",type:"error"}),b&&t.user_id&&!s&&!r?(0,j.jsxs)(o.Form,{id:"event-form",onSubmit:e=>this.onValidateClaim(e),style:{marginTop:"10px"},children:[(0,j.jsx)("label",{children:(0,j.jsx)("strong",{style:{padding:"20px 0"},children:"Choose a benefit:"})}),(0,j.jsx)(w,{validateStatus:"validateStatus",children:e("benefit_id",{rules:[{required:!0,message:"Please select a benefit"}]})((0,j.jsx)(k,{value:x,onChange:e=>this.onChangeBenefit(e),className:"benefits-radio",children:i.map(((e,t)=>e.benefits?e.benefits.length>1?(0,j.jsx)(o.Collapse,{children:(0,j.jsx)(P,{header:(0,j.jsxs)("div",{className:"benefits-collapse-header",children:[(0,j.jsx)("b",{children:e.benefit_group_name}),(0,j.jsx)("br",{}),(0,j.jsx)("span",{children:e.benefit_group_description})]}),extra:this.genExtra(),children:e.benefits.map(((e,t)=>(0,j.jsx)(o.Radio,{value:e.benefit_id,onChange:()=>this.isActive(e.is_claim_active),children:(0,j.jsx)("b",{children:e.benefit_name})},t)))},t)},t):e.benefits.map(((e,t)=>(0,j.jsxs)("div",{className:"radio-content-wrapper",children:[(0,j.jsxs)(o.Radio,{value:e.benefit_id,onChange:()=>this.isActive(e.is_claim_active),children:[(0,j.jsx)("b",{children:e.benefit_name}),(0,j.jsx)("br",{}),(0,j.jsx)("span",{className:"description",children:e.description})]},t),(0,j.jsx)("br",{})]},t))):(0,j.jsxs)("div",{className:"radio-content-wrapper",children:[(0,j.jsxs)(o.Radio,{value:e.benefit_id,onChange:()=>this.isActive(e.is_claim_active),children:[(0,j.jsx)("b",{children:e.benefit_name}),(0,j.jsx)("br",{}),(0,j.jsx)("span",{className:"description",children:e.description})]},t),(0,j.jsx)("br",{})]},t)))}))}),(0,j.jsx)(g.A,{permissionGetter:u,permissionSetter:"ops.claims_skip_precheck",children:(0,j.jsx)(o.Checkbox,{style:{margin:"15px"},defaultValue:y,onChange:e=>this.onCheckChange(e),children:"Skip Precheck"})}),(0,j.jsx)(w,{children:(0,j.jsx)(o.Button,{form:"event-form",className:"button",type:"primary",htmlType:"submit",style:{float:"right",marginTop:"20px"},loading:p,disabled:!f,children:"Create claim"},"submit")})]}):(0,j.jsxs)(o.Form,{id:"event-form",onSubmit:e=>this.onSubmit(e),style:{marginTop:"10px"},children:[(0,j.jsx)("label",{children:(0,j.jsx)("strong",{style:{padding:"20px 0"},children:"Customer Phone Number:"})}),(0,j.jsx)(w,{validateStatus:"validateStatus",children:e("phone_number",{rules:[{required:!0,message:"Phone number cannot be empty"},{pattern:/^\+\d{7,15}$/,message:"Invalid phone number, format: +[country code][phone number without leading zero]"}]})((0,j.jsx)(o.Input,{onChange:()=>this.scheduleOrderCheck(),placeholder:"+62812345678"}))}),(0,j.jsx)("label",{children:(0,j.jsx)("strong",{style:{padding:"20px 0"},children:"Customer Order Id:"})}),(0,j.jsx)(w,{children:e("order_id",{rules:[{required:!0,message:"Order ID cannot be empty"},{pattern:/^[A-Za-z0-9-_ ]+$/,message:"Invalid order id"}]})((0,j.jsx)(o.Input,{onChange:()=>this.scheduleOrderCheck()}))}),(0,j.jsx)("label",{children:(0,j.jsx)("strong",{style:{padding:"20px 0"},children:"Customer Name:"})}),(0,j.jsx)(w,{children:e("name",{rules:[{required:!0,message:"Name cannot be empty"}]})((0,j.jsx)(o.Input,{disabled:!0,suffix:r?(0,j.jsx)(o.Icon,{type:"loading",spin:!0}):null}))}),(0,j.jsx)("label",{children:(0,j.jsx)("strong",{style:{padding:"20px 0"},children:"Customer Email:"})}),(0,j.jsx)(w,{children:e("email",{initialValue:"",rules:[{type:"email",message:"Email not valid"}]})((0,j.jsx)(o.Input,{disabled:!0,suffix:r?(0,j.jsx)(o.Icon,{type:"loading",spin:!0}):null}))}),(0,j.jsx)(w,{children:(0,j.jsx)(o.Button,{form:"event-form",className:"button",type:"primary",htmlType:"submit",style:{float:"right",marginTop:"20px"},loading:r,disabled:!t.name,children:"Save"},"submit")})]})]})})})}}const F=o.Form.create()(A);F.propTypes={orderResult:f().object.isRequired,goPassengerBenefits:f().array.isRequired},F.defaultProps={orderResult:{},goPassengerBenefits:[]};const G=(0,i.connect)((e=>({orderResult:e.Claims.orderResult,orderStatus:e.Claims.orderStatus,goPassengerBenefits:e.Claims.goPassengerBenefits,goPassengerBenefitsStatus:e.Claims.goPassengerBenefitsStatus,goPassengerClaim:e.Claims.goPassengerClaim,goPassengerClaimStatus:e.Claims.goPassengerClaimStatus,postGoPassengerOrderLoading:e.Claims.goPassengerOrderLoading,postGoPassengerOrderError:e.Error.POST_GO_PASSENGER_ORDER,getGoPassengerBenefitsLoading:e.Loading.GET_GO_PASSENGER_BENEFITS,getGoPassengerBenefitsError:e.Error.GET_GO_PASSENGER_BENEFITS,goPassengerClaimLoading:e.Loading.POST_GO_PASSENGER_CLAIM,goPassengerClaimError:e.Error.POST_GO_PASSENGER_CLAIM})),{postGoPassengerOrder:E,postGoPassengerClaim:I,resetReduxStateClaim:T,resetLoadingRedux:L,resetErrorRedux:R})(F);var D=a(68164),$=a(36934),O=a(25211),M=a(93807),N=a(92021),B=a(50680),V=a(17823),Y=a.n(V);var K=a(98479);function z(e){if(!e)return null;const t=e.match(/partnerproduct_id=([^&]+)/);return t?t[1]:null}function Q(e){if(!e)return null;const t=e.match(/package_name=([^&]+)/);return t?t[1]:null}function U(e,t){const{filtersData:a}=e.props;if(a){const e=a.find((e=>"partnerproduct_id"===e.name));return e&&e.values[t]}}const{getClaimLists:q,getClaimFilters:W,resetReduxStateClaim:H,exportClaimsReport:X,validateClaimGoPassenger:Z,resetValidateStatus:J,postGoPassengerClaim:ee,getClaimUsers:te}=C.A,{getPartners:ae,getProducts:re}=O.A,{resetLoadingRedux:se}=_.A,{resetErrorRedux:ie}=v.A,{getListGroups:oe}=N.A;class ne extends s().Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:a,page_size:r}=e,s=Number(a)||1,i=Number(r)||50;let o;delete e.page,delete e.page_size,t.setState({page_size:i,page:s,claimsFilter:e,searchTextQuery:e}),t.props.getListGroups(),t.props.getClaimUsers(),0===Object.keys(e).length&&(o=[l()().subtract(1,"days").format("YYYY-MM-DD"),l()().format("YYYY-MM-DD")]),t.props.getClaimLists({page:s,page_size:i,created_at:o,...e})},this.handleResetReduxState=()=>{this.props.resetReduxStateClaim()},this.detailPage=e=>{const{history:t}=this.props,{searchTextQuery:a}=this.state;t.push({pathname:`/claims/${e}`,state:{...a}})},this.onInputChange=(e,t)=>{this.setState({searchTextQuery:{[t]:e.target.value},isChange:!0})},this.onInputProductChange=(e,t)=>{const{searchTextQuery:a}=this.state;this.setState({searchTextQuery:{...a,[t]:e},isChange:!0})},this.handleProductSearch=()=>{const{searchTextQuery:e}=this.state,{history:t,location:a}=this.props,r={...e},s=(0,M.A)(r);t.push({pathname:a.pathname,search:s}),Object.values(e).length&&(this.setState({policy_number:!1,claim_no:!1,application_no:!1,searchTextQuery:r,partnerproduct_id:!1}),this.fetch(r))},this.onSearch=(e,t,a)=>{const{startDate:r,endDate:s}=e;let i={};r&&this.setState({startDate:r}),s&&this.setState({endDate:s}),"date_range"===a?(i={[`${t}`]:[r||this.state.startDate,s||this.state.endDate]},this.setState({[t]:!1,searchTextQuery:i,isChange:!0})):e.preventDefault();const{searchTextQuery:o}=this.state,{history:n,location:l}=this.props,d={...o,...i},p=(0,M.A)(d);n.push({pathname:l.pathname,search:p}),(Object.values(o).length||Object.values(i).length)&&(this.setState({policy_number:!1,claim_no:!1,application_no:!1,searchTextQuery:d}),this.fetch(d))},this.handleResetFilter=()=>{const{history:e,location:t}=this.props;t.search="",e.push(t.pathname),this.setState({searchText:"",loading:!0,searchTextQuery:{},claimsFilter:{},filteredInfo:{},clearDate:!0}),this.props.resetReduxStateClaim(),this.props.getClaimFilters(),this.fetch()},this.handleTableChange=(e,t,a)=>{const{history:r,location:s}=this.props,{searchTextQuery:i}=this.state,{pageSize:o,current:n}=e,l={};Object.keys(t).map(((e,a)=>{let r=t[e]||[];return r=Array.isArray(r)?r[0]:r,r&&(l[e]=r),l}));const d=h().parse(s.search),p={...i,...l,...d,page:n,page_size:o},c=(0,M.A)(p);r.push({pathname:s.pathname,search:c}),this.setState({policy_number:!1,claim_no:!1,application_no:!1,onSearchQuery:p,searchTextQuery:p,filteredInfo:{...l},page:n,page_size:o},(()=>this.fetch(p)))},this.handleDownloadExcel=()=>{const{userEmail:e,claimsFilter:t}=this.state;p()({title:"Report will be sent to your email",input:"email",inputValue:e,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.exportClaimsReport({body:{email:e,...t}})},allowOutsideClick:()=>!1})},this.showGoPassengerClaimModal=e=>{this.props.resetReduxStateClaim(["orderResult","orderStatus"]),this.props.resetLoadingRedux(["GET_USER_PROFILE"]),this.props.resetErrorRedux(["GET_USER_PROFILE"]),this.setState({showGoPassengerClaimModal:!0,gojekProduct:e})},this.handleCloseGoPassengerClaimModal=()=>{this.setState({showGoPassengerClaimModal:!1})},this.handleSearch=(e,t)=>{const{history:a,location:r}=this.props,{searchTextQuery:s}=this.state,i={...s,[t]:e};this.fetch({...i});const o=(0,M.A)(i);a.push({pathname:r.pathname,search:o})},this.removeFilter=e=>{const{history:t,location:a}=this.props,{claimsFilter:r}=this.state;delete r[e],this.setState({claimsFilter:r});const s=(0,M.A)(r);t.push({pathname:a.pathname,search:s}),r.partnerproduct_id||r.package_name?function(e,t){if(!t)return;const a=t.partnerproduct_id&&e.getProductNamefromKey(t.partnerproduct_id)||t.product_key,r=t.package_name||null,s={};a&&(s.productKey=a),r&&(s.packageName=r),e.setState({isLoadingFilters:!0,lastProductKeyRequested:s.productKey||null,lastPackageNameRequested:s.packageName||null}),e.props.getClaimFilters(s)}(this,r):this.props.getClaimFilters(),this.fetch(r)},this.createClaim=()=>{const{payload:e}=this.state;e.source="control-panel",this.props.postGoPassengerClaim(e)},this.validateClaim=e=>{this.setState({payload:e}),this.props.validateClaimGoPassenger(e)},this.resetValidateStatus=()=>{this.setState({validateClaimGoPassengerStatus:"",displayLimitAlert:!1}),this.props.resetValidateStatus()},this.resetSafeScreen=()=>{this.setState({resetSafeScreen:!1})},this.getRowColour=()=>{const{claimsFilter:e}=this.state;switch(e.colour){case"RED":return"#ffd8d8";case"YELLOW":return"#ffffd8";case"GREEN":return"#e2ffe2";default:return"#fff"}},this.state={data:[],loading:!1,failedMessage:"",userEmail:"",permissions:[],searchTextQuery:{},isChange:!1,filteredInfo:{},claimsFilter:{},showGoPassengerClaimModal:!1,groups:[],displaySafeScreen:!1,validatePopupMessage:"",displayLimitAlert:!1,validateClaimGoPassengerStatus:"",payload:{},gojekProduct:void 0,startDate:"",endDate:"",isLoadingFilters:!1,lastProductKeyRequested:null,lastPackageNameRequested:null}}triggerFiltersWithKey(e,t){return function(e,t,a){const{filtersData:r,getClaimFilters:s}=e.props,{lastProductKeyRequested:i,lastPackageNameRequested:o}=e.state;if(!r||!t)return;const n="product"===a?e.getProductNamefromKey(t):t;if(!(null===r||void 0===r?void 0:r.find((e=>e.name===("product"===a?"product_key":"package_name")))))return;const l=n,d=l?e.buildFilterParams(l,a):{};l&&("product"===a?l!==i||(d.packageName||null)!==(o||null):l!==o||(d.productKey||null)!==(i||null))?(e.setState({isLoadingFilters:!0,lastProductKeyRequested:d.productKey||null,lastPackageNameRequested:d.packageName||null}),s(d)):n||(e.setState({isLoadingFilters:!0}),s())}(this,e,t)}buildFilterParams(e,t){return function(e,t,a){const{location:r}=e.props,s=z(null===r||void 0===r?void 0:r.search),i=Q(null===r||void 0===r?void 0:r.search),o={};if("product"===a)o.productKey=t,i&&(o.packageName=i);else if("package"===a&&(o.packageName=t,s)){const t=U(e,s);t&&(o.productKey=t)}return o}(this,e,t)}extractProductKeyFromId(e){return function(e,t){const{filtersData:a}=e.props;if(!a||!t)return null;const r=e.getProductNamefromKey(t),s=null===a||void 0===a?void 0:a.find((e=>"product_key"===e.name));return s&&r&&r.includes("-")?s.values[r.substring(r.indexOf("-")+1)]:null}(this,e)}getPartnerProductIdFromUrl(e){return z(e)}getPackageNameFromUrl(e){return Q(e)}getPartnerColumnProps(e){return function(e,t){const{filtersData:a,getClaimsFiltersLoading:r,getClaimsFiltersError:s}=e.props,{filteredInfo:i}=e.state;if(r||s||!Array.isArray(a))return{};const n=i[t]?"#1890ff":void 0,l=a.find((e=>e.name===t));if(!l)return{};const d=[],p=l.values||{};for(const o in p)d.push({name:p[o],code:o});return{filterIcon:(0,j.jsx)(o.Icon,{type:"filter",style:{color:n}}),filterDropdown:a=>{let{setSelectedKeys:r,selectedKeys:s}=a;return(0,j.jsxs)("div",{className:"filter-dropdown",style:{padding:8},children:[(0,j.jsx)(o.Select,{showSearch:!0,placeholder:"Select Partner",optionFilterProp:"children",allowClear:!0,loading:e.props.getClaimsFiltersLoading,disabled:e.props.getClaimsFiltersLoading,dropdownMatchSelectWidth:!1,value:s,onChange:e=>r(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,style:{width:200,marginBottom:8,display:"block"},children:d.map((e=>{let{name:t,code:a}=e;return(0,j.jsx)(o.Select.Option,{value:a,children:t},a)}))}),(0,j.jsx)(o.Button,{type:"primary",onClick:()=>e.handleSearch(s,t),size:"small",style:{width:90,marginRight:8},children:"Search"}),(0,j.jsx)(o.Button,{size:"small",onClick:()=>{r(""),e.handleSearch("",t)},children:"Reset"})]})},filterDropdownVisible:e.state[t],onFilterDropdownVisibleChange:a=>e.setState({[t]:a})}}(this,e)}componentDidUpdate(e){var t,a;const{location:r,filtersData:s,getClaimFilters:i}=this.props,{isLoadingFilters:o}=this.state,n=this.getPartnerProductIdFromUrl(null===r||void 0===r?void 0:r.search),l=this.getPartnerProductIdFromUrl(null===(t=e.location)||void 0===t?void 0:t.search),d=this.getPackageNameFromUrl(null===r||void 0===r?void 0:r.search),p=this.getPackageNameFromUrl(null===(a=e.location)||void 0===a?void 0:a.search);n===l&&d===p||o||(n!==l&&n?this.triggerFiltersWithKey(n,"product"):d!==p&&d?this.triggerFiltersWithKey(d,"package"):n||d||(this.setState({isLoadingFilters:!0,lastProductKeyRequested:null,lastPackageNameRequested:null}),i())),s===e.filtersData||o||(n?this.triggerFiltersWithKey(n,"product"):d&&this.triggerFiltersWithKey(d,"package")),s!==e.filtersData&&o&&this.setState({isLoadingFilters:!1})}UNSAFE_componentWillReceiveProps(e){const{data:t,getClaimListsStatus:a,getClaimListsError:r,profileData:s,validateClaimGoPassengerStatus:i,dataValidateGocar:o,groupLists:n,claimExportLoading:l,claimExportError:d,claimExportMessage:c}=e,{email:h}=s,{listGroups:u}=n,{claim_id:m,is_claimable:g,is_first_claim:x,message:f}=o;if(void 0!==i&&""!==i&&"success"===i){if(null===m||!0!==x&&!1!==x)null===m&&!0===x?(this.createClaim(),this.props.resetValidateStatus()):null===m&&!1===x&&!1===g?(this.setState({displaySafeScreen:!0}),this.props.resetValidateStatus()):(this.createClaim(),this.setState({validatePopupMessage:f}),this.props.resetValidateStatus());else{const{history:e}=this.props;e.push(`/claims/${m}`)}void 0!==i&&""!==i&&"Klaim telah terdaftar untuk Nomor pesanan ini"===i&&(this.setState({displayLimitAlert:!0}),this.props.resetValidateStatus()),void 0!==i&&""!==i&&"success"!==i&&"Klaim telah terdaftar untuk Nomor pesanan ini"!==i&&(this.setState({displaySafeScreen:!0}),this.props.resetValidateStatus())}void 0!==i&&""!==i&&"success"!==i&&this.setState({validateClaimGoPassengerStatus:i}),void 0!==u&&this.setState({groups:u}),void 0!==h&&this.setState({userEmail:h}),r?this.setState({data:[],failedMessage:a}):this.setState({data:t}),!l&&c&&(p()({type:d?"error":"success",title:d?"Error":"Success",text:c}),this.props.resetReduxStateClaim(["claimExportMessage"]),this.props.resetErrorRedux(["EXPORT_CLAIMS_REPORT"]))}componentDidMount(){const{search:e,state:t}=this.props.location;let a={};if(t&&t.state)a={...e,...t.state},this.fetch(a);else{const t=h().parse(e);this.fetch({...t})}this.props.getPartners(),this.props.getProducts(),this.props.getClaimFilters()}componentWillUnmount(){this.props.resetReduxStateClaim()}getColumnProps(e){return function(e,t){const a=t,{filtersData:r,getClaimsFiltersLoading:s,getClaimsFiltersError:i,permissions:n,userProducts:l}=e.props,{filteredInfo:d}=e.state,p=d[t]?"#1890ff":void 0,c=h().parse(e.props.location.search);if(s||i||!Array.isArray(r))return{};{if(!(n.indexOf("ops.claim_filter_product_name")>-1)&&"partnerproduct_id"===t)return{};if(!(n.indexOf("ops.claim_filter_package_name")>-1)&&"package_name"===t)return{};if(!(n.indexOf("ops.claim_status_filter")>-1)&&"status"===t)return{};if(!(n.indexOf("ops.claim_created_date_filter")>-1)&&"created_at"===t)return{};if(!(n.indexOf("ops.claim_date_filter")>-1)&&"accepted_at"===t)return{};const s=r.find((e=>e.name===t));if(!s)return{};const i=s.type;switch(i){case"choices":{const r=[];if("product_key"===t&&Array.isArray(l)&&l.length)for(t in l)r.push({text:l[t],value:l[t]});else{const e=s.values||{};for(t in e)r.push({text:e[t],value:t})}return"partnerproduct_id"===a?{filterIcon:(0,j.jsx)(o.Icon,{type:"filter",style:{color:p}}),filterDropdown:(0,j.jsx)(K.Jt,{placeholder:"Select Products",idIdentifier:a,onInputChange:t=>e.onInputProductChange(t,a),onSearch:e.handleProductSearch,enableButton:e.state.searchTextQuery&&e.state.searchTextQuery[a],searchText:e.state.isChange?e.state.searchTextQuery[a]:void 0!==c[a]?c[a]:e.state.searchTextQuery[a],selectData:r||[]}),filterDropdownVisible:e.state[a],onFilterDropdownVisibleChange:t=>e.setState({[a]:t})}:{filters:r,filterMultiple:s.multi_selection||!1,filteredValue:d[t]||null,filterIcon:(0,j.jsx)(o.Icon,{type:"filter",style:{color:p}})}}case"text":return{filterIcon:(0,j.jsx)(o.Icon,{type:"search",style:{color:e.state.searchTextQuery[t]||c[t]?"#1890ff":void 0}}),filterDropdown:(0,j.jsx)(K.ZY,{idIdentifier:t,searchText:e.state.isChange?e.state.searchTextQuery[t]:void 0!==c[t]?c[t]:e.state.searchTextQuery[t],onInputChange:a=>e.onInputChange(a,t),onSearch:a=>e.onSearch(a,t,i)}),filterDropdownVisible:e.state[t],onFilterDropdownVisibleChange:a=>e.setState({[t]:a})};case"date_range":return{filterDropdown:(0,j.jsx)(K.QD,{idIdentifier:t,onSearch:a=>e.onSearch(a,t,i),isClear:e.state.clearDate,startDate:e.state.isChange?(e.state.searchTextQuery[t]||[])[0]:void 0!==(c[t]||[])[0]?(c[t]||[])[0]:(e.state.searchTextQuery[t]||[])[0],endDate:e.state.isChange?(e.state.searchTextQuery[t]||[])[1]:void 0!==(c[t]||[])[1]?(c[t]||[])[1]:(e.state.searchTextQuery[t]||[])[1]}),filterIcon:(0,j.jsx)(o.Icon,{style:{color:void 0!==e.state.searchTextQuery[t]&&void 0!==e.state.searchTextQuery[t]||void 0!==c[t]&&void 0!==c[t]?"#108ee9":"#aaa"},type:"filter",theme:"outlined"}),filterDropdownVisible:e.state[t],onFilterDropdownVisibleChange:a=>e.setState({[t]:a})};case"onselect_choices":{const e=[],a=s.values||{};for(t in a)for(const r in a[t])e.push({text:a[t][r],value:r});return{filters:e,filterMultiple:s.multi_selection||!1,filteredValue:d[t]||null,filterIcon:(0,j.jsx)(o.Icon,{type:"filter",style:{color:p}})}}default:return{}}}}(this,e)}getOwnerColumnProps(e){return function(e,t){const{permissions:a,claimUsers:r}=e.props,{filteredInfo:s}=e.state;if(!a.includes("ops.view_claims_list_owner_filter")&&"owner_id"===t)return{};const i=s[t]?"#1890ff":void 0,n=s[t]?[s[t]]:null;return{filters:r.map((e=>{let{id:t,name:a}=e;return{text:a,value:t}})),filterMultiple:!1,filteredValue:n,filterIcon:(0,j.jsx)(o.Icon,{type:"filter",style:{color:i}}),render:e=>(0,j.jsx)("div",{children:(r.find((t=>{let{id:a}=t;return String(a)===e}))||{}).name||e})}}(this,e)}getProductNamefromKey(e){return U(this,e)}render(){const{getClaimListsLoading:e,getClaimListsError:t,data:a,permissions:r}=this.props,{claimsFilter:s,showGoPassengerClaimModal:i}=this.state,{meta_data:n={},data:l=[]}=a,{total_records:d=0,page:p=1}=n,c=l,h=function(e){const{permissions:t}=e.props,{groups:a}=e.state,{profileData:r={}}=e.props,s=r.user_timezone;return[{key:"Action",title:"Action",dataIndex:"claim_id",render:a=>(0,j.jsx)(g.A,{permissionSetter:"ops.view_claim_details",permissionGetter:t,children:(0,j.jsx)("i",{className:"far fa-eye",onClick:()=>e.detailPage(a),style:{cursor:"pointer"}})}),align:"center"},{key:"claim_no",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Claim id"})}),dataIndex:"claim_no",...e.getColumnProps("claim_number")},{key:"policy_number",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Policy number"})}),dataIndex:"policy_number",...e.getColumnProps("policy_number")},{key:"application_no",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Application no"})}),dataIndex:"application_no",...e.getColumnProps("application_no")},{key:"owner_id",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Owner"})}),dataIndex:"owner_id",...e.getOwnerColumnProps("owner_id")},{key:"partnerproduct_id",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Product Name"})}),dataIndex:"display_name",...(0,B.T)(e,"partnerproduct_id","product",!0)},{key:"package_name",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Package name"})}),dataIndex:"package_name",...e.getColumnProps("package_name")},{key:"status",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Status"})}),dataIndex:"status",...e.getColumnProps("status")},{key:"benefit_slug",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Benefit"})}),dataIndex:"benefit",...e.getColumnProps("benefit_slug")},{key:"partner_id",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Partner Id"})}),dataIndex:"partner_id",...e.getPartnerColumnProps("partner_id")},{key:"claim_amount",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px",marginLeft:"20px"},children:(0,j.jsx)("span",{children:"Claim Amount"})}),dataIndex:"claim_amount",...e.getColumnProps("claim_amount")},{key:"created_at",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Created at"})}),dataIndex:"created_at",render:e=>e&&s?Y().utc(e,"DD/MM/YYYY HH:mm:ss").tz(s).format("DD/MM/YYYY HH:mm:ss"):"-",...e.getColumnProps("created_at")},{key:"doc_complete_received_date",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Document Received Complete Date"})}),dataIndex:"doc_complete_received_date",render:e=>e&&s?Y().utc(e,"DD/MM/YYYY HH:mm:ss").tz(s).format("DD/MM/YYYY HH:mm:ss"):"-"},{key:"accepted_at",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Accepted at"})}),dataIndex:"accepted_at",render:e=>e?Y().utc(e,"DD/MM/YYYY HH:mm:ss").tz(s).format("DD/MM/YYYY HH:mm:ss"):"-",...e.getColumnProps("accepted_at")},{key:"next_followup_date",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Next follow up date"})}),dataIndex:"next_followup_date"},{key:"Assign To",title:"Assign To",dataIndex:"owner_id",render:e=>a.map((t=>"CLAIMS_TEAM"===t.name?t.users.map((t=>e===String(t.id)?t.name:null)):null)),align:"center"},{key:"source",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Source"})}),dataIndex:"source"},{key:"type",title:(0,j.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,j.jsx)("span",{children:"Type"})}),dataIndex:"type",...e.getColumnProps("type")}]}(this);return(0,j.jsxs)(m.A,{className:"referral-table",style:{color:"#788195"},children:[(0,j.jsx)(G,{isOpen:i,onClosePopupForm:this.handleCloseGoPassengerClaimModal,validate:this.validateClaim,validateClaimGoPassengerStatus:this.state.validateClaimGoPassengerStatus,gojekProduct:this.state.gojekProduct,resetValidateStatus:this.resetValidateStatus,displaySafeScreen:this.state.displaySafeScreen,resetSafeScreen:this.resetSafeScreen,validatePopupMessage:this.state.validatePopupMessage,displayLimitAlert:this.state.displayLimitAlert,...this.props}),(0,j.jsx)(o.Row,{style:{width:"100%"},children:(0,j.jsx)(o.Col,{children:(0,j.jsx)($.A,{status:"error",isNeedDisplay:""!==this.state.failedMessage,onClose:this.handleResetReduxState,message:this.state.failedMessage})})}),(0,j.jsxs)(u.A,{children:[(0,j.jsxs)(o.Row,{style:{marginBottom:"10px"},align:"middle",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{style:{float:"left",color:"#788195"},children:"Claim Lists"}),(0,j.jsx)("div",{children:(0,j.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:d})})]}),Object.keys(s).length>0&&Object.keys(s).map((e=>(0,j.jsxs)(o.Tag,{style:{alignSelf:"center",marginLeft:"5px",paddingLeft:4,paddingRight:4},color:"volcano",children:["partnerproduct_id"===e?"product_name":e," - ","partnerproduct_id"===e?this.getProductNamefromKey(s[e]):s[e],(0,j.jsx)("span",{className:"remove-filter",onClick:()=>this.removeFilter(e),children:"X"})]},s))),(0,j.jsxs)("div",{style:{float:"right",display:"flex"},children:[(0,j.jsxs)(o.Button,{onClick:this.handleResetFilter,children:[(0,j.jsx)(o.Icon,{type:"filter",theme:"outlined"}),"\xa0Clear filter"]}),(0,j.jsx)("div",{span:void 0!==r&&r.length>0&&r.indexOf("ops.download_claims_list")>-1?8:3,children:(0,j.jsx)("div",{style:{display:"flex",float:"right"},children:(0,j.jsx)(g.A,{permissionSetter:"ops.download_claims_list",permissionGetter:r,children:(0,j.jsxs)(o.Button,{onClick:this.handleDownloadExcel,style:{marginLeft:"10px"},children:[(0,j.jsx)(o.Icon,{type:"cloud",theme:"outlined"}),"\xa0Download"]})})})}),(0,j.jsx)("div",{span:r.indexOf("ops.create_go_passenger_claim")>-1?8:3,children:(0,j.jsxs)("div",{style:{display:"flex",float:"right"},children:[(0,j.jsx)(g.A,{permissionSetter:"ops.create_go_safe_trip",permissionGetter:r,children:(0,j.jsxs)(o.Button,{onClick:()=>this.showGoPassengerClaimModal("go_jek"),style:{marginLeft:"10px"},children:[(0,j.jsx)(o.Icon,{type:"highlight",theme:"outlined"}),"\xa0 Create Safetrip Aus"]})}),(0,j.jsx)(g.A,{permissionSetter:"ops.create_go_passenger_claim",permissionGetter:r,children:(0,j.jsxs)(o.Button,{onClick:()=>this.showGoPassengerClaimModal("go_jek"),style:{marginLeft:"10px"},children:[(0,j.jsx)(o.Icon,{type:"highlight",theme:"outlined"}),"\xa0 Create Go-Passenger Claim"]})}),(0,j.jsx)(g.A,{permissionSetter:"ops.create_go_driver_claim",permissionGetter:r,children:(0,j.jsxs)(o.Button,{onClick:()=>this.showGoPassengerClaimModal("go-driver"),style:{marginLeft:"10px"},children:[(0,j.jsx)(o.Icon,{type:"highlight",theme:"outlined"}),"\xa0 Create Go-Driver Claim"]})})]})})]})]}),(0,j.jsx)(D.A,{bordered:"bordered",columns:h,pagination:{pageSize:50,total:d,current:p},rowKey:e=>e.claim_id,dataSource:t||e?[]:c,loading:e,className:"isoSearchableTable",rowColor:this.getRowColour,onChange:this.handleTableChange})]})]})}}ne.defaultProps={claimUsers:[],userProducts:[]};const le=(0,i.connect)((e=>({userProducts:e.Auth.product,data:e.Claims.data,filtersData:e.Claims.filtersData,getClaimListsStatus:e.Claims.getClaimListsStatus,profileData:e.Auth.profile,getClaimListsLoading:e.Loading.GET_CLAIM_LISTS,getClaimListsError:e.Error.GET_CLAIM_LISTS,getClaimsFiltersLoading:e.Loading.GET_CLAIM_FILTERS,getClaimsFiltersError:e.Error.GET_CLAIM_FILTERS,groupLists:e.Team,validateClaimGoPassengerStatus:e.Claims.validateClaimGoPassengerStatus,dataValidateGocar:e.Claims.dataValidateGocar,claimUsers:e.Claims.claimUsers,claimUsersStatus:e.Claims.claimUsersStatus,claimsUsersLoading:e.Loading.CLAIM_USERS,claimsUsersError:e.Error.CLAIM_USERS,claimExportLoading:e.Loading.EXPORT_CLAIMS_REPORT,claimExportError:e.Error.EXPORT_CLAIMS_REPORT,claimExportMessage:e.Claims.claimExportMessage})),{getClaimLists:q,getClaimFilters:W,resetReduxStateClaim:H,exportClaimsReport:X,resetLoadingRedux:se,resetErrorRedux:ie,getListGroups:oe,validateClaimGoPassenger:Z,resetValidateStatus:J,postGoPassengerClaim:ee,getClaimUsers:te,getPartners:ae,getProducts:re})(ne)},68164:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(21577),s=a(80878),i=a.n(s),o=a(34618),n=a(67050),l=a(93317);const d=i()(r.A)`
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
    color: ${(0,o.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,o.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,o.palette)("secondary",1)};
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
    color: ${(0,o.palette)("text",3)};
    border-bottom: 1px solid ${(0,o.palette)("border",0)};

    a {
      color: ${(0,o.palette)("primary",0)};
      ${(0,n.kY)()};

      &:hover {
        color: ${(0,o.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-row {
    background-color: ${e=>e.rowColor};
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,o.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,o.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,o.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,o.palette)("border",0)};

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
      border-color: ${(0,o.palette)("primary",0)};
      ${(0,n.kY)()};
    }

    &:hover a {
      color: ${(0,o.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,o.palette)("primary",0)};
    border-color: ${(0,o.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,o.palette)("grayscale",6)};

    p {
      color: ${(0,o.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,o.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,o.palette)("secondary",1)};
    color: ${(0,o.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,n.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,o.palette)("secondary",1)};
    color: ${(0,o.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,n.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,o.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,o.palette)("border",0)};
      ${(0,n.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,o.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,o.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,n.Vq)("3px 0 0 3px")};
        ${(0,n.kY)()};
        ${(0,n.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,o.palette)("secondary",7)};
          ${(0,n.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,o.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,o.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,o.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,o.palette)("grayscale",0)};
        }

        .table-striped-rows tr:nth-child(2n) td {
          background-color: #fbfbfb;
        }
        .table-striped-rows thead {
            background-color: #f1f1f1;
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,o.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,n.kY)()};

        &:hover {
          background-color: ${(0,o.palette)("primary",1)};
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
        border: 1px solid ${(0,o.palette)("border",0)};
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
              solid ${(0,o.palette)("border",0)};
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
          border-right: 1px solid ${(0,o.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,o.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,o.palette)("border",0)};
          }

          &.isoImageCell {
            padding: 3px;
          }
        }
      }
    }
  }

  &.isAddOnTable {
    .ant-table-thead > tr {
      th {
        background-color: #333333;
        color: #FFFFFF;

    }
  }

  &.table-striped-rows tr:nth-child(2n) td {
    background-color: #EEEEEE;
  }
  &.table-striped-rows thead {
      background-color: #FFFFFF;
  }

  &.isoEditableTable {
    .isoEditData {
      .isoEditDataWrapper {
        display: flex;
        align-items: center;

        input {
          font-size: 12px;
          font-weight: 400;
          color: ${(0,o.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,o.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,n.Vq)("3px")};
          ${(0,n.MS)()};
          ${(0,n.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,o.palette)("border",0)};
            ${(0,n.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,o.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,o.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,o.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,o.palette)("grayscale",0)};
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
`,p=i().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,o.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,o.palette)("primary",0)};
      background-color: ${(0,o.palette)("primary",0)};
    }
  }
`,c=((0,l.A)(p),(0,l.A)(d))},50680:(e,t,a)=>{a.d(t,{T:()=>h});var r=a(67816),s=a(1502),i=a(24952),o=a(80878);const n=a.n(o)().div`
  padding: 8px;
  width: 216px;
  .search-button {
    background-color: #4482FF;
    color: #fff;
    width: 200px !important;
    border-color: #4482FF;
    padding: 4px 0px;
    height: auto;
  }
  .ant-input {
    width: 200px !important;
  }
  .ant-input:focus {
    border-color: #4482FF;
  }
  .ant-select {
    width: 200px;
    margin-bottom: 8px;
  }
  .ant-picker {
    width: 200px;
  }
  .range-end {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;var l=a(70579);const{Option:d}=r.Select;class p extends s.Component{constructor(){super(...arguments),this.state={createdAtStart:"",createdAtEnd:""},this.renderInputType=()=>{const{props:e,type:t,searchKey:a,setSelectedKeys:s,selectedKeys:i,partnersList:o=[],productsList:n=[],partnerListLoading:p,productListLoading:c}=this.props,{createdAtStart:h,createdAtEnd:u}=this.state;switch(t){case"partner":return(0,l.jsx)(r.Select,{showSearch:!0,placeholder:"Select Partner",optionFilterProp:"children",allowClear:!0,loading:!!p,disabled:!!p,dropdownMatchSelectWidth:!1,onChange:e=>s(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:o.map((e=>{let{name:t,code:a}=e;return(0,l.jsx)(d,{value:a,children:t},a)}))});case"product":return(0,l.jsx)(r.Select,{showSearch:!0,placeholder:"Select product",optionFilterProp:"children",allowClear:!0,loading:!!c,disabled:!!c,dropdownMatchSelectWidth:!1,onChange:e=>s(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:n.map((e=>{let{display_name:t,id:a}=e;return(0,l.jsx)(d,{value:a,children:t},a)}))});case"date-range":return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.DatePicker,{placeholder:"Select Start Date",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtStart:a}),s(t?[a,u]:[])}}),(0,l.jsx)(r.DatePicker,{placeholder:"Select End Date",className:"range-end",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtEnd:a}),s(t?[h,a]:[])}})]});default:return(0,l.jsx)(r.Input,{ref:t=>{e.searchInput=t},placeholder:`Search ${a}`,value:i,onChange:e=>s(e.target.value?e.target.value:""),onPressEnter:()=>e.handleSearch(i,a),style:{width:188,marginBottom:8,display:"block"}})}}}render(){const{props:e,searchKey:t,selectedKeys:a}=this.props;return(0,l.jsxs)(n,{children:[this.renderInputType(),(0,l.jsx)(r.Button,{type:"primary",onClick:()=>e.handleSearch(a,t),icon:(0,l.jsx)(r.Icon,{type:"search"}),className:"search-button",size:"small",style:{width:90},children:"Search"})]})}}const c=(0,i.connect)((e=>({partnerListLoading:e.Loading.GET_PARTNERS_LIST,partnersList:e.Insurance.partners,productListLoading:e.Loading.GET_PRODUCTS_LIST,productsList:e.Policy.products})),{})(p),h=(e,t,a)=>({filterDropdown:r=>{let{setSelectedKeys:s,selectedKeys:i}=r;return(0,l.jsx)("div",{className:"filter-dropdown",children:u(e,a,t,s,i)})},filterIcon:()=>(0,l.jsx)(r.Icon,{type:"filter"}),onFilter:(e,a)=>a[t]?a[t].toString().toLowerCase().includes(e.toLowerCase()):"",onFilterDropdownVisibleChange:t=>{t&&setTimeout((()=>e.searchInput&&e.searchInput.select()),100)}}),u=(e,t,a,r,s)=>(0,l.jsx)(c,{props:e,type:t,searchKey:a,setSelectedKeys:r,selectedKeys:s})},36934:(e,t,a)=>{a.d(t,{A:()=>i});a(1502);var r=a(67816),s=a(70579);const i=e=>{let{isNeedDisplay:t,onClose:a=()=>{},status:i,message:o}=e;return t?(0,s.jsx)(r.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:o,type:i,closeText:"Close",onClose:a}):""}},21577:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(67816);const s=r.Table}}]);
//# sourceMappingURL=1367.de482681.chunk.js.map