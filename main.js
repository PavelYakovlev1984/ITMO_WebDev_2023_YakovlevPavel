

const DOM = document.getElementById.bind(document);

const domInputName = DOM("inpName");
const domInputSurname = DOM("inpSurname");
const domConResult = DOM("conResult");

let fullName = "";

domInputName.oninput = onInNameInput;
domInputSurname.oninput = onInSurnameInput;

function renderFullName() {
  fullName = domInputSurname.value + " " + domInputSurname.value;
  domConResult.textContext = fullName;
}

function onInNameInput(e) {
  console.log("onInNameInput", { e });
  renderFullName();
}

function onInSurnameInput(e) {
  e.stopPropagation();
  console.log("onInSurnameInput", { e });
  renderFullName();
}
function add(a, b) {
  const result = a + b;
  console.log("add:", a, b, result);
}

console.log(domInputName, domInputSurname, domConResult);

// let name = `Pavel`;
// console.log(name);
// let yearName = 234;
// console.log(yearName);
//
// let febonachi = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
// let arr = new Array(10);
// let user = {
//   name: "",
//   year: "",
//   yearName: 1987,
// };
// arr[10] = febonachi;
// console.log(arr, febonachi);
// console.log(user);
//
// class User {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
//
// let userPavel = new User("Pavel", 1987);
// let userPavel2 = new User("Pavel", 1987);
// console.log(userPavel, userPavel2);
