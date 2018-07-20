import { $, $$ } from "./bling";

const modalOuter = $(".outerContainer");
const modalInner = $(".addidea");
const button = $$(".hrb__active");

button.on("click", modalOpen);
window.on("click", modalCloseClick);
document.on("keydown", modalCloseEsc);

function modalOpen() {
  console.log("hello");
  modalOuter.style.display = "flex";
  setTimeout(() => (modalInner.style.opacity = "1"), 50);
  document.body.classList.add("modalNoScroll");
}

function modalCloseClick(e) {
  if (e.target == modalOuter) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}

function modalCloseEsc(e) {
  if (e.keyCode == 27) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}
