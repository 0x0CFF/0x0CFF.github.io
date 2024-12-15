// 读取 cookie，如果 cookie 不存在则不处理，如果存在则设置菜单栏的收缩
var menuView = document.getElementsByClassName("menuView")[0];
var menu = menuView.getElementsByClassName("menu");

for (var i = 0; i < menu.length; i++) {
    menuState = `${menu[i].className.split(" ")[1]}MenuState`;
    switch (Cookies.get(menuState)) {
        case '0':
            document.getElementsByClassName(menu[i].className)[0].getElementsByClassName("options")[0].style.height = '0px';
            break;
        case '1':
            document.getElementsByClassName(menu[i].className)[0].getElementsByClassName("options")[0].style.height = 'auto';
            break;
        default:
            console.log("无 cookie");
    }
}



// 菜单栏点击时，反转收缩状态,记录 cookie
function shrinkOptions(elmnt) {
    var options = elmnt.nextElementSibling;
    var optionsHeight = options.clientHeight;
    options.style.height = options.offsetHeight===0 ? 'auto' : '0px';
    // 读取每一个菜单的高度，设置 cookie
    var menuView = document.getElementsByClassName("menuView")[0];
    var menu = menuView.getElementsByClassName("menu");

    for (var i = 0; i < menu.length; i++) {
        // 根据菜单高度设置 cookie
        if (menu[i].getElementsByClassName("options")[0].offsetHeight == 0) {
            menuState = `${menu[i].className.split(" ")[1]}MenuState`;
            // console.log(menuState);
            Cookies.set(menuState, '0', { sameSite: 'strict' });
        } else {
            menuState = `${menu[i].className.split(" ")[1]}MenuState`;
            // console.log(menuState);
            Cookies.set(menuState, '1', { sameSite: 'strict' });
        }
    }
    // console.log('creationMenuState: ' + Cookies.get('creationMenuState'));
    // console.log('otherMenuState: ' + Cookies.get('otherMenuState'));
}
