//1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

/*
let v1 = 'shivanand';
let v2 = true;
let v3;
let v4 = null;

console.log(`v1 value is ${v1} and type is ${typeof v1}`);
console.log(`v2 value is ${v2} and type is ${typeof v2}`);
console.log(`v3 value is ${v3} and type is ${typeof v3}`);
console.log(`v4 value is ${v4} and type is ${typeof v4}`);
console.log(v1.to());
*/

//4. Check if the string contains a word Script using includes() method.
// let a =['shivanand', 'Script','anithing','manythings']
// let result = a.includes('Script');
// console.log(result);

//5. Split the string into an array using split() method

// let test = 'shivanand';
// console.log(test.split(''))


//7. Use lastIndexOf to determine the position of the last occurrence of a script.

// const array = ['shiva','sini','anshul','som'];
// console.log(array.lastIndexOf('anshul'));


//8. Use search to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// TODO: wrong

// const array2 = 'You cannot end a sentence with because because because is a conjunction';
// console.log(array2);
// const arraySplit = array2.split('');
// console.log(arraySplit);
// let result = arraySplit.findIndex('because');
// console.log(result);

//9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

/*
const names = ' shivanand ';
const newarray = names.split('');
console.log(newarray);

newarray.forEach( ()=> {
    if(newarray[0] == ' '){
        newarray.shift();
    }
    if(newarray[newarray.length-1] == ' '){
        newarray.pop();
    }
});
console.log(newarray);
*/

// above can also be done as below

// let text = "       Hello World        ";
// let result = text.trim();
// console.log(result);


//(4 != '4') //false
//(4 !== '4') //true
/*
console.log(4 !== '4');
console.log(4 == '4');
console.log(4 === '4');
*/

//- Find the length of python and jargon and make a falsy comparison statement.

/*
let lenghtarray = Array.from('python');
console.log(lenghtarray.length);
let lenghtarray2 = Array.from('jargon');
console.log(lenghtarray2.length);
console.log(lenghtarray.length !== lenghtarray2.length);
*/

// TODO:
/*12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
/*
let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now);
console.log(now.toString());
*/


// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
/*
const d = new Date("2022-03-2012y");
console.log(d);
console.log(d.toDateString());
*/

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*
let age = prompt("what is your age")

if (age >=18) alert('You are old enough to Drive'); 
else{
    let wait = 18 - age;
    alert(`Wait ${wait} no. of years to start drive`);
}
*/

//20. Write a code which can give grades to students according to theirs scores:

/*
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/

/*
let score = 85;

if ((score>=80 && score<=100)) console.log('A');
else if((score>=70 && score<=89)) console.log('B');
else if((score>=60 && score<=69)) console.log('C');
else if((score>=50 && score<=59)) console.log('D');
else console.log('F');
*/


/*
const array = [11, 'shiva', 23, 'anurag'];
let myarray = [];
array.forEach(element => {
    if (typeof(element) === 'string'){
        myarray.push(element);
    }
});
console.log(myarray);
*/

//21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - July, April or May, the season is Spring
// - June, July or August, the season is Summer
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.

/*
let season = "July";
if (season=='September' || season=='October'|| season=='November') console.log('the season is Autumn');
else if (season=='December' || season=='January'|| season=='February') console.log('the season is Winter');
else if (season=='March' || season=='April'|| season=='May') console.log('the season is Spring');
else if (season=='June' || season=='July'|| season=='August') console.log('the season is Summer');
*/

//22. Write a program which tells the number of days in a month.

/*
let date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
function daysInMonth(currentYear, currentMonth){
    return new Date(currentYear, currentMonth, 0).getDate();
}

let result = daysInMonth(currentYear, currentMonth)
console.log(`The no. of days is ${result}`);
*/


/*
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart, if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
*/

/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
let result = shoppingCart.includes('Meat');
if (!result){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}


let result2 = shoppingCart.includes('Sugar');
if (!result2){
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
}

shoppingCart[2]='Green Tea';
console.log(shoppingCart)
*/

/*

27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

/*
const ages = [19, 22, 19, 24, 20, 25, 26, 45, 25, 28, 30]

// sorting array
console.log(ages.sort());
console.log(`min age is ${ages[0]} and max age is ${ages[ages.length-1]}`)
// median

let mdnPosition = ages.length/2;

if (ages.length%2===0){
    console.log(`Median is ${ages[mdnPosition]}`);
}
else{
    let temp = Math.floor(mdnPosition)
    console.log(`Median is ${ages[temp]}`);
}
let sum = 0;
for(let i=0; i<ages.length; i++){
    sum = sum + ages[i];
    var sumResult = sum;
}
console.log(sumResult);
console.log(`Avarage is ${sumResult/ages.length}`);
*/
