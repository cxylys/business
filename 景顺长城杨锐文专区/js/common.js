var newsSwiper
function init() {
  var mySwiperVideo = new Swiper('.video-swiper', {
    direction: 'horizontal',
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: '2',
    spaceBetween: 20,
    loopedSlides: 4,
    slideActiveClass: 'active',
    loop: true, //开启循环
  })

  newsSwiper = new Swiper('.news-swiper', {
    initialSlide: 0,
    autoHeight: true, //高度随内容变化
    // effect: 'cube',
    on: {
      slideChange: function () {
        $('.article .tag-list .tag')
          .eq(this.activeIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      },
    },
  })
}
$(function () {
  init()
  // 文章解读标签
  $('.article .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    newsSwiper.slideTo($(this).index(), 500, false)
  })

  // 关闭视频
  $('.video-wrapper .close').click(function () {
    $('.video-wrapper').hide()
    document.getElementById('video-play').pause()
    // document.getElementById('video-play').currentTime = 0
  })
  // 产品特点视频
  $('.product-btn').click(function () {
    $('.product-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('首页', '视频集锦', '产品特点', 1)
  })
  $('.product-modal .close').click(function () {
    $('.product-modal').hide()
    $('body').css('overflow', '')
  })

  // 投资方法论视频
  $('.touzi-btn').click(function () {
    $('.touzi-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('首页', '视频集锦', '投资观点', 1)
  })
  $('.touzi-modal .close').click(function () {
    $('.touzi-modal').hide()
    $('body').css('overflow', '')
  })

  // 创意视频系列
  $('.idea-btn').click(function () {
    $('.idea-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('首页', '视频集锦', '创意视频', 1)
  })
  $('.idea-modal .close').click(function () {
    $('.idea-modal').hide()
    $('body').css('overflow', '')
  })

  //监测
  $('.content .hb-list li a').click(function () {
    var url = $(this).attr('data-url')
    if (!url) {
      return
    }
    var l1 = $(this).attr('data-level1')
    var l2 = $(this).attr('data-level2')
    var l3 = $(this).attr('data-level3')
    myListener(l1, l2, l3, 1, url)
  })

  $('.business ul li a').click(function () {
    var url = $(this).attr('data-url')
    var l1 = $(this).attr('data-level1')
    var l2 = $(this).attr('data-level2')
    var l3 = $(this).attr('data-level3')
    myListener(l1, l2, l3, 1, url)
  })

  $('.article ul li a').click(function () {
    var url = $(this).attr('data-url')
    var l1 = $(this).attr('data-level1')
    var l2 = $(this).attr('data-level2')
    var l3 = $(this).attr('data-level3')
    myListener(l1, l2, l3, 1, url)
  })

  $('.video-modal ul li a').click(function () {
    var url = $(this).attr('data-url')
    var l1 = $(this).attr('data-level1')
    var l2 = $(this).attr('data-level2')
    var l3 = $(this).attr('data-level3')
    myListener(l1, l2, l3, 1, url)
  })
})
