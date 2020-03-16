$(document).ready(function(nowPage, pageNum, buttonNum){
    // xlPaging.js 使用方法
    $("#page").paging({
        nowPage: nowPage, // 当前页码
        pageNum: pageNum,
        buttonNum: buttonNum, //要展示的页码数量
        url:['20190829082712478759238_1.html',
        '20190829082712478759238_2.html',
        '20190829082712478759238_3.html',
        '20190829082712478759238_4.html',
        '20190829082712478759238_5.html'],
        callback: function (num) { //回调函数
            console.log(num);
        }
    });
})