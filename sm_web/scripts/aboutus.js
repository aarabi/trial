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
	calllinks('centre_body_SunMoksha','9_1','SunMoksha_Do');	
 } 
$(document).ready(function()
 {
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#content9').css('display','block');
			$('#header1').css('display','block');
				
			calllinks('centre_body_SunMoksha','9_1','SunMoksha_Do');
			$(".slidingDiv").hide();
			$(".slidingDiv2").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv9").hide();
			$(".slidingDiv9").slideToggle(0,'linear');
			$('#naviagtion_aboutus').css('opacity','0');
			var current_page = 0;
			var current_section = "team";
		$('.show_hide9').click(function()
		{
			$(".slidingDiv9").slideToggle(500);
			$(".slidingDiv2").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv4").hide();
			
		});
			
		
		$('#down').click(function(e)
		{
			if(current_page<4)
			{
			current_page++;
			calllinks('centre_body_SunMoksha','9_'+current_section,'team_'+current_page);
			}
			
			
		});
		$('#up').click(function(e)
		{
			if(current_page>=1)
			{
			current_page--;
			calllinks('centre_body_SunMoksha','9_'+current_section,'team_'+current_page);
			}
		});
		$('#9_1').click(function(e){$('.txt5').css("background", "#BFBFBF");
			$('.txt6').css("background", "#BFBFBF");
			$(this).css("background", "#F9F9F9");$('#naviagtion_aboutus').css('opacity','0');calllinks('centre_body_SunMoksha','9_1','SunMoksha_Do');});
		$('#9_2').click(function(e){$('.txt5').css("background", "#BFBFBF");
			$('.txt6').css("background", "#BFBFBF");
			$(this).css("background", "#F9F9F9");$('#naviagtion_aboutus').css('opacity','0');calllinks('centre_body_SunMoksha','9_2','SunMoksha_Network');});
		$('#9_3').click(function(e)
		{
			$('.txt5').css("background", "#BFBFBF");
			$('.txt6').css("background", "#BFBFBF");
			$(this).css("background", "#F9F9F9");$('#naviagtion_aboutus').css('opacity','1');
			current_page=0;
			calllinks('centre_body_SunMoksha','9_3','team_0');
		});
		$('#9_4').click(function(e)
		{
			$('.txt5').css("background", "#BFBFBF");
			$('.txt6').css("background", "#BFBFBF");
			$(this).css("background", "#F9F9F9");$('#naviagtion_aboutus').css('opacity','1');
			calllinks('centre_body_SunMoksha','9_4','team_2');
			current_page=2;
		});
		$('#9_5').click(function(e)
		{
			$('.txt5').css("background", "#BFBFBF");
			$('.txt6').css("background", "#BFBFBF");
			$(this).css("background", "gray");$('#naviagtion_aboutus').css('opacity','1');
			calllinks('centre_body_SunMoksha','9_5','team_3');
			current_page=3;
		});		
		
	
		
		
		
		
		

 });


 
	