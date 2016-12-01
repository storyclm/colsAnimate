$(function(){
    setTimeout(function(){
        $('.col').colsAnimate({
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

});
