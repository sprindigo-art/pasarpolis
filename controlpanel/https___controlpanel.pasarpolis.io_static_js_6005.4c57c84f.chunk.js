"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6005],{12302:(e,t,a)=>{a.d(t,{A:()=>n});var o=a(80878);const n=a.n(o)().div`
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
`},36005:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var o=a(1502),n=a(24952),i=a(67816),r=a(84029),s=a(55347),l=a(12302),d=a(57561),c=a(86178),p=a.n(c),h=a(11177),u=a.n(h),m=a(51028),x=a(97418),g=a(50248),_=a(70579);const C="campaign_coupon_search",{getCouponDetails:f,getPromoDetails:y}=d.A;class D extends o.PureComponent{constructor(e){super(e),this.getColumns=()=>[{title:"ACTION",key:"action",width:130,render:(e,t)=>(0,_.jsx)("i",{className:"fa fa-eye",style:{color:"#424242",fontSize:"18px",cursor:"pointer"},onClick:()=>this.viewCouponDetail(t)})},{title:"COUPON CODE",dataIndex:"code",key:"code",sorter:(e,t)=>(e.code||"").localeCompare(t.code||"")},{title:"START DATE",dataIndex:"start_date",key:"start_date",sorter:(e,t)=>(e.start_date||"").localeCompare(t.start_date||"")},{title:"END DATE",dataIndex:"end_date",key:"end_date",sorter:(e,t)=>(e.end_date||"").localeCompare(t.end_date||"")},{title:"PROMO",dataIndex:"promotion_name",key:"promotion_name",sorter:(e,t)=>(e.promotion_name||"").localeCompare(t.promotion_name||"")},{title:"IS ACTIVE",dataIndex:"is_active",key:"is_active",sorter:(e,t)=>String(e.is_active).localeCompare(String(t.is_active))},{title:"Enable via List",dataIndex:"enable_via_list",key:"enable_via_list",sorter:(e,t)=>String(e.enable_via_list).localeCompare(String(t.enable_via_list))},{title:"PARTNER",dataIndex:"partner_id",key:"partner_id",sorter:(e,t)=>(e.partner_id||0)-(t.partner_id||0)},{title:"PRODUCT",dataIndex:"product_id",key:"product_id",sorter:(e,t)=>(e.product_id||0)-(t.product_id||0)},{title:"AUTO APPLY",dataIndex:"autoapply",key:"autoapply",sorter:(e,t)=>String(e.autoapply).localeCompare(String(t.autoapply))},{title:"CREATED",dataIndex:"created_at",key:"created_at",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.created_at).unix()-p()(t.created_at).unix()},{title:"UPDATED",dataIndex:"updated_at",key:"updated_at",render:e=>e?p()(e).format("DD MMMM YYYY"):"",sorter:(e,t)=>p()(e.updated_at).unix()-p()(t.updated_at).unix()}],this.applySearch=(e,t)=>{if(!t)return e;const a=t.toLowerCase();return e.filter((e=>Object.values(e).some((e=>e&&e.toString().toLowerCase().includes(a)))))},this.viewCouponDetail=e=>{this.props.history.push(`/campaign/coupon/${e.id}`,{params:{data:e,createCoupon:!1}})},this.handleClearFilter=()=>{localStorage.removeItem(C),this.setState({searchInput:"",filteredData:this.state.dataSource})},this.onFilterChange=e=>{const t=e.target.value;localStorage.setItem(C,t),this.setState({searchInput:t,filteredData:this.applySearch(this.state.dataSource,t)})},this.changePaginationSize=e=>{this.setState({pageSize:Number(e)})},this.handleCreateCoupon=()=>{this.props.history.push("/campaign/coupon/create-coupon",{params:{createCoupon:!0}})};const t=localStorage.getItem(C)||"";this.state={dataSource:[],filteredData:[],searchInput:t,loading:!1,permissions:[],error:!1,statusAddNewPartner:"",dataAddPartner:{},pageSize:10}}UNSAFE_componentWillReceiveProps(e){const{couponDetails:t}=e.promoData,a=t||[];this.setState({dataSource:a,filteredData:this.applySearch(a,this.state.searchInput),loading:!1})}componentDidMount(){this.setState({loading:!0}),this.props.getCouponDetails(),this.props.getPromoDetails()}exportToExcel(){const{filteredData:e}=this.state,t=e.map((e=>({Code:e.code||"","Start Date":e.start_date&&e.start_date.Time?p()(e.start_date.Time).format("YYYY-MM-DD"):"","End Date":e.end_date&&e.end_date.Time?p()(e.end_date.Time).format("YYYY-MM-DD"):"","Promotion ID":e.promotion_id||"","Is Active":e.is_active||"","Enable via List":e.enable_via_list||"","Partner ID":e.partner_id||"","Product ID":e.product_id||"","Auto Apply":e.autoapply||"",Name:e.name||"","Created At":e.created_at?p()(e.created_at).format("YYYY-MM-DD"):"","Updated At":e.updated_at?p()(e.updated_at).format("YYYY-MM-DD"):""}))),a=u().utils.json_to_sheet(t),o=u().utils.book_new();u().utils.book_append_sheet(o,a,"Coupon List");const n=u().write(o,{bookType:"xlsx",type:"base64"}),i={fileName:"coupon_list_"+(0,x.U6)()};(0,m.A)(i,n)}render(){const{filteredData:e,searchInput:t,statusAddNewPartner:a,dataAddPartner:o,loading:n,pageSize:d}=this.state,{permissions:c}=this.props,p=(0,_.jsx)(i.Menu,{onClick:this.exportToExcel.bind(this),children:(0,_.jsxs)(i.Menu.Item,{children:[(0,_.jsx)(i.Icon,{type:"right-circle-o"})," Excel"]},"1")}),h=c.filter((e=>"ops.create_new_partner"===e)),u=(0,_.jsxs)(i.Menu,{children:[(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"50"),children:"50"},"1"),(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"100"),children:"100"},"2"),(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"200"),children:"200"},"3"),(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"300"),children:"300"},"4"),(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"400"),children:"400"},"5"),(0,_.jsx)(i.Menu.Item,{onClick:this.changePaginationSize.bind(this,"500"),children:"500"},"6")]});return(0,_.jsx)(l.A,{children:(0,_.jsxs)(s.A,{className:"content-wrapper",children:["success"===a&&(0,_.jsx)(i.Row,{className:"error-row",children:(0,_.jsx)(i.Col,{span:24,children:(0,_.jsx)(i.Alert,{className:"alert",message:`${o.name} is successful added`,type:"success",closeText:"Close"})})}),"success"!==a&&""!==a&&(0,_.jsx)(i.Row,{className:"error-row",children:(0,_.jsx)(i.Col,{span:24,children:(0,_.jsx)(i.Alert,{className:"alert",message:"Failed to add new partner",type:"error",closeText:"Close"})})}),(0,_.jsxs)(r.A,{className:"content",children:[(0,_.jsx)(i.Row,{gutter:16,children:(0,_.jsxs)(i.Col,{className:"gutter-row-export-excel",span:24,children:[(0,_.jsx)("h3",{children:"Coupon List"}),(0,_.jsxs)("div",{className:"btn-container",children:[h.length>0&&(0,_.jsxs)(i.Button,{className:"btn-filter",onClick:this.handleCreateCoupon,children:[(0,_.jsx)("i",{className:"fas fa-plus"})," CREATE COUPON"]}),(0,_.jsxs)(i.Button,{className:"btn-filter",onClick:this.handleClearFilter,children:[(0,_.jsx)(i.Icon,{type:"filter"})," Clear filters"]}),(0,_.jsx)(i.Input,{className:"input-filter",value:t,type:"text",id:"filter-text-box",placeholder:"Search...",onInput:e=>this.onFilterChange(e)}),(0,_.jsx)(g.A,{permissionSetter:"ops.downlaod_coupon_list",permissionGetter:c,children:(0,_.jsx)(i.Dropdown,{overlay:p,children:(0,_.jsxs)(i.Button,{children:["Export to ",(0,_.jsx)(i.Icon,{type:"down"})]})})}),(0,_.jsx)(i.Dropdown,{overlay:u,children:(0,_.jsxs)(i.Button,{className:"btn-page-size",children:["Page size ",(0,_.jsx)(i.Icon,{type:"down"})]})})]})]})}),(0,_.jsx)(i.Table,{columns:this.getColumns(),dataSource:e,rowKey:e=>e.id||Math.random(),pagination:{pageSize:d,showSizeChanger:!1,showQuickJumper:!0,showTotal:(e,t)=>`[${t[0]}-${t[1]}] of ${e} items`},scroll:{x:!0,y:!0},loading:n,locale:{emptyText:"Data is empty :("},style:{marginTop:"16px"}})]})]})})}}D.defaultProps={partnerData:{},dataProfile:{}};const b=(0,n.connect)((e=>({promoData:e.PromoDetails,dataProfile:e.Auth.profile})),{getCouponDetails:f,getPromoDetails:y})(D)},51028:(e,t,a)=>{a.d(t,{A:()=>n});const o=(e,t)=>{const a=atob(e),o=[];for(let n=0;n<a.length;n+=512){const e=a.slice(n,n+512),t=new Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);const i=new Uint8Array(t);o.push(i)}return new Blob(o,{type:t})},n=(e,t)=>{const a=e&&e.fileName&&0!==e.fileName.length?e.fileName:"noWarning.xlsx",n=o(t,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,a);else{const e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=a,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}}]);
//# sourceMappingURL=6005.4c57c84f.chunk.js.map