"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[627],{50627:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var r=s(8634),a=s(80878),i=s.n(a);const o=i().div`
  .buttons {
    display: flex;
    width: fit-content;
    gap: 0.5rem;
  }
`,l=i().div`
  box-sizing: border-box;
  border: 2px solid ${e=>e.theme.lightGrey};
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  .tag {
    margin-left: calc(100% - 72px);
  }
`;var n=s(67816),c=s(88962),d=s(94528),u=s(1502),p=s(68598),E=s(66756),h=s(69732),x=s(73462),D=s(56780),g=s(77980),f=s(33097),m=s.n(f),v=s(73079),j=s(70579);const S=e=>{const{presetId:t}=(0,u.useMemo)((()=>e.match.params),[e.match.params]),s=(0,c.useHistory)(),[a,i]=(0,u.useState)(""),[{getPresetDetailsData:x},f]=(0,E.NF)(),[S]=(0,h.useLoaderContextValue)(),[P,y]=(0,u.useState)(!1),[,R]=(0,E.WK)(),b=(0,u.useMemo)((()=>{const{GET_PRESET_DETAILS_LOADER:e,DELETE_PRESET_LOADER:t}=S;return e||t}),[S]),[{GET_PRESET_DETAILS_ERROR:T,DELETE_PRESET_ERROR:_,getPresetDetailsStatus:k,deletePresetStatus:C,getPresetDetailsErrorData:A,deletePresetErrorData:w},L]=(0,h.useErrorContextValue)();(0,u.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("providerCode");e&&i(e)}),[i]),(0,u.useEffect)((()=>{"success"===C?((0,g.D)("success","Preset Deleted Successfully"),L((0,h.resetError)({deletePresetStatus:""})),s.push(v.bW)):_&&C&&((0,g.D)("error",m()(w,"message","failed to delete preset, try again")),L((0,h.resetError)({deletePresetStatus:""})))}),[_,C,w,L,s]),(0,u.useEffect)((()=>{"success"===k?L((0,h.resetError)({getPresetDetailsStatus:""})):T&&k&&((0,g.D)("error",m()(A,"message","failed to fetch preset details")),L((0,h.resetError)({getPresetDetailsStatus:""})))}),[T,k,A,L]);const B=(0,u.useMemo)((()=>(null===x||void 0===x?void 0:x.preset_uuid)&&(0,D.bS)(x)),[x]),M=(0,u.useMemo)((()=>!0===(null===x||void 0===x?void 0:x.is_active)),[x]);return(0,u.useEffect)((()=>{f({uuid:t})}),[t,f]),(0,j.jsxs)(r.A,{children:[(0,j.jsx)("h2",{children:"Preset Details"}),(0,j.jsx)(d.A,{isSpinning:b,children:(0,j.jsxs)(o,{children:[(0,j.jsxs)(n.Row,{type:"flex",justify:"space-between",children:[(0,j.jsx)("div",{children:(0,j.jsx)(n.Button,{onClick:()=>s.goBack(),children:"Back"})}),(0,j.jsxs)("div",{className:"buttons",children:[M&&(0,j.jsx)(n.Button,{type:"danger",onClick:()=>y(!0),children:"Delete"}),(0,j.jsx)(n.Button,{type:"primary",onClick:()=>s.push((0,v.N5)({presetId:t,providerCode:a})),children:"Duplicate"}),M&&(0,j.jsx)(n.Button,{type:"primary",onClick:()=>s.push((0,v.$M)(t)),children:"Edit"})]})]}),(0,j.jsxs)(l,{children:[(null===B||void 0===B?void 0:B.formData)&&(M?(0,j.jsx)(n.Tag,{className:"tag",color:"green",children:"Active"}):(0,j.jsx)(n.Tag,{className:"tag",color:"red",children:"Not Active"})),(null===B||void 0===B?void 0:B.formData)&&(0,j.jsx)(p.A,{presetData:B.formData,selectData:B.selectData})]}),(0,j.jsx)(n.Modal,{visible:P,onCancel:()=>y(!1),onOk:()=>{R({uuid:t}),y(!1)},children:"Are you sure you want to delete this preset?"})]})})]})},P=e=>(0,j.jsx)(x.gh,{children:(0,j.jsx)(S,{...e})})}}]);
//# sourceMappingURL=627.765fa504.chunk.js.map