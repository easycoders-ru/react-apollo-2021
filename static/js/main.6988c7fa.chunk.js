(this["webpackJsonpreact-apollo-2021"]=this["webpackJsonpreact-apollo-2021"]||[]).push([[0],{92:function(n,e,i){"use strict";i.r(e);var t,o,c,a,d,r,l,s,b,u,j,g,v,h,p,m,x,O=i(2),f=i.n(O),k=i(66),w=i.n(k),L=i(34),y=i(9),_=i(10),M=i(18),z=i(12),$=i(5),I=Object(M.gql)(t||(t=Object(_.a)(["\n  query getMovie($id: Int!) {\n    movie(id: $id) {\n      id\n      title\n      medium_cover_image\n      description_intro\n      rating\n      language\n      isLiked @client\n    }\n    suggestions(id: $id) {\n      id\n      medium_cover_image\n    }\n  }\n"]))),q=z.a.div(o||(o=Object(_.a)(["\n  width: 100%;\n  height: 100vh;\n  background-image: linear-gradient(-45deg, #d754ab, #fd723a);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: white;\n"]))),A=z.a.div(c||(c=Object(_.a)(["\n  margin-left: 10px;\n  width: 50%;\n"]))),C=z.a.div(a||(a=Object(_.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  width: 25%;\n  height: 60%;\n  background-color: transparent;\n"])),(function(n){return n.bg})),Q=z.a.h1(d||(d=Object(_.a)(["\n  font-size: 65px;\n  margin-bottom: 15px;\n"]))),B=z.a.h4(r||(r=Object(_.a)(["\n  font-size: 35px;\n  margin-bottom: 10px;\n"]))),J=z.a.p(l||(l=Object(_.a)(["\n  font-size: 28px;\n"]))),E=function(){var n,e,i,t,o,c,a=Object(y.e)().id,d=Object(M.useQuery)(I,{variables:{id:a}}),r=d.loading,l=d.data;return Object($.jsxs)(q,{children:[Object($.jsxs)(A,{children:[Object($.jsx)(Q,{children:r?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"".concat(null===l||void 0===l||null===(n=l.movie)||void 0===n?void 0:n.title," ").concat((null===l||void 0===l||null===(e=l.movie)||void 0===e?void 0:e.isLiked)?"\u2764\ufe0f":"\ud83d\ude25"," ")}),Object($.jsxs)(B,{children:[null===l||void 0===l||null===(i=l.movie)||void 0===i?void 0:i.language," \xb7 ",null===l||void 0===l||null===(t=l.movie)||void 0===t?void 0:t.rating]}),Object($.jsx)(J,{children:null===l||void 0===l||null===(o=l.movie)||void 0===o?void 0:o.description_intro})]}),Object($.jsx)(C,{bg:null===l||void 0===l||null===(c=l.movie)||void 0===c?void 0:c.medium_cover_image})]})},G=i(73),P=i(28),R=Object(P.a)(s||(s=Object(_.a)(["\n  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {\n    toggleLikeMovie(id: $id, isLiked: $isLiked) @client\n  }\n"]))),S=z.a.div(b||(b=Object(_.a)(["\n  height: 380px;\n  width: 100%;\n  border-radius: 7px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]))),D=z.a.div(u||(u=Object(_.a)(["\n  background-image: url(",");\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n"])),(function(n){return n.bg})),F=function(n){var e=n.id,i=n.bg,t=n.isLiked,o=Object(M.useMutation)(R,{variables:{id:parseInt(e),isLiked:t}}),c=Object(G.a)(o,1)[0];return Object($.jsxs)(S,{children:[Object($.jsx)(L.b,{to:"/".concat(e),children:Object($.jsx)(D,{bg:i})}),Object($.jsx)("button",{onClick:c,children:t?"\u041d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f":"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"})]})},H=Object(M.gql)(j||(j=Object(_.a)(["\n  query {\n    movies {\n      id\n      medium_cover_image\n      isLiked @client\n    }\n  }\n"]))),K=z.a.div(g||(g=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),N=z.a.header(v||(v=Object(_.a)(["\n  background-image: linear-gradient(-45deg, #d754ab, #fd723a);\n  height: 45vh;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),T=z.a.h1(h||(h=Object(_.a)(["\n  font-size: 60px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),U=z.a.h3(p||(p=Object(_.a)(["\n  font-size: 35px;\n"]))),V=z.a.div(m||(m=Object(_.a)(["\n  font-size: 18px;\n  opacity: 0.5;\n  font-weight: 500;\n  margin-top: 10px;\n"]))),W=z.a.div(x||(x=Object(_.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  width: 60%;\n  position: relative;\n  top: -50px;\n"]))),X=function(){var n=Object(M.useQuery)(H),e=n.loading,i=n.data;return Object($.jsxs)(K,{children:[Object($.jsxs)(N,{children:[Object($.jsx)(T,{children:"Apollo 2021"}),Object($.jsx)(U,{children:"\u0411\u0430\u0437\u0430 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0430 React, Apollo, GraphQL"})]}),e&&Object($.jsx)(V,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),!e&&(null===i||void 0===i?void 0:i.movies)&&Object($.jsx)(W,{children:i.movies.map((function(n){return Object($.jsx)(F,{id:n.id,bg:n.medium_cover_image,isLiked:n.isLiked},n.id)}))})]})};var Y=function(){return Object($.jsxs)(L.a,{children:[Object($.jsx)(y.a,{exact:!0,path:"/",component:X}),Object($.jsx)(y.a,{path:"/:id",component:E})]})},Z=new M.ApolloClient({uri:"https://easycoders-movies.herokuapp.com/",cache:new M.InMemoryCache,resolvers:{Movie:{isLiked:function(){return!1}},Mutation:{toggleLikeMovie:function(n,e,i){var t=e.id;e.isLiked;i.cache.modify({id:"Movie:".concat(t),fields:{isLiked:function(n){return!n}}})}}}});w.a.render(Object($.jsx)(f.a.StrictMode,{children:Object($.jsx)(M.ApolloProvider,{client:Z,children:Object($.jsx)(Y,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.6988c7fa.chunk.js.map