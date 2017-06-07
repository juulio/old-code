/*
 * <Client Name>
 * 
 * <Project Name>
 *
 * Global Namespace
 */
var clientName = window.clientName || {};

/*
 * Global logic
 * @namespace
 */
(function (context, $) {

    'use strict';

    var vars = {
            controller : null
        };

    /**
     * Initializes the module.
     * @private
     */
    function init() {

        // 
        $("nav a").on("click", function (e) {
            e.preventDefault();
            var $newElement = $($(this).attr("href"));
            $("html, body").animate({ scrollTop: $newElement.position().top });
            $newElement.carousel(0);
        });

        // Pause all carousels
        $('.carousel').carousel('pause');



        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            maxHeight = windowWidth * 0.75,
            newHeight = windowHeight;

        if (windowHeight > maxHeight) {
            // width grande
            newHeight = maxHeight;
        }

        // Set the height of the slides
        $(".carousel-inner, #home").height(newHeight);

        //var newWidthPercentage = (windowWidth / (0.75 * windowWidth) * 100),
        var newWidthPercentage = (windowWidth / (0.75 * windowWidth) * 100),
            newHeightPercentage =  (windowHeight / (0.75 * windowHeight) * 100);
            
        //$("#home").css({ backgroundSize : newWidthPercentage + "% 130%" });







        // Show captions on arrow navigation
        $(".carousel-control").on("click", function () {
            var $captions = $(this).parent().find(".carousel-caption");

            $captions.animate({ opacity : 1 }, 700);

            setTimeout(function () {
                $captions.animate({ opacity : 0 }, 700);
            }, 5000);
        });








        vars.controller = new ScrollMagic();

        $(".item").each(function () {
            var $this = $(this);

            // Show/hide the captions on mouse over
            $(".carousel-caption", $this).on("mouseenter", function (e) {
                var $this = $(this);

                $this.animate({ opacity : 1 }, 700);
                setTimeout(function () {
                    $this.animate({ opacity : 0 }, 700);
                }, 5000);
                e.stopPropagation();
            });

            // Show/hide the captions on mouse over
            $(".carousel-caption", $this).on("mouseleave", function (e) {
            //$(".carousel-caption").on("mouseout", function (e) {
                e.stopPropagation();
                var $this = $(this);

                $this.animate({ opacity : 0 }, 700);
                /*setTimeout(function () {
                    $this.animate({ opacity : 0 }, 700);
                }, 5000);*/
            });

            //newWidthPercentage = newWidthPercentage + 0.2;
            //newHeightPercentage = newHeightPercentage + 0.2;

            new ScrollScene({ triggerElement : $this, duration: $(window).height(), triggerHook : "onEnter" })
                            .setTween(new TimelineMax().add([
                                    TweenMax.to($this, 1, { backgroundSize: newWidthPercentage + "% " + newHeightPercentage+ "%", ease : Linear.easeNone }),
                                    TweenMax.to($this.find(".central-caption"), 1, { top: "36%", ease : Linear.easeNone })
                                ]))
                            .addTo(vars.controller)
                            .on("enter", function (e) {

                                // Menu activations
                                $('nav a').removeClass("active");
                                $('nav a[href="#' + $this.parents(".carousel").attr("id") + '"]').addClass("active");

                                $(".carousel-caption", $this).animate({ opacity : 1 }, 700);
                            });


            new ScrollScene({ triggerElement : $this, duration: $(window).height(), triggerHook : "onLeave" })
                            .addTo(vars.controller)
                            .on("leave", function (e) {
                                // Show/hide the captions
                                setTimeout(function () {
                                    $(".carousel-caption", $this).animate({ opacity : 0 }, 700);
                                }, 5000);
                            });
        });
    }



    $(init);

}(clientName, jQuery));
