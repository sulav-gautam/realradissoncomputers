
        // Wait for the DOM to be ready
        document.addEventListener('DOMContentLoaded', function () {
            // Set the interval for auto-scrolling (in milliseconds)
            const interval = 3000; // 3 seconds
    
            // Get the carousel element
            const carousel = document.getElementById('header-carousel');
    
            // Function to scroll to the next slide
            function scrollToNextSlide() {
                const currentSlideIndex = getCurrentSlideIndex();
                const totalSlides = getTotalSlides();
    
                // Calculate the index of the next slide
                const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
    
                // Use Bootstrap's carousel method to go to the next slide
                $(carousel).carousel(nextSlideIndex);
            }
    
            // Function to get the index of the current active slide
            function getCurrentSlideIndex() {
                return $(carousel).find('.carousel-item.active').index();
            }
    
            // Function to get the total number of slides in the carousel
            function getTotalSlides() {
                return $(carousel).find('.carousel-item').length;
            }
    
            // Set the interval for auto-scrolling
            setInterval(scrollToNextSlide, interval);
        });




(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 300,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 300,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

