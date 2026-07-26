"use strict"

// array destructuring
// simple array destructuring
const arr1 = ["Girija", 26, "CSE"];
const [name1, age1, branch1] = arr1;

console.log(`Name: ${name1}\nAge: ${age1}\nBranch: ${branch1}`);

// nested array destructuring
const arr2 = ["Shankar", 26, "Computer Science", ["Sergarh", 121212]];
const [name2, age2, branch2, [address, pinCode]] = arr2;

console.log(`Name: ${name2}\nAge: ${age2}\nBranch: ${branch2}\nAddress: ${address}\nPin Code: ${pinCode}`);
