"use strict"

// array destructuring
// simple array destructuring
const arr1 = ["Girija", 26, "CSE"];
const [name1, age1, branch1] = arr1;
console.log(`Name: ${name1}\nAge: ${age1}\nBranch: ${branch1}`); // Name: Girija    Age: 26     Branch: CSE

// nested array destructuring
const arr2 = ["Shankar", 26, "Computer Science", ["Sergarh", 121212]];
const [name2, age2, branch2, [address, pinCode]] = arr2;
console.log(`Name: ${name2}\nAge: ${age2}\nBranch: ${branch2}\nAddress: ${address}\nPin Code: ${pinCode}`); // Name: Shankar    Age: 26     Branch: Computer Science    Address: Sergarh    Pin Code: 121212


// set default value
const arr3 = ["Mahal", 26];
const [name3, age3, branch3 = "Computer Science & Engineering"] = arr3;
console.log(`Name: ${name3}\nAge: ${age3}\nBranch: ${branch3}`); // Name: Mahal     Age: 26     Branch: Computer Science & Engineering