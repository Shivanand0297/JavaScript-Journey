// variables

const btn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");


btn.addEventListener("click",()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        joke.innerText = data.value;
    })
})
