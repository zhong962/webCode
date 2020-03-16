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
//news-头条新闻
$.ajax({
	async:false,
	cache:false,
	type:'GET',
	url:'http://api.ncfun.top:2021/powergird/web/news/list/xwzx?is_en=0',
	success:function(result){
		var nowPage=getUrlParam("page");
		if (nowPage==null) {
			nowPage=1;
		}
		updata_News(result,nowPage);
		updata_HotOrLastNews(result,"right_info_new_box");
	}
})

//刷新新闻
function updata_News(result,nowPage){
	var obj = JSON.parse(JSON.stringify(result));
	var newslist = eval(obj.news);
	
	var totalNews=0;
	var nowNews=0;
	for(var i = 0; i < newslist.length;i++){
		//头条新闻
		if(newslist[i].type == "头条新闻"){
			// 标题
			totalNews=totalNews+1;
		}
	}
	var hotNews=new Array(totalNews);

	var needMinNews=(nowPage-1)*6;
	var needMaxNews=nowPage*6-1;
	//头条新闻内容
	for(var i = 0; i < newslist.length;i++){
		//头条新闻
		if(newslist[i].type == "头条新闻"){
			if (nowNews>=needMinNews&&nowNews<=needMaxNews) {
				var leftBoxItem = document.getElementById("leftBoxItems");
				var newsDiv = document.createElement("div");
				newsDiv.className="row_left_box_item";
				// 标题
				var titleDiv = document.createElement("div");
				titleDiv.innerHTML = "<a target='_blank' href="+ newslist[i].relativeUrl +" onclick='updata_Visit("+newslist[i].id+")'><h2>"+ newslist[i].title +"</h2></a>";
				titleDiv.className = "item_title";
				newsDiv.appendChild(titleDiv);
				//新闻图片
				var newsImgDiv = document.createElement("div");		
				newsImgDiv.className="item_img";
				var timeStrs=newslist[i].createTime.split("-");
				var imageUrl;
				if (newslist[i].images[0]==null) {
					imageUrl="";
				}else{
					imageUrl=newslist[i].images[0].image;
				}
				newsImgDiv.innerHTML="<a target='_blank' href='"+ newslist[i].relativeUrl +"' onclick='updata_Visit("+newslist[i].id+")' ><img src='"+imageUrl+"'></a><div class='item_img_data'><h1>"+timeStrs[0]+"</h1><h2>"+timeStrs[1]+"."+timeStrs[2].split(" ")[0] +"</h2></div>";
				newsDiv.appendChild(newsImgDiv);
				// 主要内容
				var mainDiv = document.createElement("div");
				mainDiv.className="item_main";
				var dds;
				if (newslist[i].content!=null) {
					var dd=newslist[i].content.replace(/<\/?.+?>/g,"");
					dds=dd.replace(/ /g,"");
					dds=dds.substring(0,180)+"……";
					
				} else{
					dds="null";
				}
				 
				mainDiv.innerHTML="<p>"+dds+"</p>";
				newsDiv.appendChild(mainDiv);
				//分行图
				var branchDiv = document.createElement("div");
				branchDiv.className="row_left_box_pLine";
				branchDiv.innerHTML="<div class='item_reader'><img src='img\\eye.png'><p style='padding-top: 3px;'>"+newslist[i].hits+"</p></div>";
				newsDiv.appendChild(branchDiv);
				
				leftBoxItem.appendChild(newsDiv);
			}
			nowNews++;
		}
	}
	//分页按钮
	var pageDiv= document.getElementById("row_left_page");
	pageDiv.style="padding-left:"+ (40-(totalPage+2)*1) +"%;"
	var totalPage=Math.ceil(totalNews/6);
	if (nowPage!=1) {
		pageDiv.innerHTML+="<a href='index.html?page="+(nowPage-1)+"'><div class='row_left_page_item'><h1><</h1></div></a>";
	}
	for(var i=0;i<totalPage;i++){
		var itmePageDivClassName;
		if ((i+1)==nowPage) {
			itmePageDivClassName="row_left_page_item_now";
		}else{
			itmePageDivClassName="row_left_page_item";
		}
		pageDiv.innerHTML+="<a href='index.html?page="+(i-1+2)+"'><div class='"+itmePageDivClassName+"'><h1>"+(i+1)+"</h1></div></a>"
	}
	if (nowPage!=totalPage) {
		pageDiv.innerHTML+="<a href='index.html?page="+(Number(nowPage)+1)+"'><div class='row_left_page_item'><h1>></h1></div></a>"
		
	} else{
		
	}
}

//news-热门推荐
$.ajax({
	async:false,
	cache:false,
	type:'GET',
	url:'http://api.ncfun.top:2021/powergird/web/news/list/hits/xwzx',
	success:function(result){
		updata_HotOrLastNews(result,"right_info_hot_box");
	}
})
function updata_HotOrLastNews(result,id){
	var obj = JSON.parse(JSON.stringify(result));
	var newslist = eval(obj.news);
	for(var i = 0; i < 8;i++){
		if(newslist[i].type == "头条新闻"){
			
				var hotNewsDiv = document.getElementById(id);

				var newsDiv = document.createElement("div");
				newsDiv.className="info_box_item";

				var dd=newslist[i].title.replace(/<\/?.+?>/g,"");
				dds=dd.replace(/ /g,"");
				dds=dds.substring(0,20)+"……";

				newsDiv.innerHTML="<a target='_blank' href='"+newslist[i].relativeUrl+"'><h1>"+(Number(i+1))+"</h1><p onmouseover='right_info_over()' onmouseleave='right_info_out()'>"+dds+"</p></a>"
				hotNewsDiv.appendChild(newsDiv);
		}
	}
}


//提交访问记录
function updata_Visit (id) {
	$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://api.ncfun.top:2021/powergird/web/news/hit?id="+id ,//
			success: function (result) {
			}
   });
}
//分析get参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
	
}

