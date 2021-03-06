/**
 * Created by alexrewrew on 09.09.17.
 */

$(document).ready(function () {
    "use strict";

    // ----- EDIT PROFILE -----
    $('.link-edit').click(function (e) {
        e.preventDefault();
        $('.form-cabinet').addClass('form-cabinet-edit');
        $('.cabinet-data--text .form-group input').removeAttr('disabled');
    });

    $('.cabinet-data--text .button').click(function (e) {
        e.preventDefault();
        $('.form-cabinet').removeClass('form-cabinet-edit');
        $('.cabinet-data--text .form-group input').attr('disabled', '');
    });

    // ----- BRAND -----
    $('#brand-trigger').click(function (e) {
        e.preventDefault();
        $('.brands-menu').toggleClass('active');
    });

    // ----- TYPE CHOOSE -----
    $('.type li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // ----- COLORS CHOOSE -----
    $('.filter-colors li a').click(function (e) {
        e.preventDefault();
        $('.filter-colors li a').removeClass('active');
        $(this).addClass('active');

    });

    // ----- BUTTON FAST HOVER -----
    $('.button-fast').hover(function () {
        $(this).siblings().css('color', '#000');
    }, function () {
        $(this).siblings().css('color', '#fff');
    });

    // ----- ACCORDION -----
    $("#accordion3").accordion({
        heightStyle: "content"
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
    });

    function getFocus(campo){
        $(window).bind('resize', function() {
            var windowWidth = $( window ).width();
            if(windowWidth <= 768) {
                $(campo).focus();
            }
        });

    }


    // ----- MENU -----
    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $('html, body').toggleClass('open');

    });

    $('.form-nav input').click(function() {
            getFocus(this);
    });




    // ----- QUANTITY -----

    // $('.quantity-button--minus').click(function () {
    //     var val = parseInt($(this).siblings('.quantity-input').val());
    //     if (val != 1) {
    //         val--;
    //         $(this).siblings('.quantity-input').val(val);
    //     }
    // });
    //
    // $('.quantity-button--plus').click(function () {
    //     var val = parseInt($(this).siblings('.quantity-input').val());
    //     val++;
    //     $(this).siblings('.quantity-input').val(val);
    // });

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
                    slidesToShow: 4,
                    slidesToScroll: 4
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
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
    $('.chosen-search-input').attr('placeholder', 'Введите первую букву области');

    // ----- NAVIGATION DROPDOWN ----

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.menu-nav--dropdown-link').click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.menu-nav--dropdown-menu').slideUp('fast');

            } else {
                $('.menu-nav--dropdown-menu').slideUp('fast');
                $('.menu-nav--dropdown-link').removeClass('active');
                $(this).addClass('active');
                $(this).siblings('.menu-nav--dropdown-menu').slideToggle('fast');
            }
        });

        $('.filter-catalog-dropdown').click(function () {
            $(this).toggleClass('active');
            $(this).siblings('.filter-top-catalog').slideToggle('fast');
        });
    }

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
        $("#accordion").accordion({
            heightStyle: "content"
        });

        $("#accordion2").accordion({
            // collapsible: true,
            active: false,
            heightStyle: "content"
        });

        // SLICK SLIDER
        $(".preview").slick({
            dots: false,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            infinite: false
        });

        // var deli = $('#accordion2 .accordion-button');
        //
        // deli.click(function () {
        //
        //     if ($(this).hasClass('active')) {
        //         deli.removeClass('hidden').removeClass('active');
        //     } else {
        //         $(this).addClass('active');
        //         deli.addClass('hidden');
        //     }
        // });

    //    ui-state-default ui-accordion-header-active ui-state-active

    //    ui-accordion-header-collapsed ui-corner-all ui-state-default


    } else if (window.matchMedia("(min-width: 768px)").matches) {
        // MENU
        $('#first').prependTo('#panel .row');
        $('#button-call').appendTo('body');
        $('#second').insertAfter('#panel');
        $('#third').appendTo('#fourth');
        $('.login').appendTo('#login-here');
        $('.menu-user').appendTo('#panel .col-6');
        $('.product-filter--brand').prependTo('.product-filter')

        // ----- TABS -----
        $("#tabs").tabs();

        $('.menu-nav--dropdown-link').click(function (e) {
            e.preventDefault();
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


