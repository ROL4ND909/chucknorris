(this.webpackJsonpchucknorris=this.webpackJsonpchucknorris||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n.n(a),i=n(12),l=n.n(i),o=(n(39),n(30)),r=n(11),j=n(25),d=n.n(j),b=n(77),u=n(76),h=n(74),O=n(75);n(40);function m(e){var t=e.joke,n=e.addJoke,a=e.unaddJoke;return Object(c.jsxs)("li",{className:"joke",children:[Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:"".concat(t.joke)}}),n?Object(c.jsxs)("button",{className:"btn  btn--like",onClick:function(){return n(t)},children:[Object(c.jsx)("span",{className:"srt",children:"Add to favorites"}),Object(c.jsx)("svg",{version:"1.1",viewBox:"0 0 14 14","aria-hidden":"true",className:"svg-inline","data-test":"icon-heart",focusable:"false",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"})})]}):Object(c.jsxs)("button",{className:"btn  btn--like","data-variant":"liked",onClick:function(){return a(t.id)},children:[Object(c.jsx)("span",{className:"srt",children:"Remove from favorites"}),Object(c.jsx)("svg",{version:"1.1",viewBox:"0 0 14 14","aria-hidden":"true",className:"svg-inline","data-test":"icon-heart",focusable:"false",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"})})]})]})}n(41);function f(){return Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("h1",{className:"loader__text","data-text":"Getting some jokes...",children:"Getting some jokes..."})})}n(42);var x="//api.icndb.com/jokes/random/";var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=d()("Jokes",[]),l=Object(r.a)(i,2),j=l[0],k=l[1],v=Object(a.useState)(!1),p=Object(r.a)(v,2),g=p[0],N=p[1],S=Object(a.useState)(j.length<10),w=Object(r.a)(S,2),_=w[0],y=w[1],C=Object(a.useState)(!1),J=Object(r.a)(C,2),B=J[0],M=J[1],R=Object(a.useState)(0),G=Object(r.a)(R,2),I=G[0],T=G[1],z=function(e){if(!(j.find((function(t){return t.id===e.id}))||j.length>9)){var t=[e].concat(Object(o.a)(j));k(t)}};Object(a.useEffect)((function(){g&&_&&j.length<10&&fetch(x).then((function(e){return e.json()})).then((function(e){z(e.value),y(!1),setTimeout((function(){y(!0)}),5e3)}))}),[g,_]);var A=function(e){var t=j.filter((function(t){return t.id!==e}));k(t)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{position:"sticky",style:{backgroundColor:"var(--color-sunglo)"},children:Object(c.jsxs)(u.a,{value:I,onChange:function(e,t){T(t)},centered:!0,children:[Object(c.jsx)(h.a,{label:"Home",id:"home-tab","aria-controls":"home-panel"}),Object(c.jsx)(h.a,{label:Object(c.jsx)(O.a,{color:"secondary",badgeContent:j.length>0?j.length:null,children:"likes"}),id:"likes-tab","aria-controls":"likes-panel"})]})}),Object(c.jsxs)("main",{className:"wrapper",children:[Object(c.jsxs)("div",{className:"tabpanel",role:"tabpanel",id:"home-panel",hidden:0!==I,children:[Object(c.jsx)("button",{className:"btn",onClick:function(){M(!0),fetch(x+"10").then((function(e){return e.json()})).then((function(e){s(e.value),setTimeout((function(){M(!1)}),300)})).catch((function(e){return console.warn("We have an error here: err ".concat(e))}))},children:"Give me some jokes"}),Object(c.jsx)("ol",{className:"joke-list",children:n.map((function(e){return Object(c.jsx)(m,{joke:e,addJoke:z},e.id)}))})]}),Object(c.jsxs)("div",{className:"tabpanel",role:"tabpanel",id:"likes-panel",hidden:1!==I,children:[Object(c.jsxs)("div",{className:"toggle-bar",children:[Object(c.jsxs)("label",{className:"c-switch",children:[Object(c.jsx)("input",{className:"c-switch__input",type:"checkbox",onClick:function(e){N(e.target.checked)},value:!g}),Object(c.jsx)("span",{className:"c-switch__slider"})]})," Add random joke every 5 sec."]}),Object(c.jsx)("ol",{className:"joke-list","data-variant":"liked",children:j.map((function(e){return Object(c.jsx)(m,{joke:e,unaddJoke:A},e.id)}))})]})]}),B&&Object(c.jsx)(f,{})]})};l.a.render(Object(c.jsxs)(s.a.StrictMode,{children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)("h1",{className:"header__title",children:"I'll give you some jokes!"})})}),Object(c.jsx)(k,{}),Object(c.jsx)("footer",{children:Object(c.jsx)("small",{children:"By Roland Franke ;)"})})]}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b8982b85.chunk.js.map