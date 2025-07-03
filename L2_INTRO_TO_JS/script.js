// console.log("diksha");
// function nameOfFunc(param1,param2){
//     var sumOfTwo = param1 + param2;
//     return sumOfTwo;
// }
// let arg1 = 10;
// let arg2 = 20;
// console.log(nameOfFunc(arg1,arg2));

// console.log("starting JS code");

// var a = 20;
// var b = 40;
// console.log(a);
// console.log(b);

// var sumOfTwo = a+b;
// console.log(sumOfTwo);

// function doubleTwoNumbers(xx,yy){
//     var ans = (xx+yy)/2;
//     return ans;
// }

// doubleTwoNumbers(300,200);
// console.log("bye JS code");



// // LETS START NEW
// // Ques how to get 0 1 2 3 4 5 as output from following code?
// for (var a = 0; a <= 5; a++){
//     setTimeout(function(){
//         console.log(a);
//     },2000);
// }

// // ANSWER

// for (var a = 0; a <= 5; a++){
//     function close(i){
//         setTimeout(function(){
//             console.log(i);
//         },2000);

//     }
//     close(a);
// }


// //FUNCTIONS

// //NORMAL FUNCTION
// function nameOfFunc(){
//     return 1;
// }

// //ANONYMOUS FUNCTION
// function(){

// }

// //ARROW FUNCTION
// ()=>{

// }

// //FUNCTION EXPRESSION
// var myFunction


//  OUTPUT ??

// var functionB = function () {
//     console.log("Hello World");

// }
// functionB();

// // IF WE TRY TO CALL FUNCTION BEFORE

// functionB();
// var functionB = function () {
//     console.log("Hello World");    // HERE OUTPUT IS NOT OBTAINED AS FUNCTIONB IS A VARIABLE THAT STORES A  ANONYMOUS FUNCTION THEREFORE IT ACTS LIKE A VARIABLE

// }


// FIRST CLASS FUNCTION

// function sumOfTwo(y,z) {
//     var sum1 = y+z;
//     return sum1;
// }

// function sumOfThree(a,b){
//     var sum = a+b;
//     return sum;
// }
// var x=10;
// var p=20;
// var q=30;

// console.log(sumOfThree(sumOfTwo(p,q),x));    // THIS WAS ALSO OKAY BUT IF WE ONLY WANT TO SEND FUNCTION AS ARGUMENT THEN LOOK AT NEXT CODE

// function functionb(a){
//     console.log(a);
//     return a;
// }

// function functionc(){
//     console.log("Hello world")
//     return "Hello";
// }

// console.log(functionb(functionc()));

// // FUNCTION AS AN ARGUMENT
// function outerFunc(arg1){
//     console.log("Hello i am Outer function");
//     arg1();
// }

// outerFunc(function(){
//     console.log("hello i am inner function");

// })

// return a function

// function outerFunction(collegeName){
//     console.log("this is my college");
//     return function(){
//         console.log("Hello from : ", collegeName);
//         return 1;
//     }
// }
// var myData = outerFunction("Vips");
// console.log(myData());

// // without CALLBACK FUNCTION

// setTimeout(() => {
//     console.log("menu");
// }, 5000);

// setTimeout(() => {
//     console.log("order");
// }, 3000);

// setTimeout(() => {
//     console.log("dinner");
// }, 10000);

// setTimeout(() => {
//     console.log("sauf");
// }, 1000);

// setTimeout(() => {
//     console.log("bill");
// }, 3000);

// by CALLBACK FUNCTION



