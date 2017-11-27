const zenscroll = require("zenscroll");
import { $, $$ } from "./bling";

// Menu
const menuAbout = $(".menuAbout");
const menuProgrammes = $(".menuProgrammes");
const menuSchools = $(".menuSchools");
const menuBlog = $(".menuBlog");

// Buttons
const enquireNow = $(".enquireNow");
const learnMore = $(".learnMore");
// Footer
const footerUpArrow = $(".footerUpArrow");
// Section Items
const landerSection = $(".p1WrapperBackground");
const aboutSection = $(".p3bodyContainer");
const programmesSection = $(".p4bodyContainer");
const schoolsSection = $(".p5bodyContainer");
const blogSection = $(".p6bodyContainer");

//Menu Clicks

function zenscrollFunction() {
  menuAbout.on("click", function() {
    zenscroll.to(aboutSection);
  });

  menuProgrammes.on("click", function() {
    zenscroll.to(programmesSection);
  });

  menuSchools.on("click", function() {
    zenscroll.to(schoolsSection);
  });

  menuBlog.on("click", function() {
    zenscroll.to(blogSection);
  });

  // Button Clicks
  enquireNow.on("click", function() {
    zenscroll.to(schoolsSection);
  });

  learnMore.on("click", function() {
    zenscroll.to(aboutSection);
  });

  // Footer Clicks
  footerUpArrow.on("click", function() {
    zenscroll.to(landerSection);
  });
}
export default zenscrollFunction;
