$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        dotsContainer: '.owl-dots',

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.owl-dot').click(function() {
        $('.owl-dot').removeClass('active')
        $(this).addClass('active')

    });



    $('.menu--toggle').click(function() {
        $('.menu--toggle').toggleClass("active");
        event.stopPropagation();
        $('.navbar').slideToggle();
        $('.nav-toggle').addClass('active')



    });



    $('.close-menu').click(function() {
        $('.navbar').hide();
        $('.nav__toggle').removeClass('active')
    });

});


AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 150,
    delay: 0,
    duration: 550,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',

});