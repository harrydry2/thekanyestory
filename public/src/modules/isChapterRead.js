import { $, $$ } from "./bling";

var dividers = Array.from($$(".divider"));
let dividerHeight = dividers[0].offsetHeight;
let menuToTop = $(".leftmenu").getBoundingClientRect().top;

window.on("scroll", isChapterRead);
window.on("resize", updateCoords);

function updateCoords() {
  dividerHeight = dividers[0].offsetHeight;
  menuToTop = $(".leftmenu").getBoundingClientRect().top;
}

function isChapterRead() {
  dividers.forEach((divider, index) => {
    var lm = $(`.lm00${(index + 1).toString()}`);
    if (
      divider.getBoundingClientRect().top < -(dividerHeight - menuToTop + 20)
    ) {
      lm.classList.add("strike");
    } else {
      lm.classList.contains("strike") ? lm.classList.remove("strike") : null;
    }
  });
}
