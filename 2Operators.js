let a=5;
let b=2;

//arithmeic operator

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//modulus operator

console.log(a%b);

//Exponential

console.log(a**b); //5^2

//Comparision  ->  (== , === , != , !==, < ,> , <=, >=)

let c=5;
let d="5";
console.log(c==d);//true  //string->number
console.log(c===d);//false
console.log(c!=d);//false
console.log(c!==d);//true
//Q Differnec between == and ===
    /* == checks only the value but === check both its value and type
       It is the stricter version of ==
       The == operator compares the values of two variables after performing type conversion 
        On the other hand, the === operator compares the values of two variables without performing type conversion. 
    */

//Logical (&& ,||, !)


/*Get user to input a number using prompt(“Enter a number:”). Check if the number is
a multiple of 5 or not.*/

let num=prompt("Enter a number:");
if(num%5==0)
{
    console.log(num ,"is multiple of 5");
}
else{
    console.log(num ,"is not multiple of 5");
}