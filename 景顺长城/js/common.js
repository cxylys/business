function init() {
  var myBannerSwiper = new Swiper('.banner', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    pagination: {
      el: '.swiper-pagination-banner',
    },
  })
  // var myBannerSwiper = new Swiper('.ts-swiper', {
  //   direction: 'vertical', // 垂直切换选项
  //   slidesPerView: 3,
  //   // spaceBetween: '20',
  //   slidesOffsetBefore: 20,
  //   slidesOffsetAfter: 20,
  //   roundLengths: true,
  //   watchOverflow: true, //因为仅有1个slide，swiper无效
  //   // loop: true, // 循环模式选项
  // })
}
$(function () {
  init()
  // 文章解读标签
  $('.article .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).attr('data-index')
    $('.article .news').hide()
    $('.article .news-' + index).show()
  })

  // 产品标签
  $('.product .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).attr('data-index')
    $('.product .news').hide()
    $('.product .news-' + index).show()
  })

  // 短视频播放
  $('.short-btn').click(function () {
    $('.short-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
  })

  $('.short-modal .close').click(function () {
    $('.short-modal').hide()
    $('body').css('overflow', '')
  })

  // 短视频播放
  $('.short-modal ul li a').click(function () {
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
