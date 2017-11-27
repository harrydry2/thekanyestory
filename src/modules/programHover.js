import { $, $$ } from "./bling";

const triggers = Array.from($$(".p4Menu > li"));
const background = $(".dropdownBackground");

function programHover() {
  // Set initial position of background
  setTimeout(() => handleStart(), 100);
  function handleStart() {
    const dropdownStartCoords = $(".p4DropdownStart").getBoundingClientRect();
    const menuCoords = $(".p4Menu").getBoundingClientRect();
    const coords = {
      height: dropdownStartCoords.height,
      width: dropdownStartCoords.width,
      top: dropdownStartCoords.top - menuCoords.top,
      left: dropdownStartCoords.left - menuCoords.left
    };
    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty(
      "transform",
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }

  // Add Event Listener to Clicked Li
  triggers.forEach(trigger => trigger.on("click", handleEnter));

  function handleEnter() {
    // remove all triggers
    triggers.forEach(trigger =>
      trigger.classList.remove(
        "trigger-enter",
        "trigger-enter-active",
        "liClicked"
      )
    );
    // make currently clicked Li visible
    this.classList.add("trigger-enter", "liClicked");
    setTimeout(() => this.classList.add("trigger-enter-active"), 100);

    // shift the background div over current Li
    const specificDropdown = this.querySelector(".p4Dropdown");
    const specificDropdownCoords = specificDropdown.getBoundingClientRect();
    const menuCoords = $(".p4Menu").getBoundingClientRect();
    const coords = {
      height: specificDropdownCoords.height,
      width: specificDropdownCoords.width,
      top: specificDropdownCoords.top - menuCoords.top,
      left: specificDropdownCoords.left - menuCoords.left
    };
    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty(
      "transform",
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }
}

export default programHover;
