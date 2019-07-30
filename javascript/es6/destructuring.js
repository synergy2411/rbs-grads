let arr = ["foo", "bar", "bam", "baz"];

let [, , arr3, arr4] = arr

// console.log(arr3);      //bam

// Object destructuring

// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function() {
//         return this.firstName + " " + this.lastName
//     }
// }

// let newUser = {
//     firstName : "New User First Name",
//     lastName : "New User Last Name"
// }

// let {lastName : lname, getFullName} = user;

// console.log(user.getFullName());

// console.log(getFullName());
// console.log(lastName);
// console.log(lname);

// Function borrowing
// let boundFunc = getFullName.bind(newUser);

// console.log(boundFunc());



// Nested destructuring

let user = {
    name : "Foo",
    address : {
        street : "201, Main Road",
        city  :"Delhi"
    },
    friends : ["Bar", "Bam", "Baz"]
}

