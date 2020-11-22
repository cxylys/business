function init() {
  if (sessionStorage.getItem('slidenum')) {
    var index = sessionStorage.getItem('slidenum')
    $('.menu-list li').eq(index).addClass('on')
    $('.list-data .item').eq(index).show()
  } else {
    $('.menu-list li').eq(0).addClass('on')
    $('.list-data .item').eq(0).show()
  }
}

$(function () {
  init()
  $('.menu-list li').click(function () {
    var index = $(this).index()
    console.log(index)
    sessionStorage.setItem('slidenum', index)
    $(this).addClass('on').siblings().removeClass('on')
    $('.list-data').find('.item').hide()
    $('.list-data .item').eq(index).show()
  })
})
