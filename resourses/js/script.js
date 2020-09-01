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

});