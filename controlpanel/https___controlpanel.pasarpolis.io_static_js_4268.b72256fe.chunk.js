"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4268],{28647:(e,t,a)=>{a.d(t,{Io:()=>d,cn:()=>s,qv:()=>r,yO:()=>l});a(1502);var n=a(17823),i=a.n(n),o=a(70579);const r=e=>[{title:"Id",dataIndex:"InternalID",key:"Id",...e.getColumnSearchProps("internalID")},{title:"Gojek Id",dataIndex:"Tag1",key:"driver_id",...e.getColumnSearchProps("tagID")},{title:"Name",dataIndex:"Name",key:"name",width:120,...e.getColumnSearchProps("name")},{title:"Email",dataIndex:"Email",key:"Email",...e.getColumnSearchProps("email")},{title:"Phone No",dataIndex:"MobileNo",key:"MobileNo",...e.getColumnSearchProps("mobileNo")},{title:"Date of birth",dataIndex:"Request.dob",key:"dob"},{title:"Ahli waris",dataIndex:"Request.nominee",key:"nominee"},{dataIndex:"sim",title:"SIM",key:"sim"},{dataIndex:"Request.engine_no",title:"Machine No",key:"machine_no"},{dataIndex:"Request.frame_no",title:"Frame No",key:"frame_no"},{dataIndex:"Request.vehicle_plate",title:"Plate no",key:"vehicle_plate"},{dataIndex:"Request.vehicle_year",title:"Manufacturer year",key:"vehicle_year"},{dataIndex:"Request.vehicle_model",title:"Car model",key:"vehicle_model"},{dataIndex:"Request.premium",title:"Premium/bulan",key:"premium"},{dataIndex:"InsurancePolicyNo",title:"Insurance Policy No",key:"InsurancePolicyNo"},{dataIndex:"ApplicationNo",title:"Application No",key:"ApplicationNo",...e.getColumnSearchProps("applicationNo")},{dataIndex:"PolicyStart.Time",title:"Policy Start",key:"policyStartDate",render:e=>i()(e).format("DD/MM/YYYY HH:mm:ss")},{dataIndex:"PolicyState",title:"Policy State",key:"PolicyState"},{dataIndex:"CreatedAt",title:"Registered date",key:"CreatedAt",render:e=>i()(e).format("DD/MM/YYYY HH:mm:ss")}],l=()=>[{title:"Brand Name",dataIndex:"Request.vehicle_brand",key:"vehicle_brand"},{title:"Model & Series",dataIndex:"Request.vehicle_model",key:"vehicle_model"},{title:"Plat Number",dataIndex:"Request.vehicle_plate",key:"vehicle_plate"},{title:"Vehicle Year",dataIndex:"Request.vehicle_year",key:"vehicle_year"},{title:"Chassis Number",dataIndex:"Request.frame_no",key:"frame_no"},{title:"Machine Number",dataIndex:"Request.engine_no",key:"engine_no"}],s=e=>[{title:"Event",dataIndex:"event",key:"event"},{title:"Action group name",dataIndex:"action_group_name",key:"action_group_name"},{title:"Notification type",dataIndex:"notification_type",key:"notification_type"},{title:"Status",dataIndex:"status",key:"status"},{title:"Remark",dataIndex:"remark",key:"remark"},{title:"Recipient",dataIndex:"recipient",key:"recipient"},{title:"Subject",dataIndex:"subject",key:"subject"},{title:"Content",dataIndex:"content",render:(t,a)=>-1!==[null,""].indexOf(t)?"-":(0,o.jsx)("span",{className:"anchor",onClick:()=>e.showEmailModal(t),children:"View"}),key:"content"}],d=()=>[{title:"Id",dataIndex:"ID",key:"ID",width:220},{title:"Application No",dataIndex:"ApplicationNo",key:"ApplicationNo"},{title:"Amount",dataIndex:"Amount",key:"Amount"},{title:"Txn Ref",dataIndex:"TxnRef",key:"TxnRef"},{title:"Txn Date",dataIndex:"TxnDate",key:"TxnDate"},{title:"Coverage Start Date",dataIndex:"CoverageStartDate",key:"CoverageStartDate"},{title:"Coverage End Date",dataIndex:"CoverageEndDate",key:"CoverageEndDate"}]},90928:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(80878),i=a.n(n),o=a(93317);const r=i().div`
    .detail-policy-list{
        cursor: pointer;
    }
    .gutter-row-export-csv{
        display: flex;
        justify-content: flex-end;
    }
    .detail-agent-list{
        cursor: pointer;
    }
    .ant-input-group-addon:hover{
        cursor: pointer;
    }
    .ant-input-disabled{
        cursor: default;
    }
    .ant-table {
        overflow-y: auto;
    }
`,l=(0,o.A)(r)},4268:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(1502),i=a(90928),o=a(24952),r=a(67816),l=a(17634),s=a.n(l),d=a(38094),c=a.n(d),p=a(84029),h=a(55347),u=a(25211),m=a(25134),x=a(93807),y=a(80878);const g=a.n(y)().div`
    .detail-policy-list{
        cursor: pointer;
    }
    .gutter-row-export-csv{
        display: flex;
        justify-content: flex-end;
    }
    .detail-agent-list{
        cursor: pointer;
    }
    .ant-input-group-addon:hover{
        cursor: pointer;
    }
    .ant-input-disabled{
        cursor: default;
    }
    .table {
        margin-top: 12px;
    }
    .ant-table-tbody > tr > td:first-child {
        word-wrap: break-word;
        max-width: 12px;
        min-width: 12px;
        text-align: center;
    }
    .ant-table-tbody > tr > td {
        word-wrap: break-word;
        min-width: 200px;
    }
    .row-error {
        width: 100%;
    }
    .error-alert {
        margin-bottom: 20px;
    }
    .table-container {
        padding: 6vh;
    }
    .table-col {
        display: flex;
        justify-content: space-between;
    }
    .btn-container {
        display: flex;
    }
    .btn-download {
        margin-right: 10px;
    }
    .input-search {
        width: 200px;
        border-radius: 0;
        margin-right: 10px;
    }
    .btn-page-size {
        margin-left: 10px;
    }
`;var I=a(54589),f=a.n(I),k=a(28647),v=a(70579);const w=new(f()),{getGocarSimpleData:b}=m.A,{sendReport:C}=u.A;class S extends n.Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:a,limit:n,orderBy:i,startDate:o,endDate:r}=e,l=Number(a)||0,s=Number(n)||10;delete e.offset,delete e.limit,t.setState({searchText:"",orderIdentifier:i,limit:s,offset:l}),t.props.getGocarSimpleData({...e,orderBy:i,limit:s,offset:l,startDate:o,endDate:r,policyState:"9"})},this.downloadExcel=()=>{const{profileData:e}=this.props;s()({title:"Report will send to your email ",input:"email",inputValue:e.email,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.sendReport({email:e,product_key:"go-car-simple",policyState:"TERMINATED,9"})},allowOutsideClick:()=>!1}).then((e=>{"cancel"!==e.dismiss&&s()({type:"success",title:"",text:"success"})}))},this.onClearFilter=()=>{const{location:e}=this.props;this.props.history.push({pathname:e.pathname,search:""}),this.fetch()},this.onView=e=>{this.props.history.push({pathname:`/gocar/suspend/simple/${e}`,state:{params:{internalID:e}}})},this.handlePageChange=e=>{const{location:t}=this.props,{current:a,pageSize:n}=e,i={};i.offset=(a-1)*n,i.limit=10;const o=(0,x.A)(i);this.props.history.push({pathname:t.pathname,search:o}),this.fetch(i)},this.handleSearch=(e,t)=>{const{location:a,history:n}=this.props,i=new URLSearchParams(a);delete i.limit,delete i.offset,i[t]=e;const o=(0,x.A)(i);n.push({pathname:a.pathname,search:o}),this.fetch(i)},this.getColumnSearchProps=e=>({filterDropdown:t=>{let{setSelectedKeys:a,selectedKeys:n}=t;return(0,v.jsxs)("div",{style:{padding:8},children:[(0,v.jsx)(r.Input,{ref:e=>{this.searchInput=e},placeholder:`Search ${e}`,value:n[0],onChange:e=>a(e.target.value?[e.target.value]:[]),onPressEnter:()=>this.handleSearch(n,e),style:{width:188,marginBottom:8,display:"block"}}),(0,v.jsx)(r.Button,{type:"primary",onClick:()=>this.handleSearch(n,e),icon:"search",size:"small",style:{width:90,marginRight:8},children:"Search"})]})},filterIcon:e=>(0,v.jsx)(r.Icon,{type:"search",style:{color:e?"#1890ff":void 0}}),onFilter:(t,a)=>a[e].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout((()=>this.searchInput.select()))}}),this.state={searchText:"",searchTextQuery:{},limit:10,offset:0}}componentDidMount(){const e=c().parse(this.props.location.search);this.fetch(e)}onFilterChange(e){w.set("querySearch",e.target.value,{path:"/"}),this.setState({searchInput:e.target.value}),this.state.gridOptions.api.setQuickFilter(e.target.value)}render(){const{gocarData:e,goCarDataLoading:t}=this.props,{metadata:a={}}=e,n=[{title:"Action",dataIndex:"InternalID",key:"action",render:e=>(0,v.jsx)(r.Icon,{type:"eye",onClick:()=>this.onView(e)})},...(0,k.qv)(this)];return(0,v.jsx)(g,{children:(0,v.jsxs)(h.A,{className:"simple-table",children:[this.state.error&&(0,v.jsx)(r.Row,{className:"row-error",children:(0,v.jsx)(r.Col,{span:24,children:(0,v.jsx)(r.Alert,{className:"error-alert",message:"Ooops, something went terribly wrong!",type:"error",closeText:"Close"})})}),(0,v.jsxs)(p.A,{className:"table-container",children:[(0,v.jsx)(r.Row,{gutter:16,children:(0,v.jsxs)(r.Col,{className:"gutter-row-export-csv table-col",span:24,children:[(0,v.jsx)("h3",{children:"Gocar Simple"}),(0,v.jsxs)("div",{className:"btn-container",children:[(0,v.jsxs)(r.Button,{className:"btn-download",onClick:this.onClearFilter,children:[(0,v.jsx)(r.Icon,{type:"cross"}),"Clear Filters"]}),(0,v.jsx)(r.Tooltip,{placement:"topLeft",title:"This will email the excel of rejected gojek drivers",children:(0,v.jsxs)(r.Button,{className:"btn-download",onClick:this.downloadExcel,style:{marginRight:"10px"},children:[(0,v.jsx)(r.Icon,{type:"cloud"})," Download"]})})]})]})}),(0,v.jsx)(r.Row,{children:(0,v.jsx)(r.Table,{dataSource:e.goCarList,columns:n,className:"table",bordered:!0,pagination:{pageSize:10,total:Number(a.total_records),current:a.offset/a.limit+1},onChange:this.handlePageChange,loading:!!t})})]})]})})}}const D=(0,o.connect)((e=>({gocarData:e.Gocar,dataProfile:e.Auth.profile,goCarDataLoading:e.Loading.GET_GOCAR_SIMPLE_DATA,profileData:e.Auth.profile})),{getGocarSimpleData:b,sendReport:C})(S);class N extends n.PureComponent{constructor(e){super(e),this.state={}}render(){return(0,v.jsx)(i.A,{children:(0,v.jsx)(D,{...this.props})})}}const j=N}}]);
//# sourceMappingURL=4268.b72256fe.chunk.js.map