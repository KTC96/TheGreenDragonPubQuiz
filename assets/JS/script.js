/* YouTube tutorial followed to help set up basic aspects of quiz 
 https://www.youtube.com/watch?v=PBcqGxrr9g8 */

import { quizData } from './quiz.js';

// Selection of DOM elements
const questionArea = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const incorrectCountArea = document.getElementById('incorrect-count');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const fullReset = document.getElementById('fullReset');
const buttonContainer = document.getElementById('button-container');
const usernameInput = document.getElementById('username');

// Set initial variables to 0
let currentQuestion = 0;
let score = 0;
let incorrect = 0;
let username = '';

/* Base code for local storage: 
https://blog.logrocket.com/localstorage-javascript-complete-guide/#storing-data-browser-with-localstorage */

let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let questionAnswered = false;

/**
 * Initializes the quiz by calling the showQuestion function and adding event listeners to each button
 */
function initializeQuiz() {
    showQuestion();

    answerButtons.forEach((button) => {
        button.addEventListener("click", (event) => handleAnswer(event));
    });

    // Hides the restart quiz button
    fullReset.style.visibility = "hidden";
}

/**
 * Displays a question and potential answers
 */
function showQuestion() {
    const question = quizData[currentQuestion];
    questionArea.textContent = question.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = question.answers[i];
    }
}

/**
 * Checks if the selected answer button is the correct answer
 * Increments the score if correct and the incorrect score if incorrect. Highlights correct answer border and text in green
 * and incorrect in red. After a 4 second delay the next question and answers are shown. 
 */

function handleAnswer(event) {
    if (!isUsernameSubmitted) {
        alert("Please enter a username");
        return;
    }

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;
    const selectedButton = event.target;
    const question = quizData[currentQuestion];
    const selectedAnswer = Array.from(answerButtons).indexOf(selectedButton);

    // Highlights the button and button text green if the correct answer is chosen
    if (selectedAnswer === question.correctAnswer) {
        selectedButton.style.borderColor = "green";
        selectedButton.style.color = "green";
        playSound(true);
        score++;
        updateScore();
    } else {
        // Highlights the button and button text red if the incorrect answer is chosen
        selectedButton.style.borderColor = "red";
        selectedButton.style.color = "red";
        playSound(false);
        incorrect++;
        updateIncorrectCount();
        answerButtons[question.correctAnswer].style.borderColor = "green";
        answerButtons[question.correctAnswer].style.color = "green";
    }
// Sets delay between answerting the question and showing the next one
    setTimeout(() => {
        answerButtons.forEach((button) => {
            button.style.borderColor = "";
            button.style.color = "";
        });

        currentQuestion++;
        questionAnswered = false;

        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showFinalScore();
        }

        // Hide good luck message after the first button is clicked
        const label = document.getElementById("label");
        label.style.display = "none";
    }, 4000);
}

/**
 * Updates the score on the page
 */
function updateScore() {
    scoreElement.textContent = score;
}

/**
 * Updates incorrect score on the page
 */
function updateIncorrectCount() {
    incorrectCountArea.textContent = incorrect;
}

/**
 * Shows the final score at the end of the quiz
 * Updates high score if the current score is higher than the previous high score.
 * Provides message that the quiz is over and shows restart quiz button.
 */

/* Code base to reset quiz taken from https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button */

function showFinalScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }

    questionArea.textContent = `Quiz Finished!\nYour Score: ${score}/${quizData.length}`;
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore.toString();

    fullReset.style.visibility = "visible";
    buttonContainer.style.visibility = "hidden";

    playSoundFinish();

    fullReset.addEventListener("click", function (e) {
        playSoundRestart();
        location.reload();
    }, false);

    updateHighScores(usernameInput.value, score);
}

/** Function to update high scores in local storage */
/* I followed this tutorial to help load and display scores from local storage https://www.youtube.com/watch?v=jfOv18lCMmw */

function updateHighScores(username, score) {
    let highScores = getHighScores();
    highScores.push({
        username,
        score
    });
    // Sort high scores into descending order and keep only the top 3 high scores
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 3);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    showHighScores();
}

/**Function to display high scores and display alongside username in high
 * scores area
 */

function showHighScores() {
    let highScores = getHighScores();
    let highScoreList = document.getElementById('high-score-list');

    // Clear previous high scores
    highScoreList.innerHTML = '';

    // Display top 3 high scores with usernames
    for (let i = 0; i < highScores.length && i < 3; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = listItem.textContent = highScores[i].username + ': ' + highScores[i].score + '/' + quizData.length;
        highScoreList.appendChild(listItem);
    }
}

/** Function to get high scores from local storage */

function getHighScores() {
    let highScores = localStorage.getItem('highScores');
    return highScores ? JSON.parse(highScores) : [];
}

// Display highscore from local storage 

showHighScores();

// Calls the initialization function

initializeQuiz();

