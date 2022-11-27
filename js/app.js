// let numOne = 50;
// let numTwo = numOne;
// console.log(numTwo);

// numOne = 10;

// console.log(numOne);
// console.log(numTwo);

// let arr1 = ["a", "b"];
// console.log(arr1);
// let arr2 = arr1;
// console.log(arr2);

// arr1[2] = "c";

// console.log(arr1);
// console.log(arr2);

// let obj1 = { a: "a", b: "b" };
// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.c = "c";

// console.log(obj1);
// console.log(obj2);

// let obj = { name: "ornage", price: 150, weight: 0.5, unit: "peice" };

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// obj.price = 200;
// obj.color = "orange";

// console.log(obj);

// const obj = {};
// obj.a = "a";
// obj.b = "b";
// obj.c = "c";
// obj.a = "aa";

// console.log(obj);

// let b = null;

// let a;
// a = 5;
// console.log(a);

// function run() {
//   let x = 5;
//   let y = 10;
//   return x + y;
// }

// console.log(run());

// function run() {
//   console.log("hello");
//   return "this is run";
//   console.log("hello1");
//   console.log("hello2");
//   console.log("hello3");
// }

// console.log(run());

// function inchesToFeet(inches = 0) {
//   //   console.log(inches);
//   return inches / 12 + "ft";
// }

// console.log(inchesToFeet(100));
// console.log(inchesToFeet(50));
// console.log(inchesToFeet(15));
// console.log(inchesToFeet(24));
// console.log(inchesToFeet());

// function showResultInSqureFeet(input) {
//   return input + "sqft";
// }

// function calcArea(width = 0, breadth = 0) {
//   console.log(arguments);
//   return showResultInSqureFeet(width * breadth);
// }

// console.log(calcArea(18, 60, 50));
// console.log(calcArea());

// const run = function () {
//   return "this is run";
// };
// // console.log(run());

// (function () {
//   console.log("this is iife");
// })();

// let bdYear = 1994;
// let currentYear = 2022;

// let text = ` my age is ${(function () {
//   return currentYear - bdYear;
// })()}  `;

// console.log(text);

// let a;

// {
//   a = "a";
//   console.log(a);
// }

// console.log(a);

// console.log(a);
// var a;
// a = "a";

// console.log(run());
// const run = function () {
//   return "run";
// };
// console.log(st());

// function st() {
//   return "st";
// }

// const obj = {
//   //properties
//   a: "a",
//   b: "b",
//   //method
//   c: function () {
//     console.log(this.a);
//     return "this is c";
//   },
//   d() {
//     return "this is d";
//   },
// };

// console.log(this);

// console.log(obj.c());
// console.log(obj["c"]());
// console.log(obj.a);
// console.log(obj["a"]);

// let condition = "";

// if (condition) {
//   console.log("true code block");
// } else {
//   console.log("false code block");
// }

// 5 < 10 ? console.log("true expression") : console.log("false expression");

// voting

// operator === ooredoo, bill > 20

// && -> အကုန်မှန်
// || -> တစ်ခုမှန်
// ! -> ဆန်ကြင်ဖတ်

// function canIVote(operator, bill) {
//   if (operator === "ooredoo" && bill >= 15) {
//     return "U can Vote to MMIdol";
//   }

//   return false;
// }

// console.log(canIVote("mpt", 100));
// console.log(canIVote("ooredoo", 200));
// console.log(canIVote("atom", 15));

// 65,21,20

// function pickABus(busNo) {
//   if (busNo === 65 || busNo === 21 || busNo === 20) {
//     return "U will reach to MMS IT";
//   }
//   return false;
// }

// console.log(pickABus(30));
// console.log(pickABus(65));
// console.log(pickABus(21));
// console.log(pickABus(20));

// let news = true;
// console.log(news);
// let mwd = !news;
// console.log(mwd);

// let i = true;
// i = !i;
// console.log(i ? "open" : "close");

// i = !i;

// console.log(i ? "open" : "close");

// i = !i;

// console.log(i ? "open" : "close");

// i = !i;

// console.log(i ? "open" : "close");

// i = !i;

// console.log(i ? "open" : "close");

// for (let i = 1; i <= 3; i++) {
//   console.log("I' work 1");
//   console.log("I' work 2");
//   console.log("I' work 3");
// }

// let i=1; while(i<=3) { i++ }
// let i = 1;
// while (i <= 3) {
//   console.log("work 1");
//   console.log("work 2");
//   console.log("=======");
//   i++;
// }

// start 1 to 6
// number to stars

// function numberToStar(number) {
//   let result = "";
//   for (let i = 1; i <= number; i++) {
//     result += "* ";
//   }
//   return result;
// }

// // console.log(numberToStar(5));

// function looper(start, end) {
//   if (start < end) {
//     for (let i = start; i <= end; i++) {
//       console.log(numberToStar(i));
//     }
//   } else {
//     for (let i = start; i >= end; i--) {
//       console.log(numberToStar(i));
//     }
//   }

//   return true;
// }

// looper(1, 5);
// looper(5, 1);
// looper(15, 5);
// looper(2, 5);

// for (let i = 6; i >= 1; i--) {
//   console.log(numberToStar(i));
// }

// console.log(5 % 2 ? "odd" : "even");
// console.log(6 % 2 ? "odd" : "even");
// console.log(15 % 2 ? "odd" : "even");
// console.log(4 % 2 ? "odd" : "even");

// function numberToStar(number, end) {
//   let result = "";
//   for (let i = 1; i <= end; i++) {
//     if (number % 2) {
//       result += i % 2 ? "* " : "= ";
//     } else {
//       result += i % 2 ? "= " : "* ";
//     }
//   }
//   return result;
// }

// // console.log(numberToStar(5));
// // console.log(numberToStar(6));
// // console.log(numberToStar(7));
// // console.log(numberToStar(9));

// function run(end) {
//   for (let i = 1; i <= end; i++) {
//     console.log(numberToStar(i, end));
//   }
// }

// run(3);
// run(6);
// run(9);
