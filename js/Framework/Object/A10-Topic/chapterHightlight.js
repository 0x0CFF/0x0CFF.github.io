// 侧边栏的章节标题高亮
postTitle = document.getElementsByClassName("postTitle")[0].innerText;
option = document.getElementsByClassName("menuView")[0].getElementsByClassName("option");
for (var i = 0; i < option.length; i++) {
    prefix = option[i].getElementsByClassName("prefix")[0].innerText;
    if (prefix == postTitle) {
        option[i].style.color = "#ffffff";
    }
}
