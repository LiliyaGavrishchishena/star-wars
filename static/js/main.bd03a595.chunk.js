(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(18),i=c(8),l=c(2),j=(c(25),function(){return Object(n.jsx)("header",{children:Object(n.jsx)("nav",{children:Object(n.jsx)("div",{className:"nav-wrapper blue-grey darken-1",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(i.b,{to:"/",children:"StarWars"})})})})})}),o=function(){return Object(n.jsx)("footer",{className:"page-footer blue-grey darken-1",children:Object(n.jsx)("div",{className:"center-align",children:"\xa9 2020 Liliia Havryshchyshena"})})},d=c(6),b=c.n(d),u=c(10),O=c(9),h=c.p+"static/media/planet.4c0ccaff.jpg",x=function(e){var t=e.planet,c=t.url.split("/").reverse()[1];return Object(n.jsx)(i.b,{to:"/planets/".concat(c),children:Object(n.jsxs)("div",{className:"card large",children:[Object(n.jsxs)("div",{className:"card-image",children:[Object(n.jsx)("img",{alt:"planetImg",src:h}),Object(n.jsx)("span",{className:"card-title",children:t.name})]}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Climate - "}),t.climate]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Population: "}),t.population]})]})]})})},p=function(e){var t=e.planets;return Object(n.jsx)("div",{className:"row",children:t.map((function(e){return Object(n.jsx)("div",{className:"col s12 m6 l4 xl3",children:Object(n.jsx)(x,{planet:e})},e.name)}))})},v=function(e){var t=e.navigation,c=e.fetchPlanets;return Object(n.jsxs)("div",{className:"navigation",children:[t.prevUrl&&Object(n.jsx)("button",{className:"waves-effect waves-light btn-large blue-grey darken-1",onClick:function(){return c(t.prevUrl)},children:"Prev"}),t.nextUrl&&Object(n.jsx)("button",{className:"waves-effect waves-light btn-large blue-grey darken-1",onClick:function(){return c(t.nextUrl)},children:"Next"})]})},m=function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(n.jsx)("div",{className:"preloader-wrapper active",children:Object(n.jsxs)("div",{className:"spinner-layer spinner-grey-only",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]})})})},f=function(){var e=Object(r.useState)(!1),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(null),a=Object(O.a)(s,2),i=a[0],l=a[1];return{loading:c,request:Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){var c,r,s,a,i,j,o,d,u=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{},n(!0),e.prev=4,r&&(r=JSON.stringify(r),s["Content-Type"]="application/json"),a="https",i=t.split(":")[1],j="".concat(a,":").concat(i),e.next=11,fetch(j,{method:c,body:r,headers:s});case 11:return o=e.sent,e.next=14,o.json();case 14:return d=e.sent,o.ok||(n(!1),l(!0)),n(!1),e.abrupt("return",d);case 20:throw e.prev=20,e.t0=e.catch(4),n(!1),l(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(r.useCallback)((function(){return l(null)}),[])}},g=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)({prevUrl:null,nextUrl:null}),i=Object(O.a)(a,2),l=i[0],j=i[1],o=f(),d=o.loading,h=o.request,x=Object(r.useCallback)(Object(u.a)(b.a.mark((function e(){var t,c,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"https://swapi.dev/api/planets/?page=1",e.prev=1,e.next=4,h(t);case 4:c=e.sent,s(c.results),j({prevUrl:c.previous,nextUrl:c.next}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[h]);return Object(r.useEffect)((function(){x()}),[x]),d?Object(n.jsx)(m,{}):Object(n.jsx)(n.Fragment,{children:!d&&Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"paddingTop",children:[Object(n.jsx)(v,{navigation:l,fetchPlanets:x}),Object(n.jsx)(p,{planets:c})]})})})},N=function(e){var t=e.error;return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-content",children:["Planet not found! Try to find another one. ",t]}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)(i.b,{to:"/",className:"waves-effect waves-light btn-large blue-grey darken-1",children:"Go to all planets "})})]})})})},w=function(e){var t=e.residentUrl,c=Object(r.useState)([]),s=Object(O.a)(c,2),a=s[0],i=s[1],l=f().request,j=Object(r.useCallback)(Object(u.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t);case 3:c=e.sent,i(c),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l,t]);return Object(r.useEffect)((function(){j()}),[j]),Object(n.jsx)("div",{children:a.name})},y=function(e){var t=e.planet,c=t.name,r=t.rotation_period,s=t.diameter,a=t.climate,i=t.gravity,l=t.terrain,j=t.population,o=t.residents,d=(+j).toLocaleString("ru");return console.log(typeof j),console.log(typeof d),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)("div",{className:"card horizontal",children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsxs)("h4",{children:["Detailed Information about ",c]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Rotation Period - "}),r]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"diameter - "}),s]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"\u0421limate - "}),a]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Gravity - "}),i]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Terrain - "}),l]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"population - "}),d]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{children:"Famous residents:"}),o&&o.map((function(e){return Object(n.jsx)(w,{residentUrl:e},e)}))]})]})})})})},k=function(){var e=Object(l.g)().id,t=Object(r.useState)([]),c=Object(O.a)(t,2),s=c[0],a=c[1],i=f(),j=i.request,o=i.error,d=i.clearError,h=Object(r.useCallback)(Object(u.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(),t.next=4,j("https://swapi.dev/api/planets/".concat(e,"/"));case 4:c=t.sent,a(c),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[j,d,e]);return Object(r.useEffect)((function(){h()}),[h]),Object(n.jsxs)("div",{className:"container",children:[o&&Object(n.jsx)(N,{error:o}),!o&&Object(n.jsx)(y,{planet:s})]})},C=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("main",{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:g}),Object(n.jsx)(l.b,{exact:!0,path:"/planets/:id",component:k}),Object(n.jsx)(l.a,{to:"/"})]})}),Object(n.jsx)(o,{})]})};Object(a.render)(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(l.b,{component:C})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.bd03a595.chunk.js.map