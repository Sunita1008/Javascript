//block of code that perfored certain task and can be called/invoked whenever needed


//write a fuction to perform sum
// function sum()
// {
//     //code to be executed
//     let a=4;
//     let b=5;
// let c=a+b;
// return c;
// }
// console.log("sum=",sum());

//passing parameter
// function sum(x,y)
// {
//     //code to be executed
    
// let c=x+y;
// return c;
// }
// console.log("sum=",sum(34,5));


//ARROW FUNCTION
/*Compact way of writing a function

    const functionName = ( param1, param2 ...) => 
        {
         do some work
        }
*/
// let sum=(a,b) =>
// {
//     console.log("sum=",a+b);
// }
// sum(3,4);


/*Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/
/*
function Vowel(a)
{
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)==='a' || a.charAt(i)==='e' ||a.charAt(i)==='i'||a.charAt(i)==='o'||a.charAt(i)==='u')
        {
            count++;
        }
    }
return count;
}
console.log("count=",Vowel("amritsar"));


const countV=(a)=>
{
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)==='a' || a.charAt(i)==='e' ||a.charAt(i)==='i'||a.charAt(i)==='o'||a.charAt(i)==='u')
        {
            count++;
        }
    }
console.log("count",count);
}
countV("sunitaa")
*/


//forEach Loop in Arrays

/*arr.forEach( callBackFunction )
CallbackFunction : Here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function.

High order function -> function which take another function as a parameter or return another fuction
*/


// let arr2=["any", "tany"];
// arr2.forEach((val)=>
// {
//     console.log(val.toUpperCase());
// })
//Qs. For a given array of numbers, print the square of each value using the forEach loop
// let arr=[2,3,4];
// arr.forEach((val)=>
// {
//     console.log(val**2);//val*val
// }
// )

//Array Methods
//map()->Creates a new array with the results of some operation. 
//       The value its callback returns are used to form new array

// let arr=[1,2,31,4,5];
//  let num=arr.map((val)=>{
//    return val*2;
// }

// );
// console.log(num);
//filter()->Creates a new array of elements that give true for a condition/filter.

// let evenNum=arr.filter(
//     (val)=>
//     {
//        return val%2==0;
//     }
// );
// console.log(evenNum);

//reduce()->Performs some operations & reduces the array to a single value. It returns that single value.

// let output=arr.reduce((res,val)=>
// {
//    return res+val;
// });
// console.log(output);

// let largest=arr.reduce((res,val)=>
// {
//    return res>val?res:val;
// });
// console.log(largest);

//Q>We are given array of marks of students. Filter our of the marks of students that scored 90+

// let marks=[60,90,34,96,23,92,80];
// let topper=marks.filter((val)=>
// {
//     return val>90;
// });
// console.log("topper=",topper);

//Q>Take a number n as input from user. Create an array of numbers from 1 to n.
let input=[];
let n=prompt("enter number");
for(let i=1;i<5;i++)
{
input[i]=i;
}
console.log(input);
//Use the reduce method to calculate sum of all numbers in the array
let sum_num=input.reduce((prev,curr)=>
    { return prev+curr;}
);
console.log(sum_num);

//Use the reduce method to calculate product of all numbers in the array.
let fact=input.reduce((prev,curr)=>
    { return prev*curr;});
console.log(fact);