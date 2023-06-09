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
        question: 'Who is the founder and of Rohan?',
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
        question: 'What is the name of the fortress and city ruled by the steward Denethor in Gondor?',
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
var fullReset = document.getElementById('fullReset');
let buttonContainer = document.getElementById('button-container');




// Set initial variables to 0
let currentQuestion = 0;
let score = 0;
let incorrect = 0;
let highScore = 0;

/**
 * Initialises the quiz by calling the showQuestion function and adds event listeners to each button
 */

function initializeQuiz() {
    showQuestion();
    answerButtons.forEach((button) => {
        button.addEventListener('click', (event) => handleAnswer(event));
    });
// Hides the restart quiz button

  fullReset.style.visibility = 'hidden';
}
/** Displays a question and potential answers
 * 
 */
function showQuestion() {
    const question = quizData[currentQuestion];
    questionArea.textContent = question.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = question.answers[i];
    }
}
/**Checks if the selected answer button is the correct answer
 * Increments the score if correct and the incorrect score if incorrect. Moves to the next question after clicking
 * 
 */
function handleAnswer(event) {
    const selectedButton = event.target;
    const question = quizData[currentQuestion];
    const selectedAnswer = Array.from(answerButtons).indexOf(selectedButton);

    if (selectedAnswer === question.correctAnswer) {
        score++;
        updateScore();
    } else {
        incorrect++;
        updateIncorrectCount();
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}
// Updates the score on the page
function updateScore() {
    scoreElement.textContent = score;
}
// Updates incorrect score on the page
function updateIncorrectCount() {
    incorrectCountArea.textContent = incorrect;
}

// Updates highscore if the current score is higher than the previous highscore
function showFinalScore() {
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }

    questionArea.textContent = `Quiz Finished!\nYour Score: ${score}/${quizData.length}`;

// Shows the restart quiz button and adds event listener so that quiz can be reloaded 
    fullReset.style.visibility = 'visible';
    buttonContainer.style.visibility = 'hidden';

    fullReset.addEventListener('click', function (e) {
        location.reload();
    }, false);

}



initializeQuiz();