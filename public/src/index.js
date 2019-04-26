import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
// loadIntroVideo
const introVideo = $(".divider__gif-01");
introVideo.src = "https://s3.amazonaws.com/harrydry/steve/steve__01.mp4";
import zenscroll from "zenscroll";
zenscroll.setup(null, 0);
import toggleMenu from "./modules/mobileMenu";
import imgSwap from "./modules/imgSwap";
import axios from "axios";

import "./modules/isChapterRead";
import "./modules/fresh";
// import menuHide from "./modules/menuHide";

const menuItems = [...$$(".leftmenu__item")];
const dividers = [...$$(".divider")];

menuItems.forEach((item, index) => {
  item.on("click", () => {
    if (index > 6) {
      var nom = index - 7;
    } else {
      var nom = index;
    }
    zenscroll.to(dividers[`${nom}`], 0);
    if (index > 6) {
      toggleMenu();
    }
  });
});

imgSwap();

// if (window.innerWidth > 1140) {
//   menuHide();
// }

if (window.innerWidth <= 1023) {
  $(".mobileMenuOuter").on("click", toggleMenu);
}

if (window.innerWidth < 1200) {
  const fullWidthArray = Array.from($$(".fullWidth"));
  fullWidthArray.forEach(img => {
    img.classList.remove("fullWidth");
    img.classList.add("normalWidth");
  });
}

// form submission

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// const mailCheck = $(".mailCheck");
// const mailSubmitted = $(".plug__inner-submitted");
// const mailInput = $(".plug__inner-input");
// const mailNotValid = $(".plug__inner-notvalid");

const mailCheck1 = $(".mc1");
const mailSubmitted1 = $(".pis1");
const mailInput1 = $(".pii1");
const mailNotValid1 = $(".pinv1");

mailCheck1.on("click", async () => {
  console.log("cunt")
  if (validateEmail(mailInput1.value)) {
    const res = await axios.post("/subscribe", {
      email: mailInput1.value
    });
    console.log(res);
    mailCheck1.style.display = "none";
    mailNotValid1.style.display = "none";
    mailSubmitted1.style.display = "block";
    mailInput1.style.display = "none";
  } else {
    mailNotValid1.style.display = "block";
  }
});

const mailCheck2 = $(".mc2");
const mailSubmitted2 = $(".pis2");
const mailInput2 = $(".pii2");
const mailNotValid2 = $(".pinv2");

console.log(mailCheck1, mailCheck2)

mailCheck2.on("click", async () => {
  if (validateEmail(mailInput2.value)) {
    const res = await axios.post("subscribe", {
      email: mailInput2.value
    });
    mailCheck2.style.display = "none";
    mailNotValid2.style.display = "none";
    mailSubmitted2.style.display = "block";
    mailInput2.style.display = "none";
  } else {
    mailNotValid2.style.display = "block";
  }
});
