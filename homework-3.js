// const number = parseInt(prompt("Enter a number: "));
// Ф-ция repeat принимает строку и число в качестве параметров и возвращает строку, повторенную <число> раз
// repeat("#", 5) // ===> "#####"

// const repeatString = (str, n) => {
//   newString = "";
//   for (i = n; i > 0; i--) {
//     // while (n-- n>0)
//     newString = newString + str;
//   }
//   return newString;
// };

// let string = " :-) ";
// let number = 3;
// console.log(repeatString(string, number));

// 2. Функция getFirstNPrimes находит первые n простых чисел и
// возвращает стоку с числами через пробел и запятую
// getFirstNPrimes(6)  // ==> "2, 3, 5, 7, 11, 13"
// const getFirstNPrimes = (upToNumber) => {
//   let counter = 0;
//   let i = 2;
//   let str = " ";
//   while (counter < upToNumber) {
//     if (isPrime(i)) {
//       counter++;
//       str += i + " ";
//     }
//     i++;
//   }
//   return str;
// };
// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let x = 2; x < num; x++) {
//     // trying to devide the number
//     if (num % x === 0) {
//       return false; //num is not a Prime number
//     }
//   }
//   return true; // if all checks are passed - the number is Prime!
// };
// let nOfPrimes = 3;
// console.log(`This is the result: ${getFirstNPrimes(nOfPrimes)}`);

//  3. Ф-ция calculate принимает 2 числа и коллбэк. Возвращает результат вычислений колбэка с данными аргументами
//  Создать 4 колбэка - sum(a, b), diff(a, b), multiply (a, b), divide(a,b)
//  Сделайте проверку типов аргументов: если хотя бы один из 2 первых аргументов - не
//  число просто верните строку - "Invalid args type"
//  Функция по умолчанию пусть будет sum. Т.е. если не передавать 3й аргумент, calculate вернет сумму чисел
//  calculate(4, 5, multiply) // ==> 20

// const sum = (a, b) => {
//   return a + b;
// };

// const multiply = (a, b) => {
//   return a * b;
// };

// const diff = (a, b) => {
//   return a - b;
// };

// const divide = (a, b) => {
//   return a / b;
// };

// const calculate = (a, b, callback) => {
//   // весь if можно было бы заменить переметром по умолчанию  callback = sum
//   //но логика правильная
//   if (!callback) {
//     //  === - обязательно!
//     // ну и раз уж решил писать через if -можно просто  if (!callback) - помнишь, что тип undefined имеет всего одно значение - undefined, поэто это то же самое, толлько короче)
//     return sum(a, b);
//   }
//   if (isNaN(a) || isNaN(b)) {
//     return "Invalid args type";
//   }
//   return callback(a, b);
// };

// let [number1, number2] = [12, 120]; // var - не надо, много лет уже так не пишут
// console.log(` The result is: ${calculate(number1, number2)}`);

// 4. Ф-ция printNumbers принимает число num и колбэк cb. Должна выводить все числа до num,
// которые которые проходят проверку колбэком.
// Аргументы по умолчанию: num = 100, cb = isPrime
// printNumbers(7, isEven) // ==> 2, 4, 6
// printNumbers(7, isOdd) // ==> 1, 3, 5, 7
// printNumbers(7, isPrime) // ==> 2, 3, 5, 7

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// }

// function isOdd(number) {
//   if (number % 2 === 1) {
//     return true;
//   }
// }

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let x = 2; x < num; x++) {
//     // trying to devide the number
//     if (num % x === 0) {
//       return false; //num is not a Prime number
//     }
//   }
//   return true; // if all checks are passed - the number is Prime!
// };

// // MAIN
// const printNumbers = (a, callback) => {
//   if (typeof callback == "undefined") {
//     return sum(a);
//   }
//   if (isNaN(a)) {
//     return "Invalid args type";
//   }

//   let counter = 0;
//   let i = 1;
//   let str = " ";
//   while (counter < a) {
//     if (callback(i)) {
//       counter++;
//       str += i + " ";
//     }
//     i++;
//   }
//   return str;
// };

// const upToNumber = 5;
// console.log(`The result is:${printNumbers(upToNumber, isPrime)}`);
