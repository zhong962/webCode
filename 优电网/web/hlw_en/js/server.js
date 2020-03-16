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
		alert("·şÎñÆ÷ÇëÇóÊ§°Ü");
	}
})