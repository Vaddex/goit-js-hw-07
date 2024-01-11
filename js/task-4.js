const userLoginForm = document.querySelector(".login-form");

userLoginForm.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if ((data.email === "", data.password === "")) {
    alert("всі поля повинні бути заповнені.");
  } else if (data.email === "") {
    alert("всі поля повинні бути заповнені.");
  } else {
    console.log(data);
    event.currentTarget.reset();
  }
}
