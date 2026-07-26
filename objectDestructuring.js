"use strict"

// object destructuring
// simple object destructuring
const obj1 = {
    name1: "Girija",
    age1: 26,
    branch1: "CSE"
};
const {name1, age1, branch1} = obj1;
console.log(`Name: ${name1}\nAge: ${age1}\nBranch: ${branch1}`); // Name: Girija    Age: 26     Branch: CSE


// nested object destructuring
const obj2 = {
    name2: "Shankar",
    age2: 26,
    branch2: "Computer Science",
    address: {
        at: "Sergarh",
        pinCode: 121212
    }
};
const {name2, age2, branch2, address: {at, pinCode}} = obj2;
console.log(`Name: ${name2}\nAge: ${age2}\nBranch: ${branch2}\nAddress: ${at}\nPin Code: ${pinCode}`); // Name: Shankar    Age: 26     Branch: Computer Science    Address: Sergarh    Pin Code: 121212


// set default value
const obj3 = {
    name3: "Mahal", 
    age3: 26
};
const {name3, age3, branch3 = "Computer Science & Engineering"} = obj3;
console.log(`Name: ${name3}\nAge: ${age3}\nBranch: ${branch3}`); // Name: Mahal     Age: 26     Branch: Computer Science & Engineering


// rename object variable
const obj4 = {
    name4: "Ram",
    age4: 26
};
const {name4: studentName, age4} = obj4;
console.log(`Name: ${studentName}\nAge: ${age4}`); // Name: Ram     Age: 26