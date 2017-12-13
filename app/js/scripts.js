/**
 * Created by alexrewrew on 09.09.17.
 */

$(document).ready(function () {
    "use strict";
    // ----- MENU -----

    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $('.menu-panel').toggleClass('open');
    });

    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-counter').text(i + '/' + slick.slideCount);
    });

    // SLICK SLIDER
    $(".slider-full").slick({
        // slide: ".slide",
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        dots: false
    });


    $(".slider-two").slick({
        // slide: ".slide",
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".slider-three").slick({
        // slide: ".slide",
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],


    });

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
                    slidesToShow: 3
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
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],


    });

    // ----- RANGE SLIDER -----
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

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

$(window).on('load resize', function() {
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


