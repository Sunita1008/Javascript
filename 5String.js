//sequence of character to represent text

// let str="sunita";
// let str2='anu';
// console.log(str ,"length-> ",str.length);


//Escape characters ->\n , \t-> length of escape character is 1

// let str="apna\ncollege";
// let str2="sunita\tnandy";
// console.log(str);
// console.log(str2);
// console.log(str.length);


//String methods-> built in functions to manipulate string

// let str="abc";
// console.log(str.toUpperCase());
// let str2="SuNiTa";
// console.log(str2.replace("N", "A"));
// console.log(str2.charAt(3));
// console.log(str2.toLowerCase());
// let str3=" apna college ";
// console.log(str3.trim());
// console.log(str.concat(str2));
// console.log(str2.slice(1,4));

//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input
//Start username with @, followed by their full name and ending with the fullname length.
//eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”

let res=prompt("enter your full name");
let sign="@"+res+res.length;
console.log(sign);