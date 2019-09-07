$(document).ready(function(){
    // Находим блок карусели
    var carousel = $(".jcarousel");
    carousel.owlCarousel({
        loop: true,
        items: 4,
        pagination: false,
        lazyLoad: true,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    // Запускаем плагин карусели
    carousel.owlCarousel();
    $(".next").click(function(){
        carousel.trigger("owl.next");
    });
    $(".prev").click(function(){
        carousel.trigger("owl.prev");
    });

    var carousel_story = $(".carousel-stories");
    carousel_story.owlCarousel( {
        loop: true,
        items: 1,
        navigation: false,
        slideSpeed: 700,
        autoplay: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    carousel_story.owlCarousel({
        pagination: true,
        paginationNumbers: true
    });
});