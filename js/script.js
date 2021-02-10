//$(document).ready(function() {
//$(window).scroll(function(){
//	if(document.body.scrollTop > 300)
//		$('#fixmenu').fadeIn( "slow", function() { });
//	else    
//		$('#fixmenu').fadeOut( "slow", function() { });
//});
//
//$('a#srolltotop').click(function(){
//	$('html, body').animate({scrollTop:0}, 100);
//	return false;
//});
//});
posicionarMenu();

$(window).scroll(function() {    
   posicionarMenu();
});

function posicionarMenu() {
   var altura_del_header = $('.header').outerHeight(true);
   var altura_del_menu = $('.menu').outerHeight(true);

   if ($(window).scrollTop() >= altura_del_header){
       $('.menu').addClass('fixed');
       $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
   } else {
       $('.menu').removeClass('fixed');
       $('.wrapper').css('margin-top', '0');
   }
}
