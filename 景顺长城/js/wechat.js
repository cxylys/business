var descText = '景顺长城竞争优势混合型基金（008131）'
var titleText = '北大学霸带你投资'
var picUrl = 'http://mp.at43.tech/c/jscc/images/share.png'
var linkUrl = 'http://mp.at43.tech/c/jscc'
var $appId
var $timestamp
var $nonceStr
var $signature
var wxurl = location.href
console.log(wxurl)
$(function() {
    $.ajax({
        type: 'GET',
        async: false,
        url: 'http://mp.at43.tech/interface/share',
        data: {
            Returnurl: wxurl,
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'success_jsonpCallback_weichat',
        success: function(obj) {
            let data = obj[0];
            $appId = data.appid
            $timestamp = data.timestamp
            $nonceStr = data.nonceStr
            $signature = data.signature
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
            wx.ready(function() {
                ShareTimeline()
                ShareAppMessage()
                ShareQQ()
                ShareWeibo()
            })
            wx.error(function(res) {
                //alert(res.errMsg);
            })
        },
        error: function(XHR, textStatus, errorThrown) {
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
        success: function() {
            share_add(openid)
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        },
        fail: function() {
            //接口调用失败
        },
        complete: function() {},
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
        success: function() {
            share_add(openid)
        },
        cancel: function() {
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
        success: function() {},
        cancel: function() {
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
        success: function() {},
        cancel: function() {
            // 用户取消分享后执行的回调函数
        },
    })
}