(this["webpackJsonpreact-sendsay-console"]=this["webpackJsonpreact-sendsay-console"]||[]).push([[0],{55:function(e,n,t){e.exports=t(73)},60:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"authenticate",(function(){return F})),t.d(r,"authenticateSuccess",(function(){return P})),t.d(r,"authenticateCheck",(function(){return W})),t.d(r,"authenticateFailure",(function(){return Y})),t.d(r,"logout",(function(){return K})),t.d(r,"logoutSuccess",(function(){return z})),t.d(r,"clearRequest",(function(){return re})),t.d(r,"removeRequest",(function(){return ae})),t.d(r,"removeAllRequests",(function(){return ce})),t.d(r,"setRequest",(function(){return oe})),t.d(r,"setResponse",(function(){return ie})),t.d(r,"setResponseSuccess",(function(){return se})),t.d(r,"setResponseFailed",(function(){return le})),t.d(r,"jsonInvalid",(function(){return ue})),t.d(r,"setLoading",(function(){return de}));var a,c,o=t(0),i=t.n(o),s=t(31),l=t.n(s),u=(t(60),t(14)),d=t(46),b=t(40),p=t(9),f=t(19),E=t(18),O=t(54),g=t(37),j=t(41),m=t.n(j),x=t(6),v=t(8),h=t(75),R=t(47),T=t.n(R)()({AUTHENTICATE:void 0,AUTHENTICATE_CHECK:void 0,AUTHENTICATE_SUCCESS:void 0,AUTHENTICATE_FAILURE:void 0,LOGOUT:void 0,LOGOUT_SUCCESS:void 0,CLEAR_REQUEST:void 0,REMOVE_REQUEST:void 0,REMOVE_ALL_REQUESTS:void 0,SET_REQUEST:void 0,SET_RESPONSE:void 0,SET_RESPONSE_SUCCESS:void 0,SET_RESPONSE_FAILED:void 0,JSON_INVALID:void 0,SET_LOADING:void 0}),y={auth:Object(h.a)((a={},Object(v.a)(a,T.AUTHENTICATE,(function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!0})})),Object(v.a)(a,T.AUTHENTICATE_SUCCESS,(function(e,n){var t=n.payload;return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:{},sessionKey:t.sessionKey,login:t.login,sublogin:t.sublogin})})),Object(v.a)(a,T.AUTHENTICATE_FAILURE,(function(e,n){var t=n.payload;return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.error,sessionKey:null,login:null,sublogin:null})})),Object(v.a)(a,T.LOGOUT,(function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!1,sessionKey:null})})),Object(v.a)(a,T.LOGOUT_SUCCESS,(function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:{},sessionKey:null,login:null,sublogin:null})})),a),{loading:!1,error:{},sessionKey:null,login:null,sublogin:null})};!function(e){e.SUCCESS="SUCCESS",e.FAILED="FAILED",e.PENDING="PENDING"}(c||(c={}));var I,S=function(e){return"object"===typeof e?JSON.stringify(e,null,3):JSON.stringify(JSON.parse(e),null,3)},C={request:{id:0,query:"",jsonInvalid:!1,response:"",status:c.PENDING},allRequests:[],isLoading:!1},q={request:Object(h.a)((I={},Object(v.a)(I,T.CLEAR_REQUEST,(function(e){var n={id:0,query:"",jsonInvalid:!1,response:"",status:c.PENDING};return Object(x.a)(Object(x.a)({},e),{},{request:n})})),Object(v.a)(I,T.SET_LOADING,(function(e){return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0})})),Object(v.a)(I,T.REMOVE_REQUEST,(function(e,n){var t=n.payload,r=Object(f.a)(e.allRequests).filter((function(e){return e.id!==t.request.id}));return Object(x.a)(Object(x.a)({},e),{},{allRequests:r})})),Object(v.a)(I,T.REMOVE_ALL_REQUESTS,(function(e){return Object(x.a)(Object(x.a)({},e),{},{allRequests:[]})})),Object(v.a)(I,T.JSON_INVALID,(function(e){var n=Object(x.a)(Object(x.a)({},e.request),{},{jsonInvalid:!0});return Object(x.a)(Object(x.a)({},e),{},{request:n})})),Object(v.a)(I,T.SET_REQUEST,(function(e,n){var t=n.payload,r=Object(x.a)(Object(x.a)({},e.request),{},{query:t.request.query,jsonInvalid:!1});return Object(x.a)(Object(x.a)({},e),{},{request:r})})),Object(v.a)(I,T.SET_RESPONSE_SUCCESS,(function(e,n){var t,r,a=n.payload,o={id:e.allRequests[0]&&(null===(t=e.allRequests[0].id)||void 0===t?void 0:t.toString())?e.allRequests[0].id+1:0,query:a.request.query,response:a.request.response,status:c.SUCCESS,jsonInvalid:!1},i=Object(f.a)(e.allRequests).find((function(e){return S(e.query)===S(o.query)&&e.status===o.status}));return i?(r=Object(f.a)(e.allRequests).filter((function(e,n){if(n<20&&e.id!==i.id)return e})),r=[o].concat(Object(f.a)(r)).reverse().map((function(e,n){return e.id=n,e})).reverse()):r=[o].concat(Object(f.a)(e.allRequests)).filter((function(e,n){return n<20})),Object(x.a)(Object(x.a)({},e),{},{request:o,allRequests:r,isLoading:!1})})),Object(v.a)(I,T.SET_RESPONSE_FAILED,(function(e,n){var t,r=n.payload,a={id:e.allRequests.length,query:r.request.query,response:r.request.response,status:c.FAILED,jsonInvalid:!1},o=Object(f.a)(e.allRequests).find((function(e){return S(e.query)===S(a.query)&&e.status===a.status}));return o?(t=Object(f.a)(e.allRequests).filter((function(e,n){if(n<20&&e.id!==o.id)return e})),t=[a].concat(Object(f.a)(t)).reverse().map((function(e,n){return e.id=n,e})).reverse()):t=[a].concat(Object(f.a)(e.allRequests)).filter((function(e,n){return n<20})),Object(x.a)(Object(x.a)({},e),{},{request:a,allRequests:t,isLoading:!1})})),I),C)},_=Object(x.a)(Object(x.a)({},y),q),w=t(12),L=t.n(w),k=t(11),A=t(48),G=t(49),H=new(t.n(G).a);H.setSessionFromCookie("sendsay_session");var U=function e(){Object(A.a)(this,e)};U.sendsay=H;var D,N,B=t(74),M=Object(B.a)((D={},Object(v.a)(D,T.AUTHENTICATE,(function(e){return e})),Object(v.a)(D,T.AUTHENTICATE_SUCCESS,(function(e){return e})),Object(v.a)(D,T.AUTHENTICATE_CHECK,(function(e){return e})),Object(v.a)(D,T.AUTHENTICATE_FAILURE,(function(e){return e})),Object(v.a)(D,T.LOGOUT,(function(e){return e})),Object(v.a)(D,T.LOGOUT_SUCCESS,(function(e){return e})),D)),F=M.authenticate,P=M.authenticateSuccess,W=M.authenticateCheck,Y=M.authenticateFailure,K=M.logout,z=M.logoutSuccess,V=L.a.mark($),Q=L.a.mark(Z),J=L.a.mark(ee),X=L.a.mark(ne);function $(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.sendsay.request({action:"pong"});case 3:e.next=10;break;case 5:if(e.prev=5,e.t0=e.catch(0),"error/auth/failed"!==e.t0.id){e.next=10;break}return e.next=10,Object(k.b)(ee);case 10:case"end":return e.stop()}}),V,null,[[0,5]])}function Z(e){var n,t;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,U.sendsay.login({login:n.login,sublogin:n.sublogin,password:n.password});case 4:return document.cookie="sendsay_session=".concat(U.sendsay.session),r.next=7,Object(k.d)(P({sessionKey:U.sendsay.session,login:n.login,sublogin:n.sublogin}));case 7:r.next=15;break;case 9:return r.prev=9,r.t0=r.catch(1),document.cookie="",t={id:null===r.t0||void 0===r.t0?void 0:r.t0.id,explain:null===r.t0||void 0===r.t0?void 0:r.t0.explain},r.next=15,Object(k.d)(Y({error:t}));case 15:case"end":return r.stop()}}),Q,null,[[1,9]])}function ee(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(z());case 2:document.cookie="";case 3:case"end":return e.stop()}}),J)}function ne(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.e)(T.AUTHENTICATE,Z),Object(k.e)(T.AUTHENTICATE_CHECK,$),Object(k.e)(T.LOGOUT,ee)]);case 2:case"end":return e.stop()}}),X)}var te=Object(B.a)((N={},Object(v.a)(N,T.CLEAR_REQUEST,(function(e){return e})),Object(v.a)(N,T.REMOVE_REQUEST,(function(e){return e})),Object(v.a)(N,T.REMOVE_ALL_REQUESTS,(function(e){return e})),Object(v.a)(N,T.SET_REQUEST,(function(e){return e})),Object(v.a)(N,T.SET_RESPONSE,(function(e){return e})),Object(v.a)(N,T.SET_RESPONSE_SUCCESS,(function(e){return e})),Object(v.a)(N,T.SET_RESPONSE_FAILED,(function(e){return e})),Object(v.a)(N,T.JSON_INVALID,(function(e){return e})),Object(v.a)(N,T.SET_LOADING,(function(e){return e})),N)),re=te.clearRequest,ae=te.removeRequest,ce=te.removeAllRequests,oe=te.setRequest,ie=te.setResponse,se=te.setResponseSuccess,le=te.setResponseFailed,ue=te.jsonInvalid,de=te.setLoading,be=L.a.mark(fe),pe=L.a.mark(Ee);function fe(e){var n,t;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,t={query:n.query},r.prev=2,r.next=5,Object(k.d)(de());case 5:return r.next=7,U.sendsay.request(JSON.parse(t.query)).then((function(e){return t.response=e}));case 7:return r.next=9,Object(k.d)(se({request:t}));case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(2),t.response=r.t0,r.next=16,Object(k.d)(le({request:t}));case 16:case"end":return r.stop()}}),be,null,[[2,11]])}function Ee(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.e)(T.SET_RESPONSE,fe)]);case 2:case"end":return e.stop()}}),pe)}var Oe=L.a.mark(ge);function ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.c)(ne),Object(k.c)(Ee)]);case 2:case"end":return e.stop()}}),Oe)}var je,me={key:"root",storage:m.a},xe={key:"request",storage:m.a},ve=Object(O.a)(),he=Object(g.a)(me,_.auth),Re=Object(g.a)(xe,_.request),Te=Object(E.c)({persistedAuthReducer:he,persistedRequestReducer:Re}),ye=function(e){return E.a.apply(void 0,Object(f.a)(e))},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(E.e)(Te,e,ye([ve])),t=Object(g.b)(n);return n.runSagaTask=function(){n.sagaTask=ve.run(ge)},n.runSagaTask(),{store:n,persistor:t}},Se=function(e){return e.persistedAuthReducer.loading},Ce=function(e){return e.persistedAuthReducer.error},qe=function(e){var n;return!!(null===(n=e.persistedAuthReducer.sessionKey)||void 0===n?void 0:n.length)},_e=function(e){return e.persistedAuthReducer.login},we=function(e){return e.persistedAuthReducer.sublogin},Le=function(e){return e.persistedRequestReducer.request},ke=function(e){return e.persistedRequestReducer.allRequests},Ae=function(e){return e.persistedRequestReducer.isLoading},Ge=function(){var e=Object(u.b)();return Object(E.b)(r,e)},He=t(10);!function(e){e.API_CONSOLE="API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430",e.LOGIN="\u041b\u043e\u0433\u0438\u043d",e.SUBLOGIN="\u0421\u0443\u0431\u043b\u043e\u0433\u0438\u043d",e.PASSWORD="\u041f\u0430\u0440\u043e\u043b\u044c",e.ENTER="\u0412\u043e\u0439\u0442\u0438",e.GITHUB_NAME="@blackraydev",e.GITHUB_LINK="https://github.com/blackraydev",e.FAILED_LOGIN="\u0412\u0445\u043e\u0434 \u043d\u0435 \u0432\u044b\u0448\u0435\u043b",e.OPTIONAL="\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e",e.LOGOUT="\u0412\u044b\u0439\u0442\u0438",e.EXECUTE="\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c",e.COPY="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",e.DELETE="\u0423\u0434\u0430\u043b\u0438\u0442\u044c",e.SEND="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",e.FORMAT="\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",e.REQUEST="\u0417\u0430\u043f\u0440\u043e\u0441",e.RESPONSE="\u041e\u0442\u0432\u0435\u0442",e.EMPTY="EMPTY",e.COPIED="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"}(je||(je={}));var Ue,De=je,Ne=t(2),Be=t(3);!function(e){e.BLACK="#0D0D0D",e.WHITE_BRIGHT="#FFFFFF",e.WHITE_MEDIUM="#F7F7F7",e.WHITE_LIGHT="#F6F6F6",e.GRAY_SUPER_LIGHT="rgba(0, 0, 0, 0.1)",e.GRAY_LIGHT="rgba(0, 0, 0, 0.2)",e.GRAY_MEDIUM="rgba(0, 0, 0, 0.4)",e.GRAY_BRIGHT="rgb(153, 153, 153)",e.PINK="rgb(215, 100, 125)",e.GREEN="#30B800",e.BLUE_BRIGHT="#0055FB",e.BLUE_LIGHT="#45A5FF",e.RED_LIGHT="rgba(207, 44, 0, 0.1)",e.RED_MEDIUM="rgba(207, 44, 0, 0.5)",e.RED_BRIGHT="rgba(207, 44, 0, 1)"}(Ue||(Ue={}));var Me,Fe,Pe,We,Ye,Ke,ze,Ve,Qe=Ue,Je=Be.b.div(Me||(Me=Object(Ne.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px 10px;\n  height: 70px;\n  background-color: ",";\n  margin-bottom: 20px;\n"])),Qe.RED_LIGHT),Xe=Be.b.div(Fe||(Fe=Object(Ne.a)([""]))),$e=Be.b.img(Pe||(Pe=Object(Ne.a)([""]))),Ze=Be.b.div(We||(We=Object(Ne.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"]))),en=Be.b.p(Ye||(Ye=Object(Ne.a)(["\n  font-size: 18px;\n  font-weight: 400;\n  color: ",";\n  margin-bottom: 5px;\n"])),Qe.RED_BRIGHT),nn=Be.b.p(Ke||(Ke=Object(Ne.a)(["\n  font-size: 12px;\n  color: ",";\n"])),Qe.RED_MEDIUM),tn=function(e){var n,t=e.error;return i.a.createElement(Je,null,i.a.createElement(Xe,null,i.a.createElement($e,{src:"/sendsay-api-console/icons/meh.svg",alt:""})),i.a.createElement(Ze,null,i.a.createElement(en,null,De.FAILED_LOGIN),i.a.createElement(nn,null,'{id: "'.concat((n=t).id,'", explain: "').concat(n.explain,'"}'))))},rn=Be.b.button(ze||(ze=Object(Ne.a)(["\n  cursor: pointer;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 5px;\n  padding: 5px 10px;\n  height: 40px;\n  min-width: 110px;\n  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;\n\n  &:focus {\n    border: 2px solid #45a5ff;\n  }\n\n  &:hover {\n    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),\n      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;\n  }\n\n  &:active {\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),\n      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;\n  }\n\n  &:disabled {\n    cursor: unset;\n    background: linear-gradient(0deg, #c4c4c4, #c4c4c4),\n      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);\n  }\n"])),Qe.WHITE_BRIGHT),an=function(e){var n=e.children,t=e.onClick,r=e.type,a=e.disabled;return i.a.createElement(rn,{onClick:t,type:r,disabled:a},n)};!function(e){e.TEXT="text",e.PASSWORD="password"}(Ve||(Ve={}));var cn,on,sn,ln,un,dn,bn,pn,fn=Ve,En=Be.b.div(cn||(cn=Object(Ne.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n"]))),On=Be.b.div(on||(on=Object(Ne.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),gn=Be.b.label(sn||(sn=Object(Ne.a)(["\n  font-size: 16px;\n  font-weight: 400;\n\n  ","\n"])),(function(e){return e.invalid&&Object(Be.a)(ln||(ln=Object(Ne.a)(["\n      color: ",";\n    "])),Qe.RED_BRIGHT)})),jn=Be.b.span(un||(un=Object(Ne.a)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: ",";\n"])),Qe.GRAY_BRIGHT),mn=Be.b.input(dn||(dn=Object(Ne.a)(["\n  transition: 0.15s;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  color: ",";\n  border-radius: 5px;\n  border: 1px solid ",";\n  padding-left: 10px;\n\n  &:focus {\n    box-shadow: 0px 0px 5px ",";\n  }\n\n  &:hover {\n    border: 1px solid ",";\n  }\n\n  ","\n"])),Qe.BLACK,Qe.GRAY_LIGHT,Qe.GRAY_LIGHT,Qe.GRAY_MEDIUM,(function(e){return e.invalid&&Object(Be.a)(bn||(bn=Object(Ne.a)(["\n      border: 1px solid ",";\n      box-shadow: 0px 0px 5px ",";\n\n      &:focus {\n        box-shadow: 0px 0px 5px ",";\n      }\n\n      &:hover {\n        border: 1px solid ",";\n      }\n    "])),Qe.RED_BRIGHT,Qe.RED_MEDIUM,Qe.RED_MEDIUM,Qe.RED_BRIGHT)})),xn=function(e){var n=e.value,t=e.onChange,r=e.invalid,a=e.setInvalid,c=e.placeholder,s=e.type,l=e.label,u=e.optional,d=e.rules,b=Object(o.useState)(!1),p=Object(He.a)(b,2),f=p[0],E=p[1],O=Object(o.useMemo)((function(){return(null===d||void 0===d?void 0:d.required)&&!n||(null===d||void 0===d?void 0:d.nonCyrillic)&&/[\u0430-\u044f\u0410-\u042f\u0401\u0451]/.test(n)||(null===d||void 0===d?void 0:d.withoutSpace)&&n.includes(" ")}),[n]);return Object(o.useEffect)((function(){n&&E(!0)}),[n]),Object(o.useEffect)((function(){f&&O?a&&a(!0):a&&a(!1)}),[O]),i.a.createElement(En,null,i.a.createElement(On,null,l&&i.a.createElement(gn,{invalid:r},l),u&&i.a.createElement(jn,null,De.OPTIONAL)),i.a.createElement(mn,{value:n,onChange:t,placeholder:c,type:s||fn.TEXT,invalid:r}))};!function(e){e.BUTTON="button",e.RESET="reset",e.SUBMIT="submit"}(pn||(pn={}));var vn,hn,Rn,Tn,yn,In,Sn,Cn,qn,_n=pn,wn=Be.b.form(vn||(vn=Object(Ne.a)(["\n  width: 520px;\n  min-height: 425px;\n  max-height: 505px;\n  left: calc(50% - 520px / 2);\n  top: 222px;\n  background-color: ",";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 40px 30px;\n  margin-top: 20px;\n"])),Qe.WHITE_BRIGHT),Ln=Be.b.p(hn||(hn=Object(Ne.a)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: 400;\n  margin-bottom: 20px;\n"])),Qe.BLACK),kn=Be.b.img(Rn||(Rn=Object(Ne.a)(["\n  animation: loader 1.5s infinite linear;\n\n  @keyframes loader {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),An=function(){return i.a.createElement(kn,{src:"/sendsay-api-console/icons/loader.svg",alt:""})},Gn=function(e){var n,t=e.authenticate,r=e.loading,a=e.error,c=Object(o.useState)(""),s=Object(He.a)(c,2),l=s[0],u=s[1],d=Object(o.useState)(""),b=Object(He.a)(d,2),p=b[0],f=b[1],E=Object(o.useState)(""),O=Object(He.a)(E,2),g=O[0],j=O[1],m=Object(o.useState)(!1),x=Object(He.a)(m,2),v=x[0],h=x[1],R=Object(o.useState)(!1),T=Object(He.a)(R,2),y=T[0],I=T[1],S=Object(o.useCallback)((function(){t({login:l,sublogin:p,password:g})}),[l,p,g,t]),C=Object(o.useCallback)((function(e){e.preventDefault(),S()}),[S]),q=Object(o.useMemo)((function(){return v||y||!l||!g}),[l,g,v,y]);return i.a.createElement(wn,{onSubmit:C,action:"/"},i.a.createElement(Ln,null,De.API_CONSOLE),(n=a,!(0===Object.keys(n).length)&&i.a.createElement(tn,{error:a})),i.a.createElement(xn,{value:l,onChange:function(e){return u(e.target.value)},invalid:v,setInvalid:h,placeholder:De.LOGIN,label:De.LOGIN,rules:{required:!0,withoutSpace:!0}}),i.a.createElement(xn,{value:p,onChange:function(e){return f(e.target.value)},placeholder:De.SUBLOGIN,label:De.SUBLOGIN,optional:!0}),i.a.createElement(xn,{value:g,onChange:function(e){return j(e.target.value)},invalid:y,setInvalid:I,placeholder:De.PASSWORD,label:De.PASSWORD,rules:{required:!0,nonCyrillic:!0},type:fn.PASSWORD}),i.a.createElement(an,{onClick:C,type:_n.SUBMIT,disabled:q},r?i.a.createElement(An,null):De.ENTER))},Hn=Be.b.img(Tn||(Tn=Object(Ne.a)([""]))),Un=function(){return i.a.createElement(Hn,{src:"/sendsay-api-console/icons/logo.svg",alt:""})},Dn=Be.b.div(yn||(yn=Object(Ne.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),Nn=Be.b.img(In||(In=Object(Ne.a)(["\n  transition: 0.15s;\n  width: 20px;\n  height: 20px;\n  fill: ",";\n  margin-right: 5px;\n"])),Qe.BLACK),Bn=Be.b.span(Sn||(Sn=Object(Ne.a)(["\n  margin-right: 5px;\n"]))),Mn=Be.b.a(Cn||(Cn=Object(Ne.a)(["\n  transition: 0.15s;\n  color: ",";\n  font-size: 16px;\n  text-decoration: none;\n\n  &:hover {\n    color: ",";\n  }\n"])),Qe.GRAY_BRIGHT,Qe.BLACK),Fn=function(){return i.a.createElement(Dn,null,i.a.createElement(Nn,{src:"/sendsay-api-console/icons/code.svg"}),i.a.createElement(Bn,null,"with \u2764\ufe0f by "),i.a.createElement(Mn,{href:De.GITHUB_LINK,target:"_blank",rel:"noreferrer"},De.GITHUB_NAME))},Pn=Be.b.div(qn||(qn=Object(Ne.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n"])),Qe.WHITE_MEDIUM),Wn=Object(p.f)((function(e){var n=e.history,t=Ge(),r=t.authenticate,a=t.authenticateCheck,c=Object(u.c)(Se),s=Object(u.c)(Ce),l=Object(u.c)(qe);Object(o.useEffect)((function(){a()}),[]),Object(o.useEffect)((function(){l&&n.push("/sendsay-api-console/console")}),[l]);var d={authenticate:r,loading:c,error:s};return i.a.createElement(Pn,null,i.a.createElement(Un,null),i.a.createElement(Gn,d),i.a.createElement(Fn,null))}));function Yn(e){var n=Object(o.useRef)(e),t=Object(o.useRef)(null);return n.current!==e&&(t.current=n.current,n.current=e),t.current}var Kn,zn,Vn,Qn,Jn,Xn,$n,Zn,et,nt,tt,rt,at,ct,ot,it,st,lt,ut,dt,bt,pt,ft,Et,Ot,gt,jt,mt,xt,vt,ht,Rt,Tt,yt,It,St=function(){return i.a.createElement("svg",{width:"6",height:"18",viewBox:"0 0 6 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{clipPath:"url(#clip0)"},i.a.createElement("circle",{cx:"3",cy:"2",r:"2",fill:"black"}),i.a.createElement("circle",{cx:"3",cy:"9",r:"2",fill:"black"}),i.a.createElement("circle",{cx:"3",cy:"16",r:"2",fill:"black"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{x:"0",width:"6",height:"18",fill:"white"}))))},Ct=Be.b.div(Kn||(Kn=Object(Ne.a)(["\n  display: flex;\n  flex-direction: column;\n  jusfify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px 15px 15px 15px;\n  height: 100%;\n  width: 100%;\n\n  &:first-of-type {\n    padding-right: 0px;\n  }\n\n  &:last-of-type {\n    padding-left: 0px;\n  }\n"]))),qt=Be.b.label(zn||(zn=Object(Ne.a)(["\n  font-size: 12px;\n  color: ",";\n  margin-bottom: 3px;\n"])),Qe.GRAY_BRIGHT),_t=Be.b.textarea(Vn||(Vn=Object(Ne.a)(["\n  display: flex;\n  flex-basis: calc(100% - 90px);\n  border-radius: 5px;\n  border: 1px solid ",";\n  min-width: 400px;\n  min-height: 400px;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  font-family: Monaco;\n  font-size: 14px;\n  resize: none;\n"])),(function(e){return e.invalid?Qe.RED_BRIGHT:Qe.GRAY_LIGHT})),wt=Object(o.forwardRef)((function(e,n){var t=e.headerText,r=e.request,a=e.setRequest,s=e.readonly,l=Object(o.useState)(""),u=Object(He.a)(l,2),d=u[0],b=u[1],p=Yn(d),f=Yn(r.query),E=r.response,O=r.status,g=r.jsonInvalid;Object(o.useEffect)((function(){a&&a({request:{query:d}})}),[d]);var j=Object(o.useMemo)((function(){if(s){var e=JSON.stringify(E,null,3);return'""'!==e?e:""}return p==f||p==r.query?d:r.query}),[r,d,E,p,f]);return i.a.createElement(Ct,{ref:n},i.a.createElement(qt,null,t,":"),i.a.createElement(_t,{value:j,readOnly:s,onChange:function(e){return b(e.target.value)},invalid:!s&&g||s&&O===c.FAILED}))})),Lt=Be.b.div(Qn||(Qn=Object(Ne.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  width: 100%:\n  height: 100%;\n  overflow: scroll;\n  background-color: ",";\n"])),Qe.WHITE_BRIGHT),kt=Be.b.div(Jn||(Jn=Object(Ne.a)(["\n  margin-top: -50px;\n  cursor: pointer;\n  padding: 0 5px;\n\n  &:drag {\n    cursor: col-resize;\n  }\n\n  svg {\n    circle {\n      transition: 0.15s;\n      fill: ",";\n    }\n\n    &:hover circle {\n      fill: ",";\n    }\n  }\n"])),Qe.GRAY_LIGHT,Qe.GRAY_MEDIUM),At=function(e){var n=e.request,t=e.setRequest,r=Object(o.useState)(!1),a=Object(He.a)(r,2),c=(a[0],a[1],Object(o.useState)(!1)),s=Object(He.a)(c,2),l=s[0],u=s[1],d=Object(o.useState)(0),b=Object(He.a)(d,2),p=b[0],f=b[1],E=Yn(p),O=Object(o.useState)(100),g=Object(He.a)(O,2),j=g[0],m=g[1],x=Object(o.useState)(100),v=Object(He.a)(x,2),h=v[0],R=v[1],T=Object(o.useRef)(null),y=Object(o.useRef)(null),I=Object(o.useMemo)((function(){var e=T.current;if(e&&e.getBoundingClientRect)return e.getBoundingClientRect().width}),[T.current]),S=Object(o.useMemo)((function(){var e=y.current;if(e&&e.getBoundingClientRect)return e.getBoundingClientRect().width}),[y.current]),C=Object(o.useCallback)((function(){u(!0)}),[]),q=Object(o.useCallback)((function(){u(!1)}),[]),_=Object(o.useCallback)((function(){u(!1)}),[]),w=Object(o.useCallback)((function(e){if(f(e.pageX),l&&E>0&&p>0){var n=E-p;n>0&&I>400?(T.current.style.width="".concat(j-.07,"%"),y.current.style.width="".concat(h+.07,"%"),m((function(e){return e-.07})),R((function(e){return e+.07}))):n<0&&S>400&&(y.current.style.width="".concat(h-.07,"%"),T.current.style.width="".concat(j+.07,"%"),m((function(e){return e+.07})),R((function(e){return e-.07})))}}),[l,E,p,I,S,T.current,y.current,j,h]);return i.a.createElement(Lt,null,i.a.createElement(wt,{ref:T,headerText:De.REQUEST,request:n,setRequest:t}),i.a.createElement(kt,{onMouseDown:C,onMouseUp:q,onMouseMove:w,onMouseLeave:_},i.a.createElement(St,null)),i.a.createElement(wt,{ref:y,headerText:De.RESPONSE,request:n,readonly:!0}))},Gt=function(e){try{var n=JSON.parse(e);if(n&&"object"===typeof n)return!0}catch(t){}return!1},Ht=function(){return i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{opacity:"0.8"},i.a.createElement("path",{d:"M21 10H7",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M11 6H3",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M12 14H7",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M7 18H3",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},Ut=Be.b.div(Xn||(Xn=Object(Ne.a)(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  width: 100%;\n  padding: 15px;\n  background-color: ",";\n  border-top: 1px solid ",";\n\n  div:first-of-type {\n    margin: 0;\n    margin-left: 55px;\n  }\n"])),Qe.WHITE_BRIGHT,Qe.GRAY_LIGHT),Dt=Be.b.div($n||($n=Object(Ne.a)(["\n  transition: 0.15s;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 6px 4px;\n  border-radius: 7px;\n  border: 2px solid ",";\n\n  svg g path {\n    transition: 0.15s;\n  }\n\n  &:hover {\n    p {\n      color: ",";\n    }\n\n    svg g path {\n      stroke: ",";\n    }\n  }\n\n  &:focus {\n    border: 2px solid ",";\n  }\n"])),Qe.WHITE_BRIGHT,Qe.BLUE_BRIGHT,Qe.BLUE_BRIGHT,Qe.BLUE_LIGHT),Nt=Be.b.p(Zn||(Zn=Object(Ne.a)(["\n  transition: 0.15s;\n  color: ",";\n  font-size: 16px;\n  margin-left: 8px;\n"])),Qe.BLACK),Bt=function(e){var n=e.isLoading,t=e.request,r=e.setRequest,a=e.setResponse,c=e.jsonInvalid,s=Object(o.useCallback)((function(){return Gt(t.query)?a(t):c()}),[a,t]),l=Object(o.useCallback)((function(){if(Gt(t.query)){var e=S(t.query);return r({request:{query:e}})}return c()}),[r]);return i.a.createElement(Ut,null,i.a.createElement(an,{onClick:s,type:_n.BUTTON},n?i.a.createElement(An,null):De.SEND),i.a.createElement(Fn,null),i.a.createElement(Dt,{onClick:l},i.a.createElement(Ht,null),i.a.createElement(Nt,null,De.FORMAT)))},Mt=function(){return i.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},Ft=function(){return i.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1 6H4C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4V1M14 1V4C14 4.53043 14.2107 5.03914 14.5858 5.41421C14.9609 5.78929 15.4696 6 16 6H19M19 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V19M6 19V16C6 15.4696 5.78929 14.9609 5.41421 14.5858C5.03914 14.2107 4.53043 14 4 14H1",stroke:"#0D0D0D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},Pt=Be.b.div(et||(et=Object(Ne.a)(["\n  transition: 0.15s;\n  padding: 4px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid ",";\n\n  svg path {\n    transition: 0.15s;\n  }\n\n  &:hover {\n    svg path {\n      stroke: ",";\n    }\n  }\n\n  &:focus {\n    border-radius: 7px;\n    border: 2px solid ",";\n  }\n"])),Qe.WHITE_MEDIUM,Qe.BLUE_BRIGHT,Qe.BLUE_LIGHT),Wt=function(){var e=Object(o.useState)(!1),n=Object(He.a)(e,2),t=n[0],r=n[1],a=Object(o.useCallback)((function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullscreen?e.mozRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(),r(!0)}),[r]),c=Object(o.useCallback)((function(){var e=document;e.exitFullscreen?e.exitFullscreen():e.mozExitFullscreen?e.mozExitFullscreen():e.webkitExitFullscreen&&e.webkitExitFullscreen(),r(!1)}),[r]),s=Object(o.useCallback)((function(e){t&&"Escape"===e.key&&c()}),[c]),l=Object(o.useCallback)((function(){return t?c():a()}),[t,c,a]);return Object(o.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[s]),i.a.createElement(Pt,{onClick:l},t?i.a.createElement(Ft,null):i.a.createElement(Mt,null))},Yt=Be.b.div(nt||(nt=Object(Ne.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n"]))),Kt=Be.b.div(tt||(tt=Object(Ne.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),zt=Object(Be.b)(Kt)(rt||(rt=Object(Ne.a)([""]))),Vt=Be.b.p(at||(at=Object(Ne.a)(["\n  font-size: 20px;\n  color: ",";\n  margin-left: 20px;\n"])),Qe.BLACK),Qt=Object(Be.b)(Kt)(ct||(ct=Object(Ne.a)(["\n  margin-right: -7px;\n"]))),Jt=Be.b.div(ot||(ot=Object(Ne.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n"])),Qe.BLACK,Qe.GRAY_LIGHT),Xt=Be.b.span(it||(it=Object(Ne.a)([""]))),$t=Be.b.span(st||(st=Object(Ne.a)([""]))),Zt=Be.b.span(lt||(lt=Object(Ne.a)(["\n  margin: 0 5px;\n  color: ",";\n"])),Qe.GRAY_LIGHT),er=Be.b.div(ut||(ut=Object(Ne.a)(["\n  cursor: pointer;\n  margin-left: 30px;\n  margin-right: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),nr=Be.b.p(dt||(dt=Object(Ne.a)(["\n  color: ",";\n  font-size: 16px;\n"])),Qe.BLACK),tr=Be.b.img(bt||(bt=Object(Ne.a)(["\n  margin-left: 8px;\n"]))),rr=function(e){var n=e.login,t=e.sublogin,r=e.logout;return i.a.createElement(Yt,null,i.a.createElement(zt,null,i.a.createElement(Un,null),i.a.createElement(Vt,null,De.API_CONSOLE)),i.a.createElement(Qt,null,i.a.createElement(Jt,null,i.a.createElement(Xt,null,n),t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Zt,null,":"),i.a.createElement($t,null,t))),i.a.createElement(er,{onClick:r},i.a.createElement(nr,null,De.LOGOUT),i.a.createElement(tr,{src:"/sendsay-api-console/icons/log-out.svg"})),i.a.createElement(Wt,null)))},ar=Be.b.div(pt||(pt=Object(Ne.a)(["\n  bottom: -142px;\n  right: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 133px;\n  height: 141px;\n  border-radius: 3px;\n  background: ",";\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n"])),Qe.WHITE_BRIGHT),cr=Be.b.div(ft||(ft=Object(Ne.a)(["\n  transition: 0.15s;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  padding: 10px 15px;\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n\n    &:last-of-type {\n      background-color: ",";\n    }\n  }\n\n  &:first-of-type {\n    margin-top: 5px;\n  }\n\n  &:last-of-type {\n    margin-bottom: 5px;\n  }\n"])),Qe.WHITE_BRIGHT,Qe.BLACK,Qe.BLUE_BRIGHT,Qe.WHITE_BRIGHT,Qe.RED_BRIGHT),or=Be.b.div(Et||(Et=Object(Ne.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ",";\n  margin: 5px 0;\n"])),Qe.GRAY_LIGHT),ir=Object(o.forwardRef)((function(e,n){var t=e.request,r=e.setRequest,a=e.setResponse,c=e.removeRequest,s=e.setShowCopied;Object(o.useEffect)((function(){n.current.getBoundingClientRect().x<0&&(n.current.style.left=0)}),[n]);var l=Object(o.useCallback)((function(){r({request:t}),a(t)}),[]),u=Object(o.useCallback)((function(){var e=t.query;navigator.clipboard.writeText(e),s(!0),setTimeout((function(){return s(!1)}),1250)}),[t,s]),d=Object(o.useCallback)((function(){c({request:t})}),[c]);return i.a.createElement(ar,{ref:n},i.a.createElement(cr,{onClick:l},De.EXECUTE),i.a.createElement(cr,{onClick:u},De.COPY),i.a.createElement(or,null),i.a.createElement(cr,{onClick:d},De.DELETE))})),sr=Be.b.div(Ot||(Ot=Object(Ne.a)(["\n  transition: 0.15s;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  background-color: ",";\n  border-radius: 5px;\n  box-shadow: 0px 1px 2px ",";\n  margin-right: 10px;\n\n  svg g circle {\n    transition: 0.15s;\n    fill: ",";\n  }\n\n  &:hover {\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n\n    svg g circle {\n      fill: ",";\n    }\n  }\n"])),Qe.WHITE_BRIGHT,Qe.GRAY_SUPER_LIGHT,Qe.GRAY_LIGHT,Qe.GRAY_BRIGHT),lr=Be.b.div(gt||(gt=Object(Ne.a)(["\n  width: 10px;\n  height: 10px;\n  border: 1px solid ",";\n  background-color: ",";\n  border-radius: 50%;\n  margin-right: 5px;\n"])),Qe.GRAY_LIGHT,(function(e){return e.status===c.SUCCESS?Qe.GREEN:Qe.RED_BRIGHT})),ur=Be.b.p(jt||(jt=Object(Ne.a)(["\n  color: ",";\n  font-size: 16px;\n  margin-right: 10px;\n"])),Qe.BLACK),dr=Be.b.div(mt||(mt=Object(Ne.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]))),br=Be.b.div(xt||(xt=Object(Ne.a)(["\n  position: absolute;\n  padding: 0 5px;\n  background-color: ",";\n  border-radius: 5px;\n  animation-name: copy;\n  animation-duration: 1s;\n  animation-delay: 0.25s;\n\n  @keyframes copy {\n    from {\n      opacity: 1;\n      transform: translate(0);\n    }\n    to {\n      opacity: 0.2;\n      transform: translateY(-20px);\n    }\n  }\n"])),Qe.WHITE_LIGHT),pr=Be.b.p(vt||(vt=Object(Ne.a)(["\n  font-size: 12px;\n  color: ",";\n"])),Qe.BLACK),fr=function(){return i.a.createElement(dr,null,i.a.createElement(br,null,i.a.createElement(pr,null,De.COPIED)))},Er=function(e){var n=e.query,t=e.id,r=e.status,a=e.setRequest,c=e.setResponse,s=e.removeRequest,l=Object(o.useState)(!1),u=Object(He.a)(l,2),d=u[0],b=u[1],p=Object(o.useState)(!1),f=Object(He.a)(p,2),E=f[0],O=f[1],g=Object(o.useRef)(null),j=Object(o.useRef)(null);Object(o.useEffect)((function(){return document.addEventListener("mousedown",x),function(){document.removeEventListener("mousedown",x)}}),[j]);var m=Object(o.useMemo)((function(){return{query:n,id:t}}),[n,t]),x=Object(o.useCallback)((function(e){var n,t;(null===(n=j.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=g.current)||void 0===t?void 0:t.contains(e.target))||b(!1)}),[j,g,b]),v=Object(o.useCallback)((function(){b((function(e){return!e}))}),[b]);return i.a.createElement(sr,{onClick:v,ref:g},i.a.createElement(lr,{status:r}),i.a.createElement(ur,null,JSON.parse(n).action||De.EMPTY),i.a.createElement(St,null),E&&i.a.createElement(fr,null),d&&i.a.createElement(ir,{ref:j,request:m,setRequest:a,setResponse:c,removeRequest:s,setShowCopied:O}))},Or=Be.b.div(ht||(ht=Object(Ne.a)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n"])),Qe.GRAY_LIGHT,Qe.GRAY_LIGHT),gr=Be.b.div(Rt||(Rt=Object(Ne.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 15px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  margin-bottom: -160px;\n  padding-bottom: 160px;\n  margin-top: -25px;\n  padding-top: 25px;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),jr=Be.b.div(Tt||(Tt=Object(Ne.a)(["\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 15px;\n  border-left: 1px solid ",";\n  box-shadow: -15px 0 15px ",";\n"])),Qe.GRAY_LIGHT,Qe.WHITE_LIGHT),mr=Be.b.img(yt||(yt=Object(Ne.a)([""]))),xr=function(e){var n=e.setRequest,t=e.setResponse,r=e.removeRequest,a=e.removeAllRequests,c=e.allRequests,s={setRequest:n,setResponse:t,removeRequest:r},l=Object(o.useCallback)((function(){return a()}),[]);return i.a.createElement(Or,null,i.a.createElement(gr,null,c.map((function(e,n){return i.a.createElement(Er,Object.assign({},e,s,{key:n}))}))),i.a.createElement(jr,{onClick:l},i.a.createElement(mr,{src:"/sendsay-api-console/icons/cross.svg"})))},vr=Be.b.div(It||(It=Object(Ne.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  background-color: ",";\n"])),Qe.WHITE_MEDIUM),hr=Object(p.f)((function(e){var n=e.history,t=Ge(),r=t.logout,a=t.setRequest,c=t.setResponse,s=t.jsonInvalid,l=t.clearRequest,d=t.removeRequest,b=t.removeAllRequests,p=Object(u.c)(_e),f=Object(u.c)(we),E=Object(u.c)(qe),O=Object(u.c)(Le),g=Object(u.c)(ke),j=Object(u.c)(Ae);Object(o.useEffect)((function(){l()}),[]),Object(o.useEffect)((function(){E||n.push("/sendsay-api-console")}),[E]);var m={login:p,sublogin:f,logout:r},x={setRequest:a,setResponse:c,removeRequest:d,removeAllRequests:b,allRequests:g},v={request:O,setRequest:a},h={isLoading:j,request:O,setRequest:a,setResponse:c,jsonInvalid:s};return i.a.createElement(vr,null,i.a.createElement(rr,m),i.a.createElement(xr,x),i.a.createElement(At,v),i.a.createElement(Bt,h))})),Rr=Ie(),Tr=Rr.store,yr=Rr.persistor,Ir=function(){return i.a.createElement(b.a,null,i.a.createElement(u.a,{store:Tr},i.a.createElement(d.a,{loading:null,persistor:yr},i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/sendsay-api-console/console"},i.a.createElement(hr,null)),i.a.createElement(p.a,{path:"/sendsay-api-console"},i.a.createElement(Wn,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ir,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.441c76ae.chunk.js.map