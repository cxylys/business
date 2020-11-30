var navSwiper
var productSwiper

function init() {
  var myBannerSwiper = new Swiper('.banner', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    pagination: {
      el: '.swiper-pagination-banner',
    },
  })
  var mySwiper_1 = new Swiper('.video-swiper', {
    direction: 'horizontal',
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: '2',
    loopedSlides: 5,
    effect: 'coverflow', //切换效果
    slideActiveClass: 'active',
    coverflowEffect: {
      //以3D界面的形式显示
      rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
      stretch: '0', //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。138
      depth: 150, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
      modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
      slideShadows: true, //开启slide阴影。默认 true。
    },
    loop: true, //开启循环
    on: {},
  })

  navSwiper = new Swiper('.nav-swiper', {
    initialSlide: 1,
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
  productSwiper = new Swiper('.product-swiper', {
    initialSlide: 0,
    autoHeight: true, //高度随内容变化
    // effect: 'cube',
    on: {
      slideChange: function () {
        $('.product .tag-list .tag')
          .eq(this.activeIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      },
    },
  })

  // var videoSwiper = new Swiper('.video-swiper', {
  //   watchSlidesProgress: true,
  //   slidesPerView: 'auto',
  //   centeredSlides: true,
  //   loop: true,
  //   loopedSlides: 4,
  //   // autoplay: true,
  //   on: {
  //     progress: function (progress) {
  //       for (i = 0; i < this.slides.length; i++) {
  //         var slide = this.slides.eq(i)
  //         var slideProgress = this.slides[i].progress
  //         modify = 1
  //         if (Math.abs(slideProgress) > 1) {
  //           modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
  //         }
  //         translate = slideProgress * modify * 78 + 'px'
  //         scale = 1 - Math.abs(slideProgress) / 5
  //         zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
  //         slide.transform('translateX(' + translate + ') scale(' + scale + ')')
  //         slide.css('zIndex', zIndex)
  //         slide.css('opacity', 1)
  //         if (Math.abs(slideProgress) > 3) {
  //           slide.css('opacity', 0)
  //         }
  //       }
  //     },
  //     setTransition: function (transition) {
  //       for (var i = 0; i < this.slides.length; i++) {
  //         var slide = this.slides.eq(i)
  //         slide.transition(transition)
  //       }
  //     },
  //   },
  // })
}

$(function () {
  init()

  $('.news li a').click(function () {
    var name = $(this).attr('data-name')
    var url = $(this).attr('data-url')
    var level1 = $(this).attr('data-parent')
    var level2 = $(this).attr('data-child')
    myListener(level1, level2, name, 1, url)
  })
  // 文章解读标签
  $('.article .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    navSwiper.slideTo($(this).index(), 500, false)
  })

  // 产品标签
  $('.product .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    productSwiper.slideTo($(this).index(), 500, false)
    // var index = $(this).attr('data-index')
    // $('.product .product-list').hide()
    // $('.product .product-list-' + index).show()
  })

  // 业绩视频播放
  $('.touzi-btn').click(function () {
    $('.touzi-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
  })

  $('.touzi-modal .close').click(function () {
    $('.touzi-modal').hide()
    $('body').css('overflow', '')
  })

  // 业绩视频播放
  $('.touzi-modal ul li a').click(function () {
    var type = $(this).attr('data-type')
    if (type) {
      return
    }
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

  // 理念视频
  $('.linian-btn').click(function () {
    $('.linian-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
    myListener('视频集锦', '理念&观点', '', 1)
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
    myListener(level1, level2, name, 1)
    if (url) {
      $('#video-play').attr('src', url)
      $('.video-wrapper').show()
      document.getElementById('video-play').play()
    }
  })

  // 产品特点视频
  $('.product-btn').click(function () {
    $('.product-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
  })
  $('.product-modal .close').click(function () {
    $('.product-modal').hide()
    $('body').css('overflow', '')
  })
  $('.product-modal ul li a').click(function () {
    var url = $(this).attr('data-url')
    if (url) {
      $('#video-play').attr('src', url)
      $('.video-wrapper').show()
      document.getElementById('video-play').play()
    }
  })
})
