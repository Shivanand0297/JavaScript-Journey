const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody;
// const faqs = [];

function showFaq() {
  
  
}

function createFaq() {
  faqData.forEach(currentfaq =>{  //looping through the array and calling calback function for each element

    const faqH3 = document.createElement("h3");
    const faqQuestion = document.createTextNode(currentfaq.question)
    faqH3.appendChild(faqQuestion);
    
    // creating div to accomodate h3 
    let div = document.createElement("div");

    //adding class in div
    div.classList.add("faq");
    accordianBody = document.querySelector(".accordian_body");
    accordianBody.appendChild(div);
    
    // creating faq_header to make h3 and button go flex
    let flexDiv = document.createElement("div");
    flexDiv.classList.add("faq_header");
    div.appendChild(flexDiv);
    flexDiv.appendChild(faqH3);

    // creating button to append in header div
    let button = document.createElement("h3");
    button.classList.add("show_btn");
    flexDiv.appendChild(button);

    // adding event listner
    button.addEventListener("click", ()=>{
      // console.log(e);
      // let tar = e.target;
      // console.log(tar);
      let p = document.createElement("p");
      let ans = document.createTextNode(currentfaq.answer);
      p.appendChild(ans);
      div.appendChild(p);
    })
      
      
  })
  
}

function btnStatusUpdate() {
  
}


window.addEventListener("load", createFaq);
