(this["webpackJsonpe-store-app"]=this["webpackJsonpe-store-app"]||[]).push([[0],{111:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(22),i=n.n(r),s=(n(72),n(16)),o=n.n(s),l=n(21),d=n(38),u=n(20),j=n(8),p=n(136),b=n(129),m=n(130),h=n(131),x=n(132),O=n(133),f=n(134),v=n(135),g=n(127),y=Object(g.a)((function(){return{productsRoot:{margin:"20px"},root:{background:"#ccc"},media:{height:0,paddingTop:"75%"},cardactions:{margin:0,padding:0,display:"flex"},contentsDiv:{background:"#EEFFF1",display:"flex",justifyContent:"space-between",padding:"0 5px",paddingLeft:"0px"},content:{textAlign:"left"}}})),k=n(2),w=function(t){var e=t.product,n=t.handleAddToCart,a=y();return Object(k.jsxs)(b.a,{className:a.root,children:[Object(k.jsx)(m.a,{image:e.media.source,className:a.media,title:e.name}),Object(k.jsxs)("div",{className:a.contentsDiv,children:[Object(k.jsx)(h.a,{className:a.content,children:Object(k.jsxs)("div",{children:[Object(k.jsx)(x.a,{variant:"h6",children:e.name}),Object(k.jsx)(x.a,{variant:"subtitle1",dangerouslySetInnerHTML:{__html:e.description}}),Object(k.jsx)(x.a,{variant:"subtitle2",children:e.price.formatted_with_symbol})]})}),Object(k.jsx)(O.a,{disableSpacing:!0,className:a.cardactions,children:Object(k.jsx)(f.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(k.jsx)(v.a,{})})})]})]})},N=function(t){var e=t.products,n=t.handleAddToCart,a=y();return Object(k.jsx)("main",{className:a.productsRoot,children:Object(k.jsx)(p.a,{container:!0,justifyContent:"center",spacing:4,children:e.map((function(t){return Object(k.jsx)(p.a,{style:{textAlign:"center"},item:!0,xs:12,sm:6,md:4,lg:3,children:Object(k.jsx)(w,{product:t,handleAddToCart:n})},t.id)}))})})},C=n(59),E=n(137),_=n(138),T=n(139),A=n(140),F=n(141),S=n.p+"static/media/logo.be646ae2.PNG",I=Object(g.a)((function(){return{root:{padding:"0 0px",background:"#EEFFF1"},pushDown:{marginBottom:"90px"},cartGrow:{width:"80%"},img:{width:150,height:50}}})),D=n(32),L=n(33),M=Object(C.a)({palette:{primary:{main:D.a[500]},secondary:{main:L.a[200]}}}),R=function(t){var e=t.quantity,n=I(),a=Object(j.f)();return Object(k.jsxs)(E.a,{theme:M,children:[Object(k.jsx)(_.a,{className:n.root,children:Object(k.jsxs)(T.a,{children:[Object(k.jsx)(x.a,{component:u.b,to:"/",children:Object(k.jsx)("img",{src:S,alt:"logo",className:n.img})}),Object(k.jsx)("div",{className:n.cartGrow}),"/"===a.pathname&&Object(k.jsx)(f.a,{"aria-label":"cart",component:u.b,to:"/cart",children:Object(k.jsx)(A.a,{badgeContent:e,color:"primary",children:Object(k.jsx)(F.a,{})})})]})}),Object(k.jsx)("div",{className:n.pushDown})]})},q=n(142),z=Object(g.a)((function(){return{root:{display:"flex",background:"white",padding:5},media:{width:0,paddingLeft:"25%",border:"solid 1px black",height:100},buttons:{display:"flex",justifyContent:"center",alignItems:"center"},actions:{display:"flex",flexDirection:"column"},mediaContainer:{width:"100%"}}})),B=function(t){var e=t.product,n=t.remove,a=t.update,c=z();return Object(k.jsxs)(b.a,{className:c.root,children:[Object(k.jsx)(m.a,{image:e.media.source,alt:e.name,className:c.media}),Object(k.jsx)("div",{className:c.mediaContainer,children:Object(k.jsxs)(h.a,{className:c.content,children:[Object(k.jsx)(x.a,{variant:"h5",children:e.name}),Object(k.jsx)(x.a,{variant:"subtitle1",children:e.price.formatted_with_symbol})]})}),Object(k.jsxs)(O.a,{className:c.actions,children:[Object(k.jsxs)("div",{className:c.buttons,children:[Object(k.jsx)(q.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity-1)},children:"-"}),Object(k.jsx)(x.a,{children:e.quantity}),Object(k.jsx)(q.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity+1)},children:"+"})]}),Object(k.jsx)(q.a,{variant:"text",type:"button",size:"medium",color:"secondary",onClick:function(){return n(e.id)},children:"Remove"})]})]})},G=n(143),P=n(144),H=Object(g.a)((function(){return{root:{},title:{textAlign:"left",marginBottom:"20px"},details:{display:"flex",justifyContent:"space-around",padding:"20px",marginBottom:"20px"},getMore:{textAlign:"center",marginBottom:60},link:{textDecoration:"none",color:"black",fontSize:"2rem"}}})),J=Object(C.a)({palette:{primary:{main:D.a[500]},secondary:{main:L.a[200]}}}),U=function(t){var e=t.cart,n=t.empty,a=t.remove,c=t.update,r=H(),i=e.line_items&&!e.line_items.length,s=function(){return Object(k.jsx)(x.a,{variant:"h5",children:"No Item to see."})},o=function(){return Object(k.jsxs)(E.a,{theme:J,children:[Object(k.jsx)(p.a,{container:!0,spacing:4,children:e.line_items.map((function(t){return Object(k.jsx)(p.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(k.jsx)(B,{product:t,remove:a,update:c})},t.id)}))}),Object(k.jsxs)("div",{className:r.details,children:[Object(k.jsxs)(x.a,{variant:"h5",className:r.subtotal,children:["Subtotal:",e.subtotal.formatted_with_symbol]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(q.a,{className:r.empty,size:"medium",type:"button",variant:"text",color:"secondary",onClick:n,children:"Empty"}),Object(k.jsx)(q.a,{className:r.checkout,size:"medium",type:"button",variant:"contained",color:"primary",children:"checkout"})]})]})]})};return e.line_items?Object(k.jsxs)(G.a,{children:[Object(k.jsx)(x.a,{className:r.title,variant:"h6",children:"ITEMS YOU HAVE IN YOUR CART"}),i?Object(k.jsx)(s,{}):Object(k.jsx)(o,{}),Object(k.jsx)("div",{className:r.getMore,children:Object(k.jsxs)(u.b,{to:"/",className:r.link,children:["GET MORE ITEMS!!! ",Object(k.jsx)(P.a,{})]})})]}):Object(k.jsx)("div",{className:"loading",children:"Loading..."})},Y=n(58),V=new(n.n(Y).a)("pk_test_313547f526bcf50853223a215e6ad8a4366993f453bc8",!0);n(111);var K=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({}),i=Object(d.a)(r,2),s=i[0],p=i[1];Object(a.useEffect)((function(){b(),m()}),[]);var b=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,null===V||void 0===V?void 0:V.products.list();case 3:e=t.sent,n=e.data,console.log(n),c(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("this is the error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.cart.retrieve();case 3:e=t.sent,p(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("this is the error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(l.a)(o.a.mark((function t(e,n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.cart.add(e,n);case 3:a=t.sent,c=a.cart,p(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("add to cart error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(l.a)(o.a.mark((function t(e,n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.cart.update(e,{quantity:n});case 3:a=t.sent,c=a.cart,p(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("update Error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.cart.remove(e);case 3:n=t.sent,a=n.cart,p(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("handleRemoveFromCart Error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.cart.empty();case 3:e=t.sent,n=e.cart,p(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("handleEmptyCart Error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)(u.a,{children:[Object(k.jsx)(R,{quantity:s.total_items}),Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/",children:0===n.length?Object(k.jsx)("p",{className:"loading",children:"Loading..."}):Object(k.jsx)(N,{products:n,handleAddToCart:h})}),Object(k.jsx)(j.a,{exact:!0,path:"/cart",children:Object(k.jsx)(U,{cart:s,empty:f,remove:O,update:x})})]})]})},Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(K,{})}),document.getElementById("root")),Q()},72:function(t,e,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.764ce909.chunk.js.map