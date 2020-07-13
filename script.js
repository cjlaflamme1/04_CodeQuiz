// Hooks for intro card
const startQuizButton = document.getElementById('startQuizButton');
// Hooks for quiz card
const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('answerButton1');
const answerButton2 = document.getElementById('answerButton2');
const answerButton3 = document.getElementById('answerButton3');
const answerButton4 = document.getElementById('answerButton4');
// Quiz questions in nested objects
const quizQuestions = [
    {
        questionTitle: "This is a test question?",
        answer1: "No",
        answer2: "Maybe",
        answer3: "Probably",
        answer4: "Yuppers",
        correctAnswer: 4
    },
    {
        questionTitle: "This is also a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: 3
    }
]
let quizTimer = 60;
let currentQuestionCount = 0;
// This is the function that modifies the quiz content and progresses the question counter.
function questionModifier(i) {
    if (quizTimer > 0) {
    questionTitle.innerText = quizQuestions[i].questionTitle;
    answerButton1.innerText = quizQuestions[i].answer1;
    answerButton2.innerText = quizQuestions[i].answer2;
    answerButton3.innerText = quizQuestions[i].answer3;
    answerButton4.innerText = quizQuestions[i].answer4;
    currentQuestionCount++;
    }
    else {
        return;
    }
}



// Begin quiz button function
startQuizButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('introCard').classList.add('d-none');
    document.getElementById('questionCard').classList.remove('d-none');
    // start timer
    // call function to generate questions
    questionModifier(currentQuestionCount);
    // increase question count
})

// Add event listener for answering questions