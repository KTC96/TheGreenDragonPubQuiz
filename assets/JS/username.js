//Submit username 

let isUsernameSubmitted = false;
submit.addEventListener('click', setUsername);

/** Function to allow user to set a username, allows user to select answer buttons
 * once submitted and displays a good luck message
 */

// Base information for code taken from: https://stackoverflow.com/questions/58750774/ask-user-enter-name-with-javascript-and-html

function setUsername() {
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter your name!');
    } else {
        localStorage.setItem('name', username);
        isUsernameSubmitted = true; 
        submit.style.display = 'none';
        usernameInput.style.display = 'none';
        let label = document.getElementById('label');
        label.textContent = `Good Luck, ${username}!`;
        showHighScores();
    }
}