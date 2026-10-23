"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8663],{78663:(e,r,t)=>{t.r(r),t.d(r,{default:()=>A});var a=t(95916),n=t.n(a),i=t(1502),c=t(67816),o=t(24952),s=t(79471),d=t(29308),l=t(87291),p=t(96117),u=t(40117),v=t(78777),C=t(70579);const{getServiceCenterBrandList:g,getServiceCenterDetails:h,resetServiceCenterRedux:b,updateServiceCenterBranch:E,createServiceCenterBranch:m,getServiceCenterBranchDetails:x}=d.A,{resetErrorRedux:S}=l.A,{resetLoadingRedux:f}=p.A,B=c.Form.Item,_=c.Select.Option,R=e=>{let{isEditMode:r,brandList:t}=e;return[{label:"Branch Code",name:"branch_code",disabled:!!r,required:!0,validator:(e,r)=>u.G7.test(r)?Promise.resolve():Promise.reject("Branch code should be alphanumeric")},{label:"Branch Name",name:"name",required:!0},{label:"Region",name:"region",required:!0},{label:"City",name:"city",required:!0},{label:"County",name:"county",required:!0},{label:"Province",name:"province",required:!0},{label:"Postal Code",name:"postal_code",required:!0,validator:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return!r||r.length>20?Promise.reject("Please enter a postal code with less than 21 characters"):Promise.resolve("")}},{label:"Branch Address",name:"address",required:!0},{label:"Contact Number",name:"contact_number",required:!0},{label:"Is pick up service available",name:"is_pickup_service_available",type:"boolean",valueRender:e=>e?"Yes":"No"},...r?[{name:"is_active",label:"Is active",type:"boolean",valueRender:e=>e?"Yes":"No"}]:[],{label:"Priority",name:"priority",type:"number",min:1,max:3,required:!0,validator:(e,r)=>[1,2,3].includes(r)?Promise.resolve():Promise.reject("It can be 1, 2 or 3")},{label:"Brand",name:"brand",type:"multi-select",options:t,valueRender:e=>Array.isArray(t)?t.filter((r=>{let{id:t}=r;return e.includes(t)})).map((e=>{let{name:r}=e;return r})).join(", "):"N/A"}]};const y=c.Form.create()((function(e){let{form:r,brandList:t=[],getServiceCenterBrandList:a=()=>{},getServiceCenterDetails:o=()=>{},resetLoadingRedux:d=()=>{},resetErrorRedux:l=()=>{},resetServiceCenterRedux:p=()=>{},getServiceCenterBranchDetailsMessage:u="",createServiceCenterBranchLoading:g,createServiceCenterBranchMessage:h="",createServiceCenterBranchError:b=!1,updateServiceCenterBranchLoading:E,updateServiceCenterBranchMessage:m="",updateServiceCenterBranchError:x=!1,updateServiceCenterBranch:S=()=>{},createServiceCenterBranch:f=()=>{},getServiceCenterBranchDetails:y=()=>{},getServiceCenterBranchDetailsError:A,getServiceCenterBranchDetailsLoading:D,getServiceCenterBranchDetailsData:N={},serviceCenterDetail:k={}}=e;const{getFieldDecorator:T}=r,L=(0,s.useParams)(),j=(0,s.useHistory)(),w=!("create-branch"===n().get(L,"branchCode","")),I=n().get(L,"id","");(0,i.useEffect)((()=>{o({id:I})}),[I]),(0,i.useEffect)((()=>{a()}),[]),(0,i.useEffect)((()=>{if(w){const e=n().get(L,"id",""),r=n().get(L,"branchCode","").toLowerCase();y({servicecenterCode:e,branchCode:r})}p(["updateServiceCenterBranchMessage","getServiceCenterBranchDetailsData"])}),[w,y,L,p]),(0,i.useEffect)((()=>{!1===D&&(A&&(c.notification.error({message:u}),j.goBack()),l(["GET_SERVICE_CENTER_BRANCH_DETAIL"]),d(["GET_SERVICE_CENTER_BRANCH_DETAIL"]),p(["getServiceCenterBranchDetailsMessage"]))}),[j,l,d,p,A,D,u]),(0,i.useEffect)((()=>{!1===g&&(b?c.notification.error({message:h}):(c.notification.success({message:h}),j.goBack()),l(["CREATE_SERVICE_CENTER_BRANCH"]),d(["CREATE_SERVICE_CENTER_BRANCH"]),p(["createServiceCenterBranchMessage"]))}),[j,l,d,p,b,h,g]),(0,i.useEffect)((()=>{!1===E&&(x?c.notification.error({message:m}):(c.notification.success({message:m}),j.goBack()),l(["UPDATE_SERVICE_CENTER_BRANCH"]),d(["UPDATE_SERVICE_CENTER_BRANCH"]),p(["updateServiceCenterBranchMessage","getServiceCenterBranchDetailsData"]))}),[j,l,d,p,x,m,E]);const F=e=>{let{type:r,label:t,disabled:a,min:n,max:i,options:o=[],name:s}=e;switch(r){case"number":return(0,C.jsx)(c.InputNumber,{max:i,min:n,placeholder:`Enter ${t}`,style:{width:"100%"}});case"boolean":return(0,C.jsx)(c.Switch,{});case"multi-select":return(0,C.jsx)(c.Select,{showSearch:!0,"data-testid":s,mode:"multiple",placeholder:`Enter ${t}`,filterOption:(e,r)=>r.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:null===o||void 0===o?void 0:o.map((e=>{let{name:r,id:t}=e;return(0,C.jsx)(_,{value:t,children:r},t)}))});default:return(0,C.jsx)(c.Input,{placeholder:`Enter ${t}`,disabled:a})}},M=e=>{const r={...N},{type:t,name:a}=e;return"brand"===a?Array.isArray(r[a])?r[a].map((e=>{let{id:r}=e;return r})):[]:!("boolean"!==t||!r[a])||("boolean"!==t||null===r[a]&&void 0===r[a])&&(null!==r[a]||void 0!==r[a]?r[a]:void 0)};return(0,C.jsxs)(v.CE,{children:[(0,C.jsx)(c.Button,{type:"primary",onClick:()=>{j.goBack()},children:"Back"}),(0,C.jsx)(c.Spin,{spinning:!!D,children:(0,C.jsx)(v.MG,{children:(0,C.jsx)(c.Form,{name:"branch-details",layout:"horizontal",children:(0,C.jsx)(c.Row,{gutter:24,children:R({isEditMode:w,brandList:t}).map((e=>{const{name:r,label:t,disabled:a,type:n,helpText:i,required:o,validator:s,options:d}=e;return(0,C.jsx)(c.Col,{span:12,children:(0,C.jsx)(B,{name:r,label:t,extra:i,children:T(r,{rules:[{required:o,message:`${t} is required`},...s?[{validator:s}]:[]],initialValue:M(e),..."boolean"===n?{valuePropName:"checked"}:{}})(F({type:n,disabled:a,label:t,options:d,name:r}))})},r)}))})})})}),(0,C.jsx)("div",{children:(0,C.jsx)(c.Button,{type:"primary",loading:g,onClick:e=>{e.preventDefault(),r.validateFields(((e,r)=>{if(e)return;const a=(0,C.jsx)("div",{children:R({isEditMode:w,brandList:t}).map((e=>{let{name:t,label:a,valueRender:n}=e;return(0,C.jsxs)("div",{children:[(0,C.jsx)("span",{style:{fontWeight:900},children:a}),":",(0,C.jsx)("span",{style:{paddingLeft:10},children:n?n(r[t]):r[t]})]},t)}))});c.Modal.confirm({title:"Kindly verify the data that are you entering",content:a,okText:"Confirm",onOk:()=>{const e={service_center_code:n().get(L,"id",""),branch_code:r.branch_code,branch_data:{...r,branch_code:void 0,is_pickup_service_available:r.is_pickup_service_available?"Yes":"No",brand:t.filter((e=>{let{id:t}=e;return r.brand.includes(t)}))}};w?S(e):f(e)}})}))},children:"Submit"})})]})})),A=(0,o.connect)((e=>({createServiceCenterBranchMessage:e.ServiceCenter.createServiceCenterBranchMessage,createServiceCenterBranchError:e.Error.CREATE_SERVICE_CENTER_BRANCH,createServiceCenterBranchLoading:e.Loading.CREATE_SERVICE_CENTER_BRANCH,updateServiceCenterBranchMessage:e.ServiceCenter.updateServiceCenterBranchMessage,updateServiceCenterBranchError:e.Error.UPDATE_SERVICE_CENTER_BRANCH,updateServiceCenterBranchLoading:e.Loading.UPDATE_SERVICE_CENTER_BRANCH,getServiceCenterBranchDetailsMessage:e.ServiceCenter.getServiceCenterBranchDetailsMessage,getServiceCenterBranchDetailsData:e.ServiceCenter.getServiceCenterBranchDetailsData,getServiceCenterBranchDetailsError:e.Error.GET_SERVICE_CENTER_BRANCH_DETAIL,getServiceCenterBranchDetailsLoading:e.Loading.GET_SERVICE_CENTER_BRANCH_DETAIL,serviceCenterDetail:e.ServiceCenter.getServiceCenterDetail,brandList:e.ServiceCenter.brandList})),{getServiceCenterBrandList:g,resetErrorRedux:S,resetLoadingRedux:f,getServiceCenterDetails:h,resetServiceCenterRedux:b,createServiceCenterBranch:m,updateServiceCenterBranch:E,getServiceCenterBranchDetails:x})(y)},78777:(e,r,t)=>{t.d(r,{AO:()=>o,CE:()=>p,Ef:()=>v,MG:()=>u,NK:()=>b,Oy:()=>g,Xc:()=>d,Yu:()=>c,Zc:()=>x,Zg:()=>h,de:()=>C,eM:()=>i,fd:()=>l,mc:()=>m,y0:()=>s,yn:()=>E});var a=t(80878),n=t.n(a);const i=n().div`
    gap: 4px;
    display: flex;
    justify-content: space-between;
`,c=n().div`
    display: flex;
    gap: 16px;
`,o=n().div`
    padding: 20px
`,s=n().div`
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;

    .table-row-light{
        background: red;
    }
`,d=n().div`
    display: flex ;
    justify-content: space-between
`,l=n().button`
    border-radius: 20px;
    background: #1890ff;
    color: #FFF;
    border: 1px solid #1890ff;
    padding: 5px 10px;
    height: 40px;
    display: block;

    a{
        color: #FFF;
    }
`,p=n().div`
    background: #FFF;
    padding: 20px;
    margin: 20px;
    border-radius: 16px;
`,u=n().div`
        button{
                border-radius: 100px;
            }
`,v=(n().button`
    border-radius: 20px;
    background: #1890ff;
    color: #FFF;
    border: 1px solid #1890ff;
    padding: 5px 10px;
    height: 40px;
    display: block;
`,n().div`
        display: flex;
        gap: 8px;
`),C=n().div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
    margin-left: 8px;
`,g=n().div`

    .table-row-inactive{
        background: #ccc;
    }

    .table-row-inactive:hover{
        background: #ccc;
    }
`,h=n().div`
    display: flex;
    gap: 8px;
`,b=n().div`
.revoke-button { 
    cursor: pointer;
    color: #1890ff;
  }
`,E=(n().div`
    display: flex;
    justify-content: flex-end;
`,n().div`
    color: red;
    font-weight: 700;
    font-size: 12px;
`),m=n().div`
.header{
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 18px;
      color: rgb(24, 144, 255);
    }
`,x=n().div`
    display: flex;
    gap: 8px;
    padding: 8px;
    flex-direction: column;
    height: 200px;
    overflow: scroll;
    padding-bottom: 80px;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper{
        margin-left: 0px;
    }
    .bottom{
        position: absolute;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #FFF;
    }
`},40117:(e,r,t)=>{t.d(r,{G7:()=>o,Gt:()=>c,Kh:()=>n,co:()=>a,yl:()=>i});const a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=/^[0-9]{8,14}$/,i=/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@pasarpolis.com|@pasarpolis.co.id|@ppibroker.com$/i,o=/^[a-zA-Z0-9_]*$/}}]);
//# sourceMappingURL=8663.327b9d84.chunk.js.map