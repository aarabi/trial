$("body").scroll(function(e)
{
		
		e.preventDefault();
		
		
	
});
  $('#blue').onmouseover=blueshow_hidden;
  function blueshow_hidden(){$('#blue_hidden').show();};
$('#blue').onmouseout=bluehide_hidden;
function bluehide_hidden(){$('#blue_hidden').hide();};

 $('#red').onmouseover=redshow_hidden;
  function redshow_hidden(){$('#red_hidden').show();};
$('#red').onmouseout=redhide_hidden;
function redhide_hidden(){$('#red_hidden').hide();};

 $('#green').onmouseover=greenshow_hidden;
  function greenshow_hidden(){$('#green_hidden').show();};
$('#green').onmouseout=greenhide_hidden;
function greenhide_hidden(){$('#green_hidden').hide();};

 $('#orange').onmouseover=orangeshow_hidden;
  function orangeshow_hidden(){$('#orange_hidden').show();};
$('#orange').onmouseout=orangehide_hidden;
function orangehide_hidden(){$('#orange_hidden').hide();};

$(document).ready(function()
 {
	 $('#header1').css('display','block');
	 $('#container').css('display','block');
	 $('#nanosoft').css('display','block');	
		

 });


 
	