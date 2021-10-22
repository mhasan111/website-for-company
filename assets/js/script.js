jQuery(function ($) {
    'use strict';
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar-area').addClass('is-sticky');
            $(".fixed-top").addClass("non-fixed");
        } else {
            $('.navbar-area').removeClass('is-sticky');
            $(".fixed-top").removeClass("non-fixed");
        }
    });
    $("body").addClass("pre-loaded");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $("#scrolltop").addClass("scrolltopactive");
        } else {
            $("#scrolltop").removeClass("scrolltopactive");
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        items: 3,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $(".partner-carousel").owlCarousel({
        loop: true,
        items: 5,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1299: {
                items: 5
            }
        }
    });
    $(".project-carousel").owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: true,
        stagePadding: 350,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 1,
                stagePadding: 200,
            },
            992: {
                items: 1,
                stagePadding: 300,
            },
            1200: {
                items: 1,
                stagePadding: 350,
            },
            1550: {
                stagePadding: 440
            }
        }
    });
    $(".related-product-carousel").owlCarousel({
        loop: true,
        items: 3,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="icofont-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });
    $(".billing-title p").on("click", function () {
        $(".billing-address").addClass("none");
        $(".billing-address-input").addClass("active");
    })
    $(".video-popup").magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(".product-sort").niceSelect();
    var productSync1 = $(".product-slider-for");
    var productSync2 = $(".product-slider-nav");
    var flag = false;
    productSync1.owlCarousel({
        items: 1,
        smartSpeed: 1500,
        nav: false,
        dots: false,
        responsiveRefreshRate: 200,
    }).on("changed.owl.carousel", function (e) {
        if (!flag) {
            flag = true;
            productSync2.find(".owl-item").removeClass("synced").eq(e.item.index).addClass("synced");
            if (productSync2.find(".owl-item").eq(e.item.index).hasClass("active")) {} else {
                productSync2.trigger("to.owl.carousel", [e.item.index, true]);
            }
            flag = false;
        }
    });
    productSync2.on("initialized.owl.carousel", function () {
        productSync2.find(".owl-item").eq(0).addClass("synced");
    }).owlCarousel({
        margin: 30,
        nav: false,
        dots: false,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 2,
            },
            992: {
                items: 3
            }
        }
    }).on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        productSync1.trigger("to.owl.carousel", number);
    });
    $(".product-tab-list li").on("click", function () {
        var tab_modal = $(this).attr("data-product-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-information-item[data-product-details-tab=" + tab_modal + "]").addClass("active").siblings().removeClass("active");
    })
    $(".qu-btn").on("click", function (e) {
        var btn = $(this),
            inp = btn.siblings(".qu-input").val();
        if (btn.hasClass("inc")) {
            var i = parseFloat(inp) + 1;
        } else {
            if (inp > 1)(i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
            else i = 1;
        }
        btn.addClass("deact").siblings("input").val(i)
    })
    $('.gallery-grid').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    function newCounter() {
        var countDate = new Date("15 October 2022 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        var secs = Math.floor((distance % min) / sec);
        $(".day1").html(days + "<span>Days</span>")
        $(".hr1").html(hours + "<span>Hrs</span>")
        $(".min1").html(mins + "<span>Mins</span>")
        $(".sec1").html(secs + "<span>Sec</span>")
        if (distance < 0) {
            clearInterval(dealCounter1);
            $(".new-counter").html("Session Expired");
        }
    }
    setInterval(function () {
        newCounter();
    }, 1000);
    $(".search-option").on("click", function (e) {
        e.preventDefault();
        $(".search-overlay").addClass("search-overlay-show").removeClass("search-overlay-none");
        $(".search-overlay .form-control").focus();
    })
    $(".search-close").on("click", function () {
        $(".search-overlay").removeClass("search-overlay-show").addClass("search-overlay-none");
        $(".search-overlay .form-control").blur();
    })
    $(".side-topbar-option").on("click", "button", function () {
        $(".side-modal-wrapper").addClass("side-modal-wrapper-show");
        $(".side-modal").addClass("side-modal-show");
    })
    $(".side-modal-close").on("click", function () {
        $(".side-modal-wrapper").removeClass("side-modal-wrapper-show");
        $(".side-modal").removeClass("side-modal-show");
    })
    $("#contactForm, .newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
});