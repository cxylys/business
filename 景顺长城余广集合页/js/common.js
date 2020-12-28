var navSwiper
function init() {
  var myBannerSwiper = new Swiper('.banner', {
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    // autoplay: true,
    // pagination: {
    //   el: '.swiper-pagination-banner',
    // },
  })

  var mySwiperVideo = new Swiper('.video-swiper', {
    direction: 'horizontal',
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: '2',
    loopedSlides: 4,
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
}
$(function () {
  init()
  // 文章解读标签
  $('.article .tag-list .tag').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    navSwiper.slideTo($(this).index(), 500, false)
  })

  // 关闭视频
  $('.video-wrapper .close').click(function () {
    $('.video-wrapper').hide()
    document.getElementById('video-play').pause()
    // document.getElementById('video-play').currentTime = 0
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
    if (url) {
      $('#video-play').attr('src', url)
      $('.video-wrapper').show()
      document.getElementById('video-play').play()
    }
  })

  // 新基来袭视频
  $('.xinji-btn').click(function () {
    $('.xinji-modal').show()
    $('body').scrollTop(0)
    $('body').css('overflow', 'hidden')
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
    if (url) {
      $('#video-play').attr('src', url)
      $('.video-wrapper').show()
      document.getElementById('video-play').play()
    }
  })
})
