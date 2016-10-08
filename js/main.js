$(function(){
	var ST = $(window).scrollTop();
	/*Nav*/
	$('.knowTNC').hover(
		function(){
		 $('.knowTNC .navContent').stop(true).slideDown(100);
		  $('.knowTNC .navContent').animate({"opacity":"1"},100);
		 $('.knowTNC').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.knowTNC .navContent').stop(true).slideUp(100);
		 $('.knowTNC').css({"background-position" : "-61px -10px"});
		}
	)
	$('.protectProject').hover(
		function(){
		 $('.protectProject .navContent').stop(true).slideDown(100);
		  $('.protectProject .navContent').animate({"opacity":"1"},100);
		 $('.protectProject').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.protectProject .navContent').stop(true).slideUp(100);
		 $('.protectProject').css({"background-position" : "-138px -10px"});
		}
	)
	$('.protectScience').hover(
		function(){
		 $('.protectScience .navContent').stop(true).slideDown(100);
		  $('.protectScience .navContent').animate({"opacity":"1"},100);
		 $('.protectScience').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.protectScience .navContent').stop(true).slideUp(100);
		 $('.protectScience').css({"background-position" : "-214px -10px"});
		}
	)
	$('.news').hover(
		function(){
		 $('.news .navContent').stop(true).slideDown(100);
		  $('.news .navContent').animate({"opacity":"1"},100);
		 $('.news').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.news .navContent').stop(true).slideUp(100);
		 $('.news').css({"background-position" : "-290px -10px"});
		}
	)
	$('.closeToNature').hover(
		function(){
		 $('.closeToNature .navContent').stop(true).slideDown(100);
		  $('.closeToNature .navContent').animate({"opacity":"1"},100);
		 $('.closeToNature').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.closeToNature .navContent').stop(true).slideUp(100);
		 $('.closeToNature').css({"background-position" : "-367px -10px"});
		}
	)
	$('.myTNC').hover(
		function(){
		 $('.myTNC .navContent').stop(true).slideDown(100);
		  $('.myTNC .navContent').animate({"opacity":"1"},100);
		 $('.myTNC').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.myTNC .navContent').stop(true).slideUp(100);
		 $('.myTNC').css({"background-position" : "-444px -10px"});
		}
	)
	$('.downLoad').hover(
		function(){
		 $('.downLoad .navContent').stop(true).slideDown(100);
		  $('.downLoad .navContent').animate({"opacity":"1"},100);
		 $('.downLoad').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.downLoad .navContent').stop(true).slideUp(100);
		 $('.downLoad').css({"background-position" : "-520px -10px"});
		}
	)
	$('.tree').hover(
		function(){
		 $('.tree .navContent').stop(true).slideDown(100);
		  $('.tree .navContent').animate({"opacity":"1"},100);
		 $('.tree').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.tree .navContent').stop(true).slideUp(150);
		 $('.tree').css({"background-position" : "-596px -10px"});
		}
	)
	$('.share').hover(
		function(){
		 $('.share .navContent').stop(true).slideDown(100);
		  $('.share .navContent').animate({"opacity":"1"},100);
		 $('.share').css({"background-position" : "800px 800px"});
		}
		,
		function(){
		 $('.share .navContent').stop(true).slideUp(100);
		 $('.share').css({"background-position" : "-675px -10px"});
		}
	)
function firstPageAnimate(){
		var count = 0 ;
		setInterval(
            function(){
                if( count < 2){
              	    count++;
                    $('.mouseBox').css({"margin-top" : "0"}) 
                    $('.keyBox').css({"margin-top" : "0"}) 
                }else{
              	  count = 0;
              	  $('.mouseBox').css({"margin-top" : "-58px"}) 
                    $('.keyBox').css({"margin-top" : "-60px"}) 
                }
            }
		,700)
}
firstPageAnimate();

(function(){
    jQuery(window).bind('scrollstart', function(){
    	$('.navBar').stop(true).slideUp(10);
    });
 
    jQuery(window).bind('scrollstop', function(e){
        $('.navBar').stop(true).slideDown(1000);
        var ST = $(window).scrollTop();
 	      if(ST>=0&&ST<=400){
 	      	$('html,body').animate({scrollTop:0},500)
 	      }else if(ST>=800&&ST<=1700){
 	      	$('html,body').animate({scrollTop:1200},500)
 	      }else if(ST>=2000&&ST<=2500){
 	      	 $('html,body').animate({scrollTop:2300},500)
 	      } else if(ST>=2600&&ST<=3000){
 	      	$('html,body').animate({scrollTop:2600},500)
 	      } else if(ST>=3300&&ST<=3800){
 	      	$('html,body').animate({scrollTop:3800},500)
 	      } else if(ST>=5916&&ST<=6716){
 	      	$('html,body').animate({scrollTop:6316},500)
 	      } else if(ST>=7216&&ST<=7916){
 	      	$('html,body').animate({scrollTop:7516},500)
 	      } else if(ST>=8416&&ST<=9116){
 	      	$('html,body').animate({scrollTop:8716},500)
 	      } else if(ST>=9616&&ST<=10316){
 	      	$('html,body').animate({scrollTop:9916},500)
 	      } else if(ST>=10716&&ST<=11536){
 	      	$('html,body').animate({scrollTop:11136},500)
 	      } else if(ST>=11936&&ST<=12727){
 	      	$('html,body').animate({scrollTop:12327},500)
 	      }else if(ST>=13213){
 	      	$('html,body').animate({scrollTop:13413},500)
 	      }
 	      	
 	      if(ST==1200||ST==2300||ST==2600||ST==3800){
 	      	 $('.protectProject .navContent').css({"display":"none","opacity":"1"})
 	      	  $('.protectScience .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.knowTNC .navContent').css({"display":"block","opacity":"1"})
 	      	 $('.news .navContent').css({"display":"none","opacity":"1"})
 	      }else if(ST==6316||ST==7516||ST==8716){
 	      	 $('.protectScience .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.knowTNC .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.protectProject .navContent').css({"display":"block","opacity":"1"})
 	      	 $('.news .navContent').css({"display":"none","opacity":"1"})
 	      }else if(ST==9916||ST==11136||ST==12327){
 	      	$('.knowTNC .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.protectProject .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.protectScience .navContent').css({"display":"block","opacity":"1"})
 	      	 $('.news .navContent').css({"display":"none","opacity":"1"})
 	      }else if(ST==13413){
 	      	 $('.knowTNC .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.protectProject .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.protectScience .navContent').css({"display":"none","opacity":"1"})
 	      	 $('.news .navContent').css({"display":"block","opacity":"1"})
 	      }
 	      if(ST==1200){
 	      	 $('.knowTNC .select li').eq(0).css({"background-color":"#00713D","color":"white"})
 	      	 $('.knowTNC .select li').eq(1).css({"background-color":"#FFF","color":"#00713D"})
 	      	 $('.knowTNC .select li').eq(2).css({"background-color":"#FFF","color":"#00713D"})
 	      }else if(ST==2300){
 	      	 $('.knowTNC .select li').eq(1).css({"background-color":"#00713D","color":"white"})
 	      	  $('.knowTNC .select li').eq(0).css({"background-color":"#FFF","color":"#00713D"})
 	      	 $('.knowTNC .select li').eq(2).css({"background-color":"#FFF","color":"#00713D"})
 	      }else if(ST==2600){
 	      	 $('.knowTNC .select li').eq(1).css({"background-color":"#00713D","color":"white"})
 	      	 $('.knowTNC .select li').eq(0).css({"background-color":"#FFF","color":"#00713D"})
 	      	 $('.knowTNC .select li').eq(2).css({"background-color":"#FFF","color":"#00713D"})
 	      }else if(ST==3800){
 	      	 $('.knowTNC .select li').eq(2).css({"background-color":"#00713D","color":"white"})
 	      	 $('.knowTNC .select li').eq(0).css({"background-color":"#FFF","color":"#00713D"})
 	      	 $('.knowTNC .select li').eq(1).css({"background-color":"#FFF","color":"#00713D"})
 	      }else if(ST==6316){
 	      	 $('.protectProject .select li').eq(0).css({"background-color":"#339933","color":"white"})
 	      	 $('.protectProject .select li').eq(1).css({"background-color":"#FFF","color":"#339933"})
 	      	 $('.protectProject .select li').eq(2).css({"background-color":"#FFF","color":"#339933"})
 	      }else if(ST==7516){
 	      	 $('.protectProject .select li').eq(1).css({"background-color":"#339933","color":"white"})
 	      	 $('.protectProject .select li').eq(0).css({"background-color":"#FFF","color":"#339933"})
 	      	 $('.protectProject .select li').eq(2).css({"background-color":"#FFF","color":"#339933"})
 	      }else if(ST==8716){
 	      	 $('.protectProject .select li').eq(2).css({"background-color":"#339933","color":"white"})
 	      	 $('.protectProject .select li').eq(1).css({"background-color":"#FFF","color":"#339933"})
 	      	 $('.protectProject .select li').eq(0).css({"background-color":"#FFF","color":"#339933"})
 	      }else if(ST==9916){
 	      	 $('.protectScience .select li').eq(0).css({"background-color":"#0099FF","color":"white"})
 	      	 $('.protectScience .select li').eq(1).css({"background-color":"#FFF","color":"#0099FF"})
 	      	 $('.protectScience .select li').eq(2).css({"background-color":"#FFF","color":"#0099FF"})
 	      }else if(ST==11136){
 	      	 $('.protectScience .select li').eq(1).css({"background-color":"#0099FF","color":"white"})
 	      	 $('.protectScience .select li').eq(0).css({"background-color":"#FFF","color":"#0099FF"})
 	      	 $('.protectScience .select li').eq(2).css({"background-color":"#FFF","color":"#0099FF"})
 	      }else if(ST==12327){
 	      	 $('.protectScience .select li').eq(2).css({"background-color":"#0099FF","color":"white"})
 	      	 $('.protectScience .select li').eq(1).css({"background-color":"#FFF","color":"#0099FF"})
 	      	 $('.protectScience .select li').eq(0).css({"background-color":"#FFF","color":"#0099FF"})
 	      }
 	      
 	      
 	      
 	      
 	      
 	      
 	      
 	      
    });
})();
var musicClick = 1;
$('.music').click(function(){
	musicClick++;
	if(musicClick%2 == 0){
		$('.musicBox').animate({"margin-top":"-60px"})
	}else{
		$('.musicBox').animate({"margin-top":0})
	}
})
	
/*地图特效*/
$('.beimei').hover(
    function(){
    	$('.beimeiShow').children().css({"animation":"cicleHide .3s linear forwards"})
    	$('.beimeiLoc .locText').css({"background-color" : "#33CCFF"})
    }
	,
	function(){
		$('.beimeiShow').children().css({"animation":"cicleShow .3s linear forwards"})
		$('.beimeiLoc .locText').css({"background-color" : "rgba(51,204,255,0.6)"})
	}
)
$('.nanmei').hover(
    function(){
    	$('.nanmeiShow').children().css({"animation":"cicleHide .3s linear forwards"})
    	$('.nanmeiLoc .locText').css({"background-color" : "#FFCC00"})
    }
	,
	function(){
		$('.nanmeiShow').children().css({"animation":"cicleShow .3s linear forwards"})
		$('.nanmeiLoc .locText').css({"background-color" : "rgba(255,204,0,0.6)"})
	}
)
$('.ouzhou').hover(
    function(){
    	$('.ouzhouShow').children().css({"animation":"cicleHide .3s linear forwards"})
    	$('.ouzhouLoc .locText').css({"background-color" : "#F04848"})
    }
	,
	function(){
		$('.ouzhouShow').children().css({"animation":"cicleShow .3s linear forwards"})
		$('.ouzhouLoc .locText').css({"background-color" : "rgba(240,72,72,0.6)"})
	}
)
$('.feizhou').hover(
    function(){
    	$('.feizhouShow').children().css({"animation":"cicleHide .3s linear forwards"})
    	$('.feizhouLoc .locText').css({"background-color" : "#FF9933"})
    }
	,
	function(){
		$('.feizhouShow').children().css({"animation":"cicleShow .3s linear forwards"})
		$('.feizhouLoc .locText').css({"background-color" : "rgba(255,153,11,0.6)"})
	}
)
$('.yatai').hover(
    function(){
    	$('.yataiShow').children().css({"animation":"cicleHide .3s linear forwards"})
    	$('.yataiLoc .locText').css({"background-color" : "#7CE315"})
    }
	,
	function(){
		$('.yataiShow').children().css({"animation":"cicleShow .3s linear forwards"})
		$('.yataiLoc .locText').css({"background-color" : "rgba(124,227,21,0.6)"})
	}
)
/*地图特效结束*/
$('.Icon0').hover(
	function(){
         $('.Icon0 .current').stop(true).slideDown(300)	
	}
	,
	function(){
         $('.Icon0 .current').stop(true).slideUp(300);
         var margin = $('.newsBox').css("margin-left");
         if(margin == "0px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideDown(300);
         	console.log('a');
         }else if(margin == "-1000px"){
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon1 .current').stop(true).slideDown(300)
         }else if(margin == "-2000px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideDown(300)
         }
	}
)
$('.Icon1').hover(
	function(){
         $('.Icon1 .current').stop(true).slideDown(300)	
	}
	,
	function(){
         $('.Icon1 .current').stop(true).slideUp(300)
          var margin = $('.newsBox').css("margin-left");
         if(margin == "0px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideDown(300);
         	console.log('a');
         }else if(margin == "-1000px"){
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon1 .current').stop(true).slideDown(300)
         }else if(margin == "-2000px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideDown(300)
         }
         
	}
)
$('.Icon2').hover(
	function(){
         $('.Icon2 .current').stop(true).slideDown(300)	
	}
	,
	function(){
         $('.Icon2 .current').stop(true).slideUp(300)
          var margin = $('.newsBox').css("margin-left");
         if(margin == "0px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideDown(300);
         	console.log('a');
         }else if(margin == "-1000px"){
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideUp(300);
         	$('.Icon1 .current').stop(true).slideDown(300)
         }else if(margin == "-2000px"){
         	$('.Icon1 .current').stop(true).slideUp(300);
         	$('.Icon0 .current').stop(true).slideUp(300);
         	$('.Icon2 .current').stop(true).slideDown(300)
         }
	}
)
$('.Icon0').click(function(){
	 $('.newsBox').animate({"margin-left":"0"})
})
$('.Icon1').click(function(){
	 $('.Icon1 .current').stop(true).slideDown(300)
	 $('.newsBox').animate({"margin-left":"-1000px"})
})
$('.Icon2').click(function(){
	 $('.Icon2 .current').stop(true).slideDown(300)
	 $('.newsBox').animate({"margin-left":"-2000px"})
})

	
})//$end

window.onload = function(){
	  	$('.navBar').slideDown(1000);
}
$('.home').click(function(){
	 $('html,body').animate({scrollTop:0},500)
})
window.onscroll = function(){
	    var ST = $(window).scrollTop();
    	console.log(ST);
    	/*NAV区图片显示*/
    	if(ST>1000){
    		$('.logo').css({"display":"block"});
    		$('.home').css({"background-position":"15px -10px"})
    	}else{
    		$('.logo').css({"display":"none"})
    		$('.home').css({"background-position":"15px -110px"})
    	}
    	/*年份框移动*/
    	if(ST>3903&&ST<5330){
    		$('.year').removeClass('yearRelative');
    		$('.year').addClass('yearFixed');
    	}else if(ST>=5330){
    		$('.year').removeClass('yearFixed');
    		$('.year').addClass('yearRelative')
    	}else{
    		$('.year').removeClass('yearRelative');
    		$('.year').removeClass('yearFixed');
    	}
    	/*缎带长度*/
    	if(ST>= 3503){
    		var top = ST - 3550;
    		$('.greenLine').css({"height":top+'px'})
    	}
}

