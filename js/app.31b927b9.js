(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/h5demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"07a6":function(t,e,a){t.exports=a.p+"img/login.5e004ad6.png"},"20cd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"App"},l=r,o=(a("034f"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,null,null),u=c.exports,p=a("8c4f"),d=a("a78e"),f=a.n(d),v="X-Litemall-Admin-Token";function m(){return f.a.get(v)}function h(t){return f.a.set(v,t)}function b(){return f.a.remove(v)}var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[t._m(0),a("div",{staticClass:"login-submit"},[a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{staticClass:"input",attrs:{name:"username",label:"用户名",clearable:!0,placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{staticClass:"input",attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",clearable:!0,rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticStyle:{margin:"28px 0px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)],1)],1)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-title"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:a("07a6")}})]),s("div",{staticClass:"text"},[s("span",[t._v("Sign In")]),s("span",[t._v("登录")])])])}],_=a("bc3a"),x=a.n(_),y=x.a.create({baseURL:"http://123.57.38.73:8083/admin",timeout:12e4});y.interceptors.request.use((function(t){return m()&&(t.headers["X-Litemall-Admin-Token"]=m()),t})),y.interceptors.response.use((function(t){var e=t.data;return 501===e.errno&&console.log("请登录"),t}));var w=y;function k(t,e){var a={username:t,password:e};return w({url:"/auth/login",method:"post",data:a})}var S={data:function(){return{username:"",password:""}},mounted:function(){b()},methods:{onSubmit:function(t){var e=this;k(t.username,t.password).then((function(t){0===t.data.errno&&(h(t.data.data),e.$router.push("/user"))}))}}},O=S,j=(a("a881"),Object(o["a"])(O,g,C,!1,null,"80b4e250",null)),I=j.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("div",{staticClass:"user-search"},[s("div",{staticClass:"user-search-title"},[t._v("超级会员激活")]),s("div",{staticClass:"user-search-input"},[s("van-field",{staticClass:"input",attrs:{type:"tel",placeholder:"输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),s("van-button",{staticClass:"button",attrs:{round:"",type:"info"},on:{click:t.onButton}},[t._v("搜索")])],1)]),t.userItem?s("div",{staticClass:"user-item"},t._l(t.userItem,(function(e,a){return s("div",{key:a,staticClass:"user-item-content"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-name"},[t._v(t._s(e.nickName))]),s("div",{staticClass:"title-phone"},[s("span",{staticStyle:{"vertical-align":"super","margin-right":"12px"}},[t._v(t._s(e.mobile))]),s("van-icon",{attrs:{name:"envelop-o",size:"26",color:"#2176CF"},on:{click:function(e){return t.showPopup(a)}}})],1)]),s("div",{staticClass:"context"},[s("div",{staticClass:"context-left"},[s("van-cell",{staticClass:"cell",attrs:{title:"ID","title-class":"cell-left","value-class":"cell-right",value:e.userId}}),s("van-cell",{staticClass:"cell",attrs:{title:"会员类型","title-class":"cell-left","value-class":"cell-right",value:e.superVipName}}),s("van-cell",{staticClass:"cell",attrs:{title:"最新购买时间","title-class":"cell-left","value-class":"cell-right",value:e.lastBuyTime}})],1),1===e.superVipStatus?s("div",{staticClass:"context-right",staticStyle:{background:"#ff770f"}},[s("span",{on:{click:function(a){return t.onUpdata(e.mobile)}}},[t._v("待激活")])]):t._e(),2===e.superVipStatus?s("div",{staticClass:"context-right",staticStyle:{background:"#2176cf"}},[s("span",[t._v("已激活")])]):t._e()]),s("div",{staticClass:"button"},[s("van-cell",{staticClass:"cell",attrs:{title:"生日","title-class":"cell-left","value-class":"cell-right",value:e.birthday}}),s("van-cell",{staticClass:"cell",attrs:{title:"地址","title-class":"cell-left","value-class":"cell-right",value:e.receiptAddress}})],1)])})),0):s("div",{staticClass:"bg"},[s("img",{attrs:{src:a("b6f8")}})]),s("van-popup",{staticClass:"message",model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.userItem[t.index]?s("div",[s("div",{staticClass:"message-title"},[s("van-icon",{attrs:{name:"envelop-o",size:"22",color:"#fff"}}),s("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.userItem[t.index].nickName))]),s("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.userItem[t.index].mobile))])],1),s("div",{staticClass:"message-content"},[s("van-field",{staticClass:"text",attrs:{rows:"1",autosize:"",type:"textarea",placeholder:"请输入留言"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("van-button",{staticClass:"button",attrs:{round:"",type:"info"},on:{click:function(e){return t.onMessage(t.userItem[t.index].mobile,t.message)}}},[t._v("发送")])],1)]):t._e()])],1)},$=[];function z(t,e,a){var s={mobile:t,page:e,size:a};return w({url:"/super-vip/v1/queryVipPageList",method:"post",data:s})}function M(t){var e={mobile:t};return w({url:"/super-vip/activateSuperVip",method:"post",data:e})}function T(t,e){var a={phone:t,content:e};return w({url:"/message/send",method:"post",data:a})}var E={data:function(){return{mobile:"",page:1,size:10,userItem:"",show:!1,index:0,message:""}},methods:{onButton:function(){var t=this;z(this.mobile,this.page,this.size).then((function(e){t.userItem=e.data.data.items,console.log(t.userItem)}))},onUpdata:function(t){var e=this;this.$dialog.confirm({title:"超级会员",message:"是否激活超级会员"}).then((function(){M(t).then((function(t){e.$toast("激活成功"),console.log(t.data)})).then((function(){e.onButton()}))})).catch((function(){}))},onMessage:function(t,e){T(t,e).then((function(t){console.log(t.data)})),this.show=!1,this.message=""},showPopup:function(t){this.show=!0,this.index=t}}},V=E,q=(a("f835"),Object(o["a"])(V,P,$,!1,null,"7c5a235a",null)),A=q.exports;s["a"].use(p["a"]);var B=new p["a"]({routes:[{path:"/",redirect:"/user"},{path:"/login",component:I},{path:"/user",component:A}]});B.beforeEach((function(t,e,a){"/login"===t.path||m()?a():a("/login")}));a("5cfb"),a("157a");var L=a("772a"),N=a("565f"),U=a("b650"),J=a("ad06"),X=a("7744"),D=a("2241"),F=a("e41f"),R=a("d399");s["a"].use(R["a"]),s["a"].use(F["a"]),s["a"].use(D["a"]),s["a"].use(X["a"]),s["a"].use(J["a"]),s["a"].use(L["a"]),s["a"].use(N["a"]),s["a"].use(U["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(u)},router:B}).$mount("#app")},"85ec":function(t,e,a){},a881:function(t,e,a){"use strict";a("bb53")},b6f8:function(t,e,a){t.exports=a.p+"img/white-bg.40951c07.png"},bb53:function(t,e,a){},f835:function(t,e,a){"use strict";a("20cd")}});
//# sourceMappingURL=app.31b927b9.js.map