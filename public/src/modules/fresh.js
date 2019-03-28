import { $, $$ } from "./bling";

const freshOuter = $(".fresh");
const freshImg1 = $(".fresh__img1");
const freshImg2 = $(".fresh__img2");
// mon
const freshImg1Mob = $(".fresh__img1Mob");
const freshImg2Mob = $(".fresh__img2Mob");
const freshImg3Mob = $(".fresh__img3Mob");

// window height
// const imgHeight = freshImg.clientHeight;
// const diff = windowHeight - imgHeight;

if (window.innerWidth > 500) {
  const check = setInterval(() => {
    console.log("runaagin");
    if (freshImg1.complete && freshImg2.complete) {
      console.log("run");
      const freshImgHeight = freshImg1.offsetHeight;
      const windowHeight = freshOuter.clientHeight;
      const subtactedNumber = Math.abs(freshImgHeight - windowHeight);
      setTimeout(() => (freshImg1.style.top = `-${subtactedNumber}px`), 500);
      clearInterval(check);
    }
  }, 150);

  freshImg1.addEventListener("transitionend", event => {
    setTimeout(() => {
      freshImg2.style.top = "41%";
      freshImg2.style.opacity = "1";
    }, 300);
  });

  // freshImg2.addEventListener("transitionend", event => {
  //   setTimeout(() => {
  //     freshImg3.style.bottom = "15%";
  //     freshImg3.style.opacity = "1";
  //   }, 300);
  // });
}

if (window.innerWidth < 500) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      freshImg1Mob.style.top = "14%";
      freshImg1Mob.style.opacity = "1";
    }, 300);
    freshImg1Mob.addEventListener("transitionend", event => {
      setTimeout(() => {
        freshImg2Mob.style.top = "26%";
        freshImg2Mob.style.opacity = "1";
      }, 100);
    });
    freshImg2Mob.addEventListener("transitionend", event => {
      setTimeout(() => {
        freshImg3Mob.style.top = "39%";
        freshImg3Mob.style.opacity = "1";
      }, 100);
    });
  });
}
