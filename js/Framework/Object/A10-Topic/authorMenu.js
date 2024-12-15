// 点击按钮展示出菜单
document.getElementsByClassName("authorBtn")[0].onclick = function() {
    document.getElementsByClassName("authorMask")[0].style.display = "inline";
    document.getElementsByClassName("authorMenu")[0].style.visibility = "visible";
    document.getElementsByClassName("authorMenu")[0].style.opacity = 1;
};

// 点击 mask 隐藏菜单
document.getElementsByClassName("authorMask")[0].onclick = function() {
    document.getElementsByClassName("authorMenu")[0].style.visibility = "hidden";
    document.getElementsByClassName("authorMask")[0].style.display = "none";
    document.getElementsByClassName("authorMenu")[0].style.opacity = 0;
};
