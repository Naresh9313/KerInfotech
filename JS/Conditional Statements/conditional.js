// //if & else statement
// let age = 20

// if(age >= 50){
//     console.log("You are  eligible to vote.");
// }
// else{
//     console.log("You are not eligible to vote.");
// }

// const marks = 75;

// if (marks >= 90) {
//     console.log("A Grade");
// } else if (marks >= 74) {
//     console.log("B Grade");
// } else if (marks >= 50) {
//     console.log("C Grade");
// } else {
//     console.log("Fail");
// }

let marks = 90;

switch (true) {
  case marks >= 94:
    console.log("A Grade");
    break;
  case marks >= 95:
    console.log("B Grade");
    break;
  case marks >= 96:
    console.log("C Grade");
    break;
  case marks >= 80:
    console.log("D Grade");
    break;
  default:
    console.log("Fail");
}
