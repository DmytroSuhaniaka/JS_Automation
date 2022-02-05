//console.log('hello')
//
//data types

//primitives
//1. string
let qalightUrl = "https://qalight.com"; // "", "    ",
let char = "a";
let code = "152";
let submitBtnSelector = "btn#submit";
let jsCourse = 'That\'s "JS" course';

//2 number
let height = 182;
let infinity = Infinity; // -Infinity
let x = 0.123;
let y = 123e-3; // 0.123

let notANumber = NaN;
//console.log('sfearf' / 243)

//3 boolean
let isChecked = false;
let isRequired = true;
let hasChanged = true;

// 4 null
let nullExample = null;

// 5 undefined
//let unknown = undefined;
let unknown;
//console.log(unknown)

////////////////////////////////////////////////
// 6 symbol
let id = Symbol("id");

// 7 bigint
let bigInt = 1234567890123456789012345678901234567890n;
//console.log(bigInt)

// reference type
// 8. object
const groupMember = {
  name: "Alexandr",
  age: 31,
  isCoach: true,
  techStack: ["js", "node.js", "react"],
  skills: {
    programming: "intermediate",
    english: "intermediate",
    softSkills: "so-so",
  },
  wife: null,
};

const array = ["Alexandr", "Inna", "Dima", true, 2423, groupMember]; // array is object type

function func() {} // function is object type

const PI = 3.14;

//console.log(typeof null) //object !!!!!

///////////////
//types casting
//1 string casting

const stringExample = String(null);
// console.log(stringExample)

//2 number casting

const nubmerCode = Number("15sf"); //NaN
const boolNum = Number(false); // 0; true ==> 1
const nullNumb = Number(null); //0
const undefNum = Number(undefined); // NaN

const sum = 2 + 2;
//const diff = 3 - 1 //
//const product = 2 * 2 //   /
const power = 2 ** 2; //  2 ** (1/2)
const result = ((2 + 2) * 3) / 5;

const denom = 5 % 2;

// automatic casting
const ratio = "4" / "2"; // number 2
const product = "4" * "2"; // number
const diff = "2" - "2"; // number

const sumConcat = +"2" + 1; // concatenation

// boolean casting
const boolExample = Boolean("");
// "string", " ", 1, 2, objects ==> true
// null, undefined, "", 0 ==> false

//console.log(2 + 1 + "1")

let counter = 2;

//counter = counter + 1
//counter-- //counter = counter - 1

//counter += 1 //counter++
//counter -= 1
//counter *= 2// counter = counter * 2
//counter /= 2

let counter2 = ++counter; //prefix
//counter++ // postfix
console.log("counter2", counter2);
console.log("counter", counter);
