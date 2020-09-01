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

});