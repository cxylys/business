$(function () {
  $('.video-wrapper .close').click(function () {
    $('.video-wrapper').hide()
    $('body').css('overflow', '')
    document.getElementById('video-play').pause()
    // document.getElementById('video-play').currentTime = 0
  })
})
