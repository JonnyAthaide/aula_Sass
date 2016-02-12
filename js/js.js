$(function(){
	$('nav#navigation ul li a').hover(function(){
		var newWidth = $(this).width() + 30; //30 eh a soma dos padding de 15px para todos os lados
		var newLeft = $(this).position().left;

		$('span.line').stop().animate({
			width: newWidth,
			left: newLeft
		}, 250);
	});
})