//Code for light/dark theme

const setTheme = theme => document.documentElement.className = theme;

//Hamburger menu sound effect

function playMenuSound() {
    var menuSound = document.getElementById("menuSound");
    menuSound.currentTime = 0;
    menuSound.play();
}

//Hamburger settings menu

let toggleMenu = document.getElementById("settingsMenu");
/**
 * Hamburgermenu toggle to open and close
 */
function openMenu() {
    toggleMenu.style.display = "block";
    playMenuSound();
}

function closeMenu() {
    toggleMenu.style.display = "none";
    playMenuSound();
}


// Submit username function
let submit = document.getElementById('submit');

submit.addEventListener('click', setUsername);

function setUsername() {
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter your name!');
    } else {
        localStorage.setItem('name', username);
        submit.style.display = 'none';
        usernameInput.style.display = 'none';
        let label = document.getElementById('label');
        label.textContent = `Good Luck, ${username}!`;
        showHighScores();
    }
}

// Function to display high scores
function showHighScores() {
    let highScores = getHighScores();
    let highScoreList = document.getElementById('high-score-list');

    // Clear previous high scores
    highScoreList.innerHTML = '';

    // Display top 3 high scores with usernames
    for (let i = 0; i < highScores.length && i < 3; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `${highScores[i].username}: ${highScores[i].score}`;
        highScoreList.appendChild(listItem);
    }
}

// Function to get high scores from local storage
function getHighScores() {
    let highScores = localStorage.getItem('highScores');
    return highScores ? JSON.parse(highScores) : [];
}

// Function to update high scores in local storage
function updateHighScores(username, score) {
    let highScores = getHighScores();
    highScores.push({
        username,
        score
    });
    highScores.sort((a, b) => b.score - a.score); // Sort high scores in descending order
    highScores = highScores.slice(0, 3); // Keep only the top 3 high scores
    localStorage.setItem('highScores', JSON.stringify(highScores));
}




// Array containing questions, answers and correct answers
const quizData = [{
        question: 'Who is the steward of Gondor before Aragorn returns to claim the throne?',
        answers: ['Denethor', 'Theoden', 'Boromir', 'Sauron'],
        correctAnswer: 0
    },
    {
        question: 'Who is the steward of the Ring who succumbs to its power and attempts to take it for himself?',
        answers: ['Boromir', 'Faramir', 'Gimli', 'Frodo'],
        correctAnswer: 0
    },
    {
        question: `What is the name of the Shire's capital, where the hobbits reside?`,
        answers: ['Longbottom', 'Hardbottle', 'Bree', 'Hobbiton'],
        correctAnswer: 3
    },
    {
        question: "What is the name of the horse given to Aragorn by Rohan's king?",
        answers: ['Shadowfax', 'Brego', 'Hasufel', 'Asfaloth'],
        correctAnswer: 1
    },
    {
        question: 'Who was the founder of Rohan?',
        answers: ['Theoden', 'King Eorl', 'Halbrand', 'Aragorn'],
        correctAnswer: 1
    },
    {
        question: 'Who is the wizard known as the Grey Pilgrim?',
        answers: ['Gandalf', 'Radagast', 'Saruman', 'Alatar'],
        correctAnswer: 0
    },
    {
        question: 'What is the name of the mountain where the One Ring is destroyed?',
        answers: ['Erebor', 'Mount Doom', 'Mount Gundabad', 'Thangorodrim'],
        correctAnswer: 1
    },
    {
        question: 'Which character famously says, "Not all those who wander are lost"?',
        answers: ['Gandalf', 'Legolas', 'Aragorn', 'Sam'],
        correctAnswer: 2
    },
    {
        question: 'What is the name of the ancient language spoken by the elves in Middle-earth?',
        answers: ['Quenya', 'Eltharin', 'Ellylon', 'Sindarin'],
        correctAnswer: 3
    },
    {
        question: 'What is the language of Mordor, spoken by Sauron and his servants?',
        answers: ['Black Speech', 'Black Tongue', 'Dark Speech', 'Dark Tongue'],
        correctAnswer: 0
    },
    {
        question: 'What is the elvish city that serves as a refuge for the Fellowship in "The Fellowship of the Ring"?',
        answers: ['The Woodland Realm', 'Rivendell', 'Gondolin', 'Grey Havens'],
        correctAnswer: 1
    },
    {
        question: `What is Legolas's surname?`,
        answers: ['Netyoive', 'Greenleaf', 'Floshem', 'Mirkwood'],
        correctAnswer: 1

    },
    {
        question: 'What is the name of the river that flows through Gondor and is guarded by the fortress of Osgiliath?',
        answers: ['Bruinen', 'Glanduin', 'Carnen', 'Anduin'],
        correctAnswer: 3
    },
    {
        question: 'Who is the leader of the Nazgûl?',
        answers: ['Sauron', 'Saruman', 'The Mouth Of Sauron', 'The Witch-King of Angmar'],
        correctAnswer: 3
    },
    {
        question: 'What is the name of the fortress city ruled by the steward Denethor in Gondor?',
        answers: ['Osgiliath', 'Minas Tirith', 'Minas Morgul', 'Umbar'],
        correctAnswer: 1
    },
    {
        question: 'What is the name of the elf who forges the rings of power in Eregion?',
        answers: ['Celebrimbor', 'Annatar', 'Elrond', 'Arondir'],
        correctAnswer: 0

    },
    {
        question: 'What is the name of the horse ridden by Gandalf?',
        answers: ['Asfaloth', 'Arod', 'Shadowfax', 'Snowmane'],
        correctAnswer: 2
    },
    {
        question: 'What is the name of the evil spider-like creature that captures Frodo?',
        answers: ['Ungoliant', 'Shelob', 'Attercop', 'Cingwin'],
        correctAnswer: 1
    },
    {
        question: 'What is the name of the fortress that serves as the dwelling place of Sauron in Mordor?',
        answers: ['Minas Morgul', 'Mordor', 'Isengard', 'Barad-dûr'],
        correctAnswer: 3
    },
    {
        question: 'What is the name of the kingdom of the dwarves that Thorin Oakenshield seeks to reclaim in "The Hobbit"?',
        answers: ['Erebor', 'Gondor', 'The Shire', 'Rhûn', ],
        correctAnswer: 0

    }
];
// Selection of DOM elements
const questionArea = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const incorrectCountArea = document.getElementById('incorrect-count');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const fullReset = document.getElementById('fullReset');
const buttonContainer = document.getElementById('button-container');

// Set initial variables to 0
let currentQuestion = 0;
let score = 0;
let incorrect = 0;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let questionAnswered = false;

/**
 * Initializes the quiz by calling the showQuestion function and adding event listeners to each button
 */
function initializeQuiz() {
    showQuestion();

    answerButtons.forEach((button) => {
        button.addEventListener('click', (event) => handleAnswer(event));

    });

    // Hides the restart quiz button
    fullReset.style.visibility = 'hidden';
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
 * and incorrect in red. After a 3 second delay the next question and answers are shown. 
 */
function handleAnswer(event) {
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;
    const selectedButton = event.target;
    const question = quizData[currentQuestion];
    const selectedAnswer = Array.from(answerButtons).indexOf(selectedButton);

    if (selectedAnswer === question.correctAnswer) {
        selectedButton.style.borderColor = 'green';
        selectedButton.style.color = 'green';
        playSound(true);
        score++;
        updateScore();

    } else {
        selectedButton.style.borderColor = 'red';
        selectedButton.style.color = 'red';
        playSound(false);
        incorrect++;
        updateIncorrectCount();
        answerButtons[question.correctAnswer].style.borderColor = 'green';
        answerButtons[question.correctAnswer].style.color = 'green';

    }



    setTimeout(() => {
        answerButtons.forEach((button) => {
            button.style.borderColor = '';
            button.style.color = '';
            button.disabled = false;
        });

        currentQuestion++;
        questionAnswered = false;

        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 100);
}

// Function to play sound based on correct/incorrect answer
function playSound(correct) {
    var soundFiles = [];

    if (correct) {
        soundFiles = [
            'assets/audio/Voicy_Not_bad.mp3',
            'assets/audio/even-the-smallest-person-can-change-the-course-of-the-future.mp3',
            'assets/audio/you-are-full-of-surprises-master-baggins.mp3',
            'assets/audio/opening-144757.mp3',
            'assets/audio/tada-fanfare-a-6313.mp3',

        ];
    } else {
        soundFiles = [
            'assets/audio/Voicy_Fool_of_a_Took.mp3',
            'assets/audio/Voicy_Nobody_likes_you.mp3',
            'assets/audio/Voicy_What_do_you_mean.mp3',
            'assets/audio/you-are-sure-of-this-b4f.mp3',
            'assets/audio/fail-144746.mp3',
            'assets/audio/failure-drum-sound-effect-2-7184.mp3'

        ];
    }

    var soundFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];
    var audio = new Audio(soundFile);
    audio.play();
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
function showFinalScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }

    questionArea.textContent = `Quiz Finished!\nYour Score: ${score}/${quizData.length}`;
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore.toString();

    fullReset.style.visibility = 'visible';
    buttonContainer.style.visibility = 'hidden';

    playSoundFinish();

    fullReset.addEventListener('click', function (e) {
        playSoundRestart();
        location.reload();
    }, false);

}
// Song to play when quiz finished
function playSoundFinish() {
    var soundFile = 'assets/audio/three-hunters-lotr-by-voicemod.mp3';
    var audio = new Audio(soundFile);
    audio.play();
}

//Sound effect when restart button is clicked
function playSoundRestart() {
    var soundFile = 'assets/audio/sword_effect.mp3'; //
    var audio = new Audio(soundFile);
    audio.play();
}




// Display highscore from local storage 

highScoreElement.textContent = highScore.toString();


// Calls the initialization function

initializeQuiz();