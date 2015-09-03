(function(jQuery){
    jQuery.fn.lzload = function(_options, callback){
        var options = {
            events: 'onscroll resize',
            padding: {
                bottom: 0,
                top: 0,
                left: 0,
                right: 0
            }
        };

        options = jQuery.extend(true, options, _options);

        var elements = this;
        elements.data('lzloaded', false);

        function checkVisible($ele){
            var $win = jQuery(window);

            var viewport = {
                top: $win.scrollTop(),
                left: $win.scrollLeft()
            };

            viewport.right  = viewport.left + $win.width();
            viewport.bottom = viewport.top  + $win.height() - options.padding.bottom;

            var bounds      = $ele.offset();
            bounds.right    = bounds.left   + $ele.outerWidth();
            bounds.bottom   = bounds.top    + $ele.outerHeight();

            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        }

        function runCheck(e){
            elements.each(function(){
                var $ele = jQuery(this);
                var visible = checkVisible($ele);
                if(visible && $ele.data('lzloaded') === false){
                    $ele.data('lzloaded', true);
                    callback($ele);
                }
            });
        }

        // jQuery(window).on(options.events, runCheck); can't run if scrolling doens't happen in window
        runCheck(); // Run once
        setInterval(runCheck, 250); // temp fix
    };

})(jQuery);
