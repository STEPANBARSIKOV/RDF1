let condition = true;
let start = 0;
let end = 0;
function forward(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction:'alternate',
        duration: 1000,
        loop:false
    });
    condition = false;
}

function backward(){
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction:'alternate',
        duration: 1000,
        loop:false
    });
    condition = true;
}

$('.menu_small_icon').click(function(){
    if(condition){
        forward();
    }else{    
        backward();    
    }
})

$('body').on("touchstart", function (event){
    start = event.originalEvent.touches[0].pageX;

})
$('body').on("touchend", function (event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
})
// код для логина 
const form = document.querySelector("form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

// Обрабатываем отправку формы
form.addEventListener("submit", function(event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Получаем введенный логин и пароль
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  // Выполняем проверку логина и пароля
  if (enteredUsername === "ArhurMorgan" && enteredPassword === "PokerPlans") {
    console.log("Вход выполнен успешно!");
    window.open("index.html");
  } else {
    alert("Неверный логин или пароль!");
  }
});
