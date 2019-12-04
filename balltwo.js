const teamDataForm = document.querySelector("js-teamDataForm"),
    teamDataInput = teamDataForm.querySelector("input"),
    teamDataList = document.querySelector("js-teamDataList");

const TD_LS = "teamDatas";

function paintTeamData(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(span);
    teamDataList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = teamDataInput.value;
    paintTeamData(currentValue);
    teamDataInput.value = "";
}

function Datas() {
    const teamDatas = localStorage.getItem(TD_LS);
    if (teamDatas !== null) {
    }
}

function openmenu(evt, menuName) {
    var menucontent = document.getElementsByClassName("menucontent");
    var i;
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }
    var menulinks = document.getElementsByClassName("menulinks");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].className = menulinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}
function init() {
    Datas();
    teamDataForm.addEventListener("submit", handleSubmit);
}

init();