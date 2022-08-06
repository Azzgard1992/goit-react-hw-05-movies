"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[83],{4672:function(n,e,t){t.d(e,{O:function(){return m}});var r,o,i,a=t(501),c=t(6871),u=t(168),s=t(6031),p=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]})),d=s.ZP.li(o||(o=(0,u.Z)(["\n  border-radius: ",";\n\n  > a {\n    text-decoration: none;\n  }\n"])),(function(n){return n.theme.radii.normal})),f=s.ZP.h3(i||(i=(0,u.Z)(["\n  text-align: center;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ",";\n  color: ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.red})),h=t(184),m=function(n){var e=n.movies,t=(0,c.TH)();return(0,h.jsx)(p,{children:e.map((function(n){var e=n.title,r=n.backdrop_path,o=n.id;return(0,h.jsx)(d,{children:(0,h.jsxs)(a.rU,{to:"/movies/".concat(o),state:{from:t},children:[(0,h.jsx)("img",{src:r?"https://www.themoviedb.org/t/p/w220_and_h330_face/".concat(r):"https://via.placeholder.com/220x330",alt:e}),(0,h.jsx)(f,{children:e})]})},o)}))})}},2083:function(n,e,t){t.r(e),t.d(e,{Movies:function(){return N}});var r,o,i,a,c=t(5861),u=t(885),s=t(7757),p=t.n(s),d=t(5705),f=t(6409),h=t(168),m=t(6031),l=m.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white})),g=m.ZP.button(o||(o=(0,h.Z)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  background-color: ",";\n  border: ",";\n  color: ",";\n  padding-top: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  cursor: pointer;\n  border-bottom-right-radius: ",";\n  border-top-right-radius: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal})),x=(0,m.ZP)(d.l0)(i||(i=(0,h.Z)(["\n  position: relative;\n"]))),v=(0,m.ZP)(d.gN)(a||(a=(0,h.Z)(["\n  display: block;\n  width: ","px;\n  padding-top: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  color: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.sizes.input}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.normal})),b=t(719),w=t(184),Z={imagesName:""},y=function(n){var e=n.onChange;return(0,w.jsx)(l,{children:(0,w.jsx)(d.J9,{initialValues:Z,onSubmit:function(n,t){var r=n.imagesName,o=t.resetForm;if(""===r.trim())return f.Am.warn("Enter something",{position:"top-center",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),void o();e(r)},children:(0,w.jsxs)(x,{children:[(0,w.jsx)(v,{type:"text",name:"imagesName"}),(0,w.jsx)(g,{type:"submit",children:(0,w.jsx)(b.Goc,{size:16})})]})})})},k=t(4672),j=t(2791),_=t(501),P=t(2690),C=t(4299),N=function(){var n,e=(0,j.useState)([]),t=(0,u.Z)(e,2),r=t[0],o=t[1],i=(0,j.useState)(!1),a=(0,u.Z)(i,2),s=a[0],d=a[1],f=(0,j.useState)(null),h=(0,u.Z)(f,2),m=h[0],l=h[1],g=(0,_.lr)(),x=(0,u.Z)(g,2),v=x[0],b=x[1],Z=null!==(n=v.get("query"))&&void 0!==n?n:"";(0,j.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,P.Wf)(Z);case 4:e=n.sent,t=e.results,o(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),l(n.t0);case 12:return n.prev=12,d(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}Z.trim()&&function(){n.apply(this,arguments)}()}),[Z]),console.log(m);var N=r.length>0;return(0,w.jsxs)("main",{children:[(0,w.jsx)(y,{value:Z,onChange:function(n){b(""!==n?{query:n}:{})}}),m&&(0,w.jsx)("p",{children:"Something went wrong, please reload the page..."}),s&&(0,w.jsx)(C.a,{}),N&&(0,w.jsx)(k.O,{movies:r}),r.length<=0&&""!==Z&&(0,w.jsx)("p",{children:"Nothing found for your request."})]})}},2690:function(n,e,t){t.d(e,{Df:function(){return s},Wf:function(){return d},dZ:function(){return h},ed:function(){return f},uR:function(){return p}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),c=t.n(a),u="b49485b850e1a5911c943abe3524caa9";c().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=83.2931a8ea.chunk.js.map