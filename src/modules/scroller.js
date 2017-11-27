import { $, $$ } from "./bling";

const sc1 = $(".sc1");
const sc2 = $(".sc2");

function scrollerFunction() {
  (function startInterval() {
    setInterval(() => {
      incrementTransform1();
      incrementTransform2();
    }, 50);
  })();

  let sc1Translate = 0;
  let sc2Translate = 0;

  function incrementTransform1() {
    if (sc1Translate === -320) {
      sc1Translate = 320;
    } else {
      sc1Translate--;
    }
    let sc1TranslateRem = sc1Translate / 10;
    sc1.style.transform = `translateY(${sc1TranslateRem}rem)`;
  }

  function incrementTransform2() {
    if (sc2Translate === -640) {
      sc2Translate = 0;
    } else {
      sc2Translate--;
    }
    let sc2TranslateRem = sc2Translate / 10;
    sc2.style.transform = `translateY(${sc2TranslateRem}rem)`;
  }
}

export default scrollerFunction;
