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
	calllinks('centre_body_Nanosoft','1_1','Nano_Landing');
 }
$(document).ready(function()
 {
		
			calllinks('centre_body_Nanosoft','1_1','Nano_Landing');
			$('.all').css('display','none');
			$('#left_options').css('display','block');
			$('#contentnr').css('display','block');
			$('#header1').css('display','block');
			/*$(".slidingDiv9").hide();
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
			*/
		
		$('#nanooption_1').click(function(e){$('.txt5').css("background", "#215968");
			$('.txt6').css("background", "#215968");
			$(this).css("background", "#D3DEE1");calllinks('centre_body_Nanosoft','1_1','Nanosoft_rm');});
			
		$('#nanooption_2').click(function(e){$('.txt5').css("background", "#215968");
			$('.txt6').css("background", "#215968");
			$(this).css("background", "#D3DEE1");calllinks('centre_body_Nanosoft','1_2','Nanosoft_mg');});
		
		$('#nanooption_2a').click(function(e){$('.txt5').css("background", "#215968");
			$('.txt6').css("background", "#215968");
			$(this).css("background", "#D3DEE1");calllinks('centre_body_Nanosoft','1_2','Nanosoft_soa');});

			
			
		$('#nanooption_3').click(function(e){$('.txt5').css("background", "#215968");
			$('.txt6').css("background", "#215968");
			$(this).css("background", "#D3DEE1");calllinks('centre_body_Nanosoft','1_3','Nanosoft_mg');});			
			
		
		
		
		
		

 });


 
	