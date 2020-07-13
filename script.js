// Hooks for intro card
const startQuizButton = document.getElementById('startQuizButton');
// Hooks for quiz card
const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('1');
const answerButton2 = document.getElementById('2');
const answerButton3 = document.getElementById('3');
const answerButton4 = document.getElementById('4');
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
    // currentQuestionCount++;
    }
    else {
        return;
    }
}
function answerQuestion(event) {
    let i = currentQuestionCount;
    const targetButton = event.target.classList.contains('answerButton');
    console.log('You (tried) to click an answer!');
    if (targetButton) {
        // This function executes if they actually click a button on the screen.
        const targetAnswerID = event.target.id;
        console.log(targetAnswerID);
        if (targetAnswerID === quizQuestions[i].correctAnswer) {
            // This function executes if they click the correct button.
            console.log('You are correct!')
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // Add answer feedback text to HTML
        } 
        else if (targetAnswerID !== quizQuestions[i].correctAnswer) {
            // This function executes if they click the incorrect button.
            console.log('WROOOONG!');
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // Add answer feedback text to HTML
            // subtract time from quiz timer
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
    // call function to generate questions
    questionModifier(currentQuestionCount);
})
// Add event listener for answering questions
document.querySelector('div#questionCard').addEventListener('click', answerQuestion);