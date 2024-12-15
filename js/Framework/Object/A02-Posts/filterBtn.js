// 找出所有的分类
var cardAarry = document.getElementsByClassName("card");
categorizeAarry = [];
for (var i = 0; i < cardAarry.length; i++) {
    var categorize = cardAarry[i].getAttribute("categorize");
    categorizeAarry.push(categorize);
    // if (categorizeAarry.includes(categorize) == false) {
    //     categorizeAarry.push(categorize);
    // }
}

// 计算数组中每个元素出现的次数，并封装成对象
var countAarry = []; // 存最终数据结果
for (var i = 0; i < categorizeAarry.length; i++) {
    // console.log("--------------------------");
    // 判断是否存在数组中
    var result = countAarry.some(item => {
        if (item.categorize == categorizeAarry[i]) {
            // console.log(categorizeAarry[i] + ' 已存在数组中');
            return true
        } else {
            // console.log(categorizeAarry[i] + ' 不存在数组中');
            return false
        }
    });
    // 如果不存在数组中，则添加
    if (result == false) {
        var count = 0;
        categorizeAarry.forEach((elem) => {
            if(categorizeAarry[i] === elem){
                count++;
            }
        });
        var obj = {'categorize': categorizeAarry[i], 'total': count};
        // console.log(categorizeAarry[i] + ' 不存在数组中');
        // console.log(categorizeAarry[i] + ' 已添加到数组中');
        countAarry.push(obj);
    } else {
        // console.log(categorizeAarry[i] + ' 已存在数组中');
    }
}
// console.log(countAarry);

// 根据统计数量进行排序
function sortTotal(a,b) {
    return b.total - a.total
}
countAarry.sort(sortTotal);
// console.log(countAarry);

// 添加按钮
filterMenu = document.getElementsByClassName("filterMenu")[0];
for (var i = 0; i < countAarry.length; i++) {
    filterMenu.innerHTML += `
    <div class="option">
        <div class="prefix">
            <svg weight="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            <p>${countAarry[i].categorize}</p>
        </div>
        <div class="amount">
            共 ${countAarry[i].total} 篇
        </div>
    </div>
    `
}



// 点击按钮展示出菜单
document.getElementsByClassName("filterBtn")[0].onclick = function() {
    document.getElementsByClassName("mask")[0].style.display = "inline";
    document.getElementsByClassName("filterMenu")[0].style.visibility = "visible";
    document.getElementsByClassName("filterMenu")[0].style.opacity = 1;
};

// 点击 mask 隐藏菜单
document.getElementsByClassName("mask")[0].onclick = function() {
    document.getElementsByClassName("mask")[0].style.display = "none";
    document.getElementsByClassName("filterMenu")[0].style.visibility = "hidden";
    document.getElementsByClassName("filterMenu")[0].style.opacity = 0;
};



filterMenu = document.getElementsByClassName("filterMenu")[0];
optionAarry = filterMenu.getElementsByClassName("option");


for (var i = 0; i < optionAarry.length; i++) {
    if (i == 0) {
        // 展示出全部文章
        optionAarry[i].onclick = function() {
            // 修改按钮的文字
            document.getElementsByClassName("filterBtnArray")[0].getElementsByClassName("filterBtn")[0].getElementsByClassName("textLabel")[0].innerText = "全部文章"

            cardAarry = document.getElementsByClassName("card");
            for (var i = 0; i < cardAarry.length; i++) {
                cardAarry[i].style.display = "flex";
            }
            document.getElementsByClassName("filterMenu")[0].visibility = "hidden";
            document.getElementsByClassName("filterMenu")[0].style.opacity = 0;
            document.getElementsByClassName("mask")[0].style.display = "none";
        }
    } else {
        optionAarry[i].onclick = function() {
            var categorizeText = this.getElementsByClassName("prefix")[0].getElementsByTagName("p")[0].innerText;
            // console.log(categorizeText);
            // 修改按钮的文字
            document.getElementsByClassName("filterBtn")[0].getElementsByClassName("button")[0].getElementsByClassName("textLabel")[0].innerText = categorizeText

            cardAarry = document.getElementsByClassName("card");
            // 展示出全部文章
            for (var i = 0; i < cardAarry.length; i++) {
                cardAarry[i].style.display = "flex";
            }
            // 隐藏对应卡片
            for (var i = 0; i < cardAarry.length; i++) {
                // console.log(cardAarry[i].getAttribute("categorize"));
                if (cardAarry[i].getAttribute("categorize") !== categorizeText) {
                    cardAarry[i].style.display = "none";
                }
            }
            document.getElementsByClassName("filterMenu")[0].visibility = "hidden";
            document.getElementsByClassName("filterMenu")[0].style.opacity = 0;
            document.getElementsByClassName("mask")[0].style.display = "none";
            // 执行图片惰性加载
            loadlazyImage();
        }
    }
}

// 监听页面滚动，如果页面发生滚动，则关闭按钮菜单
// window.onscroll = function() {
//     //为了保证兼容性，这里取两个值，哪个有值取哪一个
//     // scrollTop 为触发滚轮事件时滚轮的高度
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     // console.log("滚动距离" + scrollTop);
//     if (scrollTop > 0) {
//         document.getElementsByClassName("filterMenu")[0].style.display = "none";
//     }
// }
