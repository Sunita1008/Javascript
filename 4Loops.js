//Loops are used to execute a piece of code again and again

// for(let i=1;i<5;i++)
// {
//     console.log("Anu");
// }

// let i=1;
// while( i<=5)
// {
//     console.log("i=",i);
//     i++;
// }

// let i=6;
// do{
//     console.log("i=",i);
// i++;
// }while(i<=5);//do while will execute atleast once even if condition is false

//for-of loop
// let str="Javascript";
// let size=0;
// for(let val of str)
// {
//  console.log("val=",val);
//  size++;
// }console.log("size of string", size);

//for-in loop

// let student={
//     name:"sunita",
//     age:22,
//     cgpa:8.9,
//     marks:74,

// }
// for(let i in student)
// {
// console.log("key=",i ,",","value=",student[i] );
// }

/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value*/

let num=25;
let res=prompt("Enter your guess!");
while(res!= num)
{
 res=prompt("you entered wrong number guess again");
}
prompt("congratulation");