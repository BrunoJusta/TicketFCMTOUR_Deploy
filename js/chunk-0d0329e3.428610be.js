(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d0329e3"],{bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shadow",attrs:{id:"loginform"}},[t._m(0),n("div",{staticClass:"container col-sm-7"},[t.show?n("b-form",{on:{submit:function(e){return e.preventDefault(),t.login()}}},[n("b-form-group",{attrs:{id:"input-group-1"}},[n("label",{attrs:{for:"input-1"}},[t._v("Email")]),n("b-form-input",{staticClass:"rounded-0",attrs:{id:"input-1",type:"email",required:"",placeholder:"Introduzir email"},model:{value:t.emailLogin,callback:function(e){t.emailLogin=e},expression:"emailLogin"}})],1),n("b-form-group",{attrs:{id:"input-group-4"}},[n("label",{attrs:{for:"input-4"}},[t._v("Password")]),n("b-form-input",{staticClass:"rounded-0",attrs:{id:"input-4",type:"password",required:"",placeholder:"Introduzir password"},model:{value:t.passwordLogin,callback:function(e){t.passwordLogin=e},expression:"passwordLogin"}})],1),n("div",{staticClass:"container"},[n("b-button",{staticClass:"submit",attrs:{type:"submit",id:"show-btn",squared:""}},[t._v("Entrar")])],1)],1):t._e()],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-full title"},[n("h1",{attrs:{id:"redTitle"}},[n("span",{attrs:{id:"title"}},[t._v("FCM")]),t._v("TICKET MANAGER")])])}],a=(n("96cf"),n("1da1")),s={name:"LoginForm",data:function(){return{emailLogin:"",passwordLogin:"",show:!0}},methods:{login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("login",{email:t.emailLogin,password:t.passwordLogin});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},o=s,l=(n("e2be"),n("2877")),u=Object(l["a"])(o,r,i,!1,null,"365c078b",null);e["default"]=u.exports},c5c7:function(t,e,n){},e2be:function(t,e,n){"use strict";n("c5c7")}}]);
//# sourceMappingURL=chunk-0d0329e3.428610be.js.map