
var menuView = document.getElementsByClassName("menuView")[0];
var option = menuView.getElementsByClassName("option");
var contentAmount = 0;
for (var i = 0; i < option.length; i++) {
    if (option[i].getAttribute("pagetotal")) {
        contentAmount += Number(option[i].getAttribute("pagetotal"));
    }
}
// console.log(contentAmount);

dataView = document.getElementsByClassName("dataView")[0];
contents = dataView.getElementsByClassName("contents")[0];
contents.getElementsByClassName("data")[0].innerHTML = contentAmount;
