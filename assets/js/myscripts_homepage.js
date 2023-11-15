$(document).ready(function() {
    // Slider 1
    const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
        prevBtn.addEventListener('click', embla.scrollPrev, false);
        nextBtn.addEventListener('click', embla.scrollNext, false);
    };
    const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
        return () => {
            if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
            else prevBtn.setAttribute('disabled', 'disabled');
            if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
            else nextBtn.setAttribute('disabled', 'disabled');
        };
    };
    EmblaCarousel.defaultOptions = { loop: true };
    const wrap = document.querySelector('.embla');
    const viewPort = wrap.querySelector('.embla__viewport');
    const prevBtn = wrap.querySelector('.embla__button--prev');
    const nextBtn = wrap.querySelector('.embla__button--next');
    const embla = EmblaCarousel(viewPort, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
    setupPrevNextBtns(prevBtn, nextBtn, embla);
    embla.on('select', disablePrevAndNextBtns);
    embla.on('init', disablePrevAndNextBtns);
    jQuery(document).ready(function () {
        var wr = jQuery('.embla__slide__inner').width();
        if (wr < 220) {
            jQuery('.embla__slide__img').each(function () {
                jQuery(this).css('width', wr);
            });
        }
        jQuery(window).resize(function () {
            var wr = jQuery('.embla__slide__inner').width();
            if (wr < 220) {
                jQuery('.embla__slide__img').each(function () {
                    jQuery(this).css('width', wr);
                });
            }
        });
    });

    // Slider 2
    const setupPrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
        prevBtn1.addEventListener('click', embla1.scrollPrev, false);
        nextBtn1.addEventListener('click', embla1.scrollNext, false);
    };
    const disablePrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
        return () => {
            if (embla1.canScrollPrev()) prevBtn1.removeAttribute('disabled');
            else prevBtn1.setAttribute('disabled', 'disabled');
            if (embla1.canScrollNext()) nextBtn1.removeAttribute('disabled');
            else nextBtn1.setAttribute('disabled', 'disabled');
        };
    };
    EmblaCarousel.defaultOptions = { loop: true };
    const wrap1 = document.querySelector('.embla1');
    const viewPort1 = wrap1.querySelector('.embla__viewport1');
    const prevBtn1 = wrap1.querySelector('.embla__button--prev1');
    const nextBtn1 = wrap1.querySelector('.embla__button--next1');
    const embla1 = EmblaCarousel(viewPort1, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
    const disablePrevAndNextBtns1 = disablePrevNextBtns1(prevBtn1, nextBtn1, embla1);
    setupPrevNextBtns1(prevBtn1, nextBtn1, embla1);
    embla1.on('select', disablePrevAndNextBtns1);
    embla1.on('init', disablePrevAndNextBtns1);
    jQuery(document).ready(function () {
        var wr = jQuery('.embla__slide__inner1').width();
        if (wr < 220) {
            jQuery('.embla__slide__img1').each(function () {
                jQuery(this).css('width', wr);
            });
        }
        jQuery(window).resize(function () {
            var wr = jQuery('.embla__slide__inner1').width();
            if (wr < 220) {
                jQuery('.embla__slide__img1').each(function () {
                    jQuery(this).css('width', wr);
                });
            }
        });
    });


    // Slider bottom
    let slider = $('#moviesCarousel').find('.slick-track').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        responsive: [{"breakpoint":768,"settings":{"slidesToShow":2,"slidesToScroll":1}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":1}}]
    })
    $('#moviesCarousel').find('button.slick-next').on('click', function() {
        slider.slick('slickNext')
    })
    $('#moviesCarousel').find('button.slick-prev').on('click', function() {
        slider.slick('slickPrev')
    })
})