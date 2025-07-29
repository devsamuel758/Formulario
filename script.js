const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const phone = document.getElementById("phone");
const location = document.getElementById("location");
const experience = document.getElementById("experience");
const courses = document.getElementById("courses");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

phone.addEventListener("blur", () => {
  checkInputPhone();
});

location.addEventListener("blur", () => {
  checkInputLocation();
});

experience.addEventListener("blur", () => {
  checkInputExperience();
});

courses.addEventListener("blur", () => {
  checkInputCourses();
});

function checkInputUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === "") {
    errorInput(username, "Preencha um username!");
  } else {
    clearError(username);
  }
}

function checkInputEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errorInput(email, "Email inválido.");
  } else {
    clearError(email);
  }
}

function checkInputPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    clearError(password);
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;
  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    clearError(passwordConfirmation);
  }
}

function checkInputPhone() {
  const phoneValue = phone.value.trim();
  if (phoneValue === "") {
    errorInput(phone, "Preencha o telefone!");
  } else {
    clearError(phone);
  }
}

function checkInputLocation() {
  const locationValue = location.value.trim();
  if (locationValue === "") {
    errorInput(location, "Preencha a localização!");
  } else {
    clearError(location);
  }
}

function checkInputExperience() {
  const experienceValue = experience.value.trim();
  if (experienceValue === "") {
    errorInput(experience, "Preencha os anos de experiência!");
  } else {
    clearError(experience);
  }
}

function checkInputCourses() {
  const coursesValue = courses.value.trim();
  if (coursesValue === "") {
    errorInput(courses, "Preencha os cursos!");
  } else {
    clearError(courses);
  }
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();
  checkInputPhone();
  checkInputLocation();
  checkInputExperience();
  checkInputCourses();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => !item.classList.contains("error"));

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
    form.reset();
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.classList.add("error");
}

function clearError(input) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = "";
  formItem.classList.remove("error");
}
