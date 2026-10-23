"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[695],{72717:(e,a,t)=>{t.d(a,{Ew:()=>r,Qv:()=>n,aF:()=>s});t(96760);const r=["passenger-insurance","driver-insurance"],s=[{display:"Rp 5.000.000",value:5e6},{display:"Rp 10.000.000",value:1e7},{display:"Rp 15.000.000",value:15e6},{display:"Rp 20.000.000",value:2e7},{display:"Rp 25.000.000",value:25e6},{display:"Rp 30.000.000",value:3e7},{display:"Rp 35.000.000",value:35e6},{display:"Rp 40.000.000",value:4e7},{display:"Rp 45.000.000",value:45e6},{display:"Rp 50.000.000",value:5e7}],n=["document_received","document_verified","document_complete","document_approved_by_pp","document_rejected_by_pp","salvage_pending","salvage_dispatched","salvage_received","salvage_verified","internal_action_from_pasarpolis_pending","internal_action_from_pasarpolis_complete","claim_pending_from_provider","claim_pending_from_pasarpolis","claim_accepted","claim_payment_pending","claim_payment_triggered","claim_payment_failed","claim_accepted_by_pasarpolis","pending_payment_on_pasarpolis","pending_on_tez"]},40695:(e,a,t)=>{t.r(a),t.d(a,{default:()=>V});var r=t(1502),s=t(24952),n=t(67816),i=t(17823),d=t.n(i),l=t(80878),o=t.n(l);const c=o().div`
  padding: 12px;
  .xendit-balance {
    padding:5px 10px;
    background-color: #7cb5e3;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
  }
  .iris-balance {
    padding:5px 10px;
    background-color: #f5b362;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
  }
  .ant-select {
    width: 150px;
  }
  .form-button {
    border-radius: 2px;
    min-width: 150px;
  }
  .ant-card-bordered {
    margin-bottom: 12px;
  }
  .card-header {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .arrow {
    font-size: 22px;
    color: #1890ff;
    cursor: pointer;
  }
  .arrow-right {
    font-size: 22px;
    color: #1890ff;
    cursor: ${e=>e.disableNext?"not-allowed !important":"pointer"};
    opacity: ${e=>e.disableNext?"0.6":"1"}
  }
`;var p=t(31453),h=t(25211);const m=o().div`
  background-color: ${e=>e.color};
  text-align: center;
  padding: 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 2px;
  min-width: 220px;
  cursor: pointer;
  .primary-text {
    color: #000;
    opacity: 0.8;
    margin-bottom: 4px;
  }
  .secondary-text {
    color: #000;
    opacity: 0.8;
  }
  .ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title {
    background: ${e=>e.color};
    opacity: 1;
  }
`,g=o().div`
  .heading {
    font-size: 15px;
    font-weight: 600;
    margin-right: 16px;
    width: max-content;
  }
  .ant-card {
    min-width: 450px;
  }
  .ant-col {
    margin-bottom: 6px;
  }
  .count {
    /* text-align: center; */
    cursor: pointer;
    text-decoration: underline;
  }
  .name {
    font-weight: 550;
    font-size: 14px;
    max-width: 140px;
    word-break: break-word;
  }
  .red-legend {
    background-color: #DC143C;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    margin-right: 8px;
  }
  .yellow-legend {
    background-color: #ffff77;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    margin-right: 8px;
  }
  .green-legend {
    background-color: #98FB98;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    /* margin-right: 8px; */
  }
  .see-more-button {
    border-radius: 18px;
    margin-top: 12px;
    min-width: 120px;
    min-height: 34px;
  }
  .data-wrapper {
    max-height: 270px;
    overflow-y: scroll;
  }
`,x=o().div`
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  padding: 4px;
  margin-right: 4px;
  .red-legend {
    background-color: #DC143C;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    margin-right: 8px;
  }
  .yellow-legend {
    background-color: #ffff77;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    margin-right: 8px;
  }
  .green-legend {
    background-color: #98FB98;
    height: 16px;
    width: 16px;
    /* margin-left: 8px; */
    margin-right: 8px;
  }
  .date {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .count {
    cursor: pointer;
    text-decoration: underline;
  }
`;var D=t(93807),u=t(72717),_=t(70579);class C extends r.Component{constructor(){super(...arguments),this.getSecondaryText=()=>{const{range:e}=this.props;switch(e){case"RED":return"Open More Than 7 Days";case"YELLOW":return"Open Between 3-7 Days";default:return"Open Less Than 3 Days"}},this.handleClick=()=>{const{range:e,filterData:a}=this.props,t={...a,doc_received_end_date:a.doc_received_endDate||a.endDate,doc_received_start_date:a.doc_received_startDate||a.startDate};delete t.doc_received_endDate,delete t.doc_received_startDate,delete t.endDate,delete t.startDate,t.colour=e,t.source="dashboard",t.status=[...u.Qv];const r=(0,D.A)(t);this.props.history.push(`/claims/all${r}`)}}render(){const{color:e,count:a=0,loading:t}=this.props;return(0,_.jsxs)(m,{color:e,onClick:this.handleClick,children:[(0,_.jsx)("div",{className:"primary-text",children:(0,_.jsxs)(n.Skeleton,{loading:!!t,paragraph:!1,active:!0,children:[a," Open Claims"]})}),(0,_.jsx)("div",{className:"secondary-text",children:this.getSecondaryText()})]})}}const f=C;class Y extends r.Component{constructor(){super(...arguments),this.handleCountClick=(e,a)=>{const{type:t,filterData:r,startDate:s,endDate:n}=this.props,i="partner"===t?"partner_id":"owner_id",d={...r,doc_received_end_date:r.doc_received_endDate||n,doc_received_start_date:r.doc_received_startDate||s};d.doc_received_endDate&&delete d.doc_received_endDate,d.doc_received_startDate&&delete d.doc_received_startDate,d.startDate&&delete d.startDate,d.endDate&&delete d.endDate,delete d.endDate,d.source="dashboard",d.colour=e,d.status=[...u.Qv],d[i]=a;const l=(0,D.A)(d);this.props.history.push(`/claims/all${l}`)},this.handleLoadMore=()=>{const{metaData:e={},type:a,startDate:t,endDate:r}=this.props,{page_number:s}=e;"partner"===a?this.props.fetchPartnerOpenClaims({body:{page_number:s+1,page_size:10,...t&&{start_date:t},...r&&{end_date:r}},seeMore:!0}):this.props.fetchOperationOpenClaims({body:{page_number:s+1,page_size:10,...t&&{start_date:t},...r&&{end_date:r}},seeMore:!0})}}render(){var e=this;const{heading:a="",data:t=[],loading:r=!1,metaData:s={}}=this.props,{total_records:i,page_number:d,page_size:l}=s,o=i-10*d;return(0,_.jsx)(g,{children:(0,_.jsxs)(n.Card,{children:[(0,_.jsxs)(n.Row,{align:"middle",children:[(0,_.jsx)(n.Col,{span:15,children:(0,_.jsx)("div",{className:"heading",children:a})}),(0,_.jsx)(n.Col,{span:3,children:(0,_.jsx)("div",{className:"red-legend"})}),(0,_.jsx)(n.Col,{span:3,children:(0,_.jsx)("div",{className:"yellow-legend"})}),(0,_.jsx)(n.Col,{span:3,children:(0,_.jsx)("div",{className:"green-legend"})})]}),(0,_.jsx)(n.Skeleton,{active:!0,loading:r,paragraph:{rows:9},title:!1,children:(0,_.jsx)("div",{className:"data-wrapper",children:t&&t.map((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,_.jsxs)(n.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,_.jsx)(n.Col,{span:15,children:(0,_.jsx)("div",{className:"name",children:a.partner||a.owner_name})}),(0,_.jsx)(n.Col,{span:3,className:"col-margin",children:(0,_.jsx)("div",{className:"count",onClick:()=>e.handleCountClick("RED",a.partner||a.owner_id),children:a.RED||0})}),(0,_.jsx)(n.Col,{span:3,className:"col-margin",children:(0,_.jsx)("div",{className:"count",onClick:()=>e.handleCountClick("YELLOW",a.partner||a.owner_id),children:a.YELLOW||0})}),(0,_.jsx)(n.Col,{span:3,className:"col-margin",children:(0,_.jsx)("div",{className:"count",onClick:()=>e.handleCountClick("GREEN",a.partner||a.owner_id),children:a.GREEN||0})})]},JSON.stringify(a))}))})}),(0,_.jsx)(n.Row,{type:"flex",justify:"end",children:(0,_.jsxs)(n.Button,{className:"see-more-button",type:"primary",disabled:r||d*l>=i,onClick:this.handleLoadMore,children:["See more (",o>0?o:0,")"]})})]})})}}const y=Y;class b extends r.Component{constructor(){super(...arguments),this.handleClick=e=>{const{date:a}=this.props,t=d()(a).format("YYYY-MM-DD"),r={};r.colour=e,r.doc_received_start_date=`${t} 00:00:00`,r.doc_received_end_date=`${t} 23:59:59`,r.source="dashboard";const s=(0,D.A)(r);this.props.history.push(`/claims/all${s}`)}}render(){const{date:e="",red:a=0,yellow:t=0,green:r=0}=this.props;return(0,_.jsxs)(x,{children:[(0,_.jsx)("div",{className:"date",children:d()(e).format("DD MMM")}),(0,_.jsxs)(n.Row,{type:"flex",justify:"space-around",children:[(0,_.jsx)("div",{className:"red-legend"}),(0,_.jsx)("div",{className:"count",onClick:()=>this.handleClick("RED"),children:a})]}),(0,_.jsxs)(n.Row,{type:"flex",justify:"space-around",children:[(0,_.jsx)("div",{className:"yellow-legend"}),(0,_.jsx)("div",{className:"count",onClick:()=>this.handleClick("YELLOW"),children:t})]}),(0,_.jsxs)(n.Row,{type:"flex",justify:"space-around",children:[(0,_.jsx)("div",{className:"green-legend"}),(0,_.jsx)("div",{className:"count",onClick:()=>this.handleClick("GREEN"),children:r})]})]})}}const O=b;var j=t(95916),v=t.n(j);const{Option:M}=n.Select,{Item:N}=n.Form,{getProducts:P}=h.A,{getAllOpenClaims:w,getPartnerOpenClaims:L,getOperationsOpenClaims:S}=p.A;class B extends r.Component{constructor(){super(...arguments),this.handleSubmit=e=>{e.preventDefault(),this.props.form.validateFields(((e,a)=>{if(!e){const e=v().pickBy(a,v().identity);if(Object.keys(e).length>0){const{partners:e,partnerproduct_id:t,start_date:r,end_date:s}=a;let n="";for(const a of this.props.products)if(a.id===t){n=a.name;break}a.start_date=r&&d()(r).format("YYYY-MM-DD 00:00:00"),a.end_date=s&&d()(s).format("YYYY-MM-DD 23:59:59"),this.props.filterData({partner_id:e,product_key:n,doc_received_startDate:r&&d()(r).format("YYYY-MM-DD 00:00:00"),doc_received_endDate:s&&d()(s).format("YYYY-MM-DD 23:59:59")}),this.props.getAllOpenClaims({body:{...a}}),this.props.getPartnerOpenClaims({body:{...a}}),this.props.getOperationsOpenClaims({body:{...a}})}else n.notification.error({message:"Please choose filter"})}}))},this.handleClearFilter=()=>{this.props.filterData({}),this.props.form.resetFields(),this.props.getProducts(),this.props.getAllOpenClaims(),this.props.getPartnerOpenClaims(),this.props.getOperationsOpenClaims()},this.handlePartnerSelect=e=>{this.props.getProducts({query:{partner_code:e}}),this.props.form.resetFields("partnerproduct_id")}}componentDidMount(){this.props.form.setFieldsValue({start_date:d()().subtract(7,"days"),end_date:d()()})}render(){const{form:e,products:a=[],partners:t=[]}=this.props,{getFieldDecorator:r}=e,{partners:s}=this.props.form.getFieldsValue();return(0,_.jsx)(n.Form,{onSubmit:this.handleSubmit,children:(0,_.jsxs)(n.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,_.jsx)(N,{label:"Partner",children:r("partners")((0,_.jsx)(n.Select,{showSearch:!0,placeholder:"Select Partner",onSelect:this.handlePartnerSelect,dropdownMatchSelectWidth:!1,children:t.map(((e,a)=>(0,_.jsx)(M,{value:e.code,children:e.name},a)))}))}),(0,_.jsx)(N,{label:"Product",children:r("partnerproduct_id")((0,_.jsx)(n.Select,{showSearch:!0,placeholder:"Select Product",dropdownMatchSelectWidth:!1,disabled:!s,children:a.map(((e,a)=>(0,_.jsx)(M,{value:e.id,children:e.display_name},`_${a}_${e.id}`)))}))}),(0,_.jsx)(N,{label:"Doc Received Start Date",children:r("start_date",{rules:[{required:e.getFieldValue("end_date"),message:"Please select Start date"}]})((0,_.jsx)(n.DatePicker,{format:"YYYY-MM-DD",placeholder:"Doc Received Start Date",disabledDate:e=>{const a=d()().format("YYYY-MM-DD");return e&&e>d()(a,"YYYY-MM-DD")}}))}),(0,_.jsx)(N,{label:"Doc Received End Date",children:r("end_date",{rules:[{required:e.getFieldValue("start_date"),message:"Please select End date"}]})((0,_.jsx)(n.DatePicker,{format:"YYYY-MM-DD",placeholder:"Doc Received End Date",disabledDate:e=>{const a=d()().format("YYYY-MM-DD");return e&&e>d()(a,"YYYY-MM-DD")}}))}),(0,_.jsx)(N,{children:(0,_.jsx)(n.Button,{type:"primary",htmlType:"submit",className:"form-button",children:"Apply Filter"})}),(0,_.jsx)(N,{children:(0,_.jsx)(n.Button,{type:"danger",className:"form-button",onClick:this.handleClearFilter,children:"Clear Filter"})})]})})}}const E=n.Form.create()(B),I=(0,s.connect)((e=>({irisBalance:e.ClaimDashboard.irisBalance,getIrisBalanceLoading:e.Loading.GET_IRIS_BALANCE,xenditBalance:e.ClaimDashboard.xenditBalance,getXenditBalanceLoading:e.Loading.GET_XENDIT_BALANCE,allOpenClaims:e.ClaimDashboard.allOpenClaims,partnerOpenClaims:e.ClaimDashboard.partnerOpenClaims,operationOpenClaims:e.ClaimDashboard.operationOpenClaims})),{getProducts:P,getAllOpenClaims:w,getPartnerOpenClaims:L,getOperationsOpenClaims:S})(E),{getProducts:A,getPartners:k}=h.A,{getIrisBalanceAction:R,getXenditBalance:F,getAllOpenClaims:W,getPartnerOpenClaims:T,getOperationsOpenClaims:G,getDayWiseOpenClaims:z,getIrisPPIBalance:$,getIrisAusBalance:X}=p.A;class U extends r.Component{constructor(e){super(e),this.setUpInitialFilterData=()=>{const{startDate:e,endDate:a}=this.state;this.setState({filterData:{startDate:d()(e).format("YYYY-MM-DD 00:00:00"),endDate:d()(a).format("YYYY-MM-DD 23:59:59")}})},this.fetch=()=>{this.props.getPartners(),this.props.getXenditBalance(),this.props.getIrisBalanceAction(),this.props.getIrisPPIBalance(),this.props.getIrisAusBalance(),this.props.getAllOpenClaims({body:{start_date:d()().subtract(7,"days").format("YYYY-MM-DD 00:00:00"),end_date:d()().format("YYYY-MM-DD 23:59:59")}}),this.props.getPartnerOpenClaims({body:{page_size:10,start_date:this.state.startDate,end_date:this.state.endDate}}),this.props.getOperationsOpenClaims({body:{page_size:10,start_date:d()().subtract(7,"days").format("YYYY-MM-DD 00:00:00"),end_date:d()().format("YYYY-MM-DD 23:59:59")}}),this.props.getDayWiseOpenClaims({body:{start_date:d()().subtract(6,"days").format("YYYY-MM-DD 00:00:00"),end_date:d()().format("YYYY-MM-DD 23:59:59")}})},this.handlePrevious=()=>{const{currentDate:e}=this.state;this.props.getDayWiseOpenClaims({body:{start_date:d()(e).subtract(6,"days").format("YYYY-MM-DD 00:00:00"),end_date:d()(e).format("YYYY-MM-DD 23:59:59")}}),this.setState({currentDate:d()(e).subtract(7,"days").format("YYYY-MM-DD"),disableNext:!1})},this.handleNext=()=>{const{currentDate:e}=this.state;e!==d()().subtract(7,"days").format("YYYY-MM-DD")?(this.props.getDayWiseOpenClaims({body:{start_date:d()(e).add(8,"days").format("YYYY-MM-DD 00:00:00"),end_date:d()(e).add(14,"days").format("YYYY-MM-DD 23:59:59")}}),this.setState({disableNext:d()(e).add(14,"days").format("YYYY-MM-DD")===d()().format("YYYY-MM-DD"),currentDate:d()(e).add(8,"days").format("YYYY-MM-DD")})):this.setState({disableNext:!1})},this.fetchPartnerOpenClaims=e=>{this.props.getPartnerOpenClaims({...e})},this.fetchOperationOpenClaims=e=>{this.props.getOperationsOpenClaims(e)},this.onhandleFilterData=e=>{this.setState({filterData:e}),0===Object.keys(e).length&&this.setState({startDate:null,endDate:null}),e.doc_received_endDate&&this.setState({endDate:e.doc_received_endDate}),e.doc_received_startDate&&this.setState({startDate:e.doc_received_startDate})},this.state={currentDate:d()().subtract(7,"days").format("YYYY-MM-DD"),filterData:{},disableNext:!0,startDate:d()().subtract(7,"days").format("YYYY-MM-DD 00:00:00"),endDate:d()().format("YYYY-MM-DD 23:59:59")}}componentDidMount(){this.fetch(),this.setUpInitialFilterData()}render(){const{irisBalance:e=0,irisPPIBalance:a=0,xenditBalance:t=0,products:r=[],partners:s=[],allOpenClaims:i={},partnerOpenClaims:d=[],partnerOpenClaimsMetaData:l=[],operationOpenClaims:o=[],operationOpenClaimsMetaData:p=[],dayWiseOpenClaims:h=[],dayWiseOpenClaimsLoading:m,operationOpenClaimsLoading:g,partnerOpenClaimsLoading:x,getIrisBalanceLoading:D,getIrisPPIBalanceLoading:u,getXenditBalanceLoading:C,allOpenClaimsLoading:Y,history:b,irisAusBalance:j=0,getIrisAusBalanceLoading:v}=this.props,{filterData:M,disableNext:N}=this.state;return(0,_.jsxs)(c,{disableNext:N,children:[(0,_.jsxs)(n.Row,{type:"flex",justify:"center",children:[(0,_.jsx)(n.Col,{children:(0,_.jsx)("div",{className:"iris-balance",children:(0,_.jsxs)(n.Spin,{spinning:!!u,children:["IRIS PPI Balance: ",isNaN(a)?a:a.toLocaleString("en-US")]})})}),(0,_.jsx)(n.Col,{children:(0,_.jsx)("div",{className:"iris-balance",children:(0,_.jsxs)(n.Spin,{spinning:!!D,children:["IRIS PPIB Balance:",isNaN(e)?e:e.toLocaleString("en-US")]})})}),(0,_.jsx)(n.Col,{children:(0,_.jsx)("div",{className:"xendit-balance",children:(0,_.jsxs)(n.Spin,{spinning:!!C,children:["Xendit PPIB Balance:",isNaN(t)?t:t.toLocaleString("en-US")]})})}),(0,_.jsx)(n.Col,{children:(0,_.jsx)("div",{className:"xendit-balance",children:(0,_.jsxs)(n.Spin,{spinning:!!v,children:["Iris Aus  Balance:",isNaN(j)?j:j.toLocaleString("en-US")]})})})]}),(0,_.jsxs)(n.Card,{children:[(0,_.jsx)(I,{partners:s,products:r,handlePartnerSelect:this.onhandlePartnerSelect,filterData:this.onhandleFilterData}),(0,_.jsxs)(n.Card,{children:[(0,_.jsx)("div",{className:"card-header",children:"ALL OPEN CLAIMS"}),(0,_.jsxs)(n.Row,{type:"flex",justify:"space-around",children:[(0,_.jsx)(f,{count:i.RED,range:"RED",color:"rgba(220,20,60,0.8)",history:b,loading:Y,filterData:M}),(0,_.jsx)(f,{count:i.YELLOW,range:"YELLOW",color:"#ffff77",history:b,loading:Y,filterData:M}),(0,_.jsx)(f,{count:i.GREEN,range:"GREEN",color:"rgba(152,251,152,0.8)",history:b,loading:Y,filterData:M})]})]}),(0,_.jsxs)(n.Row,{type:"flex",justify:"space-around",children:[(0,_.jsx)(y,{heading:"Partner Open Claims",type:"partner",history:b,fetchPartnerOpenClaims:this.fetchPartnerOpenClaims,data:d,metaData:l,loading:x,filterData:M,startDate:this.state.startDate,endDate:this.state.endDate}),(0,_.jsx)(y,{heading:"Operation Open Claims",type:"operation",history:b,fetchOperationOpenClaims:this.fetchOperationOpenClaims,data:o,metaData:p,loading:g,filterData:M,startDate:this.state.startDate,endDate:this.state.endDate})]})]}),(0,_.jsxs)(n.Card,{children:[(0,_.jsx)("div",{className:"card-header",children:"BREAKDOWN OPEN CLAIM"}),(0,_.jsx)(n.Spin,{spinning:!!m,children:(0,_.jsxs)(n.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,_.jsx)(n.Icon,{type:"left-circle",className:"arrow",onClick:this.handlePrevious}),h.map(((e,a)=>(0,_.jsx)(n.Col,{span:3,children:(0,_.jsx)(O,{date:e.date,red:e.RED,yellow:e.YELLOW,green:e.GREEN,history:b})},a))),(0,_.jsx)(n.Icon,{type:"right-circle",className:"arrow-right",onClick:this.handleNext})]})})]})]})}}const V=(0,s.connect)((e=>({partners:e.Insurance.partners,products:e.Insurance.products,irisBalance:e.ClaimDashboard.irisBalance,irisPPIBalance:e.ClaimDashboard.irisPPIBalance,irisAusBalance:e.ClaimDashboard.irisAusBalance,getIrisBalanceLoading:e.Loading.GET_IRIS_BALANCE,getIrisPPIBalanceLoading:e.Loading.GET_IRIS_PPI_BALANCE,xenditBalance:e.ClaimDashboard.xenditBalance,getXenditBalanceLoading:e.Loading.GET_XENDIT_BALANCE,getIrisAusBalanceLoading:e.Loading.GET_IRIS_AUS_BALANCE,allOpenClaims:e.ClaimDashboard.allOpenClaims,allOpenClaimsLoading:e.Loading.GET_ALL_OPEN_CLAIMS,partnerOpenClaims:e.ClaimDashboard.partnerOpenClaims,partnerOpenClaimsMetaData:e.ClaimDashboard.partnerOpenClaimsMetaData,partnerOpenClaimsLoading:e.Loading.GET_PARTNER_OPEN_CLAIMS,operationOpenClaims:e.ClaimDashboard.operationOpenClaims,operationOpenClaimsMetaData:e.ClaimDashboard.operationOpenClaimsMetaData,operationOpenClaimsLoading:e.Loading.GET_OPERATION_OPEN_CLAIMS,dayWiseOpenClaims:e.ClaimDashboard.dayWiseOpenClaims,dayWiseOpenClaimsLoading:e.Loading.GET_DAY_WISE_OPEN_CLAIMS})),{getIrisAusBalance:X,getIrisBalanceAction:R,getIrisPPIBalance:$,getXenditBalance:F,getProducts:A,getPartners:k,getAllOpenClaims:W,getPartnerOpenClaims:T,getOperationsOpenClaims:G,getDayWiseOpenClaims:z})(U)}}]);
//# sourceMappingURL=695.303a0829.chunk.js.map