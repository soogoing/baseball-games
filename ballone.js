var list = '스트라이크,불,안타,아웃'.split(',');

var random = {};
random.choice = function () {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
var randomResult = random.choice();
console.log(randomResult);
