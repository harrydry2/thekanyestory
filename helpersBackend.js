module.exports = sortArray = function(ideas) {
  ideas.sort((a, b) => {
    const aUV = a.upVotes.length;
    const bUV = b.upVotes.length;
    const aTime = Math.abs(new Date() - a.created) / 61000;
    const bTime = Math.abs(new Date() - b.created) / 61000;
    var aScore = time2points(aTime);
    var bScore = time2points(bTime);
    const aPoints = aScore + aUV;
    const bPoints = bScore + bUV;
    return aPoints > bPoints ? -1 : 1;
  });
};

function time2points(aTime) {
  if (aTime < 60) {
    return 25;
  } else if (aTime < 180) {
    return 15;
  } else if (aTime < 500) {
    return 12;
  } else if (aTime < 800) {
    return 8;
  } else if (aTime < 1400) {
    return 6;
  } else if (aTime < 2000) {
    return 4;
  } else {
    return 0;
  }
}
