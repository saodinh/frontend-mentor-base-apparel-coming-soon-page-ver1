const emailInput = document.querySelector(".email-input");
const form = document.querySelector(".form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!emailRegex.test(emailInput.value)) {
        form.classList.add("error");
    } else {
        form.classList.remove("error");
    }
});
