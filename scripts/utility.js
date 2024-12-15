function hiddenElementById(elementId){
    const play = document.getElementById(elementId);
    play.classList.add('hidden')
}

function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function setKbdBackgroundColor(elementId){
    const color = document.getElementById(elementId);
    color.classList.add('bg-orange-500')
}
function removeKbdBackgroundColor(elementId){
    const color = document.getElementById(elementId);
    color.classList.remove('bg-orange-500')
}

function getElementTextById(elementId){
    const lastText = document.getElementById(elementId);
    const showLastText = lastText.innerText;
    return showLastText;
}

function getTextValueById(elementId){
    const textValue = document.getElementById(elementId);
    const valueText = textValue.innerText;
    const value = parseInt(valueText);
    return value;
}
function setTextvalueById(elementId,value){
    const textValue = document.getElementById(elementId);
    textValue.innerText = value;

}


function gameLoopContinue(){
    const alphabetString = 'abcdefghijklmnopqrstwxyz';
    const alphabets = alphabetString.split('')
    
    const randomNum = Math.random()*25;
    const indexIntergerNum = Math.round(randomNum);
    
    const alphabet = alphabets[indexIntergerNum];
    return alphabet;
    
}