(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-show"],{"0325":function(t,n,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("14d9"),e("e25e"),e("caad"),e("2532");var i=r(e("4416")),a={name:"node",data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:i.default},mounted:function(){var t=this;for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);if(this.opts[0]){for(var n=this.childs.length;n--;)if("img"==this.childs[n].name)break;-1!=n&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(function(n){n.intersectionRatio&&(t.$set(t.ctrl,"load",1),t.observer.disconnect())})))}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.root.pauseVideo){for(var n=!1,e=t.target.id,r=this.root._videos.length;r--;)this.root._videos[r].id==e?n=!0:this.root._videos[r].pause();if(!n){var i=uni.createVideoContext(e,this);i.id=e,this.root._videos.push(i)}}},imgTap:function(t){var n=this.childs[t.currentTarget.dataset.i];if(n.a)return this.linkTap(n.a);n.attrs.ignore||(n.attrs.src=n.attrs.src||n.attrs["data-src"],this.root.$emit("imgtap",n.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var n=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[n]||-1==this.ctrl[n])&&this.$set(this.ctrl,n,1)},linkTap:function(t){var n=t.currentTarget?this.childs[t.currentTarget.dataset.i].attrs:t,e=n.href;this.root.$emit("linktap",n),e&&("#"==e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.includes("://")?this.root.copyLink&&window.open(e):uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e,fail:function(){}})}}))},mediaError:function(t){var n=t.currentTarget.dataset.i,e=this.childs[n];if("video"==e.name||"audio"==e.name){var r=(this.ctrl[n]||0)+1;if(r>e.src.length&&(r=0),r<e.src.length)return this.$set(this.ctrl,n,r)}else"img"==e.name&&this.opts[2]&&this.$set(this.ctrl,n,-1);this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}};n.default=a},"054a":function(t,n,e){"use strict";var r=e("be82"),i=e.n(r);i.a},"090d":function(t,n,e){"use strict";var r=e("ded3").default;e("c975"),e("e25e"),e("99af"),e("caad"),e("2532"),e("acd8"),e("498a"),e("baa5"),e("ac1f"),e("5319"),e("14d9"),e("d401"),e("d3b7"),e("25f0"),e("a434");var i={trustTags:l("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:l("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:l("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:l("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}},a=uni.getSystemInfoSync(),s=a.windowWidth,o=l(" ,\r,\n,\t,\f"),c=0;function l(t){for(var n=Object.create(null),e=t.split(","),r=e.length;r--;)n[e[r]]=!0;return n}function d(t,n){var e=t.indexOf("&");while(-1!=e){var r=t.indexOf(";",e+3),a=void 0;if(-1==r)break;"#"==t[e+1]?(a=parseInt(("x"==t[e+2]?"0":"")+t.substring(e+2,r)),isNaN(a)||(t=t.substr(0,e)+String.fromCharCode(a)+t.substr(r+1))):(a=t.substring(e+1,r),(i.entities[a]||"amp"==a&&n)&&(t=t.substr(0,e)+(i.entities[a]||"&")+t.substr(r+1))),e=t.indexOf("&",e+1)}return t}function h(t){this.options=t||{},this.tagStyle=Object.assign(i.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[]}function f(t){this.handler=t}i.ignoreTags.iframe=void 0,i.trustTags.iframe=!0,i.ignoreTags.embed=void 0,i.trustTags.embed=!0,h.prototype.parse=function(t){for(var n=this.plugins.length;n--;)this.plugins[n].onUpdate&&(t=this.plugins[n].onUpdate(t,i)||t);new f(this).parse(t);while(this.stack.length)this.popNode();return this.nodes},h.prototype.expose=function(){for(var t=this.stack.length;t--;){var n=this.stack[t];if("a"==n.name||n.c)return;n.c=1}},h.prototype.hook=function(t){for(var n=this.plugins.length;n--;)if(this.plugins[n].onParse&&0==this.plugins[n].onParse(t,this))return!1;return!0},h.prototype.getUrl=function(t){var n=this.options.domain;return"/"==t[0]?"/"==t[1]?t="".concat(n?n.split("://")[0]:"http",":").concat(t):n&&(t=n+t):!n||t.includes("data:")||t.includes("://")||(t="".concat(n,"/").concat(t)),t},h.prototype.parseStyle=function(t){var n=t.attrs,e=(this.tagStyle[t.name]||"").split(";").concat((n.style||"").split(";")),r={},i="";n.id&&(this.options.useAnchor?this.expose():"img"!=t.name&&"a"!=t.name&&"video"!=t.name&&"audio"!=t.name&&(n.id=void 0)),n.width&&(r.width=parseFloat(n.width)+(n.width.includes("%")?"%":"px"),n.width=void 0),n.height&&(r.height=parseFloat(n.height)+(n.height.includes("%")?"%":"px"),n.height=void 0);for(var a=0,c=e.length;a<c;a++){var l=e[a].split(":");if(!(l.length<2)){var d=l.shift().trim().toLowerCase(),h=l.join(":").trim();if("-"==h[0]&&h.lastIndexOf("-")>0||h.includes("safe"))i+=";".concat(d,":").concat(h);else if(!r[d]||h.includes("import")||!r[d].includes("import")){if(h.includes("url")){var f=h.indexOf("(")+1;if(f){while('"'==h[f]||"'"==h[f]||o[h[f]])f++;h=h.substr(0,f)+this.getUrl(h.substr(f))}}else h.includes("rpx")&&(h=h.replace(/[0-9.]+\s*rpx/g,(function(t){return"".concat(parseFloat(t)*s/750,"px")})));r[d]=h}}}return t.attrs.style=i,r},h.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"==this.tagName&&(this.xml=!0)},h.prototype.onAttrName=function(t){t=this.xml?t:t.toLowerCase(),"data-"==t.substr(0,5)?"data-src"!=t||this.attrs.src?"img"==this.tagName||"a"==this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},h.prototype.onAttrVal=function(t){var n=this.attrName||"";"style"==n||"href"==n?this.attrs[n]=d(t,!0):n.includes("src")?this.attrs[n]=this.getUrl(d(t,!0)):n&&(this.attrs[n]=t)},h.prototype.onOpenTag=function(t){var n=Object.create(null);n.name=this.tagName,n.attrs=this.attrs,this.attrs=Object.create(null);var e=n.attrs,r=this.stack[this.stack.length-1],a=r?r.children:this.nodes,o=this.xml?t:i.voidTags[n.name];if("embed"==n.name&&this.expose(),"video"!=n.name&&"audio"!=n.name||("video"!=n.name||e.id||(e.id="v".concat(c++)),e.controls||e.autoplay||(e.controls="T"),n.src=[],e.src&&(n.src.push(e.src),e.src=void 0),this.expose()),o){if(!this.hook(n)||i.ignoreTags[n.name])return void("base"!=n.name||this.options.domain?"source"==n.name&&r&&("video"==r.name||"audio"==r.name)&&e.src&&r.src.push(e.src):this.options.domain=e.href);var l=this.parseStyle(n);if("img"==n.name){if(e.src&&(e.src.includes("webp")&&(n.webp="T"),e.src.includes("data:")&&!e["original-src"]&&(e.ignore="T"),!e.ignore||n.webp||e.src.includes("cloud://"))){for(var d=this.stack.length;d--;){var h=this.stack[d];if("a"==h.name){n.a=h.attrs;break}h.c=1}e.i=this.imgList.length.toString();var f=e["original-src"]||e.src;this.imgList.push(f),this.options.lazyLoad&&(e["data-src"]=e.src,e.src=void 0)}"inline"==l.display&&(l.display=""),e.ignore&&(l["max-width"]=l["max-width"]||"100%",e.style+=";-webkit-touch-callout:none"),parseInt(l.width)>s&&(l.height=void 0),l.width&&(l.width.includes("auto")?l.width="":(n.w="T",l.height&&!l.height.includes("auto")&&(n.h="T")))}else if("svg"==n.name)return a.push(n),this.stack.push(n),void this.popNode();for(var u in l)l[u]&&(e.style+=";".concat(u,":").concat(l[u].replace(" !important","")));e.style=e.style.substr(1)||void 0}else("pre"==n.name||(e.style||"").includes("white-space")&&e.style.includes("pre"))&&(this.pre=n.pre=!0),n.children=[],this.stack.push(n);a.push(n)},h.prototype.onCloseTag=function(t){var n;for(t=this.xml?t:t.toLowerCase(),n=this.stack.length;n--;)if(this.stack[n].name==t)break;if(-1!=n)while(this.stack.length>n)this.popNode();else if("p"==t||"br"==t){var e=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;e.push({name:t,attrs:{}})}},h.prototype.popNode=function(){var t=this.stack.pop(),n=t.attrs,e=t.children,a=this.stack[this.stack.length-1],o=a?a.children:this.nodes;if(!this.hook(t)||i.ignoreTags[t.name])return"title"==t.name&&e.length&&"text"==e[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:e[0].text}),void o.pop();if(t.pre){t.pre=this.pre=void 0;for(var c=this.stack.length;c--;)this.stack[c].pre&&(this.pre=!0)}var l={};if("svg"==t.name){var d="",h=n,f=h.style;return n.style="",n.xmlns="http://www.w3.org/2000/svg",function t(n){for(var e in d+="<".concat(n.name),n.attrs){var r=n.attrs[e];r&&("viewbox"==e&&(e="viewBox"),d+=" ".concat(e,'="').concat(r,'"'))}if(n.children){d+=">";for(var i=0;i<n.children.length;i++)t(n.children[i]);d+="</".concat(n.name,">")}else d+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,".concat(d.replace(/#/g,"%23")),style:f,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(n.align&&("table"==t.name?"center"==n.align?l["margin-inline-start"]=l["margin-inline-end"]="auto":l.float=n.align:l["text-align"]=n.align,n.align=void 0),"font"==t.name&&(n.color&&(l.color=n.color,n.color=void 0),n.face&&(l["font-family"]=n.face,n.face=void 0),n.size)){var u=parseInt(n.size);isNaN(u)||(u<1?u=1:u>7&&(u=7),l["font-size"]=["xx-small","x-small","small","medium","large","x-large","xx-large"][u-1]),n.size=void 0}if((n.class||"").includes("align-center")&&(l["text-align"]="center"),Object.assign(l,this.parseStyle(t)),parseInt(l.width)>s&&(l["max-width"]="100%",l["box-sizing"]="border-box"),i.blockTags[t.name]?t.name="div":i.trustTags[t.name]||this.xml||(t.name="span"),"a"==t.name||"ad"==t.name||"iframe"==t.name)this.expose();else if("ul"!=t.name&&"ol"!=t.name||!t.c){if("table"==t.name){var p=parseFloat(n.cellpadding),v=parseFloat(n.cellspacing),g=parseFloat(n.border);if(t.c&&(isNaN(p)&&(p=2),isNaN(v)&&(v=2)),g&&(n.style+=";border:".concat(g,"px solid gray")),t.flag&&t.c){l.display="grid",v?(l["grid-gap"]="".concat(v,"px"),l.padding="".concat(v,"px")):g&&(n.style+=";border-left:0;border-top:0");var m=[],b=[],y=[],x={};(function t(n){for(var e=0;e<n.length;e++)"tr"==n[e].name?b.push(n[e]):t(n[e].children||[])})(e);for(var w=1;w<=b.length;w++){for(var _=1,k=0;k<b[w-1].children.length;k++,_++){var T=b[w-1].children[k];if("td"==T.name||"th"==T.name){while(x["".concat(w,".").concat(_)])_++;var O=T.attrs.style||"",N=O.indexOf("width")?O.indexOf(";width"):0;if(-1!=N){var $=O.indexOf(";",N+6);-1==$&&($=O.length),T.attrs.colspan||(m[_]=O.substring(N?N+7:6,$)),O=O.substr(0,N)+O.substr($)}if(O+=(g?";border:".concat(g,"px solid gray")+(v?"":";border-right:0;border-bottom:0"):"")+(p?";padding:".concat(p,"px"):""),T.attrs.colspan&&(O+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+parseInt(T.attrs.colspan)),T.attrs.rowspan||(O+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+1)),_+=parseInt(T.attrs.colspan)-1),T.attrs.rowspan){O+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+parseInt(T.attrs.rowspan)),T.attrs.colspan||(O+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+1));for(var j=1;j<T.attrs.rowspan;j++)x["".concat(w+j,".").concat(_)]=1}O&&(T.attrs.style=O),y.push(T)}}if(1==w){for(var C="",I=1;I<_;I++)C+="".concat(m[I]?m[I]:"auto"," ");l["grid-template-columns"]=C}}t.children=y}else t.c&&(l.display="table"),isNaN(v)||(l["border-spacing"]="".concat(v,"px")),(g||p)&&function t(n){for(var e=0;e<n.length;e++){var r=n[e];"th"==r.name||"td"==r.name?(g&&(r.attrs.style="border:".concat(g,"px solid gray;").concat(r.attrs.style||"")),p&&(r.attrs.style="padding:".concat(p,"px;").concat(r.attrs.style||""))):r.children&&t(r.children)}}(e);if(this.options.scrollTable&&!(n.style||"").includes("inline")){var S=r({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[S],n=S.attrs}}else if("td"!=t.name&&"th"!=t.name||!n.colspan&&!n.rowspan){if("ruby"==t.name){t.name="span";for(var L=0;L<e.length-1;L++)"text"==e[L].type&&"rt"==e[L+1].name&&(e[L]={name:"div",attrs:{style:"display:inline-block"},children:[{name:"div",attrs:{style:"font-size:50%;text-align:start"},children:e[L+1].children},e[L]]},e.splice(L+1,1))}else if(t.c){t.c=2;for(var M=t.children.length;M--;)t.children[M].c&&"table"!=t.children[M].name||(t.c=1)}}else for(var z=this.stack.length;z--;)if("table"==this.stack[z].name){this.stack[z].flag=1;break}}else{var P={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};P[n.type]&&(n.style+=";list-style-type:".concat(P[n.type]),n.type=void 0);for(var E=e.length;E--;)"li"==e[E].name&&(e[E].c=1)}if((l.display||"").includes("flex")&&!t.c)for(var A=e.length;A--;){var B=e[A];B.f&&(B.attrs.style=(B.attrs.style||"")+B.f,B.f=void 0)}var q=a&&(a.attrs.style||"").includes("flex")&&!t.c;for(var V in q&&(t.f=";max-width:100%"),l)if(l[V]){var D=";".concat(V,":").concat(l[V].replace(" !important",""));q&&(V.includes("flex")&&"flex-direction"!=V||"align-self"==V||"-"==l[V][0]||"width"==V&&D.includes("%"))?(t.f+=D,"width"==V&&(n.style+=";width:100%")):n.style+=D}n.style=n.style.substr(1)||void 0},h.prototype.onText=function(t){if(!this.pre){for(var n,e="",r=0,i=t.length;r<i;r++)o[t[r]]?(" "!=e[e.length-1]&&(e+=" "),"\n"!=t[r]||n||(n=!0)):e+=t[r];if(" "==e&&n)return;t=e}var a=Object.create(null);if(a.type="text",a.text=d(t),this.hook(a)){var s=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;s.push(a)}},f.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var n=this.content.length;-1!=this.i&&this.i<n;)this.state()},f.prototype.checkClose=function(t){var n="/"==this.content[this.i];return!!(">"==this.content[this.i]||n&&">"==this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=n?2:1,this.start=this.i,this.handler.onOpenTag(n),"script"==this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!=this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},f.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!=this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"==t||"!"==t||"?"==t){this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i));var n=this.content[this.i+2];if("/"==t&&(n>="a"&&n<="z"||n>="A"&&n<="Z"))return this.i+=2,this.start=this.i,this.state=this.endTag;var e="--\x3e";"!"==t&&"-"==this.content[this.i+2]&&"-"==this.content[this.i+3]||(e=">"),this.i=this.content.indexOf(e,this.i),-1!=this.i&&(this.i+=e.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},f.prototype.tagName=function(){if(o[this.content[this.i]]){this.handler.onTagName(this.content.substring(this.start,this.i));while(o[this.content[++this.i]]);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},f.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="==t){this.handler.onAttrName(this.content.substring(this.start,this.i));var n="="==t,e=this.content.length;while(++this.i<e)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(n)return this.start=this.i,this.state=this.attrVal;if("="!=this.content[this.i])return this.start=this.i,this.state=this.attrName;n=!0}}else this.checkClose("onAttrName")||this.i++},f.prototype.attrVal=function(){var t=this.content[this.i],n=this.content.length;if('"'==t||"'"==t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1==this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<n;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}while(o[this.content[++this.i]]);this.i<n&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},f.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"==t||"/"==t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!=t&&(this.i=this.content.indexOf(">",this.i),-1==this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=h},"15a2":function(t,n,e){"use strict";e.r(n);var r=e("284e"),i=e("5618");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("625e");var s=e("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"55ff4e76",null,!1,r["a"],void 0);n["default"]=o.exports},"16da":function(t,n,e){"use strict";e.r(n);var r=e("2084"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"172e":function(t,n,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("14d9"),e("d3b7"),e("e25e"),e("ac1f"),e("5319"),e("99af");var i=r(e("1f1b")),a=r(e("4416")),s=[],o=e("090d"),c={name:"mp-html",data:function(){return{nodes:[]}},mixins:[i.default],components:{node:a.default},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=s.length;t--;)this.plugins.push(new s[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,n,e){t&&n&&e&&(this._in={page:t,selector:n,scrollTop:e})},navigateTo:function(t,n){var e=this;return new Promise((function(r,i){if(!e.useAnchor)return i("Anchor is disabled");n=n||parseInt(e.useAnchor)||0;var a=uni.createSelectorQuery().in(e._in?e._in.page:e).select((e._in?e._in.selector:"._root")+(t?"".concat(" ","#").concat(t):"")).boundingClientRect();e._in?a.select(e._in.selector).scrollOffset().select(e._in.selector).boundingClientRect():a.selectViewport().scrollOffset(),a.exec((function(t){if(!t[0])return i("Label not found");var a=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;e._in?e._in.page[e._in.scrollTop]=a:uni.pageScrollTo({scrollTop:a,duration:300}),r()}))}))},getText:function(){var t="";return function n(e){for(var r=0;r<e.length;r++){var i=e[r];if("text"==i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"==i.name)t+="\n";else{var a="p"==i.name||"div"==i.name||"tr"==i.name||"li"==i.name||"h"==i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";a&&t&&"\n"!=t[t.length-1]&&(t+="\n"),i.children&&n(i.children),a&&"\n"!=t[t.length-1]?t+="\n":"td"!=i.name&&"th"!=i.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,e){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):e("Root label not found")}))}))},setContent:function(t,n){var e=this;n&&this.imgList||(this.imgList=[]);var r,i=new o(this).parse(t);this.$set(this,"nodes",n?(this.nodes||[]).concat(i):i),this._videos=[],this.$nextTick((function(){e._hook("onLoad"),e.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){e.getRect().then((function(t){t.height==r&&(e.$emit("ready",t),clearInterval(e._timer)),r=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var n=s.length;n--;)this.plugins[n][t]&&this.plugins[n][t]()}}};n.default=c},"1f1b":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={props:{content:String,copyLink:{type:Boolean,default:uni.$u.props.parse.copyLink},domain:String,errorImg:{type:String,default:uni.$u.props.parse.errorImg},lazyLoad:{type:Boolean,default:uni.$u.props.parse.lazyLoad},loadingImg:{type:String,default:uni.$u.props.parse.loadingImg},pauseVideo:{type:Boolean,default:uni.$u.props.parse.pauseVideo},previewImg:{type:Boolean,default:uni.$u.props.parse.previewImg},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:uni.$u.props.parse.setTitle},showImgMenu:{type:Boolean,default:uni.$u.props.parse.showImgMenu},tagStyle:Object,useAnchor:null}};n.default=r},2084:function(t,n,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("c7eb")),a=r(e("1da1")),s=r(e("fc9c")),o={data:function(){return{id:0,detail:{}}},components:{DsNavbar:s.default},onLoad:function(t){this.id=t.id},onShow:function(){this.getDetail()},methods:{getDetail:function(){var t=this;return(0,a.default)((0,i.default)().mark((function n(){var e;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,uni.$u.http.get("index/api/xq?id="+t.id,{});case 2:e=n.sent,t.detail=e;case 4:case"end":return n.stop()}}),n)})))()}}};n.default=o},"21f6":function(t,n,e){t.exports=e.p+"static/img/logo_gray.fb910829.png"},"22cf":function(t,n,e){"use strict";e.r(n);var r=e("b039"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"256a":function(t,n,e){var r=e("56f4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("48004f6c",r,!0,{sourceMap:!1,shadowMode:!1})},"284e":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:(t.selectable?"_select ":"")+"_root",attrs:{id:"_root"}},[t.nodes[0]?e("node",{attrs:{childs:t.nodes,opts:[t.lazyLoad,t.loadingImg,t.errorImg,t.showImgMenu]}}):t._t("default")],2)},i=[]},"2cdd":function(t,n,e){"use strict";e.r(n);var r=e("0325"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"3be6":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 根节点样式 */._root[data-v-55ff4e76]{overflow:auto;-webkit-overflow-scrolling:touch}\n/* 长按复制 */._select[data-v-55ff4e76]{-webkit-user-select:text;user-select:text}\n",""]),t.exports=n},4416:function(t,n,e){"use strict";e.r(n);var r=e("83d7"),i=e("2cdd");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("054a");var s=e("f0c5"),o=e("ec23"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"84e8cff8",null,!1,r["a"],void 0);"function"===typeof o["a"]&&Object(o["a"])(c),n["default"]=c.exports},5618:function(t,n,e){"use strict";e.r(n);var r=e("172e"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"56f4":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main[data-v-eb0101a0]{min-height:100vh}.title[data-v-eb0101a0]{margin:%?20?%;font-size:%?40?%;font-weight:700;text-align:center;color:#000}.content[data-v-eb0101a0]{margin:0 %?20?%;word-break:break-all;word-wrap:break-word;padding:%?40?% 0}.content[data-v-eb0101a0]  img{max-width:100%}',""]),t.exports=n},"625e":function(t,n,e){"use strict";var r=e("c542"),i=e.n(r);i.a},"7ebb":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* a 标签默认效果 */._a[data-v-84e8cff8]{padding:1.5px 0 1.5px 0;color:#366092;word-break:break-all}\r\n/* a 标签点击态效果 */._hover[data-v-84e8cff8]{text-decoration:underline;opacity:.7}\r\n/* 图片默认效果 */._img[data-v-84e8cff8]{max-width:100%;-webkit-touch-callout:none}\r\n/* 内部样式 */._b[data-v-84e8cff8],\r\n._strong[data-v-84e8cff8]{font-weight:700}._code[data-v-84e8cff8]{font-family:monospace}._del[data-v-84e8cff8]{text-decoration:line-through}._em[data-v-84e8cff8],\r\n._i[data-v-84e8cff8]{font-style:italic}._h1[data-v-84e8cff8]{font-size:2em}._h2[data-v-84e8cff8]{font-size:1.5em}._h3[data-v-84e8cff8]{font-size:1.17em}._h5[data-v-84e8cff8]{font-size:.83em}._h6[data-v-84e8cff8]{font-size:.67em}._h1[data-v-84e8cff8],\r\n._h2[data-v-84e8cff8],\r\n._h3[data-v-84e8cff8],\r\n._h4[data-v-84e8cff8],\r\n._h5[data-v-84e8cff8],\r\n._h6[data-v-84e8cff8]{display:block;font-weight:700}._image[data-v-84e8cff8]{height:1px}._ins[data-v-84e8cff8]{text-decoration:underline}._li[data-v-84e8cff8]{display:list-item}._ol[data-v-84e8cff8]{list-style-type:decimal}._ol[data-v-84e8cff8],\r\n._ul[data-v-84e8cff8]{display:block;padding-left:40px;margin:1em 0}._q[data-v-84e8cff8]::before{content:'\"'}._q[data-v-84e8cff8]::after{content:'\"'}._sub[data-v-84e8cff8]{font-size:smaller;vertical-align:sub}._sup[data-v-84e8cff8]{font-size:smaller;vertical-align:super}._thead[data-v-84e8cff8],\r\n._tbody[data-v-84e8cff8],\r\n._tfoot[data-v-84e8cff8]{display:table-row-group}._tr[data-v-84e8cff8]{display:table-row}._td[data-v-84e8cff8],\r\n._th[data-v-84e8cff8]{display:table-cell;vertical-align:middle}._th[data-v-84e8cff8]{font-weight:700;text-align:center}._ul[data-v-84e8cff8]{list-style-type:disc}._ul ._ul[data-v-84e8cff8]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-84e8cff8]{list-style-type:square}._abbr[data-v-84e8cff8],\r\n._b[data-v-84e8cff8],\r\n._code[data-v-84e8cff8],\r\n._del[data-v-84e8cff8],\r\n._em[data-v-84e8cff8],\r\n._i[data-v-84e8cff8],\r\n._ins[data-v-84e8cff8],\r\n._label[data-v-84e8cff8],\r\n._q[data-v-84e8cff8],\r\n._span[data-v-84e8cff8],\r\n._strong[data-v-84e8cff8],\r\n._sub[data-v-84e8cff8],\r\n._sup[data-v-84e8cff8]{display:inline}\r\n\r\n",""]),t.exports=n},"83d7":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:"_"+t.name+" "+t.attrs.class,style:t.attrs.style,attrs:{id:t.attrs.id}},[t._l(t.childs,(function(n,r){return["img"==n.name&&(t.opts[1]&&!t.ctrl[r]||t.ctrl[r]<0)?e("v-uni-image",{key:r+"_0",staticClass:"_img",style:n.attrs.style,attrs:{src:t.ctrl[r]<0?t.opts[2]:t.opts[1],mode:"widthFix"}}):t._e(),"img"==n.name?e("img",{key:r+"_1",class:"_img "+n.attrs.class,style:(-1==t.ctrl[r]?"display:none;":"")+n.attrs.style,attrs:{id:n.attrs.id,src:n.attrs.src||(t.ctrl.load?n.attrs["data-src"]:""),"data-i":r},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLoad.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)},longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLongTap.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.imgTap.apply(void 0,arguments)}}}):"text"==n.type?e("v-uni-text",{attrs:{decode:!0}},[t._v(t._s(n.text))]):"br"==n.name?e("v-uni-text",[t._v("\\n")]):"a"==n.name?e("v-uni-view",{class:(n.attrs.href?"_a ":"")+n.attrs.class,style:"display:inline;"+n.attrs.style,attrs:{id:n.attrs.id,"hover-class":"_hover","data-i":r},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.linkTap.apply(void 0,arguments)}}},[e("node",{staticStyle:{display:"inherit"},attrs:{name:"span",childs:n.children,opts:t.opts}})],1):"video"==n.name?e("v-uni-video",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,autoplay:n.attrs.autoplay,controls:n.attrs.controls,loop:n.attrs.loop,muted:n.attrs.muted,poster:n.attrs.poster,src:n.src[t.ctrl[r]||0],"data-i":r},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"iframe"==n.name?e("iframe",{style:n.attrs.style,attrs:{allowfullscreen:n.attrs.allowfullscreen,frameborder:n.attrs.frameborder,src:n.attrs.src}}):"embed"==n.name?e("embed",{style:n.attrs.style,attrs:{src:n.attrs.src}}):"audio"==n.name?e("v-uni-audio",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,author:n.attrs.author,controls:n.attrs.controls,loop:n.attrs.loop,name:n.attrs.name,poster:n.attrs.poster,src:n.src[t.ctrl[r]||0],"data-i":r},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"table"==n.name&&n.c||"li"==n.name?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id}},["li"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,r){return e("v-uni-view",{key:r,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},["td"==n.name||"th"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,r){return["td"==n.name||"th"==n.name?e("v-uni-view",{key:r+"_0",class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1):e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},t._l(n.children,(function(n,r){return e("v-uni-view",{key:r,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1)})),1)]}))],2)}))],2):t.handler.use(n)?e("v-uni-rich-text",{style:n.f,attrs:{id:n.attrs.id,nodes:[n]}}):2==n.c?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.f+";"+n.attrs.style,attrs:{id:n.attrs.id}},t._l(n.children,(function(n,r){return e("node",{key:r,style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})})),1):e("node",{style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})]}))],2)},i=[]},"8cc0":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,".left-icon[data-v-4c5dc9bc]{width:%?275?%;height:%?87?%}.tabmenu[data-v-4c5dc9bc]{background-color:#e31f26;width:%?65?%;height:%?65?%;border-radius:50%;display:flex;justify-content:center;align-items:center}.tabmenu .icon[data-v-4c5dc9bc]{width:%?30?%;height:%?30?%}.drawer[data-v-4c5dc9bc]{display:flex;flex-direction:column;align-items:center;height:100vh;width:%?400?%;background-color:#fff}.drawer .item[data-v-4c5dc9bc]{height:%?120?%;border-top:#f8f8f8 4px solid;display:flex;align-items:center;background-color:#fff;width:100%;justify-content:center}.drawer .drawer-logo[data-v-4c5dc9bc]{width:%?320?%;margin-top:%?100?%}",""]),t.exports=n},9523:function(t,n,e){e("7a82");var r=e("a395");t.exports=function(t,n,e){return n=r(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},9790:function(t,n,e){t.exports=e.p+"static/img/logo_small.c91e3ff2.png"},"9b90":function(t,n,e){"use strict";var r=e("256a"),i=e.n(r);i.a},a395:function(t,n,e){var r=e("7037")["default"],i=e("e50d");t.exports=function(t){var n=i(t,"string");return"symbol"===r(n)?n:String(n)},t.exports.__esModule=!0,t.exports["default"]=t.exports},aba2:function(t,n,e){var r=e("8cc0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("473006a3",r,!0,{sourceMap:!1,shadowMode:!1})},b039:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{isopen:!1}},props:{left:{type:Boolean,default:!1}},mounted:function(){},methods:{clickLeft:function(){uni.navigateBack({delta:1})},changMenu:function(){this.isopen?this.$refs.drawer.close():this.$refs.drawer.open(),this.isopen=!this.isopen}}};n.default=r},baa5:function(t,n,e){var r=e("23e7"),i=e("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},be82:function(t,n,e){var r=e("7ebb");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("6559b913",r,!0,{sourceMap:!1,shadowMode:!1})},c247:function(t,n,e){"use strict";e.r(n);var r=e("f105"),i=e("16da");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("9b90");var s=e("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"eb0101a0",null,!1,r["a"],void 0);n["default"]=o.exports},c542:function(t,n,e){var r=e("3be6");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("d438011a",r,!0,{sourceMap:!1,shadowMode:!1})},ded3:function(t,n,e){e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("14d9"),e("159b"),e("dbb4"),e("1d1c"),e("7a82");var r=e("9523");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}t.exports=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t},t.exports.__esModule=!0,t.exports["default"]=t.exports},e50d:function(t,n,e){e("8172"),e("efec"),e("a4d3"),e("e01a"),e("d3b7"),e("d9e2"),e("d401"),e("a9e3");var r=e("7037")["default"];t.exports=function(t,n){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},e94a:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uniNavBar:e("688d").default,uniIcons:e("1323").default,uniPopup:e("8037").default},i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",[r("uni-nav-bar",{staticStyle:{width:"100vw","z-index":"99999"},attrs:{backgroundColor:"rgba(255,255,255,0)",leftWidth:"275rpx",height:"120rpx",statusBar:!0,border:!1,fixed:!0},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeft.apply(void 0,arguments)}}},[t.left?r("v-uni-view",{attrs:{slot:"left"},slot:"left"},[r("v-uni-image",{staticClass:"left-icon",attrs:{src:e("9790"),mode:"scaleToFill"}})],1):t._e(),r("v-uni-view",{attrs:{slot:"right"},slot:"right"},[r("v-uni-view",{staticClass:"tabmenu",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changMenu.apply(void 0,arguments)}}},[r("uni-icons",{attrs:{type:"bars",size:"18",color:"#ffffff"}})],1)],1)],1),r("uni-popup",{ref:"drawer",attrs:{type:"right"}},[r("v-uni-view",{staticClass:"drawer"},[r("v-uni-view",{staticStyle:{height:"120rpx"}}),r("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}},[t._v("首页")]),r("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/news/index"}},[t._v("新闻资讯")]),r("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/my/index"}},[t._v("个人中心")]),r("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/chat/index"}},[t._v("联系我们")]),r("v-uni-image",{staticClass:"drawer-logo",attrs:{src:e("21f6"),mode:"widthFix"}})],1)],1)],1)},a=[]},ec23:function(t,n,e){"use strict";n["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["handler"]=function(t){var n={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};return t.exports={use:function(t){return!n[t.name]&&-1==(t.attrs.style||"").indexOf("display:inline")&&!t.c}},t.exports}({exports:{}})}},f105:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uParse:e("15a2").default},i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"title"},[this._v(this._s(this.detail.title))]),n("v-uni-view",{staticClass:"desc"}),n("v-uni-view",{staticClass:"content"},[n("u-parse",{attrs:{content:this.detail.content}})],1)],1)},a=[]},fc9c:function(t,n,e){"use strict";e.r(n);var r=e("e94a"),i=e("22cf");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("ff56");var s=e("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"4c5dc9bc",null,!1,r["a"],void 0);n["default"]=o.exports},ff56:function(t,n,e){"use strict";var r=e("aba2"),i=e.n(r);i.a}}]);