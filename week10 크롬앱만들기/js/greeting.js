const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 반복되는건 오타 방지를 위해 변수 선언
const USERNAME_KEY = "username"; // 변수명 오타는 js가 알려줌

function onLoginSubmit(event) {  // event라는 공간 생성
    event.preventDefault(); //브라우저 기본동작(새로고침) 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText =  `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}