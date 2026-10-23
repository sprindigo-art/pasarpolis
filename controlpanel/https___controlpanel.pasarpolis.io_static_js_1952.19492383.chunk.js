"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1952],{12302:(e,t,a)=>{a.d(t,{A:()=>o});var i=a(80878);const o=a.n(i)().div`
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
    .alert {
        margin-bottom: 20px;
    }
    .error-row {
        width: 100%;
    }
    .content {
        padding: 6vh;
    }
    .gutter-row-export-excel {
        display: flex;
        justify-content: space-between;
    }
    .btn-filter {
        margin-right: 10px;
    }
    .btn-container {
        display: flex;
    }
    .input-filter {
        width: 200px;
        border-radius: 0;
        margin-right: 10px;
    }
    .btn-page-size {
        margin-left: 10px;
    }
    .promo-class .ant-modal{
      background: url('../image/promo-popup.jpg');
      background-size: cover !important;
      background-position: bottom;
      padding-bottom: 140px;
    }
    .promo-class ol {
        padding-left: 15px;
        list-style:  initial !important;
    }
    .promo-class li {
        font-size:16px;
        margin-top: 10px !important;
        font-weight: 400 !important;
    }
    .promo-class h4{
      font-size: 17px;
    }
`},41952:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(1502),o=a(24952),n=a(67816),r=a(84029),s=a(55347),l=a(12302),d=a(57561),c=a(86178),p=a.n(c),h=a(11177),m=a.n(h),u=a(51028),x=a(97418),g=a(50248),f=a(70579);const _="campaign_promo_search",{getPromoDetails:D}=d.A;class b extends i.PureComponent{constructor(e){super(e),this.getColumns=()=>[{title:"ACTION",key:"action",width:130,render:(e,t)=>(0,f.jsx)("i",{className:"fa fa-eye",style:{color:"#424242",fontSize:"18px",cursor:"pointer"},onClick:()=>this.viewPromoDetail(t)})},{title:"NAME",dataIndex:"name",key:"name",sorter:(e,t)=>(e.name||"").localeCompare(t.name||"")},{title:"START DATE",dataIndex:"start_date",key:"start_date",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.start_date).unix()-p()(t.start_date).unix()},{title:"END DATE",dataIndex:"end_date",key:"end_date",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.end_date).unix()-p()(t.end_date).unix()},{title:"ACTIVE",dataIndex:"is_active",key:"is_active",sorter:(e,t)=>String(e.is_active).localeCompare(String(t.is_active))},{title:"CREATED",dataIndex:"created_at",key:"created_at",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.created_at).unix()-p()(t.created_at).unix()},{title:"UPDATED",dataIndex:"updated_at",key:"updated_at",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.updated_at).unix()-p()(t.updated_at).unix()}],this.applySearch=(e,t)=>{if(!t)return e;const a=t.toLowerCase();return e.filter((e=>Object.values(e).some((e=>e&&e.toString().toLowerCase().includes(a)))))},this.viewPromoDetail=e=>{this.props.history.push(`/campaign/promotion/${e.id}`,{params:{data:e,createPromo:!1}})},this.handleClearFilter=()=>{localStorage.removeItem(_),this.setState({searchInput:"",filteredData:this.state.dataSource})},this.onFilterChange=e=>{const t=e.target.value;localStorage.setItem(_,t),this.setState({searchInput:t,filteredData:this.applySearch(this.state.dataSource,t)})},this.changePaginationSize=e=>{this.setState({pageSize:Number(e)})},this.handleCreatePromo=()=>{this.props.history.push("/campaign/promotion/create-promo",{params:{createPromo:!0}})};const t=localStorage.getItem(_)||"";this.state={dataSource:[],filteredData:[],searchInput:t,loading:!1,permissions:[],error:!1,pageSize:10}}UNSAFE_componentWillReceiveProps(e){const{promoDetails:t}=e.promoData,a=t||[];this.setState({dataSource:a,filteredData:this.applySearch(a,this.state.searchInput),loading:!1})}componentDidMount(){this.setState({loading:!0}),this.props.getPromoDetails()}exportToExcel(){const{filteredData:e}=this.state,t=e.map((e=>({Name:e.name||"","Start Date":e.start_date&&e.start_date.Time?p()(e.start_date.Time).format("YYYY-MM-DD"):"","End Date":e.end_date&&e.end_date.Time?p()(e.end_date.Time).format("YYYY-MM-DD"):"","Is Active":e.is_active||"","Active Coupons":e.active_coupons||"","Created At":e.created_at?p()(e.created_at).format("YYYY-MM-DD"):"","Updated At":e.updated_at?p()(e.updated_at).format("YYYY-MM-DD"):""}))),a=m().utils.json_to_sheet(t),i=m().utils.book_new();m().utils.book_append_sheet(i,a,"Promotion List");const o=m().write(i,{bookType:"xlsx",type:"base64"}),n={fileName:"promotion_list_"+(0,x.U6)()};(0,u.A)(n,o)}render(){const{filteredData:e,searchInput:t,loading:a,pageSize:i}=this.state,{permissions:o}=this.props,d=(0,f.jsx)(n.Menu,{onClick:this.exportToExcel.bind(this),children:(0,f.jsxs)(n.Menu.Item,{children:[(0,f.jsx)(n.Icon,{type:"right-circle-o"})," Excel"]},"1")}),c=o.filter((e=>"ops.create_new_partner"===e)),p=(0,f.jsxs)(n.Menu,{children:[(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"50"),children:"50"},"1"),(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"100"),children:"100"},"2"),(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"200"),children:"200"},"3"),(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"300"),children:"300"},"4"),(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"400"),children:"400"},"5"),(0,f.jsx)(n.Menu.Item,{onClick:this.changePaginationSize.bind(this,"500"),children:"500"},"6")]});return(0,f.jsx)(l.A,{children:(0,f.jsx)(s.A,{className:"content-wrapper",children:(0,f.jsxs)(r.A,{className:"content",children:[(0,f.jsx)(n.Row,{gutter:16,children:(0,f.jsxs)(n.Col,{className:"gutter-row-export-excel",span:24,children:[(0,f.jsx)("h3",{children:"Promo List"}),(0,f.jsxs)("div",{className:"btn-container",children:[c.length>0&&(0,f.jsxs)(n.Button,{className:"btn-filter",onClick:this.handleCreatePromo,children:[(0,f.jsx)("i",{className:"fas fa-plus"})," CREATE PROMO"]}),(0,f.jsxs)(n.Button,{className:"btn-filter",onClick:this.handleClearFilter,children:[(0,f.jsx)(n.Icon,{type:"filter"})," Clear filters"]}),(0,f.jsx)(n.Input,{className:"input-filter",value:t,type:"text",id:"filter-text-box",placeholder:"Search...",onInput:e=>this.onFilterChange(e)}),(0,f.jsx)(g.A,{permissionSetter:"ops.download_promo_list",permissionGetter:o,children:(0,f.jsx)(n.Dropdown,{overlay:d,children:(0,f.jsxs)(n.Button,{children:["Export to ",(0,f.jsx)(n.Icon,{type:"down"})]})})}),(0,f.jsx)(n.Dropdown,{overlay:p,children:(0,f.jsxs)(n.Button,{className:"btn-page-size",children:["Page size ",(0,f.jsx)(n.Icon,{type:"down"})]})})]})]})}),(0,f.jsx)(n.Table,{columns:this.getColumns(),dataSource:e,rowKey:e=>e.id||Math.random(),pagination:{pageSize:i,showSizeChanger:!1,showQuickJumper:!0,showTotal:(e,t)=>`[${t[0]}-${t[1]}] of ${e} items`},scroll:{x:!0,y:!0},loading:a,locale:{emptyText:"Data is empty :("},style:{marginTop:"16px"}})]})})})}}b.defaultProps={partnerData:{},dataProfile:{}};const y=(0,o.connect)((e=>({promoData:e.PromoDetails,dataProfile:e.Auth.profile})),{getPromoDetails:D})(b)},51028:(e,t,a)=>{a.d(t,{A:()=>o});const i=(e,t)=>{const a=atob(e),i=[];for(let o=0;o<a.length;o+=512){const e=a.slice(o,o+512),t=new Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);const n=new Uint8Array(t);i.push(n)}return new Blob(i,{type:t})},o=(e,t)=>{const a=e&&e.fileName&&0!==e.fileName.length?e.fileName:"noWarning.xlsx",o=i(t,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(o,a);else{const e=document.createElement("a");e.href=URL.createObjectURL(o),e.download=a,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}}]);
//# sourceMappingURL=1952.19492383.chunk.js.map