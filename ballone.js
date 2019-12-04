$('.button').click(function () {

    $('.gameArea').show();

    var strike = $('li:last').find('.strike').text();
    var ball = $('li:last').find('.ball').text();
    var out = $('li:last').find('.out').text();

    function baseballGame() {

        start = setInterval(function () {
            var gameResult = new Array(4);

            gameResult[0] = '스트라이크!';
            gameResult[1] = '볼!';
            gameResult[2] = '안타! 다음 타자가 타석에 입장했습니다.';
            gameResult[3] = '아웃! 다음 타자가 타석에 입장했습니다.';

            var random = Math.floor(Math.random() * 4);


            $('li:last').clone().appendTo('ul');

            $('li.resultNum:last').find('span.result').text(gameResult[random]);

            $('li:last').find('.score').show();



            if (random == 0) {
                strike++;
                $('li:last').find('.strike').text(strike);


                if (strike == 3) {
                    $('li:last .result').text('아웃! 다음 타자가 타석에 입장했습니다.');

                    out++;
                    $('li:last').find('.out').text(out);
                    strike = 0;
                    $('li:last').find('.strike').text(strike);
                }
            } else if (random == 1) {
                ball++;
                $('li:last').find('.ball').text(ball);

                if (ball == 4) {
                    $('li:last .result').text('아웃! 다음 타자가 타석에 입장했습니다.');

                    out++;
                    $('li:last').find('.out').text(out);
                    ball = 0;
                    $('li:last').find('.ball').text(ball);
                }
            }

            if (out == 3) {
                var num = $('.result').text();
                var count = (num.match(/안타/g) || []).length;

                $('li:last .result').text('최종 안타 수 : ' + count);
                $('li:last .score').text('GAME OVER');

                clearInterval(start);

            }, 1000);

    }

    baseballGame();
});