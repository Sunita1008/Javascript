let person=["sunita", "anu", "sakti"];
console.log(person);

for(let i=0;i<person.length;i++)
{
    console.log(i,"->",person[i]);
}

for(let el of person)
    {
        console.log(el);
    }



//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. find avg marks of entire class

let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
let avg;
for(let mark of marks)
    {
      sum=sum+mark;
    }
    avg=sum/marks.length;
    console.log(`avg marks of class is ${avg}`);//template literal


/*For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer*/

let items=[250,645,300,900,50];
let discount;
for(let val of items)
{
    discount=val/10;
   console.log(val-discount);
}


//Array methods

//push()-> add to end of an array
let arr=[12,13,14,15];
arr.push(16);
arr.push(17);
console.log("elements in arr",arr);

//pop()-> delete from end of an array
arr.pop();
console.log("elements in arr after pop",arr);

//toString() ->convert arr to string
console.log(arr.toString());

//concat() ->join multiple array and return result
let dc_heroes=["batman","superman"];
let marvel_heroes=["hulk","thor","spiderman"];
let indi_heroes=["sakti","hatim"];
let heroes=dc_heroes.concat(marvel_heroes,indi_heroes);
console.log(heroes);

//Unshift( ) : add to start
arr.unshift(11);
arr.unshift(10);
console.log("adding at start of the array",arr);

//shift( ) : delete from start & return
arr.shift();
console.log("delete from start & return",arr);

// slice( ) : returns a piece of the array
// slice( startIdx, endIdx )
console.log("return piece of an array using slice",arr.slice(1,4));
console.log("return piece of an array using slice",arr.slice(4));

// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )
console.log(arr);
//arr.splice(1,2,101,102); //delete & modify
arr.splice(3);
//arr.splice(2,2);//delete
//arr.splice(2,0,101);//add element without deletion
console.log("spliced",arr);

/*Qs. Create an array to store companies -> “Bloomberg”
,
“Microsoft”
,
“Uber”
,
“Google”
,
“IBM”
,
“Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end8*/

let companies=["Bloomerang","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);