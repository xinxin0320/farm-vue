(function(){
	//设置html标签的font-size的大小
	var w = document.documentElement.offsetWidth;
	var fs = w/750 *100 +"px";   // 750是设计稿的宽度,100是取的基准值
	//alert("asdf");
	
	var html = document.getElementsByTagName("html")[0];
	html.style.fontSize = fs;
	//mui("html").css("font-size",fs);
})();
