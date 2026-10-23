(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9060],{59060:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(1502),a=r(67816),o=r(95916),i=(r(36690),r(65305),r(95159),r(49052)),l=r(80878),s=r.n(l);const c=s().div`
display:flex;
flex-direction: column;
  .contentView {
    border: 1px solid #000000;
    max-height: 450px;
    height: 100%;
    overflow-y: scroll;
  }
.top-pane {
  text-align: left;
}
.bottom-pane {
  width: 100%;
  height: 50vh;
}
.pane {
  height: 50vh;
  display: flex;
}
.editor-container {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: .5rem;
}
.editor-title {
  display: flex;
  align-item: middle;
  justify-content: space-between;
  background-color: hsl(225, 6%, 13%);
  color: white;
  padding: .5rem .5rem .5rem 1rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  .validation-field {
    width: 250px;
  }
}
.CodeMirror {
  height: 100% !important;
}
.code-mirror-wrapper {
  flex-grow: 1;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
}
.editor-form{
  width:100%;
}
.inputField {
  display:flex;
  align-items: center;
}
.labelName {
  padding-left: 10px;
  padding-right: 10px;
}
.code-mirror-wrapper {
  height:50vh;
}
.toogle-on, .toogle-off {
  background-color: #17ae0469;
  cursor: pointer;
}
`,d=s().div`
display:flex;
justify-content: space-between;
.ant-select {
  width:400px;
  margin-left: 10px;
}
.toogle-on, .toogle-off {
  background-color: #17ae0469;
  cursor: pointer;
}
`;var u=r(70579);function m(e){return e.map((e=>e.nested.length>0?e={...e,key:e.name,value:"",children:m(e.nested),nested:m(e.nested)}:{...e,key:e.name,value:"",children:e.nested}))}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?e.map(((e,r)=>{if(0===e.nested.length){const n=(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"main-text",children:e.name})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{className:"sub-text",children:["(",e.attribute_type,")"]})]});return(0,u.jsx)(a.TreeSelect.TreeNode,{value:`${t}[${r}].${e.code}`,title:n})}return(0,u.jsx)(a.TreeSelect.TreeNode,{title:e.name,value:`${t}.${e.code}`,children:f(e.nested,`${t}.${e.code}`,e.is_array)})})):e.map(((e,r)=>{if(0===e.nested.length){const r=(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"main-text",children:e.name})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{className:"sub-text",children:["(",e.attribute_type,")"]})]});return(0,u.jsx)(a.TreeSelect.TreeNode,{value:t?`${t}.${e.code}`:e.code,title:r})}return(0,u.jsx)(a.TreeSelect.TreeNode,{title:e.name,value:t?`${t}.${e.code}`:e.code,children:f(e.nested,e.code,e.is_array)})}))}function g(e,t){return e.filter((e=>{if(0===e.nested.length){if("object"===t){if(!e.is_array)return e}else if(e.is_array)return e}else if("object"===t){if(!e.is_array)return g(e.nested,t)}else if(e.is_array)return g(e.nested,t)}))}const{SHOW_ALL:h}=a.TreeSelect;function p(e){let{html:t,htmlUpdate:r,step2Data:l}=e;const s=m(l),[p,b]=(0,n.useState)("Preview"),[x,v]=(0,n.useState)([]),[w,k]=(0,n.useState)(""),[y,N]=(0,n.useState)([]),[S,C]=(0,n.useState)(!1);function T(e,t,n){r(n)}function A(e){const t=(new XMLSerializer).serializeToString(e);k(t),T(0,0,t)}(0,n.useEffect)((()=>{s.length>0&&0===y.length&&N(s)}),[s]);const M=(0,n.useCallback)((e=>{const t=e.target.innerHTML,r=(new DOMParser).parseFromString(t,"text/html"),n=(new XMLSerializer).serializeToString(r);k(n),T(0,0,n)}),[w]),j=function(){if(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""){C(!1);const e=document.querySelectorAll(".contentView")[0];e.hasAttribute("contenteditable")&&(e.removeAttribute("contenteditable"),z("off"))}else T(0,0,w);v([])},E=(e,t)=>{switch((0,o.get)(e,"dataset.att","").split("-")[0]){case"normalAttribute":e.innerHTML=`{{${t}}}`,document.getElementsByClassName("product-config-tree-select-id")[0].click();break;case"tableColumn":{const r=t,n=e.children[0];for(;n.hasChildNodes();)n.removeChild(n.firstChild);const a=document.createElement("tr");r.forEach((e=>{const t=a.insertCell(-1),r=e.split(".");t.innerHTML=r[r.length-1],t.setAttribute("class","text-center w10")}));const o=document.createElement("tr");r.forEach((e=>{const t=o.insertCell(-1),r=e.split(".");t.innerHTML=`{{item.${r[r.length-1]}}}`,t.setAttribute("class","w20")})),n.appendChild(a),n.appendChild(o)}break;case"table":if(t&&t.length>0){const r=t,n=r.filter((e=>!e.includes("[")));n.length>0&&(e.innerText=function(e){let t="",r="";return e.forEach((e=>{t?(t+=`{% for itr in ${r}.${e} %}`,r=`${r}.${e}`):(t+=`{% for item in ${e} %}`,r="item")})),t}(n[0].split(".")));const a=r.filter((e=>e.includes("["))),i=function(e){const t=[];return function e(r){r.forEach(((r,n)=>{0!==r.childNodes.length&&("tableColumn"===(0,o.get)(r,"dataset.att","").split("-")[0]?t.push(r):e(r.childNodes))}))}(e),t}(e.parentNode.childNodes);i.forEach((e=>{E(e,a)})),document.getElementsByClassName("product-config-tree-select-id")[0].click()}break;default:return new Error}},z=e=>{const r=(new DOMParser).parseFromString(t,"text/html");if("on"===e){r.querySelectorAll(".toogle-off").forEach((e=>{const t=e.getAttribute("class").replace("toogle-off","toogle-on");e.setAttribute("class",t)})),A(r)}else if("off"===e){let e=r.querySelectorAll(".toogle-on");e.forEach((e=>{const t=e.getAttribute("class").replace("toogle-on","toogle-off");e.setAttribute("class",t)})),e=r.querySelectorAll(".active-attribute"),e.forEach((e=>{const t=e.getAttribute("class").replace("active-attribute","toogle-off");e.setAttribute("class",t)})),A(r)}};return(0,u.jsx)(c,{children:(0,u.jsxs)("div",{className:"editor-container",children:[(0,u.jsxs)("div",{className:"editor-title",children:[(0,u.jsx)(a.Button,{type:"primary",onClick:function(){b("html"===p?"preview":"html")},children:"html"===p?"Preview":"HTML"}),(0,u.jsx)(d,{children:"html"!==p&&(0,u.jsxs)(u.Fragment,{children:[S?(0,u.jsx)(a.Button,{type:"primary",onClick:()=>j(!0),children:"Save"}):(0,u.jsx)(a.Button,{type:"primary",onClick:()=>{C(!0);const e=document.querySelectorAll(".contentView")[0],t=document.createAttribute("contentEditable",!0);e.setAttributeNode(t),z("on")},children:"Edit PDF"}),(0,u.jsx)(a.TreeSelect,{className:"product-config-tree-select-id",showSearch:!0,allowClear:!0,treeCheckable:!0,showCheckedStrategy:h,value:x,onChange:e=>{const r=(new DOMParser).parseFromString(t,"text/html"),n=r.getElementsByClassName("active-attribute")[0];v(e);n&&(E(n,e),A(r))},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Select Attribute for PDF",treeDefaultExpandAll:!0,children:f(y)})]})})]}),"html"===p?(0,u.jsx)(i.Controlled,{onBeforeChange:T,value:t,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,theme:"material",mode:"xml",lineNumbers:!0}}):(0,u.jsx)("div",{className:"contentView",onInput:S?M:null,onClick:S?e=>{v([]);const r=e.target.dataset;if(w&&j(),(0,o.size)(r)>0){(0===document.getElementsByClassName("active-attribute").length||(0,o.size)(r)>0)&&document.getElementsByClassName("product-config-tree-select-id")[0].click();let e=[];switch((0,o.get)(r,"att","").split("-")[0]){case"normalAttribute":e=g(s,"object");break;case"table":e=g(s,"array");break;default:Error("Not a data attribute")}N(e)}else{const e=(new DOMParser).parseFromString(t,"text/html"),r=e.getElementsByClassName("active-attribute")[0];if(r){let t=r.getAttribute("class").split(" ");t=t.filter((e=>"active-attribute"!==e));const n=t.join(" ");r.setAttribute("class",n),A(e)}}!function(e,t,r){const n=e.target.dataset;if((0,o.size)(n)>0){const n=(new DOMParser).parseFromString(t,"text/html"),a=n.querySelectorAll(".active-attribute")[0];if(a){let e=a.getAttribute("class").split(" ");e=e.filter((e=>"active-attribute"!==e));const t=e.join(" ");a.setAttribute("class",t)}const o=n.querySelectorAll(`[data-att=${e.target.dataset.att}]`)[0];if(o.isEqualNode(e.target)){const e=o.getAttribute("class").split(" ");e.push("active-attribute");const t=e.join(" ");o.setAttribute("class",t)}r(n)}}(e,t,A)}:null,dangerouslySetInnerHTML:{__html:t}})]})})}},95159:(e,t,r)=>{!function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",(function(n,a){var o,i,l=n.indentUnit,s={},c=a.htmlMode?t:r;for(var d in c)s[d]=c[d];for(var d in a)s[d]=a[d];function u(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next();return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(g("atom","]]>")):null:e.match("--")?r(g("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(h(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=g("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=m,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function m(e,t){var r=e.next();if(">"==r||"/"==r&&e.eat(">"))return t.tokenize=u,o=">"==r?"endTag":"selfcloseTag","tag bracket";if("="==r)return o="equals",null;if("<"==r){t.tokenize=u,t.state=v,t.tagName=t.tagStart=null;var n=t.tokenize(e,t);return n?n+" tag error":"tag error"}return/[\'\"]/.test(r)?(t.tokenize=f(r),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function f(e){var t=function(t,r){for(;!t.eol();)if(t.next()==e){r.tokenize=m;break}return"string"};return t.isInAttribute=!0,t}function g(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=u;break}r.next()}return e}}function h(e){return function(t,r){for(var n;null!=(n=t.next());){if("<"==n)return r.tokenize=h(e+1),r.tokenize(t,r);if(">"==n){if(1==e){r.tokenize=u;break}return r.tokenize=h(e-1),r.tokenize(t,r)}}return"meta"}}function p(e,t,r){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=r,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function b(e){e.context&&(e.context=e.context.prev)}function x(e,t){for(var r;;){if(!e.context)return;if(r=e.context.tagName,!s.contextGrabbers.hasOwnProperty(r)||!s.contextGrabbers[r].hasOwnProperty(t))return;b(e)}}function v(e,t,r){return"openTag"==e?(r.tagStart=t.column(),w):"closeTag"==e?k:v}function w(e,t,r){return"word"==e?(r.tagName=t.current(),i="tag",S):s.allowMissingTagName&&"endTag"==e?(i="tag bracket",S(e,t,r)):(i="error",w)}function k(e,t,r){if("word"==e){var n=t.current();return r.context&&r.context.tagName!=n&&s.implicitlyClosed.hasOwnProperty(r.context.tagName)&&b(r),r.context&&r.context.tagName==n||!1===s.matchClosing?(i="tag",y):(i="tag error",N)}return s.allowMissingTagName&&"endTag"==e?(i="tag bracket",y(e,t,r)):(i="error",N)}function y(e,t,r){return"endTag"!=e?(i="error",y):(b(r),v)}function N(e,t,r){return i="error",y(e,t,r)}function S(e,t,r){if("word"==e)return i="attribute",C;if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,a=r.tagStart;return r.tagName=r.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(n)?x(r,n):(x(r,n),r.context=new p(r,n,a==r.indented)),v}return i="error",S}function C(e,t,r){return"equals"==e?T:(s.allowMissing||(i="error"),S(e,t,r))}function T(e,t,r){return"string"==e?A:"word"==e&&s.allowUnquoted?(i="string",S):(i="error",S(e,t,r))}function A(e,t,r){return"string"==e?A:S(e,t,r)}return u.isInText=!0,{startState:function(e){var t={tokenize:u,state:v,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;o=null;var r=t.tokenize(e,t);return(r||o)&&"comment"!=r&&(i=null,t.state=t.state(o||r,e,t),i&&(r="error"==i?r+" error":i)),r},indent:function(t,r,n){var a=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l;if(a&&a.noIndent)return e.Pass;if(t.tokenize!=m&&t.tokenize!=u)return n?n.match(/^(\s*)/)[0].length:0;if(t.tagName)return!1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(r))return 0;var o=r&&/^<(\/)?([\w_:\.-]*)/.exec(r);if(o&&o[1])for(;a;){if(a.tagName==o[2]){a=a.prev;break}if(!s.implicitlyClosed.hasOwnProperty(a.tagName))break;a=a.prev}else if(o)for(;a;){var i=s.contextGrabbers[a.tagName];if(!i||!i.hasOwnProperty(o[2]))break;a=a.prev}for(;a&&a.prev&&!a.startOfLine;)a=a.prev;return a?a.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==T&&(e.state=S)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],r=e.context;r;r=r.prev)t.push(r.tagName);return t.reverse()}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}(r(26246))},36690:()=>{},65305:()=>{}}]);
//# sourceMappingURL=9060.b7c80ff3.chunk.js.map