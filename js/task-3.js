const inputForm = document.querySelector("#name-input");
const outputString = document.querySelector("#name-output");

inputForm.addEventListener("input", handlerInput);
function handlerInput(event) {
  outputString.textContent = event.currentTarget.value || "Anonimus";
}
