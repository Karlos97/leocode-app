(this["webpackJsonpleocode-app"]=this["webpackJsonpleocode-app"]||[]).push([[0],{12:function(e,t,r){e.exports={input:"UsersListFilter_input__3XVtQ"}},13:function(e,t,r){e.exports={"users-list":"UsersList_users-list__1XOZE"}},25:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var s=r(5),n=r.n(s),a=r(2),c=r(6),i=Object(c.b)({name:"Users List",initialState:{usersList:[],changed:!1},reducers:{fetchUsers:function(e,t){e.usersList=t.payload.usersList}}}),u=i.actions,o=i,p=Object(c.a)({reducer:{users:o.reducer}}),l=(r(25),r(0)),d=r(3),j=r.n(d),h=r.p+"static/media/leocode-log.27bf6a3e.svg",m=r(14),f=r(7),b=r.n(f),x=r(1),O=b.a["paragraph-gray"],_=function(e){var t=e.index,r=e.name,s=e.userName;return Object(x.jsxs)("li",{className:b.a.user,children:[Object(x.jsxs)("p",{className:O,children:[t,"."]}),Object(x.jsx)("p",{className:b.a.name,children:r}),Object(x.jsxs)("p",{className:O,children:["@",s]})]})},v=r(12),g=r.n(v),L=function(e){var t=e.onFilterChange;return Object(x.jsx)("input",{className:g.a.input,type:"text",placeholder:"Search by user name...",onChange:t})},N=r(13),w=r.n(N),y=function(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),r=t[0],s=t[1],n=Object(a.c)((function(e){return e.users.usersList})),c=function(e){return null===e||void 0===e?void 0:e.map((function(e,t){return Object(x.jsx)(_,{index:t+1,name:e.name,userName:e.username},e.id)}))};return Object(x.jsxs)("div",{className:w.a["users-list"],children:[Object(x.jsx)("p",{children:" Users list "}),Object(x.jsx)(L,{onFilterChange:function(e){s(e.target.value.trim().toLowerCase())}}),Object(x.jsx)("ul",{children:c(""===r?n:null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(r)})))})]})},k=r(4),E=r.n(k),U=r(10);var C=function(){var e=Object(a.b)();return Object(l.useEffect)((function(){e(function(){var e=Object(U.a)(E.a.mark((function e(t){var r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){var e=Object(U.a)(E.a.mark((function e(){var t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch users data!");case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,r();case 4:s=e.sent,t(u.fetchUsers({usersList:s})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(x.jsxs)("div",{className:j.a.app,children:[Object(x.jsxs)("header",{className:j.a["app-header"],children:[Object(x.jsx)("img",{src:h,alt:"Leocode logo",className:j.a["app-header-logo"]}),Object(x.jsx)("p",{children:" This is recruitment task for Leocode company."})]}),Object(x.jsx)("section",{className:j.a["app-main"],children:Object(x.jsx)(y,{})})]})};n.a.render(Object(x.jsx)(a.a,{store:p,children:Object(x.jsx)(C,{})}),document.getElementById("root"))},3:function(e,t,r){e.exports={app:"App_app__2ziFi","app-header":"App_app-header__1U7id","app-header-logo":"App_app-header-logo__6uaAW","app-main":"App_app-main__3cwT_"}},7:function(e,t,r){e.exports={user:"ListElement_user__1qZ1F",name:"ListElement_name__2Spnd","paragraph-gray":"ListElement_paragraph-gray__3M-Pg"}}},[[28,1,2]]]);
//# sourceMappingURL=main.3a39581f.chunk.js.map