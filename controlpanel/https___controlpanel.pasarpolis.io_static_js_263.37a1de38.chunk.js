"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[263],{28647:(e,t,a)=>{a.d(t,{Io:()=>d,cn:()=>l,qv:()=>r,yO:()=>s});a(1502);var i=a(17823),o=a.n(i),n=a(70579);const r=e=>[{title:"Id",dataIndex:"InternalID",key:"Id",...e.getColumnSearchProps("internalID")},{title:"Gojek Id",dataIndex:"Tag1",key:"driver_id",...e.getColumnSearchProps("tagID")},{title:"Name",dataIndex:"Name",key:"name",width:120,...e.getColumnSearchProps("name")},{title:"Email",dataIndex:"Email",key:"Email",...e.getColumnSearchProps("email")},{title:"Phone No",dataIndex:"MobileNo",key:"MobileNo",...e.getColumnSearchProps("mobileNo")},{title:"Date of birth",dataIndex:"Request.dob",key:"dob"},{title:"Ahli waris",dataIndex:"Request.nominee",key:"nominee"},{dataIndex:"sim",title:"SIM",key:"sim"},{dataIndex:"Request.engine_no",title:"Machine No",key:"machine_no"},{dataIndex:"Request.frame_no",title:"Frame No",key:"frame_no"},{dataIndex:"Request.vehicle_plate",title:"Plate no",key:"vehicle_plate"},{dataIndex:"Request.vehicle_year",title:"Manufacturer year",key:"vehicle_year"},{dataIndex:"Request.vehicle_model",title:"Car model",key:"vehicle_model"},{dataIndex:"Request.premium",title:"Premium/bulan",key:"premium"},{dataIndex:"InsurancePolicyNo",title:"Insurance Policy No",key:"InsurancePolicyNo"},{dataIndex:"ApplicationNo",title:"Application No",key:"ApplicationNo",...e.getColumnSearchProps("applicationNo")},{dataIndex:"PolicyStart.Time",title:"Policy Start",key:"policyStartDate",render:e=>o()(e).format("DD/MM/YYYY HH:mm:ss")},{dataIndex:"PolicyState",title:"Policy State",key:"PolicyState"},{dataIndex:"CreatedAt",title:"Registered date",key:"CreatedAt",render:e=>o()(e).format("DD/MM/YYYY HH:mm:ss")}],s=()=>[{title:"Brand Name",dataIndex:"Request.vehicle_brand",key:"vehicle_brand"},{title:"Model & Series",dataIndex:"Request.vehicle_model",key:"vehicle_model"},{title:"Plat Number",dataIndex:"Request.vehicle_plate",key:"vehicle_plate"},{title:"Vehicle Year",dataIndex:"Request.vehicle_year",key:"vehicle_year"},{title:"Chassis Number",dataIndex:"Request.frame_no",key:"frame_no"},{title:"Machine Number",dataIndex:"Request.engine_no",key:"engine_no"}],l=e=>[{title:"Event",dataIndex:"event",key:"event"},{title:"Action group name",dataIndex:"action_group_name",key:"action_group_name"},{title:"Notification type",dataIndex:"notification_type",key:"notification_type"},{title:"Status",dataIndex:"status",key:"status"},{title:"Remark",dataIndex:"remark",key:"remark"},{title:"Recipient",dataIndex:"recipient",key:"recipient"},{title:"Subject",dataIndex:"subject",key:"subject"},{title:"Content",dataIndex:"content",render:(t,a)=>-1!==[null,""].indexOf(t)?"-":(0,n.jsx)("span",{className:"anchor",onClick:()=>e.showEmailModal(t),children:"View"}),key:"content"}],d=()=>[{title:"Id",dataIndex:"ID",key:"ID",width:220},{title:"Application No",dataIndex:"ApplicationNo",key:"ApplicationNo"},{title:"Amount",dataIndex:"Amount",key:"Amount"},{title:"Txn Ref",dataIndex:"TxnRef",key:"TxnRef"},{title:"Txn Date",dataIndex:"TxnDate",key:"TxnDate"},{title:"Coverage Start Date",dataIndex:"CoverageStartDate",key:"CoverageStartDate"},{title:"Coverage End Date",dataIndex:"CoverageEndDate",key:"CoverageEndDate"}]},52333:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(80878),o=a.n(i),n=a(93317);const r=o().div`
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
`,s=(0,n.A)(r)},40263:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var i=a(1502),o=a(52333),n=a(24952),r=a(67816),s=a(17634),l=a.n(s),d=a(95916),c=a.n(d),h=a(38094),p=a.n(h),m=a(17823),u=a.n(m),x=a(84029),g=a(55347),y=a(25134),D=a(93807),f=a(80878);const k=a.n(f)().div`
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
        background-color: #008CBA;
        color: #fff;
    }
    .btn-download:hover {
        background-color: #008CBA;
        color: #fff;
    }
    .btn-clear {
        margin-right: 10px;
    }
    .ant-row {
        margin-bottom: 4px;
    }
    .datepicker {
        width: 200px;
    }
    .input-search {
        width: 200px;
        border-radius: 0;
        margin-right: 10px;
    }
    .btn-page-size {
        margin-left: 10px;
    }
`;var w=a(54589),I=a.n(w),v=a(28647),b=a(70579);const C=new(I()),{getGocarSimpleData:S,sendGocarReport:j}=y.A;class _ extends i.Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:a,limit:i,orderBy:o,startDate:n,endDate:r}=e,s=Number(a)||0,l=Number(i)||10;delete e.offset,delete e.limit,t.setState({searchText:"",orderIdentifier:o,limit:l,offset:s}),t.props.getGocarSimpleData({...e,orderBy:o,tagID:"null",limit:l,offset:s,startDate:n,endDate:r,policyState:"COMPLETED"})},this.downloadExcel=()=>{const{profileData:e}=this.props,{registrationStartDate:t,registrationEndDate:a}=this.state,i={registration_start_date:t,registration_end_date:a},o=c().pickBy(i,c().identity);l()({title:"Report will send to your email ",input:"email",inputValue:e.email,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.sendGocarReport({query:{purpose:"go_car_simple_gojekid",productKey:"go-car-simple"},body:{email_id:e,...o}})},allowOutsideClick:()=>!1}).then((e=>{this.setState({registrationEndDate:void 0,registrationStartDate:void 0,downloadAllData:!1}),"cancel"!==e.dismiss&&l()({type:"success",title:"",text:"success"})}))},this.onClearFilter=()=>{const{location:e}=this.props;this.props.history.push({pathname:e.pathname,search:""}),this.fetch()},this.onView=e=>{this.props.history.push({pathname:`/gocar/simple/${e}`,state:{params:{internalID:e}}})},this.handlePageChange=e=>{const{location:t}=this.props,{current:a,pageSize:i}=e,o={};o.offset=(a-1)*i,o.limit=10;const n=(0,D.A)(o);this.props.history.push({pathname:t.pathname,search:n}),this.fetch(o)},this.handleSearch=(e,t)=>{const{location:a,history:i}=this.props,o=new URLSearchParams(a);delete o.limit,delete o.offset,o[t]=e;const n=(0,D.A)(o);i.push({pathname:a.pathname,search:n}),this.fetch(o)},this.handleDownload=()=>{const{registrationStartDate:e,registrationEndDate:t,downloadAllData:a}=this.state;a||t&&e?(a&&this.setState({registrationStartDate:void 0,registrationEndDate:void 0}),this.setState({showDownloadModal:!1}),this.downloadExcel()):r.notification.error({message:"Please select registration dates"})},this.getColumnSearchProps=e=>({filterDropdown:t=>{let{setSelectedKeys:a,selectedKeys:i}=t;return(0,b.jsxs)("div",{style:{padding:8},children:[(0,b.jsx)(r.Input,{ref:e=>{this.searchInput=e},placeholder:`Search ${e}`,value:i[0],onChange:e=>a(e.target.value?[e.target.value]:[]),onPressEnter:()=>this.handleSearch(i,e),style:{width:188,marginBottom:8,display:"block"}}),(0,b.jsx)(r.Button,{type:"primary",onClick:()=>this.handleSearch(i,e),icon:"search",size:"small",style:{width:90,marginRight:8},children:"Search"})]})},filterIcon:e=>(0,b.jsx)(r.Icon,{type:"search",style:{color:e?"#1890ff":void 0}}),onFilter:(t,a)=>a[e].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout((()=>this.searchInput.select()))}}),this.state={searchText:"",searchTextQuery:{},limit:10,offset:0,showDownloadModal:!1,registrationStartDate:void 0,registrationEndDate:void 0,downloadAllData:!1}}componentDidMount(){const e=p().parse(this.props.location.search);this.fetch(e)}onFilterChange(e){C.set("querySearch",e.target.value,{path:"/"}),this.setState({searchInput:e.target.value}),this.state.gridOptions.api.setQuickFilter(e.target.value)}render(){const{gocarData:e,goCarDataLoading:t}=this.props,{showDownloadModal:a,downloadAllData:i,registrationStartDate:o,registrationEndDate:n}=this.state,{metadata:s={}}=e,l=[{title:"Action",dataIndex:"InternalID",key:"action",render:e=>(0,b.jsx)(r.Icon,{type:"eye",onClick:()=>this.onView(e)})},...(0,v.qv)(this)];return(0,b.jsxs)(k,{children:[(0,b.jsx)(r.Modal,{visible:a,title:"Download Missing Gojek ID Data",onCancel:()=>this.setState({showDownloadModal:!1,registrationStartDate:void 0,registrationEndDate:void 0,downloadAllData:!1}),onOk:this.handleDownload,children:(0,b.jsxs)(k,{children:[(0,b.jsxs)(r.Row,{children:[(0,b.jsx)(r.Col,{span:12,children:"Registration Start Date"}),(0,b.jsx)(r.Col,{span:12,children:(0,b.jsx)(r.DatePicker,{disabled:i,value:o&&u()(o),onChange:(e,t)=>this.setState({registrationStartDate:t}),format:"YYYY-MM-DD 00:00:00",className:"datepicker"})})]}),(0,b.jsxs)(r.Row,{children:[(0,b.jsx)(r.Col,{span:12,children:"Registration End Date"}),(0,b.jsx)(r.Col,{span:12,children:(0,b.jsx)(r.DatePicker,{disabled:i,value:n&&u()(n),onChange:(e,t)=>this.setState({registrationEndDate:t}),format:"YYYY-MM-DD 23:59:59",className:"datepicker"})})]}),(0,b.jsxs)(r.Row,{children:[(0,b.jsx)(r.Checkbox,{checked:i,onChange:e=>this.setState({downloadAllData:e.target.checked})}),"Download All Data"]})]})}),(0,b.jsxs)(g.A,{className:"simple-table",children:[this.state.error&&(0,b.jsx)(r.Row,{className:"row-error",children:(0,b.jsx)(r.Col,{span:24,children:(0,b.jsx)(r.Alert,{className:"error-alert",message:"Ooops, something went terribly wrong!",type:"error",closeText:"Close"})})}),(0,b.jsxs)(x.A,{className:"table-container",children:[(0,b.jsx)(r.Row,{gutter:16,children:(0,b.jsxs)(r.Col,{className:"gutter-row-export-csv table-col",span:24,children:[(0,b.jsx)("h3",{children:"Gocar Simple"}),(0,b.jsxs)("div",{className:"btn-container",children:[(0,b.jsxs)(r.Button,{className:"btn-clear",onClick:this.onClearFilter,children:[(0,b.jsx)(r.Icon,{type:"cross"}),"Clear Filters"]}),(0,b.jsx)(r.Tooltip,{placement:"topLeft",title:"This will email the excel of gojek drivers for which gojek id is blank",children:(0,b.jsxs)(r.Button,{className:"btn-download",onClick:()=>this.setState({showDownloadModal:!0}),children:[(0,b.jsx)(r.Icon,{type:"cloud"})," Download Missing Gojek Driver"]})})]})]})}),(0,b.jsx)(r.Row,{children:(0,b.jsx)(r.Table,{dataSource:e.goCarList,columns:l,className:"table",bordered:!0,pagination:{pageSize:10,total:Number(s.total_records),current:s.offset/s.limit+1},onChange:this.handlePageChange,loading:!!t})})]})]})]})}}const N=(0,n.connect)((e=>({gocarData:e.Gocar,dataProfile:e.Auth.profile,goCarDataLoading:e.Loading.GET_GOCAR_SIMPLE_DATA,profileData:e.Auth.profile})),{getGocarSimpleData:S,sendGocarReport:j})(_);class A extends i.PureComponent{constructor(e){super(e),this.state={}}render(){return(0,b.jsx)(o.A,{children:(0,b.jsx)(N,{...this.props})})}}const R=A}}]);
//# sourceMappingURL=263.37a1de38.chunk.js.map