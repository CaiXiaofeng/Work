$(function(){
	var carPageIndex = 0,
		$imgCt=$(".img-ct"),
		$preBtn = $(".btn-pre"),
		$nextBtn = $(".btn-next"),
		$bullet = $(".bullet"),
		$imgLength = $imgCt.children().length,
		$firstImg = $(".img-ct li").eq(0).clone(),
		$lastImg = $(".img-ct li").eq(-1).clone();
	var isAinmate =false;
	$imgCt.prepend($lastImg);
	$imgCt.append($firstImg);
	/*$(".carousel .img-ct").listview("refresh");*/
	/* $(".carousel .img-ct").collapsibleset('refresh');
	$(".carousel .img-ct").trigger("create"); */
	$imgCt.width($firstImg.width()*$imgCt.children().length);
	$imgCt.css('left','-670px');
	$nextBtn.on("click",function(e){
		e.preventDefault();
		playNext();
	})
	$preBtn.on("click",function(e){
		e.preventDefault();
		playpre();
	})
	
	
	function playNext(){
		if(isAinmate) return;
		isAinmate =true;
		$imgCt.animate({
			left:'-=670px'/*不能有空格*/
		},function(){
			carPageIndex++;
			/*alert(carPageIndex==$(".img-ct").children().length);*/
			if(carPageIndex==$imgLength){
				$(".img-ct").css({left:"-670px"});
				carPageIndex = 0;
			}
			isAinmate =false;
			setBullet();
		});
		
	}
	
	function playpre(){
		if(isAinmate) return;
		isAinmate =true;
		$imgCt.animate({ 
			left:'+=670px'/*不能有空格*/
		},function(){
			carPageIndex--;
			if(carPageIndex<0){
				$(".img-ct").css({left:-($imgLength*$firstImg.width())})
				carPageIndex = $imgLength-1;
			}
			isAinmate =false;
			setBullet();
		});
	}
	/*alert($bullet.eq(1).data-index);*/
	/*alert($(".bullet li").attr('data-index'));*/
	/*alert(document.querySelector(".bullet li").getAttribute('data-index'));*/
	function setBullet(){
		$bullet.children().removeClass("active").eq(carPageIndex).addClass("active");
	}
	/* function bulletCheck(){
	 	var dataindex = $(".bullet li").attr('data-index');
	 	alert($(".bullet li").attr('data-index'));
	 }*/
	
	/*$(".bullet li").on("click",function(){      //只需要找到你点击的是哪个ul里面的就行
	     alert($(".bullet li").attr('data-index'));
	 });*/
	$(".bullet").delegate("li", "click", function(){
		var curLi = $(this).attr('data-index');
		var beforLi = $('.active').attr('data-index');
		var n = curLi - beforLi;
		var move = n*670;
		if(isAinmate) return;
		isAinmate =true;
		$imgCt.animate({
			left:'-='+move+'px'
		 
		},function(){
			carPageIndex+=n;
			if(carPageIndex==$imgLength){
				$(".img-ct").css({left:"-670px"});
				carPageIndex = 0;
			}
			isAinmate =false;
			setBullet();
		});
		
		});
		
		window.setInterval(function(){
			playNext();
		},5000);
		
		$(".follow-li").mouseover(function(){
			$(".follow-li").style.opacity=0.6;
		})
})
