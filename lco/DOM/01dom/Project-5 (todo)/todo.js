const addTodo = document.getElementById("add");
addTodo.addEventListener("click", add);

const removeTodo = document.getElementById("remove");
removeTodo.addEventListener("click", remove);

const removeAllTodo = document.getElementById("remove-all");
removeAllTodo.addEventListener("click", removeAll);


const ul = document.getElementById("list");

var li;


function add(){
    // console.log("adding");
    const inputTag = document.querySelector("#input");
    const inputValue = inputTag.value;
    const textValue = document.createTextNode(inputValue);

    // checking if user has passed empty string
    if(inputValue === " " || inputValue === ""){

        let p = document.createElement("p")
        let pValue = document.createTextNode("Please Enter a valid Todo")
        p.appendChild(pValue);
        let controls = document.querySelector(".controls")

        controls.appendChild(p);
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
        li = document.createElement("li");
        // li.className  = "mycheck"
        var checkBox = document.createElement("input")
        checkBox.type = "checkbox";  // TODO: new
        checkBox.setAttribute("id", "check");
        
        var label = document.createElement("label");
        ul.appendChild(li);
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(textValue);
        
        ul.insertBefore(li, ul.childNodes[0])   //TODO: new
        
        // reseting the input value
        setTimeout(()=>{
            li.className  = "visual" // making visible
        },100)        
        inputTag.value = "";
    }
}

function remove(){
    // console.log("removing.");
    li = ul.children; //TODO: new
    // console.log(li);
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){  //TODO:
            ul.removeChild(li[index])
        }

    }


}

// FIXME:

function removeAll(){
    console.log("removing all");
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
            ul.removeChild(li[index])
            // console.log(li[index]);
    }
}

