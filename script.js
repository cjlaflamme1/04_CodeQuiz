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
// Establishment of high scores.
const highScoreList = document.getElementById('highScoreList');
let highScores = [];
function initializeHighScores() {
    if (!JSON.parse(localStorage.getItem('highScores'))) {
        highScores = [];
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}
initializeHighScores();
// Hooks to primary Cards/Rows.  Mainly used to toggle display.
const introCard = document.getElementById('introCard');
const questionCard = document.getElementById('questionCard');
const enterScoreCard = document.getElementById('enterScoreCard');
const highScoreCard = document.getElementById('highScoreCard');
// Quiz questions in Array of objects. Needs actual quiz questions.
// Most of these questions were taken from geeksforgeeks.com.
const quizQuestions = [
    {
        questionTitle: "Which of these values would qualify as a string?",
        answer1: "You mean like string a guitar?",
        answer2: "42",
        answer3: "true",
        answer4: "false",
        correctAnswer: "1"
    },
    {
        questionTitle: "How would you print a string to the console?",
        answer1: "print ('like this')",
        answer2: "console.log('like this')",
        answer3: "console.print('no,like this')",
        answer4: "print.log('this could work?')",
        correctAnswer: "2"
    },
    {
        questionTitle: "What is the HTML tag under which one can write the JavaScript code?",
        answer1: "<javascript>",
        answer2: "<scripted>",
        answer3: "<script>",
        answer4: "<js>",
        correctAnswer: "3"
    },
    {
        questionTitle: "Which of the following is the correct syntax to display 'WARNING WARNING!' in an alert box using JavaScript?",
        answer1: "alertbox('WARNING WARNING!')",
        answer2: "msg('WARNING WARNING!')",
        answer3: "msgbox('WARNING WARNING!')",
        answer4: "alert('WARNING WARNING!')",
        correctAnswer: "4"
    },
    {
        questionTitle: "What is the correct syntax for referring to an external script called 'script.js'?",
        answer1: "<script src='script.js'>",
        answer2: "<script href='script.js'>",
        answer3: "<script ref='script.js'>",
        answer4: "<script name='script.js'>",
        correctAnswer: "1"
    },
    {
        questionTitle: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
        answer1: "You mean like string a guitar?",
        answer2: "trim()",
        answer3: "strip()",
        answer4: "stripped()",
        correctAnswer: "2"
    },
    {
        questionTitle: "Which of the following is not a reserved word in JavaScript?",
        answer1: "interface",
        answer2: "throws",
        answer3: "program",
        answer4: "short",
        correctAnswer: "3"
    },
    {
        questionTitle: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
        answer1: "function = Geekfunc()",
        answer2: "function Geekfunc()",
        answer3: "function:= Geekfunc()",
        answer4: "function : Geekfunc()",
        correctAnswer: "2"
    },
    {
        questionTitle: "How is the function called in JavaScript?",
        answer1: "call Geekfunc()",
        answer2: "call function GeekFunc()",
        answer3: "Geekfunc()",
        answer4: "function GeekFunc()",
        correctAnswer: "3"
    },
    {
        questionTitle: "How to write an 'if' statement for executing some code. If 'i' is NOT equal to 5?",
        answer1: "if(i<>5)",
        answer2: "if i<>5",
        answer3: "if(!=5)",
        answer4: "if i!=5",
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
        quizTimeRemaining--;
        timerDisplay.textContent = quizTimeRemaining;
    } else {
        timerDisplay.textContent = quizTimeRemaining;
        clearTimeout();
        questionCard.classList.add('d-none');
        if (highScoreCard.classList.contains('d-none')) {
            enterScoreCard.classList.remove('d-none');
        }
        if (score === 0) {
            quizTimeRemaining = 0;
            timerDisplay.textContent = quizTimeRemaining;
        }
        finalScore = score + quizTimeRemaining;
        document.getElementById('finalScoreSpan').textContent = finalScore;
    }
}

// populate high score function
function populateHighScore() {
    highScores = JSON.parse(localStorage.getItem('highScores'));
    // Add compare and sort function
    function compare(a,b) {
        const scoreA = parseInt(a.score);
        const scoreB = parseInt(b.score);
        let comparison = 0;
        if (scoreA > scoreB) {
            comparison =  1;
        } else if (scoreA < scoreB) {
            comparison = -1;
        } else {
            comparison = 0;
        }
        return comparison * -1;
    };
    highScores.sort(compare);
    for (i = 0; i < highScores.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${highScores[i].initials}: ${highScores[i].score}`
        highScoreList.appendChild(li);
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
    }
    else {
        return;
    }
}
function answerQuestion(event) {
    event.preventDefault();
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
    introCard.classList.add('d-none');
    questionCard.classList.remove('d-none');
    // start timer
    setInterval(quizTimer, 1000);
    // This calls the function to initiate quiz
    questionModifier(currentQuestionCount);
})
// Add event listener for answering questions
document.querySelector('div#questionCard').addEventListener('click', answerQuestion);
// Even listener for score submission
document.getElementById('submitScore').addEventListener('click', function(event) {
    event.preventDefault();
    highScores = JSON.parse(localStorage.getItem('highScores'));
    let scoreInitials = document.querySelector('input#initialInput').value;
    highScores.push({initials: scoreInitials, score: finalScore});
    localStorage.setItem('highScores', JSON.stringify(highScores));
    populateHighScore();
    enterScoreCard.classList.add('d-none');
    highScoreCard.classList.remove('d-none');
})
// Add event listener for clearing high score
document.getElementById('clearScoresButton').addEventListener('click', function(event) {
    event.preventDefault();
    highScores = JSON.parse(localStorage.getItem('highScores'));
    highScores = [];
    localStorage.setItem('highScores', JSON.stringify(highScores));
    while (highScoreList.hasChildNodes()) {
       highScoreList.removeChild(highScoreList.firstChild);
    }
})
// Add event listener to restart quiz
document.getElementById('restartQuizButton').addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
})
// Add event listener for checking High Scores
document.getElementById('viewHighScores').addEventListener('click', function(event) {
    event.preventDefault();
    populateHighScore();
    if(!introCard.classList.contains('d-none')){
        introCard.classList.add('d-none');
        }
    if(!questionCard.classList.contains('d-none')){
        questionCard.classList.add('d-none');
        }
    if(!enterScoreCard.classList.contains('d-none')){
        enterScoreCard.classList.add('d-none');
        }
    if(highScoreCard.classList.contains('d-none')){
        highScoreCard.classList.remove('d-none');
        }
})