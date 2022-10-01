//Array of objects

const courses = [
    {
    name: "React JS course",
    price: "2.3",
    },
    {
    name: "JavaScript course",
    price: "5",
    },
    {
    name: "Git course",
    price: "2.8",
    },
    {
    name: "C++ course",
    price: "2",
    },
    {
    name: "Python course",
    price: "8",
    },
];

function generateList (){
    
    const ul = document.querySelector(".list-group")    //targeting and getting ul
    ul.innerHTML="";
    courses.forEach(selectedcourse => {     // iterating throught the array to throw the content in the list

        const li = document.createElement("li") // creating list item <li></li>
        
        li.classList.add("list-group-item") // creating <li class="list-group-item"></li>

        const courseName = document.createTextNode(selectedcourse.name)    // getting reference of textnode in the li  <li class="list-group-item">Javascript course</li>
        
        li.appendChild(courseName)    // adding textnode in the li  <li class="list-group-item">Javascript course</li>
        
        /*
        <li class="list-group-item">Javascript course
        <span></span> //now we need to add span in the li
        </li>
        */
       
        // frist we need to create it
       const span = document.createElement("span"); //<span></span>
    
       // now adding classes
       span.classList.add("float-right"); //<span class="float-right"></span>

       // now adding textnode in the span
        const price = document.createTextNode("$ " + selectedcourse.price); //  getting reference of textnode in <span class="float-right">$ 2.8</span>
       
        // adding price in span
        span.appendChild(price); // adding textnode in span <span class="float-right">$ 2.8</span>
       
        // adding span in li
        li.appendChild(span);   /*<li class="list-group-item">
                                Javascript course
                                <span class="float-right">$2.1</span>
                                </li> */
        // adding li in ul
        ul.appendChild(li);     /*
                                <ul>
                                <li class="list-group-item">
                                Javascript course
                                <span class="float-right">$2.1</span>
                                </li>
                                </ul> */
    })
}

// generateList(); // this is running all the time, we want to run it when the page loads

window.addEventListener("load", generateList);  //note that here only referece of thr function generatelist is passed because addEventListener runs it automatically

//targeting button

const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=>{
    courses.sort((a,b) => a.price - b.price );
    generateList();
});

//targeting sort-btn-dec

const button2 = document.querySelector(".sort-btn-dec");

button2.addEventListener("click", ()=>{
    courses.sort((a,b) => b.price - a.price );
    generateList();
});