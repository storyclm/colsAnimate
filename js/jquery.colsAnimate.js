(function($) {
    $.fn.colsAnimate = function(options) {
        var settings = $.extend( {
            'animDelay': 500,
            'animSpeed': 500,
            'animDirection': 'up', // example = 'animDirection': 'up', 'down', 'left', 'right' - Направление анимации
            'parentHeight': 'auto', // example = 'parentHeight': 'auto' , 'parentHeight': 1000 - Высота родительского блока
            'parentWidth': 'auto', // example = 'parentWidth': 'auto' , 'parentWidth': 1000 - Ширина родительского блока
            'valueStep': 10
        }, options);

        var start = false;

        if(settings.parentHeight == 'auto') {
            settings.parentHeight = this.parent().height();
        }
        if(settings.parentWidth == 'auto') {
            settings.parentWidth = this.parent().width();
        }

        this.each(function(index) {
            (function(that, i) {
                var timeOut = setTimeout(function() {
                    item = $(that);
                    item.addClass('active');
                    left_pos = item.position().left;
                    top_pos = item.position().top;
                    bottom_pos = settings.parentHeight - item.position().top - item.height();
                    right_pos = settings.parentWidth- item.position().left - item.width();
                    item_w = item.width();
                    item_h = item.height();

                    switch (settings.animDirection) {
                        case 'up':
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
                            break;
                        case 'down':
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
                            break;
                        case 'left':
                            item.css({
                                'top': 0,
                                'left' : 'auto',
                                'bottom': 0,
                                'right' : 0
                            });
                            item.wrap("<div class='col-wrap'></div>");
                            item.parent().css({
                                'right': right_pos,
                                'top': top_pos,
                                'height': item_h
                            });
                            break;
                        case 'right':
                            item.css({
                                'top': 0,
                                'left' : 0,
                                'bottom': 0
                            });
                            item.wrap("<div class='col-wrap'></div>");
                            item.parent().css({
                                'left': left_pos,
                                'top': top_pos,
                                'height': item_h
                            });
                            break;
                    }

                    //Рост значений вместе со столбиками

                    var valItem = $('.value[data-col='+ item.data('col') +']');

                    valItem.addClass('active');

                    var valStep = settings.valueStep;
                    var valMax = valItem.data('val');
                    var valSpeed = settings.animSpeed/(valMax/valStep);

                    var valUp = setInterval(function(){
                        valOld = valItem.html()*1;
                        valNew = valOld + valStep;
                        if (valNew >= valMax){
                            valNew = valMax;
                            clearInterval(valUp);
                        }
                        valItem.html(valNew);
                    },valSpeed);

                    if(settings.animDirection == 'up' || settings.animDirection == 'down'){
                        item.parent().animate({height: item_h}, settings.animSpeed);
                    } else {
                        item.parent().animate({width: item_w}, settings.animSpeed);
                    }

                    settings.startDelay += settings.animDelay;

                }, settings.animDelay * i);

            })(this, index);
        });
    };
})(jQuery);



