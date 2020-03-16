;
(function ($, window, document, undefined) {
    'use strict';

    function Paging(element, options) {
        this.element = element;
        this.options = {
            nowPage: options.nowPage || 1, // 当前页码
            pageNum: options.pageNum, // 总页码
            buttonNum: (options.buttonNum >= 5 ? options.buttonNum : 5) || 7, // 页面显示页码数量
            url: options.url,
            callback: options.callback // 回调函数
        };
        this.init();
    }

    function setContent(className, url, num){
        if(className != '' && url != undefined){
            if(num != NOWPAGE)
                return "<li class= "+ className +" > <a href = " + url  + ">"  + num + "</a></li>";
            else
                return "<li class= "+ className +" > <a>"  + num + "</a></li>";
        }
        else if(className !='' && url == undefined)
            return "<li class= "+ className +"> <a> " + num + "</a></li>";
        else if(className == '' && url != undefined){
            if(num != NOWPAGE)
                return "<li> <a href = " + url  + " >"  + num + "</a></li>";
            else
                return "<li> <a>"  + num + "</a></li>";
        }
        else if(className == '' && url == undefined)
            return "<li> <a> " + num + "</a></li>";
    }

    Paging.prototype = {
        constructor: Paging,
        init: function () {
            this.createHtml();
            this.bindClickEvent();
            this.disabled();
        },
        createHtml: function () {
            var me = this;
            var nowPage = this.options.nowPage;
            NOWPAGE = nowPage;
            if(isNaN(nowPage))
                return;
            var pageNum = this.options.pageNum;
            var buttonNum = this.options.buttonNum;
            var url = this.options.url;
            var content = [];
            content.push("<ul>");
            // content.push("<li class='xl-prevPage'> <a href = " + url[nowPage - 1] + " > 上一页"+"<a/> </li>");
            content.push(setContent("xl-prevPage", url[nowPage - 2], "<"));
            //页面总数小于等于当前要展示页数总数，展示所有页面
            if (pageNum <= buttonNum) {
                for (var i = 1; i <= pageNum; i++) {
                    if (nowPage !== i) {
                        // content.push("<li> <a href = " + url[i-1]  + ">" + i + " </a> </li>");
                        content.push(setContent('', url[i - 1], i));
                    } else {
                        // content.push("<li class='xl-active'> <a href = " + url[i-1]  + ">"  + i + " </a></li>");
                        content.push(setContent("xl-active", url[i - 1], i));
                    }
                }
            } else if (nowPage <= Math.floor(buttonNum / 2)) {
                //当前页面小于等于展示页数总数的一半（向下取整），从1开始
                for (var i = 1; i <= buttonNum - 2; i++) {
                    if (nowPage !== i) {
                        content.push(setContent('', url[i - 1], i));
                    } else {
                        content.push(setContent("xl-active", url[i - 1], i));
                    }
                }
                content.push("<li class='xl-disabled'>...</li>");
                content.push("<li>" + pageNum + "</li>");
            } else if (pageNum - nowPage <= Math.floor(buttonNum / 2)) {
                //当前页面大于展示页数总数的一半（向下取整）
                content.push("<li>" + 1 + "</li>");
                content.push("<li class='xl-disabled'>...</li>");
                for (var i = pageNum - buttonNum + 3; i <= pageNum; i++) {
                    if (nowPage !== i) {
                        content.push(setContent('', url[i - 1], i));
                    } else {
                        content.push(setContent("xl-active", url[i - 1], i));
                    }
                }
            } else {
                //前半部分页码
                if (nowPage - Math.floor(buttonNum / 2) <= 0) {
                    for (var i = 1; i <= Math.floor(buttonNum / 2); i++) {
                        if (nowPage !== i) {
                            content.push(setContent('', url[i - 1], i));
                        } else {
                            content.push(setContent("xl-active", url[i - 1], i));
                        }
                    }
                } else {
                    content.push(setContent('', url[i - 1], i));
                    content.push("<li class='xl-disabled'>...</li>");
                    for (var i = nowPage - Math.floor(buttonNum / 2) + (buttonNum % 2 == 0 ? 3 : 2); i <=
                        nowPage; i++) {
                        if (nowPage !== i) {
                            content.push(setContent('', url[i - 1], i));
                        } else {
                            content.push(setContent("xl-active", url[i - 1], i));
                        }
                    }

                }
                //后半部分页码
                if (pageNum - nowPage <= 0) {
                    for (var i = nowPage + 1; i <= pageNum; i++) {
                        content.push(setContent('', url[i - 1], i));
                    }
                } else {
                    for (var i = nowPage + 1; i <= nowPage + Math.floor(buttonNum / 2) - 2; i++) {
                        content.push(setContent('', url[i - 1], i));
                    }
                    content.push("<li class='xl-disabled'>...</li>");
                    content.push("<li>" + pageNum + "</li>");
                }
            }
            content.push(setContent("xl-nextPage", url[nowPage], ">"));
            content.push("</ul>");
            me.element.html(content.join(''));
            // DOM重新生成后每次调用是否禁用button
            setTimeout(function () {
                me.disabled();
            }, 20);

        },
        bindClickEvent: function () {
            var me = this;
            me.element.off('click', 'li');
            me.element.on('click', 'li', function () {
                var cla = $(this).attr('class');
                var num = parseInt($(this).html());
                var nowPage = me.options.nowPage;
                if ($(this).hasClass('xl-disabled')) {
                    return;
                }
                if (cla === 'xl-prevPage') {
                    if (nowPage !== 1) {
                        me.options.nowPage -= 1;
                    }
                } else if (cla === 'xl-nextPage') {
                    if (nowPage !== me.options.pageNum) {
                        me.options.nowPage += 1;
                    }
                } else {
                    me.options.nowPage = num;
                }
                me.createHtml();
                if (me.options.callback) {
                    me.options.callback(me.options.nowPage);
                }
            });

        },
        disabled: function () {
            var me = this;
            var nowPage = me.options.nowPage;
            var pageNum = me.options.pageNum;
            if (nowPage === 1) {
                me.element.children().children('.xl-prevPage').addClass('xl-disabled');
            } else if (nowPage === pageNum) {
                me.element.children().children('.xl-nextPage').addClass('xl-disabled');
            }
        }
    }
    $.fn.paging = function (options) {
        return new Paging($(this), options);
    }
})(jQuery, window, document);




// function setContent(className, url, num){
//     if(className != '' && url != '')
//         return "<a className = "+ className +" href = " + url  + ">"  + num + "</a>";
//     else if(className !='' && url == '')
//         return "<a className = "+ className +" >"+ num + "</a>";
//     else if(className == '' && url != '')
//         return "<a href = " + url  + ">"  + num + "</a>";
//     else if(className == '' && url == '')
//         return "<a> " + num + "</a></li>";

// }

var NOWPAGE;

