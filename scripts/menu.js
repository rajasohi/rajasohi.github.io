/* 
Final Project
Author: Gurveer Sohi
Student# A00901329	
*/


(function(d){
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.btn-menu');	
	$btn.addEventListener('click', function(){		
		$nav.classList.toggle('show');		
	});	
	
})(document);
$(document).ready(function(){
	$('#slideshow .houses-slider').slick({
		autoplay:true,
		autoplaySpeed: 2000,
		speed:3500,
		dots:true,
	});
});
function myFunction(x) {
	x.classList.toggle("change");
}