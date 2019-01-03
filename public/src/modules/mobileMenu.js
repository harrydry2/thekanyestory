import { $, $$ } from "./bling";

// function mobileMenu() {
//   $(".mobileMenuOpen").on("click", toggleMenu);
// }
function toggleMenu() {
  $(".mobilemenu").classList.toggle("mobilemenu__active");
  $("body").classList.toggle("noScroll");
  $("html").classList.toggle("noScroll");
  $(".mobileMenuOpen").classList.toggle("mobileMenuOpen__on");
}

export default toggleMenu;

// module.exports {
//   toggleMenu,
//   mobileMenu
// };
