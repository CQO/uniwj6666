(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-index~pages-index-about~pages-info-index~pages-my-bank~pages-my-bind~pages-my-index~pages-~f54e580a"],{"0949":function(t,i,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.createAnimation=function(t,i){if(!i)return;return clearTimeout(i.timer),new r(t,i)},n("caad"),n("2532"),n("99af"),n("d3b7"),n("159b");var o=e(n("5530")),a=e(n("d4ec")),s=e(n("bee2")),r=function(){function t(i,n){(0,a.default)(this,t),this.options=i,this.animation=uni.createAnimation(i),this.currentStepAnimates={},this.next=0,this.$=n}return(0,s.default)(t,[{key:"_nvuePushAnimates",value:function(t,i){var n=this.currentStepAnimates[this.next],e={};if(e=n||{styles:{},config:{}},u.includes(t)){e.styles.transform||(e.styles.transform="");var o="";"rotate"===t&&(o="deg"),e.styles.transform+="".concat(t,"(").concat(i+o,") ")}else e.styles[t]="".concat(i);this.currentStepAnimates[this.next]=e}},{key:"_animateRun",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.$.$refs["ani"].ref;if(n)return new Promise((function(e,a){nvueAnimation.transition(n,(0,o.default)({styles:t},i),(function(t){e()}))}))}},{key:"_nvueNextAnimate",value:function(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0,o=t[n];if(o){var a=o.styles,s=o.config;this._animateRun(a,s).then((function(){n+=1,i._nvueNextAnimate(t,n,e)}))}else this.currentStepAnimates={},"function"===typeof e&&e(),this.isEnd=!0}},{key:"step",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.animation.step(t),this}},{key:"run",value:function(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((function(){"function"===typeof t&&t()}),this.$.durationTime)}}]),t}(),u=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];u.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((function(t){r.prototype[t]=function(){var i;return(i=this.animation)[t].apply(i,arguments),this}}))},"1b61":function(t,i,n){"use strict";n.r(i);var e=n("ecc0"),o=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},2909:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return(0,e.default)(t)||(0,o.default)(t)||(0,a.default)(t)||(0,s.default)()};var e=r(n("6005")),o=r(n("db90")),a=r(n("06c5")),s=r(n("3427"));function r(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("d9e2"),n("d401")},"3d93":function(t,i,n){"use strict";n.r(i);var e=n("6884"),o=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},6005:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){if(Array.isArray(t))return(0,e.default)(t)};var e=function(t){return t&&t.__esModule?t:{default:t}}(n("6b75"))},6884:function(t,i,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(n("2909")),a=e(n("53ca")),s=e(n("5530"));n("a9e3"),n("d3b7"),n("159b"),n("99af"),n("ac1f"),n("5319");var r=n("0949"),u={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:function(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}},customClass:{type:String,default:""}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,s.default)((0,s.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),i="";for(var n in t){var e=this.toLine(n);i+=e+":"+t[n]+";"}return i},transformStyles:function(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created:function(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,r.createAnimation)(Object.assign(this.config,t),this)},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var n in t)try{var e;if("object"===(0,a.default)(t[n]))(e=this.animation)[n].apply(e,(0,o.default)(t[n]));else this.animation[n](t[n])}catch(s){console.error("方法 ".concat(n," 不存在"))}return this.animation.step(i),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var i=this.styleInit(!1),n=i.opacity,e=i.transform;"undefined"!==typeof n&&(this.opacity=n),this.transform=e,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,r.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var i=this;this.animation&&this.tranfromInit(!0).step().run((function(){i.isShow=!1,i.animationData=null,i.animation=null;var t=i.styleInit(!1),n=t.opacity,e=t.transform;i.opacity=n||1,i.transform=e,i.$emit("change",{detail:i.isShow})}))},styleInit:function(t){var i=this,n={transform:""},e=function(t,e){"fade"===e?n.opacity=i.animationType(t)[e]:n.transform+=i.animationType(t)[e]+" "};return"string"===typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((function(i){e(t,i)})),n},tranfromInit:function(t){var i=this,n=function(t,n){var e=null;"fade"===n?e=t?0:1:(e=t?"-100%":"0","zoom-in"===n&&(e=t?.8:1),"zoom-out"===n&&(e=t?1.2:1),"slide-right"===n&&(e=t?"100%":"0"),"slide-bottom"===n&&(e=t?"100%":"0")),i.animation[i.animationMode()[n]](e)};return"string"===typeof this.modeClass?n(t,this.modeClass):this.modeClass.forEach((function(i){n(t,i)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};i.default=u},8037:function(t,i,n){"use strict";n.r(i);var e=n("e41b"),o=n("1b61");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("af0b");var s=n("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"58e7869c",null,!1,e["a"],void 0);i["default"]=r.exports},af0b:function(t,i,n){"use strict";var e=n("f1b9"),o=n.n(e);o.a},af85:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.isShow?n("v-uni-view",{ref:"ani",class:t.customClass,style:t.transformStyles,attrs:{animation:t.animationData},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},b3cd:function(t,i,n){"use strict";n.r(i);var e=n("af85"),o=n("3d93");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);var s=n("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"acf5fb64",null,!1,e["a"],void 0);i["default"]=r.exports},cf56:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-popup[data-v-58e7869c]{position:fixed;z-index:99}.uni-popup.top[data-v-58e7869c], .uni-popup.left[data-v-58e7869c], .uni-popup.right[data-v-58e7869c]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-58e7869c]{display:block;position:relative\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-58e7869c], .uni-popup .uni-popup__wrapper.right[data-v-58e7869c]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-58e7869c]{z-index:999}.fixforpc-top[data-v-58e7869c]{top:0}',""]),t.exports=i},d6b3:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("7db0"),n("d3b7"),n("b64b"),n("caad"),n("2532");var e={name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted:function(){var t=this,i={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(function(n){if(!t.disable){var e=Object.keys(i).find((function(t){var e=n.key,o=i[t];return o===e||Array.isArray(o)&&o.includes(e)}));e&&setTimeout((function(){t.$emit(e,{})}),0)}}))},render:function(){}};i.default=e},e41b:function(t,i,n){"use strict";n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={uniTransition:n("b3cd").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle,t.isDesktop?"fixforpc-z-index":""],on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[n("v-uni-view",{on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)}}},[t.maskShow?n("uni-transition",{key:"1",attrs:{name:"mask","mode-class":"fade",styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}}):t._e(),n("uni-transition",{key:"2",attrs:{"mode-class":t.ani,name:"content",styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.popupstyle],style:{backgroundColor:t.bg},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1),t.maskShow?n("keypress",{on:{esc:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}}):t._e()],1):t._e()},a=[]},ecc0:function(t,i,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("c975");var o=e(n("d6b3")),a={name:"uniPopup",components:{keypress:o.default},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup:function(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop:function(){return this.popupWidth>=500&&this.popupHeight>=500},bg:function(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted:function(){var t=this;(function(){var i=uni.getSystemInfoSync(),n=i.windowWidth,e=i.windowHeight,o=i.windowTop,a=i.safeArea,s=(i.screenHeight,i.safeAreaInsets);t.popupWidth=n,t.popupHeight=e+o,t.safeAreaInsets=a?s.bottom:0})()},created:function(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{closeMask:function(){this.maskShow=!1},disableMask:function(){this.mkclick=!1},clear:function(t){t.stopPropagation(),this.clearPropagation=!0},open:function(t){t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close:function(t){var i=this;this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((function(){i.showPopup=!1}),300)},touchstart:function(){this.clearPropagation=!1},onTap:function(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top:function(t){var i=this;this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((function(){i.messageChild&&"message"===i.type&&i.messageChild.timerClose()})))},bottom:function(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center:function(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left:function(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right:function(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}};i.default=a},f1b9:function(t,i,n){var e=n("cf56");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("852cadea",e,!0,{sourceMap:!1,shadowMode:!1})}}]);