import { $, $$ } from "./bling";

$("input").on("keypress", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});
