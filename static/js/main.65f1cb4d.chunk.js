(this["webpackJsonpSelfStarter-Interview"]=this["webpackJsonpSelfStarter-Interview"]||[]).push([[0],{27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(28),r=a.n(i),o=(a(36),a(37),a(5)),l=a(2),j=a(3),u=(a(38),a.p+"static/media/Jefflix.55c8baeb.png"),d=s.a.createContext({}),b=function(e){var t=e.children,a=Object(n.useState)(JSON.parse(localStorage.getItem("activeUser"))||{}),s=Object(j.a)(a,2),i=s[0],r=s[1];return Object(c.jsx)(d.Provider,{value:{user:i,updateUser:function(e){r(e)}},children:t})},g=(d.Consumer,d);var h=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(n.useContext)(g),r=i.user,d=i.updateUser,b=Object(l.f)();return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){return window.scrollY>100?s(!0):s(!1),function(){window.removeEventListener("scroll")}}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"nav ".concat(a&&"nav-black"),children:[Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("img",{src:u,alt:"Jefflix logo",className:"nav-logo"})}),(null===r||void 0===r?void 0:r.email)?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h2",{className:"user-name",children:["Hello, ",r.email]}),Object(c.jsx)("button",{className:"login",onClick:function(){d(null),localStorage.removeItem("activeUser"),b.push("/")},children:"Logout"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.b,{to:"/login",children:Object(c.jsx)("button",{className:"login",children:"Login"})}),Object(c.jsx)(o.b,{to:"/register",children:Object(c.jsx)("button",{className:"register",children:"Register"})})]}),Object(c.jsx)(o.b,{to:"/profile",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"Avatar",className:"nav-avatar"})})]})})},f="36b04fd5a0f9107fcb4eb0c2da994bd5",m={fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchTopRated:"movie/top_rated?api_key=".concat(f,"&language=en-US"),fetchPopular:"/movie/popular?api_key=".concat(f,"&language=en-US&page=1"),fetchPopularTV:"/tv/popular?api_key=".concat(f,"&language=en-US&page=1"),fetchAction:"",fetchComedy:"",fetchHorror:""},v=a(10),p=a.n(v),O=a(11),x=a(30),A=a.n(x).a.create({baseURL:"https://api.themoviedb.org/3"});a(63);var E=function(){var e,t,a=Object(n.useState)([]),s=Object(j.a)(a,2),i=s[0],r=s[1],u=Object(l.f)(),d=Object(n.useContext)(g).user;return Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get(m.fetchPopular);case 2:t=e.sent,a=t.data.results,c=a[Math.floor(Math.random()*a.length-1)],r(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner-contents",children:[Object(c.jsx)("h1",{className:"banner-title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(c.jsxs)("div",{className:"banner-buttons",children:[Object(c.jsx)("button",{className:"banner-button",onClick:function(){if(d){var e=[];(e=JSON.parse(localStorage.getItem("favorites"))||[]).push(i),localStorage.setItem("favorites",JSON.stringify(e))}else alert("You must be logged in to favorite a movie"),u.push("/login")},children:"Favorite"}),Object(c.jsx)(o.b,{to:"/movie/".concat(null===i||void 0===i?void 0:i.id),children:Object(c.jsx)("button",{className:"banner-button",children:"Details"})})]}),Object(c.jsx)("h1",{className:"banner-description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"fade-bottom"})]})};a(27);var w=function(e){var t=e.title,a=e.fetchUrl,s=e.isLargeRow,i=Object(n.useState)([]),r=Object(j.a)(i,2),o=r[0],u=r[1],d=Object(l.f)();return Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get(a);case 2:t=e.sent,c=t.data.results,u(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row-posters",children:o.map((function(e,t){return Object(c.jsx)("img",{onClick:function(){return d.push("/movie/".concat(e.id))},className:"row-poster ".concat(s&&"row-poster-large"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(s?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))})]})},C=(a(64),function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(E,{}),Object(c.jsx)(w,{title:"Trending Now",fetchUrl:m.fetchTrending,isLargeRow:!0}),Object(c.jsx)(w,{title:"Popular Movies",fetchUrl:m.fetchPopular}),Object(c.jsx)(w,{title:"Popular TV Shows",fetchUrl:m.fetchPopularTV}),Object(c.jsx)(w,{title:"Top Rated",fetchUrl:m.fetchTopRated})]})}),N=(a(65),function(){var e,t=Object(l.g)().id,a=Object(n.useState)({}),s=Object(j.a)(a,2),i=s[0],r=s[1],o=Object(n.useState)([]),u=Object(j.a)(o,2),d=u[0],b=u[1],h=Object(n.useContext)(g).user,m=Object(l.f)();Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/movie/".concat(t,"?api_key=").concat(f,"&language=en-US"));case 2:a=e.sent,c=a.data,r(c),console.log(a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/movie/".concat(t,"/credits?api_key=").concat(f,"&language=en-US"));case 2:a=e.sent,c=a.data,b(c.cast.slice(0,3)),console.log(a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("div",{className:"detail",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:Object(c.jsxs)("div",{className:"detail-contents",children:[Object(c.jsx)("h2",{className:"detail-title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(c.jsx)("h2",{className:"detail-description",children:null===i||void 0===i?void 0:i.overview}),Object(c.jsx)("button",{className:"detail-fav-btn",onClick:function(){if(h){var e=[];(e=JSON.parse(localStorage.getItem("favorites"))||[]).push(i),localStorage.setItem("favorites",JSON.stringify(e))}else alert("You must be logged in to favorite a movie"),m.push("/login")},children:"Favorite This Movie"}),Object(c.jsx)("h2",{className:"detail-cast-title",children:"Starring:"}),d&&(null===d||void 0===d?void 0:d.map((function(e,t){return Object(c.jsxs)("p",{className:"detail-cast",children:[e.name," as ",e.character]})}))),Object(c.jsx)("h2",{className:"detail-facts-title",children:"Fun Facts:"}),Object(c.jsxs)("p",{className:"detail-facts",children:["Budget: $",null===i||void 0===i?void 0:i.budget]}),Object(c.jsxs)("p",{className:"detail-facts",children:["Genres:",null===i||void 0===i||null===(e=i.genres)||void 0===e?void 0:e.map((function(e,t){return" ".concat(e.name,", ")}))]}),Object(c.jsxs)("p",{className:"detail-facts",children:["See more ",Object(c.jsx)("a",{href:null===i||void 0===i?void 0:i.homepage,children:"here"})]})]})})})}),S=(a(66),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(n.useContext)(g).user,r=Object(l.f)();return Object(n.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("favorites"));s(e)}()}),[]),Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsx)("h1",{className:"profile-title",children:"My Profile"}),Object(c.jsxs)("h2",{className:"profile-email",children:["Email: ",null===i||void 0===i?void 0:i.email]}),Object(c.jsx)("h2",{className:"profile-favorites",children:"Favorites:"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"row-posters",children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)("img",{onClick:function(){return r.push("/movie/".concat(e.id))},className:"row-poster row-poster-large",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.title},t)}))})})]})}),I=(a(67),function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(),r=Object(j.a)(i,2),o=r[0],u=r[1],d=Object(n.useContext)(g).updateUser,b=Object(l.f)();return Object(c.jsx)("div",{className:"login-overlay",children:Object(c.jsxs)("div",{className:"login-container",children:[Object(c.jsx)("h2",{className:"login-title",children:"Login:"}),Object(c.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("credentials")),c={email:a,password:o};c.email===t.email&&c.password===t.password?(localStorage.setItem("activeUser",JSON.stringify(c)),d(c),b.push("/profile")):alert("wrong username and/or password, please try again")},children:[Object(c.jsxs)("label",{children:["Email Address:",Object(c.jsx)("input",{type:"text",className:"email",onChange:function(e){s(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Password:",Object(c.jsx)("input",{type:"password",className:"password",onChange:function(e){u(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",className:"btn-submit",children:"Login"})]})]})})}),Q=(a(68),function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(),r=Object(j.a)(i,2),o=r[0],u=r[1],d=Object(n.useState)(),b=Object(j.a)(d,2),h=b[0],f=b[1],m=Object(n.useState)(),v=Object(j.a)(m,2),p=v[0],O=v[1],x=Object(n.useContext)(g).updateUser,A=Object(l.f)();return Object(c.jsx)("div",{className:"register-overlay",children:Object(c.jsxs)("div",{className:"register-container",children:[Object(c.jsx)("h2",{className:"register-title",children:"New? Make an Account!"}),Object(c.jsxs)("form",{className:"register-form",onSubmit:function(e){if(h===p){e.preventDefault();var t={name:a,email:o,password:h},c={email:o,password:h};localStorage.setItem("credentials",JSON.stringify(t)),localStorage.setItem("activeUser",JSON.stringify(c)),x(c),A.push("/profile")}else e.preventDefault(),alert("Passwords do not match!")},children:[Object(c.jsxs)("label",{children:["Name:",Object(c.jsx)("input",{type:"text",className:"email",onChange:function(e){s(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Email Address:",Object(c.jsx)("input",{type:"text",className:"email",onChange:function(e){u(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Password:",Object(c.jsx)("input",{type:"password",className:"password",onChange:function(e){f(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Confirm Password:",Object(c.jsx)("input",{type:"password",className:"password",onChange:function(e){O(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",className:"btn-submit",children:"Make an Account"})]})]})})});var B=function(){return Object(c.jsx)(b,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{basename:"/SelfStarter-Interview",children:[Object(c.jsx)(h,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(C,{})}),Object(c.jsx)(l.a,{path:"/profile",children:Object(c.jsx)(S,{})}),Object(c.jsx)(l.a,{path:"/movie/:id",children:Object(c.jsx)(N,{})}),Object(c.jsx)(l.a,{path:"/login",children:Object(c.jsx)(I,{})}),Object(c.jsx)(l.a,{path:"/register",children:Object(c.jsx)(Q,{})})]})]})})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),J()}},[[69,1,2]]]);
//# sourceMappingURL=main.65f1cb4d.chunk.js.map