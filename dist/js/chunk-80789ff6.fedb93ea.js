(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80789ff6"],{"00b4":function(e,t,r){"use strict";r("ac1f");var n=r("23e7"),c=r("da84"),o=r("c65b"),a=r("e330"),l=r("1626"),i=r("861d"),s=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=c.Error,u=a(/./.test);n({target:"RegExp",proto:!0,forced:!s},{test:function(e){var t=this.exec;if(!l(t))return u(this,e);var r=o(t,this,e);if(null!==r&&!i(r))throw new d("RegExp exec method returned something other than an Object or null");return!!r}})},"057f":function(e,t,r){var n=r("c6b6"),c=r("fc6a"),o=r("241c").f,a=r("4dae"),l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return o(e)}catch(t){return a(l)}};e.exports.f=function(e){return l&&"Window"==n(e)?i(e):o(c(e))}},"1dde":function(e,t,r){var n=r("d039"),c=r("b622"),o=r("2d00"),a=c("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"284b":function(e,t,r){"use strict";var n=r("7a23"),c=r("d1f1"),o={props:["propShoppingCart"],emits:["emit-put-cart","emit-delete-cart","emit-delete-all-cart"],setup:function(e,t){var r=t.emit;console.log(e);var o=Object(n["toRefs"])(e),a=o.propShoppingCart;console.log(e,a);var l=Object(c["a"])(),i=l.putCart,s=l.deleteCart,d=l.deleteCartAll,u=l.getCart,f=function(e){console.log("productInfo",e.product_id),console.log(e),i(e).then((function(){return u(!1)})).then((function(e){r("emit-put-cart",e.data.data)})).catch((function(e){console.log(e)}))},b=function(e){s(e).then((function(){return u(!1)})).catch((function(e){console.log(e)})).then((function(e){r("emit-delete-cart",e.data.data)})).catch((function(e){console.log(e)}))},m=function(){d().then((function(){r("emit-delete-all-cart")})).catch((function(e){console.log(e)}))};return{changeQty:f,emitDeleteCart:b,emitDeleteCartAll:m}}};t["a"]=o},"3b0b":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),c={class:"container",id:"vue-shpopping-cart"},o={class:"row justify-content-center"},a=Object(n["createElementVNode"])("h1",{class:"text-center mb-3"},"我的購物車",-1),l={class:"col-lg-8 mb-4 mb-lg-0 d-flex flex-column justify-content-between"},i={class:"table-responsive"},s={class:"table"},d=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",{class:"row g-0 d-none d-md-flex"},[Object(n["createElementVNode"])("th",{scope:"col",class:"col-5"},"品項"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"單價"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"數量"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"金額"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-1"})])],-1),u={id:"totalPrice",class:""},f={class:"col-lg-4"},b={class:"mb-3"},m=Object(n["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),p={class:"mb-3"},O=Object(n["createElementVNode"])("label",{for:"name",class:"form-label"},"姓名",-1),j={class:"mb-3"},g=Object(n["createElementVNode"])("label",{for:"phone",class:"form-label"},"電話",-1),h={class:"mb-3"},v=Object(n["createElementVNode"])("label",{for:"address",class:"form-label"},"地址",-1),y={class:"mb-3"},V=Object(n["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),E=["disabled"];function N(e,t,r,N,C,w){var S=Object(n["resolveComponent"])("CartTables"),k=Object(n["resolveComponent"])("field"),x=Object(n["resolveComponent"])("error-message"),P=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",o,[a,Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("table",s,[d,Object(n["createElementVNode"])("tbody",null,[Object(n["createVNode"])(S,{propShoppingCart:N.cartData,onEmitDeleteCart:N.refreshCart,onEmitDeleteAllCart:N.refreshCart,onEmitPutCart:N.refreshCart},null,8,["propShoppingCart","onEmitDeleteCart","onEmitDeleteAllCart","onEmitPutCart"])])])]),Object(n["createElementVNode"])("div",u,"總計 - NT$ "+Object(n["toDisplayString"])(N.cartData.final_total)+" 元",1)]),Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(P,{onSubmit:N.onSubmit},{default:Object(n["withCtx"])((function(e){var r=e.errors;return[Object(n["createElementVNode"])("div",b,[m,Object(n["createVNode"])(k,{id:"email",name:"email",type:"email",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":r["email"]}]),modelValue:N.orderInfo.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return N.orderInfo.email=e}),rules:"email|required",placeholder:"請輸入 Email"},null,8,["modelValue","class"]),Object(n["createVNode"])(x,{name:"email",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",p,[O,Object(n["createVNode"])(k,{id:"name",name:"姓名",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":r["姓名"]}]),modelValue:N.orderInfo.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return N.orderInfo.name=e}),rules:"required",placeholder:"請輸入姓名"},null,8,["class","modelValue"]),Object(n["createVNode"])(x,{name:"姓名",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",j,[g,Object(n["createVNode"])(k,{id:"phone",name:"電話",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":r["電話"]}]),modelValue:N.orderInfo.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return N.orderInfo.tel=e}),rules:N.isPhone,placeholder:"請輸入電話"},null,8,["class","modelValue","rules"]),Object(n["createVNode"])(x,{name:"電話",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",h,[v,Object(n["createVNode"])(k,{id:"address",name:"地址",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":r["地址"]}]),rules:"required",modelValue:N.orderInfo.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return N.orderInfo.address=e}),placeholder:"請輸入地址"},null,8,["modelValue","class"]),Object(n["createVNode"])(x,{name:"地址",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",y,[V,Object(n["createVNode"])(k,{id:"message",name:"留言",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":r["留言"]}]),rules:"required",modelValue:N.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return N.message=e}),placeholder:"請輸入留言",as:"textarea"},null,8,["modelValue","class"]),Object(n["createVNode"])(x,{name:"留言",class:"invalid-feedback"})]),Object(n["createElementVNode"])("button",{class:"btn btn-primary",type:"submit",disabled:""===N.cartData}," 送出訂單 ",8,E)]})),_:1},8,["onSubmit"])])])])}r("ac1f"),r("00b4");var C=r("d1f1"),w={class:"col-md-5 border-0"},S={class:"d-flex align-items-center"},k=["src"],x={class:"ms-2 fs-4 mb-0"},P={class:"col-md-2 border-0"},D={class:"col-md-2 border-0"},B={class:"fs-4 d-flex align-items-center"},I=["onClick"],q=Object(n["createElementVNode"])("i",{class:"bi bi-dash"},null,-1),_=[q],A=["value"],F=["onClick"],T=Object(n["createElementVNode"])("i",{class:"bi bi-plus"},null,-1),z=[T],U={class:"col-md-2 border-0"},J=["onClick"],Q=Object(n["createElementVNode"])("span",{class:"cursor-pointer"},[Object(n["createElementVNode"])("i",{class:"bi bi-x-lg"})],-1),$=[Q],L={key:0},R={class:"col-md-1 border-0"},M={key:1,class:"text-danger text-center py-5"};function W(e,t,r,c,o,a){return e.propShoppingCart.hasOwnProperty("carts")&&e.propShoppingCart.carts.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.propShoppingCart.carts,(function(t,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:r,class:"row g-0 align-items-center"},[Object(n["createElementVNode"])("td",w,[Object(n["createElementVNode"])("div",S,[Object(n["createElementVNode"])("img",{class:"col-6",src:t.product.imageUrl,alt:""},null,8,k),Object(n["createElementVNode"])("h3",x,Object(n["toDisplayString"])(t.product.title),1)])]),Object(n["createElementVNode"])("td",P,"NT$ "+Object(n["toDisplayString"])(t.product.price.toLocaleString())+" 元",1),Object(n["createElementVNode"])("td",D,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(["d-block pe-2 | cursor-pointer",{"cursor-not-allowed":t.qty-1==0}]),onClick:function(r){return e.changeQty({config:{qty:t.qty-1,product_id:t.product_id},id:t.id})}},_,10,I),Object(n["createElementVNode"])("input",{class:"col-5 text-center",type:"number",readonly:"",value:t.qty},null,8,A),Object(n["createElementVNode"])("span",{class:"d-block ps-2 | cursor-pointer",onClick:function(r){return e.changeQty({config:{qty:t.qty+1,product_id:t.product_id},id:t.id})}},z,8,F)])]),Object(n["createElementVNode"])("td",U,"NT$ "+Object(n["toDisplayString"])(t.final_total.toLocaleString())+" 元",1),Object(n["createElementVNode"])("td",{class:"col-md-1 border-0",onClick:function(r){return e.emitDeleteCart(t.id)}},$,8,J)])})),128)),e.propShoppingCart.carts.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",L,[Object(n["createElementVNode"])("td",R,[Object(n["createElementVNode"])("button",{class:"btn btn-danger bg-danger",type:"button",onClick:t[0]||(t[0]=function(t){return e.emitDeleteCartAll()})}," 全部刪除 ")])])):Object(n["createCommentVNode"])("",!0)],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h2",M,"尚無資料"))}var X=r("5530"),G=r("284b"),H=Object(X["a"])({},G["a"]),K=r("d959"),Y=r.n(K);const Z=Y()(H,[["render",W]]);var ee=Z,te={components:{CartTables:ee},setup:function(){var e=Object(C["a"])(),t=e.getCart,r=e.postOrder,c=Object(n["ref"])({});t().then((function(e){c.value=e.data.data}));var o=Object(n["ref"])({email:"",name:"",tel:"",address:""}),a=Object(n["ref"])(""),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{carts:[],total:0,final_total:0};c.value=e},i=function(e,t){var n=t.resetForm;r({orderInfo:o.value,message:a.value}).then((function(){l(),n()})).catch((function(e){alert(e.response.data.message)}))},s=function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"};return{cartData:c,refreshCart:l,message:a,orderInfo:o,onSubmit:i,isPhone:s}}};const re=Y()(te,[["render",N]]);t["default"]=re},"428f":function(e,t,r){var n=r("da84");e.exports=n},"4dae":function(e,t,r){var n=r("da84"),c=r("23cb"),o=r("07fa"),a=r("8418"),l=n.Array,i=Math.max;e.exports=function(e,t,r){for(var n=o(e),s=c(t,n),d=c(void 0===r?n:r,n),u=l(i(d-s,0)),f=0;s<d;s++,f++)a(u,f,e[s]);return u.length=f,u}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),c=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"746f":function(e,t,r){var n=r("428f"),c=r("1a2d"),o=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});c(t,e)||a(t,e,{value:o.f(e)})}},8418:function(e,t,r){"use strict";var n=r("a04b"),c=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var a=n(t);a in e?c.f(e,a,o(0,r)):e[a]=r}},a4d3:function(e,t,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),a=r("2ba4"),l=r("c65b"),i=r("e330"),s=r("c430"),d=r("83ab"),u=r("4930"),f=r("d039"),b=r("1a2d"),m=r("e8b5"),p=r("1626"),O=r("861d"),j=r("3a9b"),g=r("d9b5"),h=r("825a"),v=r("7b0b"),y=r("fc6a"),V=r("a04b"),E=r("577e"),N=r("5c6c"),C=r("7c73"),w=r("df75"),S=r("241c"),k=r("057f"),x=r("7418"),P=r("06cf"),D=r("9bf2"),B=r("37e8"),I=r("d1e7"),q=r("f36a"),_=r("6eeb"),A=r("5692"),F=r("f772"),T=r("d012"),z=r("90e3"),U=r("b622"),J=r("e538"),Q=r("746f"),$=r("d44e"),L=r("69f3"),R=r("b727").forEach,M=F("hidden"),W="Symbol",X="prototype",G=U("toPrimitive"),H=L.set,K=L.getterFor(W),Y=Object[X],Z=c.Symbol,ee=Z&&Z[X],te=c.TypeError,re=c.QObject,ne=o("JSON","stringify"),ce=P.f,oe=D.f,ae=k.f,le=I.f,ie=i([].push),se=A("symbols"),de=A("op-symbols"),ue=A("string-to-symbol-registry"),fe=A("symbol-to-string-registry"),be=A("wks"),me=!re||!re[X]||!re[X].findChild,pe=d&&f((function(){return 7!=C(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=ce(Y,t);n&&delete Y[t],oe(e,t,r),n&&e!==Y&&oe(Y,t,n)}:oe,Oe=function(e,t){var r=se[e]=C(ee);return H(r,{type:W,tag:e,description:t}),d||(r.description=t),r},je=function(e,t,r){e===Y&&je(de,t,r),h(e);var n=V(t);return h(r),b(se,n)?(r.enumerable?(b(e,M)&&e[M][n]&&(e[M][n]=!1),r=C(r,{enumerable:N(0,!1)})):(b(e,M)||oe(e,M,N(1,{})),e[M][n]=!0),pe(e,n,r)):oe(e,n,r)},ge=function(e,t){h(e);var r=y(t),n=w(r).concat(Ee(r));return R(n,(function(t){d&&!l(ve,r,t)||je(e,t,r[t])})),e},he=function(e,t){return void 0===t?C(e):ge(C(e),t)},ve=function(e){var t=V(e),r=l(le,this,t);return!(this===Y&&b(se,t)&&!b(de,t))&&(!(r||!b(this,t)||!b(se,t)||b(this,M)&&this[M][t])||r)},ye=function(e,t){var r=y(e),n=V(t);if(r!==Y||!b(se,n)||b(de,n)){var c=ce(r,n);return!c||!b(se,n)||b(r,M)&&r[M][n]||(c.enumerable=!0),c}},Ve=function(e){var t=ae(y(e)),r=[];return R(t,(function(e){b(se,e)||b(T,e)||ie(r,e)})),r},Ee=function(e){var t=e===Y,r=ae(t?de:y(e)),n=[];return R(r,(function(e){!b(se,e)||t&&!b(Y,e)||ie(n,se[e])})),n};if(u||(Z=function(){if(j(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=z(e),r=function(e){this===Y&&l(r,de,e),b(this,M)&&b(this[M],t)&&(this[M][t]=!1),pe(this,t,N(1,e))};return d&&me&&pe(Y,t,{configurable:!0,set:r}),Oe(t,e)},ee=Z[X],_(ee,"toString",(function(){return K(this).tag})),_(Z,"withoutSetter",(function(e){return Oe(z(e),e)})),I.f=ve,D.f=je,B.f=ge,P.f=ye,S.f=k.f=Ve,x.f=Ee,J.f=function(e){return Oe(U(e),e)},d&&(oe(ee,"description",{configurable:!0,get:function(){return K(this).description}}),s||_(Y,"propertyIsEnumerable",ve,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Z}),R(w(be),(function(e){Q(e)})),n({target:W,stat:!0,forced:!u},{for:function(e){var t=E(e);if(b(ue,t))return ue[t];var r=Z(t);return ue[t]=r,fe[r]=t,r},keyFor:function(e){if(!g(e))throw te(e+" is not a symbol");if(b(fe,e))return fe[e]},useSetter:function(){me=!0},useSimple:function(){me=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!d},{create:he,defineProperty:je,defineProperties:ge,getOwnPropertyDescriptor:ye}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:Ve,getOwnPropertySymbols:Ee}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(v(e))}}),ne){var Ne=!u||f((function(){var e=Z();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));n({target:"JSON",stat:!0,forced:Ne},{stringify:function(e,t,r){var n=q(arguments),c=t;if((O(t)||void 0!==e)&&!g(e))return m(t)||(t=function(e,t){if(p(c)&&(t=l(c,this,e,t)),!g(t))return t}),n[1]=t,a(ne,null,n)}})}if(!ee[G]){var Ce=ee.valueOf;_(ee,G,(function(e){return l(Ce,this)}))}$(Z,W),T[M]=!0},b0c0:function(e,t,r){var n=r("83ab"),c=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,l=Function.prototype,i=o(l.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(s.exec),u="name";n&&!c&&a(l,u,{configurable:!0,get:function(){try{return d(s,i(this))[1]}catch(e){return""}}})},dbb4:function(e,t,r){var n=r("23e7"),c=r("83ab"),o=r("56ef"),a=r("fc6a"),l=r("06cf"),i=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),c=l.f,s=o(n),d={},u=0;while(s.length>u)r=c(n,t=s[u++]),void 0!==r&&i(d,t,r);return d}})},e439:function(e,t,r){var n=r("23e7"),c=r("d039"),o=r("fc6a"),a=r("06cf").f,l=r("83ab"),i=c((function(){a(1)})),s=!l||i;n({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},e538:function(e,t,r){var n=r("b622");t.f=n}}]);
//# sourceMappingURL=chunk-80789ff6.fedb93ea.js.map