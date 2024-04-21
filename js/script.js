//PARALAX

let sun = document.getElementById("sun");
let cloudL = document.getElementById("cloud-l");
let cloudR = document.getElementById("cloud-r");
let scroll = document.getElementById("scrolldown");
let arbustoT1 = document.getElementById("arbusto-t1");
let arbustoT2 = document.getElementById("arbusto-t2");
let arbustoF1 = document.getElementById("arbusto-f1");
let arbustoF2 = document.getElementById("arbusto-f2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  sun.style.top = value * 1 + "px";
  cloudL.style.left = value * -1.5 + "px";
  cloudR.style.left = value * 0.5 + "px";

  scroll.style.bottom = value * 1 + "px";
});

//ITENS PROJECT

let projectBox = document.querySelector(".projects-item");
let projectBoxContent = document.querySelector(".projects-box");
let closeProject = document.querySelector(".closebtn");
let body = document.querySelector("body");

// OPEN MODAL
projectBox.addEventListener("click", () => {
  projectBoxContent.classList.toggle("open");
  if (projectBoxContent.classList.contains("open")) {
    body.classList.add("remove-scrolling");
  }
});
closeProject.addEventListener("click", () => {
  projectBoxContent.classList.remove("open");
  body.classList.remove("remove-scrolling");
});
