$(window).on('load', function () {
    if ($('.how_get_card-steps-box-img-progress').length) {

        $('.how_get_card-steps-box-img-progress').asPieProgress({
            namespace: '',
            goal: 5000,
            min: 0,
            max: 5000,
            speed: 50,
            easing: 'linear',
            trackcolor: '#e0e0e0',
            fillcolor: 'none',
            barcolor: '#fe5000',
            barsize: '4'
        });

        $('.how_get_card-steps-box.step2 .how_get_card-steps-box-img-progress').asPieProgress('start');

        function step1() {
            $('.how_get_card-steps-box').removeClass('active');
            $('.how_get_card-steps-box-progress-line').removeClass('active_line');
            $('.how_get_card-steps-box.step1').addClass('active');
            $('.how_get_card-steps-box-img-progress').asPieProgress('start');
            $('.how_get_card-steps-box-img-progress').asPieProgress('reset');
            $('.how_get_card-steps-box.step1 .how_get_card-steps-box-img-progress').asPieProgress('start');
            setTimeout(function () {
                $('.how_get_card-steps-box.step1 .how_get_card-steps-box-progress-line').addClass('active_line');
            }, 5000);

            function step2() {
                $('.how_get_card-steps-box').removeClass('active');
                $('.how_get_card-steps-box.step2').addClass('active');
                $('.how_get_card-steps-box-progress-line').removeClass('active_line');
                $('.how_get_card-steps-box-img-progress').asPieProgress('reset');
                $('.how_get_card-steps-box.step2 .how_get_card-steps-box-img-progress').asPieProgress('start');
                setTimeout(function () {
                    $('.how_get_card-steps-box.step2 .how_get_card-steps-box-progress-line').addClass('active_line');
                }, 5000);
            }

            var timer_step_2 = setTimeout(step2, 5500);

            function step3() {
                $('.how_get_card-steps-box').removeClass('active');
                $('.how_get_card-steps-box.step3').addClass('active');
                $('.how_get_card-steps-box-progress-line').removeClass('active_line');
                $('.how_get_card-steps-box-img-progress').asPieProgress('reset');
                $('.how_get_card-steps-box.step3 .how_get_card-steps-box-img-progress').asPieProgress('start');
                setTimeout(function () {
                    $('.how_get_card-steps-box.step3 .how_get_card-steps-box-progress-line').addClass('active_line');
                }, 5000);
            }

            var timer_step_3 = setTimeout(step3, 11000);
            var timer_step_4 = setTimeout(step1, 16500);
        }

        step1();
    }
});