"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7367],{69748:(t,s,e)=>{e.r(s),e.d(s,{default:()=>j});var a=e(1502),n=e(67816),o=e(24952),r=e(84029),l=e(55347),i=e(80878);const d=e.n(i)().div`
    .detail-policy-list{
        cursor: pointer;
    }
    .gutter-row-export-csv{
        display: flex;
        justify-content: flex-end;
    }
    .ant-pagination.ant-table-pagination{
        display: none !important;
    }
    .detail-agent-list{
        cursor: pointer;
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
`;var c=e(82740),p=e(70579);const{getTranslations:u,postTranslations:g,postTranslationsEntry:h}=c.A,m=n.Upload.Dragger,x=n.Select.Option,T=n.Input.TextArea;class y extends a.PureComponent{constructor(t){super(t),this.customRequest=t=>{let{file:s}=t;const{selectedLanguage:e}=this.state,{type:a}=s;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===a){const t=new FormData;t.append("file",s),this.props.postTranslations({body:t,params:{target:e}})}else n.message.error("Incorrect file type, please upload only .xlsx")},this.handleSubmit=t=>{t.preventDefault(),this.props.form.validateFields(((t,s)=>{t||this.props.postTranslationsEntry({body:s})}))},this.state={}}componentDidMount(){}handleSelect(t){this.setState({selectedLanguage:t})}render(){const{getFieldDecorator:t}=this.props.form,{loadingGetTranslations:s,errorGetTranslations:e,loadingPostTranslations:a,errorPostTranslations:o,getTranslationsStatus:i,postTranslationsStatus:c,postTranslationEntryLoading:u,postTranslationEntryError:g,postTranslationsEntryStatus:h}=this.props,{selectedLanguage:y}=this.state;return(0,p.jsx)(d,{children:(0,p.jsx)(l.A,{children:(0,p.jsxs)(r.A,{className:"layout-content",children:[(0,p.jsxs)(n.Row,{children:[(0,p.jsx)(n.Col,{xs:{span:24},lg:{span:12},children:(0,p.jsxs)(n.Form,{layout:"inline",onSubmit:this.handleSubmit,label:"Create new entry",children:[(0,p.jsx)(n.Form.Item,{children:t("master_string",{rules:[{required:!0,message:"Please input source text!"}]})((0,p.jsx)(T,{autosize:{minRows:2,maxRows:8},placeholder:"Source text"}))}),(0,p.jsx)(n.Form.Item,{children:t("translation_string",{rules:[{required:!0,message:"Please input your translated text!"}]})((0,p.jsx)(T,{autosize:{minRows:2,maxRows:8},placeholder:"Translated text"}))}),(0,p.jsx)(n.Form.Item,{children:(0,p.jsx)(n.Button,{type:"primary",htmlType:"submit",children:"Submit"})})]})}),(0,p.jsx)(n.Col,{xs:{span:24},lg:{span:6},children:(0,p.jsx)(n.Select,{showSearch:!0,style:{width:"100%"},placeholder:"Select a language",onSelect:t=>this.handleSelect(t),children:[{name:"Vietnam",code:"vie"},{name:"Thailand",code:"tha"}].map((t=>{let{code:s,name:e}=t;return(0,p.jsx)(x,{value:s,children:e},s)}))})}),(0,p.jsx)(n.Col,{xs:{span:24},lg:{span:6},children:(0,p.jsx)(n.Button,{style:{width:"100%"},disabled:!y,onClick:()=>this.props.getTranslations({params:{target:y}}),children:"Download Translations"})})]}),(0,p.jsxs)(n.Row,{style:{marginTop:"10px"},children:[!u&&h&&(0,p.jsx)(n.Alert,{style:{marginBottom:"10px",textAlign:"center"},message:g?"Failed posting translations entry":"Success posting translations entry",type:g?"error":"success"}),!a&&c&&(0,p.jsx)(n.Alert,{style:{marginBottom:"10px",textAlign:"center"},message:o?"Failed, please re-upload the file":"Your data was successfully uploaded",type:o?"error":"success"}),!s&&i&&(0,p.jsx)(n.Alert,{style:{marginBottom:"10px",textAlign:"center"},message:e?"Failed downloading translations":"Success downloading translations",type:e?"error":"success"}),(0,p.jsx)(m,{disabled:a||!y,name:"file",showUploadList:!1,multiple:!1,customRequest:t=>this.customRequest(t),children:y?(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(n.Icon,{type:"inbox"})}),(0,p.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"})]}):(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(n.Icon,{type:"info-circle"})}),(0,p.jsx)("p",{className:"ant-upload-text",children:"Select a language to upload"})]})})]}),(0,p.jsx)("iframe",{title:"Data Studio",width:"100%",height:"400",src:"https://datastudio.google.com/embed/reporting/4584b82d-5738-4234-82f3-ca07d9ee3759/page/2ifhB"})]})})})}}y.defaultProps={};const S=n.Form.create()(y),j=(0,o.connect)((t=>({postTranslationsStatus:t.Translations.postTranslationsStatus,getTranslationsStatus:t.Translations.getTranslationsStatus,postTranslationsEntryStatus:t.Translations.postTranslationsEntryStatus,loadingGetTranslations:t.Loading.GET_TRANSLATIONS,errorGetTranslations:t.Error.GET_TRANSLATIONS,loadingPostTranslations:t.Loading.POST_TRANSLATIONS,errorPostTranslations:t.Error.POST_TRANSLATIONS,postTranslationEntryLoading:t.Loading.POST_TRANSLATIONS_ENTRY,postTranslationEntryError:t.Error.POST_TRANSLATIONS_ENTRY})),{getTranslations:u,postTranslations:g,postTranslationsEntry:h})(S)}}]);
//# sourceMappingURL=7367.1d42af6d.chunk.js.map