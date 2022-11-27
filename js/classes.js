// class MySelf {
//   //properties
//   myName = "hein htet zan";
//   age = 28;

//   //methods
//   teach() {
//     return this.myName + " can teach ";
//   }
// }

// const myself = new MySelf();

// console.log(myself);
// console.log(myself.teach());

// class Student {
//   // name,age,gender

//   static run = "this is run";

//   static test() {
//     return "this is test";
//   }

//   btirdthYear2() {
//     return 2022 - this.age;
//   }
//   constructor(inputName, inputAge, gender) {
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = gender;

//     //profit
//     this.preFix = this.gender === "male" ? "mg" : "ma";
//     this.fullName = this.preFix + " " + this.name;
//     this.btirdthYear = 2022 - this.age;
//   }

//   showDetail() {
//     return `I'm ${this.fullName} and ${this.age} ${
//       this.age > 1 ? "years" : "year"
//     } old`;
//   }
// }

// let st1 = new Student("Kyaw Kyaw", 15, "male");
// console.log(st1);
// console.log(st1.showDetail());

// let st2 = new Student("hla hla", 14, "female");
// console.log(st2);

// let st3 = new Student("soe soe", 1, "female");
// console.log(st3);
// console.log(st3.showDetail());
// console.log(Student.test());
// console.log(Student.run);

// const date = new Date();
// console.dir(date);
// console.log(date.getFullYear());
// console.log(date.getYear());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());

// d.setFullYear(2050);
// d.setDate(24);
// console.dir(d.getTime());

// const d = new Date(9482382370078);
// console.dir(d);
// console.dir(d.getFullYear());
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());

// console.log(Math.PI);
// console.log(Math.LOG10E);

// function diff(x, y) {
//   return Math.abs(x - y);
// }

// console.log(diff(5, 10));

// console.log(Math.pow(16, 2));
// console.log(16 ** 2);

// console.log(Math.floor(1.8));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(Math.random() * 100));

// let age = Number("28");
// console.dir(Number);

// console.log(isNaN(5 / "h"));

// let myWeight = "230.45lb";
// console.log(typeof myWeight);

// console.log(Number(myWeight));
// console.log(parseInt(myWeight));
// console.log(parseFloat(myWeight));

// console.log(eval("1 + 1 + 7"));

// const string1 = "A string primitive";
// const string2 = "Also a string primitive";
// const string3 = `Yet another string primitive`;

// const st4 = new String("min ga lar par");

// console.log(st4);

// console.log(st4[0]);
// console.log(st4[1]);
// console.log(st4[2]);
// console.log(st4[3]);
// console.log(st4.length);

// console.log(st4.toUpperCase());
// console.log(st4.split(" "));

// console.log(string1.toUpperCase());

// const arr1 = [];
// console.log(arr1);

// const obj1 = {};
// console.log(obj1);

// function run(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// run(1, 5, 6, 7, 2);

// const fun = new Function();

// console.dir(fun);

// let d = new Date();
// console.log(d);

// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toJSON());
// console.log(d.toTimeString());

// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getTime());
// console.log(d.getHours());

// let d = new Date("2050-1-1");
// console.log(d);

// let next300Hours = new Date();
// next300Hours.setHours(currentDate.getHours() + 300);
// console.log(next300Hours);

// let nextBloodDonate = new Date();
// nextBloodDonate.setMonth(currentDate.getMonth() + 4);
// console.log(nextBloodDonate);

// let totalSWDHours = 50;
// let learnHours = 2;

// function calcLearningFinishDay(total, perDay) {
//   let learnDay = total / perDay;
//   const currentDate = new Date();
//   const learningFinishDay = new Date();
//   learningFinishDay.setDate(currentDate.getDate() + learnDay);
//   console.log(learningFinishDay.toDateString());
// }

// calcLearningFinishDay(50, 2);
// calcLearningFinishDay(50, 1);

// let text = new String("Apple, Banana, Kiwi");
// let part = text.slice(7, 13);
// console.dir(text);
// console.log(text[7]);
// console.log(text[13]);
// console.log(part);

// output
// console.log("hello");
// window.alert("hello I'm window");
// document.write("Hello I'm document");

// input

// let myName = window.prompt("what is your name ?");
// window.alert(myName)
// console.log(myName);
// document.write(myName);

// let firstNum = window.prompt("First Num");
// let secondNum = window.prompt("Second Num");
// console.log(typeof firstNum, typeof secondNum);
// window.alert(parseFloat(firstNum) + parseFloat(secondNum));

// function calcArea(width, breadth) {
//   return width * breadth + "sqft";
// }

// let width = window.prompt("Input Width");
// let breadth = window.prompt("Input Breadth");
// window.alert(calcArea(width, breadth));

// function calcCost() {
//   let amount = window.prompt("amount of pate sa");
//   let price = 500;
//   let cost = amount * price;
//   let tax = cost * 0.05;
//   let total = cost + tax;
//   alert(` cost : ${cost} MMK, \n tax : ${tax} MMK, \n total : ${total} MMK `);
// }

// calcCost();
