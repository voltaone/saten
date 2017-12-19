$(document).ready(function () {
    "use strict";

    // ----- FILTER ACCORDION -----
    $('.filter-accordion--group-heading').click(function(e){
        e.preventDefault();
       $(this).siblings('.filter-accordion--group-panel').slideToggle();
       $(this).parent().toggleClass('active');
    });

    // ----- MENU -----

    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $('.menu-panel').toggleClass('open');
    });

    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    // $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.slider-counter').text(i + '/' + slick.slideCount);
    // });

    // SLICK SLIDER
    $(".slider-full").slick({
        // slide: ".slide",
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        dots: false
    });


    // $(".slider-two").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    //
    // $(".slider-three").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ],
    // });

    $('.slider-four').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-counter').text(i + '/' + slick.slideCount);
    });

    $(".slider-four").slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],


    });

    // ----- RANGE SLIDER -----

    var keypressSlider = document.getElementById('range-slider');
    var input0 = document.getElementById('range-slider-input0');
    var input1 = document.getElementById('range-slider-input1');
    var inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
        start: [12, 18416],
        connect: true,
        direction: 'ltr',
        range: {
            'min': [0],
            'max': 20000
        },
        format: wNumb({
            decimals: 0,
        })
    });

    keypressSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

    function setSliderHandle(i, value) {
        var r = [null, null];
        r[i] = value;
        keypressSlider.noUiSlider.set(r);
    }

// Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {

            var values = keypressSlider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = keypressSlider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {

                case 13:
                    setSliderHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        setSliderHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        setSliderHandle(handle, value - position);
                    }

                    break;
            }
        });
    });


    // ----- SELECT -----

    //CHOSEN
    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        no_results_text: "Нічого не знайдено"
    });
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


    // ----- ACCORDION -----
    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });

    // ----- TABS -----
    $(function () {
        $("#tabs").tabs();
    });

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });

    // SCROLLING CLASS CHANGE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".link-up").addClass("visible");
        }
        else {
            $(".link-up").removeClass("visible");
        }
    });

    // ANCHOR LINKS SCROLLING
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });
});

// !!! RESPONSIVE SCRIPTS !!!

$(window).on('load resize', function () {
    'use strict';
    if (window.matchMedia("(max-width: 767px)").matches) {
        // MENU
        $('#first, #login').appendTo('#mob-nav-bottom');
        $('#button-call').appendTo('#first');
        $('#third').appendTo('#mob-nav-top .col-12');
        $('#second').appendTo('#mob-nav-top');
        $('.menu-user').appendTo('#panel-2');


    } else if (window.matchMedia("(min-width: 768px)").matches) {
        // MENU
        $('#first').insertAfter('#logo');
        $('#second').insertAfter('#panel');
        $('#third').appendTo('#fourth');
        $('#login').appendTo('#login-here');
        $('.menu-user').appendTo('#panel');
    }
});


