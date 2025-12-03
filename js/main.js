const year = document.querySelector("span");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const adventure = document.querySelector("#adventure");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const arrows = document.querySelector(".arrows");
const x = matchMedia("(min-width: 768px)");
const w = matchMedia("(min-width: 1200px)")
const stop = matchMedia("(max-width: 1199px)");

const d = new Date();
const y = d.getFullYear();
year.innerText = y;


right.addEventListener("click", function () {
 /*if (window.matchMedia("(min-width:768px)") ) {
    section2.classList.remove("hide");
  }
  else if (window.matchMedia("(min-width: 768px)") & !section1.classList.contains("hide") & !section2.classList.contains("hide")) {
    section1.classList.add("hide");
    section3.classList.remove("hide");
  } */
  if (!section1.classList.contains("hide")) {
    section1.classList.add("hide");
    section2.classList.remove("hide");
  } else if (!section2.classList.contains("hide")) {
    section2.classList.add("hide");
    section3.classList.remove("hide");
  } else if (!section3.classList.contains("hide")) {
    section3.classList.add("hide");
    section4.classList.remove("hide");
  } else if (!section4.classList.contains("hide")) {
    section4.classList.add("hide");
    section1.classList.remove("hide");
  }
}); 

left.addEventListener("click", function () {
  if (!section1.classList.contains("hide")) {
    section1.classList.add("hide");
    section4.classList.remove("hide");
  } else if (!section4.classList.contains("hide")) {
    section4.classList.add("hide");
    section3.classList.remove("hide");
  } else if (!section3.classList.contains("hide")) {
    section3.classList.add("hide");
    section2.classList.remove("hide");
  } else if (!section2.classList.contains("hide")) {
    section2.classList.add("hide");
    section1.classList.remove("hide");
  }
});

/*const media = function () {
  if (x.matches) {
  right.addEventListener("click", function () {
    if (!section2.contains("hide")) {
      section3.classList.add("hide");
    }
  });
}
} */


/*if(stop.matches) {

  document.getElementById("adventure").style.display = "none";
   /*section2.classList.remove("hide");
    right.addEventListener("click", function () {
        if(!section1.classList.contains("hide") & !section2.classList.contains("hide")) {
          section3.classList.remove("hide");
            section1.classList.add("hide");
           section3.classList.remove("hide"); 
        } else if (!section2.classList.contains("hide") & !section3.classList.contains("hide")) {
            section2.classList.add("hide");
            section4.classList.remove("hide");
        }
    }) 
}*/

/*if(y.matches) {
  document.getElementById("adventure").style.display = "initial";
} */

//adventure.classList.add("hide");
/*next.addEventListener("click", function () {
   section1.classList.add("hide");
   section2.classList.remove("hide");

   

}) */

/*const change = function () {
     if (!section1.classList.contains("hide")) {
        section1.classList.add("hide");
        section2.classList.remove("hide");
        section2.setTimeOut(hide, 3000)
    } else if (section2.classList.contains("hide")) {
        section3.classList.remove("hide");
        section3.setTimeOut(hide, 3000);
    } else if (section3.classList.contains("hide")) {
        section4.classList.remove("hide");
        section4.setTimeOut(hide, 3000);
    }

}

/*const change = function () {
     for (let section of sectionArray.setTimeout(3000)) {
    adventure.append(section);
} if (this.section === section1) {
    section1.classList.remove("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
} else if (this.section === section2) {
    section1.classList.add("hide");
    section2.classList.remove("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
} else if (this.section === section3) {
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.remove("hide");
    section4.classList.add("hide");
} else if (this.section === section4) {
    section1.classList.remove("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
} */

/*const hide = function () {
    this.classList.add("hide");
}

email.addEventListener("click", function (e) {
    e.target.value = "";

}) */

/*submit.addEventListener("click", function () {
    email.defaultRefresh();
} ) */

/*const sectionArray = [section1, section2, section3, section4];

const change = function () {
  section1.classList.add("hide");
  section2.classList.remove("hide");
}; */

/*const cycle = function () {
    if (!section1.contains("hide")) {
        section1.classList.add("hide");
        section2.classList.remove("hide")
    } else if (!section2.contains("hide")) {
        section2.classList.add("hide");
        section3.classList.remove("hide");
    } else if (!section3.contains("hide")) {
        section3.classList.add("hide");
        section4.classList.remove("hide");
    } else if (!section4.classList.contains("hide")) {
        section4.classList.add("hide");
        section1.classList.remove("hide");
    }
} */
