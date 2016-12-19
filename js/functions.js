$(function(){
    setTimeout(function(){
        $('.col1').colsAnimate({
            animDelay: 500,
            animSpeed: 500
        });
    },1000);

    setTimeout(function(){
        $('.col2').colsAnimate({
            animDelay: 500,
            animSpeed: 500,
            animDirection: 'down'
        });
    },3000);

    setTimeout(function(){
        $('.col3').colsAnimate({
            animDelay: 500,
            animSpeed: 1000,
            animDirection: 'right'
        });
    },4000);

    setTimeout(function(){
        $('.col4').colsAnimate({
            animDelay: 500,
            animSpeed: 1000,
            animDirection: 'left'
        });
    },5000);
});
