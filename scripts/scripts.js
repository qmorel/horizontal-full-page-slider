$(document).ready(function(){
	Resize();
	HorizontalSlider('wrapper-fullsize-slider', 'slide-portfolio','slide-button');

});
//Every resize of the window
$(window).resize(function(){
	Resize();
});

//Dynamically assign height
function Resize(){
	//Handler for .ready() called.
	var windowHeight = $(window).height() + 'px';
	$('.slides').css('height', windowHeight);
};

/* 
*	Fonction: HorizontalSlider
*	Arguments: 	wrapperSlider: class'name of the slider wrapper
*				slideClass: name of the class present on each full page slide
*				btnSlideClass: name of the class given to the slide buttons
*
*/
function HorizontalSlider(wrapperSlider, slideClass, btnSlideClass){
	//we define thje number of slides
	var nb_slide;
	nb_slide=$('.' + slideClass).length;
	//we define the max number for the css left property
	var leftMax = nb_slide * 100;
	/* width in % of the wrapper */
	$('.' + wrapperSlider).css('width', leftMax+'%');
	/* width in % of the slides */
	$('.' + slideClass).css('width', 100/nb_slide + '%')
	//here the difnie the 'left' css propoertu on each slides
	var leftCss = 0;
	var pas = 100 / nb_slide;
	$('.' + slideClass).each(function(){
		$(this).css('left', leftCss +'%');
		leftCss += pas;
	});
	/* begin event*/
	var left = 0;
	leftMax = leftMax - 100;
	$('.'+ btnSlideClass + '-right').click(function(){
		if (left < leftMax) {
			left += 100;
		}
		else{
			left = 0;
		}
		$('.' + wrapperSlider).animate({
			left: '-'+left+'%'
		}, 500);
	});
	$('.'+ btnSlideClass + '-left').click(function(){
		if (left > 0) {
			left -= 100;
		}
		else{
			left = leftMax;
		}
		$('.' + wrapperSlider).animate({
			left: '-'+left+'%'
		}, 500);
	});
};
