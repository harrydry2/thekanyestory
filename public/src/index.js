import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import zenscroll from "zenscroll";
zenscroll.setup(null, 0);

import "./modules/isChapterRead";

const images = [...$$(".fullWidth")];
const leftmenu = $(".leftmenu");

const isIntersecting = (imageRect, leftmenuRect) =>
  imageRect.top < leftmenuRect.bottom && imageRect.bottom > leftmenuRect.top;

window.on("scroll", menuHide);

function menuHide() {
  if (
    images.some(image =>
      isIntersecting(
        image.getBoundingClientRect(),
        leftmenu.getBoundingClientRect()
      )
    )
  ) {
    leftmenu.classList.add("hidden");
  } else {
    leftmenu.classList.remove("hidden");
  }
}

const menuItems = [...$$(".leftmenu__item")];
const dividers = [...$$(".divider")];

menuItems.forEach((item, index) => {
  item.on("click", () => {
    zenscroll.to(dividers[`${index}`], 0);
  });
});
