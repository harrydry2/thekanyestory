// Sass
import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import videoPlay from "./modules/video";
import zenscrollFunction from "./modules/zenscroll";
import scrollerFunction from "./modules/scroller";
import programHover from "./modules/programHover";

// Blog
import blogHover from "./modules/blogHover";
import zenscrollFunctionBlog from "./modules/zenscrollBlog";

// JS
if ($("body").classList.contains("Index")) {
  videoPlay();
  blogHover();
  zenscrollFunction();
  programHover();
  if (window.innerWidth > 700) {
    scrollerFunction();
    console.log("banter");
  }
}

if (window.innerWidth <= 710) {
  $(".blogImg1").style.backgroundImage =
    "url('https://s3.eu-west-2.amazonaws.com/maximizeyp/blog/MaxBlog1b.jpg')";
}

if ($("body").classList.contains("Blog")) {
  blogHover();
  zenscrollFunctionBlog();
}
