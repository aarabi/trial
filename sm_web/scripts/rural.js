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
		var video = $("#video").attr("src");


		calllinks('centre_body_Rural','4_1','rural_landing');
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#content4').css('display','block');
			$('#header1').css('display','block');
			$(".slidingDiv9").hide();
			$(".slidingDiv2").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv4").slideToggle(0,'linear');
		$('.show_hide4').click(function()
		{
			$(".slidingDiv4").slideToggle(500);
			$(".slidingDiv2").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv9").hide();
		});
		 $('#video_frame').qtip(
   {
	  
      content: 'Click Here to view The NanoSoft Video!',
	  position: {
      corner: {
         target: 'topRight',
         tooltip: 'bottomLeft'
      }
   },
   style: { 
      name: 'green' ,
	   tip: 'bottomLeft'
   }
});
		$('#video_frame').click(function()
		{
			
			$("#hiddenvideo").show();
			
		});
			$('#close_btn').click(function()
		{
			$("#video").attr("src","");
			$("#hiddenvideo").hide();
			$("#video").attr("src",video);
		});	
		
		$('#4_1').click(function(e){$('.txt5').css("background", "#FFDBB8");
			$('.txt6').css("background", "#FFDBB8");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Rural','4_1','Rural_Elect');});
		$('#4_2').click(function(e){$('.txt5').css("background", "#FFDBB8");
			$('.txt6').css("background", "#FFDBB8");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Rural','4_2','Rural_Busi');});
		$('#4_2_b').click(function(e){$('.txt5').css("background", "#FFDBB8");
			$('.txt6').css("background", "#FFDBB8");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Rural','4_2_b','Rural_Nano');});
		$('#4_3').click(function(e){$('.txt5').css("background", "#FFDBB8");
			$('.txt6').css("background", "#FFDBB8");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Rural','4_3','Rural_Edu');});
		
		
		
		

 });


 
	