// console.log("Hello World");
// console.log("Class started");
// console.log("Attendance");
// console.log("Class Lecture");
// console.log("LUNCH");
// console.log("CLASS END");


// DECLARATION OF VARIABLES using var, let, const
// var a = 10;
// console.log(a);
// var a = 30;
// console.log(a);  // a variable can be redeclared and reinitialised using var.

// var aa =20;
// let a =10;
// console.log(a);
// a = 30;
// console.log(a);   // a variable cann't be redeclared but can be reinitialised using let.

// const b =20;
// // const b =30;
// b =40;
// console.log(b);   // variable can neither be redeclared or reinitialised using const.

// //FUNCTIONS

// function sumOfTwo(param1,param2){
//     var answer=param1+param2;
//     return answer;
// }

// var arg1=10;
// var arg2=20;
// console.log(sumOfTwo(arg1,arg2));  // argument = variable that we are passing in a function

// HOW JAVASCRIPT CODE RUNS GEC and EC  i.e phase 1 and phase 2
//time between phase 1 and phase 2 is temporal dead zone

// var a=10;
// var b=20;
// console.log(a);
// function sumOfTwo(param1,param2){
//     var answer=param1+param2;
//     return answer;
// }

// var arg1=10;
// var arg2=20;
// console.log(sumOfTwo(arg1,arg2));
// console.log(b);

// understanding above peice of code again by let

// let a= 10;
// let b= 20;
// console.log(a);
// function sumOfTwo(param1,param2){
//     let answer = param1 + param2;
//     return answer;
// }
// let arg1 =10;
// let arg2 =20;
// console.log(sumOfTwo(arg1,arg2));
// console.log(b);

// understanding the flow of CODE EXECUTION AGAIN BY ANOTHER CODE

// console.log(a);

// var a =20;
// var b =30;

// console.log(b);

// REPLACING VAR BY LET IN ABOVE CODE

// console.log(aa);

// let aa =200;
// let bb =400;

// console.log(bb);



// var a =200;

// console.log(a);
// let a =300;
// console.log(a);

// var a =2000;
// console.log(a);

// // let a =4000;

// console.log(a);

//SCOPE


// var a = 100;

// console.log(a);

// function sumOfTwo(aa,bb){
//     return aa+ bb;
// }

// var b = 300;

// console.log(sumOfTwo(a,b));


// var a =200;

// function sumOfTwo(a,b){
//     var b =300;
//     return a+b;
// }

// var b =500;
// console.log(sumOfTwo(a,b));


// var x =300;

// function firstFun(){
//     var a = 20;
//     var b = 30;
//     console.log("hello i am first function");

//     function secFun(){                                                           // LEXCAL SCOPE OR LEXICAL ENVIRONMENT
//         var c = 50;
//         console.log("hello i am second function");

//         function thirdFun(){
//             var d = 80;
//             console.log("hello i am third function");
//             console.log(a+b+c+d);
//         }
//         thirdFun();
//     }
//     secFun();
// }
// console.log(firstFun());

//setTimeOut and setInterval

// setTimeout(function (){
//     console.log("Hello i am settimeout")
// },5000);

// setInterval(function(){
//     console.log("i am setinterval")
// },2000);

for(var i=0; i<=5; i++){            // IMPORTANT MYNTRA INTERVIEW QUESTION
    setTimeout(function(){
        console.log(i)
    },2000);
}

// TRYING ABOVE CODE VIA LET
for(let i=0; i<=5; i++){
    setTimeout(function(){
        console.log(i)
    },2000);
}