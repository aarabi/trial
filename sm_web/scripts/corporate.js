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
	calllinks('centre_body_Corporates','1_1','Corp_Landing');
 }
$(document).ready(function()
 {
		
			calllinks('centre_body_Corporates','1_1','Corp_Landing');
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#content1').css('display','block');
			$('#header1').css('display','block');
			$(".slidingDiv9").hide();
			$(".slidingDiv2").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv").hide();
			$(".slidingDiv").slideToggle(0,'linear');
		
		$('.show_hide').click(function()
		{
			$(".slidingDiv").slideToggle(500);
			$(".slidingDiv2").hide();
			$(".slidingDiv3").hide();
			$(".slidingDiv4").hide();
			$(".slidingDiv9").hide();
		});
		 $('#option_nano').qtip(
   {
	  
      content: 'Link to Request Form!',
	  position: {
      corner: {
         target: 'bottomLeft',
         tooltip: 'bottomRight'
      }
   },
   style: { 
      name: 'green' ,
	   tip: 'bottomRight'
   }
});
			
		
		
		$('#1_1').click(function(e)
		{
			$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");
			calllinks('centre_body_Corporates','1_1','Corp_EnergyEff');
		});
		$('#1_2').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_2','Corp_TechnicalServices');});
		$('#1_3').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_3','Corp_EngagementModel');});
		$('#1_5_b').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_5_b','Corp_Nano');});
		
		$('#1_4').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_4','Corp_WhyEnergyEff');});
		$('#1_5').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_5','Corp_GreenJourn');});
		$('#1_6').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_6','Corp_RenewableEner');});
		$('#1_7').click(function(e){$('.txt5').css("background", "#BCCFE6");
			$('.txt6').css("background", "#BCCFE6");
			$(this).css("background", "#EBF5FF");calllinks('centre_body_Corporates','1_7','Corp_GreenCamp');});
		
				
		
		
		
		

 });


 
	