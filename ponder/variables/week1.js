let num = 6;
console.log("Initial num:", num);

num = 10;
console.log("Reassigned num:", num);

const password = "Password";
console.log("Password constant:", password);

const PI = 3.14;
let radius = 3;
console.log("PI:", PI);
console.log("Radius:", radius);

const one = 1;
const two = "2";

console.log("one + two:", one + two); // "12"
console.log("one + Number(two):", one + Number(two)); // 3

let course = "WDD131";

if (true) {
  let student = "Israel";
  console.log("Inside block - course:", course);
  console.log("Inside block - student:", student);
}

console.log("Outside block - course:", course);