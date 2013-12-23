$("body").scroll(function(e)
{
		
		e.preventDefault();
		
		
	
});
  function calllinks(id1,id2,pos)
		{
			
			var v1 = document.getElementById(id1);
			var v2 = document.getElementById(id2); 
			var v3 = document.getElementById(pos); 
			var v4 = document.getElementById('content1');
			
			var offset = $(v1).offset();
			//$(v1).stop().animate({scrollTop:$(v1).scrollTop() + $(v3).position().top - offset.top}, 1200);
			
			$("html, body").scrollTop($(v3).position().top);
				
		}
 function setpage()
 {
	calllinks('centre_body_Startups','3_1','start_landing');
		
 }
$(document).ready(function()
 {
		
					calllinks('centre_body_Startups','3_1','start_landing');
		
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#content3').css('display','block');
			$('#header1').css('display','block');
			$(".slidingDiv").hide();
			$(".slidingDiv9").hide();
			$(".slidingDiv2").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv3").slideToggle(0,'linear');
		$('.show_hide3').click(function()
		{
			$(".slidingDiv3").slideToggle(500);
			$(".slidingDiv2").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv9").hide();
		});
			
		
		
		$('#3_1').click(function(e){$('.txt5').css("background", "#B0CE55");
			$('.txt6').css("background", "#B0CE55");
			$(this).css("background", "#FDFEFC");calllinks('centre_body_Startups','3_1','Startup_Finance');});
		$('#3_2').click(function(e){$('.txt5').css("background", "#B0CE55");
			$('.txt6').css("background", "#B0CE55");
			$(this).css("background", "#FDFEFC");calllinks('centre_body_Startups','3_2','Startup_Market');});
		$('#3_3').click(function(e){$('.txt5').css("background", "#B0CE55");
			$('.txt6').css("background", "#B0CE55");
			$(this).css("background", "#FDFEFC");calllinks('centre_body_Startups','3_3','Startup_CapBuild');});
		
		
		
		
		

 });


 
	