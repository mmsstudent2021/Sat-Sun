// bowser object model
// window
// input, output

// const input = window.prompt("Num One",123);
// console.log(input);

// bool => true || false
// const input = window.confirm("ထမင်းစားပြီးပြီလား ?");
// console.log(input, input ? "ထမင်းစားပြီးပြီ" : "ထမင်း မစားရသေးပါ");
// window.close();
// console.log(window.console, window.document, window.history, window.navigator);

//document => DOM ( html,css တွေကို js ထိန်းချုပ်တာ)

// document.write("<h1 style=color:red>min ga lar par</h1>");
// document.write("<h1>min ga lar par</h1>");
// document.write("<h1>min ga lar par</h1>");

// console.dir(document);

// const obj = {
//   a: "a",
//   b: "b",
// };

// obj.a = "aaa";

// console.log(obj);

// dom minipulation

// select an element in dom
// const heading = document.getElementById("heading");

// heading.innerText = "hein htet zan";

// heading.style.backgroundColor = "gray";
// heading.style.padding = "20px";
// heading.style.color = "pink";
// heading.style.fontSize = "40px";

// console.dir(heading);

// heading.remove()

// const para = document.getElementById("para");
// para.innerHTML = "new para";
// console.dir(para.innerText);

// const link = document.getElementById("link");
// console.log(link.innerText);
// link.href = "http://youtube.com";
// link.target = "_blank";
// // link.hhz = "hein htet zan";
// link.setAttribute("hhz", "hein htet zan");
// link.setAttribute("one", "111");
// link.setAttribute("two", "222");
// console.dir(link);

// minipulate ( ပြုပြင်၊ အသစ်ထည့်၊ ဖျက်လို့တယ် ၊ design ပြင်)

// const mypassword = document.getElementById("mypassword");
// const mysalary = document.getElementById("mysalary");

// function showAlert() {
//   alert("I'm alert");
// }

// function run() {
//   const myName = document.getElementById("myname");
//   const heading = document.getElementById("heading");

//   heading.innerText = myName.value;
// }

function exchange() {
  // select
  const amount = document.getElementById("amount");
  const to = document.getElementById("to");
  const output = document.getElementById("output");

  // calculation
  let result = amount.valueAsNumber * to.value;

  // output
  output.innerText = result + "mmk";
}
