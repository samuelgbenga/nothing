(this["webpackJsonpe-store-app"]=this["webpackJsonpe-store-app"]||[]).push([[0],{104:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(104),n(7)),o=n.n(s),l=n(10),u=n(11),d=n(24),j=n(14),b=n(89),p=n(188),m=n(189),h=n(60),x=n(61),O=n(181),f=n(183),v=n(184),g=n(62),y=n(185),k=n(186),N=n(187),w=n(178),S=Object(w.a)((function(){return{productsRoot:{margin:"20px",padding:"0 50px",height:"100%"},root:{background:"#ccc"},media:{height:0,paddingTop:"75%"},cardactions:{margin:0,padding:0,display:"flex"},contentsDiv:{background:"#EEFFF1",display:"flex",justifyContent:"space-between",padding:"0 5px",paddingLeft:"0px"},content:{textAlign:"left"}}})),C=n(2),_=function(e){var t=e.product,n=e.handleAddToCart,a=S();return Object(C.jsxs)(O.a,{className:a.root,children:[Object(C.jsx)(f.a,{image:t.media.source,className:a.media,title:t.name}),Object(C.jsxs)("div",{className:a.contentsDiv,children:[Object(C.jsx)(v.a,{className:a.content,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(g.a,{variant:"h6",children:t.name}),Object(C.jsx)(g.a,{variant:"subtitle1",dangerouslySetInnerHTML:{__html:t.description}}),Object(C.jsx)(g.a,{variant:"subtitle2",children:t.price.formatted_with_symbol})]})}),Object(C.jsx)(y.a,{disableSpacing:!0,className:a.cardactions,children:Object(C.jsx)(k.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(C.jsx)(N.a,{badgeContent:"+",color:"secondary",children:"\ud83d\uded2"})})})]})]})},T=Object(b.a)({palette:{primary:{main:h.a[500]},secondary:{main:x.a[200]}}}),E=function(e){var t=e.products,n=e.handleAddToCart,a=S();return Object(C.jsx)(p.a,{theme:T,children:Object(C.jsx)("main",{className:a.productsRoot,children:Object(C.jsx)(m.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){return Object(C.jsx)(m.a,{style:{textAlign:"center"},item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(_,{product:e,handleAddToCart:n})},e.id)}))})})})},B=n(190),A=n(191),F=n.p+"static/media/logo.be646ae2.PNG",L=Object(w.a)((function(){return{root:{padding:"0 0px",background:"#EEFFF1"},pushDown:{marginBottom:"90px"},cartGrow:{width:"80%"},img:{width:150,height:50}}})),P=Object(b.a)({palette:{primary:{main:h.a[500]},secondary:{main:x.a[200]}}}),D=function(e){var t=e.quantity,n=L(),a=Object(j.f)();return Object(C.jsxs)(p.a,{theme:P,children:[Object(C.jsx)(B.a,{className:n.root,children:Object(C.jsxs)(A.a,{children:[Object(C.jsx)(g.a,{component:d.b,to:"/e-commerce-store/",children:Object(C.jsx)("img",{src:F,alt:"logo",className:n.img})}),Object(C.jsx)("div",{className:n.cartGrow}),"/e-commerce-store/"===a.pathname&&Object(C.jsx)(k.a,{"aria-label":"cart",component:d.b,to:"/cart",children:Object(C.jsx)(N.a,{badgeContent:t,color:"primary",children:"\ud83d\uded2"})})]})}),Object(C.jsx)("div",{className:n.pushDown})]})},I=n(192),M=Object(w.a)((function(){return{root:{display:"flex",background:"white",padding:5},media:{width:0,paddingLeft:"25%",border:"solid 1px black",height:100},buttons:{display:"flex",justifyContent:"center",alignItems:"center"},actions:{display:"flex",flexDirection:"column"},mediaContainer:{width:"100%"}}})),R=function(e){var t=e.product,n=e.remove,a=e.update,c=M();return Object(C.jsxs)(O.a,{className:c.root,children:[Object(C.jsx)(f.a,{image:t.media.source,alt:t.name,className:c.media}),Object(C.jsx)("div",{className:c.mediaContainer,children:Object(C.jsxs)(v.a,{className:c.content,children:[Object(C.jsx)(g.a,{variant:"h5",children:t.name}),Object(C.jsx)(g.a,{variant:"subtitle1",children:t.price.formatted_with_symbol})]})}),Object(C.jsxs)(y.a,{className:c.actions,children:[Object(C.jsxs)("div",{className:c.buttons,children:[Object(C.jsx)(I.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity-1)},children:"-"}),Object(C.jsx)(g.a,{children:t.quantity}),Object(C.jsx)(I.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(I.a,{variant:"text",type:"button",size:"medium",color:"secondary",onClick:function(){return n(t.id)},children:"Remove"})]})]})},z=n(193),Y=Object(w.a)((function(){return{root:{maxWidth:800,height:"100%",position:"relative"},title:{textAlign:"left",marginBottom:"20px"},details:{display:"flex",justifyContent:"space-around",padding:"20px",marginBottom:"20px"},getMore:{textAlign:"center",marginBottom:60},link:{textDecoration:"none",color:"black",fontSize:"2rem"}}})),G=Object(b.a)({palette:{primary:{main:h.a[500]},secondary:{main:x.a[200]}}}),q=function(e){var t=e.cart,n=e.empty,a=e.remove,c=e.update,r=Y(),i=t.line_items&&!t.line_items.length,s=function(){return Object(C.jsx)("div",{style:{height:"55vh"},children:Object(C.jsx)(g.a,{variant:"h5",children:"No Item to see."})})},o=function(){return Object(C.jsx)("div",{style:{minHeight:"55vh"},children:Object(C.jsxs)(p.a,{theme:G,children:[Object(C.jsx)(m.a,{container:!0,spacing:4,children:t.line_items.map((function(e){return Object(C.jsx)(m.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(C.jsx)(R,{product:e,remove:a,update:c})},e.id)}))}),Object(C.jsxs)("div",{className:r.details,children:[Object(C.jsxs)(g.a,{variant:"h5",className:r.subtotal,children:["Subtotal:",t.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(I.a,{className:r.empty,size:"medium",type:"button",variant:"text",color:"secondary",onClick:n,children:"Empty"}),Object(C.jsx)(I.a,{className:r.checkout,size:"medium",type:"button",variant:"contained",color:"primary",component:d.b,to:"/checkout",children:"checkout"})]})]})]})})};return t.line_items?Object(C.jsxs)(z.a,{className:r.root,children:[Object(C.jsx)(g.a,{className:r.title,variant:"h6",children:"ITEMS YOU HAVE IN YOUR CART"}),i?Object(C.jsx)(s,{}):Object(C.jsx)(o,{}),Object(C.jsx)("div",{className:r.getMore,children:Object(C.jsx)(d.b,{to:"/e-commerce-store/",className:r.link,children:"GET MORE ITEMS!!! \ud83d\uded2"})})]}):Object(C.jsx)("div",{className:"loading",children:"Loading..."})},H=n(92),J=n(207),W=n(200),U=n(203),Q=Object(w.a)((function(){return{root:{Width:"100%",height:"100%",display:"flex",justifyContent:"center",position:"relative"},main:{width:"600px","@media(max-width:780px)":{width:"80%"}},paper:{padding:"30px 20px",position:"relative"},thankYou:{position:"absolute",color:"#F6F6F6",fontSize:"3.5rem",fontFamily:"'Poppins', sans-serif",fontWeight:"bold",top:190,left:"23.5%",letterSpacing:2},subThankYou:{fontFamily:"Quicksand, sans-serif"},stripePayment:{position:"relative",zIndex:1,margin:0},back:{marginTop:10}}})),K=n(87),Z=new(n.n(K).a)("pk_test_313547f526bcf50853223a215e6ad8a4366993f453bc8",!0),V=n(51),X=n(47),$=n(204),ee=function(e){var t=e.label,n=e.name,a=e.placeholder,c=Object(X.d)().control;return Object(C.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(X.a,{render:function(e){var n=e.field.onChange;return Object(C.jsx)($.a,{onChange:n,label:t,placeholder:a,fullWidth:!0,required:!0})},name:n,control:c})})},te=Object(w.a)((function(){return{root:{},formProvider:{textAlign:"center",paddingBottom:"30px"},selectInput:{color:"red"},addressButtons:{marginTop:40,display:"flex",flexDirection:"column",gap:10,width:"100%"},addressButton:{width:"100%",height:"auto"},paymentButtons:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},paymentButton:{margin:7,width:"100%"}}})),ne=n(206),ae=n(202),ce=n(197),re=function(e){var t=e.value,n=e.handleOnChange,a=e.label,c=e.optionList;return Object(C.jsxs)(m.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(ne.a,{align:"left",children:a}),Object(C.jsx)(ae.a,{align:"left",fullWidth:!0,value:t,onChange:function(e){return n(e.target.value)},children:c.map((function(e){return Object(C.jsx)(ce.a,{value:e.id,children:e.label},e.id)}))})]})},ie=function(e){var t=e.checkoutToken,n=e.next,c=Object(a.useState)([]),r=Object(u.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),p=b[0],h=b[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),f=O[0],v=O[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),N=k[0],w=k[1],S=Object(a.useState)([]),_=Object(u.a)(S,2),T=_[0],E=_[1],B=Object(a.useState)(""),A=Object(u.a)(B,2),F=A[0],L=A[1],P=te(),D=Object(X.c)(),M=Object.entries(i).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),R=Object.entries(f).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),z=T.map((function(e){return{id:e.id,label:"".concat(e.description,"-(").concat(e.price.formatted_with_symbol,")")}}));Object(a.useEffect)((function(){null!==t&&Y(null===t||void 0===t?void 0:t.id)}),[t]),Object(a.useEffect)((function(){""!==p&&G(p)}),[p]),Object(a.useEffect)((function(){""!==N&&q(t.id,p,N)}),[t.id,p,N]);var Y=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,s(a),h(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),w(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(t,n,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.checkout.getShippingOptions(t,{country:n,region:a});case 2:c=e.sent,E(c),L(c[0].id);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:P.formProvider,children:[Object(C.jsx)(g.a,{variant:"h6",gutterBottom:!0,align:"center",children:"Address Form"}),Object(C.jsx)(X.b,Object(V.a)(Object(V.a)({},D),{},{children:Object(C.jsxs)("form",{onSubmit:D.handleSubmit((function(e){return n(Object(V.a)(Object(V.a)({},e),{},{shippingCountry:p,shippingSubdivision:N,shippingOption:F}))})),children:[Object(C.jsxs)(m.a,{container:!0,spacing:3,children:[Object(C.jsx)(ee,{label:"First name",name:"firstName",placeholder:"ex: Samuel"}),Object(C.jsx)(ee,{label:"Last name",name:"lastName",placeholder:"ex: Joseph"}),Object(C.jsx)(ee,{label:"Address",name:"address1",placeholder:"ex: No 11 Peterson Str"}),Object(C.jsx)(ee,{label:"Email",name:"email",placeholder:"ex: samuel@gmail"}),Object(C.jsx)(ee,{label:"City",name:"city",placeholder:"ex: Lagos Island"}),Object(C.jsx)(ee,{label:"ZIP Code",name:"zip",placeholder:"ex: 110001"}),Object(C.jsx)(re,{value:p,handleOnChange:function(e){return h(e)},optionList:M,label:"Shipping Country",className:P.selectInput}),Object(C.jsx)(re,{value:N,handleOnChange:function(e){return w(e)},optionList:R,label:"Shipping Subdivision",className:P.selectInput}),Object(C.jsx)(re,{value:F,handleOnChange:function(e){return L(e)},optionList:z,label:"Shipping Options",className:P.selectInput})]}),Object(C.jsxs)("div",{className:P.addressButtons,children:[Object(C.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",className:P.addressButton,children:"Next"}),Object(C.jsx)(I.a,{component:d.b,to:"/cart",variant:"outlined",className:P.addressButton,children:"Back To Cart"})]})]})}))]})},se=n(199),oe=n(52),le=n(88),ue=n(196),de=n(148),je=n(198),be=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{gutterBottom:!0,variant:"h6",align:"center",children:"Summery Of Purchase"}),Object(C.jsxs)(ue.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(de.a,{children:[Object(C.jsx)(je.a,{primary:e.name,secondary:e.price.formatted_with_symbol}),Object(C.jsxs)("div",{children:[Object(C.jsx)(g.a,{variant:"body2",children:e.line_total.formatted_with_symbol}),Object(C.jsxs)(g.a,{variant:"subtitle1",style:{color:"grey"},children:["Quatity:",e.quantity]})]})]},e.name)})),Object(C.jsxs)(de.a,{children:[Object(C.jsx)(je.a,{primary:"Subtotal:"}),Object(C.jsx)(g.a,{variant:"h5",children:t.live.subtotal.formatted_with_symbol})]})]})]})},pe=function(e){var t=e.prevStep,n=e.shippingData,a=e.checkoutToken,c=e.capture,r=e.nextStep,i=e.confirm,s=te(),u=Object(le.a)("pk_test_51JQ9leLGNHTsuLm6w9Zyj0op0D2lWT8UYP1BL55TtAdEoKbcvJGxYL4jFJG1RKBUuJviw8mNcycUrff4cDN5bxgF00kyOAOBSt"),d=function(){var e=Object(l.a)(o.a.mark((function e(t,s,l){var u,d,j,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l&&s){e.next=3;break}return e.abrupt("return");case 3:return u=s.getElement(oe.CardElement),e.next=6,l.createPaymentMethod({type:"card",card:u});case 6:d=e.sent,j=d.error,b=d.paymentMethod,j?console.log("[error] e",j):(p={line_items:a.live.line_items,customer:{Name:{first_name:n.firstName,last_name:n.lastName},email:n.email},shipping:{name:"primary",city:n.city,shipping_state:n.shippingSubdivision,shipping_country:n.shippingCountry,zip_code:n.zip},fulfillment:{shippingMethod:a.shipping_methods},payment:{gateway:"stripe",stripe:{paymentMethod_id:a.gateways[0].id}}},c(a.id,p),r(),i(!0),console.log("[PaymentMethod]",b));case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(be,{checkoutToken:a}),Object(C.jsx)(se.a,{}),Object(C.jsx)(g.a,{align:"center",variant:"h6",children:"Payment Method"}),Object(C.jsx)(oe.Elements,{stripe:u,children:Object(C.jsx)(oe.ElementsConsumer,{children:function(e){var n=e.elements,a=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return d(e,n,a)},children:[Object(C.jsx)("br",{}),Object(C.jsx)(oe.CardElement,{elements:n,stripe:a}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:s.paymentButtons,children:[Object(C.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",className:s.paymentButton,children:"Make Payment"}),Object(C.jsx)(I.a,{onClick:t,variant:"text",className:s.paymentButton,children:"go back"})]})]})}})})]})},me=n.p+"static/media/stripe_payment.e65b9432.svg",he=n.p+"static/media/loading.cb9b4821.svg",xe=Object(b.a)({palette:{primary:{main:h.a[500]},secondary:{main:x.a[200]}}}),Oe=["Shipping Address","Payment Details"],fe=function(e){var t=e.cart,n=(e.order,e.capture),c=(e.error,Object(a.useState)(0)),r=Object(u.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(null),b=Object(u.a)(j,2),m=b[0],h=b[1],x=Object(a.useState)({}),O=Object(u.a)(x,2),f=O[0],v=O[1],y=Object(a.useState)(!1),k=Object(u.a)(y,2),N=k[0],w=k[1],S=Q();Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("generate token error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var _=function(e){v(e),T()},T=function(){s((function(e){return e+1}))},E=function(){s((function(e){return e-1}))},B=function(){return 0===i?Object(C.jsx)(ie,{checkoutToken:m,next:_}):Object(C.jsx)(pe,{checkoutToken:m,shippingData:f,prevStep:E,nextStep:T,confirm:function(e){return w(e)},capture:n})},A=function(){return setTimeout((function(){w(!1)}),3e3),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{style:{textAlign:"center"},className:S.confirmation,children:[N?Object(C.jsx)("img",{src:he,alt:"Loading"}):Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:S.stripePayment,children:Object(C.jsx)("img",{src:me,alt:"congratulations",height:"180",width:"150",style:{margin:10}})}),Object(C.jsx)(g.a,{className:S.thankYou,children:"Thank You !"}),Object(C.jsx)(g.a,{className:S.subThankYou,align:"center",variant:"subtitle1",style:{fontWeight:"bold"},children:"Your Payment is Successful"}),Object(C.jsx)(g.a,{align:"center",className:S.subThankYou,style:{fontSize:12},children:"Thank you for your payment. An automated payment receipt will be sent to your email."})]}),Object(C.jsx)("div",{className:S.back,children:Object(C.jsx)(g.a,{variant:"subtitle1",color:"secondary",align:"center",component:d.b,to:"/e-commerce-store/",style:{textDecoration:"none"},children:"Back To Home"})})]})})};return Object(C.jsx)("div",{style:{minHeight:"55vh"},children:Object(C.jsx)(p.a,{theme:xe,children:Object(C.jsx)("div",{className:S.root,children:Object(C.jsx)("main",{className:S.main,children:Object(C.jsxs)(H.a,{className:S.paper,children:[Object(C.jsx)(g.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(J.a,{activeStep:i,children:Oe.map((function(e){return Object(C.jsx)(W.a,{children:Object(C.jsx)(U.a,{children:e})},e)}))}),i===Oe.length?Object(C.jsx)(A,{}):m?Object(C.jsx)(B,{}):Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("img",{src:he,alt:"Loading"})})]})})})})})},ve=(n(143),n(144),n(201)),ge=n.p+"static/media/newBelievable9.9e5a28dd.svg",ye=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(ve.a.div,{className:"name",children:Object(C.jsx)(ve.a.img,{src:ge,alt:"rotate",animate:{rotate:[0,360]},transition:{duration:10,ease:"linear",times:[0,1],loop:1/0}})})})},ke=function(){return Object(C.jsxs)("div",{className:"footer-container",children:[Object(C.jsx)(ye,{className:"name"}),Object(C.jsxs)("div",{className:"right-side",children:[Object(C.jsxs)("p",{className:"copy-right",children:["copyright \uff20 2021 CREATING GREAT STANDARD HUB All Rights Reserved"," "]}),Object(C.jsx)("p",{children:"Samuel Built with \ud83d\udc97"})]})]})};n(145);var Ne=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),i=Object(u.a)(r,2),s=i[0],b=i[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),h=m[0],x=m[1],O=Object(a.useState)({}),f=Object(u.a)(O,2),v=f[0],g=f[1];Object(a.useEffect)((function(){y(),k()}),[]);var y=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.products.list();case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("this is the error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.cart.retrieve();case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("this is the error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.cart.add(t,n);case 3:a=e.sent,c=a.cart,g(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("add to cart error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.cart.update(t,{quantity:n});case 3:a=e.sent,c=a.cart,g(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("update Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.cart.remove(t);case 3:n=e.sent,a=n.cart,g(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("handleRemoveFromCart Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.cart.empty();case 3:t=e.sent,n=t.cart,g(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("handleEmptyCart Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.cart.refresh();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.checkout.capture(t,n);case 3:a=e.sent,b(a),T(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.data.error.message),console.log("[checkout capture error]",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"body",children:[Object(C.jsxs)(d.a,{children:[Object(C.jsx)(D,{quantity:v.total_items}),Object(C.jsxs)(j.c,{children:[Object(C.jsx)(j.a,{exact:!0,path:"/e-commerce-store",children:0===n.length?Object(C.jsx)("div",{className:"loading",children:Object(C.jsx)("img",{src:he,alt:"loading"})}):Object(C.jsx)(E,{products:n,handleAddToCart:N})}),Object(C.jsx)(j.a,{exact:!0,path:"/cart",children:Object(C.jsx)(q,{cart:v,empty:_,remove:S,update:w})}),Object(C.jsx)(j.a,{path:"/checkout",children:Object(C.jsx)(fe,{cart:v,order:s,capture:B,error:h})})]}),Object(C.jsx)(ke,{})]}),console.log(s,h)]})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Ne,{})}),document.getElementById("root")),we()}},[[146,1,2]]]);
//# sourceMappingURL=main.23fd1258.chunk.js.map