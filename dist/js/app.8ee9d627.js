(function(t){function e(e){for(var r,c,a=e[0],o=e[1],u=e[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0477":function(t,e,n){"use strict";n("49e5")},"49e5":function(t,e,n){},"4e52":function(t,e,n){"use strict";n("dd6b")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.76934148.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("ListDiscs",{attrs:{"list-discs":t.listDiscs}})],1)},i=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{staticClass:"img-fluid",attrs:{src:n("4ffd"),alt:"Logo Spotify"}})])}],o={name:"Header"},u=o,l=(n("0477"),n("2877")),f=Object(l["a"])(u,c,a,!1,null,"5d1e382d",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container d-flex justify-content-center align-items-center flex-wrap"},t._l(t.listDiscs,(function(t,e){return n("DiscCard",{key:e,attrs:{author:t.author,poster:t.poster,title:t.title,year:t.year}})})),1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"disc-card"},[n("div",{staticClass:"disc-image"},[n("img",{staticClass:"img-fluid",attrs:{src:t.poster,alt:t.title}})]),n("div",{staticClass:"disc-title"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"disc-author"},[t._v(" "+t._s(t.author)+" ")]),n("div",{staticClass:"disc-year"},[t._v(" "+t._s(t.year)+" ")])])},b=[],m={name:"Disc Card",props:["title","poster","author","year"]},y=m,g=(n("4e52"),Object(l["a"])(y,v,b,!1,null,"40b54982",null)),_=g.exports,O={name:"Discs",props:["listDiscs"],components:{DiscCard:_}},j=O,x=Object(l["a"])(j,d,h,!1,null,"1f674842",null),C=x.exports,D=n("bc3a"),w=n.n(D),P={name:"App",components:{Header:p,ListDiscs:C},data:function(){return{uriCall:"https://flynn.boolean.careers/exercises/api/array/music",listDiscs:[]}},methods:{getMusicDiscs:function(t){var e=this;w.a.get(t).then((function(t){e.listDiscs=t.data.response}))}},mounted:function(){this.getMusicDiscs(this.uriCall)}},M=P,S=(n("5c0b"),Object(l["a"])(M,s,i,!1,null,null,null)),$=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},dd6b:function(t,e,n){}});
//# sourceMappingURL=app.8ee9d627.js.map