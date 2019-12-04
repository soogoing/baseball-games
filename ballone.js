$('.button').click(function () {

    $('.gameArea').show();

    var strike = $('li:last').find('.strike').text();
    var ball = $('li:last').find('.ball').text();
    var out = $('li:last').find('.out').text();

    //야구 게임 이벤트
    function baseballGame() {

        start = setInterval(function () {
            var gameResult = new Array(3);

            gameResult[0] = '스트라이크!';
            gameResult[1] = '볼!';
            gameResult[2] = '안타! 다음 타자가 타석에 입장했습니다.';

            var random = Math.floor(Math.random() * 3);

            //리스트 복제
            $('li:last').clone().appendTo('ul');

            //경기 결과 출력
            $('li.resultNum:last').find('span.result').text(gameResult[random]);

            //스코어 보여주기
            $('li:last').find('.score').show();


            //스코어 증가
            if (random == 0) {
                strike++;
                $('li:last').find('.strike').text(strike); // 스트라이크 스코어 +1

                // 3스트라이크 + 1아웃
                if (strike == 3) {
                    $('li:last .result').text('아웃! 다음 타자가 타석에 입장했습니다.');

                    out++;
                    $('li:last').find('.out').text(out);
                    strike = 0; //스트라이크 스코어 초기화
                    $('li:last').find('.strike').text(strike);
                }
            } else if (random == 1) {
                ball++;
                $('li:last').find('.ball').text(ball); // 볼 스코어 +1

                // 4볼 + 1아웃
                if (ball == 4) {
                    $('li:last .result').text('아웃! 다음 타자가 타석에 입장했습니다.');

                    out++;
                    $('li:last').find('.out').text(out);
                    ball = 0; // 볼 스코어 초기화
                    $('li:last').find('.ball').text(ball);
                }
            }

            // 3아웃
            if (out == 3) {
                var num = $('.result').text();
                var count = (num.match(/안타/g) || []).length;

                $('li:last .result').text('최종 안타 수 : ' + count);
                $('li:last .score').text('GAME OVER');

                clearInterval(start); //게임 종료

            }, 1000); //1초간격으로 함수 실행

    }

    baseballGame();
});