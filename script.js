const quiz = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None"],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "JavaScript is used for?",
        options: ["Structure", "Styling", "Logic", "Database"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion() {
    clearInterval(timer);
    time = 10;
    document.getElementById("timer").innerText = "Time: 10s";

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time + "s";
        if (time === 0) nextQuestion();
    }, 1000);

    document.getElementById("question").innerText = quiz[currentQuestion].question;
    let buttons = document.querySelectorAll(".option");

    buttons.forEach((btn, index) => {
        btn.innerText = quiz[currentQuestion].options[index];
    });
}

function checkAnswer(selected) {
    if (selected === quiz[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timer);
    document.querySelector(".quiz-container").innerHTML =
        `<h2>Quiz Completed</h2>
         <p>Your Score: ${score}/${quiz.length}</p>`;
}

loadQuestion();
