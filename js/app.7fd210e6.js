(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/h5demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0540":function(t,e,n){},"0590":function(t,e,n){"use strict";n("757a")},"3e57":function(t,e,n){t.exports=n.p+"img/logo.19724d1e.png"},"4aef":function(t,e,n){t.exports=n.p+"img/button.d9ac6e0e.png"},"4b77":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Title"),n("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[t._m(0),n("div",{staticClass:"nav"},t._l(t.navs,(function(e,r){return n("router-link",{key:r,attrs:{to:e.to}},[n("span",[t._v(t._s(e.name))])])})),1),t._m(1),t._m(2)])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("3e57")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("span",{staticClass:"icon-search"},[n("i",{staticClass:"iconfont"},[t._v("")])]),n("span",{staticClass:"icon-lang"},[n("i",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button"},[r("img",{attrs:{src:n("4aef")}})])}],s={data:function(){return{navs:[{name:"首页",to:"/index"},{name:"走进南湖",to:"/l"},{name:"玩转南湖",to:"/ls"},{name:"智游南湖",to:"/le"},{name:"文化南湖",to:"/la"},{name:"咨询南湖",to:"/lw"},{name:"旅游保障",to:"/lz"}]}}},l=s,u=(n("0590"),n("2877")),f=Object(u["a"])(l,o,c,!1,null,"e739ac4a",null),p=f.exports,d={name:"App",components:{Title:p},mounted:function(){console.log(Object({NODE_ENV:"production",BASE_URL:"/h5demo/"}))}},v=d,m=(n("034f"),Object(u["a"])(v,i,a,!1,null,null,null)),_=m.exports,b=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[t._m(0),n("div",{staticClass:"item container"},[n("div",{staticStyle:{margin:"auto",display:"flex"}},[n("div",{staticClass:"item-weather"}),n("div",{staticClass:"item-card"},t._l(t.itemCard,(function(e,r){return n("div",{key:r,staticClass:"item-card-list"},[n("div",{staticClass:"icon"}),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"content"},[t._v(t._s(e.content))])])})),0)])])])},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("img",{attrs:{src:n("585e")}})])}],C={data:function(){return{itemCard:[{title:"交通指南",content:"指导乘坐各种交通工具",color:""},{title:"购票须知",content:"了解景区开放时间和优惠政策"},{title:"精品路线",content:"旅游达人推荐，轻松畅玩南湖"},{title:"联系电话",content:"400-988-2016"}]}}},y=C,x=(n("ce95"),Object(u["a"])(y,h,g,!1,null,"3e58c63f",null)),O=x.exports;r["a"].use(b["a"]);var w=new b["a"]({routes:[{path:"/",redirect:"/index"},{path:"/index",component:O}]}),j=w;n("4b77");r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(t){return t(_)}}).$mount("#app")},"585e":function(t,e,n){t.exports=n.p+"img/banner.82cd1589.png"},"757a":function(t,e,n){},"85ec":function(t,e,n){},ce95:function(t,e,n){"use strict";n("0540")}});
//# sourceMappingURL=app.7fd210e6.js.map