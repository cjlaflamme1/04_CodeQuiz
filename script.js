const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('answerButton1');
const answerButton2 = document.getElementById('answerButton2');
const answerButton3 = document.getElementById('answerButton3');
const answerButton4 = document.getElementById('answerButton4');

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

console.log(quizQuestions);

function questionModifier() {
    questionTitle.innerText = quizQuestions.question1.questionTitle;
    answerButton1.innerText = quizQuestions.question1.answer1;
    answerButton2.innerText = quizQuestions.question1.answer2;
    answerButton3.innerText = quizQuestions.question1.answer3;
    answerButton4.innerText = quizQuestions.question1.answer4;
}
questionModifier();