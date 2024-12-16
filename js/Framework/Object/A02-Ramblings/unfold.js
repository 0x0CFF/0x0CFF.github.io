function collapseCard(){
    card = document.getElementsByClassName("card");
    for (var i = 0; i < card.length; i++) {
        postContent = card[i].getElementsByClassName("postContent")[0];
        unfold = card[i].getElementsByClassName("unfold")[0];
        if (postContent.clientHeight > 500){
            postContent.style.height = "500px";
            unfold.style.display = "flex";
        }
    }
}

function unfoldCard(obj){
    obj.parentNode.parentNode.style.height = "auto";
    obj.parentNode.style.display = "none";
}

// 窗口滚动时执行
$(window).scroll(scrollCollapseCard);

function scrollCollapseCard() {
    card = document.getElementsByClassName("card");
    for (var i = 0; i < card.length; i++) {
        postContent = card[i].getElementsByClassName("postContent")[0];
        unfold = card[i].getElementsByClassName("unfold")[0];
        if (card[i].style.display !== "none") {
            var postContentHeight = postContent.clientHeight;
            const clientHeight = $(window).height(); // 可视区高度

            const bound = postContent.getBoundingClientRect(); // 获取位置相关参数信息

            if(bound.top <= 0 && postContent.clientHeight >= 500) {

                // postContent.style.height = `${postContentHeight + bound.top}px`;
                unfold.style.display = "flex";
            }
            if(bound.top >= clientHeight) {
                if (postContent.clientHeight > 500){
                    postContent.style.height = "500px";
                    unfold.style.display = "flex";
                }
            }
        }
    }
}
