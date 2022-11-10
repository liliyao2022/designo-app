const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const navElement = document.getElementById("nav");
const headerElement = document.getElementById("header");

closeBtn.addEventListener("click", () => {
  navElement.classList.remove("navigation-open");
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  headerElement.classList.remove("header");
});

openBtn.addEventListener("click", () => {
  navElement.classList.add("navigation-open");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  headerElement.classList.add("header");
});

document.addEventListener(
  "blur",
  function (event) {
    const isValid = event.target.validity.valid;
    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidation = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : false;

    if (connectedValidationId === "email-validation") {
      connectedValidation.innerHTML =
        "Please use a valid email address <img class='error-icon' src='./assets/contact/desktop/icon-error.svg'>";
    } else if (connectedValidation && !isValid) {
      connectedValidation.innerHTML =
        "Can't be empty <img class='error-icon' src='./assets/contact/desktop/icon-error.svg'>";
    } else {
      connectedValidation.innerText = "";
    }
  },
  true
);
