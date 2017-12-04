// Sass
import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import videoPlay from "./modules/video";
import zenscrollFunction from "./modules/zenscroll";
import scrollerFunction from "./modules/scroller";
import programHover from "./modules/programHover";
import contactHoverIcons from "./modules/contactHoverIcons";
import formSubmit from "./modules/formSubmit";

// Blog
import blogHover from "./modules/blogHover";
import zenscrollFunctionBlog from "./modules/zenscrollBlog";

// JS
if ($("body").classList.contains("Index")) {
  videoPlay();
  blogHover();
  zenscrollFunction();
  programHover();
  contactHoverIcons();
  formSubmit();
  if (window.innerWidth > 700) {
    scrollerFunction();
  }
  if (window.innerWidth <= 710) {
    $(".blogImg1").style.backgroundImage =
      "url('https://s3.eu-west-2.amazonaws.com/maximizeyp/newBlog/NewBlogImg2Wide.jpg')";
  }
}


if ($("body").classList.contains("Blog")) {
  zenscrollFunctionBlog();
}
