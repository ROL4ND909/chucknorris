(this.webpackJsonpchucknorris=this.webpackJsonpchucknorris||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),s=t.n(a),i=t(11),l=t.n(i),r=(t(39),t(30)),o=t(19),j=t(25),d=t.n(j),b=t(77),u=t(76),h=t(74),O=t(75);t(40);function k(e){var n=e.joke,t=e.likeJoke,a=e.unlikeJoke;return Object(c.jsxs)("li",{className:"joke",children:[Object(c.jsx)("p",{children:n.joke}),t?Object(c.jsxs)("button",{className:"btn  btn--like",onClick:function(){return t(n.id)},children:[Object(c.jsx)("span",{className:"srt",children:"Add to favorites"}),Object(c.jsx)("svg",{version:"1.1",viewBox:"0 0 14 14","aria-hidden":"true",className:"svg-inline","data-test":"icon-heart",focusable:"false",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"})})]}):Object(c.jsxs)("button",{className:"btn  btn--like","data-variant":"liked",onClick:function(){return a(n.id)},children:[Object(c.jsx)("span",{className:"srt",children:"Remove from favorites"}),Object(c.jsx)("svg",{version:"1.1",viewBox:"0 0 14 14","aria-hidden":"true",className:"svg-inline","data-test":"icon-heart",focusable:"false",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"})})]})]})}t(41);function m(){return Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("h1",{className:"loader__text","data-text":"Getting some jokes...",children:"Getting some jokes..."})})}t(42);var x=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],s=n[1],i=d()("Jokes",[]),l=Object(o.a)(i,2),j=l[0],x=l[1],f=Object(a.useState)(!1),v=Object(o.a)(f,2),p=v[0],N=v[1],g=Object(a.useState)(0),C=Object(o.a)(g,2),S=C[0],w=C[1],J=function(e){if(j.find((function(n){return n.id===e}))||j.length>9)console.log("is liked or max like items");else{var n=t.find((function(n){return n.id===e}));x([n].concat(Object(r.a)(j)))}},y=function(e){var n=j.filter((function(n){return n.id!==e}));x(n)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{position:"sticky",style:{backgroundColor:"var(--color-geraldine)"},children:Object(c.jsxs)(u.a,{value:S,onChange:function(e,n){w(n)},centered:!0,children:[Object(c.jsx)(h.a,{label:"Home",id:"home-tab","aria-controls":"home-panel"}),Object(c.jsx)(h.a,{label:Object(c.jsx)(O.a,{color:"secondary",badgeContent:j.length>0?j.length:null,children:"likes"}),id:"likes-tab","aria-controls":"likes-panel"})]})}),Object(c.jsxs)("main",{className:"wrapper",children:[Object(c.jsxs)("div",{className:"tabpanel",role:"tabpanel",id:"home-panel",hidden:0!==S,children:[Object(c.jsx)("button",{className:"btn",onClick:function(){N(!0),setTimeout((function(){fetch("//api.icndb.com/jokes/random/10").then((function(e){return e.json()})).then((function(e){s(e.value),N(!1)})).catch((function(e){return console.warn("We have an error here: err ".concat(e))}))}),500)},children:"Give me some jokes"}),Object(c.jsx)("ol",{className:"joke-list",children:t.map((function(e){return Object(c.jsx)(k,{joke:e,likeJoke:J},e.id)}))})]}),Object(c.jsx)("div",{className:"tabpanel",role:"tabpanel",id:"likes-panel",hidden:1!==S,children:Object(c.jsx)("ol",{className:"joke-list","data-variant":"liked",children:j.map((function(e){return Object(c.jsx)(k,{joke:e,unlikeJoke:y},e.id)}))})})]}),p&&Object(c.jsx)(m,{})]})};l.a.render(Object(c.jsxs)(s.a.StrictMode,{children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)("h1",{className:"header__title",children:"I'll give you some jokes!"})})}),Object(c.jsx)(x,{}),Object(c.jsx)("footer",{children:Object(c.jsx)("small",{children:"By Roland Franke ;)"})})]}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.88e81666.chunk.js.map