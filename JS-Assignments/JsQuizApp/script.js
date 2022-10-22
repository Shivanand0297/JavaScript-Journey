const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = quiz.querySelectorAll(".answer");
const questionEl = quiz.querySelector("#question");
const a_text = quiz.querySelector("#a_text");
const b_text = quiz.querySelector("#b_text");
const c_text = quiz.querySelector("#c_text");
const d_text = quiz.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

let currentQuiz = 0;
let score = 0;

function loadQuiz(currentQuiz) {
  deselectAnswers();
  questionEl.innerText = quizData[currentQuiz].question;
  a_text.innerText = quizData[currentQuiz].a;
  b_text.innerText = quizData[currentQuiz].b;
  c_text.innerText = quizData[currentQuiz].c;
  d_text.innerText = quizData[currentQuiz].d;
}

loadQuiz(currentQuiz);

function checkAnswer() {
  let answer;
  answerEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((element) => {
    if (element.checked) {
      element.checked = false;
    }
  });
}

submitBtn.addEventListener("click", () => {
  const answer = checkAnswer();
  if (answer === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz(currentQuiz);
  } else {
    showScore.innerHTML = `
            <h3> you scored ${score}/${quizData.length} 👍</h3>
            <button class="btn" onclick="location.reload()">Reload</button>
        `;
  }
});


// learnings: 
/**
 * 1. new way of traversing or looping
 * 2. how to check for checked input and set it to on and off
 * 3. ES6 way of creating innerHTML with back ticks``
 * 4. update the content on click button
 * 5. location.reload()
 */