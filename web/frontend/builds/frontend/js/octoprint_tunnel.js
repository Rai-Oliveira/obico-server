(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={octoprint_tunnel:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;i.push([7,"chunk-vendors"]),n()})({"17d7":function(t,e,n){t.exports=n.p+"img/octoprint-tunnel.png"},1807:function(t,e,n){"use strict";n("99af");e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWS:function(t){return"/ws/web/".concat(t,"/")},printerSharedWS:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(r){return n}},o=function(t,e){return localStorage.setItem(t,e)}},6368:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=n("f357"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",{staticClass:"text-center p-2"},[r("img",{staticStyle:{height:"1.1em","margin-right":"0.75em"},attrs:{src:n("17d7")}}),t._v("OctoPrint Secure Tunnel ")]),t.isPro?t._e():r("div",{staticClass:"text-center pb-2"},[t._m(0),t._v(" "),r("span",{class:t.usageClass},[t._v(t._s(t.usageMTD)+"/"+t._s(t.humanizedUsageCap))]),t.overage?r("div",[t._v("Your month-to-date tunneling usage is over the Free plan limit. Upgrade to the Pro plan to "),r("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent/pricing/"}},[t._v("Get Unlimited Usage")])]):t._e()]),r("div",[t.printerId?r("iframe",{staticStyle:{width:"100%",height:"1400px",background:"#FFFFFF"},attrs:{src:t.iframeUrl()}}):t._e()])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-muted"},[t._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users"}},[t._v("?")]),t._v("):")])}],c=(n("a9e3"),n("bc3a")),s=n.n(c),u=n("49d5"),p=n.n(u),l=n("1807"),f={name:"OctoPrintTunnelPage",props:{printerId:{type:Number},isPro:{type:Boolean},usageCap:{type:Number}},data:function(){return{bytesMTD:null}},computed:{usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return p()(this.bytesMTD)},humanizedUsageCap:function(){return p()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},mounted:function(){this.$swal.DismissableToast({html:'<div class="p-1">It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.</div><div class="p-1"><a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-secure">Learn more about OctoPrint Tunneling\'s security and page load speed. <i class="fas fa-external-link-alt"></i></a></div>',customClass:{container:"dark-backdrop"}},"octoprint-tunnel.warning");var t=this,e=function(){s.a.get(l["a"].tunnelUsage()).then((function(e){t.bytesMTD=e.data.total}))};setInterval(e,15e3),e()},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")}}},d=f,h=(n("b17b"),n("2877")),v=Object(h["a"])(d,i,a,!1,null,"6919fc4e",null),g=v.exports,m=n("785f");Object(m["a"])(r["default"]),r["default"].use(o["a"]),new r["default"]({components:{OctoPrintTunnelPage:g}}).$mount("#octoprint-tunnel-mount")},7:function(t,e,n){t.exports=n("6368")},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("0122"),o=/(?:^|[-_/])(\w)/g,i="root",a="anonymous component",c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,s=function(t){var e=c.exec(t);return e?e.slice(1):[]},u=function(t,e){var n=s(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},p=function(t){if(!t)return a;if(t.$root===t)return i;if(!t.$options)return a;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=u(e,".vue");return n.replace(o,(function(t,e){return e?e.toUpperCase():""}))}return a},l=function t(e,n,o,i,a,c){var s=0;for(var u in n){if(s+=1,s>c)break;"object"==Object(r["a"])(n[u])?a>i&&t(e,n[u],o+"."+u,i+1,a,c):e[o+"."+u]=n[u]}},f=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,r,o){if(window.Sentry){var i={},a=r;if(r._original&&(a=r._original),a)try{i.componentName=p(a),l(i,JSON.parse(JSON.stringify(a.$options.propsData)),"props",0,2,10)}catch(c){console.log("Unable to extract metadata from Vue component.")}o&&(i.lifecycleHook=o),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",i),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,r,o),t.util&&t.util.warn("Error in ".concat(o,': "').concat(n.toString(),'"'),r),console.error(n)}};e["a"]=f},"7ef4":function(t,e,n){},b17b:function(t,e,n){"use strict";var r=n("7ef4"),o=n.n(r);o.a},f357:function(t,e,n){"use strict";var r=n("f3f3"),o=n("a026"),i=n("5886"),a=n("3c33"),c=function(t,e,n){var i=document.createElement("div"),a=new o["default"]({render:function(n){return n(t,{props:e})}}).$mount(i);return o["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(a.$el)},onDestroy:function(){a.$destroy(),i.remove()}}))},s=function(t,e,n){return o["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},u=function(t,e){t.use(i["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),o=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),u=function(e,n){if(!Object(a["a"])(n,!1)){var o=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(o).then((function(t){t.value&&(Object(a["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=c,t.prototype.$swal["openModalWithElement"]=s,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=o,t.prototype.$swal["DismissableToast"]=u};e["a"]={install:u}}});
//# sourceMappingURL=octoprint_tunnel.js.map