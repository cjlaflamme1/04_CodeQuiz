const timerDisplay = document.getElementById('timeLeft');
// Hooks for intro card
const startQuizButton = document.getElementById('startQuizButton');
// Hooks for quiz card
const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('1');
const answerButton2 = document.getElementById('2');
const answerButton3 = document.getElementById('3');
const answerButton4 = document.getElementById('4');
const submissionFeedback = document.getElementById('submissionFeedback');


// Quiz questions in Array of objects.
const quizQuestions = [
    {
        questionTitle: "This is a test question?",
        answer1: "No",
        answer2: "Maybe",
        answer3: "Probably",
        answer4: "Yuppers",
        correctAnswer: "4"
    },
    {
        questionTitle: "This is also a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: "3"
    },
    {
        questionTitle: "This is, again, a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: "3"
    },
    {
        questionTitle: "This is likely, also a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: "3"
    },
    {
        questionTitle: "Have you considered using a test question?",
        answer1: "Nej",
        answer2: "Maybe in Swedish",
        answer3: "Ja",
        answer4: "inte so micha",
        correctAnswer: "3"
    }
]
let quizTimeRemaining = 60;
let currentQuestionCount = 0;
let score = 0;
let finalScore = 0;
// Timer function
function quizTimer(){
    if ((currentQuestionCount < (quizQuestions.length) && quizTimeRemaining > 0)) {
        timerDisplay.textContent = quizTimeRemaining;
        quizTimeRemaining--;
    } else {
        timerDisplay.textContent = quizTimeRemaining;
        document.getElementById('questionCard').classList.add('d-none');
        document.getElementById('enterScoreCard').classList.remove('d-none');
        clearTimeout();
        if (score === 0) {
            quizTimeRemaining = 0;
            timerDisplay.textContent = quizTimeRemaining;
        }
        finalScore = score + quizTimeRemaining;
        document.getElementById('finalScoreSpan').textContent = finalScore;
    }
}


// This is the function that modifies the quiz content and progresses the question counter.
function questionModifier(i) {
    if ((quizTimeRemaining > 0) && currentQuestionCount < quizQuestions.length) {
    questionTitle.innerText = quizQuestions[i].questionTitle;
    answerButton1.innerText = quizQuestions[i].answer1;
    answerButton2.innerText = quizQuestions[i].answer2;
    answerButton3.innerText = quizQuestions[i].answer3;
    answerButton4.innerText = quizQuestions[i].answer4;
    // currentQuestionCount++;
    }
    else {
        return;
    }
}
function answerQuestion(event) {
    let i = currentQuestionCount;
    const targetButton = event.target.classList.contains('answerButton');
    if (targetButton) {
        // This function executes if they actually click a button on the screen.
        const targetAnswerID = event.target.id;
        if (targetAnswerID === quizQuestions[i].correctAnswer) {
            // This function executes if they click the correct button.
            score++;
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // Add answer feedback text to HTML
            if (submissionFeedback.classList.contains('d-none')) {
                submissionFeedback.classList.remove('d-none');
                submissionFeedback.textContent = "Correct!";
            } else {
                submissionFeedback.textContent = "Correct!";
            }
        } 
        else if (targetAnswerID !== quizQuestions[i].correctAnswer) {
            // This function executes if they click the incorrect button.
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // Add answer feedback text to HTML
            if (submissionFeedback.classList.contains('d-none')) {
                submissionFeedback.classList.remove('d-none');
                submissionFeedback.textContent = "Wroooooong!";
            } else {
                submissionFeedback.textContent = "Wroooooong!";
            }
            // subtract time from quiz timer
            quizTimeRemaining = quizTimeRemaining - 10;
        }
    } else {
        // this executes if they click anywhere on the screen that is not a button.
        return
    }
}



// Begin quiz button function
startQuizButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('introCard').classList.add('d-none');
    document.getElementById('questionCard').classList.remove('d-none');
    // start timer
    setInterval(quizTimer, 1000);
    // This calls the function to initiate quiz
    questionModifier(currentQuestionCount);
})
// Add event listener for answering questions
document.querySelector('div#questionCard').addEventListener('click', answerQuestion);