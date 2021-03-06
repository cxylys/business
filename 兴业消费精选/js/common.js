var bodyHeigth = 0
var kvHeight = 0
function init() {
  if (sessionStorage.getItem('slidenum')) {
    var index = sessionStorage.getItem('slidenum')
    $('.menu-list li').eq(index).addClass('on')
    $('.list-data .item').eq(index).show()
  } else {
    $('.menu-list li').eq(0).addClass('on')
    $('.list-data .item').eq(0).show()
  }
  bodyHeigth = $('body').height()
  kvHeight = $('.kv').height()
  tipsHeight = $('.content .tips').height()
  $('.content').height(bodyHeigth - kvHeight)
  $('.content').css('paddingBottom', tipsHeight + 'px')
  console.log(bodyHeigth)
  console.log(kvHeight)
}

$(function () {
  init()
  $(window).resize(function () {
    bodyHeigth = $('body').height()
    kvHeight = $('.kv').height()
    tipsHeight = $('.content .tips').height()
    $('.content').height(bodyHeigth - kvHeight)
    $('.content').css('paddingBottom', tipsHeight + 'px')
    console.log(bodyHeigth)
    console.log(kvHeight)
    console.log(bodyHeigth - kvHeight)
  })
  $('.menu-list li').click(function () {
    var index = $(this).index()
    console.log(index)
    sessionStorage.setItem('slidenum', index)
    $(this).addClass('on').siblings().removeClass('on')
    $('.list-data').find('.item').hide()
    $('.list-data .item').eq(index).show()
  })

  // 视频播放
  $('.video ul li a').click(function () {
    var url = $(this).attr('data-url')
    $('#video-play').attr('src', url)
    $('.video-wrapper').show()
    document.getElementById('video-play').play()
  })
  $('.video-wrapper .close').click(function () {
    $('.video-wrapper').hide()
    document.getElementById('video-play').pause()
    // document.getElementById('video-play').currentTime = 0
  })
})
