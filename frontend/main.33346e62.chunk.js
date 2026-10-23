(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[32],{10:function(e,t,a){"use strict";const n={GET_CRACKSCREEN_BRAND_MODELS_REQUEST:"GET_CRACKSCREEN_BRAND_MODELS_REQUEST",GET_CRACKSCREEN_BRAND_MODELS_SUCCESS:"GET_CRACKSCREEN_BRAND_MODELS_SUCCESS",GET_CRACKSCREEN_BRAND_MODELS_FAILURE:"GET_CRACKSCREEN_BRAND_MODELS_FAILURE",GET_CRACKSCREEN_PREMIUM_REQUEST:"GET_CRACKSCREEN_PREMIUM_REQUEST",GET_CRACKSCREEN_PREMIUM_SUCCESS:"GET_CRACKSCREEN_PREMIUM_SUCCESS",GET_CRACKSCREEN_PREMIUM_FAILURE:"GET_CRACKSCREEN_PREMIUM_FAILURE",GET_CRACKSCREEN_COVERAGE_PERIOD_REQUEST:"GET_CRACKSCREEN_COVERAGE_PERIOD_REQUEST",GET_CRACKSCREEN_COVERAGE_PERIOD_SUCCESS:"GET_CRACKSCREEN_COVERAGE_PERIOD_SUCCESS",GET_CRACKSCREEN_COVERAGE_PERIOD_FAILURE:"GET_CRACKSCREEN_COVERAGE_PERIOD_FAILURE",CREATE_CRACKSCREEN_QUOTE_REQUEST:"CREATE_CRACKSCREEN_QUOTE_REQUEST",CREATE_CRACKSCREEN_QUOTE_SUCCESS:"CREATE_CRACKSCREEN_QUOTE_SUCCESS",CREATE_CRACKSCREEN_QUOTE_FAILURE:"CREATE_CRACKSCREEN_QUOTE_FAILURE",CALCULATE_CRACKSCREEN_QUOTE_COUPON_REQUEST:"CALCULATE_CRACKSCREEN_QUOTE_COUPON_REQUEST",CALCULATE_CRACKSCREEN_QUOTE_COUPON_SUCCESS:"CALCULATE_CRACKSCREEN_QUOTE_COUPON_SUCCESS",CALCULATE_CRACKSCREEN_QUOTE_COUPON_FAILURE:"CALCULATE_CRACKSCREEN_QUOTE_COUPON_FAILURE",RESET_CRACKSCREEN_STATES:"RESET_CRACKSCREEN_STATES",getCrackscreenBrandModels:e=>({type:n.GET_CRACKSCREEN_BRAND_MODELS_REQUEST,payload:e}),getCrackscreenPremium:e=>({type:n.GET_CRACKSCREEN_PREMIUM_REQUEST,payload:e}),getCrackscreenCoveragePeriod:e=>({type:n.GET_CRACKSCREEN_COVERAGE_PERIOD_REQUEST,payload:e}),createCrackScreenQuote:e=>({type:n.CREATE_CRACKSCREEN_QUOTE_REQUEST,payload:e}),calculateCrackScreenCoupon:e=>({type:n.CALCULATE_CRACKSCREEN_QUOTE_COUPON_REQUEST,payload:e}),resetCrackscreenRedux:e=>({type:n.RESET_CRACKSCREEN_STATES,payload:e})};t.a=n},105:function(e,t,a){"use strict";a.d(t,"c",(function(){return ke})),a.d(t,"b",(function(){return Ie})),a.d(t,"a",(function(){return Se}));var n=a(42),o=a(196),i=a.n(o),r=a(90),s=a(194),c=a(203),l=a(106),d=a(67),p=a(195),E=a.n(p),_=a(77),h=a(48);const u=Object(_.a)(),b={collapsed:window.innerWidth<1220,view:Object(h.b)(window.innerWidth),height:window.innerHeight,openDrawer:!1,openKeys:u,current:u};const g=new(a(56).a),C=Object(_.b)();C.language&&g.set("language",C.language,{path:"/"});const m={options:[{languageId:"indonesian",locale:"id",text:"Indonesian",symbol:"ID"},{languageId:"english",locale:"en",text:"English",symbol:"EN"}]};function O(e){let t=m.options[0],a=g.get("language");return t="en"===a?m.options[1]:m.options[0],m.options.forEach((a=>{a.languageId===e&&(t=a)})),t}const R={CHANGE_LANGUAGE:"CHANGE_LANGUAGE",ACTIVATE_LANG_MODAL:"ACTIVATE_LANG_MODAL",switchActivation:()=>({type:R.ACTIVATE_LANG_MODAL}),changeLanguage:e=>({type:R.CHANGE_LANGUAGE,language:e})};var y=R;const A={isActivated:!1,language:O(m.defaultLanguage||"english")};const v={MAKE_PAYMENT:"MAKE_PAYMENT",MODAL_PAYMENT:"MODAL_PAYMENT",makePayment:e=>({type:v.MAKE_PAYMENT,payload:e}),modalPayment:e=>({type:v.MODAL_PAYMENT,payload:e})};var S=v;const j={isPaymentModalOpen:!1};const f={UPDATE_STEP:"UPDATE_STEP",updateStep:e=>({type:f.UPDATE_STEP,payload:e})};var T=f;const x={data:{}};const w={QUOTE_DETAILS:"QUOTE_DETAILS",QUOTE_DETAILS_ERROR:"QUOTE_DETAILS_ERROR",quoteDetails:e=>({type:w.QUOTE_DETAILS,payload:e}),quoteDetailsError:e=>({type:w.QUOTE_DETAILS_ERROR,payload:e})};var L=w;const U={data:{},message:""};const P={ADD_FILE_LISTS:"ADD_FILE_LISTS",addFileLists:e=>({type:P.ADD_FILE_LISTS,payload:e})};var N=P;const D={fileLists:[]};var k=a(57);const I={uploadData:[],uploadMessage:"",applyFormStatus:""};var G=a(10);const K={quoteData:{}};const M={UPDATE_LOADING_STATES:"UPDATE_LOADING_STATES",RESET_LOADING_STATES:"RESET_LOADING_STATES",resetLoadingRedux:e=>({type:M.RESET_LOADING_STATES,payload:e})};var F=M;const Q={};const z={UPDATE_ERROR_STATES:"UPDATE_ERROR_STATES",RESET_ERROR_STATES:"RESET_ERROR_STATES",resetErrorRedux:e=>({type:z.RESET_ERROR_STATES,payload:e})};var V=z;const B={};var H={App:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.COLLPSE_CHANGE:return{...e,collapsed:!e.collapsed};case h.a.COLLPSE_OPEN_DRAWER:return{...e,openDrawer:!e.openDrawer};case h.a.TOGGLE_ALL:if(e.view!==t.view||t.height!==e.height){const a=t.height?t.height:e.height;return{...e,collapsed:t.collapsed,view:t.view,height:a}}break;case h.a.CHANGE_OPEN_KEYS:return{...e,openKeys:t.openKeys};case h.a.CHANGE_CURRENT:return{...e,current:t.current};case h.a.CLOSE_ALL:return{...e,current:[],openKeys:[]};case h.a.SHOW_OVERLAY:return{...e,overlay:t.payload};default:return e}return e},LanguageSwitcher:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.ACTIVATE_LANG_MODAL:return e.set("isActivated",!e.get("isActivated"));case y.CHANGE_LANGUAGE:let a="english";return"id"===t.language&&(a="indonesian"),{...e,language:O(a)};default:return e}},Payment:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.MAKE_PAYMENT:case S.MODAL_PAYMENT:return{...e,data:{...t.payload}};default:return e}},quoteDetails:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.QUOTE_DETAILS:return{...e,data:{...t.data},message:""};case L.QUOTE_DETAILS_ERROR:return{...e,quoteDetailsError:{...t.payload,message:t.message}};default:return e}},step:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type===T.UPDATE_STEP?{...e,data:{...t.payload}}:e},Upload:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;return t===N.ADD_FILE_LISTS?[...e.fileLists]:e},Career:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.a.RESET_DATA_CAREER:if(t.payload&&Array.isArray(t.payload)){let a={};return t.payload.forEach((e=>{a[e]=I[e]})),{...e,...a}}return{...e};case k.a.UPLOAD_DOC_SUCCESS:case k.a.UPLOAD_DOC_ERROR:return{...e,uploadData:t.data,uploadMessage:t.message};case k.a.APPLY_DOC_SUCCESS:case k.a.APPLY_DOC_ERROR:return{...e,applyFormStatus:t.message};default:return e}},Crackscreen:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;const{payload:a}=t;switch(t.type){case G.a.GET_CRACKSCREEN_BRAND_MODELS_SUCCESS:case G.a.GET_CRACKSCREEN_BRAND_MODELS_FAILURE:return{...e,phoneBrandModels:t.data};case G.a.GET_CRACKSCREEN_PREMIUM_SUCCESS:case G.a.GET_CRACKSCREEN_PREMIUM_FAILURE:return{...e,premiumList:t.data};case G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_SUCCESS:case G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_FAILURE:return{...e,coveragePeriodList:t.data};case G.a.CREATE_CRACKSCREEN_QUOTE_SUCCESS:case G.a.CREATE_CRACKSCREEN_QUOTE_FAILURE:return{...e,quoteData:t.data};case G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_SUCCESS:case G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_FAILURE:return{...e,discountAmount:t.discountAmount,calculateCrackscreenCouponMsg:t.message,applyCouponSuccess:t.success};case G.a.RESET_CRACKSCREEN_STATES:if(a&&Array.isArray(a)){let t={};return a.forEach((e=>{t[e]=K[e]})),{...e,...t}}return{...e};default:return e}},Loading:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;const{payload:a}=t;switch(t.type){case F.UPDATE_LOADING_STATES:return{...e,...t.target};case F.RESET_LOADING_STATES:if(a&&Array.isArray(a)){let t={};return a.forEach((e=>{t[e]=Q[e]})),{...e,...t}}return{...e};default:return e}},Error:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;const{payload:a}=t;switch(t.type){case V.UPDATE_ERROR_STATES:return{...e,...t.target};case V.RESET_ERROR_STATES:if(a&&Array.isArray(a)){let t={};return a.forEach((e=>{t[e]=B[e]})),{...e,...t}}return{...e};default:return e}}},q=a(5),Y=a(158),$=a(65),W=a.n($);const J=Y.a.url;var X={getUploadDocs:e=>W.a.post(J.uploadDoc,e,{headers:{"Content-Type":"multipart/form-data"}}),applyJobapi:e=>W.a.post(J.applyJobapi,e,{headers:{"Content-Type":"application/json"}})},Z=a(39),ee=a.n(Z);const{UPLOAD_DOC_REQUEST:te,UPLOAD_DOC_SUCCESS:ae,UPLOAD_DOC_ERROR:ne,APPLY_DOC_REQUEST:oe,APPLY_DOC_SUCCESS:ie,APPLY_DOC_ERROR:re}=k.a;function*se(){yield Object(q.e)(te,(function*(e){try{let t=yield Object(q.b)(X.getUploadDocs,e.payload);if(201===t.status&&t.data){let e={status:"done",name:ee()(t,"data.data.filename",""),url:t.data.data.url};yield Object(q.d)({type:ae,data:e,message:"success"})}else yield Object(q.d)({type:ne,data:[],message:"error"})}catch(t){yield Object(q.d)({type:ne,data:[],message:"error"})}}))}function*ce(){yield Object(q.e)(oe,(function*(e){try{201===(yield Object(q.b)(X.applyJobapi,e.payload)).status?yield Object(q.d)({type:ie,message:"success"}):yield Object(q.d)({type:re,message:"error"})}catch(t){yield Object(q.d)({type:re,message:"error"})}}))}function*le(){yield Object(q.a)([Object(q.c)(se),Object(q.c)(ce)])}var de=a(93),pe=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e;return Object.keys(t).forEach((e=>a=a.replace(`{${e}}`,t[e]))),a},Ee=e=>{let{url:t="",query:a={},params:n={}}=e;const o=Object(de.a)(a),i=`${pe(t,n)}${o}`;return W.a.get(i).catch((e=>{throw e.response?e.response:e})).then((e=>e))},_e=e=>{let{url:t="",query:a={},payload:n={},params:o={}}=e;const i=Object(de.a)(a),r=`${pe(t,o)}${i}`;return W.a.post(r,n).catch((e=>{throw e.response?e.response:e})).then((e=>e))},he={getMasterData:`${window.location.origin}/api/v1/master/tags/{tagName}/`,getPhoneModels:`${window.location.origin}/api/v1/master/phone-models/`,getCrackScreenCoveragePeriod:`${window.location.origin}/api/v1/master/tags/crack_screen_ultra_coverage_period/`,getCrackScreenCoveragePeriodPremium:`${window.location.origin}/api/v1/master/tags/crack_screen_ultra_premium_v2/`,getCrackScreenPremium:`${window.location.origin}/api/v1/master/tags/crack_screen_ultra_premium/`,createCrackScreenQuote:`${window.location.origin}/api/quote/create-crack-screen-ultra/`,validateCreateQuote:`${window.location.origin}/api/v1/master-quote/validate-create-quote/`,applyQuoteCoupon:`${window.location.origin}/api/v1/master-quote/{quoteId}/apply-coupon/`,calculateCoupon:`${window.location.origin}/api/v1/master-quote/calculate-coupon/`};function*ue(){yield Object(q.e)(G.a.GET_CRACKSCREEN_BRAND_MODELS_REQUEST,(function(e){let{payload:t}=e;return function*(){try{let e=yield Object(q.b)(Ee,{...t,url:he.getPhoneModels});[200,201].includes(e.status)?yield Object(q.d)({type:G.a.GET_CRACKSCREEN_BRAND_MODELS_SUCCESS,data:e.data,message:"success"}):yield Object(q.d)({type:G.a.GET_CRACKSCREEN_BRAND_MODELS_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}catch(e){yield Object(q.d)({type:G.a.GET_CRACKSCREEN_BRAND_MODELS_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}}()}))}function*be(){yield Object(q.e)(G.a.GET_CRACKSCREEN_PREMIUM_REQUEST,(function(e){let{payload:t}=e;return function*(){try{let e=yield Object(q.b)(Ee,{...t,url:he.getMasterData});[200,201].includes(e.status)?yield Object(q.d)({type:G.a.GET_CRACKSCREEN_PREMIUM_SUCCESS,data:e.data,message:"success"}):yield Object(q.d)({type:G.a.GET_CRACKSCREEN_PREMIUM_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}catch(e){yield Object(q.d)({type:G.a.GET_CRACKSCREEN_PREMIUM_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}}()}))}function*ge(){yield Object(q.e)(G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_REQUEST,(function(e){let{payload:t}=e;return function*(){try{let e=yield Object(q.b)(Ee,{...t,url:he.getMasterData});[200,201].includes(e.status)?yield Object(q.d)({type:G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_SUCCESS,data:e.data,message:"success"}):yield Object(q.d)({type:G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}catch(e){yield Object(q.d)({type:G.a.GET_CRACKSCREEN_COVERAGE_PERIOD_FAILURE,data:[],message:ee()(e,"data.error","Failed")})}}()}))}function*Ce(){yield Object(q.e)(G.a.CREATE_CRACKSCREEN_QUOTE_REQUEST,(function(e){let{payload:t}=e;return function*(){try{let e=yield Object(q.b)(_e,{...t,url:he.validateCreateQuote});[200,201].includes(e.status)?yield Object(q.d)({type:G.a.CREATE_CRACKSCREEN_QUOTE_SUCCESS,data:e.data,message:"success"}):yield Object(q.d)({type:G.a.CREATE_CRACKSCREEN_QUOTE_FAILURE,data:{},message:ee()(e,"data.error","Failed")})}catch(e){yield Object(q.d)({type:G.a.CREATE_CRACKSCREEN_QUOTE_FAILURE,data:{},message:ee()(e,"data.error","Failed")})}}()}))}function*me(){yield Object(q.e)(G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_REQUEST,(function(e){let{payload:t}=e;return function*(){try{let e=yield Object(q.b)(_e,{...t,url:he.calculateCoupon});if([200,201].includes(e.status)){const t=ee()(e,"data.discount_amount");yield Object(q.d)({type:G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_SUCCESS,discountAmount:t,message:"Kupon berhasil digunakan",success:!0})}else yield Object(q.d)({type:G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_FAILURE,discountAmount:0,message:"Kupon gagal digunakan",success:!1})}catch(e){yield Object(q.d)({type:G.a.CALCULATE_CRACKSCREEN_QUOTE_COUPON_FAILURE,discountAmount:0,message:"Kupon gagal digunakan",success:!1})}}()}))}function*Oe(){yield Object(q.a)([Object(q.c)(ue),Object(q.c)(be),Object(q.c)(ge),Object(q.c)(Ce),Object(q.c)(me)])}function*Re(){yield Object(q.e)("*",(function*(e){const{type:t}=e,a=/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(t);if(!a)return;const[,n,o]=a;yield Object(q.d)({type:F.UPDATE_LOADING_STATES,target:{[n]:"REQUEST"===o}})}))}function*ye(){yield Object(q.a)([Object(q.c)(Re)])}function*Ae(){yield Object(q.e)("*",(function*(e){const{type:t}=e,a=/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(t);if(!a)return;const[,n,o]=a;yield Object(q.d)({type:V.UPDATE_ERROR_STATES,target:{[n]:"FAILURE"===o}})}))}function*ve(){yield Object(q.a)([Object(q.c)(Ae)])}const Se=i()(),je=Object(c.a)(),fe=Object(r.b)(Se),Te=[s.a,je,fe],xe=Object(d.createBlacklistFilter)("PersonalDetail",["getPersonalDetailError"]),we=Object(d.createBlacklistFilter)("UserProfile",["getUserProfileError"]),Le=Object(d.createBlacklistFilter)("quoteDetails",["quoteDetailsError"]),Ue=Object(d.createBlacklistFilter)("Career",["applyFormStatus","uploadData","uploadMessage"]),Pe=Object(d.createBlacklistFilter)("Crackscreen",[]),Ne=Object(d.createBlacklistFilter)("App",[]),De={key:"root",storage:E.a,blacklist:["Payment","Crackscreen","App"],transforms:[xe,we,Le,Ue,Pe,Ne]},ke=Object(n.e)(Object(l.persistReducer)(De,Object(n.c)({...H,router:r.c})),Object(n.d)(Object(n.a)(...Te))),Ie=Object(l.persistStore)(ke);je.run((function*(e){yield Object(q.a)([le(),Oe(),ye(),ve()])}))},134:function(e,t,a){"use strict";a.r(t);var n=a(178),o=a.n(n);a.d(t,"CaretDownFill",(function(){return o.a}));var i=a(179),r=a.n(i);a.d(t,"ArrowRightOutline",(function(){return r.a}));var s=a(180),c=a.n(s);a.d(t,"RightOutline",(function(){return c.a}));var l=a(181),d=a.n(l);a.d(t,"CloseOutline",(function(){return d.a}));var p=a(182),E=a.n(p);a.d(t,"ArrowLeftOutline",(function(){return E.a}));var _=a(183),h=a.n(_);a.d(t,"LoadingOutline",(function(){return h.a}));var u=a(184),b=a.n(u);a.d(t,"QuestionCircleOutline",(function(){return b.a}));var g=a(185),C=a.n(g);a.d(t,"CheckCircleOutline",(function(){return C.a}));var m=a(186),O=a.n(m);a.d(t,"CloseCircleOutline",(function(){return O.a}))},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));const n=new(a(56).a);function o(){localStorage.clear();const e=n.getAll();for(let t in e)n.remove(t,{path:"/"})}},158:function(e,t,a){"use strict";t.a={url:{getBrand:"https://pasarpolis.io//api/integration-layer/vehicle_brands/",getModel:"https://pasarpolis.io//api/integration-layer/vehicle_models/",checkPaymentStatus:"https://pasarpolis.io//api/v1/master-payment/check-payment-status/",getArea:"https://pasarpolis.io//api/integration-layer/list_area_codes/",getModelDetailsFromID:"https://pasarpolis.io//api/integration-layer/vehicle_models/",getLippoProvince:"https://pasarpolis.io//api/v1/master/tags/lippo-province-list/",getTravelokaAirports:"https://pasarpolis.io//api/v1/master/airports/",submitLead:"https://pasarpolis.io//api/v1/leads/",validateQuote:"https://pasarpolis.io//api/quote/validate-quote/",chatbotMatchIntent:"https://pasarpolis.io//api/chatbot/match/",getCrackScreenCoveragePeriod:"https://pasarpolis.io//api/v1/master/tags/crack_screen_ultra_coverage_period/",getCrackScreenCoveragePeriodAmount:"https://pasarpolis.io//api/v1/master/tags/crack_screen_ultra_premium_v2/",getCrackScreenPremium:"https://pasarpolis.io//api/v1/master/tags/crack_screen_ultra_premium/",createTiaVisitorEntry:"https://pasarpolis.io//api/v1/career/tia-visitor/",uploadDoc:"https://pasarpolis.io//api/v1/career/applicant-docs/",applyJobapi:"https://pasarpolis.io//api/v1/career/apply/"}}},187:function(e,t,a){"use strict";var n=a(0);const o=Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(4),a.e(8),a.e(13)]).then(a.bind(null,637)))),i={payment:{success:Object(n.lazy)((()=>a.e(20).then(a.bind(null,641)))),failure:Object(n.lazy)((()=>a.e(25).then(a.bind(null,645)))),pending:Object(n.lazy)((()=>a.e(24).then(a.bind(null,646)))),processing:Object(n.lazy)((()=>a.e(31).then(a.bind(null,647))))},staticPage:{career:Object(n.lazy)((()=>Promise.all([a.e(5),a.e(11),a.e(2),a.e(21)]).then(a.bind(null,640)))),jobVacancy:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(2),a.e(23)]).then(a.bind(null,635)))),jobCategory:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(2),a.e(22)]).then(a.bind(null,648)))),jobDescription:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(5),a.e(12)]).then(a.bind(null,636)))),careerForm:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(4),a.e(7),a.e(2),a.e(28)]).then(a.bind(null,649)))),claim:Object(n.lazy)((()=>a.e(17).then(a.bind(null,639)))),about:Object(n.lazy)((()=>a.e(16).then(a.bind(null,638)))),faq:Object(n.lazy)((()=>Promise.all([a.e(6),a.e(18)]).then(a.bind(null,650)))),terms:Object(n.lazy)((()=>a.e(15).then(a.bind(null,651)))),privacy:Object(n.lazy)((()=>a.e(19).then(a.bind(null,642)))),dictionary:Object(n.lazy)((()=>a.e(14).then(a.bind(null,652)))),maintenance:Object(n.lazy)((()=>a.e(29).then(a.bind(null,653)))),document:Object(n.lazy)((()=>Promise.all([a.e(9),a.e(10)]).then(a.bind(null,654))))},greetings:{greeting:Object(n.lazy)((()=>a.e(26).then(a.bind(null,643))))}},r={safedrive:Object(n.lazy)((()=>a.e(30).then(a.bind(null,644)))),appfaq:Object(n.lazy)((()=>Promise.all([a.e(6),a.e(27)]).then(a.bind(null,655))))};i.payment.success,i.payment.failure,i.payment.pending,i.payment.processing,i.staticPage.career,i.staticPage.jobCategory,i.staticPage.jobVacancy,i.staticPage.jobDescription,i.staticPage.careerForm,i.staticPage.claim,i.staticPage.about,i.staticPage.faq,i.staticPage.terms,i.staticPage.privacy,i.staticPage.dictionary,i.greetings.greeting,i.greetings.greeting,i.staticPage.maintenance,i.staticPage.document;const s=Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(4),a.e(8),a.e(13)]).then(a.bind(null,637)))),c={payment:{success:Object(n.lazy)((()=>a.e(20).then(a.bind(null,641)))),failure:Object(n.lazy)((()=>a.e(25).then(a.bind(null,645)))),pending:Object(n.lazy)((()=>a.e(24).then(a.bind(null,646)))),processing:Object(n.lazy)((()=>a.e(31).then(a.bind(null,647))))},staticPage:{career:Object(n.lazy)((()=>Promise.all([a.e(5),a.e(11),a.e(2),a.e(21)]).then(a.bind(null,640)))),jobVacancy:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(2),a.e(23)]).then(a.bind(null,635)))),jobCategory:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(2),a.e(22)]).then(a.bind(null,648)))),jobDescription:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(5),a.e(12)]).then(a.bind(null,636)))),careerForm:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(4),a.e(7),a.e(2),a.e(28)]).then(a.bind(null,649)))),claim:Object(n.lazy)((()=>a.e(17).then(a.bind(null,639)))),about:Object(n.lazy)((()=>a.e(16).then(a.bind(null,638)))),faq:Object(n.lazy)((()=>Promise.all([a.e(6),a.e(18)]).then(a.bind(null,650)))),terms:Object(n.lazy)((()=>a.e(15).then(a.bind(null,651)))),privacy:Object(n.lazy)((()=>a.e(19).then(a.bind(null,642)))),dictionary:Object(n.lazy)((()=>a.e(14).then(a.bind(null,652)))),maintenance:Object(n.lazy)((()=>a.e(29).then(a.bind(null,653)))),document:Object(n.lazy)((()=>Promise.all([a.e(9),a.e(10)]).then(a.bind(null,654))))},greetings:{greeting:Object(n.lazy)((()=>a.e(26).then(a.bind(null,643))))}},l={safedrive:Object(n.lazy)((()=>a.e(30).then(a.bind(null,644)))),appfaq:Object(n.lazy)((()=>Promise.all([a.e(6),a.e(27)]).then(a.bind(null,655))))};const d={DEFAULT_ACTIVE:"cthealth",HERO_CONFIG:{cthealth:{id:"link_homepage_widget_health",mobileId:"link_homepage_widget_health_mobile",navLinkId:"link_header_health",navLinkDisplay:"Asuransi Kesehatan",active:!0,path:"/cthealth",category:"cthealth",iconCss:"fas fa-hand-holding-medical",titleId:"KESEHATAN",titleClassName:"fas fa-hand-holding-medical text-primary fs-22",mobileViewCss:"fs-22",bannerImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/home-corona.jpg",mobileBannerImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/home-corona-mobile.jpg"},starHealth:{id:"link_homepage_widget_starHealth",mobileId:"link_homepage_widget_starHealth_mobile",navLinkId:"link_header_starHealth",navLinkDisplay:"Asuransi Jiwa",active:!0,path:"/starhealth",category:"starHealth",iconCss:"fas fa-heartbeat",titleId:"JIWA",titleClassName:"fas fa-heartbeat text-primary fs-22",mobileViewCss:"fs-22",bannerImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/home-starHealth.png",mobileBannerImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/home-starHealth.png",labelGif:"https://storage.googleapis.com/pp_static_staging/new_label.gif",labelGifClassName:"new-label-header-home",labelGifMobile:"https://storage.googleapis.com/pp_static_staging/new_label_mobile.gif",labelGifMobileClassName:"new-label-mobile-home"}},ROUTER_CONFIG:[{exact:!0,path:"/",component:s},{exact:!0,path:"/home",component:s},{exact:!0,path:"/payment/success",component:c.payment.success},{exact:!0,path:"/payment/failure",component:c.payment.failure},{exact:!0,path:"/payment/pending",component:c.payment.pending},{exact:!0,path:"/payment/processing",component:c.payment.processing},{exact:!0,path:"/career",component:c.staticPage.career},{exact:!0,path:"/career/job-category",component:c.staticPage.jobCategory},{exact:!0,path:"/career/vacancy-list",component:c.staticPage.jobVacancy},{exact:!0,path:"/career/vacancy-list/job-description",component:c.staticPage.jobDescription},{exact:!0,path:"/career/form",component:c.staticPage.careerForm},{exact:!0,path:"/career/form",component:c.staticPage.careerForm},{exact:!0,path:"/claim",component:c.staticPage.claim},{exact:!0,path:"/about",component:c.staticPage.about},{exact:!0,path:"/faq",component:c.staticPage.faq},{exact:!0,path:"/terms",component:c.staticPage.terms},{exact:!0,path:"/privacy",component:c.staticPage.privacy},{exact:!0,path:"/dictionary",component:c.staticPage.dictionary},{exact:!0,path:"/greeetings",component:c.greetings.greeting},{exact:!0,path:"/greeetings",component:c.greetings.greeting},{exact:!0,path:"/join",component:l.join},{exact:!0,path:"/safedrive",component:l.safedrive},{exact:!0,path:"/app_faq",component:l.appfaq},{exact:!0,path:"/blogs",component:c.staticPage.maintenance},{exact:!0,path:"/documents/:id",showHeader:!1,component:c.staticPage.document}],SHOW_AVA_POPUP:!0};t.a={MAX_ATTACHMENT_SIZE:5e6,...d}},256:function(e,t){},333:function(e,t,a){var n={"./en.json":[345,35],"./id.json":[346,36],"./vn.json":[347,37]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return a.e(t[1]).then((function(){return a.t(o,3)}))}o.keys=function(){return Object.keys(n)},o.id=333,e.exports=o},335:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(29),r=a.n(i),s=a(49),c=a(192),l=a(105),d=(a(338),a(135)),p=a(358),E=a(205),_=a(90),h=a(137),u=a(353),b=a(69),g=a(70);const C=b.a.div`
  margin-top: 70px;

  .navbar__menu {
    display: inline-block;
    position: absolute;
    top: 50px;
    left: 0;
    background-color: #fad200;
    border-radius: 0px 0px 10px 10px;
    padding: 15px;
  }

  .navbar__content {
    position: relative;
    &:before {
      position: absolute;
      top: -6px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 6px solid #fad200;
    }
  }

  .navbar__dropdown-text {
    display: inline-block;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #666;
    font-size: 0.8em;
    font-weight: 400;
  }

  .navbar__dropdown-text:hover::before {
    transform: translateX(-50%);
    border-radius: 100%;
    position: absolute;
    background: #fad200;
    bottom: 0px;
    height: 5px;
    content: '';
    width: 5px;
    left: 50%;
  }

  .navbar__dropdown-icon {
    display: inline-block;
    transform: rotate(270deg);
    margin-left: 10px;
    width: 7px;
    transition: opacity 0.2s;

    &--active {
      opacity: 0;
    }
  }

  .navbar__dropdown {
    display: inline-block;
    position: relative;
    padding: 12px;
  }

  .navbar__dropdown-item {
    display: inline-block;
    border-radius: 20px;
    width: 100%;
    white-space: nowrap;

    &:hover {
      background-color: white;
    }

    &--selected {
      background-color: white;
    }
  }

  .nav {
    height: auto;
    width: 100%;
    background-color: #fff;
    position: relative;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 2;
  }

  .nav > .nav-header {
    float: left;
    padding: 4px 10px;
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 8px 12px;
  }
  .nav > .nav-header > .nav-title img {
    max-width: 200px;
    height: 25px;
    object-fit: contain;
  }

  .nav > .nav-btn {
    display: none;
  }

  .spaceBetween{
      justify-content: space-between;
    }
    .end{
      justify-content: flex-end !important;
    }

  .nav > .nav-links {
    display: inline;
    float: left;
    font-size: 18px;
    padding: 10px 20px;
    width: calc(100% - 240px);
    display: flex;
    justify-content: space-between;
  }
  .nav > .nav-links > .nav-left {
    float: left;
  }
  .nav > .nav-links > .nav-right {
    float: right;
  }

  .nav > .nav-links > .navbar a {
    display: inline-block;
    padding: 12px;
    text-decoration: none;
    color: #666666 !important;
    font-size: 0.8em;
    font-weight: 400;
    position: relative;
  }
  .nav-bar-hover {
    visibility: hidden;
    display: block;
    line-height: 0;
    height: 0;
    border: 2px solid #fad200;
    width: 1px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 1px);
  }

  .nav > .nav-links > .navbar a.nav-bar-selcted {
    color: #fad200 !important;
  }

  .nav > .nav-links > .navbar a:hover > .nav-bar-hover {
    visibility: visible;
  }

  .nav > #nav-check {
    display: none;
  }

  .textLogo img {
    vertical-align: middle;
    width: 18px;
    margin-right: 5px;
  }
  .textLogo.big img {
    width: 25px;
  }
  .textLogo .text {
    vertical-align: middle;
    font-weight: 300;
    color: #999999;
  }
  .lightArrow {
    color: #cccccc;
    font-size: 10px;
    vertical-align: middle;
    margin-left: 5px;
  }
  .mobile {
    visibility: hidden;
  }
  .mobileRight {
    float: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown .dropdown-content.dropdown-right {
    right: 0;
  }

  .dropdown-content a {
    width: 100%;
    color: #999999 !important;
  }

  .dropdown.toggled .dropdown-content {
    display: block;
  }

  .flotRight {
    float: right;
  }

  @media (max-width: 800px) {
    .navbar__menu {
      position: unset;
      display: block;
      background-color: unset;
    }

    .navbar__content {
    }

    .navbar__dropdown-text {
      color: #000;
    }

    .navbar__dropdown-icon {
      content: url('https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/blog/blogs-arrow-sm.svg');
    }

    .navbar__dropdown {
      padding: 15px 30px;
      display: block;
      width: 100%;
    }

    .navbar__dropdown-item {
      color: #333;

      &--selected {
        background-color: unset;
        color: #fff;
      }
    }

    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
      left: auto;
      padding: 10px;
      z-index: 11;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: ${g.a.color.darkPrimary};
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 3px solid #000;
    }
    .nav #nav-check ~ .nav-btn > label > span {
      transition: transform 1s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 1s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.55s ease-in-out;
    }
    .nav #nav-check:checked ~ .nav-btn > label > span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    .nav #nav-check:checked ~ .nav-btn > label > span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0px, -1px);
      border-color: ${g.a.color.white};
    }
    .nav #nav-check:checked ~ .nav-btn > label > span:nth-last-child(1) {
      transform: rotate(45deg) translate(-11px, -4px);
      border-color: ${g.a.color.white};
    }
    .nav > .nav-links {
      position: fixed;
      display: block;
      width: 100%;
      background-color: ${g.a.color.darkPrimary};
      height: 0px;
      overflow-y: hidden;
      top: 0px;
      right: 0px;
      left: 0px;
      z-index: 10;
      visibility: hidden;
    }
    .nav > .nav-links > .navbar a {
      padding: 15px 30px;
      display: block;
      width: 100%;
      color: #000 !important;
    }
    // .nav > .nav-links > .nav-left {
    //   border-bottom: 1px solid #999;
    // }

    .nav > .nav-links > .navbar a.nav-bar-selcted {
      color: ${g.a.color.white} !important;
    }

    .nav > .nav-links > .nav-left,
    .nav > .nav-links > .nav-right {
      float: none;
    }

    // .nav > #nav-check:not(:checked) ~ .nav-links {
    //   height: 0px;
    //   width: 0px;
    // }

    .nav > #nav-check:checked ~ .nav-links {
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      visibility: visible;
    }
    .mobile {
      visibility: visible;
    }
    .desktop {
      display: none;
    }
    .mobileRight {
      float: right;
    }
    .dropdown {
      width: 100%;
    }
    .nav > .nav-links > .navbar a .dropdown-content ul li a {
      width: 100%;
      color: #999999 !important;
    }
    .dropdown-content {
      box-shadow: none;
    }
    .dropdown:hover .dropdown-content {
      position: static;
    }
    .dropdown-content ul {
      padding-left: 20px;
    }
  }
`,m="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pp-logo-yellow-cap.png",O=e=>"en"===e?"English":"Indonesia";var R=a(357);const y=b.a.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 40px 30px;
  & > ul {
    display: flex;
    & > li:not(:last-child) {
      margin-right: 24px;
    }
  }
  .flag-container {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    opacity: 0.5;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .flag-container.active {
    opacity: 1;
  }
  @media (max-width: 800px) {
    display: block;
  }
`,A=[{locale:"id",localeFlagImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png"},{locale:"en",localeFlagImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_eng.png"}];var v=a(4);var S=e=>{let{localeData:t=A,onLocaleChange:a,currentLocale:n}=e;return Object(v.jsx)(y,{children:Object(v.jsx)("ul",{children:t.map((e=>{let{locale:t,localeFlagImage:o}=e;return Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"flag-container "+(n===t?"active":""),onClick:()=>a(t),children:Object(v.jsx)("img",{alt:`${t} flag`,src:o})})},t)}))})})};class j extends n.Component{constructor(e){super(e),this.handleProductClick=()=>{this.setState({productDropdownVisible:!this.state.productDropdownVisible})},this.handleLangClick=()=>{this.setState({langDropdownVisible:!this.state.langDropdownVisible})},this.handleClickOutside=e=>{this.dropdownButton.current&&!this.dropdownButton.current.contains(e.target)&&this.setState({productDropdownVisible:!1,langDropdownVisible:!1})},this.toggleCollapsed=()=>{this.setState({collapsed:!this.state.collapsed})},this.getUrl=e=>{this.setState({url:e}),this.resetPoli()},this.dropdownButton=o.a.createRef(),this.state={productDropdownVisible:!1,langDropdownVisible:!1,collapsed:!1,url:"",showArticles:!1,showLocales:!1,showOurInnovations:!1}}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside),this.getUrl()}componentWillMount(){this.setState({productDropdownVisible:!1})}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}resetPoli(){document.getElementById("nav-check").checked=!1}render(){const{onLocaleChange:e,locale:t}=this.props,{showLocales:a}=this.state,n=e=>{this.setState({...this.state,showLocales:e})};return Object(v.jsx)("div",{children:Object(v.jsx)(C,{children:Object(v.jsxs)("div",{className:"nav",children:[Object(v.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(v.jsx)("div",{className:"nav-header",children:Object(v.jsx)("div",{className:"nav-title",children:Object(v.jsx)(h.a,{id:"link_header_Pasarpolis.com",to:"/",onClick:()=>this.getUrl(""),children:Object(v.jsx)("img",{src:m,alt:"pasarpolis_logo",width:"100%"})})})}),Object(v.jsx)("div",{className:"nav-btn",children:Object(v.jsxs)("label",{for:"nav-check",children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]})}),Object(v.jsxs)("div",{className:`nav-links ${"vn"===t?"end":""} `,children:["vn"!==t?Object(v.jsxs)("div",{className:"navbar nav-left",children:[Object(v.jsxs)("a",{id:"link_header_about",className:"about"===this.state.url&&"nav-bar-selcted",href:"/about",onClick:()=>this.getUrl("about"),children:[Object(v.jsx)(R.a,{id:"Tentang PasarPolis"}),Object(v.jsx)("span",{className:"nav-bar-hover"})]}),Object(v.jsxs)(u.a,{id:"link_header_Klaim",className:"claim"===this.state.url&&"nav-bar-selcted",to:"/claim",onClick:()=>this.getUrl("claim"),children:[Object(v.jsx)(R.a,{id:"Ajukan Klaim"}),Object(v.jsx)("span",{className:"nav-bar-hover"})]}),Object(v.jsxs)("a",{id:"link_header_career",className:"career"===this.state.url&&"nav-bar-selcted",href:"/career",onClick:()=>this.getUrl("career"),children:[Object(v.jsx)(R.a,{id:"Karir"}),Object(v.jsx)("span",{className:"nav-bar-hover"})]}),Object(v.jsxs)("div",{className:"navbar__dropdown",onMouseEnter:()=>this.setState({showArticles:!0}),onClick:()=>this.setState({showArticles:!this.state.showArticles}),children:[Object(v.jsx)("div",{className:"navbar__dropdown-text",children:Object(v.jsx)(R.a,{id:"Artikel"})}),Object(v.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/blog/blogs-arrow-sm.svg",className:"navbar__dropdown-icon"+(this.state.showArticles?" navbar__dropdown-icon--active":"")}),this.state.showArticles&&Object(v.jsx)("div",{className:"navbar__menu",onMouseLeave:()=>this.setState({showArticles:!1}),children:Object(v.jsxs)("div",{className:"navbar__content",children:[Object(v.jsx)("a",{href:"/news",id:"link_header_News",className:"/news"===this.state.url?"navbar__dropdown-item navbar__dropdown-item--selected":"navbar__dropdown-item",children:Object(v.jsx)(R.a,{id:"Siaran Pers"})}),Object(v.jsx)("a",{href:"/blogs",id:"link_header_Bolg",className:"/blogs"===this.state.url?"navbar__dropdown-item navbar__dropdown-item--selected":"navbar__dropdown-item",children:Object(v.jsx)(R.a,{id:"Blog"})})]})})]}),Object(v.jsxs)("a",{id:"link_header_Faq",className:"faq"===this.state.url&&"nav-bar-selcted",href:"/faq",onClick:()=>this.getUrl(),children:["FAQ",Object(v.jsx)("span",{className:"nav-bar-hover"})]})]}):null,Object(v.jsx)("div",{className:"navbar nav-right",children:Object(v.jsxs)("div",{className:"navbar__dropdown desktop",onMouseEnter:()=>n(!0),onClick:()=>n(!a),children:[Object(v.jsx)("div",{className:"navbar__dropdown-text",children:O(t)}),Object(v.jsx)("img",{alt:"arrow down",src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/blog/blogs-arrow-sm.svg",className:"navbar__dropdown-icon"+(a?" navbar__dropdown-icon--active":"")}),a&&Object(v.jsx)("div",{className:"navbar__menu",onMouseLeave:()=>n(!1),children:Object(v.jsxs)("div",{className:"navbar__content",children:[Object(v.jsx)("a",{id:"link_header_News",className:"en"===t?"navbar__dropdown-item navbar__dropdown-item--selected":"navbar__dropdown-item",onClick:()=>e("en"),children:"English"}),Object(v.jsx)("a",{id:"link_header_Bolg",className:"id"===t?"navbar__dropdown-item navbar__dropdown-item--selected":"navbar__dropdown-item",onClick:()=>e("id"),children:"Indonesia"}),Object(v.jsx)("a",{id:"link_header_Bolg",className:"vn"===t?"navbar__dropdown-item navbar__dropdown-item--selected":"navbar__dropdown-item",onClick:()=>e("vn"),children:"Vietnam"})]})})]})}),Object(v.jsx)(S,{onLocaleChange:e,currentLocale:t})]})]})})})}}var f=Object(s.b)((e=>({})),{})(j),T=(a(208),a(143)),x=(a(139),a(30)),w=(a(207),a(140)),L=(a(138),a(43));var U=b.a.div`
  width: 100%;
  min-height: calc(100vh - 54px);
  height: 100%;
  padding: 40px 0;
`,P=a(145);class N extends n.Component{constructor(){super(...arguments),this.goHome=()=>{const{history:e}=this.props;Object(P.a)(),e.push("/")}}render(){return Object(v.jsx)(U,{className:"bg-dark",children:Object(v.jsx)(L.a,{type:"flex",justify:"center",align:"middle",children:Object(v.jsx)(x.a,{span:17,children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)(L.a,{type:"flex",justify:"center",align:"middle",children:Object(v.jsx)("h3",{className:"mb-30",children:"Page not found!"})}),Object(v.jsx)(L.a,{type:"flex",justify:"center",align:"left",children:Object(v.jsx)(x.a,{className:"text-center",children:Object(v.jsx)(w.a,{className:"button-primary",onClick:this.goHome,children:"KEMBALI KE BERANDA"})})})]})})})})}}var D=Object(s.b)()(N),k=a(187);const{ROUTER_CONFIG:I}=k.a,{Content:G}=d.a;class K extends n.Component{render(){const{overlay:e,history:t,onLocaleChange:a,locale:o}=this.props;return Object(v.jsx)(_.a,{history:t,children:Object(v.jsxs)(d.a,{children:[e,Object(v.jsx)(G,{children:Object(v.jsx)(n.Suspense,{fallback:Object(v.jsx)("div",{}),children:Object(v.jsxs)(p.a,{children:["vn"===o?I.slice(0,1).map((e=>{let{exact:t,path:n,component:i}=e;return Object(v.jsx)(E.a,{exact:t,path:n,render:e=>Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f,{onLocaleChange:a,locale:o}),i&&Object(v.jsx)(i,{...e})]})},n)})):I.map((e=>{let{exact:t,path:n,component:i,showHeader:r=!0}=e;return Object(v.jsx)(E.a,{exact:t,path:n,render:e=>Object(v.jsxs)(v.Fragment,{children:[r?Object(v.jsx)(f,{onLocaleChange:a,locale:o}):null,i&&Object(v.jsx)(i,{...e})]})},n)})),Object(v.jsx)(E.a,{component:D})]})})})]})})}}var M=Object(s.b)((e=>({overlay:e.App.overlay,router:e.router,LanguageSwitcher:e.LanguageSwitcher.language})),{})(K),F=a(202),Q=a(354),z=a(356);var V=e=>{let{locale:t,...o}=e;const[i,r]=Object(n.useState)(!1),[s,c]=Object(n.useState)({});return Object(n.useEffect)((()=>{(async()=>{const e=await a(333)(`./${t}.json`);r(!1),c(e)})(),r(!0)}),[t]),Object(v.jsx)(z.a,{locale:t,messages:s,children:i?Object(v.jsx)("div",{}):o.children})},B=a(56);const H=new B.a;var q=()=>{const[e,t]=Object(n.useState)("");Object(n.useEffect)((()=>{"vn"!==H.get("pp-locale")&&H.get("pp-locale")||H.set("pp-locale","id"),t(H.get("pp-locale"))}),[]);const a=Object(n.useCallback)((e=>{if(t(e),"en"===e||"id"===e)H.set("pp-locale",e);else if("vn"===e){let e=window.location.hostname.split(".");e.splice(-1,1,"vn"),window.location.replace("https://"+e.join("."))}}),[]);return Object(v.jsx)(Q.a,{fallback:"An error has occurred",children:Object(v.jsx)(s.a,{store:l.c,children:Object(v.jsxs)(c.PersistGate,{loading:null,persistor:l.b,children:[Object(v.jsx)(V,{locale:e,children:Object(v.jsx)(M,{history:l.a,onLocaleChange:a,locale:e})}),Object(v.jsx)(F.a,{})]})})})},Y=(a(334),a(335),a(336),a(77)),$=a(342);const W=new B.a,J=Object(Y.b)(),X=window.location.search;W.set("url_params",X,{path:"/"}),$.a({dsn:"https://db514011df7f47e48897a0be6b44005a@o491778.ingest.sentry.io/5574633",tracesSampleRate:.1}),J.utm_source&&W.set("utm_source",J.utm_source,{path:"/"}),J.utm_medium&&W.set("utm_medium",J.utm_medium,{path:"/"}),J.utm_campaign&&W.set("utm_campaign",J.utm_campaign,{path:"/"}),r.a.render(Object(v.jsx)(q,{}),document.getElementById("root"))},48:function(e,t,a){"use strict";function n(e){let t="MobileView";return e>1220?t="DesktopView":e>767&&(t="TabView"),t}a.d(t,"b",(function(){return n}));const o={COLLPSE_CHANGE:"COLLPSE_CHANGE",COLLPSE_OPEN_DRAWER:"COLLPSE_OPEN_DRAWER",CHANGE_OPEN_KEYS:"CHANGE_OPEN_KEYS",TOGGLE_ALL:"TOGGLE_ALL",CHANGE_CURRENT:"CHANGE_CURRENT",CLOSE_ALL:"CLOSE_ALL",RESET_PERSIST:"RESET_PERSIST",SHOW_OVERLAY:"SHOW_OVERLAY",toggleCollapsed:()=>({type:o.COLLPSE_CHANGE}),toggleAll:(e,t)=>{const a=n(e),i="DesktopView"!==a;return{type:o.TOGGLE_ALL,collapsed:i,view:a,height:t}},toggleOpenDrawer:()=>({type:o.COLLPSE_OPEN_DRAWER}),changeOpenKeys:e=>({type:o.CHANGE_OPEN_KEYS,openKeys:e}),changeCurrent:e=>({type:o.CHANGE_CURRENT,current:e}),showOverlay:e=>(document.getElementsByTagName("body")[0].style="overflow: hidden;",{type:o.SHOW_OVERLAY,payload:e}),resetOverlay:()=>(document.getElementsByTagName("body")[0].style="overflow: visible;",{type:o.SHOW_OVERLAY}),closeAll:()=>({type:o.CLOSE_ALL})};t.a=o},57:function(e,t,a){"use strict";const n={UPLOAD_DOC_REQUEST:"UPLOAD_DOC_REQUEST",UPLOAD_DOC_SUCCESS:"UPLOAD_DOC_SUCCESS",UPLOAD_DOC_ERROR:"UPLOAD_DOC_ERROR",APPLY_DOC_REQUEST:"APPLY_DOC_REQUEST",APPLY_DOC_SUCCESS:"APPLY_DOC_SUCCESS",APPLY_DOC_ERROR:"APPLY_DOC_ERROR",RESET_DATA_CAREER:"RESET_DATA_CAREER",uploadDocuments:e=>({type:n.UPLOAD_DOC_REQUEST,payload:e}),uploadDocumentsSuccess:e=>({type:n.UPLOAD_DOC_SUCCESS,payload:e}),uploadDocumentsError:e=>({type:n.UPLOAD_DOC_ERROR,payload:e}),applyJob:e=>({type:n.APPLY_DOC_REQUEST,payload:e}),resetDataCareer:e=>({type:n.RESET_DATA_CAREER,payload:e})};t.a=n},70:function(e,t,a){"use strict";t.a={font:{primary:"Muli"},fontSize:{xs2:"0.6rem",xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.5rem",xl2:"1.75rem",xl3:"2rem",xl4:"2.5rem",xl5:"3rem",xl6:"4rem"},fontWeight:{hairline:"100",thin:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontColor:{darkGreyHeading:"#4f4f4f",darkGreyContent:"#828282",veryLightPink2:"#cccccc"},color:{primary:"#fad200",black:"#000",mediumGray:"#666666",lightGray:"#f8f8f8",darkPrimary:"#ffc000",lightPrimary:"#FFE9EB",secondary:"#f99c1e",regular:"#828282",bold:"#4f4f4f",disabled:"#bdbdbd",lightPink:"#f5f5f5",veryLightPink:"#eeeeee",grey:"#999999",veryLightGray:"#E5E5E5",lightYellow:"#FEFFC9",lightestGray:"#EDEDED",solitude:"#e1e6f0",solitudeLight:"#e1e6f066",flamingo:"#EC1B2E",mineShaft:"#333333",dodgerBlue:"#2369ff",hawkesBlue:"#cfd6e8",kashmirBlue:"#57678b",white:"#ffffff",success:"#85b440",error:"#ed1b2e",pending:"#f99c1e",lightBlack:"#4f4f4f",lightestWhite:"#ffffff4a",tailBlue:"#0ac7d0",purple:"#6034bb",lightMustard:"#b49600"},layout:{pageWidth:"100vw",headerHeight:"40px",tablet:"720px",mobile:"450px"}}},77:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(128),o=a.n(n);function i(){const e=o.a.parse(window.location.search.slice(1));return e.toggle&&(e.toggle.free_shipping="true"===e.toggle.free_shipping||void 0),e}function r(){if(window&&window.location.pathname){const e=window.location.pathname.split("/");if(e.length>1){const t=e[e.length-1];if(t)return(e=>{const t={ecommerce:["shop","cart","checkout","card"],map:["googlemap","leafletmap"],charts:["googleChart","reecharts","reactVis","reactChart2","reactTrend","echart"],Forms:["InputField","editor","FormsWithValidation","progress","button","tab","checkbox","radiobox","transfer","autocomplete"],uielements:["op_badge","op_card","op_carousel","op_collapse","op_popover","op_tooltip","op_tag","op_timeline","dropdown","pagination","rating","tree"],advancedUielements:["reactDates","codeMirror","uppy","dropzone"],feedback:["alert","modal","message","notification","popconfirm","spin"],table:["table_ant"],pages:["404","500","signin","signup","forgotpassword","resetpassword","invoice","comingSoon"]};let a;return Object.keys(t).forEach((n=>{t[n].forEach((t=>{t===e&&(a=n)}))})),a?[a,e]:[e]})(t)}}return[]}},93:function(e,t,a){"use strict";t.a=e=>{let t=[];return Object.keys(e).forEach(((a,n)=>{const o=e[a];let i="",r=t.length?"&":"?";Array.isArray(o)?o.forEach(((e,t)=>{i+=`${i?"&":""}${a}=${e}`})):o&&(i+=`${a}=${o}`),i&&t.push(`${r}${i}`)})),t.join("")}}},[[337,33,34]]]);
//# sourceMappingURL=main.33346e62.chunk.js.map