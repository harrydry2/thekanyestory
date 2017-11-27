import { $, $$ } from "./bling";

const blogs = Array.from($$(".p6Blog"));

function blogHover() {
  blogs.forEach(blog => blog.on("mouseenter", hoverEnter));
  blogs.forEach(blog => blog.on("mouseleave", hoverLeave));

  function hoverEnter() {
    this.classList.add("p6HoverUp");
    blogs.forEach(blog => {
      if (blog !== this) {
        blog.classList.add("hoverenterOpacity");
      }
    });
  }

  function hoverLeave() {
    this.classList.remove("p6HoverUp");
    blogs.forEach(blog => {
      blog.classList.remove("hoverenterOpacity");
    });
  }
}

export default blogHover;
