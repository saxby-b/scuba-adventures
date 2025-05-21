const year = document.querySelector("span");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector("section4");

const sectionArray = [section1, section2, section3, section4];



email.addEventListener("click", function (e) {
    e.target.value = "";

})

/*submit.addEventListener("click", function () {
    email.defaultRefresh();
} ) */
const d = new Date();
const y = d.getFullYear();
year.innerText = y;
