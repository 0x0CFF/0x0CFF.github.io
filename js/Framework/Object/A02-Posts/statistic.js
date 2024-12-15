// 找出所有的分类
var cardAarry = document.getElementsByClassName("card");
categorizeAarry = [];
colorAarry = [];
for (var i = 0; i < cardAarry.length; i++) {
    var categorize = cardAarry[i].getAttribute("categorize");
    var color = cardAarry[i].getAttribute("color");
    categorizeAarry.push(categorize);
    colorAarry.push(color);
    // if (categorizeAarry.includes(categorize) == false) {
    //     categorizeAarry.push(categorize);
    // }
}
// console.log(categorizeAarry);
// console.log(colorAarry);

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
        var obj = {'categorize': categorizeAarry[i], 'total': count, 'color': colorAarry[i]};
        // console.log(categorizeAarry[i] + ' 不存在数组中');
        // console.log(categorizeAarry[i] + ' 已添加到数组中');
        countAarry.push(obj);
    } else {
        // console.log(categorizeAarry[i] + ' 已存在数组中');
    }
}

// 根据统计数量进行排序
function sortTotal(a,b) {
    return b.total - a.total
}
countAarry.sort(sortTotal);
// console.log(countAarry);


// 添加百分比条目
statistic = document.getElementsByClassName("statistic")[0];
progress = statistic.getElementsByClassName("progress")[0];
categorizeList = statistic.getElementsByClassName("categorizeList")[0];
for (var i = 0; i < countAarry.length; i++) {
    // 计算百分百
    percentage = ((countAarry[i].total / cardAarry.length)*100).toFixed(1) + '%'
    // console.log(percentage);
    // 添加百分比条
    progress.innerHTML += `
        <div class="progressItem" style="width: ${percentage}; background-color: ${countAarry[i].color};"></div>
    `

    // 添加分类列表
    categorizeList.innerHTML += `
        <li>
            <svg weight="16px" height="16px" color="${countAarry[i].color}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-6 h-6">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
            <span>${countAarry[i].categorize}</span>
            <span>${percentage}</span>
        </li>
    `

}
