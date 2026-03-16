const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  const arr = between(a, b);
  const suma = arr.reduce((acc, num) => acc + num, 0);

  return suma;
};

function between(a, b) {
  arr = new Array(b - a + 1);
  for (let i = 0; i < (b - a + 1); i++) {
    arr[i] = a + i;
  }
  return arr;
}


// Do not edit below this line
module.exports = sumAll;
