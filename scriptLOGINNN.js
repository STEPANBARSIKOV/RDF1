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
  if (enteredUsername === "ArthurMorgan" && enteredPassword === "PokerPlans") {
    console.log("Вход выполнен успешно!");
    window.open("index.html");
  } else {
    alert("Неверный логин или пароль!");
  }
});