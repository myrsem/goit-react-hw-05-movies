"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{403:function(t,n,e){e.d(n,{Z:function(){return x}});var r,a,c,i,u=e(731),o=e(739),p=e(168),s=e(444),f=s.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),d=s.ZP.li(a||(a=(0,p.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 4px;\n  transition: transform 250ms ease-in-out;\n\n  :hover {\n    transform: translateY(-5px);\n  }\n"]))),h=s.ZP.img(c||(c=(0,p.Z)(["\n  object-fit: cover;\n  width: 180px;\n  height: 270px;\n"]))),l=s.ZP.p(i||(i=(0,p.Z)(["\n  width: 170px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: black;\n"]))),m=e(184),x=function(t){var n=t.movies,e=(0,o.TH)();return(0,m.jsx)("div",{children:(0,m.jsx)(f,{children:null===n||void 0===n?void 0:n.map((function(t){var n=t.id,r=t.title,a=t.poster_path;return(0,m.jsx)(d,{children:(0,m.jsxs)(u.rU,{to:"/movies/".concat(n),state:{from:e},children:[(0,m.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w300/".concat(a):"https://fr.web.img6.acsta.net/c_310_420/pictures/210/298/21029875_2013082116404994.jpg",alt:"poster of cinema"}),(0,m.jsx)(l,{children:r})]})},n)}))})})}},485:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r,a=e(885),c=e(791),i=e(299),u=e(403),o=e(168),p=e(444).ZP.h2(r||(r=(0,o.Z)(["\ntext-align: center;\n margin-top: 30px;\n margin-bottom: 15px;\n"]))),s=e(184),f=function(){var t=(0,c.useState)(null),n=(0,a.Z)(t,2),e=n[0],r=n[1];return(0,c.useEffect)((function(){i.Df().then((function(t){return r(t)}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(p,{children:"Trending today"}),e&&(0,s.jsx)(u.Z,{movies:e})]})}},299:function(t,n,e){e.d(n,{Df:function(){return o},IQ:function(){return s},Jh:function(){return f},XT:function(){return d},rs:function(){return p}});var r=e(861),a=e(757),c=e.n(a),i=e(44);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="fa4e2e7bb4f5fd2cf129e2fd6b1960d6",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.8043b176.chunk.js.map