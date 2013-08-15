$(document).ready(function(){
 $("#get_color").on('click', function(event){
 	event.preventDefault();
 	$.post('/color', function(serverResponse){
 		$('li').eq(serverResponse.cell -1).css('background-color', serverResponse.color);
 	});
 });
});