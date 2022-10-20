// global variables

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let userWinCounter = 0;
let comWinCounter = 0;
let drawCounter = 0;

// taking input form the user by clicking on the image
const choices = document.querySelectorAll(".choice")
for(let element of choices){
    element.addEventListener("click",(e)=>{
        const target = e.target;
        const userInput = target.alt

        // taking no. input for no of rounds
        const noOfRound = document.getElementById("noOfRound")
        let noOfRounds = Number(noOfRound.value)
        gameStart(userInput, noOfRounds);
        
    })

}

const gameStart = (userInput, noOfRounds) =>{

    // resetting before starting a new game
    resetCounters();
    const userChoose = document.querySelector("#user")
    const comChoose = document.querySelector("#com")
    const winner = document.querySelector("#winner")
    
    // for loop for no of rounds
for(let i = 1; i <= noOfRounds; i++){
    
    console.log(`Round No: ${i}`);

    userChoose.innerText = userInput; 
    // console.log(`User: ${userInput}`);
    
    const comOptions = [rock, paper, scissors]

    let comOptionsIndex = Math.floor(Math.random()*3)
    const comInput = comOptions[comOptionsIndex]

    comChoose.innerText = comInput; 
    // console.log(`Comp: ${comInput}`); 

    if(userInput === rock && comInput === paper){

        winner.innerText = "Computer Won"; 
        // console.log("Computer Won\n");
        comWinCounter++;

    }else if(userInput === rock && comInput === scissors){

        winner.innerText = "User Won"; 
        // console.log("User Won\n");
        userWinCounter++;

    }else if(userInput === rock && comInput === rock){

        winner.innerText = "It's a Draw"; 
        // console.log("It's a Draw\n");
        drawCounter++;

    }else if(userInput === paper && comInput === rock){

        winner.innerText = "User Won"; 
        // console.log("User Won\n");
        userWinCounter++;

    }else if(userInput === paper && comInput === paper){

        winner.innerText = "It's a Draw";        
        // console.log("It's a Draw\n");
        drawCounter++;

    }else if(userInput === paper && comInput === scissors){

        winner.innerText = "Computer Won";        
        // console.log("Computer Won\n");
        comWinCounter++;

    }else if(userInput === scissors && comInput === rock){

        winner.innerText = "Computer Won";        
        // console.log("Computer Won\n");
        comWinCounter++;

    }else if(userInput === scissors && comInput === paper){

        winner.innerText = "User Won";        
        // console.log("User Won\n");
        userWinCounter++;

    }else if(userInput === scissors && comInput === scissors){

        winner.innerText = "It's a Draw";                
        // console.log("It's a Draw\n");
        drawCounter++;
    }
}
    document.querySelector("#userScoreVal").innerText = userWinCounter;
    // console.log(`Total User win: ${userWinCounter}`);

    document.querySelector("#compScoreVal").innerText = comWinCounter
    // console.log(`Total Comp win: ${comWinCounter}`);
    document.querySelector("#draws").innerText = drawCounter;
    // console.log(`Total Draws: ${drawCounter}`);

}

// function for reseting the counters

const resetCounters = () =>{
    userWinCounter = 0;
    comWinCounter = 0;
    drawCounter = 0;
}





// console.log(`User win: ${userWinCounter}`);
// console.log(`Computer Win: ${comWinCounter}`);



// 1. first checking the main logic of the game
