// targeting all the buttons
/**
 * TODO: Approch
 * 
 * 1. first thing to take care for is to generate random no, letters(UPPERCASE & lowercase), symboles
 *  for generating no & letters we will use String.fromCharCode() method of the string object.
 * 
 * 2. After checking all the function I will store these functions inside a object, to access later by key values
 * 3. Next we will target all the buttons.
 * 4. Adding event listner on the generate button.
 * 5. converting all the string to there respective types. 
 * 
 */


const resultEL = document.querySelector("#result")
const uppercaseEL = document.querySelector("#uppercase")
const lowercaseEL = document.querySelector("#lowercase")
const numbersEL = document.querySelector("#numbers")
const symbolsEL = document.querySelector("#symbols")
const lengthEL = document.querySelector("#length")
const generateEL = document.querySelector("#generate")
const clipboardEL = document.querySelector("#clipboard")

const randomFunc ={
    upper: getRandomUpper,
    lower: getRandomLower, 
    number: getRandomNumber,
    symbols: getRandomSymbol
};

// adding event listner to generate button

generateEL.addEventListener("click",()=>{
    // console.log(typeof(lengthEL.value));
    let length = Number(lengthEL.value);    // converting string to number type
    let isuppercase = uppercaseEL.checked;
    let islowercase = lowercaseEL.checked;
    let isnumber = numbersEL.checked;
    let issymbol = symbolsEL.checked;
    
   resultEL.innerText = generatePassword(islowercase, isuppercase, isnumber, issymbol, length);    
    // console.log(typeof(length));

})


// TODO: copy password to clipboard
clipboardEL.addEventListener("click",()=>{
    let textArea = document.createElement("textarea");
    const password = resultEL.innerText;
    if(!password){
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert('Password Copied!')
})



// main function for generating password

   function generatePassword(lower, upper, number, symbols, length){
    /**
     * 1. initiate pass variable
     * 2. filter our unchecked types
     * 3. loop over the lenght and call generator function for each type
     * 4. add final password to the variable and return
     */
    let generatePassword = "";
    const typesCount = lower + upper + number + symbols;
    // console.log(typesCount);
    const typeArray = [{lower}, {upper}, {number}, {symbols}].filter((item)=>{
        if(Object.values(item)[0]==true){
            return item ;
        }
    });

    // console.log(`type array:`, typeArray);

    // checking if none is checked
    if(typesCount===0){
        return "";
    }

    for(let i=0; i<length; i=i+typesCount){
        typeArray.forEach(elm=>{
            const funcName = Object.keys(elm)[0];
            // console.log(funcName);
            generatePassword += randomFunc[funcName]();
            
        })
    }
    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
   }

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}

function getRandomSymbol() {
    const symbols = "`~!@#$%^&*()_+-{}[];':,.<>?";
    return symbols[Math.floor(Math.random()*symbols.length)];
}