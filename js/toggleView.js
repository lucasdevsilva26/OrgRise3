const toggleViwers = Array.from(document.querySelectorAll(".toggleView"));

for (let tV of toggleViwers) {
  const tVInput = tV.parentElement.querySelector("input");

  tV.dataset.inputType = tVInput.type == "password" ? "text" : tVInput.type;
  tVInput.type = "password";

  tV.addEventListener("click", () => {
    tVInput.type = tVInput.type == "password" ? tV.dataset.inputType : "password";
    
    tV.querySelector("i").setAttribute("class", tVInput.type == "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye");
    
    tVInput.focus()
  });
}
