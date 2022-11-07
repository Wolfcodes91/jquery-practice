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

    // configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1

    //cache DOM
    var $slider = $('#slider');
    var $slideCotainer = $slider.find('.slides');
    var $slides = $slideCotainer.find('.slide');
    //setInterval
    var interval;

    // animate margin-left
    function startSlider() {
        interval = setInterval(() => {
            $slideCotainer.animate({ 'margin-left': `-=${width}` }, animationSpeed, function () {
                currentSlide++;
                // if last slide, go to position 1 (0px)
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideCotainer.css('margin-left', 0)
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval)
    }
    //listen for mouseenter and pause
    //resume on mouseleave
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider)
    startSlider();


    //Ajax

    var $pokemon = $('#pokemon');
    var $name = $('#name');
    $('#add-pokemon').on('click', function () {
        $.ajax({
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${$name.val()}`,
            success: function (pokemon) {
                $pokemon.append(`<li>name: ${pokemon.name} <img src="${pokemon.sprites.front_default}"> </li>`)
                $pokemon.children().children('img').css({ height: '150px', width: '150px' })
                $name.val('')
            },
            error: function () {
                alert('error, non-existent pokemon');
            }
        });
    });
});