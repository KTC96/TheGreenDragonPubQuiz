//Code for light/dark theme
// Code base taken from:  https://webdesign.tutsplus.com/tutorials/color-schemes-with-css-variables-and-javascript--cms-36989

// Sets theme on html element and saves to local storage
const setTheme = theme => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
};


//Retrieve theme preference from local storage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}



//Hamburger menu sound effect

var audioOn = true;
var audio = null;



function playMenuSound() {
    if (audioOn) {
        var menuSound = document.getElementById("menuSound");
        menuSound.currentTime = 0;
        menuSound.play();
    }
}

// Selecting DOM elements for settings menu active states

var soundButtons = document.querySelectorAll('.sound-btn');
var themeButtons = document.querySelectorAll('.theme-btn');

// Add active state to sound buttons on page load
soundButtons.forEach(function (button) {
    if (button.id === 'on') {
        button.classList.add('active');
    }
});

// Add active state to theme buttons on page load
themeButtons.forEach(function (button) {
    if (button.classList.contains(savedTheme)) {
        button.classList.add('active');
    }
});


// Attach event listeners to handle sound button clicks
soundButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        soundButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        highlightActiveSoundButton(); // Call the function to highlight the active sound button
    });
});


// Attach event listeners to handle theme button clicks

themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (!button.classList.contains('active')) {
            const currentActiveSoundButton = document.querySelector('.sound-btn.active');
            resetSoundButtons();
            themeButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            highlightActiveThemeButton();
            if (currentActiveSoundButton) {
                currentActiveSoundButton.classList.add('active');
                highlightActiveSoundButton();
            }
        }
    });
});

// Reset sound buttons' active state when changing theme
function resetSoundButtons() {
    soundButtons.forEach(function (button) {
        button.classList.remove('active');
    });
    highlightActiveSoundButton();
}

// Toggle sound on
function soundOn() {
    audioOn = true;
    soundButtons.forEach(function (button) {
        if (button.id === 'on') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Toggle sound off
function soundOff() {
    audioOn = false;
    soundButtons.forEach(function (button) {
        if (button.id === 'off') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Function to highlight the active sound button
function highlightActiveSoundButton() {
    soundButtons.forEach(function (button) {
        if (button.classList.contains('active')) {
            button.style.backgroundColor = 'grey';
        } else {
            button.style.backgroundColor = '';
        }
    });
}
// Function to highlight the active theme button
function highlightActiveThemeButton() {
    themeButtons.forEach(function (button) {
        if (button.classList.contains('active')) {
            button.style.backgroundColor = 'grey';
        } else {
            button.style.backgroundColor = '';
        }
    });
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



/**  Function to play sound based on correct/incorrect answer*/
/* Code base information: 
https://stackoverflow.com/questions/74215959/how-can-i-use-javascript-to-play-a-random-audio-on-click */

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
    audio = new Audio(soundFile);
    if (audioOn) {
        audio.play();

    }
}

/** retrieves the current theme from the class name property of the html, checks and sets new theme */
function toggleTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}