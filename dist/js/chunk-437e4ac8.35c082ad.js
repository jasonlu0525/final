(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437e4ac8"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),a=n("2d00"),c=r("species");e.exports=function(e){return a>=51||!o((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8070:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"container vh-100 d-flex justify-content-center align-items-center",id:"app"},a={class:"row justify-content-center w-100"},c={class:"col-md-6 col-lg-3 bg-white rounded p-5 content-box"},i=Object(o["createElementVNode"])("h1",{class:"fw-bold mb-3"},"請先登入",-1),l={class:"form-floating mb-3"},d=Object(o["createElementVNode"])("label",{for:"Email1"},"Email address",-1),s={class:"form-floating mb-3"},u=Object(o["createElementVNode"])("label",{for:"Password"},"Password",-1),f=Object(o["createElementVNode"])("button",{type:"submit",class:"btn btn-primary w-100"},"登入",-1);function b(e,t,n,b,m,p){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((function(){return b.login&&b.login.apply(b,arguments)}),["prevent"]))},[i,Object(o["createElementVNode"])("div",l,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"email",class:"form-control",id:"Email1","aria-describedby":"email",placeholder:"Email address","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.loginData.username=e})},null,512),[[o["vModelText"],b.loginData.username,void 0,{trim:!0}]]),d]),Object(o["createElementVNode"])("div",s,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"password",class:"form-control",id:"Password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.loginData.password=e})},null,512),[[o["vModelText"],b.loginData.password]]),u]),f],32)])])])}n("99af"),n("ac1f"),n("5319");var m=n("6c02"),p=n("d1f1"),v={setup:function(){var e=Object(m["d"])(),t=Object(p["a"])(),n=t.postLogin,r=Object(o["ref"])({username:"",password:""}),a=function(){console.log(r,r.value),n(r.value).then((function(t){var n=t.data,o=n.token,r=n.expired;document.cookie="user=".concat(o,";expires=").concat(new Date(r),";path=/"),e.replace("dashboard")}))};return{loginData:r,login:a}}},w=n("d959"),j=n.n(w);const O=j()(v,[["render",b]]);t["default"]=O},8418:function(e,t,n){"use strict";var o=n("a04b"),r=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var c=o(t);c in e?r.f(e,c,a(0,n)):e[c]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("da84"),a=n("d039"),c=n("e8b5"),i=n("861d"),l=n("7b0b"),d=n("07fa"),s=n("8418"),u=n("65f0"),f=n("1dde"),b=n("b622"),m=n("2d00"),p=b("isConcatSpreadable"),v=9007199254740991,w="Maximum allowed index exceeded",j=r.TypeError,O=m>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),g=f("concat"),h=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},E=!O||!g;o({target:"Array",proto:!0,forced:E},{concat:function(e){var t,n,o,r,a,c=l(this),i=u(c,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?c:arguments[t],h(a)){if(r=d(a),f+r>v)throw j(w);for(n=0;n<r;n++,f++)n in a&&s(i,f,a[n])}else{if(f>=v)throw j(w);s(i,f++,a)}return i.length=f,i}})}}]);
//# sourceMappingURL=chunk-437e4ac8.35c082ad.js.map