(function($) {  
$.fn.myScroll = function( speed ) { 
	if ( !speed ) var speed = 5000;  
	// coeur du plugin
	return this.each( function() {  
		$(this).click( function() {  
			var goscroll = false;  
			var the_hash = $(this).attr("href");  
			var regex = new RegExp("(.*)\#(.*)","gi");  
			if ( the_hash.match("\#") ) {  
				the_hash = the_hash.replace(regex,"$2");  
				if($("#"+the_hash).length>0) {  
					the_element = "#" + the_hash;  
					goscroll = true;  
				}  
				else if ( $("a[name=" + the_hash + "]").length>0 ) {  
					the_element = "a[name=" + the_hash + "]";  
					goscroll = true;  
				}  
				if ( goscroll ) {  
					var container = 'html';  
					if ( $.browser.webkit ) container = 'body';  
					$(container).animate( {  
						scrollTop: $(the_element).offset().top  
					}, speed, function() {
						tab_n_focus(the_hash)
						write_hash(the_hash);
					});  
					return false;  
				}  
			}  
		});  
	});
	// fonctions
	// �criture du hash
	function write_hash( the_hash ) {
		document.location.hash =  the_hash;
	}
	// accessibilit� au clavier
	function tab_n_focus( the_hash ) {  
		$(the_hash).attr('tabindex','0').focus().removeAttr('tabindex');  
	}
};  
// appel de la fonction sur toutes les ancres !
$('a').myScroll('slow');

// fonction de slide au chargement
function trigger_click_for_slide() {
	var the_hash = document.location.hash;
	if ( the_hash )
		$('a[href~="'+the_hash+'"]').trigger('click');
}
trigger_click_for_slide();

})(jQuery)
