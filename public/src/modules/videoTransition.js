import { $, $$ } from "./bling";

const iframe = $(".scrollDownVideo");
const p1Container = $(".p1Container");
const fixedSection = $(".fixedSection");
const p2Container = $(".p2Container");
const footerSection = $(".footerSection");
const wrapper = $(".wrapper");

// iframe width and Height
iframe.style.width = `${window.innerWidth}px`;
iframe.style.height = `${window.innerWidth * 0.5625}px`;

p1Container.style.height = `${window.innerWidth * 0.5625}px`;
p1Container.style.top = `-${window.innerWidth * 0.5625}px`;
fixedSection.style.top = `-${window.innerWidth * 0.5625}px`;

// CSS Transition
window.on("load", animateiframeDown);
function animateiframeDown() {
  setTimeout(() => {
    p1Container.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
    fixedSection.style.transform = `translateY(${window.innerWidth *
      0.5625}px)`;
    p2Container.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
    footerSection.style.transform = `translateY(${window.innerWidth *
      0.5625}px)`;
    iframe.src += "&autoplay=1";
  }, 300);
  setTimeout(() => {
    iframe.style.opacity = `1`;
  }, 1300);
}

// iframe play/pause
iframe.on("click", () => (iframe.paused ? iframe.play() : iframe.pause()));

// iframeResize
window.on("resize", adjustHeight);
function adjustHeight() {
  iframe.style.width = `${window.innerWidth}px`;
  iframe.style.height = `${window.innerWidth * 0.5625}px`;
  p1Container.style.height = `${window.innerWidth * 0.5625}px`;
  p1Container.style.top = `-${window.innerWidth * 0.5625}px`;
  fixedSection.style.top = `-${window.innerWidth * 0.5625}px`;
  p1Container.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
  fixedSection.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
  p2Container.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
  footerSection.style.transform = `translateY(${window.innerWidth * 0.5625}px)`;
}
