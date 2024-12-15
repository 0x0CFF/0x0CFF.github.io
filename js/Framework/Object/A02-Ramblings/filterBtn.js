// 找出所有随笔的日期
var cardArray = document.getElementsByClassName("card");
var dateArray = [];
for (var i = 0; i < cardArray.length; i++) {
    var date = cardArray[i].getAttribute("date");
    dateArray.push(date);
}
// console.log("[ dateArray ] 随笔日期数组：");
// console.log(dateArray);

// 按日期对随笔进行统计
var dateCountArray = []; // 存最终数据结果
for (var i = 0; i < dateArray.length; i++) {
    // console.log("--------------------------");
    // 判断是否存在数组中
    var result = dateCountArray.some(item => {
        if (item.date == dateArray[i]) {
            // console.log(categorizeArray[i] + ' 已存在数组中');
            return true
        } else {
            // console.log(categorizeArray[i] + ' 不存在数组中');
            return false
        }
    });
    // 如果不存在数组中，则添加
    if (result == false) {
        var counter = 0;
        dateArray.forEach((elem) => {
            if(dateArray[i] === elem){
                counter++;
            }
        });
        var obj = {'date': dateArray[i], 'total': counter};
        // console.log(dateArray[i] + ' 不存在数组中，已添加到数组中');
        dateCountArray.push(obj);
    } else {
        // console.log(dateArray[i] + ' 已存在数组中');
    }
}
// console.log("[ dateCountArray ] 按日期对随笔进行统计：");
// console.log(dateCountArray);


// 按年份对随笔进行统计
let yearCountArray = [];
for (var i = 0; i < dateCountArray.length; i++) {
    // 判断是否存在数组中
    var result = yearCountArray.some(item => {
        if (item.year == new Date(dateCountArray[i].date).getFullYear()) {
            // console.log(categorizeArray[i] + ' 已存在数组中');
            return true
        } else {
            // console.log(categorizeArray[i] + ' 不存在数组中');
            return false
        }
    });
    // 如果不存在数组中，则添加
    if (result == false) {
        year = new Date(dateCountArray[i].date).getFullYear();

        let counter = 0;
        for (let u = 0; u < dateCountArray.length; u++) {
          if (new Date(dateCountArray[u].date).getFullYear() == year) {
             counter += dateCountArray[u].total;
          }
        }

        var obj = {'year': year, 'total': counter};
        yearCountArray.push(obj);
    }
}
// console.log("[ yearCountArray ] 按年份对随笔进行统计：");
// console.log(yearCountArray);


// 按年份+月份对随笔进行统计
let yearAndMonthCountArray = [];
for (var i = 0; i < dateCountArray.length; i++) {
    // 判断是否存在数组中
    var result = yearAndMonthCountArray.some(item => {
        if (item.year == new Date(dateCountArray[i].date).getFullYear() && item.month == new Date(dateCountArray[i].date).getMonth() + 1) {
            // console.log(categorizeArray[i] + ' 已存在数组中');
            return true
        } else {
            // console.log(categorizeArray[i] + ' 不存在数组中');
            return false
        }
    });
    // 如果不存在数组中，则添加
    if (result == false) {
        year = new Date(dateCountArray[i].date).getFullYear();
        month = new Date(dateCountArray[i].date).getMonth() + 1;

        let counter = 0;
        for (let u = 0; u < dateCountArray.length; u++) {
          if (new Date(dateCountArray[u].date).getFullYear() == year && new Date(dateCountArray[u].date).getMonth() + 1 == month) {
             counter += dateCountArray[u].total;
          }
        }

        var obj = {'year': year, 'month': month, 'total': counter};
        yearAndMonthCountArray.push(obj);
    }
}
// console.log("[ yearAndMonthCountArray ] 按年份+月份对随笔进行统计：");
// console.log(yearAndMonthCountArray);


// 对最后一年所有月份的随笔进行统计
let lastYearCountArray = [];
for (var i = 0; i < yearAndMonthCountArray.length; i++) {
    if (yearAndMonthCountArray[i].year == yearAndMonthCountArray[0].year) {
        var obj = {'month': yearAndMonthCountArray[i].month, 'total': yearAndMonthCountArray[i].total};
        // console.log(obj);
        lastYearCountArray.push(obj);
    }
}
// console.log("[ lastYearCountArray ] 对最后一年所有月份的随笔进行统计：");
// console.log(lastYearCountArray);


// 初始化页面

// 对按钮进行初始化，展示所有年份选项及最后一年所有月份选项
yearFilterMenu = document.getElementsByClassName("filterMenu year")[0];
for (var i = 0; i < yearCountArray.length; i++) {
    yearFilterMenu.innerHTML += `
    <div class="option">
        <div class="prefix">
            <svg weight="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            <p>${yearCountArray[i].year}</p>
        </div>
        <div class="amount">
            共 ${yearCountArray[i].total} 篇
        </div>
    </div>
    `
}
monthFilterMenu = document.getElementsByClassName("filterMenu month")[0];
for (var i = 0; i < lastYearCountArray.length; i++) {
    monthFilterMenu.innerHTML += `
    <div class="option">
        <div class="prefix">
            <svg weight="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            <p>${lastYearCountArray[i].month}</p>
        </div>
        <div class="amount">
            共 ${lastYearCountArray[i].total} 篇
        </div>
    </div>
    `
}

// 展示出最后日期的日历
let lastYear = yearAndMonthCountArray[0].year
let lastMonth = yearAndMonthCountArray[0].month
showtime(lastYear, lastMonth);
// 日历标题
document.getElementsByClassName("calendar")[0].getElementsByClassName("label")[0].innerHTML += `
<h4>${lastYear} 年 ${lastMonth} 月</h4>
`
// 年份按钮文字
document.getElementsByClassName("filterBtn year")[0].getElementsByClassName("textLabel")[0].innerHTML += `
${lastYear}
`
// 月份按钮文字
document.getElementsByClassName("filterBtn month")[0].getElementsByClassName("textLabel")[0].innerHTML += `
${lastMonth}
`
// 展示出最后月份的随笔
var cardArray = document.getElementsByClassName("card");
for (var i = 0; i < cardArray.length; i++) {
    let cardDate = new Date(cardArray[i].getAttribute("date"));
    // console.log(`cardDate: ${cardDate}`);

    if (cardDate.getFullYear() == lastYear && cardDate.getMonth() + 1 == lastMonth) {
        cardArray[i].style.display = "flex";
        cardArray[i].nextElementSibling.style.display = "inline";
    }
}
// 执行图片惰性加载
loadlazyImage();
collapseCard();



// 选项点击时的动作
yearOptionArray = yearFilterMenu.getElementsByClassName("option");
for (var i = 0; i < yearOptionArray.length; i++) {
    yearOptionArray[i].onclick = function() {
        var yearText = this.getElementsByClassName("prefix")[0].getElementsByTagName("p")[0].innerText;
        // console.log(`yearText: ${yearText}`);

        // 修改年按钮的文字
        document.getElementsByClassName("filterBtn")[0].getElementsByClassName("button")[0].getElementsByClassName("textLabel")[0].innerText = yearText

        // 修改月份下拉菜单
        monthFilterMenu = document.getElementsByClassName("filterMenu month")[0];
        monthFilterMenu.innerHTML = ``;
        
        let monthCountArray = [];
        for (var i = 0; i < yearAndMonthCountArray.length; i++) {
            if (yearAndMonthCountArray[i].year == parseInt(yearText)) {
                var obj = {'month': yearAndMonthCountArray[i].month, 'total': yearAndMonthCountArray[i].total};
                console.log(obj);
                monthCountArray.push(obj);
            }
        }
        // console.log(monthCountArray);
        for (var u = 0; u < monthCountArray.length; u++) {
            monthFilterMenu.innerHTML += `
                <div class="option">
                    <div class="prefix">
                        <svg weight="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                        </svg>
                        <p>${monthCountArray[u].month}</p>
                    </div>
                    <div class="amount">
                        共 ${monthCountArray[u].total} 篇
                    </div>
                </div>
            `
        }
        // 修改月按钮的文字
        var monthText = monthCountArray[0].month;
        // console.log(`monthText: ${monthText}`);
        document.getElementsByClassName("filterBtn month")[0].getElementsByClassName("button")[0].getElementsByClassName("textLabel")[0].innerText = monthText;

        var cardArray = document.getElementsByClassName("card");
        // 隐藏全部随笔
        for (var i = 0; i < cardArray.length; i++) {
            cardArray[i].style.display = "none";
            cardArray[i].nextElementSibling.style.display = "none";
        }
        // 显示出对应年份 + 最后月份的随笔
        for (var i = 0; i < cardArray.length; i++) {
            let cardDate = new Date(cardArray[i].getAttribute("date"));
            if (cardDate.getFullYear().toString() == yearText && (cardDate.getMonth() + 1).toString() == monthText) {
                cardArray[i].style.display = "flex";
                cardArray[i].nextElementSibling.style.display = "inline";
            }
        }

        monthOptionOnclick();

        // 隐藏菜单和遮罩
        document.getElementsByClassName("filterMenu")[0].style.visibility = "hidden";
        document.getElementsByClassName("filterMenu")[0].style.opacity = 0;
        document.getElementsByClassName("mask")[0].style.display = "none";

        // 修改日历标题
        document.getElementsByClassName("calendar")[0].getElementsByClassName("label")[0].innerHTML = `
            <h4>${yearText} 年 ${monthText} 月</h4>
        `
        // 修改日历视图
        showtime(parseInt(yearText), parseInt(monthText));
        // 执行图片惰性加载
        loadlazyImage();
        collapseCard();
    }
}


monthOptionOnclick();


function monthOptionOnclick() {
    // 选项点击时的动作
    monthOptionArray = monthFilterMenu.getElementsByClassName("option");
    for (var i = 0; i < monthOptionArray.length; i++) {
        monthOptionArray[i].onclick = function() {
            var yearText = document.getElementsByClassName("filterBtn")[0].getElementsByClassName("button")[0].getElementsByClassName("textLabel")[0].innerText;
            var monthText = this.getElementsByClassName("prefix")[0].getElementsByTagName("p")[0].innerText;
            // console.log(`yearText: ${yearText}`);
            // console.log(`monthText: ${monthText}`);
            // 修改按钮的文字
            document.getElementsByClassName("filterBtn")[1].getElementsByClassName("button")[0].getElementsByClassName("textLabel")[0].innerText = monthText

            var cardArray = document.getElementsByClassName("card");
            // 隐藏全部文章
            for (var i = 0; i < cardArray.length; i++) {
                cardArray[i].style.display = "none";
                cardArray[i].nextElementSibling.style.display = "none";
            }
            // 显示出对应年份 + 对应月份的随笔
            for (var i = 0; i < cardArray.length; i++) {
                let cardDate = new Date(cardArray[i].getAttribute("date"));

                if (cardDate.getFullYear().toString() == yearText && (cardDate.getMonth() + 1).toString() == monthText) {
                    cardArray[i].style.display = "flex";
                    cardArray[i].nextElementSibling.style.display = "inline";
                }
            }
            // 隐藏菜单和遮罩
            // document.getElementsByClassName("filterMenu")[1].style.display = "none";
            document.getElementsByClassName("filterMenu month")[0].style.visibility = "hidden";
            document.getElementsByClassName("filterMenu month")[0].style.opacity = 0;
            document.getElementsByClassName("mask")[0].style.display = "none";
            // 修改日历
            document.getElementsByClassName("calendar")[0].getElementsByClassName("label")[0].innerHTML = `
                <h4>${yearText} 年 ${monthText} 月</h4>
            `
            showtime(parseInt(yearText), parseInt(monthText));
            // 执行图片惰性加载
            loadlazyImage();
            collapseCard();
        }
    }
}




// 点击按钮展示出菜单
document.getElementsByClassName("filterBtn year")[0].onclick = function() {
    document.getElementsByClassName("mask")[0].style.display = "inline";
    // document.getElementsByClassName("filterMenu year")[0].style.display = "flex";
    document.getElementsByClassName("filterMenu year")[0].style.visibility = "visible";
    document.getElementsByClassName("filterMenu year")[0].style.opacity = 1;


};
// 点击按钮展示出菜单
document.getElementsByClassName("filterBtn month")[0].onclick = function() {
    document.getElementsByClassName("mask")[0].style.display = "inline";
    // document.getElementsByClassName("filterMenu month")[0].style.display = "flex";
    document.getElementsByClassName("filterMenu month")[0].style.visibility = "visible";
    document.getElementsByClassName("filterMenu month")[0].style.opacity = 1;

};

// 点击 mask 隐藏菜单
document.getElementsByClassName("mask")[0].onclick = function() {
    document.getElementsByClassName("filterMenu year")[0].style.visibility = "hidden";
    document.getElementsByClassName("filterMenu year")[0].style.opacity = 0;
    // document.getElementsByClassName("filterMenu year")[0].style.display = "none";

    document.getElementsByClassName("filterMenu month")[0].style.visibility = "hidden";
    document.getElementsByClassName("filterMenu month")[0].style.opacity = 0;
    // document.getElementsByClassName("filterMenu month")[0].style.display = "none";
    document.getElementsByClassName("mask")[0].style.display = "none";
};

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

// showtime(2023, 2);
// 根据日期展示出日历
function showtime(year, month){
    var table = document.getElementById("table");
    // var year=document.getElementById("year").value;
    // var month=document.getElementById("month").value;
    var flag = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    var day_count = [31,flag?29:28,31,30,31,30,31,31,30,31,30,31];
    var dt = new Date();
    dt.setFullYear(year);
    dt.setMonth(month-1);//month:0--11
    dt.setDate(1);
    var week = dt.getDay();//求得该月1号为周几
    var cells = day_count[month-1]+week;//总共需打印单元格数
    var row = Math.ceil(cells/7);//计算打印的行数
    var count = 0;
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }

    for(var i=1; i<=row; i++) {//打印本月日历
        var tr = table.insertRow(i);

        let res = Array.from(new Set(dateArray)); //去重
        // console.log(`res: ${res}`);

        for(var j=0; j<7; j++) {
            var cell = tr.insertCell(j);
            count++;
            if(count <= week || count > cells) {
                cell.innerHTML="";
            } else {
                cell.innerHTML = `<p>${count-week}</p>`;
                // console.log("加上灰点");
                cell.innerHTML += `
                    <svg weight="16px" height="16px" color="#2b2c32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                    </svg>
                `
                for (var u=0; u<res.length; u++) {
                    if (new Date(res[u]).getFullYear() == parseInt(year) && (new Date(res[u]).getMonth() + 1) == parseInt(month)) {
                        if (new Date(res[u]).getDate() == (count-week)) {
                            // console.log("加上绿点");
                            cell.innerHTML = `<p>${count-week}</p>`;
                            cell.innerHTML += `
                                <svg weight="16px" height="16px" color="#42d490" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                                </svg>
                            `
                        }
                    }
                }
            }
        }
    }
}
