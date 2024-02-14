// function play() {
//     //hide the home screen , to hide screen add the class hidden to the home section:
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyBoardUpEvent(e) {
    const playerPressed = e.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(expectedAlphabet, playerPressed);

    if (playerPressed === expectedAlphabet) {
        console.log('You got a point');
    }
    else {
        console.log('You lost a life');
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