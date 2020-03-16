//banner

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
$.ajax({
    async:false,
    cache:false,
    type:'GET',
    url:'http://api.ncfun.top:2021/powergird/web/news/list/sy_en',
    success:function(result){
        var obj = JSON.parse(JSON.stringify(result));
        var newsList = eval(obj.news);
        for(var i = 0; i < newsList.length; i++){
            //新闻资讯
            if(newsList[i].type == "news"){
                if(newsList[i].sequence == 1){
                    var div_content = document.getElementById("xwzx_with_image_divc");
                    var wxzx_img = document.getElementById("xwzx_with_image_img");
                    var images = eval(newsList[i].images);
                    div_content.innerHTML = "<a href = "+ newsList[i].relativeUrl +"><h1 style='font-size:34px;'>"+newsList[i].createTime.substring(5,11)+"</h1><h1 style='font-size:26px;'>"+newsList[i].createTime.substring(0,4)+"</h1>"+  "<h3>"+ newsList[i].title +"</h3><p>"+ newsList[i].subtitle +"</p> </a>";
                    wxzx_img.src = images[0].image;
                }else{
                    var ul = document.getElementById("xwzx_ul");
                    var li = document.createElement("li");
                    li.innerHTML = "<a href= "+ newsList[i].relativeUrl + "><div class='link1'>"+ newsList[i].createTime.substring(8,11) +"<div class='news_main'>"+ newsList[i].createTime.substring(0,7).replace("-",".") +"\t"+ newsList[i].title +"</div></div></a>";
                    ul.appendChild(li);
                }
            }
            //热点专题
            if(newsList[i].type == "Hot Topics"){
                var hotpoint_div = document.createElement("div");
                hotpoint_div.className = "hots hot01";
                // hotpoint_div.appendChild(document.createElement("div").className="hot_back2");
                var hotpoint_div_back = document.createElement("div");
                hotpoint_div_back.className = "hot_back2";
                hotpoint_div.appendChild(hotpoint_div_back);
                // hotpoint_div.appendChild(document.createElement("div").className="hot_back2_bady");
                var hotpoint_div_back_body = document.createElement("div");
                hotpoint_div_back_body.className = "hot_back2_body";
                hotpoint_div_back.appendChild(hotpoint_div_back_body);


                var images = eval(newsList[i].images);

                var hotpoint_div_img = document.createElement("div");
                hotpoint_div_img.className = "img2";
                var hotpoint_image = document.createElement("img");
                hotpoint_image.className = "img2_body";
                hotpoint_image.src = images[0].image;
            
                hotpoint_div.appendChild(hotpoint_div_img);
                hotpoint_div_img.appendChild(hotpoint_image);

                var hot_main = document.createElement("div");
                hot_main.className = "hot_main";

                var hot_content = document.createElement("div");
                hot_content.className = "hot_main_body";

                hot_content.innerHTML = "<a href = " + newsList[i].relativeUrl + " ><h1> HOT&nbsp TOPICS</h1>"+
                    "<h2>"+ newsList[i].title +"</h2>" +
                    "<p>"+ newsList[i].content +"</p>" + "</a>";
                hot_main.appendChild(hot_content);
                hotpoint_div.appendChild(hot_main);

                var hot_main_div = document.getElementById("owl-example");
                hot_main_div.appendChild(hotpoint_div);
            }
            //政策方针
            if(newsList[i].type == "Policy"){
                var blue_block;
                var blue_block_img;
                var blue_block_url;
                if(newsList[i].sequence == 1){
                    blue_block = document.getElementById("blue_block1_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block1_img");
                    blue_block_url = document.getElementById("way_block1_url");
                }else if(newsList[i].sequence == 2){
                    blue_block = document.getElementById("blue_block2_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block2_img");
                    blue_block_url = document.getElementById("way_block2_url");
                }else if(newsList[i].sequence == 3){
                    blue_block = document.getElementById("blue_block3_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block3_img");
                    blue_block_url = document.getElementById("way_block3_url");
                }else if(newsList[i].sequence == 4){
                    blue_block = document.getElementById("blue_block4_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block4_img");
                    blue_block_url = document.getElementById("way_block4_url");
                }else if(newsList[i].sequence == 5){
                    blue_block = document.getElementById("blue_block5_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block5_img");
                    blue_block_url = document.getElementById("way_block5_url");
                }else if(newsList[i].sequence == 6){
                    blue_block = document.getElementById("blue_block6_content");
                    images = eval(newsList[i].images);
                    blue_block_img = document.getElementById("blue_block6_img");
                    blue_block_url = document.getElementById("wat_block6_url");
                }
                
                blue_block.innerHTML = "<h1>"+newsList[i].title+"</h1>"+
                "<p>"+newsList[i].content+"</p>";
                blue_block_img.src = images[0].image;
                blue_block_url.setAttribute("href", newsList[i].relativeUrl);
            }
        }
    }
});