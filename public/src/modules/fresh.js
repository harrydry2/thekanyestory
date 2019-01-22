import { $, $$ } from "./bling";

const freshOuter = $(".fresh");
const freshImg1 = $(".fresh__img1");
const freshImg2 = $(".fresh__img2");
const freshImg3 = $(".fresh__img3");
const freshImg2Mob = $(".fresh__img2Mob");
const freshImg3Mob = $(".fresh__img3Mob");

// window height
// const imgHeight = freshImg.clientHeight;
// const diff = windowHeight - imgHeight;

if (window.innerWidth > 500) {
  window.addEventListener("load", function(event) {
    const freshImgHeight = freshImg1.offsetHeight;
    const windowHeight = freshOuter.clientHeight;
    setTimeout(
      () => (freshImg1.style.top = `-${freshImgHeight - windowHeight}px`),
      600
    );
  });

  freshImg1.addEventListener("transitionend", event => {
    setTimeout(() => {
      freshImg2.style.top = "18%";
      freshImg2.style.opacity = "1";
    }, 300);
  });

  freshImg2.addEventListener("transitionend", event => {
    setTimeout(() => {
      freshImg3.style.bottom = "15%";
      freshImg3.style.opacity = "1";
    }, 300);
  });
}

if (window.innerWidth < 500) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      freshImg2Mob.style.top = "16%";
      freshImg2Mob.style.opacity = "0.9";
    }, 350);
    freshImg2Mob.addEventListener("transitionend", event => {
      setTimeout(() => {
        freshImg3Mob.style.bottom = "38%";
        freshImg3Mob.style.opacity = "0.9";
      }, 500);
    });
  });
}
