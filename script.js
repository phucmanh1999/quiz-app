const questions = [
  {
    question: "Why you hate the daxua?",
    a: "he's sick",
    b: "he's cancer",
    c: "Daxua in my team is nightmare",
    d: "Daxua isn't have mana",
    rightAnswer: "c",
  },
  {
    question: "Why you hate the zed?",
    a: "he's sick",
    b: "he's cancer",
    c: "I'm main ADC",
    d: "Zed isn't have mana",
    rightAnswer: "c",
  },
  {
    question: "Why you hate the Shaco?",
    a: "he's sick",
    b: "he's cancer",
    c: "He is a clown",
    d: "Fuck Shaco",
    rightAnswer: "d",
  },
  {
    question: "Why you hate the Hecarim?",
    a: "he's sick",
    b: "he's cancer",
    c: "He ganks me A LOT",
    d: "He so anoisy",
    rightAnswer: "c",
  },
];

const qEl = document.getElementById("q");

const quiz = document.getElementById("quiz");
const labelA = document.getElementById("label_a");
const labelB = document.getElementById("label_b");
const labelC = document.getElementById("label_c");
const labelD = document.getElementById("label_d");
const btnSubmit = document.getElementById("button-submit");
const ansEles = document.querySelectorAll(".answer");
let currentQuestionIndex = 0;
let score = 0;
function loadQuiz() {
  delSelected();
  const question = questions[currentQuestionIndex];

  qEl.innerText = question.question;
  labelA.innerText = question.a;
  labelB.innerText = question.b;
  labelC.innerText = question.c;
  labelD.innerText = question.d;
}
loadQuiz();

function getSelected() {
  let answer = null;
  ansEles.forEach((item) => {
    // console.log(item);
    if (item.checked) {
      answer = item.id;
    }
  });
  return answer;
}
function delSelected() {
  ansEles.forEach((ele) => {
    ele.checked = false;
  });
}

btnSubmit.addEventListener("click", (e) => {
  const answer = getSelected();
  console.log(answer);
  if (answer === null) alert("Please choose a answer~");
  else {
    if (answer === questions[currentQuestionIndex].rightAnswer) {
      score++;
    }
    if (currentQuestionIndex === questions.length - 1) {
      quiz.innerHTML = `<h1>Congrats, your score: ${score}/${questions.length}</h1>`;
    } else {
      currentQuestionIndex++;
      loadQuiz();
    }
  }
  // console.log(nameValue);
});
