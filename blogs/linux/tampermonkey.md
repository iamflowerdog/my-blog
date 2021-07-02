---
title: 如何使用Tampermonkey屏蔽知乎广告
date: 2021-07-02
tags:
 - Chrome Plugin
 - Tampermonkey
 - 油猴
categories: 
 - Web
sidebar: 'auto'
---


Tampermonkey(油猴) 是Chrome浏览器插件，使用它可以用来屏蔽知乎的广告，Tampermonkey 怎么实现的呢? 很简单！当我们在刷知乎或者微博的信息流
的时候，浏览器会把这些页面呈现给我们，这些页面也是由类似积木拼接起来的，只不过用户看不到浏览器在下面做的工作。下面以访问知乎为例

![layout](/tampermonkey/layout.png)

我们可以很容易的看到，广告元素和其他元素还是不一样的，广告元素的class多了一个 `TopstoryItem--advertCard`，我们把这个不一样
的广告元素剔除就可以了，我们打开浏览器的的开发者模式(Mac键盘同时按下 comand + option + i, windows 按 F12)，进入console输入下面的代码试一下，
就可以神奇的发现广告元素不见了。

![console](/tampermonkey/console.png)

```
let list = document.getElementsByClassName('TopstoryItem--advertCard')
Array.prototype.forEach.call(list, (item) => {
    item.style.display = 'none'
})
```

tampermonkey 就是帮我们做了这些事情，下面是tampermonkey的安装步骤。

### 1. 在Chrome的应用市场安装tampermonkey 

[应用市场](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN) 大陆用户可能需要科学上网，

![tampermonkey](/tampermonkey/tampermonkey.png)

### 2. 在Chrome扩展程序里面打开tampermonkey

![Chrome扩展程序](/tampermonkey/program.png)

### 3. 在tampermonkey添加脚本

![plugins](/tampermonkey/plugins.png)

### 4. 编写脚本

把下面这些代码复制进去，然后保存

```
// ==UserScript==
// @name         clean zhihu ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com
// @grant        none
// ==/UserScript==

var sameNames = [];

// 这里是屏蔽列表, 不想看的关键字写在这里就行了.
var gotohell = ["广告", "孙杨"];

window.onload=function()
{
    var main = document.getElementsByClassName("Topstory-recommend")[0];
    main.addEventListener("DOMNodeInserted", function() {
        hideItems();
    });
    function hideItems() {
        var items = document.getElementsByClassName("TopstoryItem");
        for (var i = 0; i < items.length; ++i)
        {
            if (items[i].classList.contains("TopstoryItem--advertCard")) {
                items[i].style.display = "none";
                console.log('wv');
            };

            if (items[i].classList.contains("alreadyfucked")) continue;
            //console.log("doing" +　i);
            var title = items[i].getElementsByClassName("ContentItem-title");
            var a;
            if (title.length) a = title[0].getElementsByTagName("a");
            else continue;
            var text = a[0].innerHTML;
            for (var j = 0; j < gotohell.length; ++j) {
                if (text.match(gotohell[j])) {
                    console.log(gotohell[j]);
                    items[i].style.display = "none";
                }
            }


            //for (var jj = 0; jj < sameNames.length; ++jj) {
            //    if (text==sameNames[jj]) {
            //        console.log(sameNames[jj]);
            //        items[i].style.display = "none";
            //    }
            //}
            //sameNames.push(text);
            items[i].classList.add("alreadyfucked");
        }
    }
}
```

### 5.测试是否生效

[访问知乎](https://www.zhihu.com/)

### 6. 总结

Tampermonkey可以说是学习Web必备的工具，只要你用过一次，就会爱上它。我也是一次偶然的机会才了解到它，有个医生同学找我帮忙，工作
需要查找 Sci-Hub 网站上面的文献，论文下载的时候需要用到这个神奇的工具。tampermonkey的功能还有很多，上面只是知乎的屏蔽广告的例子，
还有微博的屏蔽广告的code我没有贴出来，你如果想要可以私信我，你也可以去tampermokey脚本市场下载，文章多有不足之处，欢迎指正和留言。












