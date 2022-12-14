// targeting and getting elements

// add button
const addButton = document.querySelector(".addButton")

addButton.addEventListener("click", addTodo);

function addTodo(){

    
    // selecting input
    const inputTag = document.querySelector(".input");
    let inputValue = inputTag.value;
    let textNode = document.createTextNode(inputValue)

    if(inputValue === " " || inputValue === ""){

        let p = document.createElement("p")
        let pValue = document.createTextNode("Please Enter a valid Todo")
        p.appendChild(pValue);
        let container = document.querySelector(".container")

        container.appendChild(p);
        p.style.opacity = "1";
        p.style.color = "red"
        p.style.position = "relative"
        p.style.top = "30px"

        setTimeout(()=>{
        p.style.opacity = "0";
        controls.removeChild(p);    // TODO: NEW
        },2000)

        return false;
    }else{
        
    // targeting ul and li
    const ul = document.querySelector(".item_input")
    const li = document.createElement("li");
    
    // adding class to li and appending textnode to li
    li.className = "item";
    li.appendChild(textNode);
    
    // creating edit and edit button text node
    const editButton = document.createElement("button")
    const editButtonText = document.createTextNode("EDIT")
    
    // adding edit text in edit button and assinging a class of "editButton"
    editButton.appendChild(editButtonText);
    editButton.className = "editButton"
    
    // adding edit button in li
    li.appendChild(editButton)
    
    const deleteButton = document.createElement("button")
    const deleteButtonText = document.createTextNode("DELETE");
    
    deleteButton.appendChild(deleteButtonText)
    deleteButton.className = "deleteButton"
    
    li.appendChild(deleteButton)
    ul.appendChild(li);

    // reseting the input value
    inputTag.value = "";

    // adding event listner on delete button
    deleteButton.addEventListener("click", ()=>{
        ul.removeChild(li)
    })

    // adding event listner on edit button
    editButton.addEventListener("click",()=>{
        console.log("editing..");
        let update = prompt("what is the update.");
        if (update!=null) {
            console.log(update);
            inputValue = " " + update;
            textNode = document.createTextNode(inputValue);
            li.className = "item";
            li.appendChild(textNode);
        }

    })
    }

}
