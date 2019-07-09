$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 90) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
});

/* start light slider**/
$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
        auto:true,
        speed:1000,
        pause:2500,
        slideMove: 1,
        item: 5,
        prevHtml: '<i class="fa fa-angle-left"></i>',
        nextHtml: '<i class="fa fa-angle-right"></i>',
        pager:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 4,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});

/* end light slider*/
$(document).ready(function () {
    $("#customer-slider").lightSlider({
        loop: true,
        keyPress: true,
        auto:true,
        speed:1000,
        pause:2500,
        slideMove: 1,
        item: 5,
        prevHtml: '<i class="fa fa-angle-left"></i>',
        nextHtml: '<i class="fa fa-angle-right"></i>',
        pager:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 4,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});

new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    easing:'easeInOutCubic',
    updateURL:true,
    ofset:100,


});

