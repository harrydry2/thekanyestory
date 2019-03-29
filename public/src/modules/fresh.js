import { $, $$ } from "./bling";

const freshOuter = $(".fresh");
const freshImg1 = $(".fresh__img1");
const freshImg2 = $(".fresh__img2");
// mon
const freshImg1Mob = $(".fresh__img1Mob");
const freshImg2Mob = $(".fresh__img2Mob");
const freshImg3Mob = $(".fresh__img3Mob");

function loadImage(url) {
  let image = new Image();
  let promise = new Promise((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = e => reject(e);
  });
  image.src = url;
  return promise;
}

if (window.innerWidth > 500) {
  Promise.all([
    loadImage("https://s3.amazonaws.com/harrydry/ye.jpg"),
    loadImage("https://s3.amazonaws.com/harrydry/harry1.png")
  ])
    .then(() => {
      const freshImgHeight = freshImg1.offsetHeight;
      const windowHeight = freshOuter.clientHeight;
      setTimeout(
        () => (freshImg1.style.top = `-${freshImgHeight - windowHeight}px`),
        600
      );
    })
    .catch(e => console.log(e));
  freshImg1.addEventListener("transitionend", event => {
    setTimeout(() => {
      freshImg2.style.top = "41%";
      freshImg2.style.opacity = "1";
    }, 300);
  });
}

if (window.innerWidth < 500) {
  Promise.all([
    loadImage("https://s3.amazonaws.com/harrydry/ye.jpg"),
    loadImage("https://s3.amazonaws.com/harrydry/harryMob1.png"),
    loadImage("https://s3.amazonaws.com/harrydry/harryMob2.png"),
    loadImage("https://s3.amazonaws.com/harrydry/harryMob3.png")
  ])
    .then(() => {
      setTimeout(() => {
        freshImg1Mob.style.top = "14%";
        freshImg1Mob.style.opacity = "1";
      }, 550);
    })
    .catch(e => console.log(e));
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
}
