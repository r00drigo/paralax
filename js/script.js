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
