var level1 = '首页'
var level2 = '首页'
var level3 = ''
function initAuth() {
  $.ajax({
    type: 'post',
    url: 'http://shyuming.com.cn/weixin/action/index.php/home/jsccV1/init',
    async: false,
    data: {},
    dataType: 'json',
    success: function (obj) {
      if (obj.state === 201) {
        // 请求授权
        location.href =
          'http://shyuming.com.cn/weixin/action/index.php/auth/index/index?action_id=200&auth_status=2&url=http://shyuming.com.cn/jsccygnew/'
      } else {
      }
    },
    error: function (XHR, textStatus, errorThrown) {},
  })
}

function myListener(level1, level2, level3, type, url) {
  $.ajax({
    type: 'post',
    url: 'http://shyuming.com.cn/weixin/action/index.php/home/jsccV1/log',
    data: {
      column: level1,
      column_content: level2,
      content: level3,
      type: type,
      action_id: 200,
      action_name: '景顺长城余广集合页',
    },
    success: function (obj) {},
    error: function (XHR, textStatus, errorThrown) {},
  })
  if (url) {
    location.href = url
  }
}
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}
function ipaddress() {
  $.ajax({
    type: 'post',
    url: 'http://shyuming.com.cn/weixin/action/index.php/home/jsccV1/ipInfo',
    data: {},
    success: function (obj) {},
    error: function (XHR, textStatus, errorThrown) {},
  })
}
$(function () {
  initAuth()
  setInterval(function () {
    ipaddress()
  }, 5000)
})
