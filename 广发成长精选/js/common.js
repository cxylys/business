$(function () {
  //顶部导航
  $('.contents ul li').click(function () {
    var index = $(this).attr('data-index')
    if (index != undefined) {
      $('html,body').animate({
        scrollTop: $('#nav-' + index).offset().top - 30,
      })
    }
  })
})
