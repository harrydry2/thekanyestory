import { $, $$ } from "./bling";

function imgSwap() {
  if (window.innerWidth < 1000) {
    $(".disIMG").src = "https://s3.amazonaws.com/harrydry/disMob.png";
    $(".hunterIMG").src = "https://s3.amazonaws.com/harrydry/hunterMob.png";
    $(".bamn1").src =
      "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob1.jpg";
    $(".bamn3").src =
      "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob3.jpg";
    $(".closerIMG").src =
      "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/closerSmaller.png";
  }
}

export default imgSwap;
