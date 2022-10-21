// variables
const binaryNoInputEL = document.querySelector("#binary");
const submitBtn = document.querySelector(".btn");
const result_span = document.querySelector("#result-span");

// let binaryNo = 101101101011;
let result = 0;
let biNoRevArray = [];
let digit;

const calculate = (binaryNo) => {
  console.log(binaryNo);
  while (binaryNo) {
    digit = binaryNo % 10;
    biNoRevArray.push(digit);
    binaryNo = binaryNo / 10;
    binaryNo = Math.round(binaryNo);
  }

  // reversing the array to take digits from left to right
  biNoRevArray.reverse();
  console.log(biNoRevArray);

  for (let i = 0; i < biNoRevArray.length; i++) {
    result = result * 2 + biNoRevArray[i];
  }
  return result;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  result_span.style.fontWeight = "800";
  result_span.style.color = "black";
  result_span.innerText = calculate(binaryNoInputEL.value);
  binaryNoInputEL.placeholder = binaryNoInputEL.value;

  reset();
});

const reset = () => {
  binaryNoInputEL.value = "";
  result = null;
  biNoRevArray = [];
};

binaryNoInputEL.addEventListener("input", (e)=>{
  // console.log(e);
    if(e.data!=0 && e.data!=1){
      alert("Binary Number Consists Only 0 & 1")
      binaryNoInputEL.value = ""; 
    }
})






/**
 * let binaryNo = 100011;
let result = 0;
let biNoRevArray = [];
let digit;

while (binaryNo) {
  digit = binaryNo % 10;
  biNoRevArray.push(digit);
  binaryNo = binaryNo / 10;
  binaryNo = Math.round(binaryNo);
}

console.log(biNoRevArray);


for(let i = 0; i<biNoRevArray.length; i++){

    result = (result * 2) + biNoRevArray[i]; 
}

console.log(result);
 */
