const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")


const center = document.querySelector(".center")

//console.log(window.getComputedStyle(red).backgroundColor); 
//since getcomputedstyle is a object we can use . to access the background

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGcolor(pink);

// pink.addEventListener("click", () => {
//     center.style.background = color;
// })

const changeColor = (elementToChange, color) => {
    elementToChange.addEventListener("mouseenter", () => {
        center.style.background = color;
    }); 
};

changeColor(red, getBGcolor(red));
changeColor(cyan, getBGcolor(cyan));
changeColor(violet, getBGcolor(violet));
changeColor(orange, getBGcolor(orange));
changeColor(pink, getBGcolor(pink));