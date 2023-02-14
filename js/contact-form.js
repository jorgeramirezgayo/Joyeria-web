
const regexNombre = /^[A-ZÁ-ÚÑa-zá-úñ]{1}[a-zá-úñ]{1,30}(\s[A-ZÁ-ÚÑa-zá-úñ]{1}[a-zá-úñ]{1,30})*$/;
const regexEmail  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
// El mensaje prefiero no ponerle regex porque es muy difícil gestionar que querrá escribir el usuario, @ ¿? "" ... y 
// para un formulario simple va a terminar siendo una mala experiencia para el usuario.

const inputNombre         = document.querySelector("#nombre");
const inputEmail          = document.querySelector("#email");
const inputMensaje        = document.querySelector("#mensaje");
const inputPrivacyPolicy  = document.querySelector("#privacy-policy-check");
const btnSubmit           = document.querySelector("input[type='submit']");
const form                = document.querySelector("#form-contacto");

const alertNombre = document.createElement("p");
alertNombre.id            = "alertNombre";
alertNombre.innerText     = "Por favor, escriba su nombre.";
alertNombre.classList.add("contacto__section-contacto--alert");

const alertEmail = document.createElement("p");
alertEmail.id            = "alertEmail";
alertEmail.innerText     = "Por favor, escriba su email.";
alertEmail.classList.add("contacto__section-contacto--alert");

const alertMensaje = document.createElement("p");
alertMensaje.id            = "alertMensaje";
alertMensaje.innerText     = "Por favor, escriba un mensaje.";
alertMensaje.classList.add("contacto__section-contacto--alert");

const alertPrivacyPolicy = document.querySelector(".contacto__section-contacto__privacy-policy__text");

let checkAlert = false;

function checkNombre() {
  if (regexNombre.test(inputNombre.value)) {
    inputNombre.style.border = "0.0625em solid #4caf50";

    checkAlert = document.querySelector("#alertNombre");

    if (checkAlert) {
      checkAlert.remove();
    }
    
    return true;
  }

  inputNombre.style.border = "0.0625em solid #f44336";
  inputNombre.parentNode.insertBefore(alertNombre, inputNombre);

  return false;
}

function checkEmail() {
  if (regexEmail.test(inputEmail.value)) {
    inputEmail.style.border = "0.0625em solid #4caf50";

    checkAlert = document.querySelector("#alertEmail");

    if (checkAlert) {
      checkAlert.remove();
    }

    return true;
  }

  inputEmail.style.border = "0.0625em solid #f44336";
  inputEmail.parentNode.insertBefore(alertEmail, inputEmail);
  
  return false;
}

function checkMensaje() {
  if (inputMensaje.value) {
    inputMensaje.style.border = "0.0625em solid #4caf50";

    checkAlert = document.querySelector("#alertMensaje");

    if (checkAlert) {
      checkAlert.remove();
    }

    return true;
  }

  inputMensaje.style.border = "0.0625em solid #f44336";
  inputMensaje.parentNode.insertBefore(alertMensaje, inputMensaje);

  return false;
}

function checkPrivacyPolicy() {
  if (!inputPrivacyPolicy.checked) {
    alertPrivacyPolicy.style.color = "#f44336";

    return false;
  }

  alertPrivacyPolicy.style.color = "#000";

  return true;
}

function checkForm(btnSubmit) {
  btnSubmit.preventDefault();
  
  let isValid = true;

  if (!checkNombre()) {
    isValid = false;
  }

  if (!checkEmail()) {
    isValid = false;
  }

  if (!checkMensaje()) {
    isValid = false;
  }
  
  if (!checkPrivacyPolicy()) {
    isValid = false;
  }

  if (isValid) {
    alert("Tus datos han sido validados correctamente, sin embargo esto no es un formulario funcional y tus datos no serán enviados.");
  }
}

inputNombre.addEventListener("blur", checkNombre);
inputEmail.addEventListener("blur", checkEmail);
inputMensaje.addEventListener("blur", checkMensaje);
inputPrivacyPolicy.addEventListener("click", checkPrivacyPolicy);
inputPrivacyPolicy.addEventListener("blur", checkPrivacyPolicy);
btnSubmit.addEventListener("click", btnSubmit => checkForm(btnSubmit));
