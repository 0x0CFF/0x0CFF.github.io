var cardAarry = document.getElementsByClassName("card");

var description_width = cardAarry[0].getElementsByClassName('description')[0].clientWidth;
console.log(description_width);
for (i = 0; i < cardAarry.length; i++) { 
    // 改变宽度
    description = cardAarry[i].getElementsByClassName('description');
    description[0].getElementsByTagName("p")[0].style.width = description_width + "px";
    description[0].style.width = description_width + "px";
}