
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/about","pages/info/index","pages/buy/index","pages/news/index","pages/news/show","pages/chat/index","pages/my/index","pages/my/login","pages/my/register","pages/my/shouyi","pages/my/bind","pages/my/tixian","pages/my/chongzhi","pages/my/password","pages/my/record1","pages/my/record2","pages/my/bank","pages/my/realname","pages/my/privacyPolicy","pages/my/about"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","background":"#ffffff"},"tabBar":{"color":"#000000","selectedColor":"#197af6","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"/static/tabbar/shouye.png","selectedIconPath":"/static/tabbar/shouye1.png","text":"首页"},{"pagePath":"pages/info/index","iconPath":"/static/tabbar/chanpin.png","selectedIconPath":"/static/tabbar/chanpin1.png","text":"产品"},{"pagePath":"pages/chat/index","iconPath":"/static/tabbar/kefu.png","selectedIconPath":"/static/tabbar/kefu1.png","text":"客服"},{"pagePath":"pages/my/record1","iconPath":"/static/tabbar/mingxi.png","selectedIconPath":"/static/tabbar/mingxi1.png","text":"明细"},{"pagePath":"pages/my/index","iconPath":"/static/tabbar/wode.png","selectedIconPath":"/static/tabbar/wode1.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"CITIC Securities","compilerVersion":"3.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/index/about","meta":{},"window":{"navigationBarTitleText":"走进新能源","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/info/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/buy/index","meta":{},"window":{"navigationBarTitleText":"uni-app","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/news/index","meta":{},"window":{"navigationBarTitleText":"新闻资讯","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/news/show","meta":{},"window":{"navigationBarTitleText":"资讯详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/chat/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"在线客服","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/my/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/register","meta":{},"window":{"navigationBarTitleText":"注册","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/shouyi","meta":{},"window":{"navigationBarTitleText":"收益明细","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/bind","meta":{},"window":{"navigationBarTitleText":"绑定银行卡","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/tixian","meta":{},"window":{"navigationBarTitleText":"提现","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/chongzhi","meta":{},"window":{"navigationBarTitleText":"建仓","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/password","meta":{},"window":{"navigationBarTitleText":"密码重置","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/record1","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"建仓提现记录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/record2","meta":{},"window":{"navigationBarTitleText":"持仓明细","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/bank","meta":{},"window":{"navigationBarTitleText":"银行卡","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/realname","meta":{},"window":{"navigationBarTitleText":"实名认证","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/my/privacyPolicy","meta":{},"window":{"navigationBarTitleText":"隐私政策","navigationBarTextStyle":"black","enablePullDownRefresh":false}},{"path":"/pages/my/about","meta":{},"window":{"navigationBarTitleText":"关于我们","navigationBarTextStyle":"black","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
