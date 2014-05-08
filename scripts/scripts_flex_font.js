$(document).ready(function(){
	$.fn.flexfont = function(base_width, base_fs) {
		if(typeof(base_width)==='undefined')
			base_width = false;
		if(typeof(base_fs)==='undefined')
			base_fs = false;   

		if($(this).length) {
			var elems = this;
			$.each(elems, function(index, elem){
				var classes = $(elem).attr('class').split(" ");
				$.each(classes, function(index, cssclass){
					if(cssclass.match(/^flexfont[-]{1}[0-9]{1,}[-]{1}[0-9]{1,}/)) {
						var params = cssclass.split('-');
						if(!base_width)
							base_width = params[1];
						if(!base_fs)
							base_fs = params[2];
					}
				});

				if(base_fs == false)
					base_fs = 1;
				if(base_width != false) {
					$(elem).css('font-size', ($(elem).outerWidth() * base_fs)/base_width + 'em');
					$(elem).css('line-height', '1.2em');
				}
			});
		}
	}
	$('.flexfont').resize(function(e){
		$(this).flexfont();
	});
	$('.flexfont').flexfont();
})