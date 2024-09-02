/*
Template Literals

A way to have embedded expressions in String.

`this is a template literal`
 */

let specialString=`this is a template literal`;
console.log(specialString);

let obj={
    name:"anu",
    age:22,
    marks:89,
};
console.log(`this student name is ${obj.name} and her age is ${obj.age}`); //String interpolation->to create string by doing substitution of placeholder
console.log("this student name is",obj.name,"and her age is",obj.age);