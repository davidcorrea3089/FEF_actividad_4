(this.webpackJsonpactividad2=this.webpackJsonpactividad2||[]).push([[0],{34:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(26),r=c.n(s),i=(c(34),c(8)),o=c(27),l=c.n(o).a.create({baseURL:"https://three-points.herokuapp.com/api",withCredentials:!0});l.interceptors.response.use((function(e){return e.data}),(function(e){401===(null===e||void 0===e?void 0:e.response.status)&&(localStorage.removeItem("userId"),window.location.replace("/login"))}));var d=function(){return l.get("/posts")},j=c(2),m=c(0);var u=function(e){var t=Object(j.f)().replace,c=Object(a.useState)(!1),n=Object(i.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)("loaded"),d=Object(i.a)(o,2),u=d[0],b=d[1];function h(c){var a,n;c.preventDefault(),b("loading"),(a=c.target.userName.value,n=c.target.password.value,l.post("/login",{username:a,password:n})).then((function(c){r(!1),b("loaded"),localStorage.setItem("userId",c.id),e.onLoginComplete(c),t("/")})).catch((function(e){r(!0),b("loaded")}))}return"loaded"===u?Object(m.jsx)("div",{className:"wrapper fadeInDown",children:Object(m.jsxs)("div",{id:"formContent",children:[Object(m.jsx)("div",{className:"fadeIn first mb-3 mt-3",children:Object(m.jsx)("img",{className:"rounded-circle",src:"https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",id:"icon",alt:"User Icon"})}),Object(m.jsxs)("form",{onSubmit:h,children:[s?Object(m.jsx)("div",{className:"error-login",children:"Error con el login"}):"",Object(m.jsx)("input",{type:"text",id:"field-login",className:"fadeIn second",name:"userName",placeholder:"Nombre de usuario"}),Object(m.jsx)("input",{type:"text",id:"field-password",className:"fadeIn third",name:"password",placeholder:"Contrase\xf1a"}),Object(m.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log In"})]})]})}):"loading"===u?Object(m.jsx)("div",{className:"wrapper fadeInDown",children:Object(m.jsxs)("div",{id:"formContent",children:[Object(m.jsx)("div",{className:"fadeIn first mb-3 mt-3",children:Object(m.jsx)("img",{className:"rounded-circle",src:"https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",id:"icon",alt:"User Icon"})}),Object(m.jsx)("form",{onSubmit:h,children:Object(m.jsx)("div",{className:"cargando-login",children:"Cargando..."})})]})}):void 0},b=c(9);var h=function(){return Object(m.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(b.b,{className:"icono-nav-bar",to:"/",children:Object(m.jsx)("i",{className:"fas fa-dragon"})}),Object(m.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Actividad 4"}),Object(m.jsx)(b.b,{className:"icono-nav-bar",to:"/profile",children:Object(m.jsx)("i",{className:"material-icons",children:"person_pin"})})]})})};var f=function(e){var t=Object(a.useState)(e.likes),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 mt-2",children:Object(m.jsxs)("div",{className:"card mb-2",children:[Object(m.jsx)("img",{className:"card-img-top",src:e.image,alt:"Comida"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-7 col-sm-7 author-container",children:Object(m.jsx)("span",{className:"author-post",children:e.author})}),Object(m.jsx)("div",{className:"col-5 col-sm-5",children:Object(m.jsxs)("button",{onClick:function(){var t;(t=e.id,l.post("/posts/".concat(t,"/like"))).then((function(t){d().then((function(t){t.filter((function(t){return t.id===e.id})).map((function(e){return s(e.likes)}))}))}))},type:"button",className:"btn btn-danger",children:[Object(m.jsx)("i",{className:"fa fa-thumbs-o-up"}),"Me gusta (",n,")"]})})]}),Object(m.jsx)("p",{className:"card-text mt-3",children:e.text})]}),Object(m.jsx)("div",{className:"post-meta",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6 col-sm-6",children:Object(m.jsxs)("span",{className:"timestamp",children:[Object(m.jsx)("i",{className:"fa fa-clock-o"}),e.createdAt]})}),Object(m.jsx)("div",{className:"col-6 col-sm-6",children:Object(m.jsxs)("span",{className:"comments",children:[Object(m.jsx)("i",{className:"fa fa-comments"}),e.comments," comentarios"]})})]})})]})})};var O=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){return d().then((function(e){s(e)})),function(){s({})}}),[]),n.length>0?Object(m.jsx)("div",{className:"row ml-1 mr-1",children:n.filter((function(t){return t.text.toLowerCase().includes(e.search.toLowerCase())})).map((function(e,t){return Object(m.jsx)(f,{createdAt:e.createdAt,author:e.author.name,text:e.text,comments:e.comments.length,image:e.image,likes:e.likes,id:e.id},e.id)}))}):"Cargando..."};var p=function(e){return Object(m.jsxs)("div",{className:"container-profile",children:[Object(m.jsx)("div",{className:"profile-photo",children:Object(m.jsx)("img",{src:e.avatar,className:"rounded-circle",alt:"profile",width:"100"})}),Object(m.jsx)("div",{className:"user-name mt-1",children:Object(m.jsx)("span",{className:"author-post",children:e.username})}),Object(m.jsx)("div",{className:"biography",children:Object(m.jsx)("p",{className:"card-text mt-3",children:e.bio})}),Object(m.jsx)("div",{className:"boton-logout mt-3",onClick:function(){e.onClickLogout()},children:"Salir"})]})};var x=function(e){var t=Object(a.useState)(e.value),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(m.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(m.jsx)("form",{className:"form-inline",onSubmit:function(t){t.preventDefault(),e.onSearch(n)},children:Object(m.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Buscar","aria-label":"Buscar",value:n,onChange:function(e){s(e.target.value)}})})})};var v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(i.a)(s,2),o=r[0],d=r[1],b=Object(j.f)();function f(){l.post("/logout").then((function(e){b.push("/login"),localStorage.removeItem("userId"),d()}))}return Object(a.useEffect)((function(){var e=localStorage.getItem("userId");e?function(e){return l.get("/users/".concat(e))}(e).then((function(e){d(e),b.push("/")})):b.push("/login")}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",exact:!0,component:function(){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{value:c,onSearch:function(e){return function(e){n(e)}(e)}}),Object(m.jsx)(O,{search:c})]})}}),Object(m.jsx)(j.a,{path:"/profile",exact:!0,component:function(){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(p,{avatar:o.avatar,username:o.name,bio:o.bio,onClickLogout:function(){return f()}})]})}}),Object(m.jsx)(j.a,{path:"/login",exact:!0,component:function(){return Object(m.jsx)(u,{onLoginComplete:function(e){return function(e){d(e)}(e)}})}})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(v,{})})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.b9f6cc61.chunk.js.map