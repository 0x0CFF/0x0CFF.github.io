// 获取到所有的 card
var cardAarry = document.getElementsByClassName("card");

// 遍历所有的 card
for (var i = 0; i < cardAarry.length; i++) {
  // console.log(`-------------遍历第 ${i} 个卡组-----------------`);
  // 初始化参数
  var id = cardAarry[i].getAttribute('path').split('/')[2];
  var hasImage = cardAarry[i].getElementsByClassName("imgGroup");
  // console.log(hasImage)
  if (hasImage.length == 1) { 
    newViewer(id);
  }
}

document.getElementsByClassName("card")[0]

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
