// function play() {
//     //hide the home screen , to hide screen add the class hidden to the home section:
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyBoardUpEvent(e) {
    const playerPressedKey = e.key;
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressedKey === expectedAlphabet) {
        console.log('you got point');
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    } else {
        console.log('you are wrong');
    }
}

document.addEventListener('keyup', handleKeyBoardUpEvent)



function continueGame() {
    // Generate a random alphabet:
    const alphabet = getARandomAlphabet();

    //set randomly generated alphabet to the screen (show it):
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement);
    // console.log(alphabet); 
    currentAlphabetElement.innerText = alphabet;

    //set backgroundColor
    addBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}