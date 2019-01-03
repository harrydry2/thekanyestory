import { $, $$ } from "./bling";

const freshOuter = $(".fresh");
const freshImg1 = $(".fresh__img1");
const freshImg2 = $(".fresh__img2");
const freshImg3 = $(".fresh__img3");
// window height
// const windowHeight = freshOuter.clientHeight;
// const imgHeight = freshImg.clientHeight;
// const diff = windowHeight - imgHeight;

setTimeout(fresh, 600);

function fresh() {
  freshImg1.style.bottom = "-2%";
}

freshImg1.addEventListener("transitionend", event => {
  setTimeout(() => (freshImg2.style.left = "10%"), 300);
});

freshImg2.addEventListener("transitionend", event => {
  setTimeout(() => (freshImg3.style.right = "10%"), 100);
});
