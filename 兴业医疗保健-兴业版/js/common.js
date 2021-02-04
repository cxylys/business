var navSwiper

function init() {
  navSwiper = new Swiper('.content-swiper', {
    direction: 'horizontal', // 水平切换选项
    autoHeight: true, //高度随内容变化
    // loop: true, // 循环模式选项
    on: {
      slideChange: function () {
        $('.actions ul li').forEach((e) => {
          var name = $(e).find('img').attr('data-icon')
          $(e)
            .find('img')
            .attr('src', 'images/' + name)
        })
        $('.actions ul li').removeClass('on')
        $('.actions ul li').eq(this.activeIndex).addClass('on')
        var onName = $('.actions ul li')
          .eq(this.activeIndex)
          .find('img')
          .attr('data-on-icon')
        $('.actions ul li')
          .eq(this.activeIndex)
          .find('img')
          .attr('src', 'images/' + onName)
      },
    },
  })
}

$(function () {
  init()
  $('.actions ul li').click(function () {
    var index = $(this).index()
    $('.actions ul li').forEach((e) => {
      var name = $(e).find('img').attr('data-icon')
      $(e)
        .find('img')
        .attr('src', 'images/' + name)
    })
    $(this).addClass('on').siblings().removeClass('on')
    var iconName = $(this).find('img').attr('data-icon')
    var iconOnName = $(this).find('img').attr('data-on-icon')
    $(this)
      .find('img')
      .attr('src', 'images/' + iconOnName)
    navSwiper.slideTo(index, 300, false)
  })
})
