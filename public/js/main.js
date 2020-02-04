
// Quiz NavBar Section
var quiz_navbar = document.getElementById("quiz_navBar");
var viewHighscoresButton = document.getElementById("highscores_btn");

// Quiz homediv Section
var quiz_homediv = document.getElementById("quiz_homediv");
var timeLeft = document.getElementById("timer");
var startButton = document.getElementById("start_btn");

// Quiz questions & answers Section
var questionDiv = document.getElementById("questiondiv");
var questionDivTitle = document.getElementById("question_titles");
var answer_btn0 = document.getElementById("choice0");
var answer_btn1 = document.getElementById("choice1");
var answer_btn2 = document.getElementById("choice2");
var answer_btn3 = document.getElementById("choice3");

// Question answer result
var resultDiv = document.getElementById("result_div");

// End of game Section - submit player tag
var gameOverDiv = document.getElementById("end");
var score = document.getElementById("quizScore");
var submitScoreButton = document.getElementById("submit_btn");

// score/startOver section
var highscoresDiv = document.getElementById("userScores");
var startOverButton = document.getElementById("startOver");
var clearHighscoresButton = document.getElementById("clearscore_btn");

// initiating global variables

const totalQuestions = questions.length - 1; 
var secondsLeft = questions.length * 12; // 12s per question
var currentQuestion = 0;
var timer;
var timerFlashResult;
var secondsLeftFlashResult = 2;


// Quiz functions 
startTrivia();

function startTrivia() { 
    // hidding initial display of unnecessary divs @ beggining
    timeLeft.setAttribute("style", "display: none;");
    questionDiv.setAttribute("style", "display: none;");
    resultDiv.setAttribute("style", "display: none;");
    gameOverDiv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display: none;"); 
}

function startquestions() {
    timer();
    displayNextQuestion(currentQuestion);
}

function timer() {
    timeLeft.setAttribute("style", "display");
    timer = setInterval(function() {
    secondsLeft--;

        timeLeft.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timer);
        end();
    }

    }, 1000);
}

function displayNextQuestion() {
    quiz_homediv.setAttribute("style", "display: none;");
    questionDiv.setAttribute("style", "display");

    questionDivTitle.innerHTML = questions[currentQuestion].title;
    answer_btn0.innerHTML = questions[currentQuestion].choices[0];
    answer_btn0.setAttribute("data-answer", questions[currentQuestion].choices[0]);
    answer_btn1.innerHTML = questions[currentQuestion].choices[1];
    answer_btn1.setAttribute("data-answer", questions[currentQuestion].choices[1]);
    answer_btn2.innerHTML = questions[currentQuestion].choices[2];
    answer_btn2.setAttribute("data-answer", questions[currentQuestion].choices[2]);
    answer_btn3.innerHTML = questions[currentQuestion].choices[3];
    answer_btn3.setAttribute("data-answer", questions[currentQuestion].choices[3]);
}

function checkResponse(str) {
    if (str == questions[currentQuestion].answer) {
        resultDiv.innerHTML = "Correct!";
    } else {
        secondsLeft = secondsLeft - 6;
        if (secondsLeft < 0) {
            secondsLeft = 0;
            end();
        }
        resultDiv.innerHTML = "Incorrect!";
    }

    resultDiv.setAttribute("style", "display");
    timerFlashResult = setInterval(function () {
        secondsLeftFlashResult--;
        if (secondsLeftFlashResult === 0) {
            resultDiv.setAttribute("style", "display: none;");
            clearInterval(timerFlashResult);
        }
    }, 1000);
    secondsLeftFlashResult = 2;

    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        displayNextQuestion();
    } else {
        end();
    }    
}

function end() {
    questionDiv.setAttribute("style", "display: none;");
    resultDiv.setAttribute("style", "display: none;");
    score.innerHTML = secondsLeft;
    timeLeft.textContent = "Time: " + secondsLeft;
    gameOverDiv.setAttribute("style", "display");
    clearInterval(timer);
}

function viewHighscores() {
    quiz_navbar.setAttribute("style", "visibility: hidden;");
    quiz_homediv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display");
}

function storeScores() {
    quiz_navbar.setAttribute("style", "visibility: hidden;");
    gameOverDiv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display");

}



// DOM EventListners

startButton.addEventListener("click", function() {
    startquestions();
}); 
viewHighscoresButton.addEventListener("click", function() {
    viewHighscores();
});
answer_btn0.addEventListener("click", function() {
    checkResponse(answer_btn0.getAttribute("data-answer"));
});
answer_btn1.addEventListener("click", function() {
    checkResponse(answer_btn1.getAttribute("data-answer"));
});
answer_btn2.addEventListener("click", function() {
    checkResponse(answer_btn2.getAttribute("data-answer"));
});
answer_btn3.addEventListener("click", function() {
    checkResponse(answer_btn3.getAttribute("data-answer"));
});

submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    storeScores();
// make post request to database to save user score
});
clearHighscoresButton.addEventListener("click", function(event) {
    // localStorage.clear();
    event.preventDefault();
    scores = [];
    localStorage.removeItem('scoresLS');

    renderHighscores();
});

// Firebase materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
});

