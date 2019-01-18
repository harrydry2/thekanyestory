import { $, $$ } from "./bling";

function imgSwap() {
  if (window.innerWidth < 730) {
    // $(".bamn1").src =
    //   "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob2.jpg";
    // $(".bamn1").src =
    //   "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob1.jpg";
    // $(".bamn1").src =
    //   "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob3.jpg";
    $(".closerIMG").src =
      "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/closerSmaller.png";
  }
}

export default imgSwap;
