import { $, $$ } from "./bling";

const formInputs = $$(".p8FormInput");

function formSubmit() {
  formInputs.forEach(input => {
    input.on("keypress", function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  });
}

export default formSubmit;
