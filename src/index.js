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
  scrollerFunction();
  programHover();
}

if ($("body").classList.contains("Blog")) {
  blogHover();
  zenscrollFunctionBlog();
}
