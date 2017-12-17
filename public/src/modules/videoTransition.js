import { $, $$ } from "./bling";

const iframe = $(".scrollDownVideo");
const p1Container = $(".p1Container");
const fixedSection = $(".fixedSection");
const p2Container = $(".p2Container");
const footerSection = $(".footerSection");

// iframe width and Height
iframe.style.width = `${window.innerWidth}px`;
iframe.style.height = `${window.innerHeight}px`;
fixedSection.style.top = `-${window.innerHeight}px`;

// iframeResize
window.on("resize", adjustHeight);
function adjustHeight() {
  iframe.style.width = `${window.innerWidth}px`;
  iframe.style.height = `${window.innerHeight}px`;
}

// CSS Transition
p1Container.style.top = `-${window.innerHeight}px`;
window.on("load", animateiframeDown);
function animateiframeDown() {
  setTimeout(() => {
    p1Container.style.transform = `translateY(${window.innerHeight}px)`;
    fixedSection.style.transform = `translateY(${window.innerHeight}px)`;
    p2Container.style.transform = `translateY(${window.innerHeight}px)`;
    footerSection.style.transform = `translateY(${window.innerHeight}px)`;
    iframe.src += "&autoplay=1";
  }, 300);
  setTimeout(() => {
    iframe.style.opacity = `1`;
  }, 1300);
}

// iframe play/pause
iframe.on("click", () => (iframe.paused ? iframe.play() : iframe.pause()));
