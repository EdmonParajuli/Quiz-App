let questions = [
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    answers: [
      { text: "link", correct: false },
      { text: "style", correct: false },
      { text: "script", correct: true },
      { text: "js", correct: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
    ],
  },
  {
    question: "Which country has won the most Football World Cup titles?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Argentina", correct: false },
      { text: "Italy", correct: false },
      { text: "Brazil", correct: true },
    ],
  },
  {
    question:
      "Who scored the famous 'Hand of God' goal in the 1986 Football World Cup?",
    answers: [
      { text: "Pele", correct: false },
      { text: "Lionel Messi", correct: false },
      { text: "Diego Maradona", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    question: "In which year was the first Football World Cup held?",
    answers: [
      { text: "1934", correct: false },
      { text: "1930", correct: true },
      { text: "1950", correct: false },
      { text: "1954", correct: false },
    ],
  },
  {
    question: "Which country hosted the Football World Cup in 2018?",
    answers: [
      { text: "Russia", correct: true },
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "France", correct: false },
    ],
  },
  {
    question:
      "Who is the all-time leading goal scorer in Football World Cup history?",
    answers: [
      { text: "Pele", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Lionel Messi", correct: false },
      { text: "Miroslav Klose", correct: true },
    ],
  },

  {
    question:
      "Which programming language is known for its use in web development?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C#", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
  {
    question: "Which programming language is known for its readability and is often referred to as 'the beautiful language'?",
    answers: [
      { text: "Python", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Java", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hypertext Transfer Protocol", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What does the HTML tag '<a>' stand for?",
    answers: [
      { text: "Anchor", correct: true },
      { text: "Action", correct: false },
      { text: "Attribute", correct: false },
      { text: "Article", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "France", correct: true },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "What is the main component of the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "What country has the highest life expectancy ?",
    answers: [
      { text: "Hong Kong", correct: true },
      { text: "Finland", correct: false },
      { text: "Germany", correct: false },
      { text: "Malasiya", correct: false },
    ],
  },
  {
    question: "Where were the 2002 Football World Cup finals held?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Japan & Korea", correct: true },
      { text: "Scotland", correct: false },
      { text: "Argentina", correct: false },
    ],
  },
  {
    question: "Number of bit used by IPv6 address ?",
    answers: [
      { text: "32 bit", correct: false },
      { text: "62 bit", correct: false },
      { text: "128 bit", correct: true },
      { text: "256 bit", correct: false },
    ],
  },

  {
    question: "Which team won the first Cricket World Cup in 1975?",
    answers: [
      { text: "Australia", correct: false },
      { text: "West Indies", correct: true },
      { text: "India", correct: false },
      { text: "England", correct: false },
    ],
  },
  {
    question:
      "Who holds the record for the highest individual score in a Cricket World Cup match?",
    answers: [
      { text: "Rohit Sharma", correct: true },
      { text: "Sachin Tendulkar", correct: false },
      { text: "Martin Guptill", correct: false },
      { text: "Chris Gayle", correct: false },
    ],
  },
  {
    question: "Which country has won the most Cricket World Cup titles?",
    answers: [
      { text: "Australia", correct: true },
      { text: "India", correct: false },
      { text: "West Indies", correct: false },
      { text: "Pakistan", correct: false },
    ],
  },
  {
    question: "Who won the Cricket World Cup in 2019?",
    answers: [
      { text: "India", correct: false },
      { text: "New Zealand", correct: false },
      { text: "England", correct: true },
      { text: "Australia", correct: false },
    ],
  },
  {
    question:
      "Which player has taken the most wickets in Cricket World Cup history?",
    answers: [
      { text: "Muttiah Muralitharan", correct: false },
      { text: "Glenn McGrath", correct: true },
      { text: "Wasim Akram", correct: false },
      { text: "Shane Warne", correct: false },
    ],
  },
  {
    question: "First computer virus is known as ?",
    answers: [
      { text: "Rabbit", correct: false },
      { text: "Creeper Virus", correct: true },
      { text: "Elk Cloner", correct: false },
      { text: "SCA Virus", correct: false },
    ],
  },
];
let questionElement = document.querySelector(".question");
let answerButton = document.querySelector(".answerContainer");
let nextButton = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  questions = shuffleArray(questions);
  currentQuestionIndex = 0;
  //   console.log(currentQuestionIndex);
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.setAttribute("data-correct", answer.correct);
    answerButton.appendChild(button);

    button.addEventListener("click", () => {
      if (answer.correct) {
        button.style.backgroundColor = "palegreen";
        score++;
      } else {
        button.style.backgroundColor = "tomato";
        const correctButton = document.querySelector("[data-correct = 'true']");
        if (correctButton) {
          correctButton.style.backgroundColor = "palegreen";
        }
      }
      disableButtons();
      questionNo++;
      nextButton.style.display = "block";
    });
  });
}
function disableButtons() {
  let buttons = document.querySelectorAll(".btn");
  Array.from(buttons).forEach((button) => {
    button.disabled = true;
  });
}
function handleNextButton() {
  resetState();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Start Again!";
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();