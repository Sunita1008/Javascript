console.log("Welcome first JS");
//JS is dynamically typed language
//var, let , const
/*var  -> can be redeclared and updated. Is a global scope variable

let ->cannot be redeclared but can be updated. Is a block scope variable

const ->cannot be redeclared and cannot be updated. Is a block scope variable */

var a=12;
var a="sunita";
console.log(a); //var value is overriden

let name="Sunita";
//let name=12;  //let cannot be redeclared
name="dhruv";   //let can be updated
console.log("let updated variable "+name);

console.log(typeof a);//typeof tell the type of data

{
    let a=12;
    console.log(a);
}
{
    let a;  //let and var can also be not initialised
    console.log(a);
}


const pi=3.14 //const have to have a value
console.log(pi);

//Objects

const student={
    firstName:"Sunita",
    lastName:"Nandy",
    age:21,
    cgpa:9,
};
console.log(student);

const instructor={
    firstName:"Shraddha",
     lastName:"Khapra",
     totalPost:195,
     followers:569,
     isFollowing:true,
};
console.log(typeof instructor);
console.log(typeof instructor.firstName);
console.log(instructor);