// 目录栏抽屉
function showCatalogDrawer() {
    catalogDrawerBackdrop = document.getElementsByClassName("catalogDrawerBackdrop")[0];
    catalogDrawerBackdrop.style.visibility = "visible";
    catalogDrawerBackdrop.style.opacity = 1;
    catalogDrawer = document.getElementsByClassName("stickybar")[0];
    catalogDrawer.style.right = 0;
}
function hideCatalogDrawer() {
    catalogDrawerBackdrop = document.getElementsByClassName("catalogDrawerBackdrop")[0];
    catalogDrawerBackdrop.style.visibility = "hidden";
    catalogDrawerBackdrop.style.opacity = 0;
    catalogDrawer = document.getElementsByClassName("stickybar")[0];
    catalogDrawer.style.right = "-300px";
}
