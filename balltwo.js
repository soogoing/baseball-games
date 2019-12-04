const teamDataForm = document.querySelector(".js-teamDataForm"),
    teamDataInput = teamDataForm.querySelector("input"),
    teamDataList = document.querySelector(".js-teamDataList");

const TD_LS = "teamDatas";

//입력시 리스트 보여짐
function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    teamDataList.appendChild(li);
}

//팀 데이터 제출
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = teamDataInput.value;
    paintToDo(currentValue);
    teamDataInput.value = "";
}

function Datas() {
    const teamDatas = localStorage.getItem(TD_LS); //로컬저장소에 저장
    if (teamDatas !== null) { //form 항상 보여짐
    }
}

//메뉴창
function openmenu(evt, menuName) {
    var menucontent = document.getElementsByClassName("menucontent"); //내용 불러옴
    var i;
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none"; //내용 숨김
    }
    var menulinks = document.getElementsByClassName("menulinks"); //메뉴탭을 불러옴
    for (i = 0; i < menulinks.length; i++) { //
        menulinks[i].className = menulinks[i].className.replace(" active", ""); //메뉴탭 초기화
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

function init() {
    Datas();
    teamDataForm.addEventListener("submit", handleSubmit);
}

init();
