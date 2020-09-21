function init() {
  var video1 = new Swiper('.video-1', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    pagination: {
      el: '.swiper-pagination-video-1',
      clickable: true,
      // type: 'custom',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
    },
  })
  var video3 = new Swiper('.video-3-3', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    pagination: {
      el: '.swiper-pagination-video-3',
      clickable: true,
      // type: 'custom',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
    },
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },
  })
  var video4 = new Swiper('.video-4-4', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    pagination: {
      el: '.swiper-pagination-video-4',
      clickable: true,
      // type: 'custom',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
    },
    navigation: {
      nextEl: '.swiper-button-next-4',
      prevEl: '.swiper-button-prev-4',
    },
  })
  $('.swiper-button-prev-4').click(function () {
    video4.slidePrev()
  })
  $('.swiper-button-next-4').click(function () {
    video4.slideNext()
  })
  $('.swiper-button-prev-3').click(function () {
    video3.slidePrev()
  })
  $('.swiper-button-next-3').click(function () {
    video3.slideNext()
  })
}

$(function () {
  init()
  // $('.top-video .video .btn').click(function () {
  //   // var url = $(this).attr('data-url')
  //   $('#video-play').attr('src', 'images/video_1.mp4')
  //   $('.video-wrapper').show()
  //   document.getElementById('video-play').play()
  // })
  // $('.video-wrapper .close').click(function () {
  //   $('.video-wrapper').hide()
  //   document.getElementById('video-play').pause()
  //   document.getElementById('video-play').currentTime = 0
  // })
  //顶部导航
  $('.kv .buttons a').click(function () {
    var index = $(this).attr('data-index')
    if (index != undefined) {
      $('html,body').animate({
        scrollTop: $('#nav-' + index).offset().top - 30,
      })
    }
  })
  $('.top-video .video .btn').click(function () {
    document.getElementById('video-play-top').play()
    $(this).hide()
  })
  // 活动规则
  $('.kv .buttons .comm-desc-btn').click(function () {
    $('.comm-desc-modal').show()
    $('body').css({ overflow: 'hidden' })
  })
  //关闭 活动规则
  $('.comm-desc-modal .comm-rule-box .close-btn').click(function () {
    $('.comm-desc-modal').hide()
    $('body').css({ overflow: '' })
  })
})
