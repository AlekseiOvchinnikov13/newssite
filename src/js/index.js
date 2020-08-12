$(function () {
    /*new WOW({
        animateClass: 'animate__animated'
    }).init();*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });

    $('#toTop').on('click', function () {
        $('html,body').animate({
                scrollTop: $('.header').offset().top + "px"
            },
            {
                duration: 800
            });
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list ul').slideToggle();
    });
});