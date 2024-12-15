function gameLoop(){
   const alphabet = gameLoopContinue();
   console.log(alphabet);

   const screenWord = document.getElementById('screen-word');
   screenWord.innerText = alphabet;

   setKbdBackgroundColor(alphabet)

}

function clickAlphabet(e){
    const pressed = e.key;
    console.log(pressed)
    if(pressed === 'Escape'){
        finishGame()
    }
    
    const currentWord = document.getElementById('screen-word');
    const word =  currentWord.innerText;

    

    if(pressed === word.toLowerCase()){
        // const currentScore = document.getElementById('current-score');
        // const scoreText = currentScore.innerText;
        // const intScoreText = parseInt(scoreText);

        // const newFinalScore = intScoreText + 1;

        // currentScore.innerText = newFinalScore;

        const currentScore = getTextValueById('current-score');
        const updateValue = currentScore + 1;
        console.log(updateValue)
        setTextvalueById('current-score',updateValue);

        removeKbdBackgroundColor(word.toLowerCase())
        gameLoop()
    }
    else{

        const currentLife = getTextValueById('current-life');
        const updateLife = currentLife - 1;
        setTextvalueById('current-life',updateLife);

        if(updateLife === 0){
            finishGame();
        }
        // const currentLife = document.getElementById('current-life');
        // const lifeText = currentLife.innerText;
        // const intLifeText = parseInt(lifeText);

        // const newFinalLife = intLifeText - 1;
        // currentLife.innerText = newFinalLife;
    }
}

document.addEventListener('keyup',clickAlphabet)

function enterPlay(){
    hiddenElementById('play-start');
    hiddenElementById('score')
    showElementById('play-ground');
    setTextvalueById('current-life',5);
    setTextvalueById('current-score',0)
    gameLoop();
}


function finishGame(){
    hiddenElementById('play-ground');
    showElementById('score');
    const finalScore = getTextValueById('current-score');
    setTextvalueById('final-score',finalScore);

    const screenWord = getElementTextById('screen-word');
    removeKbdBackgroundColor(screenWord);
    
}