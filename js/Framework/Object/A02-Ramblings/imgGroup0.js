async function test(){
    // 获取到所有的 card
    var cardAarry = document.getElementsByClassName("card");

    // 遍历所有的 card
    for (var i = 0; i < cardAarry.length; i++) {
        // console.log(`-------------遍历第 ${i} 个卡组-----------------`);
        // 初始化参数
        var count = 0;
        var successImageList = [];
        var id = cardAarry[i].getAttribute('path').split('/')[2];

        // 递归
        await demo(i, cardAarry, count, successImageList).then(err => {
            // console.log('递归执行完毕，：', err);
            // 为图片卡组构造图片查看器
            newViewer(id);
        });
    }
}

async function demo(i, cardAarry, count, successImageList) {
    var path = cardAarry[i].getAttribute('path'); // 获取第 i 个卡组的地址
    // 初始化 URL
    var src = path + "assets/" + count + ".webp";
    var summary = cardAarry[i].getElementsByClassName("summary")[0];

    var id = path.split('/')[2];


    await addImageProcess(src).then(async () => {
        // console.log(`${src}：第 ${count} 张图片存在，添加到 successImageList`);
        // successImageList.push(src);

        var imgGroup = summary.getElementsByClassName("imgGroup")[0];
        if (imgGroup){
    		//元素存在的操作代码
    		// console.log("imgGroup 元素存在");
    	}else{
    		//元素不存在的操作代码
    		console.log(`imgGroup 不存在，构建 imgGroup(id: ${id})`);
            summary.innerHTML += "<div class='imgGroup' id='" + id + "'></div>";
    	}

        var imgGroup = summary.getElementsByClassName("imgGroup")[0];
        // console.log(imgGroup);
        // imgGroup.innerHTML += "<img class='image' src='" + successImageList[u] + "' alt=''>"
        imgGroup.innerHTML += "<img class='lazyImage' src='/image/loading/line.webp' data-src='" + src + "' alt=''>"
        console.log(`${src}：第 ${count} 张图片存在，添加到 imgGroup(id: ${id})`);
        // 执行图片惰性加载
        loadlazyImage();

        // 进行下一轮遍历
        count += 1;
        await demo(i, cardAarry, count, successImageList)
    }).catch((err) => {
        // console.log(`${src}：第 ${count} 张图片不存在，递归结束`);
        // console.log(successImageList)


        // var imgGroup = summary.getElementsByClassName("imgGroup")[0];
        // if (imgGroup){
        //     //元素存在的操作代码
        //     for (var u = 0; u < successImageList.length; u++) {
        //         // imgGroup.innerHTML += "<img class='image' src='" + successImageList[u] + "' alt=''>"
        //         imgGroup.innerHTML += "<img class='lazyImage' src='/image/loading/line.webp' data-src='" + successImageList[u] + "' alt=''>"
        //     }
        //     // 执行图片惰性加载
        //     loadImage();
        //     // 为图片卡组构造图片查看器
        //     console.log(id);
        //     newViewer(id);
        // }
    })

    function addImageProcess(src) {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(src)
            img.onerror = () => reject("加载失败")
            img.src = src;
        })
    }
}


// 插件：图片查看器
async function newViewer(id){
    new Viewer(document.getElementById(id),{
        // 配置选项
        url: 'data-src',
        navbar: false,
        title: false,
        rotatable: false,
        fullscreen: false,
        toolbar: {
            zoomIn: { show: true, size: "large" },
            zoomOut: { show: true, size: "large"  },
            reset: { show: true, size: "large"  },
            prev: { show: true, size: "large"  },
            next: { show: true, size: "large"  },
        }
    });
    // console.log(`图片查看器加载完成(id: ${id})`);
}


test();
