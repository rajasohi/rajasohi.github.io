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
/*$(document).ready(function(){
	$('#slideshow .houses-slider').slick({
		autoplay:true,
		autoplaySpeed: 2000,
		speed:3500,
		dots:true,
	});
});*/
function myFunction(x) {
	x.classList.toggle("change");
}
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});
$(document).ready(function(){ 
	$('#slideshow .houses-slider').slick({ 
		dots: true, 
		arrows: true, 
		infinite: true, 
		slidesToShow: 1, 
		slidesToScroll: 1 
		}); 
});
