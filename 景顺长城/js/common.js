function init() {
  var myBannerSwiper = new Swiper('.banner', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    pagination: {
      el: '.swiper-pagination-banner',
    },
  })
}
$(function () {
  init()
})
