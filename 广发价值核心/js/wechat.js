var descText = '发行期：1月20日-1月29日'
var titleText = '广发价值核心营销材料包'
var picUrl = 'http://shyuming.com.cn/gfjzhx/images/share.jpg?v=20200110'
var linkUrl = 'http://shyuming.com.cn/gfjzhx/'
var $appId
var $timestamp
var $nonceStr
var $signature
var wxurl = location.href.split('#')[0]
$(function () {
  $.ajax({
    type: 'GET',
    async: false,
    url:
      'http://api.shyuming.com.cn/weixin_basic/index.php?m=home&c=WeiXin&a=share_params',
    data: {
      url: wxurl,
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    //jsonpCallback: 'success_jsonpCallback_weichat',
    success: function (obj) {
      $appId = obj.data.appId
      $timestamp = obj.data.timestamp
      $nonceStr = obj.data.nonceStr
      $signature = obj.data.signature
      wx.config({
        debug: false,
        appId: $appId,
        timestamp: $timestamp,
        nonceStr: $nonceStr,
        signature: $signature,
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
        ],
      })
      wx.ready(function () {
        ShareTimeline()
        ShareAppMessage()
        ShareQQ()
        ShareWeibo()
      })
      wx.error(function (res) {
        //alert(res.errMsg);
      })
    },
    error: function (XHR, textStatus, errorThrown) {
      console.log(XHR)
    },
  })
})

function ShareTimeline() {
  //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  wx.onMenuShareTimeline({
    title: descText, // 分享标题
    link: linkUrl, // 分享链接
    desc: descText, //分享内容
    imgUrl: picUrl, // 分享图标
    success: function () {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
    fail: function () {
      //接口调用失败
    },
    complete: function () {},
  })
}

function ShareAppMessage() {
  //获取“分享给朋友”按钮点击状态及自定义分享内容接口
  wx.onMenuShareAppMessage({
    title: titleText, // 分享标题
    link: linkUrl, // 分享链接
    desc: descText, //分享内容
    imgUrl: picUrl, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
  })
}

function ShareQQ() {
  //获取“分享到QQ”按钮点击状态及自定义分享内容接口
  wx.onMenuShareQQ({
    title: titleText, // 分享标题
    link: linkUrl, // 分享链接
    desc: descText, //分享内容
    imgUrl: picUrl, // 分享图标
    success: function () {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
  })
}

function ShareWeibo() {
  //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
  wx.onMenuShareWeibo({
    title: titleText, // 分享标题
    link: linkUrl, // 分享链接
    desc: descText, //分享内容
    imgUrl: picUrl, // 分享图标
    success: function () {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
  })
}
