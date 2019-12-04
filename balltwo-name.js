const form = document.querySelector(".js-teamForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const TM_LS = "currentTeam",
    SHOWING_CN = "showing";

//팀이름 저장
function saveName(text) {
    localStorage.setItem(TM_LS, text);
}

//팀이름 제출
function handleSubmit(event) { //제출
    event.preventDefault();
    const currentValue = input.value; //TEXT
    textTeamName(currentValue);
    saveName(currentValue);
}

//기본 이름 묻기
function askForName() {
    form.classList.add(SHOWING_CN); //창에 기본 보여짐
    form.addEventListener("submit", handleSubmit);
}

//이름이 적히면 그다음 보여짐
function textTeamName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}`;
}

function loadName() {
    const currentTeam = localStorage.getItem(TM_LS); //로컬저장소에 저장
    if (currentTeam === null) {
        askForName();
    } else {
        textTeamName(currentTeam);
    }
}

function init() {
    loadName();
}

init();

//팀 이름 바꾸는 방법:
//Console/Application/LocalStroage/file:// 에서 key delete 후 새로고침