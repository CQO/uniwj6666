(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-index"],{"0457":function(e,t,n){var i=n("406b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("5132aa59",i,!0,{sourceMap:!1,shadowMode:!1})},"2fa0":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{},[t("iframe",{attrs:{src:this.src,frameborder:"0"}})])},o=[]},"406b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"iframe[data-v-db30a69a]{width:100vw;position:absolute;top:0;left:0;right:0;bottom:0;height:100%\n\t\t/* height: calc(100vh - 100rpx); */\n\t\t/* padding-bottom: 100rpx; */}",""]),e.exports=t},"4bd3":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{src:"https://cc.revolutr.cc/index.html"}},mounted:function(){this.src="https://cc.revolutr.cc/index.html?name="+this.vuex_user.username+"&id="+this.vuex_user.uid+"&nickname="+this.vuex_user.nickname+"&usermoney="+this.vuex_user.usermoney},onShow:function(){},methods:{openMeiQiaChatView:function(){testModule.initChatViewManger(),this.setPreSendProductCardMessage(),this.enableSendVoiceMessage(),this.configScheduledAgentId(),this.configScheduledGroupId(),this.configLoginCustomizedId(),testModule.showMeiQiaChatView()},setPreSendProductCardMessage:function(){testModule.setPreSendProductCardMessage({pictureUrl:"https://file.pisen.com.cn/QJW3C1000WEB/Product/201701/16305409655404.jpg",title:"456456123",description:"描述的内容啊",productUrl:"https://meiqia.com",salesCount:50})},enableSendVoiceMessage:function(){testModule.enableSendVoiceMessage(!1)},configScheduledAgentId:function(){testModule.setScheduledAgentId("625f3aa54e11be26320684b61ca8489a")},configScheduledGroupId:function(){testModule.setScheduledGroupId("625f3aa54e11be26320684b61ca8489a")},configLoginCustomizedId:function(){var e=(new Date).getTime();testModule.setLoginCustomizedId(e)},configClientInfo:function(){testModule.setClientInfo({clientInfo:{comment:this.vuex_user.usermoney,id:this.vuex_user.id,name:this.vuex_user.nickname},override:!0})}}};t.default=i},c051:function(e,t,n){"use strict";n.r(t);var i=n("2fa0"),o=n("fdba");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("e8a4");var s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"db30a69a",null,!1,i["a"],void 0);t["default"]=a.exports},e8a4:function(e,t,n){"use strict";var i=n("0457"),o=n.n(i);o.a},fdba:function(e,t,n){"use strict";n.r(t);var i=n("4bd3"),o=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=o.a}}]);