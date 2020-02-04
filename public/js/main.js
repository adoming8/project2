
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
<<<<<<< HEAD
    highscoresDiv.setAttribute("style", "display: none;"); 
=======
    highscoresDiv.setAttribute("style", "display: none;");

    //populate scores[] fromlocalstorage
    getScoresLS = localStorage.getItem("scoresLS");
    scores = getScoresLS ? JSON.parse(getScoresLS) : [];
>>>>>>> integrated with views, returns user object
}

function startquestions() {
    timer();
    displayNextQuestion(currentQuestion);
}

<<<<<<< HEAD
function timer() {
    timeLeft.setAttribute("style", "display");
    timer = setInterval(function() {
    secondsLeft--;
=======
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
>>>>>>> integrated with views, returns user object

        timeLeft.textContent = "Time: " + secondsLeft;

<<<<<<< HEAD
    if(secondsLeft === 0) {
        clearInterval(timer);
        end();
    }
=======
        if (secondsLeft === 0) {
            // console.log("Time has run out.")
            clearInterval(timerInterval);
            endQuiz();
        }
>>>>>>> integrated with views, returns user object

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
<<<<<<< HEAD
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
=======
        endQuiz();
    }
}

function storeScores() {
    //hide divs not necessary for highscore screen
    navBarDiv.setAttribute("style", "visibility: hidden;");
    gameOverDiv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display");

    //get values from player-submitted form
    strPlayerInitials = document.getElementById("playerInitials").value.trim();
    strScore = secondsLeft;

    //add to scores[]
    scores.push([strPlayerInitials, strScore]);

    //sort scores, high to low
    scores.sort(function (a, b) {
        return b[1] - a[1];
    });

    //write to localstorage
    localStorage.setItem('scoresLS', JSON.stringify(scores));

    //display high scores
    renderHighscores();
>>>>>>> integrated with views, returns user object

function viewHighscores() {
    quiz_navbar.setAttribute("style", "visibility: hidden;");
    quiz_homediv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display");
}

function storeScores() {
    quiz_navbar.setAttribute("style", "visibility: hidden;");
    gameOverDiv.setAttribute("style", "display: none;");
    highscoresDiv.setAttribute("style", "display");

<<<<<<< HEAD
}

=======
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
        todos = storedTodos;
    }

    // Render todos to the DOM
    renderTodos();
}

function renderHighscores() {
    // Clear highscoreList element
    var highscoreList = document.getElementById("highScoreList");
    highscoreList.innerHTML = "";

    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];
        console.log(scores[i] + " " + score);
        var li = document.createElement("li");
        li.textContent = [i + 1] + ". " + scores[i][0].toString().toUpperCase() + " - " + scores[i][1];
        li.setAttribute("data-index", i);
        highscoreList.appendChild(li);
    }
}
>>>>>>> integrated with views, returns user object


// DOM EventListners

<<<<<<< HEAD
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
=======
viewHighscoresButton.addEventListener("click", function () {
    viewHighscores();
});

startButton.addEventListener("click", function () {
    startQuiz();
});

questionDivChoice0.addEventListener("click", function () {
    checkResponse(questionDivChoice0.getAttribute("data-choice"));
});

questionDivChoice1.addEventListener("click", function () {
    checkResponse(questionDivChoice1.getAttribute("data-choice"));
});

questionDivChoice2.addEventListener("click", function () {
    checkResponse(questionDivChoice2.getAttribute("data-choice"));
});

questionDivChoice3.addEventListener("click", function () {
    checkResponse(questionDivChoice3.getAttribute("data-choice"));
>>>>>>> integrated with views, returns user object
});

submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    storeScores();
// make post request to database to save user score
});
<<<<<<< HEAD
clearHighscoresButton.addEventListener("click", function(event) {
=======

startOverButton.addEventListener("click", function () {
});

clearHighscoresButton.addEventListener("click", function (event) {
>>>>>>> integrated with views, returns user object
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

