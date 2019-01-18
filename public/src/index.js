import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import zenscroll from "zenscroll";
zenscroll.setup(null, 0);
import toggleMenu from "./modules/mobileMenu";
import imgSwap from "./modules/imgSwap";

import "./modules/isChapterRead";
import "./modules/fresh";
import menuHide from "./modules/menuHide";

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

if (window.innerWidth > 1140) {
  menuHide();
}

if (window.innerWidth <= 1023) {
  $(".mobileMenuOpen").on("click", toggleMenu);
}

if (window.innerWidth < 1200) {
  const fullWidthArray = Array.from($$(".fullWidth"));
  fullWidthArray.forEach(img => {
    img.classList.remove("fullWidth");
    img.classList.add("normalWidth");
  });
}

// form submission

const mailCheck = $(".mailCheck");
const mailForm = $(".plug__inner-form");
const mailSubmitted = $(".plug__inner-submitted");
const mailInput = $(".plug__inner-input");

mailCheck.on("click", () => {
  mailForm.submit();
  mailCheck.style.display = "none";
  mailSubmitted.style.display = "block";
  mailInput.style.display = "none";
});
