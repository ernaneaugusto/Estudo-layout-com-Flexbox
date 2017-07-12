$(document).ready(function(){

	var largura = $(window).width();

	if (largura < 860) {
		$("nav ul").addClass("menu-mobile");
		$(".itens-login").addClass("visible");
	}
	else{		
		$("nav ul").removeClass("menu-mobile");
		$(".itens-login").removeClass("visible");		
	}

	$(".btn-abrir-menu").click(function(){
		$("nav ul").toggle("slow");
		$("nav ul").removeClass("hidden");		
	});	

	

	window.addEventListener('resize', function(){

		

		if (window.innerWidth > 860) {
			$("nav ul").removeClass("hidden");		
			$("nav ul").removeClass("menu-mobile");	
		}
		else{
			$("nav ul").addClass("menu-mobile");
			$(".itens-login").addClass("visible");			
		}
	});

});