var navSwiper

function init() {
  navSwiper = new Swiper('.content-swiper', {
    direction: 'horizontal', // 水平切换选项
    autoHeight: true, //高度随内容变化
    // loop: true, // 循环模式选项
  })
}

$(function () {
  init()
  $('.actions ul li').click(function () {
    var index = $(this).index()
    navSwiper.slideTo(index, 300, false)
  })
})
