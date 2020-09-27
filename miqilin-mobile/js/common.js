function init() {
  var video1 = new Swiper('.video-1', {
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    // autoplay: true,
    pagination: {
      el: '.swiper-pagination-video-1',
      clickable: true,
      // type: 'custom',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
    },
    on: {
      slideChangeTransitionStart: function () {
        var myVideo1 = document.getElementById('video-play-aq-1') //视频1
        var myVideo2 = document.getElementById('video-play-aq-2') //视频2
        var myVideo3 = document.getElementById('video-play-aq-3') //视频3
        var index = this.activeIndex
        if (index == 0) {
          myVideo2.pause()
        }
        if (index == 1) {
          myVideo1.pause()
          myVideo3.pause()
        }
        if (index == 2) {
          myVideo2.pause()
        }
      },
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
var searchParams = ''
var isZan = true
var pageNo = 1
var totalPage = 0
var totalRecords = 0
function page(isInit) {
  //生成分页
  //有些参数是可选的，比如lang，若不传有默认值
  kkpager.generPageHtml(
    {
      pno: pageNo,
      //总页码
      total: totalPage,
      //总数据条数
      totalRecords: totalRecords,
      mode: 'click', //默认值是link，可选link或者click
      isShowFirstPageBtn: false, //是否显示首页按钮
      isShowLastPageBtn: false, //是否显示尾页按钮
      isShowPrePageBtn: true, //是否显示上一页按钮
      isShowNextPageBtn: true, //是否显示下一页按钮
      isShowTotalPage: false, //是否显示总页数
      isShowCurrPage: false, //是否显示当前页
      isShowTotalRecords: false, //是否显示总记录数
      isGoPage: false, //是否显示页码跳转输入框
      isWrapedPageBtns: false, //是否用span包裹住页码按钮
      isWrapedInfoTextAndGoPageBtn: false, //是否用span包裹住分页信息和跳转按钮
      click: function (n) {
        getData(n, searchParams)
        this.selectPage(n)
        return false
      },
    },
    isInit
  )
}

// type == 1 点赞列表 type == 2 评选结果
function getData(pageIndex, key, type, isSearch) {
  $('.loading-box').show()
  $.ajax({
    type: 'post',
    async: false,
    url: '//ifengad.3g.ifeng.com/miqilin/index.php/Home/Index/productionLists',
    data: {
      pagesize: 4,
      page: pageIndex,
      key: key,
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    // jsonpCallback: 'success_jsonpCallback_weichat',
    success: function (obj) {
      if (obj.state === 200) {
        var data = obj.data
        if (isSearch) {
          totalPage = data.totalPage
          pageNo = pageIndex
          page(true)
        }
        isZan = data.isZan
        var elms = ''
        for (var i = 0; i < data.lists.length; i++) {
          var item = data.lists[i]
          elms +=
            '<li><div class="work-img"><img src=' +
            item.pic +
            ' /></div><div class="work-desc"><h4>' +
            item.name +
            '</h4><div class="author"><span>' +
            item.author +
            '</span><span>' +
            item.number +
            '</span></div><div class="actions"><div class="zan-num">' +
            item.zan_count +
            '</div><div class="zan-btn" data-id=' +
            item.id +
            '>点赞</div></div></div></li>'
        }
        $('.zan-works-list ul').empty().append(elms)
        $('.loading-box').hide()
      } else {
        alert('服务器繁忙')
      }
    },
    error: function (XHR, textStatus, errorThrown) {
      console.log(XHR)
    },
  })
}

$(function () {
  init()
  getData(1, '', 1, true)
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
    $('.comm-modal').show()
    $('.comm-modal .comm-rule-box>h3').text('活动介绍')
    $('body').css({ overflow: 'hidden' })
  })
  //关闭 活动规则
  $('.comm-modal .comm-rule-box .close-btn').click(function () {
    $('.comm-modal').hide()
    $('body').css({ overflow: '' })
  })

  $('.search-box .rule-btn').click(function () {
    // $('.comm-pk-modal').show()
    // $('body').css({ overflow: 'hidden' })
    $('.comm-modal').show()
    $('.comm-modal .comm-rule-box>h3').text('评比规则')
    $('body').css({ overflow: 'hidden' })
  })
  $('.comm-pk-modal .comm-rule-box .close-btn').click(function () {
    // $('.comm-pk-modal').hide()
    // $('body').css({ overflow: '' })
    $('.comm-modal').hide()
    $('body').css({ overflow: '' })
  })

  // 结果列表 更多
  $('.works-list-result .more-btn').click(function () {
    $('.show-result-modal').show()
    $('body').css({ overflow: 'hidden' })
  })
  // 关闭 结果列表
  $('.show-result-modal .show-result-box .close-btn').click(function () {
    $('.show-result-modal').hide()
    $('body').css({ overflow: '' })
  })

  $('.zan-works-list ul').on('click', '.zan-btn', function () {
    var id = $(this).attr('data-id')
    var numDom = $(this).parent().find('.zan-num')
    if (!isZan) {
      alert('今日点赞次数已用完')
      return
    }
    $.ajax({
      type: 'post',
      async: false,
      url: '//ifengad.3g.ifeng.com/miqilin/index.php/Home/Index/doZan',
      data: {
        production_id: id,
      },
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      success: function (obj) {
        if (obj.state === 200) {
          var data = obj.data
          $(numDom).text(data.zan_count)
        } else if (obj.state == 203) {
          isZan = false
          alert('今日点赞次数已用完')
        } else {
          alert('服务器繁忙')
        }
      },
      error: function (XHR, textStatus, errorThrown) {
        console.log(XHR)
      },
    })
  })

  $('.zan-works-list ul').on('click', '.work-img', function () {
    var imgUrl = $(this).find('img').attr('src')
    $('.preview-modal .preview-box #preview-img').attr('src', imgUrl)
    $('body').css({ overflow: 'hidden' })
    $('.preview-modal').show()
  })
  // 关闭 预览
  $('.preview-modal .preview-box .close-btn').click(function () {
    $('.preview-modal').hide()
    $('body').css({ overflow: '' })
  })

  // 查询
  $('.search-btn').click(function () {
    searchParams = $('.search-input').val().trim()
    getData(1, searchParams, 1, true)
  })
})
