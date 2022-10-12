const test = [
    {a: true}, 
    {b: false},
    {c: true},
    {d: false},
]
// console.log(Object.values(test));

// let result = test.filter(
//     item=>Object.values(item)

//     )
// let result2 = test.filter(
//     item=>Object.values(item)[0]
//     )

// console.log(result);
// console.log(result2);

const result = test.filter((item) => {
    if (Object.values(item)[0] == true) {
      return item;
    }
  });
  console.log(result);