"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7669],{67669:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var s=a(1502),d=a.n(s),n=a(67816),i=a(24952),o=a(55347),r=a(84029),l=a(68164),p=a(26877),c=a(80878),h=a.n(c);const g=h().div`
  .delete-addons .ant-modal-header {
    text-align: center;
    display: flex;
    height: 48px;
    justify-content: center;
    background: #eeeeee;
  }
`,u=(h().div``,h().div`
  color: #333333;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
`),x=h().div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px;
  background: #f5f5f5;
`,A=h().div`
  background: #f5f5f5;
`,f=h().div`
  color: #999999;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`,b=h().div`
  color: #999999;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 10px;
`,m=h().div`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  margin-bottom: 10px;
`,S=h().div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 4%;
  border-top: 1px solid #dddddd;
  padding: 20px 0px 0px 0px;
`,v=h().div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 4%;
  border-top: 1px solid #dddddd;
  padding: 20px 0px;
`,y=h().div`
  margin: 10px 0px;
`,w=h().div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;

  .ant-select-selection--single {
    width: 100%;
    height: 56px;
  }
  .ant-select-selection--single .ant-select-selection__rendered {
    width: 100%;
    height: 56px;
  }
  .ant-select-selection-selected-value {
    width: 100%;
    height: 56px;
    margin-top: 11px;
  }
  .add-questions-btn {
    display: block;
    padding: 18px 16px;
    border-radius: 8px;
    background: #faf000;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px;
    border: 1px solid #faf000;
    height: 58px;
    width: 100%;
    cursor: pointer;
  }
`,C=h().div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding; 20px 32px 10px 32px;

  .cancel-btns {
    display: flex;
    width: 240px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 3px solid #333333;
    background: #ffffff;
    font-weight: 900;
    line-height: 20px;
  }

  .save-btn {
    display: flex;
    width: 240px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 3px solid #faf000;
    background: #faf000;
    font-weight: 900;
    line-height: 20px;
    color: #333333;
  }

  .delete-btn {
    display: flex;
    width: 240px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 3px solid #dc0000;
    background: #dc0000;
    color: #ffffff;
    font-weight: 900;
    line-height: 20px;
  }
`,O=h().input`
  outline: none;
  border: none;
  width: 100%;
`,j=h().div`
  width: 100%;
  font-weight: 800;
`,k=h().div`
  display: flex;
  height: 56px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 20px;
`,E=h().div`
  display: ${e=>e.isEdit?"grid":"block"};
  grid-template-columns: 87% 5%;
  gap: 2%;

  .ant-select-selection-selected-value{
    width: 90%
  }
`,D=h().div`
`,$=h().div`
`;var L=a(77980),M=a(70579);const{deleteAddOnsRequest:Q,resetReduxStateClaim:q}=p.A,N=n.Form.Item;class T extends d().Component{constructor(e){var t;super(e),t=this,this.handleCancel=()=>{const{onCancel:e=()=>{}}=this.props;e()},this.handleDelete=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e&&t.props.deleteAddOnsRequest({addon_name:e})},this.renderQuestionsList=()=>{},this.state={addOnData:[],loading:!0,deleteLoading:!1},this.initState=this.state}componentDidMount(){const{currQuestionsData:e="",addOnsQuestionsList:t=[]}=this.props,a=t.filter((t=>t.name===e),[]);this.setState({addOnData:a,loading:!1})}componentDidUpdate(){if("success"===this.props.deleteAddOnsStatus){const{onDelete:e=()=>{},deleteAddOnsStatus:t,deleteAddOnsMessage:a="Error"}=this.props;"success"===t?((0,L.D)("success","Add On Deleted Successfully"),e()):"error"===t&&((0,L.D)("error",a),e()),this.setState({deleteLoading:!1}),this.props.resetReduxStateClaim(["deleteAddOnsStatus"])}}render(){const{addOnData:[{name:e="",question_data:t=[]}={}]=[]}=this.state;return(0,M.jsx)(g,{children:(0,M.jsx)(n.Modal,{visible:this.props.isOpen,title:"Delete Add-Ons",maskClosable:!1,wrapClassName:"delete-addons",onCancel:this.handleCancel,width:1200,footer:null,children:(0,M.jsxs)(n.Spin,{spinning:this.state.loading,tip:"Loading...",children:[(0,M.jsx)("div",{children:(0,M.jsx)(u,{children:"Are you sure want to delete this Add-Ons?"})}),(0,M.jsx)(x,{children:(0,M.jsxs)(A,{children:[(0,M.jsx)("div",{children:(0,M.jsxs)(n.Row,{children:[(0,M.jsx)(f,{children:"Add-Ons Name"}),(0,M.jsx)(m,{children:e})]})}),(0,M.jsx)(S,{children:null===t||void 0===t?void 0:t.map(((e,t)=>{const{display_text:a=""}=e;return(0,M.jsxs)(y,{children:[(0,M.jsx)(f,{children:`Question ${t+1}`}),(0,M.jsx)(N,{children:(0,M.jsx)(m,{children:a})})]},t)}))})]})}),(0,M.jsxs)(C,{children:[(0,M.jsx)(n.Button,{type:"default",size:"large",className:"cancel-btns",onClick:this.handleCancel,children:"CANCEL"}),(0,M.jsx)(n.Button,{loading:this.state.deleteLoading,type:"primary",size:"large",className:"delete-btn",disabled:!1,onClick:()=>{this.handleDelete(e),this.setState({deleteLoading:!0})},children:"DELETE"})]})]})})})}}const R=(0,i.connect)((e=>({getAddOnsListsError:e.Error.DELETE_ADD_ONS,deleteAddOnsStatus:e.Claims.deleteAddOnsStatus})),{deleteAddOnsRequest:Q,resetReduxStateClaim:q})(T);var B=a(94528);const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7ZhBSitBEIb/6sn4ng8z5q0ePF3EhYu4UVcuY8C9XsEbeABBBQ9gvINb8QbqCYwbs1AwC3Vr1IiQTFJ2DRPRqEmcItqLfNDQTTfNzz9VxXQROmicny/CmGVutRZBlIkGcwaDoyKDiEphvV4czeUqrzepPeGTk0wYBBvMvIYfhJh3UrXaFs3PV6M1YnGNIDi0Ts3BBZhLfq1WEJFG1uKcM+IEorlwbGwjmj6Vy1nP9y/hIE3mgrHifjTmuuERrcgnnoWrMOdFYBauYkzGbYG2/hq4jfMCMRSoxXmBKSi5yecRXl9/fPnEBP4fH0ODSmD97CwS93d9HSO53Nu9chm329sIr66QmpxEUlQCm7FzvxYW3gmkdPrljEYg1S8uGAkQZx739/s6m15dhYkFf5XEDrbu73G3u9vX2d/WYXE5CYmzeGRmpq8E+Le3l1icoCozkqW9oCCABnUd7BVbncnz5fuhxIyPf7rXj8M974cSr4sITXlpoxbYzSVt/Alqgd1i7M/SErQkLtTfxfB3S8tQoBZj+yBVOIyxb093BRJV3HaQuSIO6h4Ng+XU2BbXARyl2WjsmNHp6SM7L8I9on51VGZ8z9u0sViCK0gL+OFhU6aRQJqaqvrGFOCGk8V2f1oW1Lkbt4Sl6yqNzSwG256rRkMqiU1WyYc45F54BtNho/g6VYTsAAAAAElFTkSuQmCC",{Option:_}=n.Select,U=n.Form.Item,{resetReduxStateClaim:z,getQuestionnaireList:F,UpdateEditAddOnsRequest:Y}=p.A;class G extends d().Component{constructor(e){super(e),this.handleCancel=()=>{const{onCancel:e=()=>{}}=this.props;e()},this.onSubmit=async e=>{e.preventDefault();const{user:{name:t=""}={},isEdit:a=!1}=this.props,{addOnName:s="",questionsResponse:d=[]}=this.state,n=a?{question_ids:[...new Set(d)],addon_name:s,updated_by:t,is_update:!0}:{question_ids:[...new Set(d)],addon_name:s,updated_by:t};this.props.UpdateEditAddOnsRequest(n)},this.handleQuestionClick=(e,t)=>{const{questionsResponse:a=[]}=this.state;if(a.includes(t))(0,L.D)("error","Question Already Added");else{const a=this.state.questionsResponse;a[e]=t,this.setState({questionsResponse:[...a]})}},this.handleDeleteQuestions=e=>{const{questionsResponse:t=[],count:a=1}=this.state,s=t[e];if(s){const e=t.filter((e=>e!==s));this.setState({questionsResponse:e,count:a-1})}else this.setState({count:a-1})},this.handleAddonNameChange=e=>{const t=e.target.value;this.setState({addOnName:t})},this.state={user:{},loading:!0,questionsList:[],count:1,addOnName:"",questionsResponse:[],questionData:[],editAddLoading:!1},this.initState=this.state}componentDidMount(){this.props.getQuestionnaireList({active:!0})}UNSAFE_componentWillReceiveProps(e){const{currQuestionsData:t="",addOnsQuestionsList:a=[],questionsList:s=[],isEdit:d=!1,editUpdateAddOnsStatus:n,onSave:i=()=>{},onCancel:o=()=>{},editUpdateAddOnsMessage:r=""}=e;if(d){var l,p,c;let e=[];const d=a.filter((a=>{var s;a.name===t&&(e=null===(s=a.question_data)||void 0===s?void 0:s.map((e=>e.id),[]));return a.name===t}),[]),n=null===s||void 0===s?void 0:s.reduce(((e,t)=>{const{id:a="",display_text:s=""}=t;return{...e,[a]:s}}),{});this.setState({loading:!1,count:(null===(l=d[0])||void 0===l||null===(p=l.question_data)||void 0===p?void 0:p.length)||1,questionsResponse:e,questionsidMap:n,addOnName:null===(c=d[0])||void 0===c?void 0:c.name})}else{const e=null===s||void 0===s?void 0:s.reduce(((e,t)=>{const{id:a="",display_text:s=""}=t;return{...e,[a]:s}}),{});this.setState({questionsList:[],questionData:[],questionsidMap:e})}if("success"===n){const e=d?"Updated Successfully":"Add On Successfully Added";(0,L.D)("success",e),this.props.getQuestionnaireList({active:!0}),i(),o(),this.setState({editAddLoading:!1})}else if("error"===n){const e=r||"Error";(0,L.D)("error",e),o(),this.setState({editAddLoading:!1})}this.props.resetReduxStateClaim(["editUpdateAddOnsStatus"])}render(){const{isEdit:e=!1,questionsListLoading:t=!0,questionsList:a=[]}=this.props,{questionsidMap:s={},questionsResponse:d=[],addOnName:i,count:o}=this.state,{getFieldDecorator:r}=this.props.form,l=i&&this.state.questionsResponse.length,p=new Array(o).fill(!0);return(0,M.jsx)(g,{children:(0,M.jsx)(n.Modal,{visible:this.props.isOpen,title:e?"Update Add-Ons":"Create New Add-Ons",maskClosable:!1,wrapClassName:"delete-addons",onCancel:this.handleCancel,width:1200,footer:[(0,M.jsxs)(C,{children:[(0,M.jsx)(U,{children:(0,M.jsx)(n.Button,{type:"default",size:"large",className:"cancel-btns",onClick:this.handleCancel,children:"CANCEL"})}),(0,M.jsx)(U,{children:(0,M.jsx)(n.Button,{form:"event-form",htmlType:"submit",type:"primary",size:"large",className:"save-btn",disabled:!l,onClick:()=>this.setState({editAddLoading:!0}),loading:this.state.editAddLoading,children:e?"UPDATE":"ADD"},"submit")})]},1)],bodyStyle:{overflowY:"auto"},children:(0,M.jsx)(B.A,{isSpining:t,children:(0,M.jsxs)(n.Form,{id:"event-form",style:{marginTop:"10px"},onSubmit:e=>{this.onSubmit(e)},children:[(0,M.jsx)(U,{validateStatus:"validateStatus",children:r("add_on",{rules:[{required:!0,message:"Please Input Add On Name"}]})((0,M.jsxs)("div",{children:[(0,M.jsx)(f,{children:"Add-Ons Name"}),e?(0,M.jsx)(j,{children:i}):(0,M.jsx)(k,{children:(0,M.jsx)(O,{placeholder:"Input Add-Ons Name",onChange:this.handleAddonNameChange})})]}))}),(0,M.jsxs)(v,{children:[0!==o&&p.map(((t,i)=>(0,M.jsxs)(w,{children:[(0,M.jsxs)(b,{children:["Question ",i+1]}),(0,M.jsxs)(E,{isEdit:e,children:[(0,M.jsx)(D,{children:(0,M.jsx)(n.Select,{showSearch:!0,className:"form-select-width",style:{height:"56px"},placeholder:"Select Question",optionFilterProp:"children",disabled:!1,value:s[d[i]],children:a&&a.filter((e=>{let{id:t}=e;return!d.includes(t)})).map((e=>{let{display_text:t,id:a}=e;return(0,M.jsx)(_,{onClick:()=>this.handleQuestionClick(i,a),children:t},a)}))})}),e&&(0,M.jsx)($,{children:(0,M.jsx)("img",{src:I,alt:"delete",onClick:()=>this.handleDeleteQuestions(i),height:"56px",width:"56px"})})]})]},i))),(0,M.jsxs)(w,{children:[(0,M.jsxs)(b,{children:["Question ",this.state.count+1]}),(0,M.jsx)(U,{children:(0,M.jsx)("div",{className:"add-questions-btn",onClick:()=>this.setState({count:this.state.count+1}),children:"ATTACH MORE QUESTIONS"})})]})]})]})})})})}}const V=n.Form.create()(G),X=(0,i.connect)((e=>({questionsList:e.Claims.questionsList,questionsListLoading:e.Loading.GET_QUESTIONS_LIST,questionsListError:e.Error.GET_QUESTIONS_LIST,editUpdateAddOnsStatus:e.Claims.editUpdateAddOnsStatus,editUpdateAddOnsMessage:e.Claims.editUpdateAddOnsMessage,user:e.Auth.profile})),{resetReduxStateClaim:z,getQuestionnaireList:F,UpdateEditAddOnsRequest:Y})(V),{getAddOnsQuestionnaireList:W}=p.A;class J extends d().Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:a,page_size:s}=e,d=Number(a)||1,n=Number(s)||10;t.setState({page_size:n,page:d}),t.props.getAddOnsQuestionnaireList({page:d,per_page:10,sort_by:"created_at"})},this.handleDeleteAddonsModal=e=>{this.setState({showdeleteAddOnsModal:!0,currQuestionsData:e})},this.handleCloseDeleteAddonsModal=()=>{this.setState({showdeleteAddOnsModal:!1})},this.handleDeleteAddons=()=>{const{page:e=1,pageSize:t=10}=this.state;this.setState({showdeleteAddOnsModal:!1}),this.props.getAddOnsQuestionnaireList({page:e,page_size:t,sort_by:"created_at"})},this.handleEditAddonsModal=e=>{this.setState({showAddDeleteAddOnsModal:!0,currQuestionsData:e,isEdit:!0})},this.handleCloseAddEditAddonsModal=()=>{this.setState({showAddDeleteAddOnsModal:!1}),this.setState({isEdit:!1})},this.handleSaveAddEditAddonsModal=()=>{const{page:e=1,pageSize:t=10}=this.state;this.setState({showAddDeleteAddOnsModal:!1,isEdit:!1}),this.props.getAddOnsQuestionnaireList({page:e,page_size:t,sort_by:"created_at"})},this.handleAddAddonsModal=()=>{this.setState({showAddDeleteAddOnsModal:!0})},this.handleTableChange=e=>{const{pageSize:t,current:a}=e,s={page:a,page_size:t};this.setState({page:a,page_size:t},(()=>this.fetch(s)))},this.state={addOnsQuestionsList:[],showdeleteAddOnsModal:!1,showAddDeleteAddOnsModal:!1,currQuestionsData:[],isEdit:!1,page:1,pageSize:10}}componentDidMount(){this.fetch()}render(){const{getAddOnsListsLoading:e,getAddOnsListsError:t,addOnsQuestionsList:a,addOnsMetaData:{total_records:s=0,page:d=1}={}}=this.props,{showdeleteAddOnsModal:i,showAddDeleteAddOnsModal:p}=this.state,c=[{key:"id",align:"center",width:"80px",title:(0,M.jsx)("div",{style:{textAlign:"center"},children:(0,M.jsx)("span",{children:"No."})}),dataIndex:"s_no"},{key:"add_ons_name",title:(0,M.jsx)("div",{children:(0,M.jsx)("span",{children:"Add-Ons Name"})}),dataIndex:"name"},{key:"edit_delete_add_ons",align:"center",width:"120px",title:(0,M.jsx)("div",{children:(0,M.jsx)("span",{children:"Action"})}),dataIndex:"name",render:e=>{const t=a.filter((t=>t.name===e),[]),[{is_active:s=!0}={}]=t||[];return(0,M.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB7Zg9TxRBGMf/M3uHORPjJjZiYlgqMTHBK6wsZL+Ab4kfAquLNUaNxsIKGr+ARgsTNTZaiVaWd0gBNLAEOBISyBIS4F5mh+dZDgIXaHZmwyTcL5mdfZnil+eZmd19BLqYXmqNaA8PBPSIFvChqSFt+SAQ0TGCFjXVaE+UB0vR8ccdqgva9y60XwC6gjNFjKtG4VV5UMTpFTpyhb7WJEXsNhxAaNTazWLIkpJvcORckWPYZT+bJFtd3Qk87S3AQZRSoZTKO+M5dzpSeA+l9DAMV5G4JzUQwFFoBfuS9rkA7uJLuI3zgugJmnJ+BX9U13H37RTe/VyGCbkIbu228eHfGvUKH6kf+xohK9YFOXJP3s/i9eMB3Lha2r9X20BWrAqy3Ni3RdTjJiqf5g8l3zwaQFbE/3pTwwIHcke55vfh17NbMMFKBE+SY56G/TDFWPA0OU7r/fIVmGIkOLe6nasck1lwJW5Qa2K0K4025ZjMgpMzm6h8nk8XwoGkbTkms+BvEmSeU4pZ8svokHU5poCM1CnFd4JLCG9exlD/xcNN2TbW9sG86H1umdITNIUFYziMpL9jlwUjSaUutwWTBH/hKDrBlEy0+g5HSVpqXJavl/6Q6QQcg524Xp1uM0mr+JLedzU4gqYSMDvxeSrIteCkUQxdiCQ7JJ36NF+L7gFcEuaqq5QY7tQOA+QHS8Sae1qsvB54yh0dsAck9tU+DavrtwAAAABJRU5ErkJggg==",alt:"edit",onClick:()=>this.handleEditAddonsModal(e)}),s&&(0,M.jsx)("img",{src:I,alt:"delete",onClick:()=>this.handleDeleteAddonsModal(e)})]})}},{key:"is_active",width:"150px",align:"center",title:(0,M.jsx)("div",{children:(0,M.jsx)("span",{children:"Remarks"})}),dataIndex:"is_active",render:e=>(0,M.jsx)("div",{style:e?{color:"#009632",textAlign:"center"}:{color:"#999999",textAlign:"center"},children:!0===e?"Active":"Inactive"})}];return(0,M.jsxs)(o.A,{className:"referral-table",style:{color:"#788195"},children:[i&&(0,M.jsx)(R,{isOpen:i,onCancel:this.handleCloseDeleteAddonsModal,onDelete:this.handleDeleteAddons,currQuestionsData:this.state.currQuestionsData,...this.props}),p&&(0,M.jsx)(X,{isOpen:p,onCancel:this.handleCloseAddEditAddonsModal,onSave:this.handleSaveAddEditAddonsModal,currQuestionsData:this.state.currQuestionsData,isEdit:this.state.isEdit,...this.props}),(0,M.jsxs)(r.A,{children:[(0,M.jsxs)(n.Row,{style:{marginBottom:"10px"},align:"middle",children:[(0,M.jsxs)("div",{children:[(0,M.jsx)("h3",{style:{float:"left",fontWeight:"800"},children:"Add-ons"}),(0,M.jsx)("div",{children:(0,M.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:s})})]}),(0,M.jsx)("div",{style:{float:"right",display:"flex"},children:(0,M.jsx)(n.Button,{type:"primary",style:{background:"#FAF000",borderColor:"#FAF000",borderRadius:"8px",padding:"16px, 32px, 16px, 32px",fontWeight:"800",height:"48px",color:"#000000"},onClick:()=>this.handleAddAddonsModal(),children:"CREATE NEW ADD-ONS"})})]}),(0,M.jsx)(l.A,{bordered:!1,columns:c,pagination:{pageSize:10,total:s,current:d},rowKey:e=>e.id,dataSource:t||e?[]:a,className:"isAddOnTable table-striped-rows",loading:e,onChange:this.handleTableChange})]})]})}}J.defaultProps={};const P=(0,i.connect)((e=>({userProducts:e.Auth.product,addOnsQuestionsList:e.Claims.addOnsQuestionsList,addOnsMetaData:e.Claims.addOnsMetaData,getAddOnsListsLoading:e.Loading.GET_ADD_ONS_QUESTIONS_LIST,getAddOnsListsError:e.Error.GET_ADD_ONS_QUESTIONS_LIST})),{getAddOnsQuestionnaireList:W})(J)},68164:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(21577),d=a(80878),n=a.n(d),i=a(34618),o=a(67050),r=a(93317);const l=n()(s.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {
    max-width: 400px;
    overflow: auto;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item {
    overflow: initial;
  }
  .ant-table-thead > tr > th {
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,i.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,i.palette)("secondary",1)};
      margin: ${e=>"rtl"===e["data-rtl"]?"0 4px 0 0":"0 0 0 4px"};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: ${e=>"rtl"===e["data-rtl"]?"right":"left"};

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,i.palette)("text",3)};
    border-bottom: 1px solid ${(0,i.palette)("border",0)};

    a {
      color: ${(0,i.palette)("primary",0)};
      ${(0,o.kY)()};

      &:hover {
        color: ${(0,i.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-row {
    background-color: ${e=>e.rowColor};
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,i.palette)("border",0)};

    a {
      border: 0;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    transform: ${e=>"rtl"===e["data-rtl"]?"rotate(180deg)":"rotate(0)"};
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};
  }

  .ant-pagination-item {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};

    &:hover {
      border-color: ${(0,i.palette)("primary",0)};
      ${(0,o.kY)()};
    }

    &:hover a {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,i.palette)("primary",0)};
    border-color: ${(0,i.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,i.palette)("grayscale",6)};

    p {
      color: ${(0,i.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,o.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,o.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,i.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,i.palette)("border",0)};
      ${(0,o.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,i.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,i.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,o.Vq)("3px 0 0 3px")};
        ${(0,o.kY)()};
        ${(0,o.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,i.palette)("secondary",7)};
          ${(0,o.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        .table-striped-rows tr:nth-child(2n) td {
          background-color: #fbfbfb;
        }
        .table-striped-rows thead {
            background-color: #f1f1f1;
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,i.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,o.kY)()};

        &:hover {
          background-color: ${(0,i.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead > tr > th {
      word-break: keep-all;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,i.palette)("border",0)};
        border-left: 0;

        &[rowspan] {
          text-align: center;
        }

        &.isoImageCell {
          padding: 3px;
        }
      }

      &:first-child {
        th {
          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,i.palette)("border",0)};
          }
        }
      }

      &:last-child {
        th {
          border-top: 0;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        td {
          border-right: 1px solid ${(0,i.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,i.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,i.palette)("border",0)};
          }

          &.isoImageCell {
            padding: 3px;
          }
        }
      }
    }
  }

  &.isAddOnTable {
    .ant-table-thead > tr {
      th {
        background-color: #333333;
        color: #FFFFFF;

    }
  }

  &.table-striped-rows tr:nth-child(2n) td {
    background-color: #EEEEEE;
  }
  &.table-striped-rows thead {
      background-color: #FFFFFF;
  }

  &.isoEditableTable {
    .isoEditData {
      .isoEditDataWrapper {
        display: flex;
        align-items: center;

        input {
          font-size: 12px;
          font-weight: 400;
          color: ${(0,i.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,i.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,o.Vq)("3px")};
          ${(0,o.MS)()};
          ${(0,o.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,i.palette)("border",0)};
            ${(0,o.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }
        }

        .isoEditIcon {
          cursor: pointer;
        }
      }

      .isoDataWrapper {
        display: flex;
        align-items: center;

        .isoEditIcon {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`,p=n().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,i.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,i.palette)("primary",0)};
      background-color: ${(0,i.palette)("primary",0)};
    }
  }
`,c=((0,r.A)(p),(0,r.A)(l))},77980:(e,t,a)=>{a.d(t,{D:()=>d});var s=a(67816);const d=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";s.notification[e]({message:t,description:a||""})}},21577:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(67816);const d=s.Table}}]);
//# sourceMappingURL=7669.7ed29b0e.chunk.js.map