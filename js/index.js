/**
 * Created by mark on 27.04.17.
 */
$(document).ready(function () {

    $(".main-navigation__show-btn").click(function () {
        $(".main-navigation__list").slideToggle("slow");
        $(this).toggleClass("main-navigation__list--active");
    });

    $(".main-header-bot__down-btn").click(function () {
        $(".main-header-top").slideToggle("slow");
        $(this).toggleClass("main-header-top--active");
    });

    //RecentWorkSlider Надо найти оптимальное решение, пока так!

    $(".recent-work-slider__item:first-child").hover(function () {
        $("#1-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(2)").hover(function () {
        $("#2-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(3)").hover(function () {
        $("#3-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(4)").hover(function () {
        $("#4-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(5)").hover(function () {
        $("#5-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(6)").hover(function () {
        $("#6-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(7)").hover(function () {
        $("#7-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(8)").hover(function () {
        $("#8-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(9)").hover(function () {
        $("#9-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(10)").hover(function () {
        $("#10-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(11)").hover(function () {
        $("#11-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });
    $(".recent-work-slider__item:nth-child(12)").hover(function () {
        $("#12-recent-work-descr").slideToggle("fast");
        $(this).toggleClass("recent-work-slider__description--active");
    });

    //****************************************
    $(".portfolio__item:first-child").hover(function () {
        $(".portfolio__item:first-child .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(2)").hover(function () {
        $(".portfolio__item:nth-child(2) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(3)").hover(function () {
        $(".portfolio__item:nth-child(3) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(4)").hover(function () {
        $(".portfolio__item:nth-child(4) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(5)").hover(function () {
        $(".portfolio__item:nth-child(5) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(6)").hover(function () {
        $(".portfolio__item:nth-child(6) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(7)").hover(function () {
        $(".portfolio__item:nth-child(7) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(8)").hover(function () {
        $(".portfolio__item:nth-child(8) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });
    $(".portfolio__item:nth-child(9)").hover(function () {
        $(".portfolio__item:nth-child(9) .portfolio__item-descr").slideToggle("fast");
        $(this).toggleClass("portfolio__item-descr--active");
    });

    // Progress Bar
    setTimeout(function(){
        $('.skills__meter .skills__meter-content').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");
            var current_perc = 0;
            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }
                me.text((current_perc)+'%');
            }, 10);
        });
    },10);

    // Accordion
    $("#accordion").accordion({
        autoHeight: false,
        //active: '.selected',
        //selectedClass: 'active',
        icons: { "header": "fa-plus-square", "activeHeader": "fa-minus-square"}
    });

    // Slick

    $(".promo-slider__item-list").slick({
        touchMove: false,
        autoplay: true
    });
    $(".recent-work-slider__item-list").slick({
        touchMove: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        rows: 2,
        slidesPerRow: 3
    });
    $(".recent-blog-slider__item-list").slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $(".featured-clients-slider__item-list").slick({
        slidesToShow: 4,
        slidesToScroll: 1
    })
    $(".testimonials-slider__item-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false,
        autoplay: true
    });
});