// document.getElementById('btn').onclick = function changeContent() {
//     document.getElementById('btn').innerHTML = "첫 번째 타자가 타석에 입장했습니다!";
// }

var result = document.getElementById('result');
var strike = document.getElementById('strike');
var ball = document.getElementById('ball');
var out = document.getElementById('out');
var strikeS = document.getElementById('strikeS');
var ballB = document.getElementById('ballB');
var outO = document.getElementById('outO');

function baseballGame() {
    start = setInterval(function () {

        var random = {};

        random.list = '스트라이크, 볼, 아웃! 다음 타자가 타석에 입장했습니다, 안타! 다음 타자가 타석에 입장했습니다'.split(',');

        random.choice = function () {
            var idx = Math.floor(Math.random() * this.list.length);
            this.answer = this.list[idx];
            this.letters = this.answer.split(',');
            result.innerHTML = this.answer;
        };
        random.choice();

        strike.innerHTML = 0;
        ball.innerHTML = 0;
        out.innerHTML = 0;
        // var anta = 0;

        for (var i = 0; i < 3; i++) {

            random.underDisplay = function () {

                if (random.answer === random.list[0]) {
                    strike.innerHTML++;
                } else if (random.answer === random.list[1]) {
                    ball.innerHTML++;
                } else if (random.answer === random.list[2]) {
                    out.innerHTML++;
                } else {
                    clearInterval(start);
                }
            };
            random.underDisplay();
        }

    }, 1000);

}

baseballGame();