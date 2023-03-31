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

$('.container').on("touchstart", function (event){
    start = event.originalEvent.touches[0].pageX;

})
$('.container').on("touchend", function (event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
})

function securuty(){
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const login = document.querySelector('login').value;
  const password = document.querySelector('password').value;
  if (login === 'Arthur Morgan' && password === 'plan') {
    window.location.href = 'index.html';
  } else {
    alert('Неправильный логин или пароль.');
  }
});}

let btn = document.querySelector(".btn")
btn.addEventListener("click", securuty)
