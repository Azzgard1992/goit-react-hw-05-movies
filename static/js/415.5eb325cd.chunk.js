"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4672:function(n,t,e){e.d(t,{O:function(){return m}});var r,a,c,u=e(501),o=e(6871),i=e(168),s=e(6031),p=s.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]})),f=s.ZP.li(a||(a=(0,i.Z)(["\n  border-radius: ",";\n\n  > a {\n    text-decoration: none;\n  }\n"])),(function(n){return n.theme.radii.normal})),d=s.ZP.h3(c||(c=(0,i.Z)(["\n  text-align: center;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ",";\n  color: ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.red})),h=e(184),m=function(n){var t=n.movies,e=(0,o.TH)();return(0,h.jsx)(p,{children:t.map((function(n){var t=n.title,r=n.backdrop_path,a=n.id;return(0,h.jsx)(f,{children:(0,h.jsxs)(u.rU,{to:"/movies/".concat(a),state:{from:e},children:[(0,h.jsx)("img",{src:r?"https://www.themoviedb.org/t/p/w220_and_h330_face/".concat(r):"https://via.placeholder.com/220x330",alt:t}),(0,h.jsx)(d,{children:t})]})},a)}))})}},5415:function(n,t,e){e.r(t),e.d(t,{Home:function(){return f}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),o=e(4672),i=e(2791),s=e(2690),p=e(184),f=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,i.useState)(null),d=(0,a.Z)(f,2),h=d[0],m=d[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Df)();case 3:t=n.sent,e=t.results,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[h&&(0,p.jsx)("p",{children:"Something went wrong, please reload the page..."}),(0,p.jsx)(o.O,{movies:e})]})}},2690:function(n,t,e){e.d(t,{Df:function(){return s},Wf:function(){return f},dZ:function(){return h},ed:function(){return d},uR:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u),i="b49485b850e1a5911c943abe3524caa9";o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.5eb325cd.chunk.js.map