// Hooks for intro card
const startQuizButton = document.getElementById('startQuizButton');
// Hooks for quiz card
const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('answerButton1');
const answerButton2 = document.getElementById('answerButton2');
const answerButton3 = document.getElementById('answerButton3');
const answerButton4 = document.getElementById('answerButton4');
// Quiz questions in nested objects
const quizQuestions = {
    question1: {
        questionTitle: "This is a test question?",
        answer1: "No",
        answer2: "Maybe",
        answer3: "Probably",
        answer4: "Yuppers",
        correctAnswer: 4
    },
    question2: {
        questionTitle: "This is also a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: 3
    }
}
// How on earth do I get this to scroll through the object depending on the current question number?
function questionModifier() {
    questionTitle.innerText = quizQuestions.question1.questionTitle;
    answerButton1.innerText = quizQuestions.question1.answer1;
    answerButton2.innerText = quizQuestions.question1.answer2;
    answerButton3.innerText = quizQuestions.question1.answer3;
    answerButton4.innerText = quizQuestions.question1.answer4;
}
questionModifier();


// Begin quiz button function
startQuizButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('introCard').classList.add('d-none');
    document.getElementById('questionCard').classList.remove('d-none');
    // call function to generate questions
    // increase question count
})

// Add event listener for answering questions