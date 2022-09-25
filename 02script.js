// let user = "admin";

// switch case in js
/* switch (user){
     case "admin":
     console.log("you are admin");
     break;
     case "student":
     break;
     console.log("you are a student");
     default:
     console.log("get put of here");

} */

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

// to add more element in array

// let array = [1,2,3,4,5,5];
// console.log(array);
// array.push(9); // to add at the end of an array
// console.log(array);

// console.log(array.slice(1,4));
// slice() can be used to store sliced array in some other array
// let array2=array.slice(1,4);

// console.log(array2);

// splice in array

// let a2=["shiva","rahi","ravi","anshul","saini"];
// console.log(a2);
// a2.splice(2,1,"shivanand","prajapati");
// console.log(a2);

// concatination in array


// let a2=["shiva","rahi","ravi","anshul","saini"];
// console.log(a2);
// let a3=[1,2,3,4];
// let a4=[5,6,7];
// console.log(a2.concat(a3));
// console.log(a2.concat(a3,a4));

// copyWithin in array

// let a1=[0,1,2,3,4,5,6];
// console.log(a1);
// copyWithin(targetindex,starting index, endingindex-1)
// console.log(a1.copyWithin(0, 1,4));

// to check the value in the array
// includes.(value_to_checked, index)
// let a=[1,2,3,4,5,6];
// console.log(a.includes(3,2));

// map in array

// let a=[1,4,9,16];

// console.log(a.map(Math.sqrt));

// shift in array (resmoves values from starting)
// let a=[1,3,4,4];
// console.log(a.shift());
// console.log(a);

// sort in arrays

// let a = ['shiva', 'anshul', 'saini', 'mani'];
// console.log(a.sort());
// console.log(a);

// to display array as strings we use toString

// console.log(a.toString());

// let b = [1,8,3,0,3,4];
// console.log(b.sort());



let b = "shivanand";
let c = b.split("");
console.log(c);

// math functions in js

const PI = Math.PI;
console.log(PI);
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

// console.log(Math.min(-25, 89, 23, 45, 67, 89, 19, 34, 56));

// let num = Math.random();
// let num1 = Math.random() * 11;

// console.log(num1);

// console.log(Math.abs(-10));
// console.log(Math.sqrt(196));
// console.log(Math.pow(3, 2));

// console.log(Math.cos(60));