/*Conditional statements allow you to execute specific blocks of code based on conditions. 
If the condition is met, a particular block of code will run;
 otherwise, another block of code will execute based on the condition.*/

 //if
 //if-else
 //if-else-if
 //ternary
 //switch
 //nested if

let color="white";
let mode;
if(color=== "black")
{
    mode="white";
}
else if(color === "blue")
{
    mode="black";
}
else
{
    mode="blue";
}
console.log(mode);


//ternary (cond)?true:fallse
let result=(67<2)?"true statement":"false statement";
console.log(result);

//switch
let grade;
let marks=89;
if(marks>90 && marks<100)
{
    grade="A";
}
if(marks>80 && marks<90)
    {
        grade="B";
    }
    if(marks>70 && marks<80)
        {
            grade="C";
        }
        if(marks>60 && marks<70)
            {
                grade="D";
            }
switch(grade)
{
    case "A":
        console.log("excellent");
        break;

        case "B":
            console.log("good");
            break;

            case "C":
                console.log("average");
                break;
        
                case "D":
                    console.log("poor");
                    break; 
}