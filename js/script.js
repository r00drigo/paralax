//PARALAX

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let sun = document.getElementById("sun");
  let cloudL = document.getElementById("cloud-l");
  let cloudR = document.getElementById("cloud-r");
  let mont = document.querySelector("#mont");
  let up = document.querySelector("#up");
  let floor = document.querySelector("#floor");
  let floorTwo = document.querySelector("#floortwo");

  floor.style.left = value * 0.1 + "px";
  floorTwo.style.left = value * -1.5 + "px";
  up.style.top = value * 0.5 + "px";
  mont.style.top = value * 0.5 + "px";
  sun.style.top = value * 1.5 + "px";
  cloudL.style.left = value * -1 + "px";
  cloudR.style.left = value * 0.5 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".projects-item");

  // Adiciona um evento de clique a cada item
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      const modalId = item.getAttribute("data-modal-id");
      openModal(modalId);
    });
  });

  // Adiciona um evento de clique para fechar o modal
  var closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modal = button.closest(".projects-box");
      closeModal(modal.id);
    });
  });
});

const body = document.querySelector("body");

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  body.classList.add("remove-scrolling");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  body.classList.remove("remove-scrolling");
}
