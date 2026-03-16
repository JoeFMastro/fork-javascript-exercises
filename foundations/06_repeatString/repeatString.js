const repeatString = function (word, times) {
  if (times < 0) {
    return "ERROR";
  }
  let arr = new Array(times).fill(word);
  return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
