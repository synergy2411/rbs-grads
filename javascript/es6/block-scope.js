// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOAD"
//         console.log(flash);             //?
//     }else{
//         let flash = "FLASH"
//     }
// }

// demo([1,2,3,4]);

// const action = "ACTION";
// action = "New Value";
// console.log(action);

const USER = {
    firstName : "Foo"
}

// USER = {
//     firstName : "Bar"
// }

let user = Object.freeze({
    firstName : "Foo"
})

USER.firstName = "Bar";

console.log(USER);