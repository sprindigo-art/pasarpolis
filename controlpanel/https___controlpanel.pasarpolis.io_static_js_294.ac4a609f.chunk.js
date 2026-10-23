"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[294],{40294:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});var s=a(1502),r=a(86178),o=a.n(r),i=a(24952),n=a(67816),l=a(95916),d=a.n(l),c=a(80878),p=a.n(c),h=a(34618);p().div`
  margin: 0 10px;

  @media only screen and (max-width: 767) {
    margin-right: 0 !important;
  }
`;const u=p().div`
  width: auto;
  height: 100%;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid${(0,h.palette)("border",2)};

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;p().div`align-content: flex-start;`;var m=a(70579);class g extends s.Component{render(){const{children:t}=this.props,e={height:this.props.height,padding:this.props.padding};return(0,m.jsx)(u,{className:`isoWidgetBox ${this.props.className}`,style:e,children:t})}}const x=g;var y=a(56873),f=a(25211);const C=p().div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;

  .ant-alert-error {
    margin-bottom:40px;
  }
  .space-top {
    margin-top: 24px;
  }

  th.claimsRatio,
  td.claimsRatio {
    text-align: right !important;
  }

  th.partner-product,
  td.partner-product {
    text-align: right !important;
  }

  th.gwp,
  td.gwp {
    text-align: right !important;
  }

  th.policiesCount,
  td.policiesCount {
    text-align: right !important;
  }

  th.total_settled_claims,
  td.total_settled_claims {
    text-align: right !important;
  }

  th.claimsAmount,
  td.claimsAmount {
    text-align: right !important;
  }
  

`;var b=a(67050);const D=p().div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  ${(0,b.Vq)("5px")};

  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.1);

    i {
      font-size: 30px;
    }
  }

  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .isoStatNumber {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 5px;
    }

    .isoLabel {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
  }
`;class S extends s.Component{render(){const{fontColor:t,bgColor:e,width:a,icon:s,number:r,text:o}=this.props,i={color:t},n={backgroundColor:e,width:a},l={color:t};return(0,m.jsxs)(D,{className:"isoStickerWidget",style:n,children:[(0,m.jsx)("div",{className:"isoIconWrapper",children:(0,m.jsx)("i",{className:s,style:l})}),(0,m.jsxs)("div",{className:"isoContentWrapper",children:[(0,m.jsx)("h3",{className:"isoStatNumber",style:i,children:r}),(0,m.jsx)("span",{className:"isoLabel",style:i,children:o})]})]})}}const w=S,P=[{displayName:"Total Completed State Policies",id:"TotalPolicies",icon:"ion-filing",fontColor:"#ffffff",bgColor:"#7266BA"},{displayName:"GWP",id:"TotalTransactionValue",icon:"ion-cash",fontColor:"#ffffff",bgColor:"#42A5F6"},{displayName:"Total Claim Amount",id:"total_claim_amount",icon:"ion-filing",fontColor:"#ffffff",bgColor:"#F75D81"}];var v=a(94528);const j=p().div`
  background-color: #ffffff;
  box-shadow: 0px 1px 4px 1px #dedede;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 24px;

  .date-container {
    display: flex;
    flex-direction: row;
    margin-right: 14px;
    font-weight: 600;
    align-items: center;

    span {
      font-size: 14px;
      margin-right: 8px;
    }
  }

  .filter-select-option {
    margin-right: 16px;

    .ant-select {
      width: 100%;
    }
  }

  .filter-btn {
    margin-right: 10px;

    button {
      width: 100%;
      font-weight: 600;
    }
  }

  .dashboard-gopassenger-checkbox {
    margin-top: 10px;
  }
`;var k=a(50248);class N extends s.Component{constructor(t){super(t),this.onChangePartner=t=>{this.state.selectedProducts.length&&this.setState({selectedProducts:[]}),this.setState({selectedPartners:t,partner:t&&t.toString(),productKey:void 0}),this.props.getProducts({query:{partner_code:t}})},this.onChangeProduct=t=>{this.setState({selectedProducts:t,productKey:t.toString()})},this.onChangeDateStart=(t,e)=>{this.setState({startDate:e})},this.onChangeDateEnd=(t,e)=>{this.setState({endDate:e})},this.resetFilter=()=>{this.setState({startDate:o()().subtract(1,"week").format("YYYY-MM-DD"),endDate:o()().format("YYYY-MM-DD"),productKey:void 0,excludeGopassengerData:!0,excludePartnerKeys:"",partner:"",loading:!1,selectedPartners:[],selectedProducts:[]},(()=>{const{excludeGopassengerData:t}=this.state,e={startDate:o()().subtract(1,"week").format("YYYY-MM-DD"),endDate:o()().format("YYYY-MM-DD"),productKey:void 0,partner:"",excludePartnerKeys:t?"gopassenger":"",excludeProductKeys:"",dashboardView:"partner"};this.props.getPolicyListDashboard(e)}))},this.submitChart=()=>{const{startDate:t,endDate:e,productKey:a,partner:s,excludeGopassengerData:r}=this.state,o={startDate:t,endDate:e,productKey:a,partner:s,excludePartnerKeys:r?"gopassenger":"",excludeProductKeys:"",dashboardView:void 0!==a||s?"product":"partner"};this.props.getPolicyListDashboard(o)},this.handleGopassengerExclude=()=>{this.setState({excludeGopassengerData:!this.state.excludeGopassengerData},(()=>this.submitChart()))},this.disabledStartDate=t=>{const{endDate:e}=this.state;return!(!t||!e)&&t.valueOf()>o()(e).valueOf()},this.disabledEndDate=t=>{const{startDate:e}=this.state;return!(!t||!e)&&t.valueOf()<=o()(e).valueOf()-1},this.state={startDate:o()().subtract(1,"week").format("YYYY-MM-DD"),endDate:o()().format("YYYY-MM-DD"),productKey:void 0,excludeGopassengerData:!0,excludePartnerKeys:"",partner:"",loading:!1,selectedPartners:[],selectedProducts:[]}}render(){const{permissions:t,products:e=[],partners:a=[]}=this.props,{excludeGopassengerData:s,selectedPartners:r,selectedProducts:i,startDate:l,endDate:d}=this.state;return(0,m.jsx)(j,{children:(0,m.jsxs)(n.Row,{type:"flex",children:[(0,m.jsx)(n.Col,{sm:4,children:(0,m.jsxs)("div",{className:"date-container",children:[(0,m.jsx)("span",{children:"From"}),(0,m.jsx)(n.DatePicker,{defaultValue:o()(l),value:o()(l),format:"YYYY-MM-DD",placeholder:"Start Date",disabledDate:this.disabledStartDate,onChange:this.onChangeDateStart})]})}),(0,m.jsx)(n.Col,{sm:4,children:(0,m.jsxs)("div",{className:"date-container",children:[(0,m.jsx)("span",{children:"To"}),(0,m.jsx)(n.DatePicker,{defaultValue:o()(d),value:o()(d),format:"YYYY-MM-DD",placeholder:"End Date",disabledDate:this.disabledEndDate,onChange:this.onChangeDateEnd})]})}),(0,m.jsx)(n.Col,{className:"filter-select-option",sm:4,children:(0,m.jsx)(n.Select,{showSearch:!0,dropdownMatchSelectWidth:!1,placeholder:"Select Partner",optionFilterProp:"children",value:r,allowClear:!0,onChange:this.onChangePartner,filterOption:(t,e)=>e.props.children.toLowerCase().indexOf(t.toLowerCase())>=0,children:a.map((t=>(0,m.jsx)(n.Select.Option,{value:t.code,children:t.name},t.code)))})}),(0,m.jsx)(n.Col,{className:"filter-select-option",sm:4,children:(0,m.jsx)(k.A,{permissionSetter:"ops.policy_select_products",permissionGetter:t,children:(0,m.jsx)(n.Select,{showSearch:!0,disabled:!(r&&r.length>0),mode:"multiple",dropdownMatchSelectWidth:!1,placeholder:"Select Product",optionFilterProp:"children",value:i,onChange:this.onChangeProduct,filterOption:(t,e)=>e.props.children.toLowerCase().indexOf(t.toLowerCase())>=0,children:e.map(((t,e)=>(0,m.jsx)(n.Select.Option,{value:t.name,children:t.display_name},`product_${e+1}`)))})})}),(0,m.jsx)(n.Col,{className:"filter-btn",lg:3,xs:12,md:3,children:(0,m.jsx)(n.Button,{type:"primary",loading:this.state.loading,onClick:this.submitChart,children:this.state.loading?"Please wait ...":"Submit"})}),(0,m.jsx)(n.Col,{className:"filter-btn",lg:3,xs:12,md:3,children:(0,m.jsx)(n.Button,{type:"default",onClick:this.resetFilter,children:"Clear Filter"})}),(0,m.jsx)(n.Col,{className:"dashboard-gopassenger-checkbox",lg:6,xs:12,md:6,children:(0,m.jsx)(n.Checkbox,{onClick:this.handleGopassengerExclude,checked:s,children:"Exclude Gopassenger Data"})})]})})}}const L=N;var _=a(50107);const I=t=>{const e=t.data?JSON.parse(t.data):{};if(Object.values(t).length>0){if(0===Object.values(e).length)return[];for(const t in e){const a=t.replace(/-/g,"_");for(let s=0;s<e[t].length;s++)e[t][s].name=e[t][s].date,e[t][s][a]=e[t][s].policy_created,delete e[t][s].policy_created,delete e[t][s].date}}const a=[];for(const r in e)e[r].forEach((t=>{a.push(t)}));const s=d()(a).groupBy("name").map(d().spread(d().assign)).value();return d().sortBy(s,["name"])};class Y extends s.Component{render(){const{active:t,payload:e,label:a}=this.props;var s=o()(a).format("DD MMMM YYYY");return t?(0,m.jsxs)("div",{style:{borderRadius:10,width:500,height:"auto",backgroundColor:"#fff"},children:[(0,m.jsx)("div",{style:{height:20,display:"flex",justifyContent:"center",alignItems:"center",color:"#000",fontSize:9,fontWeight:800,width:"100%",borderTopLeftRadius:10,borderTopRightRadius:10},children:s}),(0,m.jsx)(n.Row,{children:e&&e.map(((t,e)=>(0,m.jsxs)(n.Col,{span:12,style:{marginTop:5},children:[(0,m.jsx)("div",{style:{color:`${t.stroke}`,display:"-webkit-inline-box",marginLeft:10,marginRight:10},children:t.name}),(0,m.jsx)("span",{style:{display:"webkit-inline-box"},children:(new Intl.NumberFormat).format(t.value)})]},e)))})]}):null}}const T=Y;var A=a(97418);p().div`
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  padding-left: 16px;
  flex-wrap: wrap;

  .legend-space {
    margin: 0 10px;
  }
`;const F=p().div`
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    height: 100px;
    padding-left: 55px;
    overflow-y:scroll;

  .legend-item {
    width: 20%;
    cursor: pointer;
  }
`;class M extends s.Component{constructor(t){var e;super(t),e=this,this.updatePolicyListColor=t=>{const e=t.map((t=>({color:(0,A.NP)(),keyName:t})));this.setState({policyListLineColors:e,disabledLegend:[]})},this.handleLegendClick=t=>{d().includes(this.state.disabledLegend,t)?this.setState({disabledLegend:this.state.disabledLegend.filter((e=>e!==t))}):this.setState({disabledLegend:this.state.disabledLegend.concat(t)})},this.getChartConfig=function(){return{componentName:"StackedAreaChart",key:"StackedAreaChart",title:"Stacked Area Chart",width:350,height:350,datas:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}},this.renderChart=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((t=>!d().includes(e.state.disabledLegend,t.keyName))).map(((t,e)=>(0,m.jsx)(_.Line,{type:"linear",dataKey:t.keyName&&t.keyName.replace(/-/g,"_"),stackId:"1",stroke:t.color,strokeWidth:2},e)))},this.renderLegends=t=>{const{payload:e}=t;return(0,m.jsx)(F,{children:e.map((t=>{const{dataKey:e,color:a}=t,s=d().includes(this.state.disabledLegend,e),r={color:s?"#AAA":"#000"};return(0,m.jsxs)("span",{className:"legend-item",onClick:()=>this.handleLegendClick(e),style:r,children:[(0,m.jsxs)(_.Surface,{width:10,height:10,children:[(0,m.jsx)(_.Symbols,{cx:5,cy:5,type:"circle",size:50,fill:a}),s&&(0,m.jsx)(_.Symbols,{cx:5,cy:5,type:"circle",size:25,fill:"#FFF"})]}),"\xa0",(0,m.jsx)("span",{children:e})]},e)}))})},this.dataFormater=t=>t>1e9?(t/1e9).toString()+"B":t>1e6?(t/1e6).toString()+"M":t>1e3?(t/1e3).toString()+"K":t.toString(),this.state={disabledLegend:[],policyListLineColors:[]}}componentDidMount(){const{policyList:t}=this.props;this.updatePolicyListColor(t)}UNSAFE_componentWillReceiveProps(t){const{policyList:e}=t;this.updatePolicyListColor(e)}render(){const{chartData:t,width:e}=this.props,a=I(t),s={...this.getChartConfig(a),width:e||(window.innerWidth<450?300:1100)},{policyListLineColors:r}=this.state;return(0,m.jsx)(_.ResponsiveContainer,{width:s.width,height:s.height,children:(0,m.jsxs)(_.LineChart,{data:s.datas,margin:{top:10,right:30,left:0,bottom:0},children:[(0,m.jsx)(_.CartesianGrid,{strokeDasharray:"3 3"}),(0,m.jsx)(_.XAxis,{dataKey:"name"}),(0,m.jsx)(_.YAxis,{minTickGap:6,allowDataOverflow:!0,tickFormatter:this.dataFormater}),(0,m.jsx)(_.Tooltip,{content:(0,m.jsx)(T,{})}),(0,m.jsx)(_.Legend,{payload:r.map(((t,e)=>({dataKey:t.keyName,color:t.color}))),content:this.renderLegends}),r.length?this.renderChart(r):(0,m.jsx)("h1",{children:"Data not found"})]})})}}const O=M;var W=a(70307),E=a.n(W);class R extends s.Component{constructor(){super(...arguments),this.state={searchText:"",searchedColumn:"",dashBoardColumns:[]},this.combinedTable=(t,e,a)=>{const{TotalTransactionValue:s}=e,{data:r}=t,o=[],i={};return(null===r||void 0===r?void 0:r.length)>0&&r.forEach(((t,e)=>{const a=t.partners||t.products,r=(parseInt(t.claim_amount)/s*100).toFixed(2);i[a]={total_settled_claims:t.total_settled_claims,claimsAmount:Number(t.claim_amount),claimsRatio:r}})),a.forEach((t=>{const e=t.partner_key||t.product_key;if(Object.prototype.hasOwnProperty.call(i,e)){var a;const r={...t,...i[e]};var s;if(0===(null===r||void 0===r||null===(a=r.ProductDisplayName)||void 0===a?void 0:a.length))r.ProductDisplayName=(null===r||void 0===r||null===(s=r.product_key)||void 0===s?void 0:s.length)>0?r.product_key:"";o.push(r)}else{var r,n;if(t.claimsAmount=0,t.total_settled_claims=0,0===(null===t||void 0===t||null===(r=t.ProductDisplayName)||void 0===r?void 0:r.length))t.ProductDisplayName=(null===t||void 0===t||null===(n=t.product_key)||void 0===n?void 0:n.length)>0?t.product_key:"";o.push(t)}})),o},this.updateDashboardTable=t=>{let{dashboardView:e}=t;const{PartnerWiseCount:a}=e,s=Array.isArray(a)?"partner":"product",r=[{title:"product"===s?"Product ID":"Partner",dataIndex:"product"===s?"ProductDisplayName":"partner_key",key:"product"===s?"ProductDisplayName":"partner_key",defaultSortOrder:"ascend",className:"partner-product",sorter:(t,e)=>{const a="product"===s?"ProductDisplayName":"partner_key",r=a;return t[a].localeCompare(e[r])},...this.getColumnSearchProps("product"===s?"ProductDisplayName":"partner_key")},{title:"GWP",dataIndex:"paymentSum",key:"paymentSum",defaultSortOrder:"ascend",className:"gwp",sorter:(t,e)=>parseInt(t.paymentSum)<parseInt(e.paymentSum)?-1:parseInt(t.paymentSum)>parseInt(e.paymentSum)?1:0,...this.getColumnSearchProps("paymentSum"),render:t=>t?(new Intl.NumberFormat).format(Number.isInteger(Number(t))?parseInt(t):parseFloat(t)):""},{title:"Total Completed State Policies",dataIndex:"policiesCount",key:"policiesCount",defaultSortOrder:"ascend",className:"policiesCount",sorter:(t,e)=>parseInt(t.policiesCount,10)-parseInt(e.policiesCount,10),...this.getColumnSearchProps("policiesCount"),render:t=>t?(new Intl.NumberFormat).format(Number.isInteger(Number(t))?parseInt(t):parseFloat(t)):0},{title:"Total Settled Claims",dataIndex:"total_settled_claims",key:"total_settled_claims",defaultSortOrder:"descend",className:"total_settled_claims",sorter:(t,e)=>t.total_settled_claims-e.total_settled_claims,render:t=>t?(new Intl.NumberFormat).format(Number.isInteger(Number(t))?parseInt(t):parseFloat(t)):0},{title:"Claims Amount",dataIndex:"claimsAmount",key:"claimsAmount",defaultSortOrder:"descend",className:"claimsAmount",sorter:(t,e)=>t.claimsAmount-e.claimsAmount,render:t=>t?(new Intl.NumberFormat).format(Number.isInteger(Number(t))?parseInt(t):parseFloat(t)):""}];this.setState({dashBoardColumns:r})},this.getColumnSearchProps=t=>({filterDropdown:e=>{let{setSelectedKeys:a,selectedKeys:s,confirm:r,clearFilters:o}=e;return(0,m.jsxs)("div",{style:{padding:8},children:[(0,m.jsx)(n.Input,{ref:t=>{this.searchInput=t},placeholder:`Search ${t}`,value:null===s||void 0===s?void 0:s[0],onChange:t=>a(t.target.value?[t.target.value]:[]),onPressEnter:()=>this.handleSearch(s,r,t),style:{width:188,marginBottom:8,display:"block"}}),(0,m.jsx)(n.Button,{type:"primary",onClick:()=>this.handleSearch(s,r,t),icon:"search",size:"small",style:{width:90,marginRight:8},children:"Search"}),(0,m.jsx)(n.Button,{onClick:()=>this.handleReset(o),size:"small",style:{width:90},children:"Reset"})]})},filterIcon:t=>(0,m.jsx)(n.Icon,{type:"search",style:{color:t?"#1890ff":void 0}}),onFilter:(e,a)=>a[t].toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:t=>{t&&setTimeout((()=>this.searchInput.select()))},render:e=>this.state.searchedColumn===t?(0,m.jsx)(E(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[this.state.searchText],autoEscape:!0,textToHighlight:e.toString()}):e}),this.handleSearch=(t,e,a)=>{e(),this.setState({searchText:t[0],searchedColumn:a})},this.handleReset=t=>{t(),this.setState({searchText:""})}}componentDidMount(){this.updateDashboardTable(this.props)}UNSAFE_componentWillReceiveProps(t){t.dashboardView!==this.props.dashboardView&&this.updateDashboardTable(t)}render(){const{policyDashboardTable:t,claimsDashboardTable:e,dashboardView:a}=this.props,s=this.combinedTable(e,a,t),{dashBoardColumns:r}=this.state;return(0,m.jsx)(n.Table,{columns:r,dataSource:s,bordered:!0})}}const K=R,{getPolicyListDashboard:B}=y.A,{getInsuranceData:G,getProducts:V}=f.A;class z extends s.Component{constructor(t){super(t),this.renderpolicyGraphData=t=>{const e={},a={};return t.forEach((t=>{const a=void 0!==t.ProductDisplayName?t.ProductDisplayName:t.partner_key;Object.prototype.hasOwnProperty.call(e,a)?e[a]=[...e[a],{date:t.created_at,policy_created:t.policiesCount}]:e[a]=[{date:t.created_at,policy_created:t.policiesCount}]})),a.data=JSON.stringify(e),a},this.renderpolicyListData=t=>{const e=[];return t.forEach((t=>{const a=void 0!==t.ProductDisplayName?t.ProductDisplayName:t.partner_key;d().includes(e,a)||e.push(a)})),e},this.getStickerContainer=(t,e)=>P.map((a=>{let s;"TotalTransactionValue"===a.id?s=t.TotalTransactionValue&&t.TotalTransactionValue.toFixed(2):"total_claim_amount"===a.id&&(s=e.total_claim_amount);const r=s?`Rp ${(new Intl.NumberFormat).format(s)}`:t[a.id]?(new Intl.NumberFormat).format(t[a.id]):0;return(0,m.jsx)(n.Col,{span:8,children:(0,m.jsx)(w,{number:r,text:a.displayName,icon:a.icon,fontColor:a.fontColor,bgColor:a.bgColor})},a.id)})),this.handleProductData=t=>t?(Array.isArray(t)&&t.forEach((t=>{""===(null===t||void 0===t?void 0:t.ProductDisplayName)&&(t.ProductDisplayName=null===t||void 0===t?void 0:t.product_key)})),t):null,this.state={defaultData:{startDate:o()().subtract(1,"week").format("YYYY-MM-DD"),endDate:o()().format("YYYY-MM-DD"),productKey:"",excludeProductKeys:"",partner:"",excludePartnerKeys:"gopassenger",dashboardView:"partner"},lineChartWidth:window.innerWidth<450?300:1100,error:""}}componentDidMount(){this.props.getPolicyListDashboard(this.state.defaultData),this.props.getInsuranceData(),this.setState({lineChartWidth:document.getElementById("policyLineChart").offsetWidth})}UNSAFE_componentWillReceiveProps(t){const{policyListDashBoardLoading:e,policyListDashBoardError:a}=t,{policyListDashboardStatus:s}=t.policyList;!e&&a&&"success"!==s&&this.setState({error:s})}render(){const{error:t,lineChartWidth:e}=this.state,{policyListDashBoardLoading:a,getPolicyListDashboard:s,getProducts:r,policyList:o,permissions:i,partners:l,products:c}=this.props,p=d().get(o,"data.policyData",{}),h=d().get(o,"data.claimsData",{}),u=this.handleProductData(p.ProductWiseCount)||p.PartnerWiseCount||[],g=p.ProductWiseCountWithoutDateGrouping||p.PartnerWiseCountWithoutDateGrouping||[],y=u.length?this.renderpolicyGraphData(u):u,f=u.length?this.renderpolicyListData(u):u;return(0,m.jsx)(C,{children:(0,m.jsxs)(v.A,{isSpining:a,children:[0===d().size(p)&&t&&(0,m.jsx)(n.Alert,{message:t,type:"error",closeText:"Close"}),(0,m.jsx)(n.Row,{gutter:{xs:16,sm:16,md:16},children:this.getStickerContainer(p,h)}),(0,m.jsx)(L,{getPolicyListDashboard:s,getProducts:r,permissions:i,partners:l,products:c}),(0,m.jsx)(x,{height:455,children:(0,m.jsx)(n.Row,{type:"flex",children:(0,m.jsx)(n.Col,{xl:23,id:"policyLineChart",children:(0,m.jsx)(O,{products:c,policyList:f,chartData:y,loaderFailedFetch:!!t,width:e})})})}),(0,m.jsx)(x,{className:"space-top",children:Object.keys(p).length>0&&(0,m.jsx)(n.Row,{type:"flex",children:(0,m.jsx)(n.Col,{xl:23,children:(0,m.jsx)(K,{policyDashboardTable:g,dashboardView:p,claimsDashboardTable:h})})})})]})})}}const $=(0,i.connect)((t=>({policyList:t.Dashboard,partners:t.Insurance.partners,partnersPolicyData:t.Insurance.policyList,policyListDashBoardLoading:t.Loading.GET_POLICY_LIST_DASHBOARD,policyListDashBoardError:t.Error.GET_POLICY_LIST_DASHBOARD,products:t.Policy.products})),{getPolicyListDashboard:B,getInsuranceData:G,getProducts:V})(z)}}]);
//# sourceMappingURL=294.ac4a609f.chunk.js.map