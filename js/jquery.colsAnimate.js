(function($) {
    $.fn.colsAnimate = function(options) {
        var settings = $.extend( {
            'animDelay': 500,
            'animSpeed': 500,
            'animDirection': 'up', // example = 'animDirection': 'up' , 'animDirection': 'down' - Направление анимации
            'parentHeight' : 'auto' // example = 'parentHeight': 'auto' , 'parentHeight': 1000 - Высота родительского блока
        }, options);

        var start = false;

        if(settings.parentHeight == 'auto') {
            settings.parentHeight = this.parent().height();
        }

        this.each(function(index) {
            (function(that, i) {
                var timeOut = setTimeout(function() {
                    item = $(that);
                    item.addClass('active');
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
                    }
                    else if(settings.animDirection == 'down'){
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

                    //Рост значений вместе со столбиками

                    var valItem = $('.value[data-col='+ item.data('col') +']');

                    valItem.addClass('active');

                    var valStep = 10;
                    var valMax = valItem.data('val');
                    var valSpeed = 500/(valMax/valStep);

                    var valUp = setInterval(function(){
                        valOld = valItem.html()*1;
                        valNew = valOld + valStep;
                        if (valNew >= valMax){
                            valNew = valMax;
                            clearInterval(valUp);
                        }
                        valItem.html(valNew);
                    },valSpeed);

                    item.parent().animate({height: item_h}, settings.animSpeed);
                    settings.startDelay += settings.animDelay;

                }, 500 * i);

            })(this, index);
        });
    };
})(jQuery);



