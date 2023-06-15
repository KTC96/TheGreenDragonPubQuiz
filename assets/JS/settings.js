//Code for light/dark theme
// Code base taken from:  https://webdesign.tutsplus.com/tutorials/color-schemes-with-css-variables-and-javascript--cms-36989

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
    var audio = new Audio(soundFile);
    audio.play();
}