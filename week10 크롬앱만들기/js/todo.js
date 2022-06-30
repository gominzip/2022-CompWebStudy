const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //const가 아닌 let으로 업뎃이 가능하도록 함
                 //const면 원래의 것은 날아가고 계속 새로 덮어짐
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //로컬에 저장, string으로 변환해 저장
}

function deleteToDo(event){ //property 분석, parent li에서 일어난지 확인 가능
    const li = event.target.parentElement; //특정 li의 버특 클릭 인식
    li.remove(); // 눌린 li 지우기
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //눌린 todo의 id를 제외시키기
    saveToDos();  //로컬 저장소에 현재 toDos 덮어씌우기
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;  //id와 text 중 text만 가져옴
    const button =document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  //append는 제일 마지막에 작성
    li.appendChild(button);
    toDoList.appendChild(li); //ul에 li 집어넣기
}

function handleToDosubmit(event) {
    event.preventDefault(); //새로고침 막기
    const newTodo = toDoInput.value; // 새로운 변수에 데이터 저장하고
    toDoInput.value = "";  // 데이터 비우기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }  //text를 저장하지 않고 object로 저장
    toDos.push(newTodoObj); //로컬에 저장하기 위해 toDos array에 push
    paintToDo(newTodoObj);  //paintToDo 실행
    saveToDos(); //로컬 저장 함수 실행
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){  
    const parsedToDos = JSON.parse(savedToDos); //단순 string에서 제대로 된 array로 변경
    toDos = parsedToDos;  //이전의 toDos를 복원
    parsedToDos.forEach(paintToDo); //각각 item에 function이 하나씩 실행되게 함
}


