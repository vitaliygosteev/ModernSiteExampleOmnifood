$(document).ready(function()  {

    /* Sticky navigation */

    $('.js--section-features').waypoint(function(direction)  {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll on buttons */

    /* I'm hungry */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /* Show me */
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation button's scroll */

    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                    $('html, body').animate({
                    scrollTop: $(hash).offset().top
                    }, 1000, function(){
                    window.location.hash = hash;
                    });
            }
        });
    });

    /* Scroll animations */

    // Features
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%'
    });

    // iPhone app
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
        offset: '50%'
    });

    // Cities
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%'
    });

    // Plan box
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
        offset: '50%'
    });

    /* Mobile navigation */

    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});