import { $, $$ } from "./bling";

const images = [...$$(".fullWidth")];
const leftmenu = $(".leftmenu");

const isIntersecting = (imageRect, leftmenuRect) =>
  imageRect.top < leftmenuRect.bottom && imageRect.bottom > leftmenuRect.top;

function menuHide() {
  window.on("scroll", shouldMenuHide);

  function shouldMenuHide() {
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
}

export default menuHide;
