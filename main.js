$(() => {
    $('.tab-panels .tabs li').on('click', function () {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        // figure out which panel to show
        var panelToShow = $(this).attr('rel');

        // hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        // show next panel
        function showNextPanel() {
            $(this).removeClass('active');
            $('#' + panelToShow).slideDown(300, function () {
                $(this).addClass('active');
            });
        }
    })

    //setInterval 

    // configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1
    
    //cache DOM
    var $slider = $('#slider');
    var $slideCotainer = $slider.find('.slides');
    var $slides = $slideCotainer.find('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideCotainer.animate({ 'margin-left': `-=${width}`}, animationSpeed, function () {
                currentSlide ++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideCotainer.css('margin-left', 0)
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval)
    }
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider )

    startSlider();
    // animate margin-left
    // if last slide, go to position 1 (0px)

    //listen for mouseenter and pause
    //resume on mouseleave
});