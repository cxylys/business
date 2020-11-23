var bodyHeigth = 0
var kvHeight = 0
function init() {
  if (sessionStorage.getItem('slidenum')) {
    var index = sessionStorage.getItem('slidenum')
    $('.menu-list li').eq(index).addClass('on')
    $('.list-data .item').eq(index).show()
  } else {
    $('.menu-list li').eq(0).addClass('on')
    $('.list-data .item').eq(0).show()
  }
  bodyHeigth = $('body').height()
  kvHeight = $('.kv').height()
  $('.content').height(bodyHeigth - kvHeight)
  console.log(bodyHeigth)
  console.log(kvHeight)
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
