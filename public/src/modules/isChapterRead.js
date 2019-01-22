import { $, $$ } from "./bling";
import debounce from "lodash/debounce";

var mobOrLeft = window.innerWidth <= 1023 ? "mobilemenu__inner" : "leftmenu";
var dividers = Array.from($$(".divider"));
let dividerHeight = dividers[0].offsetHeight;
let menuToTop = $(`.${mobOrLeft}`).getBoundingClientRect().top;

// window.on("scroll", debounce(isChapterRead, 30));
// window.on("resize", debounce(updateCoords, 30));

window.on("scroll", isChapterRead);
window.on("resize", updateCoords);

function updateCoords() {
  dividerHeight = dividers[0].offsetHeight;
  menuToTop = $(`.${mobOrLeft}`).getBoundingClientRect().top;
}

function isChapterRead() {
  var counter = -2;
  if (mobOrLeft === "leftmenu") {
    counter = dividerHeight - menuToTop + 20;
  }
  // counter for end
  var endCounter = 0;
  if (mobOrLeft === "leftmenu") {
    endCounter = 200;
  }
  dividers.forEach((divider, index) => {
    if (index > 0) {
      var lm = $(`.${mobOrLeft} > .lm00${index.toString()}`);
      if (divider.getBoundingClientRect().top < -counter) {
        lm.classList.add("strike");
      } else {
        lm.classList.contains("strike") ? lm.classList.remove("strike") : null;
      }
    }
    if (index === 6) {
      var lm = $(`.${mobOrLeft} > .lm007`);
      const endPlug = $(".endPlug");
      if (
        endPlug.getBoundingClientRect().top - endPlug.offsetHeight <
        -endCounter
      ) {
        lm.classList.add("strike");
      } else {
        lm.classList.contains("strike") ? lm.classList.remove("strike") : null;
      }
    }
  });
}
