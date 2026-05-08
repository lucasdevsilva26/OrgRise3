const form = document.querySelector("form");
const accessButton = form.querySelector("#access-button");
let canAccess = false;

form.addEventListener("input", () => {
  for (let input of form.querySelectorAll("input")) {
    canAccess = input.value.length > 0;
    
    if (!canAccess) {
      break;
    }
  }
  accessButton.disabled = !canAccess;
});
