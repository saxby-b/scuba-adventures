const year = document.querySelector("span");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");

email.addEventListener("click", function (e) {
    e.target.value = "";

})

/*submit.addEventListener("click", function () {
    email.defaultRefresh();
} ) */
const d = new Date();
const y = d.getFullYear();
year.innerText = y;
