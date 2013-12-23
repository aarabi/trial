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
	calllinks('centre_body_Publications','10_1','part_31');
	
 } 

$(document).ready(function()
 {
	var current_page = 30;
	var current_section =1;
	$('#header1').css('display','block');
		$('#content10').css('display','block');
	calllinks('centre_body_Publications','10_1','part_31');
		$(".slidingDiv2").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv2").slideToggle(0,'linear');
		
		$('.show_hide').click(function()
		{
			$(".slidingDiv2").slideToggle(0,'linear');
			$(".slidingDiv").hide();
		});
	function calllinks(id1,id2,pos)
		{
			
			var v1 = document.getElementById(id1);
			var v2 = document.getElementById(id2); 
			var v3 = document.getElementById(pos); 
			var offset = $(v1).offset();
			$(v1).stop().animate({scrollTop:$(v1).scrollTop() + $(v3).position().top - offset.top}, 1200);
			
				
		}
		
		$('#10_5').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAFAFA");calllinks('centre_body_Publications','10_5','part_31'); current_page=31;});
		$('#10_6').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAFAFA");calllinks('centre_body_Publications','10_6','part_31'); current_page=31;});
		$('#10_6_a').click(function(e){$('.txt5').css("background", "#CCC");
			$('.txt6').css("background", "#CCC");
			$(this).css("background", "#FAFAFA");calllinks('centre_body_Publications','10_6_a','part_31'); current_page=31;});
		$('#down').click(function(e)
		{
			if(current_page=31)
			{
			current_page++;
			
			calllinks('centre_body_Publications','10_'+current_section,'part_'+current_page);
			}
		});
		$('#up').click(function(e)
		{
			if(current_page=32)
			{
			current_page--;
			calllinks('centre_body_Publications','10_'+current_section,'part_'+current_page);
			}
		});
				
});


 
	