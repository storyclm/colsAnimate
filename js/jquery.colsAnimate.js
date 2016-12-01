(function($) {
    $.fn.colsAnimate = function(options) {
        var settings = $.extend( {
            'startDelay': 500,
            'animDelay': 500,
            'animSpeed': 500,
            'animDirection': 'up', // example = 'animDirection': 'up' , 'animDirection': 'down' - Направление анимации
            'parentHeight' : 'auto' // example = 'parentHeight': 'auto' , 'parentHeight': 1000 - Высота родительского блока
        }, options);

        if(settings.parentHeight == 'auto') {
            settings.parentHeight = this.parent().height();
        }

        this.each(function() {
            item = $(this);
            left_pos = item.position().left;
            bottom_pos = settings.parentHeight - item.position().top - item.height();
            top_pos = item.position().top;
            item_w = item.width();
            item_h = item.height();
            if(settings.animDirection == 'up'){
                item.css({
                    'top': 0,
                    'left' : 0
                });
                item.wrap("<div class='col-wrap'></div>");
                item.parent().css({
                    'left': left_pos,
                    'bottom': bottom_pos,
                    'width': item_w
                });
            } else if(settings.animDirection == 'down'){
                item.css({
                    'top': 'auto',
                    'left' : 0,
                    'bottom': 0
                });
                item.wrap("<div class='col-wrap'></div>");
                item.parent().css({
                    'left': left_pos,
                    'top': top_pos,
                    'width': item_w
                });
            }
            item.parent().stop().delay(settings.startDelay).animate({height: item_h}, settings.animSpeed);
            settings.startDelay += settings.animDelay;
        });
    };
})(jQuery);



