//banner
$.ajax({
	async:false,
	cache:false,
	type:'GET',
	url:'http://api.ncfun.top:2021/powergird/web/newstype/banner?is_en=0',
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
	url:'http://api.ncfun.top:2021/powergird/web/news/list/hycj',
	success:function(result){
		var obj = JSON.parse(JSON.stringify(result));
		var newslist = eval(obj.news);
		for(var i = 0; i < newslist.length;i++){
			if(newslist[i].sequence == 0){
				var images = eval(newslist[i].images);
				var banner_img = document.getElementById("banner_img");
				banner_img.src = images[0].image;
			}
			//设置行业成就
			else if(newslist[i].type == "行业成就"){
				var hycj_newsDiv = document.getElementById("hycj_news");
				var detailsDiv = document.createElement("div");
				detailsDiv.className = "details container";
				
				var pictureDiv = document.createElement("div");
				var picA = document.createElement("a");
				

				picA.href = newslist[i].relativeUrl;

				var images = eval(newslist[i].images);
				// picA.innerHTML = "<img src= "+ images[0].image +
				// 				" class=\"js-3DPress\"" +
				// 				" alt=\"grid01\" "+
								// " data-tilt-options:'{\"opacity\" : 0, \"bgfixed\" : false, \"movement\": { \"perspective\" : 200, \"translateX\" : -15, \"translateY\" : -15, \"translateZ\" : 0, \"rotateX\" : -1, \"rotateY\" : 1, \"rotateZ\" : 0 } }' />";

				var img = document.createElement("img");
				img.src = images[0].image;
				img.setAttribute("class","js-3DPress");
				img.setAttribute("alt", "grid01");
				img.setAttribute("data-tilt-options",'{"opacity" : 0, "bgfixed" : false, "movement": { "perspective" : 200, "translateX" : -15, "translateY" : -15, "translateZ" : 0, "rotateX" : -1, "rotateY" : 1, "rotateZ" : 0 } } ');
				picA.appendChild(img);

				var picBackground = document.createElement("div");
				var imgBackground = document.createElement("img");

				imgBackground.src = "img/组2/newsBackground.png"
				picBackground.appendChild(imgBackground);

				var textDiv = document.createElement("div");

				

				if(newslist[i].sequence % 2 == 1){
					pictureDiv.className = "picture-left";
					picBackground.className = "picture-left-background";
					textDiv.className = "news-right";
					detailsDiv.appendChild(pictureDiv);
					detailsDiv.appendChild(textDiv);
					textDiv.innerHTML = "<h4>"+newslist[i].subtitle +"</h4>"+
									"<h1><b>"+newslist[i].title+"</b></h1>"+
									"<p>"+newslist[i].content+"</p>"+
									"<a href="+newslist[i].relativeUrl+">"+
										"<button class = 'button button--isi button--text-thick button--text-upper button--size-l>'"+
										"<span>"+"MORE"+"</span>"+
										"</button>"+
									"</a>";
				}else{
					pictureDiv.className = "picture-right";
					picBackground.className = "picture-right-background";
					textDiv.className = "news-left";
					detailsDiv.appendChild(textDiv);
					detailsDiv.appendChild(pictureDiv);
					textDiv.innerHTML = "<h4>"+newslist[i].subtitle +"</h4>"+
									"<h1><b>"+newslist[i].title+"</b></h1>"+
									"<p>"+newslist[i].content+"</p>"+
									"<a href="+newslist[i].relativeUrl+">"+
										"<button class = 'button button--isi button--isi2 button--text-thick button--text-upper button--size-l' style='float: right>'"+
										"<span>"+"MORE"+"</span>"+
										"</button>"+"</a>";
				}
				
								
				pictureDiv.appendChild(picA);
				pictureDiv.appendChild(picBackground);
				hycj_newsDiv.appendChild(detailsDiv);
			}

		}
	}
})