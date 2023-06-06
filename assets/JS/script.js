document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }




    runGame();



});

function displayQuestionAndAnswers() {



   
    const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5','Question 6','Question 7','Question 8','Question 9','Question 10','Question 11','Question 12','Question 13','Question 14','Question 15','Question 16','Question 17','Question 18','Question 19','Question 20'];

    
    const questionAnswers = [
        ['Answer 1A', 'Answer 1B', 'Answer 1C', 'Answer 1D'],
        ['Answer 2A', 'Answer 2B', 'Answer 2C', 'Answer 2D'],
        ['Answer 3A', 'Answer 3B', 'Answer 3C', 'Answer 3D'],
        ['Answer 4A', 'Answer 4B', 'Answer 4C', 'Answer 4D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D'],
        ['Answer 5A', 'Answer 5B', 'Answer 5C', 'Answer 5D']
    ];


    const usedQuestions = [];

    function displayQuestionAndAnswers() {

        if (usedQuestions.length === questions.length) {
            const questionArea = document.getElementById('question-area');
            questionArea.textContent = 'You have completed the quiz';
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (usedQuestions.includes(randomIndex));


        usedQuestions.push(randomIndex);

        const questionArea = document.getElementById('question-area');


        questionArea.textContent = questions[randomIndex];


        const buttonContainer = document.getElementById('button-container');


        buttonContainer.innerHTML = '';


        const answers = questionAnswers[randomIndex];


        const shuffledAnswers = shuffleArray([...answers]);


        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'answer-button';
            buttonContainer.appendChild(button);
        });
    }


    displayQuestionAndAnswers();


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }



}

displayQuestionAndAnswers();