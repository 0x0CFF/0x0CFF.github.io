// 处理复选框前面的圆点
function checkBox() {
    $("li").find("input").parent().parent().css({"padding":"12px"})
    $("li").find("input[checked]").parent().css({"text-decoration":"line-through", "color":"#7e8087"})
    $("li").find("input").parent().css({"display":"flex", "gap":"12px", "list-style-type":"none"})
}

// 处理 Markdown 表格
function code() {
    // 计算并设置表格宽度
    var width = $(".markdown").width();
    $("pre").css({"width":width+"px"});
    // 添加滚动条
    $("pre").css("overflow-x","scroll");
    // 当浏览器大小变化时，重新计算并设置表格宽度
    // $(window).resize(function(){
    //     var width = $(".markdown").width();
    //     $("pre").css({"width":width+"px"});
    // });
}

// 修改代码块的背景
$("pre").css({"background-color":"#32333b", "color": "rgba(255, 255, 255, 1)"})


checkBox();
// code();



//	获取所有的 table 表格，添加外层 div
var postContent = document.getElementsByClassName("postContent")[0];
let tables = postContent.getElementsByTagName('table');
//	如果table存在于当前界面就执行接下的操作
if (tables) {
    for (var i = 0; i < tables.length; i++) {
        // console.log(tables[i]);
        //	创建一个 div
        let tableBox = document.createElement('div');
        //	给 div 添加 class 名，className 兼容性较好
        tableBox.className = 'tableBox';
        tableBox.id = 'tableBox';
        tables[i].parentNode.insertBefore(tableBox, tables[i]);
        tableBox.appendChild(tables[i]);

        //	将新建的 div 替代原先的 table
        // tables[i].parentNode.replaceChild(tableBox, tables[i]);
        //	给新 div 添加子节点 table
        // tableBox.appendChild(tables[i]);
    }
}
// 添加样式
// var tableBox = document.getElementsByClassName("tableBox")[0];
// tableBox.style.width = window.getComputedStyle(postContent).width;
// tr = tableBox.getElementsByClassName("tr")[0];
// tr.style.width = window.getComputedStyle(postContent).width;

// 修改 代码块 的宽度
const changePreWidth = () => {
    var postContent = document.getElementsByClassName("postContent")[0];
    var pres = document.getElementsByTagName("pre");
    if (pres) {
        for (var i = 0; i < pres.length; i++) {
            pres[i].style.maxWidth = window.getComputedStyle(postContent).width;
        }
    }
    var tableBoxs = document.getElementsByClassName("tableBox");
    if (tableBoxs) {
        for (var i = 0; i < tableBoxs.length; i++) {
            tableBoxs[i].style.maxWidth = window.getComputedStyle(postContent).width;
            tableBoxs[i].getElementsByTagName("table")[0].style.minWidth = window.getComputedStyle(postContent).width;
        }
    }
};


changePreWidth();
// window.addEventListener('resize', changePreWidth);
