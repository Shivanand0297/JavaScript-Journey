var testArray = [0,1,2,3,4,5];
//console.log(testArray.fill('empty'));
//console.log(testArray.fill('empty' ,2 ,4)); //including start and excluding end

const newtest = [2, 34, 6, 54, 46, 456];

const result = newtest.filter( (num) => num !=6 ); //modifies the array and creates the new one
console.log(result);
console.log(newtest);