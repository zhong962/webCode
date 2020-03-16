// banner
$.ajax({
	async:false,
	cache:false,
	type:'GET',
	url:'http://api.ncfun.top:2021/powergird/web/newstype/banner?is_en=1',
	success:function(result){
		var ul = document.getElementById("navbar");
		var obj = JSON.parse(JSON.stringify(result));
		var bannerlist = eval(obj.list);

		for(var i = 0; i < bannerlist.length;i++){
			var li = document.createElement("li");
			li.innerHTML = "<a href =" + bannerlist[i].url + ">"+bannerlist[i].title+"</a>";
			ul.appendChild(li);
		}
		
	},
	error:function(e){
		alert("服务器请求失败");
	}
})
//news
$.ajax({
	async:false,
	cache:false,
	type:'GET',
	url:'http://api.ncfun.top:2021/powergird/web/news/list/fzls',
	success:function(result){
		var obj = JSON.parse(JSON.stringify(result));
		var newslist = eval(obj.news);
		for(var i = 0; i < newslist.length;i++){
			//设置发展状况
			if(newslist[i].type == "发展状况"){
				if(newslist[i].sequence == 1){
					var statusImage = document.getElementById("status_div1_imag");
					var images = eval(newslist[i].images);
					statusImage.innerHTML = "<a href='"+newslist[i].relativeUrl+"'><img  src="+ images[1].image +"></a>";
					var statusContent = document.getElementById("status_div1_text");
					statusContent.innerHTML = "<h4><br>"+ newslist[i].subtitle +"</h4><h1><b>"+ newslist[i].title +"</b></h1><p><br>"+newslist[i].content +"</p><a href='#' target='_blank'><h5>MORE</h5></a>";
				}else{
					var div = document.getElementById("status2_div");
					var divNews = document.createElement("div");
					var images = eval(newslist[i].images);
					divNews.innerHTML = "<figure class=imghvr-shutter-out-horiz><img src="+ images[0].image +"><figcaption class=status-fig-text style='margin-top:46%'>"+ newslist[i].title +"</figcaption><a href='#'></a></figure>";
					divNews.className = "status-img3";
					div.appendChild(divNews);
				}
			}
			//设置发展历史
			if(newslist[i].type == "发展历史"){
				var div = document.getElementById("devHistoriesDiv");
				var emptyDiv = document.createElement("div");

				var historyTextDiv = document.createElement("div");
				var historyImageDiv = document.createElement("div");
				var historySequenceDiv = document.createElement("div");

				var images = eval(newslist[i].images);
				historyTextDiv.innerHTML = "<h4>"+newslist[i].subtitle+"</h4><a href='"+newslist[i].relativeUrl+"'><h4>"+ newslist[i].title + "</h4></a><br><p>"+ newslist[i].content +"</p>";
				historyTextDiv.className = "cntl-content";

				historyImageDiv.innerHTML = "<figure class=imghvr-shutter-out-horiz><img src="+ images[0].image +"><figcaption class=status-fig-text>"+ newslist[i].title +"</figcaption><a href='"+newslist[i].relativeUrl+"'></a></figure>";
				historyImageDiv.className = "cntl-image newsPicture";

				historySequenceDiv.innerHTML = "0" + newslist[i].sequence;
				historySequenceDiv.className = "cntl-icon cntl-center";

				emptyDiv.className = "cntl-state";
				emptyDiv.appendChild(historyTextDiv);
				emptyDiv.appendChild(historyImageDiv);
				emptyDiv.appendChild(historySequenceDiv);

				div.appendChild(emptyDiv);
					
			}
		}
	}
})