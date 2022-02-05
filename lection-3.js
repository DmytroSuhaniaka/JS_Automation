let counter = 0;
let num = 0;
while (num < 10) {
  console.log(num++);
}

const sum = (param1 = 1, param2) => {
  if (!param2) {
    param2 = 0;
  }
  param2 = param2 || 0;

  console.log(param1 + param2);
  return param1 + param2;
};

sum(2);

const sum = (a, b) => a + b;

const greet = (phrase) => console.log(phrase);

const result = sum(3, 4);

function sum(a, b = 7) {
  // function declaration
  return a + b;
}

const sum = function (a, b) {
  // function expression
  return a + b;
};

sum(5, 6);

const pow = (base, exp) => {
  let result = base;
  // 2 * 2 * 2 * 2
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return result;
  }
  for (let i = 2; i <= exp; i++) {
    result *= base;
  }
  return result;
};

function findMin(a, d, s) {
  let minVal = null;
  minVal = a < d ? a : d;
  minVal = minVal < s ? minVal : s;
  return minVal;
}

function findMiddle(a, b, c) {
  let midVal = null;

  if ((a > b && a < c) || (a < b && a > c)) {
    midVal = a;
  } else if ((b > a && b < c) || (b < a && b > c)) {
    midVal = b;
  } else {
    midVal = c;
  }

  return midVal;
}

function findMax(b, x, y) {
  let maxVal = null;
  maxVal = b > x ? b : x;
  maxVal = y > maxVal ? y : maxVal;
  return maxVal;
}

const sort = (a, b, c) => {
  const min = findMin(a, b, c);
  const mid = findMiddle(a, b, c);
  const max = findMax(a, b, c);

  return `${min} ${mid} ${max}`;
};

function withSharp(str) {
  return `### ${str} ###`;
}

function withStars(str) {
  return `*** ${str} ***`;
}

function log(phrase, func = withSharp) {
  const formatted = func(phrase);
  //console.log(formatted)
  return formatted;
}

log("ololo", withSharp);

let prime = true;
for (let i = 2; i <= 10; i++) {
  if (isPrime(i)) {
  }
}

function isPrime(num) {
  for (let d = 2; d < num; d++) {
    if (num % d === 0) {
      return false;
    }
  }
  return num > 1;
}

const formRow1 = (row, totalLength, symbol) => {
  let str = "";
  for (let c = 0; c < totalLength; c++) {
    if (c <= row) {
      str += symbol;
    } else {
      str += " ";
    }
  }
  return str;
};

function formRow2(row, totalLength, symbol = "#") {
  let str = "";
  for (let i = 0; i < totalLength; i++) {
    if (i < totalLength - row) {
      str += "#";
    } else {
      str += " ";
    }
  }
  return str;
}

const drawTirangle = (side, callack, symbol = "*") => {
  for (let i = 0; i < side; i++) {
    const str = callack(i, side, symbol);
    console.log(str);
  }
};

drawTirangle(3, formRow1, "#");
