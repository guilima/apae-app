;(function ($) {
    'use strict';
    var $body    = $('html, body'),
        content  = $('#content').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 250,
                render: function (url, $container) {
                    content.toggleAnimationClass('is-exiting');
                    $body.animate({
                        scrollTop: 0
                    });
                }
            },
            callback : function(url, $container, $content) {
                pageScripts();
            }
            
        }).data('smoothState');
})(jQuery);



function pageScripts(){
 	var pageId = document.title;
	if(pageId == 'APAE | Eventos'){


	var tag = document.createElement('script');
    tag.src = "js/vendors/jquery.calendario.js";
    var tag2 = document.createElement('script');
    tag2.src = "js/data.js";
    var firstScriptTag = document.getElementsByTagName('script')[3];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    firstScriptTag.parentNode.insertBefore(tag2, firstScriptTag);
}
}