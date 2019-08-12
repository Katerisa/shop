$(function() {
    $('.jcarousel').jcarousel({
        visible: 2

    });

    // Инициализация прокрутки слайдера

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});