import { $, $$ } from "./bling";

const video = $("video");

function videoPlay() {
  video.on("click", function() {
    this.paused ? this.play() : this.pause();
  });
}

export default videoPlay;
