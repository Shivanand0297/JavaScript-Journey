const AC_button = document.querySelector("table .allclearButton")
const inputEL = document.querySelector("form input")
let inputString = "";
let result;






function insert(num){
    inputString = inputString + num;
    inputEL.value = inputString;
    // equals(inputString);
    
  }
  
  function equals(inputString){
      
      result = eval(inputString)
      inputEL.value = result;
      result="";
      
  }
  
  function clean(){
    inputEL.value = "";
    inputString = "";
  }
  
  function back(inputString){
    console.log("inside back");
    let length = inputString.length;
    inputEL.value = inputString.slice(0, length-1);
    inputString = inputString.slice(0, length-1);
    console.log(inputString);
  }


