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



   
    const questions = [`Who is the steward of Gondor before Aragorn returns to claim the throne?`, `What is the name of the horse given to Aragorn by Rohan's king?`, `Who is the steward of the Ring who succumbs to its power and attempts to take it for himself?`, `What is the name of the Shire's capital, where the hobbits reside?`, `Who is the founder and of Rohan?`,`Who is the wizard known as the Grey Pilgrim?`,`What is the name of the mountain where the One Ring is destroyed?`,`Which character famously says, "Not all those who wander are lost"?`,`What is the name of the ancient language spoken by the elves in Middle-earth?`,`What is the language of Mordor, spoken by Sauron and his servants?`,`What is the elvish city that serves as a refuge for the Fellowship in "The Fellowship of the Ring"`,`What is Legolas's surname?`,`What is the name of the river that flows through Gondor and is guarded by the fortress of Osgiliath?`,`Who is the leader of the Nazgûl?`,`What is the name of the fortress and city ruled by the steward Denethor in Gondor?`,`What is the name of the elf who forges the rings of power in Eregion?`,`What is the name of the horse ridden by Gandalf?`,`What is the name of the evil spider-like creature that captures Frodo?`,` What is the name of the fortress that serves as the dwelling place of Sauron in Mordor?`,`What is the name of the kingdom of the dwarves that Thorin Oakenshield seeks to reclaim in "The Hobbit"?`];

    
    const questionAnswers = [
        ['Denethor', 'Theoden', 'Boromir', 'Sauron'],
        ['Brego', 'Shadowfax', 'Hasufel', 'Asfaloth'],
        ['Boromir', 'Faramir', 'Gimli', 'Frodo'],
        ['Hobbiton', 'Bree', 'Longbottom', 'Hardbottle'],
        ['King Eorl', 'Theoden', 'Halbrand', 'Aragorn'],
        ['Gandalf', 'Radagast', 'Saruman', 'Alatar'],
        ['Mount Doom', 'Erebor', 'Mount Gundabad', 'Thangorodrim'],
        ['Aragorn', 'Gandalf', 'Legolas', 'Sam'],
        ['Sindarin', 'Quenya', 'Ellylon', 'Eltharin'],
        ['Black Speech', 'Black Tongue', 'Dark Speech', 'Dark Tongue'],
        ['Rivendell', 'The Woodland Realm', 'Gondolin', 'Grey Havens'],
        ['Greenleaf', 'Netyoive', 'Floshem', 'Mirkwood'],
        ['Anduin', 'Bruinen', 'Glanduin', 'Carnen'],
        ['The Witch-King of Angmar', 'Sauron', 'The Mouth Of Sauron', 'Saruman'],
        ['Minas Tirith', 'Osgiliath', 'Minas Morgul', 'Umbar'],
        ['Celibrimbor', 'Annatar', 'Elrond', 'Arondir'],
        ['Shadowfax', 'Asfaloth', 'Arod', 'Snowmane'],
        ['Shelob', 'Ungoliant', 'Attercop', 'Cingwin'],
        ['Barad-dur', 'Minis Morgul', 'Mordor', 'Isengard'],
        ['Erebor', 'Gondor', 'The Shire', 'Rhûn']
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