document.getElementById('btn').onclick = function changeContent() {
    document.getElementById('btn').innerHTML = "첫 번째 타자가 타석에 입장했습니다!";
}

var list = '스트라이크,불,안타,아웃'.split(',');

var random = {};
random.choice = function () {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
var randomResult = random.choice();
console.log(randomResult);