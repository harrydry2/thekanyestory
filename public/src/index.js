import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import zenscroll from "zenscroll";
zenscroll.setup(null, 0);
import toggleMenu from "./modules/mobileMenu";

import "./modules/isChapterRead";
// import "./modules/fresh";
import menuHide from "./modules/menuHide";

const menuItems = [...$$(".leftmenu__item")];
const dividers = [...$$(".divider")];

menuItems.forEach((item, index) => {
  item.on("click", () => {
    if (index > 7) {
      var nom = index - 8;
    } else {
      var nom = index;
    }
    zenscroll.to(dividers[`${nom}`], 0);
    if (index > 7) {
      toggleMenu();
    }
  });
});

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
