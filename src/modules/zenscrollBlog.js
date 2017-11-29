const zenscroll = require("zenscroll");
import { $, $$ } from "./bling";

const footerUpArrowBlog = $(".footerUpArrowBlog");
const Blog = $(".Blog");

function zenscrollFunctionBlog() {
  footerUpArrowBlog.on("click", function() {
    zenscroll.to(Blog);
  });
}
export default zenscrollFunctionBlog;
