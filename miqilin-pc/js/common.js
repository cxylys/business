function init() {
  var video1 = new Swiper('.jt-swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    pagination: {
      el: '.swiper-pagination-video-1',
      clickable: true,
      // type: 'custom',
      bulletClass: 'my-bullet', //需设置.my-bullet样式
      bulletActiveClass: 'my-bullet-active',
    },
  })
  var video3 = new Swiper('.tx-swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 50,
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
  $('.swiper-button-prev-1').click(function () {
    video1.slidePrev()
  })
  $('.swiper-button-next-1').click(function () {
    video1.slideNext()
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
      pagesize: 8,
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
          if (i % 3 === 0 && i !== 0) {
            elms +=
              '<li style="margin-right:0"><div class="work-img"><img src=' +
              item.pic +
              ' /></div><div class="work-desc"><h4>' +
              item.name +
              '</h4><div class="author"><span class="name">' +
              item.author +
              '</span><span class="number">' +
              item.number +
              '</span></div><div class="actions"><div class="zan-num">' +
              item.zan_count +
              '</div><a class="zan-btn" data-id=' +
              item.id +
              '>点赞</a></div></div></li>'
          } else {
            elms +=
              '<li><div class="work-img"><img src=' +
              item.pic +
              ' /></div><div class="work-desc"><h4>' +
              item.name +
              '</h4><div class="author"><span class="name">' +
              item.author +
              '</span><span class="number">' +
              item.number +
              '</span></div><div class="actions"><div class="zan-num">' +
              item.zan_count +
              '</div><a class="zan-btn" data-id=' +
              item.id +
              '>点赞</a></div></div></li>'
          }
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
        scrollTop: $('#nav-' + index).offset().top - 200,
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
    var _this = $(this)
    var numDom = $(this).parent().find('.zan-num')
    if (!isZan) {
      alert('今日点赞次数已用完')
      return
    }
    $.ajax({
      type: 'post',
      async: false,
      url:
        '//shyuming.com.cn:8001/rearend/action/index.php?m=home&c=index&a=doZan',
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

  // 视频点播
  $('.aq-video .video-list ul li a').click(function () {
    var url = $(this).attr('data-url')
    var text = $(this).attr('data-text')
    $('.aq-video .video video').attr('src', url)
    $('.aq-video .video video')[0].play()
  })

  $('.pb-result-btn').click(function () {
    $('.pb-result').show()
  })

  $('.pb-result .close-btn').click(function () {
    $('.pb-result').hide()
  })

  $('.pb-rule-btn').click(function () {
    $('.pb-rule-modal').show()
  })
  $('.pb-rule-modal .close-btn').click(function () {
    $('.pb-rule-modal').hide()
  })
})
