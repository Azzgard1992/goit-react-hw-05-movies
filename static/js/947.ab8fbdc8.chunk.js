"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{9947:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return P}});var r,c,i,o,a,u=t(5861),s=t(885),p=t(7757),d=t.n(p),h=t(168),f=t(6031),l=f.ZP.button(r||(r=(0,h.Z)(["\n  display: block;\n  width: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  margin-top: ","px;\n  cursor: pointer;\n  border: ",";\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.sizes.button}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary})),m=t(184),x=function(n){var e=n.type,t=void 0===e?"button":e,r=n.children;return(0,m.jsx)(l,{type:t,children:r})},v=t(4299),g=t(2791),b=t(501),w=t(6871),j=t(2690),k=f.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),y=f.ZP.div(i||(i=(0,h.Z)(["\n  display: grid;\n  padding-left: ","px;\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),Z=f.ZP.div(o||(o=(0,h.Z)(["\n  display: grid;\n  gap: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  border-top: "," black;\n  border-bottom: "," black;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.borders.normal})),_=(0,f.ZP)(b.OL)(a||(a=(0,h.Z)(["\n  width: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  border-radius: ",";\n  text-decoration: none;\n  color: ",";\n  font-weight: ",";\n\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n\n  :hover:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.button}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.red})),P=function(){var n,e,t=(0,w.UO)().moviesId,r=(0,g.useState)(null),c=(0,s.Z)(r,2),i=c[0],o=c[1],a=(0,g.useState)(!1),p=(0,s.Z)(a,2),h=p[0],f=p[1],l=(0,g.useState)(null),P=(0,s.Z)(l,2),R=P[0],S=P[1],C=(0,w.TH)(),O=null!==(n=null===(e=C.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,g.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),n.next=4,(0,j.uR)(t);case 4:e=n.sent,o(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),S(n.t0);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),!i)return null;var U=i.title,z=i.poster_path,D=i.genres,G=i.overview,I=i.release_date,L=i.runtime;return(0,m.jsxs)(m.Fragment,{children:[R&&(0,m.jsx)("p",{children:"Something went wrong, please reload the page..."}),(0,m.jsxs)("main",{children:[h&&(0,m.jsx)(v.a,{}),(0,m.jsx)(b.rU,{to:O,children:(0,m.jsx)(x,{children:"Go back"})}),(0,m.jsxs)(k,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:z?"https://www.themoviedb.org/t/p/w300_and_h450_face/".concat(z):"https://via.placeholder.com/220x330",alt:U})}),(0,m.jsxs)(y,{children:[(0,m.jsxs)("h2",{children:[U,"(",I.slice(0,4),")"]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Runtime:"})," ",L,"m"]}),(0,m.jsx)("b",{children:"Ganres:"}),(0,m.jsx)("ul",{children:D.map((function(n){var e=n.id,t=n.name;return(0,m.jsx)("li",{children:t},e)}))}),(0,m.jsx)("b",{children:"Overview:"}),(0,m.jsx)("p",{children:G})]})]}),(0,m.jsxs)(Z,{children:[(0,m.jsx)("h2",{children:"Additional Information:"}),(0,m.jsx)(_,{to:"cast",state:C.state,children:"Cast"}),(0,m.jsx)(_,{to:"reviews",state:C.state,children:"Reviews"})]}),(0,m.jsx)(w.j3,{})]})]})}},2690:function(n,e,t){t.d(e,{Df:function(){return s},Wf:function(){return d},dZ:function(){return f},ed:function(){return h},uR:function(){return p}});var r=t(5861),c=t(7757),i=t.n(c),o=t(4569),a=t.n(o),u="b49485b850e1a5911c943abe3524caa9";a().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.ab8fbdc8.chunk.js.map