"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{626:function(t,e,n){n.d(e,{M1:function(){return u},Tz:function(){return a},hn:function(){return i},tx:function(){return s},uR:function(){return o}});var r=n(243),c="6586f18679356ff078f894039b823aea";function i(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))}function o(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c))}function a(t){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t))}function u(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c))}function s(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c))}},584:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(439),c=n(626),i=n(791),o=n(689),a=n(87),u="Home_cardImg__CNhS5",s="Home_filmList__COgcF",f=n(184);function h(){var t=(0,o.TH)(),e=(0,i.useState)([]),n=(0,r.Z)(e,2),h=n[0],m=n[1];return(0,i.useEffect)((function(){(0,c.hn)().then((function(t){return m(t.data.results)}))}),[]),(0,f.jsxs)("div",{children:[" ",(0,f.jsx)("ul",{className:s,children:h.map((function(e){return(0,f.jsx)(a.rU,{to:"movies/".concat(e.id),state:{from:t},children:(0,f.jsxs)("li",{className:u,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:e.overview,className:u}),(0,f.jsx)("h5",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=584.29a3af6b.chunk.js.map