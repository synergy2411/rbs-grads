// var addition = function (num1, num2){
//     return num1 + num2;
// }

// // console.log(add(3,5));

// console.log(addition(2,3));
// console.log(addition);

// FUNTION NESTING

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// // console.log(mystery());         //function body

// var nestedFunc = mystery();
// console.log(nestedFunc());      //?

// IIFE :

// (function(){
//     console.log("IIFE");
// })();

// CLOSURE

// function testClosure(){
//     var x = 4;

//     return function(){
//         return ++x;
//     }
// }

// // console.log(testClosure()());     //?

// var nestedFunc = testClosure();
// console.log(nestedFunc());            //5
// console.log(nestedFunc());          // ?

// function buildTicket(transport){
//     var numOfPass = 0;
//     return function(name){
//         return "Hello Mr. " + name + "\nYou are going via " + transport +
//                 "\nYour ticket ID #" + (++numOfPass);
//     }
// }

// var ship = buildTicket("Ship");
// console.log(ship("Foo"));
// console.log(ship("Bar"));

// var air = buildTicket("Air");
// console.log(air("Baz"));

// console.log(ship("Abc"));

// ARROW FUNCTION

// ES5
// var numbers = [2, 3, 4, 5, 6];

// var newArr = numbers.map(function(value, i){
//     return value * 2;
// })

// console.log(newArr);

// ES6
// var newArr1 = numbers.map((value,i) => {
//     console.log(i);
//     return value * 3
// });
// console.log(newArr1);

// var num = numbers.filter(value => value > 4);
// console.log(num);   

// forEach / find / findIndex / reduce / filter / some / every / map


// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         // var nestedFunc = function(){
//         //     return "Hello "+  this.firstName + " " + this.lastName
//         // }

//         var nestedFunc = () => "Hello " + this.firstName + " " + this.lastName
//         return nestedFunc();
//     }
// }

// console.log(user.sayHello());       //?