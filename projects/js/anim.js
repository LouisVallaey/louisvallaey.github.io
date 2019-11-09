$(function () {
    $('.icon-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $('section.stuff').offset().top
        }, 'slow');
        return false;
    });
});
