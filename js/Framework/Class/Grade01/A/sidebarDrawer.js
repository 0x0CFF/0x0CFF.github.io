// 菜单栏抽屉，从左侧拉出收入

function showSidebarDrawer() {
    sidebarDrawerBackdrop = document.getElementsByClassName("sidebarDrawerBackdrop")[0];
    sidebarDrawerBackdrop.style.visibility = "visible";
    sidebarDrawerBackdrop.style.opacity = 1;
    sidebarDrawer = document.getElementsByClassName("sidebar")[0];
    sidebarDrawer.style.left = 0;
}
function hideSidebarDrawer() {
    sidebarDrawerBackdrop = document.getElementsByClassName("sidebarDrawerBackdrop")[0];
    sidebarDrawerBackdrop.style.visibility = "hidden";
    sidebarDrawerBackdrop.style.opacity = 0;
    sidebarDrawer = document.getElementsByClassName("sidebar")[0];
    sidebarDrawer.style.left = "-288px";
}
