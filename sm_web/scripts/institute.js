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
	calllinks('centre_body_Institutes','2_1','insti_landing');
	
 }
$(document).ready(function()
 {
		
			calllinks('centre_body_Institutes','2_1','insti_landing');
	
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#content2').css('display','block');
			$('#header1').css('display','block');
			$(".slidingDiv").hide();
			$(".slidingDiv9").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv2").hide();
			$(".slidingDiv2").slideToggle(0,'linear');
		
		$('.show_hide2').click(function()
		{
			$(".slidingDiv2").slideToggle(500);
			$(".slidingDiv").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv9").hide();
		});
			
		
		
		$('#2_1').click(function(e){$('.txt5').css("background", "#CE7673");
			$('.txt6').css("background", "#CE7673");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Institutes','2_1','Insti_GreenCampus');});
		$('#2_2').click(function(e){$('.txt5').css("background", "#CE7673");
			$('.txt6').css("background", "#CE7673");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Institutes','2_2','Insti_MRAP');});
		$('#2_2_b').click(function(e){$('.txt5').css("background", "#CE7673");
			$('.txt6').css("background", "#CE7673");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Institutes','2_2_b','Insti_Nano');});
		$('#2_3').click(function(e){$('.txt5').css("background", "#CE7673");
			$('.txt6').css("background", "#CE7673");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Institutes','2_3','Insti_TR');});
		$('#2_4').click(function(e){$('.txt5').css("background", "#CE7673");
			$('.txt6').css("background", "#CE7673");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Institutes','2_4','Insti_CapBuild');});
		
		
		
		

 });


 
	