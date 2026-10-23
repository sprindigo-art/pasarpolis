"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2561],{92561:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var s=t(1502),r=t(67816),n=t(24952),l=t(84029),o=t(55347),i=t(80878);const c=t.n(i)().div`
  .gutter-row-export-csv{
    display: flex;
    justify-content: flex-end;
  }
  .ant-pagination.ant-table-pagination{
    display: none !important;
  }
  .layout-content {
    padding: 6vh;
  }
  .avatar-container {
    display: flex;
    justify-content: center;
  }
  .avatar {
    background-color: #00a2ae;
    vertical-align: middle;
  }
  .row-table {
    padding-top: 0px;
  }
  .error-alert {
    width: 100%;
    margin-bottom: 20px;
  }
`;var d=t(70579);class p extends s.PureComponent{constructor(e){super(e),this.state={profile:{},errorMessage:""},this.columns=[{dataIndex:"name",width:150},{dataIndex:"id"},{dataIndex:"value"}]}componentDidUpdate(){const{profile:e,profileMessage:a}=this.props.profileData;if(Object.values(e).length>0){const{user:a}=e;this.setState({profile:a})}void 0!==a&&this.setState({errorMessage:a})}render(){const{profile:e,errorMessage:a}=this.state;let t=[];return e&&Object.values(e).length>0&&(t=[{key:"1",name:"ID",value:e.id||"-"},{key:"2",name:"Email",value:e.email||"-"},{key:"3",name:"Name",value:e.name||"-"},{key:"4",name:"Phone",value:e.phone||"-"}]),(0,d.jsx)(c,{children:(0,d.jsxs)(o.A,{children:[a&&(0,d.jsx)(r.Alert,{className:"error-alert",message:(0,d.jsx)("strong",{children:a}),type:"error",closeText:"Close"}),(0,d.jsxs)(l.A,{className:"layout-content",children:[(0,d.jsx)("div",{className:"avatar-container",children:(0,d.jsx)(r.Avatar,{className:"avatar",size:"large",children:e&&Object.values(e).length>0&&e.email[0].toUpperCase()})}),(0,d.jsx)(r.Row,{className:"row-table",children:(0,d.jsx)(r.Table,{showHeader:!1,columns:this.columns,dataSource:t})})]})]})})}}p.defaultProps={profileData:{}};const u=(0,n.connect)((e=>({profileData:e.Auth})),{})(p)}}]);
//# sourceMappingURL=2561.fd7adeb1.chunk.js.map