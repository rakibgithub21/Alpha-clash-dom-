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
    //stop the game if pressed 'Esc'
    if (playerPressedKey === 'Escape') {
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressedKey === expectedAlphabet) {
        //update score:
        //1.get the current score:
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // //2.increase the score by 1
        // const newScore = currentScore + 1;
        // //3.show the update score
        // currentScoreElement.innerText = newScore
        // -----------------------------------------------------
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)


        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    } else {
        // //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife - 1;
        // //step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
        // ----------------------------------------
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)


        if (updatedLife === 0) {
            gameOver()
        }

    }
}

document.addEventListener('keyup', handleKeyBoardUpEvent)



function continueGame() {
    
    const alphabet = getARandomAlphabet();

    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    
    currentAlphabetElement.innerText = alphabet;

    
    addBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame()
}




function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')
   
    
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)
    const currentAlphabet = getElementTextById('current-alphabet');
   
    removeBackgroundColorById(currentAlphabet)
}