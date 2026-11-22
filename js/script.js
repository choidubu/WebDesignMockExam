$(function () {
    //메뉴
    $("nav>ul>li").mouseenter(function () {
        $(".sub, .menubg").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function () {
        $(".sub, .menubg").stop().slideUp()
    })
    //메뉴키보드
    $("nav>ul>li").focusin(function () {
        $(".sub, .menubg").stop().slideDown()
        $(this).addClass("on")
    })

    $("nav li li:last-child").focusout(function () {
        $("nav>ul>li").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function () {
        $(".sub, .menubg").stop().slideUp()
    })

    //슬라이드
    function slide() {
        $(".slide ul").animate({ left: "-100%" }, 1000, function () {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({ left: 0 })
        })
    }

    setInterval(slide, 2000)

    //탭메뉴
    var i = 0

    $(".tabmenu>li").click(function () {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        i = $(this).index()

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()

        return false
    })

    //팝업
    $(".pp").click(function () {
        $(".popup").show()
        return false
    })

    $(".button").click(function () {
        $(".popup").hide()
    })
})