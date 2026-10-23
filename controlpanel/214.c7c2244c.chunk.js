"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[214],{62064:(e,t,a)=>{a.d(t,{Dv:()=>o,E9:()=>r,bh:()=>n,p_:()=>d});const r={INITIATED:"blue",PENDING_HARDCOPY_PROVIDER:"orange",PENDING_ORDER:"gold",WAITING_PICKUP:"geekblue",PICKED_UP:"cyan",IN_DELIVERY:"purple",COMPLETED:"green",REJECTED:"red",PENDING_POLICY:"gold"},n={INITIATED:"Initiated",PENDING_HARDCOPY_PROVIDER:"Pending Hardcopy from Provider",PENDING_ORDER:"Pending Order",WAITING_PICKUP:"Waiting for Picked Up",PICKED_UP:"Picked Up",IN_DELIVERY:"In Delivery",COMPLETED:"Completed",REJECTED:"Rejected",PENDING_POLICY:"Pending Policy"},o=["INITIATED","PENDING_HARDCOPY_PROVIDER","PENDING_ORDER","WAITING_PICKUP","PICKED_UP","IN_DELIVERY","COMPLETED","REJECTED","PENDING_POLICY"],d=["COMPLETED","REJECTED"]},60214:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(1502),n=a(24952),o=a(67816),d=a(17823),l=a.n(d),i=a(84029),s=a(55347),c=a(21577),p=a(80878),u=a.n(p),I=a(34618);const E=u()(c.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,I.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,I.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,I.palette)("secondary",1)};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: left;

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,I.palette)("text",3)};
    border-bottom: 1px solid ${(0,I.palette)("border",0)};
  }

  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-pagination {
    float: right;
  }

  .status-badge {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;var D=a(62064),_=a(97164),P=a(96117),g=a(87291),y=a(70579);const{listHardcopy:b,resetHardcopyState:m}=_.A,{resetLoadingRedux:x}=P.A,{resetErrorRedux:f}=g.A,h=(0,n.connect)((e=>({listData:e.Hardcopy.listData,listMeta:e.Hardcopy.listMeta,listMessage:e.Hardcopy.listMessage,loading:e.Loading.LIST_HARDCOPY})),{listHardcopy:b,resetHardcopyState:m,resetLoadingRedux:x,resetErrorRedux:f})((e=>{let{history:t,listData:a,listMeta:n,listMessage:d,loading:c,listHardcopy:p,resetHardcopyState:u,resetLoadingRedux:I,resetErrorRedux:_}=e;const[P,g]=(0,r.useState)(""),[b,m]=(0,r.useState)(1),x=function(){let{status:e=P,page:t=b}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p({limit:10,offset:10*(t-1),...e?{status:e}:{}})};(0,r.useEffect)((()=>(x(),()=>{u(["listData","listMeta","listMessage"]),I(["LIST_HARDCOPY"]),_(["LIST_HARDCOPY"])})),[]),(0,r.useEffect)((()=>{d&&"success"!==d&&(o.notification.error({message:d}),u(["listMessage"]))}),[d]);const f=[{key:"action",title:"",width:50,render:(e,a)=>(0,y.jsx)(o.Icon,{type:"eye",style:{fontSize:16,cursor:"pointer",color:"#1890ff"},onClick:()=>(e=>{t.push(`/hardcopy-management/${e.internal_id}`)})(a)})},{key:"current_status",title:"Status",dataIndex:"current_status",filters:D.Dv.map((e=>({text:(0,y.jsx)(o.Tag,{color:D.E9[e],children:D.bh[e]||e}),value:e}))),filterMultiple:!1,filteredValue:P?[P]:null,render:e=>(0,y.jsx)(o.Tag,{color:D.E9[e]||"default",children:D.bh[e]||e||"-"})},{key:"latest_updated_at",title:"Latest Update At",dataIndex:"latest_updated_at",render:e=>e?l()(e).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm"):"-"},{key:"requested_at",title:"Requested At",dataIndex:"requested_at",render:e=>e?l()(e).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm"):"-"},{key:"awb",title:"AWB",dataIndex:"awb",render:e=>e||"-"},{key:"reference_id",title:"Reference ID",dataIndex:"reference_id",render:e=>e||"-"},{key:"application_number",title:"Application Number",dataIndex:"application_number",render:e=>e||"-"},{key:"policy_number",title:"Policy Number",dataIndex:"policy_number",render:e=>e||"-"},{key:"provider_name",title:"Provider Name",dataIndex:"provider_name",render:e=>e||"-"},{key:"partner_name",title:"Partner Name",dataIndex:"partner_name",render:e=>e||"-"},{key:"product_name",title:"Product Name",dataIndex:"product_name",render:e=>e||"-"},{key:"package_name",title:"Package Name",dataIndex:"package_name",render:e=>e||"-"}];return(0,y.jsx)(s.A,{children:(0,y.jsxs)(i.A,{children:[(0,y.jsx)(o.Row,{style:{marginBottom:16},children:(0,y.jsx)(o.Col,{span:24,children:(0,y.jsx)("h2",{children:(0,y.jsx)("b",{children:"Hardcopy List"})})})}),(0,y.jsx)(o.Spin,{spinning:!!c,children:(0,y.jsx)(E,{columns:f,bordered:!0,rowKey:e=>e.internal_id,dataSource:a,pagination:{current:b,pageSize:10,total:null===n||void 0===n?void 0:n.count,showSizeChanger:!1},onChange:(e,t)=>{var a;const r=(null===(a=t.current_status)||void 0===a?void 0:a[0])||"",n=r!==P?1:e.current;g(r),m(n),x({status:r,page:n})},className:"isoSearchableTable",scroll:{x:!0}})})]})})}))},21577:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(67816);const n=r.Table}}]);
//# sourceMappingURL=214.c7c2244c.chunk.js.map