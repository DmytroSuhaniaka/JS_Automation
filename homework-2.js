const { strictEqual } = require("assert");

// 1 Найти минимальное число из трех
function findSmallestOfThree() {
  const a = 14;
  const b = 5;
  const c = 11;
  /*
if (a<b && a<c) {console.log(`The smallest number is a = ${a}`)}
else if (c<a && c<b) {console.log(`The smallest number is c = ${c}`)}
else {console.log(`The smallest number is b = ${b}`)}
*/
  let result =
    a < b && a < c
      ? `The smallest number is a = ${a}`
      : c < a && c < b
      ? `The smallest number is c = ${c}`
      : `The smallest number is b = ${b}`;
  console.log(result);
}
//findSmallestOfThree()

// 2 Найти среднее из трех чисел
function findMiddleOfThree() {
  const a = 1;
  const b = 5;
  const c = 11;
  let result =
    (a > b && a < c) || (a > c && a < b)
      ? `The middle number is a = ${a}`
      : (c < a && c > b) || (c > a && c < b)
      ? `The middle number is c = ${c}`
      : `The middle number is b = ${b}`;
  console.log(result);
}
//findMiddleOfThree()

// 3 Поменять местами значения переменных: допустим, let box1 = 'red ball'; let box2 = 'green ball'.
// Возможно, придется использовать какую-нибудь третью (вспомогательную) коробку? :)
// Вывести в консоль занчения переменных
function swapItems() {
  let boxOne = "red ball";
  let boxTwo = "blue ball";
  console.log(
    `Items before swap: first item: "${boxOne}", second item: "${boxTwo}"`
  );

  let boxThree = boxOne;
  boxOne = boxTwo;
  boxTwo = boxThree;
  console.log(
    `Items after swap: first item: "${boxOne}", second item: "${boxTwo}"`
  );
}
//swapItems()

// 4 Вывести на консоль 3 числа в порядке возрастания через пробел `${a} ${b} ${c}` // let str= '' // str+ a + ' '
function sortNumbers() {
  const a = 721;
  const b = 524;
  const c = 313;
  let result =
    a < b && a < c && b < c
      ? ` ${a} ${b} ${c}`
      : a < b && a < c && b > c
      ? ` ${a} ${c} ${b}`
      : b < a && b < c && a < c
      ? ` ${b} ${a} ${c}`
      : b < a && b < c && a > c
      ? ` ${b} ${c} ${a}`
      : c < a && c < b && a > b
      ? ` ${c} ${b} ${a}`
      : ` ${c} ${a} ${b}`; //(c<a && c<b && a<b)

  console.log(`The numbers from [low] to [high]:${result}`);
}
//sortNumbers()

// 5 Для чисел от 15 до 34 (включительно) вывести надпись: "Number <i> is even", если оно четное. Для нечетных вывести "Number <i> is odd"
function isOddOrEven() {
  let limitButtom = 5;
  let limitTop = 34;

  for (limitButtom; limitButtom <= limitTop; limitButtom++) {
    if (limitButtom % 2 == 0) console.log(`This number is even:${limitButtom}`);
    if (limitButtom % 2 == 1) console.log(`This number is odd:${limitButtom}`);
  }
}
//isOddOrEven()

// 6 Для чисел от 1 до 30 (включительно) вывести:
//   "fizz", если число делится на 3;
//   "buzz", если делится на 5;
//   "fizzbuzz", если делится и на 3, и на 5;
//   во всех остальных случаях вывести само число
function fizzbuzz() {
  let startNum = 1;
  let endNum = 30;

  for (startNum; startNum <= endNum; startNum++) {
    startNum % 3 == 0 && startNum % 5 == 0
      ? console.log(`fizzbuzz     (number is ${startNum} )`)
      : startNum % 3 == 0
      ? console.log(`fizz         (number ${startNum} )`)
      : startNum % 5 == 0
      ? console.log(`buzz         (number is ${startNum} )`)
      : console.log(
          `${startNum}           (this number is not equal to 3 or 5)`
        );
  }
}
// fizzbuzz()

// 7 Вывести сумму всех чисел до 17, кратных 4 // ==> 4 + 8 + 12 + 16 === 40
function sumOfNums() {
  let startNum = 1;
  let endNum = 17;
  let result = 0;

  for (startNum; startNum <= endNum; startNum++) {
    if (startNum % 4 == 0) {
      result += startNum;
    }
  }
  console.log(`result is ${result}`);
}
//sumOfNums()

// 8 Вывести среднее арифметическое всех чисел до 17, кратных 4 // => (4 + 8 + 12 + 16) / 4 === 10
function avgOfNums() {
  let startNum = 1;
  let endNum = 17;
  let result = 0;
  let counter = 0;
  for (startNum; startNum <= endNum; startNum++) {
    if (startNum % 4 == 0) {
      result += startNum;
      counter += 1;
    }
  }
  let average = result / counter;
  console.log(`Result is: ${average}`);
}
//avgOfNums()
