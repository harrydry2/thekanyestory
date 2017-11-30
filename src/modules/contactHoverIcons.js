import { $, $$ } from "./bling";

function contactHoverIcons() {
  // add class
  $(".p8ISE").on("mouseover", function() {
    $(".p8ISE").classList.add("p8SectionHover");
  });
  $(".p8ISP").on("mouseover", function() {
    $(".p8ISP").classList.add("p8SectionHover");
  });

  // removeclass
  $(".p8ISE").on("mouseleave", function() {
    $(".p8ISE").classList.remove("p8SectionHover");
  });
  $(".p8ISP").on("mouseleave", function() {
    $(".p8ISP").classList.remove("p8SectionHover");
  });
}

export default contactHoverIcons;
