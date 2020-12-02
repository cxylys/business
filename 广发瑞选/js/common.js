var navSwiper

function init() {
  var navSwiper = new Swiper('.banner', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
  })
}

$(function () {
  init()
})
