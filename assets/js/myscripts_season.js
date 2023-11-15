$(document).ready(function() {
    let slider = $('#tv-show-related').find('.tv-shows__inner').slick({
        "slidesToShow":5,
        "slidesToScroll":5,
        "dots":false,
        "arrows":true,
        "autoplay":false,
        "responsive":[{"breakpoint":767,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}}]
    })
    $('#tv-show-related').find('button.slick-next').on('click', function() {
        slider.slick('slickNext')
    })
    $('#tv-show-related').find('button.slick-prev').on('click', function() {
        slider.slick('slickPrev')
    })
})