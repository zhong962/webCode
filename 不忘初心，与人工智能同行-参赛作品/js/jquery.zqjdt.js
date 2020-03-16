(function($){
	$.fn.zqTab = function(options){
		var defaults = {
			ChangeTime:3000,
			Obutton : false
		};

		var opts = $.extend(defaults, options);
		
		return this.each(function(){
			var oThis = $(this);
			var index = 0;
			var timer;
			var cTimer = opts.ChangeTime;
			var len = $('ul li',oThis).length;
			
			//$('ul li',oThis).eq(0).css("display","block");
			
			if (opts.Obutton){
				var arr = [];
				arr.push('<ol>')
				for(i = 1; i <= $('li',oThis).length; i++){
					arr.push('<li>' +  i + '</li>');
				};
				arr.push('</ol>');
				var _IndexBtnHtml = $(arr.join(''));
				oThis.append(_IndexBtnHtml);
			}else{
				oThis.append(document.createElement("ol"));
				$('ol',oThis).html($('ul',oThis).html());
				$('ol a',oThis).click(function(evt){
					evt.preventDefault();
				})
			}
			
			$('ol li',oThis).click(function(){
				index = $('ol li',oThis).index(this);
				showPic(index);
			}).eq(0).click();
		
			oThis.hover(function(){
				clearInterval(timer);
				},function(){
					timer = setInterval(function(){
						showPic(index);
						index++;
						
						if(index==len){index=0;}
				},cTimer)
			}).trigger("mouseleave");
			
			function showPic(index){
				$('ol li',oThis).removeClass("active").eq(index).addClass("active");
				$('ul li',oThis).eq(index).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
			};
		});
	};
})(jQuery);

$(document).ready(function (){
	function scrollContent(ctId, id1, id2) {
        var speed=100;
        var $$=function(id){return document.getElementById(id);}
        $$(id2).innerHTML= $$(id1).innerHTML;
        function roll(){
            if($$(id2).offsetTop-$$(ctId).scrollTop<=0)  {  //当滚动到第二部分的顶部位置时
                $$(ctId).scrollTop-=$$(id1).offsetHeight; //重置至第一部分顶部位置,相当于$$('box').scrollTop=0;
            }
            else{
                $$(ctId).scrollTop++ ;
            }
        }
        var start=setInterval(roll,speed);
        $$(ctId).onmouseover=function() {clearInterval(start)};
        $$(ctId).onmouseout=function() {start=setInterval(roll,speed)};
    }
    try{
        scrollContent('demo', 'demo1', 'demo2');
    } catch(e){}
})