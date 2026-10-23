"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4325],{74325:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var s=t(1502),d=t.n(s),r=t(24952),n=t(67816),l=t(54691),i=t(80878);const o=t.n(i)().div`
  .feedback-padding {
    .ant-col {
      padding: 20px;
      padding-bottom: 0;
    }
  }

  .bottom-page {
    padding-bottom:20px
  }

  .chart-title {
    font-weight: bold;
  }
  
  .feedback-total-row {
    .ant-col {
      padding: 20px;

      .ant-card {
        height: 100%;
      }
    }
  }

  .feedback-average {
    font-weight: bold;
    text-align: center;
    .star-ratings {
      margin: 0 20px;
    }
  }

  .legend-chart {
    text-align: right;
    font-size: 9px;
    font-weight: bold;
    margin-bottom: 5px;
    .legend-color {
      display: inline-block;
      width: 8px;
      height: 8px;
    }
  }

  .feedback-detail-header {
    font-size: 20px;
    font-weight: bold;
    span {
      cursor: pointer;
      i {
        margin-right: 20px;
      }
    }
  }
  
  .feedback-table {
    padding: 20px !important;
    .ant-card-body {
      padding: 0;
    }
  }

  .total-claim {
    text-align: center;
    font-weight: bold;
    h1 {
      margin-bottom: 5px;
      font-size: 30px;
      color: #375d91;
    }
  }

  .total-settled {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    h1 {
      margin-bottom: 5px;
      font-size: 30px;
      color: #5cba85;
    }
  }

  .total-rejected {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    h1 {
      margin-bottom: 5px;
      font-size: 30px;
      color: #d370ce;
    }
  }

  .total-feedback {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    h1 {
      margin-bottom: 5px;
      font-size: 30px;
      color: #644b98;
    }
  }
  .feedback-dropdown {
    width: 150px;
    margin-right: 20px;
  }
  .feedback-row {
    padding: 20px
  }
  .table-title {
    display: flex;
    padding-top: 2px;
  }
`;var c=t(87291),h=t(86178),b=t.n(h),g=t(50107),p=t(17099),x=t.n(p),m=t(70579);const{getFeedbackDashboard:j,getProduct:k,getFeedbackTable:D,resetStateFeedback:u,downloadFeedbackReport:f}=l.A,{RangePicker:C}=n.DatePicker,{Option:_}=n.Select,{resetErrorRedux:w}=c.A,F=[{name:"All Rating",value:"all"},{name:"Rating 1",value:"1"},{name:"Rating 2",value:"2"},{name:"Rating 3",value:"3"},{name:"Rating 4",value:"4"},{name:"Rating 5",value:"5"}],T=["#baf9d2","#83e7ac","#54b47a","#3b945f","#26633f"],R=["#f6c6f4","#f18bed","#cc64c8","#8e3d8b","#552253"];class E extends d().Component{constructor(e){super(e),this.componentDidMount=()=>{const e={start_date:this.state.startDate,end_date:this.state.endDate};this.props.resetStateFeedback(),this.props.getProduct(),this.props.getFeedbackDashboard(e)},this.onChangeDatePicker=(e,a)=>{this.setState({startDate:a[0],endDate:a[1]})},this.handleChangeProduct=e=>{this.setState({productKey:e})},this.handleChangeRating=e=>{this.setState({rating:e})},this.constructChartData=e=>{let a=[];for(var t=1;t<=5;t++){let s=!!e&&e[t]||0;a.push({name:t,"Rating count":s})}return a},this.submitChart=()=>{const{showDashboard:e,dataTableState:a}=this.state;e?this.getDashboardData():this.getTableData(a)},this.downloadReport=()=>{const{startDate:e,endDate:a,productKey:t,rating:s}=this.state,d={start_date:e,end_date:a};"all"!==t&&(d.partnerproduct_id=t),"all"!==s&&(d.rating=s),this.props.downloadFeedbackReport(d)},this.getDashboardData=()=>{const e={start_date:this.state.startDate,end_date:this.state.endDate,partnerproduct_id:this.state.productKey,rating:this.state.rating};this.props.getFeedbackDashboard(e)},this.getTableData=e=>{const a={start_date:this.state.startDate,end_date:this.state.endDate,partnerproduct_id:this.state.productKey,rating:this.state.rating,event:e};this.setState({showDashboard:!1,dataTableState:e}),this.props.getFeedbackTable(a)},this.goToDashboard=()=>{this.setState({showDashboard:!0}),this.getDashboardData()},this.renderTotalBox=()=>{const{feedbackDashboardData:e}=this.props;return(0,m.jsx)(n.Col,{sm:24,children:(0,m.jsxs)(n.Row,{className:"feedback-total-row",type:"flex",children:[(0,m.jsx)(n.Col,{sm:6,children:(0,m.jsxs)(n.Card,{className:"total-claim",children:[(0,m.jsx)("h1",{children:e.total_claims_count||0}),(0,m.jsx)("div",{children:"Total Claims"})]})}),(0,m.jsx)(n.Col,{sm:6,children:(0,m.jsxs)(n.Card,{className:"total-settled",onClick:()=>{this.getTableData("settled")},children:[(0,m.jsx)("h1",{children:e.total_claim_settled_feedback_count||0}),(0,m.jsxs)("div",{children:["Total Feedback from ",(0,m.jsx)("br",{}),"settled claims"]})]})}),(0,m.jsx)(n.Col,{sm:6,children:(0,m.jsxs)(n.Card,{className:"total-rejected",onClick:()=>{this.getTableData("rejected")},children:[(0,m.jsx)("h1",{children:e.total_claim_rejected_feedback_count||0}),(0,m.jsxs)("div",{children:["Total Feedback from ",(0,m.jsx)("br",{}),"rejected claims"]})]})}),(0,m.jsx)(n.Col,{sm:6,children:(0,m.jsxs)(n.Card,{className:"total-feedback",onClick:()=>{this.getTableData("")},children:[(0,m.jsx)("h1",{children:(e.total_claim_settled_feedback_count||0)+(e.total_claim_rejected_feedback_count||0)}),(0,m.jsx)("div",{children:"Total Feedback"})]})})]})})},this.renderLegend=e=>{let a=T;return"reject"===e&&(a=R),(0,m.jsx)("div",{className:"legend-chart",children:[1,2,3,4,5].map(((e,t)=>(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"legend-color",style:{backgroundColor:a[t]}}),(0,m.jsxs)("span",{children:["Rating #",e]})]},t)))})},this.renderChart=()=>{const{feedbackDashboardData:e}=this.props,a=this.constructChartData(e.claim_settled_rating_data),t=this.constructChartData(e.claim_rejected_rating_data);let s=0,d=0;a.forEach((e=>{s+=e["Rating count"],d+=e.name*e["Rating count"]}));const r=0===s?0:d/s;let l=0,i=0;t.forEach((e=>{l+=e["Rating count"],i+=e.name*e["Rating count"]}));const o=0===l?0:i/l;return(0,m.jsxs)(n.Col,{sm:24,children:[(0,m.jsxs)(n.Row,{className:"feedback-padding",children:[(0,m.jsx)(n.Col,{sm:12,children:(0,m.jsxs)(n.Card,{children:[(0,m.jsx)("span",{className:"chart-title",children:"SETTLED CLAIMS"}),(0,m.jsx)("center",{children:(0,m.jsxs)(g.BarChart,{width:450,height:400,data:a,children:[(0,m.jsx)(g.CartesianGrid,{strokeDasharray:"3 3"}),(0,m.jsx)(g.XAxis,{dataKey:"name"}),(0,m.jsx)(g.YAxis,{}),(0,m.jsx)(g.Tooltip,{}),(0,m.jsx)(g.Legend,{align:"right",verticalAlign:"top",content:this.renderLegend("settle")}),(0,m.jsx)(g.Bar,{dataKey:"Rating count",fill:"#8884d8",children:a.map(((e,a)=>(0,m.jsx)(g.Cell,{fill:T[a]},`cell-${a}`)))})]})})]})}),(0,m.jsx)(n.Col,{sm:12,children:(0,m.jsxs)(n.Card,{children:[(0,m.jsx)("span",{className:"chart-title",children:"REJECTED CLAIMS"}),(0,m.jsx)("center",{children:(0,m.jsxs)(g.BarChart,{width:450,height:400,data:t,children:[(0,m.jsx)(g.CartesianGrid,{strokeDasharray:"3 3"}),(0,m.jsx)(g.XAxis,{dataKey:"name"}),(0,m.jsx)(g.YAxis,{}),(0,m.jsx)(g.Tooltip,{}),(0,m.jsx)(g.Legend,{align:"right",verticalAlign:"top",content:this.renderLegend("reject")}),(0,m.jsx)(g.Bar,{dataKey:"Rating count",fill:"#8884d8",children:a.map(((e,a)=>(0,m.jsx)(g.Cell,{fill:R[a]},`cell-${a}`)))})]})})]})})]}),(0,m.jsxs)(n.Row,{className:"feedback-padding bottom-page",children:[(0,m.jsx)(n.Col,{sm:12,children:(0,m.jsxs)(n.Card,{className:"feedback-average",children:["Average",(0,m.jsx)(x(),{rating:r,starRatedColor:"#3b935f",starDimension:"30px",numberOfStars:5,name:"rating"}),r.toFixed(2)]})}),(0,m.jsx)(n.Col,{sm:12,children:(0,m.jsxs)(n.Card,{className:"feedback-average",children:["Average",(0,m.jsx)(x(),{rating:o,starRatedColor:"#cb67ca",starDimension:"30px",numberOfStars:5,name:"rating"}),o.toFixed(2)]})})]})]})},this.renderTable=()=>{const{feedbackTableData:e,getFeedbackTableLoading:a}=this.props;let t=e.claim_feedback_list||[];const s=[{key:"claim_number",title:(0,m.jsx)("div",{className:"table-title",children:(0,m.jsx)("span",{children:"Action"})}),render:(e,a)=>(0,m.jsx)("a",{href:"/claims/"+a.claim_id,children:e}),dataIndex:"claim_number"},{key:"rating",title:(0,m.jsx)("div",{className:"table-title",children:(0,m.jsx)("span",{children:"Rating"})}),dataIndex:"rating"},{key:"feedback_data",title:(0,m.jsx)("div",{className:"table-title",children:(0,m.jsx)("span",{children:"Feedback"})}),render:e=>{const a=e.options.filter((e=>e.is_selected)).map((e=>e.label)).join(", ");return(0,m.jsx)("span",{children:a})},dataIndex:"feedback_data"},{key:"review",title:(0,m.jsx)("div",{className:"table-title",children:(0,m.jsx)("span",{children:"Comment"})}),dataIndex:"review"}];return(0,m.jsx)(n.Col,{className:"feedback-table",sm:24,children:(0,m.jsx)(n.Card,{bordered:!1,children:(0,m.jsx)(n.Table,{columns:s,rowKey:(e,a)=>a,dataSource:t,loading:a,scroll:{x:!0},pagination:!1,bordered:!0})})})},this.state={modalData:{},startDate:b()().subtract(1,"week").format("YYYY-MM-DD"),endDate:b()().format("YYYY-MM-DD"),productKey:"all",rating:"all",showDashboard:!0,dataTableState:"settled"}}render(){const{startDate:e,endDate:a,showDashboard:t}=this.state,{productData:s,getFeedbackLoading:d,getProductLoading:r,getFeedbackTableLoading:l}=this.props,i=!!d||!!r||!!l;return(0,m.jsxs)(o,{children:[!1,(0,m.jsx)(n.Spin,{spinning:i,tip:"Fetching data...",children:(0,m.jsxs)(n.Row,{className:"feedback-row",children:[!t&&(0,m.jsx)(n.Col,{sm:24,children:(0,m.jsx)(n.Row,{className:"feedback-padding",children:(0,m.jsx)(n.Col,{className:"feedback-detail-header",sm:24,children:(0,m.jsxs)("span",{onClick:this.goToDashboard,children:[(0,m.jsx)(n.Icon,{type:"arrow-left"}),"Feedback Dashboard"]})})})}),(0,m.jsx)(n.Col,{sm:24,children:(0,m.jsxs)(n.Row,{className:"feedback-padding",children:[(0,m.jsx)(n.Col,{md:24,lg:8,children:(0,m.jsx)(C,{allowClear:!1,separator:"to",defaultValue:[b()(e,"YYYY-MM-DD"),b()(a,"YYYY-MM-DD")],onChange:this.onChangeDatePicker})}),(0,m.jsx)(n.Col,{lg:4,children:(0,m.jsxs)(n.Select,{className:"feedback-dropdown",onChange:this.handleChangeProduct,placeholder:"Select product",dropdownMatchSelectWidth:!1,defaultValue:"all",children:[(0,m.jsx)(_,{value:"all",children:"All products"}),s.map(((e,a)=>(0,m.jsx)(_,{value:e.id,children:e.display_name},a)))]})}),(0,m.jsx)(n.Col,{lg:4,children:(0,m.jsx)(n.Select,{className:"feedback-dropdown",onChange:this.handleChangeRating,placeholder:"Select rating",dropdownMatchSelectWidth:!1,defaultValue:"all",children:F.map(((e,a)=>(0,m.jsx)(_,{value:e.value,children:e.name},a)))})}),(0,m.jsx)(n.Col,{lg:4,children:(0,m.jsx)(n.Button,{type:"primary",onClick:this.submitChart,children:i?"Please wait ...":"Submit"})}),(0,m.jsx)(n.Col,{lg:4,children:(0,m.jsx)(n.Button,{type:"primary",onClick:this.downloadReport,children:"Download Report"})})]})}),t?[this.renderTotalBox(),this.renderChart()]:this.renderTable()]})})]})}}E.getDerivedStateFromProps=e=>{const{downloadFeedbackLoading:a,downloadFeedbackError:t,downloadFeedbackMessage:s,resetErrorRedux:d,resetStateFeedback:r}=e;!a&&s&&(n.notification[t?"error":"success"]({message:s}),t&&d(["DOWNLOAD_FEEDBACK_REPORT"]),r(["downloadFeedbackMessage"]))};const v=n.Form.create({})(E),A=(0,r.connect)((e=>({feedbackDashboardData:e.Feedback.feedbackDashboardData,getFeedbackLoading:e.Loading.GET_FEEDBACK_DASHBOARD,getFeedbackError:e.Error.GET_FEEDBACK_DASHBOARD,feedbackDashboardMessage:e.Feedback.feedbackDashboardMessage,productData:e.Feedback.productData,productMessage:e.Feedback.productMessage,getProductLoading:e.Loading.GET_PRODUCT,getProductError:e.Error.GET_PRODUCT,feedbackTableData:e.Feedback.feedbackTableData,getFeedbackTableLoading:e.Loading.GET_FEEDBACK_TABLE,getFeedbackTableError:e.Error.GET_FEEDBACK_TABLE,feedbackTableMessage:e.Feedback.feedbackTableMessage,downloadFeedbackLoading:e.Loading.DOWNLOAD_FEEDBACK_REPORT,downloadFeedbackError:e.Error.DOWNLOAD_FEEDBACK_REPORT,downloadFeedbackMessage:e.Feedback.downloadFeedbackMessage})),{getFeedbackDashboard:j,getProduct:k,getFeedbackTable:D,resetStateFeedback:u,downloadFeedbackReport:f,resetErrorRedux:w})(v)}}]);
//# sourceMappingURL=4325.63d196d2.chunk.js.map