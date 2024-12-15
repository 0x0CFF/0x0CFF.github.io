
// 网页加载时运行
// navbar 由透明变为不透明
$(function(){
    navHeader();
    $(window).scroll(function () {
        navHeader();
    })

    function navHeader() {
        if ($(window).scrollTop() > 0) {
            $(".navbar").css("background-color" , "rgb(50, 51, 59)");
            $(".navbar").css("box-shadow" , "0px 32px 64px rgba(29, 30, 32, 0.8)");
        } else {
            $(".navbar").css("background-color" , "transparent");
            $(".navbar").css("box-shadow" , "0px 32px 64px transparent");
        }
    }
})
