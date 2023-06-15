//Submit username function

let isUsernameSubmitted = false;
submit.addEventListener('click', setUsername);

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