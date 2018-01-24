$(function(){
	var oLi = $(".title-tab li");
	var oUl = $(".ctns");
	
	for(var i = 0; i < oLi.length; i++)
	{
		oLi[i].index = i;
		oLi[i].onmouseover = function ()
		{
			for(var n = 0; n < oLi.length; n++) 
			oLi[n].className="";
			this.className = "cur";
			for(var n = 0; n < oUl.length; n++) 
			oUl[n].style.display = "none";
			oUl[this.index].style.display = "block";
			
		}	
	}
	 
	/*$(".title-tab .ctns").listview("refresh");*/
	 /*$(".title-tab .ctns").collapsibleset('refresh');*/
	
	//分页
	var beforPage = 1;
	var pagenum = 1;//显示第几页
	var shownum = 2;//显示内容数
	var showpoint = 2;//可读标签
	var divC = $("#left .left-img");
	var divL = $("#left .left-img").length;
	var num = Math.ceil(divL/shownum);//可以显示的页数
	madePagePoint();
	pageShow(pagenum,shownum);
	/*pagePoint();*/
	
	function pageShow(pagenum,shownum){
		var pagetop = shownum*pagenum-2;
		var pagebot = shownum*pagenum;
		for(var i = 0 ;i < divL ; i++){
			divC[i].style.display='none';
			if( pagetop <= i && i< pagebot){
				divC[i].style.display='block';
			}
		}
		$("#page a").css("background-color", "#F1F1F1")
				   .css("color", "#747F8C")
				   .css('border','1px solid #E6E6E6');
		$("#f"+pagenum+"t").css("background-color", "#fff")
				   .css("color", "black")
				   .css('border','0px');
				   
	}
	
	function madePagePoint(){
		$("#page").append("<a data-index='-1'; style='border:1px solid #E6E6E6; padding: 5px; background-color:#F1F1F1;  margin:20px;' id='s' >"+"<<"+"</a>");
		for(var i = 1 ;i <= num ; i++){
		$("#page").append("<a data-index='"+i+"' style='border:1px solid #E6E6E6; padding: 5px; background-color:#F1F1F1;  margin:20px;'id='f"+i+"t' >"+i+"</a>");
		}
		$("#page").append("<a data-index='0'; style='border:1px solid #E6E6E6; padding: 5px; background-color:#F1F1F1';  margin:20px;' id='x' >"+">>"+"</a>");
		/*$("#f").css("background-color", "#fff")
				   .css("color", "black")
				   .css('border','0px');*/
	}
	
	$("#page a").click(function(){
		var indexnum=$(this).attr('data-index');
		if(0<indexnum&&indexnum<=num){
			pageShow(indexnum,shownum);
			$("#page a").css("background-color", "#F1F1F1")
				   .css("color", "#747F8C")
				   .css('border','1px solid #E6E6E6');
			if (0<$(this).attr('data-index')&& $(this).attr('data-index')<=num){
				$(this).css("background-color", "#fff")
				   .css("color", "black")
				   .css('border','0px');
			}
			beforPage = indexnum;
		}if(-1==indexnum ){
			if(beforPage== 1){
				alert("已经是第一页");
			}else{
				beforPage=--beforPage;
				pageShow(beforPage,shownum);
			}
		}if(0==indexnum){
			if(beforPage==3){
				alert("已经是最后一页");
			}else{
				beforPage=++beforPage;
				pageShow(beforPage,shownum);
			}
		}
		
		
	});
	

})
