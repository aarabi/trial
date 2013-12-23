$("body").scroll(function(e)
{
		
		e.preventDefault();
		
		
	
});
 
$(document).ready(function()
{
	
	 $('#header1').css('display','block');
	 $('#container').css('display','block');
	 $('#fb').qtip(
   {
	  
      content: 'Click Here to Interact with us on FaceBook!',
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
	 $('#twt').qtip(
   {
	  
      content: 'Click Here to Follow us on Twitter!',
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
		
})

	