// 第一次需要先加载一次
loadlazyImage();
// console.log("加载");
// 窗口滚动时执行
$(window).scroll(loadlazyImage);

function loadlazyImage() {
    // 卡片里的图片
    cardAarry = document.getElementsByClassName("card");
    for (var i = 0; i < cardAarry.length; i++) {
        if (cardAarry[i].style.display !== "none") {
            lazyImageAarry = cardAarry[i].getElementsByClassName("lazyImage");
            for (var u = 0; u < lazyImageAarry.length; u++) {
                const bound = lazyImageAarry[u].getBoundingClientRect(); // 获取位置相关参数信息
                const clientHeight = $(window).height(); // 可视区高度
                if(bound.top <= clientHeight + 100) {   // 这里有个 +100 是为了提前加载
                    dataSrc = lazyImageAarry[u].getAttribute('data-src');
                    // console.log(dataSrc);
                    lazyImageAarry[u].setAttribute('src', dataSrc);
                }
            }
        }
    }
    // banner 里的图片
    bannerAarry = document.getElementsByClassName("banner");
    for (var i = 0; i < bannerAarry.length; i++) {
        if (bannerAarry[i].style.display !== "none") {
            lazyImageAarry = bannerAarry[i].getElementsByClassName("lazyImage");
            for (var u = 0; u < lazyImageAarry.length; u++) {
                const bound = lazyImageAarry[u].getBoundingClientRect(); // 获取位置相关参数信息
                const clientHeight = $(window).height(); // 可视区高度
                if(bound.top <= clientHeight + 100) {   // 这里有个 +100 是为了提前加载
                    dataSrc = lazyImageAarry[u].getAttribute('data-src');
                    // console.log(dataSrc);
                    lazyImageAarry[u].setAttribute('src', dataSrc);
                }
            }
        }
    }
    // $.each($('.card'), (index,item) => {
    //     if ($(item).css("display") !== "none") {
    //         $(item).find('.lazyImage').each(function(i){
    //             const bound = this.getBoundingClientRect(); // 获取位置相关参数信息
    //             const clientHeight = $(window).height(); // 可视区高度
    //             if(bound.top <= clientHeight + 100) {   // 这里有个 +100 是为了提前加载
    //                 this.attr('src', this.attr('data-src'));
    //             }
    //         });
    //
    //     }
    // }

    // $.each($('.lazyImage'), (index,item) => {
    //     const bound = item.getBoundingClientRect(); // 获取位置相关参数信息
    //     const clientHeight = $(window).height(); // 可视区高度
    //     if(bound.top <= clientHeight + 100) {   // 这里有个 +100 是为了提前加载
    //         $(item).attr('src', $(item).attr('data-src'));
    //     }
    // });
    // console.log('图片惰性加载器完成初始化');
}
