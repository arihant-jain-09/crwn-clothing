(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{24:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var r=function(e){return{type:"SET_CURRENT_USER",payload:e}},c=function(){return{type:"Google_SignIn_Start"}},a=function(e){return{type:"SignIn_Failure",payload:e.message}},i=function(e){return{type:"Email_SignIn_Start",payload:e}},o=function(e){return{type:"SignUp_Start",payload:e}},s=function(e){return{type:"SignUp_Failure",payload:e.message}},u=function(){return{type:"SignOut_Start"}},l=function(e){return{type:"SignOut_Failure",payload:e.message}}},31:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=function(){return{type:"hide_it"}},c=function(e){return{type:"ADD_ITEM",payload:e}},a=function(e){return{type:"remove_item",payload:e}},i=function(e){return{type:"decrease_item",payload:e}},o=function(){return{type:"Clear_Cart_saga"}}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(28),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartitems})),i=Object(r.a)([c],(function(e){return e.hidden})),o=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),s=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},36:function(e,t,n){"use strict";var r=n(3);n(1),n(82);t.a=function(e){return Object(r.jsx)("button",{className:"".concat(e.inverted?"inverted":""," ").concat(e.isGooglesignin?"google-sign-in":""," custom-button"),onClick:e.onClick,children:e.children})}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var r=function(){return{type:"FETCH_START"}},c=function(e){return{type:"FETCH_SUCCESS",payload:e}},a=function(e){return{type:"FETCH_FAILURE",error:e}}},51:function(e,t,n){"use strict";var r=n(3),c=n(25),a=n(26);function i(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return e},e}var s=a.b.div(o()),u=a.b.div(i());t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s,{children:Object(r.jsx)(u,{})})})}},71:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(1),a=n(37),i=n.n(a),o=n(23),s=(n(71),n(50)),u=n(11),l=n(25),d=n(26);function b(){var e=Object(l.a)(["\nbody{\n    font-family: 'Open Sans Condensed', sans-serif;\n    padding:20px 60px;\n\n    @media screen and (max-width:800px){\n        padding:10px;\n    }\n  }\n  a {\n    color:black;\n    text-decoration:none;\n  }\n  *{\n    box-sizing: border-box;\n  }  \n\n"]);return b=function(){return e},e}var p=Object(d.a)(b());function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h=c.createElement("desc",null,"Created with Sketch."),O=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function m(e,t){var n=e.title,r=e.titleId,a=j(e,["title","titleId"]);return c.createElement("svg",f({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,h,O)}var g=c.forwardRef(m),v=(n.p,n(17));n(79);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var y=c.createElement("g",null),k=c.createElement("g",null),E=c.createElement("g",null),S=c.createElement("g",null),_=c.createElement("g",null),C=c.createElement("g",null),U=c.createElement("g",null),I=c.createElement("g",null),N=c.createElement("g",null),T=c.createElement("g",null),F=c.createElement("g",null),A=c.createElement("g",null),R=c.createElement("g",null),z=c.createElement("g",null),P=c.createElement("g",null);function H(e,t){var n=e.title,r=e.titleId,a=w(e,["title","titleId"]);return c.createElement("svg",x({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),y,k,E,S,_,C,U,I,N,T,F,A,R,z,P)}var W=c.forwardRef(H),B=(n.p,n(80),n(33)),G=n(31);var q=function(){var e=Object(v.b)(),t=Object(B.d)(Object(v.c)((function(e){return e})));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"cart-icon",onClick:function(){return e(Object(G.e)())},children:[Object(r.jsx)(W,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:t})]})})},M=(n(81),n(36)),L=(n(83),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," x $",c]})]})]})}),D=Object(c.memo)(L);var V=function(){var e=Object(u.g)(),t=Object(v.b)(),n=Object(B.a)(Object(v.c)((function(e){return e})));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:0===n.length?Object(r.jsx)("span",{className:"empty-message",children:"Your cart is empty"}):n.map((function(e){return Object(r.jsx)(D,{item:e},e.id)}))}),Object(r.jsx)(M.a,{onClick:function(){e.push("/checkout"),t(Object(G.e)())},children:"Go to Checkout"})]})})},J=n(28),K=Object(J.a)([function(e){return e.user}],(function(e){return e.currentUser})),X=n(24);var Z=function(){var e=K(Object(v.c)((function(e){return e}))),t=Object(B.b)(Object(v.c)((function(e){return e}))),n=Object(v.b)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(o.b,{className:"logo-container",to:"/",children:Object(r.jsx)(g,{className:"logo",children:" "})}),Object(r.jsxs)("div",{className:"options",children:[Object(r.jsx)(o.b,{className:"option",to:"/shop",children:"SHOP"}),Object(r.jsx)(o.b,{className:"option",to:"/shop",children:"CONTACT"}),e?Object(r.jsx)("div",{className:"option",onClick:function(){return n(Object(X.c)())},children:"SIGN OUT"}):Object(r.jsx)(o.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(r.jsx)(q,{})]}),t?null:Object(r.jsx)(V,{})]})})},$=n(6),Q=n.n($),Y=(n(53),n(34));n(93),n(88);Y.a.initializeApp({apiKey:"AIzaSyAIUO4rbKMlKZ5VSxp5BB_mmn0kq4OTJOk",authDomain:"crwn-db-2339c.firebaseapp.com",projectId:"crwn-db-2339c",storageBucket:"crwn-db-2339c.appspot.com",messagingSenderId:"359344673273",appId:"1:359344673273:web:136bca41b31364a65c2d28",measurementId:"G-GMDW7PBZC0"});var ee=Y.a.auth(),te=Y.a.firestore(),ne=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{title:n,id:e.id,items:r,routeName:encodeURI(n.toLowerCase())}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},re=new Y.a.auth.GoogleAuthProvider;re.setCustomParameters({prompt:"select_account"});Y.a;var ce=n(59),ae=n(51),ie=n(60);function oe(){var e=Object(l.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return oe=function(){return e},e}function se(){var e=Object(l.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return se=function(){return e},e}function ue(){var e=Object(l.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return ue=function(){return e},e}var le=d.b.div(ue()),de=d.b.div(se(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),be=d.b.h2(oe()),pe=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,110))})),fe=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,111))})),je=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,112))})),he=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,113))})),Oe=function(e){e.error;var t=e.resetErrorBoundary;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(le,{children:[Object(r.jsx)(de,{imageUrl:"https://i.imgur.com/lKJiT77.png"}),Object(r.jsx)(be,{children:"Sorry this page is broken"}),Object(r.jsx)(M.a,{onClick:t,children:"Try again"})]})})},me=function(){var e=Object(v.b)(),t=Object(ce.a)(ee),n=Object(s.a)(t,1)[0];return Object(c.useEffect)((function(){return e(Object(X.h)(n)),function(){}}),[n,e]),Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(Z,{}),Object(r.jsx)(u.d,{children:Object(r.jsx)(ie.ErrorBoundary,{FallbackComponent:Oe,children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)(ae.a,{}),children:[Object(r.jsx)(u.b,{exact:!0,path:"/",component:pe}),Object(r.jsx)(u.b,{path:"/shop",component:fe}),Object(r.jsx)(u.b,{exact:!0,path:"/signin",render:function(){return n?Object(r.jsx)(u.a,{to:"/"}):Object(r.jsx)(je,{})}}),Object(r.jsx)(u.b,{exact:!0,path:"/checkout",component:he})]})})})]})},ge=n(18),ve=n(40),xe=n(9),we={currentUser:null,errormsg:""},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(xe.a)(Object(xe.a)({},e),{},{currentUser:t.payload,errormsg:""});case"SignIn_Failure":case"SignOut_Failure":case"SignUp_Failure":return Object(xe.a)(Object(xe.a)({},e),{},{errormsg:t.payload});default:return e}},ke=n(64);var Ee=function(e,t){return console.log(e),console.log(t),e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(xe.a)(Object(xe.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ke.a)(e),[Object(xe.a)(Object(xe.a)({},t),{},{quantity:1})])},Se=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(xe.a)(Object(xe.a)({},e),{},{quantity:e.quantity-1}):e}))},_e={hidden:!0,cartitems:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"hide_it":return Object(xe.a)(Object(xe.a)({},e),{},{hidden:!e.hidden});case"ADD_ITEM":return Object(xe.a)(Object(xe.a)({},e),{},{cartitems:Ee(e.cartitems,t.payload)});case"remove_item":return Object(xe.a)(Object(xe.a)({},e),{},{cartitems:e.cartitems.filter((function(e){return e.id!==t.payload.id}))});case"decrease_item":return Object(xe.a)(Object(xe.a)({},e),{},{cartitems:Se(e.cartitems,t.payload)});case"Clear_Cart_saga":return Object(xe.a)(Object(xe.a)({},e),{},{cartitems:[],hidden:!0});default:return e}},Ue={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ne={shopdata:{},isfetching:!0,errormessage:""},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return Object(xe.a)(Object(xe.a)({},e),{},{isfetching:!0});case"FETCH_SUCCESS":return Object(xe.a)(Object(xe.a)({},e),{},{shopdata:t.payload,isfetching:!1});case"FETCH_FAILURE":return Object(xe.a)(Object(xe.a)({},e),{},{errormessage:t.payload});default:return e}},Fe=n(61),Ae={key:"root",storage:n.n(Fe).a,whitelist:["cart"]},Re=Object(ge.c)({user:ye,cart:Ce,directory:Ie,shop:Te}),ze=Object(ve.a)(Ae,Re),Pe=n(62),He=n.n(Pe),We=n(65),Be=n(13),Ge=Q.a.mark(Le),qe=Q.a.mark(De),Me=Q.a.mark(Ve);function Le(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.c)(Object(G.a)());case 2:case"end":return e.stop()}}),Ge)}function De(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.d)("SignOut_Start",Le);case 2:case"end":return e.stop()}}),qe)}function Ve(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.a)([Object(Be.b)(De)]);case 2:case"end":return e.stop()}}),Me)}var Je=n(43),Ke=Q.a.mark($e),Xe=Q.a.mark(Qe),Ze=Q.a.mark(Ye);function $e(){var e,t,n;return Q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=te.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(Be.b)(ne,t);case 7:return n=r.sent,r.next=10,Object(Be.c)(Object(Je.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(Be.c)(Object(Je.a)(r.t0.message));case 16:case"end":return r.stop()}}),Ke,null,[[0,12]])}function Qe(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.d)("FETCH_START",$e);case 2:case"end":return e.stop()}}),Xe)}function Ye(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.a)([Object(Be.b)(Qe)]);case 2:case"end":return e.stop()}}),Ze)}var et=n(15),tt=Q.a.mark(lt),nt=Q.a.mark(dt),rt=Q.a.mark(bt),ct=Q.a.mark(pt),at=Q.a.mark(ft),it=Q.a.mark(jt),ot=Q.a.mark(ht),st=Q.a.mark(Ot),ut=Q.a.mark(mt);function lt(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.signInWithPopup(re);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(et.c)(Object(X.a)(e.t0));case 8:case"end":return e.stop()}}),tt,null,[[0,5]])}function dt(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)("Google_SignIn_Start",lt);case 2:case"end":return e.stop()}}),nt)}function bt(e){var t,n,r;return Q.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.email,r=t.password,c.prev=2,c.next=5,ee.signInWithEmailAndPassword(n,r);case 5:c.next=10;break;case 7:c.prev=7,c.t0=c.catch(2),Object(et.c)(Object(X.a)(c.t0));case 10:case"end":return c.stop()}}),rt,null,[[2,7]])}function pt(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)("Email_SignIn_Start",bt);case 2:case"end":return e.stop()}}),ct)}function ft(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(et.c)(Object(X.b)(e.t0));case 8:case"end":return e.stop()}}),at,null,[[0,5]])}function jt(e){var t,n,r;return Q.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,console.log(t,"called"),n=t.email,r=t.password,c.prev=3,c.next=6,ee.createUserWithEmailAndPassword(n,r);case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(3),c.next=12,Object(et.c)(Object(X.d)(c.t0));case 12:case"end":return c.stop()}}),it,null,[[3,8]])}function ht(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)("SignUp_Start",jt);case 2:case"end":return e.stop()}}),ot)}function Ot(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)("SignOut_Start",ft);case 2:case"end":return e.stop()}}),st)}function mt(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.b)(dt),Object(et.b)(pt),Object(et.b)(Ot),Object(et.b)(ht)]);case 2:case"end":return e.stop()}}),ut)}var gt=Q.a.mark(vt);function vt(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.a)([Object(Be.b)(Ye),Object(Be.b)(mt),Object(Be.b)(Ve)]);case 2:case"end":return e.stop()}}),gt)}var xt=Object(We.a)(),wt=[He.a,xt],yt=Object(ge.e)(ze,ge.a.apply(void 0,wt));xt.run(vt);var kt=Object(ve.b)(yt),Et=n(63),St=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _t(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(r.jsx)(v.a,{store:yt,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(Et.a,{persistor:kt,children:Object(r.jsx)(me,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crwn-clothing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/crwn-clothing","/service-worker.js");St?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_t(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_t(t,e)}))}}()}},[[92,1,2]]]);
//# sourceMappingURL=main.b4488972.chunk.js.map