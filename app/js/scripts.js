/**
 * Created by alexrewrew on 09.09.17.
 */

$(document).ready(function () {
    "use strict";

    // ----- BRAND -----
    $('#brand-trigger').click(function (e) {
        e.preventDefault();
        $('.brands-menu').toggleClass('active');
    })

    // ----- TYPE CHOOSE -----
    $('.type li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // ----- BUTTON FAST HOVER -----
    $('.button-fast').hover(function () {
        $(this).siblings().css('color', '#000')
    }, function () {
        $(this).siblings().css('color', '#fff')
    })

    // ----- ACCORDION -----
    $(function () {
        $("#accordion3").accordion({
            heightStyle: "content"
        });
    });

    // ----- MAIN SLIDER -----
    $('.slide-svg svg path').hover(function () {
        var data = $(this).attr('data-item');

        if ($('.preview-block[data-item=' + data + ']').index() === 2 || $('.preview-block[data-item=' + data + ']').is(':nth-child(2)')) {
            $('.preview-block[data-item=' + data + ']').hide();
        }

        $('.preview-block[data-item=' + data + ']').show('fast').prependTo('.preview');
        $('.preview-block:nth-child(3)').hide('fast');
    });


    // ----- FILTER ACCORDION -----
    $('.filter-accordion--group-heading').click(function (e) {
        e.preventDefault();
        $(this).siblings('.filter-accordion--group-panel').slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('.credit-heading').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    })

    // ----- MENU -----
    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $('html, body').toggleClass('open');
    })

    // ----- QUANTITY -----

    $('.quantity-button--minus').click(function () {
        var val = parseInt($(this).siblings('.quantity-input').val());
        if (val != 1) {
            val--;
            $(this).siblings('.quantity-input').val(val);
        }
    });

    $('.quantity-button--plus').click(function () {
        var val = parseInt($(this).siblings('.quantity-input').val());
        val++;
        $(this).siblings('.quantity-input').val(val);
    });

    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    $('.slider-product').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-product-counter').text(i + '/' + slick.slideCount);
    });

    // SLICK SLIDER
    $(".slider-full").slick({
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        dots: false
    });

    $('.slider-four').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-four-counter').text(i + '/' + slick.slideCount);
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
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


    // ----- SELECT -----

    //CHOSEN
    $(".chosen-select").chosen({
        no_results_text: "Ничего не найдено"
    });
    //CHOSEN
    $(".chosen-select-region").chosen({
        no_results_text: "Ничего не найдено",
        placeholder_text_single: "dfdfdf"
    });
    $('.chosen-search-input').attr('placeholder', 'Введите первую букву области')

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

});

// !!! RESPONSIVE SCRIPTS !!!

$(window).on('load resize', function () {
    'use strict';
    if (window.matchMedia("(max-width: 767px)").matches) {
        // MENU
        $('#first, .login').appendTo('#mob-nav-bottom');
        $('#button-call').appendTo('#first');
        $('#third').appendTo('#mob-nav-top .col-12');
        $('#second').appendTo('#mob-nav-top');
        $('.menu-user').appendTo('#panel-2');
        $('.product-filter--brand').appendTo('#productBrand');
        // ----- TABS -----
        $(function () {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        });

        $(function () {
            $("#accordion2").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
        });

        // SLICK SLIDER
        $(".preview").slick({
            dots: false,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            infinite: false
        });

        $('.accordion-button').click(function () {
            $('.accordion-button').not(this).each(function () {
                $(this).addClass('hidden')
            });

            if ($(this).hasClass('ui-accordion-header-active')) {
                $('.accordion-button').removeClass('hidden');
            }
        });


    } else if (window.matchMedia("(min-width: 768px)").matches) {
        // MENU
        $('#first').prependTo('#panel .row');
        $('#button-call').appendTo('body');
        $('#second').insertAfter('#panel');
        $('#third').appendTo('#fourth');
        $('.login').appendTo('#login-here');
        $('.menu-user').appendTo('#panel .col-6');
        // ----- TABS -----
        $(function () {
            $("#tabs").tabs();
        });

        // SCROLLING CLASS CHANGE
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("nav").addClass("scroll");
            }
            else {
                $("nav").removeClass("scroll");
            }

            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                $('.link-call').addClass('bottom');
            } else {
                $('.link-call').removeClass('bottom');
            }


        });
    }
});


