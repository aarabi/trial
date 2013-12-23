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
	calllinks('centre_body_Publications','10_1','part_1');	
 } 
$(document).ready(function()
 {
	var current_page = 1;
	var current_section =1;
	$('#header1').css('display','block');
		$('#content10').css('display','block');
	calllinks('centre_body_Publications','10_1','part_1');
			$(".slidingDiv2").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv").slideToggle(0,'linear');
		
		$('.show_hide').click(function()
		{
			$(".slidingDiv").slideToggle(0,'linear');
			$(".slidingDiv2").hide();
		});
		
	
		$('#10_1').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAFAFA");calllinks('centre_body_Publications','10_1','part_1'); current_page=1;});
		$('#10_1_a').click(function(e){calllinks('centre_body_Publications','10_1_a','part_1'); current_page=1;});
		
		$('#10_2').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_2','part_14'); current_page=14;});
		$('#10_3').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_3','part_19'); current_page=19;});
		$('#10_4').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_4','part_28'); current_page=28;});
		$('#10_5').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_5','part_31'); current_page=31;});
		$('#10_6').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_6','part_31'); current_page=31;});
		$('#10_6_a').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAF2F2");calllinks('centre_body_Publications','10_6_a','part_31'); current_page=31;});
		$('#down').click(function(e)
		{
			if(current_page<30)
			{
			current_page++;
			calllinks('centre_body_Publications','10_'+current_section,'part_'+current_page);
			}
		});
		$('#up').click(function(e)
		{
			if(current_page>1)
			{
			current_page--;
			calllinks('centre_body_Publications','10_'+current_section,'part_'+current_page);
			}
		});
				
});


 
	