"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),c=e(439),i=e(757),o=e.n(i),u=e(791),a=e(689),s=e(626),f=e(184);function h(){var t=(0,u.useState)(!1),n=(0,c.Z)(t,2),e=n[0],i=n[1],h=(0,a.UO)().movieId,p=(0,u.useState)([]),v=(0,c.Z)(p,2),d=v[0],l=v[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.prev=1,t.next=4,(0,s.tx)(h);case 4:n=t.sent,l(n.data.results),i(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error fetching movie data:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]),(0,f.jsxs)("div",{children:[!e&&(0,f.jsx)("h2",{children:"Reviews:"}),e&&(0,f.jsx)("h2",{children:"Loading..."}),(0,f.jsx)("ul",{children:d.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:t.author}),(0,f.jsx)("p",{children:t.content})]},t.id)}))})]})}},626:function(t,n,e){e.d(n,{M1:function(){return a},Tz:function(){return u},hn:function(){return i},tx:function(){return s},uR:function(){return o}});var r=e(243),c="6586f18679356ff078f894039b823aea";function i(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))}function o(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c))}function u(t){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t))}function a(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c))}function s(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c))}},861:function(t,n,e){function r(t,n,e,r,c,i,o){try{var u=t[i](o),a=u.value}catch(s){return void e(s)}u.done?n(a):Promise.resolve(a).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,i){var o=t.apply(n,e);function u(t){r(o,c,i,u,a,"next",t)}function a(t){r(o,c,i,u,a,"throw",t)}u(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=681.5a390d56.chunk.js.map