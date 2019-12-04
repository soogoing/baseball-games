const form = document.querySelector(".js-teamForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const TM_LS = "currentTeam",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(TM_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    textTeamName(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function textTeamName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}`;
}

function loadName() {
    const currentTeam = localStorage.getItem(TM_LS);
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