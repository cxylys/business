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
  // 新基来袭视频
  $('.xinji-btn').click(function () {
    $('.xinji-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('产品专区', '视频集锦', '新基来袭', 1)
  })
  $('.xinji-modal .close').click(function () {
    $('.xinji-modal').hide()
    $('body').css('overflow', '')
  })
  $('.xinji-modal ul li a').click(function () {
    var url = $(this).attr('data-url')
    var level1 = $(this).attr('data-parent')
    var level2 = $(this).attr('data-child')
    var name = $(this).attr('data-name')
    myListener(level1, level2, name, 1)
    if (url) {
      $('#video-play').attr('src', url)
      $('.video-wrapper').show()
      document.getElementById('video-play').play()
    }
  })

  // 投资方法论视频
  $('.touzi-btn').click(function () {
    $('.touzi-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('詹成专区', '视频集锦', '投资方法论', 1)
  })
  $('.touzi-modal .close').click(function () {
    $('.touzi-modal').hide()
    $('body').css('overflow', '')
  })
  $('.touzi-modal ul li a').click(function () {
    var url = $(this).attr('data-url')
    var level1 = $(this).attr('data-parent')
    var level2 = $(this).attr('data-child')
    var name = $(this).attr('data-name')
    var link = $(this).attr('data-link')
    myListener(level1, level2, name, 1)
    if (url) {
      if (link) {
        location.href = url
      } else {
        $('#video-play').attr('src', url)
        $('.video-wrapper').show()
        document.getElementById('video-play').play()
      }
    }
  })

  // 理念观点视频
  $('.linian-btn').click(function () {
    $('.linian-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('詹成专区', '视频集锦', '理念观点', 1)
  })
  $('.linian-modal .close').click(function () {
    $('.linian-modal').hide()
    $('body').css('overflow', '')
  })
  $('.linian-modal ul li a').click(function () {
    var url = $(this).attr('data-url')
    var level1 = $(this).attr('data-parent')
    var level2 = $(this).attr('data-child')
    var name = $(this).attr('data-name')
    var link = $(this).attr('data-link')
    myListener(level1, level2, name, 1)
    if (url) {
      if (link) {
        location.href = url
      } else {
        $('#video-play').attr('src', url)
        $('.video-wrapper').show()
        document.getElementById('video-play').play()
      }
    }
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
})
