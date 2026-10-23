"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1518],{71518:(t,e,i)=>{i.r(e),i.d(e,{default:()=>g});var a=i(1502),s=i(11133),n=i(67816),o=i(24952),l=i(25211),r=i(17823),d=i.n(r),p=i(70579);const{bulkPolicyRetryEnqueueList:c,getbulkOperationList:u,resetReduxState:h}=l.A;class y extends a.Component{constructor(){var t;super(...arguments),t=this,this.state={current:1,tableSourceData:[],pagination:{},offset:0,limit:0,isLoading:!0},this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:i,limit:a}=e,s=Number(i)||0,n=Number(a)||10;t.props.getbulkOperationList({limit:n,offset:s})},this.handleTableChange=t=>{const{pageSize:e,current:i}=t,a=e*(i-1);this.setState({pagination:t,offset:a,limit:e},(()=>{this.fetch({offset:a,limit:e})}))}}componentWillReceiveProps(t){const{bulkOperationListData:e,bulkOperationListMessage:i}=t;"success"===i&&(this.setState({isLoading:!1,tableSourceData:e.data.details}),this.props.resetReduxState(["bulkOperationListMessage"]))}detailPage(t,e){const{push:i}=this.props.history,{id:a}=e;i({pathname:`/policy/policy-retry-list/${a}`,state:{...e}})}componentDidMount(){this.fetch()}render(){const{tableSourceData:t,offset:e,limit:i}=this.state,{policyretryListLoading:a}=this.props,o=[{title:"Action",render:(t,e)=>(0,p.jsx)("i",{className:"far fa-eye",onClick:()=>this.detailPage(t,e),style:{cursor:"pointer",textAlign:"center"}})},{title:"Filename",key:"file_name",dataIndex:"file_name"},{title:"Status",key:"status",dataIndex:"status"},{title:"Activity",key:"bulk_event_name",dataIndex:"bulk_event_name"},{title:"Uploaded At",key:"created_at",dataIndex:"created_at",render:t=>d()(t).utc().format("DD/MM/YYYY hh:mm:ss")},{title:"Uploaded By",key:"user",dataIndex:"user"},{title:"File URL",key:"file_url",dataIndex:"file_url"}];return(0,p.jsx)(s._,{children:(0,p.jsxs)(n.Card,{children:[(0,p.jsx)("h1",{children:"Upload List"}),(0,p.jsx)(n.Spin,{spinning:this.state.isLoading,children:(0,p.jsx)(n.Table,{bordered:!0,columns:o,dataSource:t,pagination:{pageSize:10,total:Number(t.length),current:e/i+1},onChange:this.handleTableChange})})]})})}}const g=(0,o.connect)((t=>({policyretryListData:t.Policy.policyRetryList,policyretryListMessage:t.Policy.policyRetryListMessage,policyretryListLoading:t.Loading.BULK_POLICY_RETRY_LIST,policyretryListError:t.Error.BULK_POLICY_RETRY_LIST,bulkOperationListData:t.Policy.bulkOperationListData,bulkOperationListMessage:t.Policy.bulkOperationListMessage})),{resetReduxState:h,bulkPolicyRetryEnqueueList:c,getbulkOperationList:u})(y)},11133:(t,e,i)=>{i.d(e,{_:()=>s});var a=i(80878);const s=i.n(a)().div`
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  width: 100%;

  .ant-card-bordered {
    width:100%;
  }
  .top-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .file-detail {
    margin-bottom: 30px;
    padding: 10px;
  }
  .file-row-detail {
    padding: 10px;
  }
  .file-row-detail
  .file-detail {
    border: 1ps solid;
  }
  .file-row-detail-body {
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .success-button {
    margin-right: 15px;
  }
  .failed-button {

  }
  .month-selector {
    width: 220px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .select-style {
    width: 200px;
    margin-left: 8px;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`}}]);
//# sourceMappingURL=1518.755af28b.chunk.js.map